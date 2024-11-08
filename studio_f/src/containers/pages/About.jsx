import TestStats from '../../components/about/TestStats'
import Header from '../../components/about/Header'
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'
import Images from '../../components/about/Images'
import Clients from '../../components/about/Clients'
import Features from '../../components/about/Features'
import Team from '../../components/about/Team'
import CTA from '../../components/about/CTA'
import { Helmet } from 'react-helmet-async'

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <Helmet>
        <title>Studio | About Us</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        {/* url de tu pagina */}
        <link rel="canonical" href="https://www.mapache.com/" /> 
        <meta name="author" content='Mapache' />
        <meta name="publisher" content='Mapache' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Mapache | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.mapache.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Mapache | Software Agency' />
        <meta name="twitter:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'/>
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header/>
      <TestStats/>
      <Images/>
      <Clients/>
      <Features/>
      <Team/>
      <CTA/>
    </Layout>
  )
}

export default About