
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import NavBar from './components/navigation/NavBar'
import Footer from './components/navigation/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Studio | Software Studio</title>
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
      <Provider store={store}>
        <Router>
          <NavBar/>
          <AllRoutes/>
          <Footer/>
        </Router>
      </Provider>
    </HelmetProvider>
  )
}

export default App
