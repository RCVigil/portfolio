export default function sitemap() {
  return [
    {
      url: 'https://portfolio-cuervo.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://portfolio-cuervo.vercel.app/projetosFull',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}