import { MetadataRoute } from 'next'

export default  function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				crawlDelay: 10,
			}
		],
		sitemap: 'https://www.budvaquad.me/sitemap.xml',
	}
}