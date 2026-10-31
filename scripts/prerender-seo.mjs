import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {createServer} from 'vite'
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const dist=path.join(root,'dist')
const site='https://shippinexpress.com'
const homeTitle='Jasa Import All-in ke Indonesia | Shippin Express'
const homeDesc='Jasa import all-in dari Korea, China, Australia, dan Singapore. Harga kirim termasuk bea masuk dan pajak; pengantaran area Jakarta gratis. Minimum 1 kg atau 10 kg sesuai rute.'
const org={'@type':'Organization','@id':site+'/#organization',name:'Shippin Express',url:site+'/',logo:site+'/logo.png',telephone:'+62 815-1123-3838',description:homeDesc,areaServed:{'@type':'Country',name:'Indonesia'},contactPoint:{'@type':'ContactPoint',telephone:'+62 815-1123-3838',contactType:'sales',availableLanguage:'Indonesian'}}
const pages=[{path:'/',title:homeTitle,description:homeDesc,kind:'home'},{path:'/pricing/',title:'Harga Jasa Import All-in ke Indonesia | Shippin Express',description:'Jasa import all-in dari Korea, China, Australia, dan Singapore. Harga kirim sudah termasuk bea masuk dan pajak, gratis pengantaran area Jakarta. Minimum 1 kg atau 10 kg sesuai rute.',kind:'pricing'}]
let vite
try {
 vite=await createServer({root,configFile:path.join(root,'vite.config.js'),server:{middlewareMode:true},appType:'custom'})
 const {default:App}=await vite.ssrLoadModule('/src/App.jsx')
 const {SERVICES}=await vite.ssrLoadModule('/src/data/services.js')
 for(const service of SERVICES)pages.push({path:'/'+service.slug+'/',title:service.title+' | Shippin Express',description:service.description,kind:'service',service})
 const template=await fs.readFile(path.join(dist,'index.html'),'utf8')
 const esc=(s)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
 const schema=(p)=>{
  if(p.kind==='home')return {'@context':'https://schema.org','@graph':[org,{'@type':'WebSite','@id':site+'/#website',url:site+'/',name:'Shippin Express',inLanguage:'id-ID',publisher:{'@id':site+'/#organization'}},...SERVICES.map((s)=>({'@type':'Service',name:s.title,description:s.description,url:site+'/'+s.slug+'/',serviceType:'Jasa import barang internasional',provider:{'@id':site+'/#organization'},areaServed:{'@type':'Country',name:'Indonesia'}}))]}
  if(p.kind==='service')return {'@context':'https://schema.org','@graph':[org,{'@type':'Service',name:p.service.title,description:p.description,url:site+p.path,serviceType:'Jasa import barang internasional',provider:{'@id':site+'/#organization'},areaServed:{'@type':'Country',name:'Indonesia'}},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Beranda',item:site+'/'},{'@type':'ListItem',position:2,name:p.service.title,item:site+p.path}]}]}
  return {'@context':'https://schema.org','@type':'WebPage',name:p.title,description:p.description,url:site+p.path,about:{'@id':site+'/#organization'}}
 }
 for(const p of pages){
  const markup=renderToString(React.createElement(App,{pathname:p.path}))
  const canonical=site+p.path
  let html=template
  html=html.replace(/<title id="page-title">[\s\S]*?<\/title>/,'<title id="page-title">'+esc(p.title)+'</title>')
  html=html.replace(/<meta id="meta-description"[^>]*>/,'<meta id="meta-description" name="description" content="'+esc(p.description)+'" />')
  html=html.replace(/<link id="canonical-url"[^>]*>/,'<link id="canonical-url" rel="canonical" href="'+canonical+'" />')
  html=html.replace(/<meta id="og-title"[^>]*>/,'<meta id="og-title" property="og:title" content="'+esc(p.title)+'" />')
  html=html.replace(/<meta id="og-description"[^>]*>/,'<meta id="og-description" property="og:description" content="'+esc(p.description)+'" />')
  html=html.replace(/<meta id="og-url"[^>]*>/,'<meta id="og-url" property="og:url" content="'+canonical+'" />')
  html=html.replace(/<meta id="twitter-title"[^>]*>/,'<meta id="twitter-title" name="twitter:title" content="'+esc(p.title)+'" />')
  html=html.replace(/<meta id="twitter-description"[^>]*>/,'<meta id="twitter-description" name="twitter:description" content="'+esc(p.description)+'" />')
  html=html.replace(/<script id="page-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,'<script id="page-structured-data" type="application/ld+json">'+JSON.stringify(schema(p)).replaceAll('<','\\u003c')+'</script>')
  html=html.replace('<div id="root"></div>','<div id="root">'+markup+'</div>')
  const output=p.path==='/'?path.join(dist,'index.html'):path.join(dist,p.path.slice(1),'index.html')
  await fs.mkdir(path.dirname(output),{recursive:true})
  await fs.writeFile(output,html,'utf8')
 }
 console.log('Prerendered '+pages.length+' indexable pages.')
} finally {if(vite)await vite.close()}
