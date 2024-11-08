import Layout from '../../hocs/layouts/Layout'
import Header from '../../components/careers/Header'
import React, { useEffect } from 'react'
import Testimonial from '../../components/careers/Testimonial'
import Features from '../../components/careers/Features'
import PositionsList from '../../components/careers/PositionsList'
import SeoHelmet from '../../components/seo/SeoHelmet'

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <SeoHelmet
        title="Studio | Carreras"
        description="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones."
        keywords="agencia de software, agencia de marketing, creacion de pagina web"
        image="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        url="https://mapache.com"
      />
      <Header/>
      <Testimonial/>
      <Features/>
      <PositionsList/>
    </Layout>
  )
}

export default Careers