import Layout from '../../hocs/layouts/Layout'
import Header from '../../components/cases/Header'
import React, { useEffect } from 'react'
import CasesList from '../../components/cases/CasesList'
import SeoHelmet from '../../components/seo/SeoHelmet'

const Cases = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <SeoHelmet
        title="Studio | Casos"
        description="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones."
        keywords="agencia de software, agencia de marketing, creacion de pagina web"
        image="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        url="https://mapache.com"
      />
      <Header/>
      <CasesList/>
    </Layout>
  )
}

export default Cases