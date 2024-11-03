import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/about','/intermediate/*','/dae','/campus-facilities','apply-now','/admissions','/contact'],
      disallow: '/private/',
    },
    sitemap: 'https://superiormanga.com/sitemap.xml',
  }
}