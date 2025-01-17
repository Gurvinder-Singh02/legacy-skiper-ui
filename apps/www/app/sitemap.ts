import { docsConfig } from '@/config/docs'
import { MetadataRoute } from 'next'

const DOMAIN = 'https://skiper-ui.com' 

function getAllUrls() {
  const urls: any[] = []
  
  // Add main nav URLs
  docsConfig.mainNav.forEach(item => {
    urls.push(item.href)
  })
  
  // Recursively get all sidebar URLs
  function getSidebarUrls(items: any[]) {
    items.forEach(item => {
      if (item.href) {
        urls.push(item.href)
      }
      if (item.items && item.items.length > 0) {
        getSidebarUrls(item.items)
      }
    })
  }
  
  // Process sidebar navigation
  docsConfig.sidebarNav.forEach(section => {
    if (section.items) {
      getSidebarUrls(section.items)
    }
  })
  
  return urls
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = getAllUrls()
  
  return urls.map(url => ({
    url: `${DOMAIN}${url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: url === '/' ? 1 : 0.8,
  })) as MetadataRoute.Sitemap
}