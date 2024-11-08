import React from 'react'
import { Helmet } from 'react-helmet-async'

const SeoHelmet = ({title, description, keywords, image, url}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content='all' />
        {/* url de tu pagina */}
        <link rel="canonical" href={url} /> 
        <meta name="author" content='Mapache' />
        <meta name="publisher" content='Mapache' />

        {/* Social Media Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
  )
}

export default SeoHelmet;
