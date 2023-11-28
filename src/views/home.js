import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Slushy Simplistic Llama</title>
        <meta property="og:title" content="Slushy Simplistic Llama" />
      </Helmet>
      <span className="home-text">realDev</span>
    </div>
  )
}

export default Home
