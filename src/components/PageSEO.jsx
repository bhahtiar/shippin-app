import { useEffect } from 'react'
export default function PageSEO({title,description,canonicalUrl,structuredData}) {
  useEffect(() => {
    document.title=title
    const meta=(selector,key,value)=>{let el=document.head.querySelector(selector);if(!el){el=document.createElement('meta');document.head.appendChild(el)}el.setAttribute(key,value)}
    meta('meta[name="description"]','name','description');meta('meta[name="description"]','content',description)
    meta('meta[property="og:title"]','property','og:title');meta('meta[property="og:title"]','content',title)
    meta('meta[property="og:description"]','property','og:description');meta('meta[property="og:description"]','content',description)
    meta('meta[property="og:url"]','property','og:url');meta('meta[property="og:url"]','content',canonicalUrl)
    meta('meta[name="twitter:title"]','name','twitter:title');meta('meta[name="twitter:title"]','content',title)
    meta('meta[name="twitter:description"]','name','twitter:description');meta('meta[name="twitter:description"]','content',description)
    let link=document.head.querySelector('link[rel="canonical"]');if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}link.href=canonicalUrl
    let schema=document.getElementById('page-structured-data');if(!schema){schema=document.createElement('script');schema.id='page-structured-data';schema.type='application/ld+json';document.head.appendChild(schema)}schema.textContent=JSON.stringify(structuredData)
  },[title,description,canonicalUrl,structuredData])
  return null
}