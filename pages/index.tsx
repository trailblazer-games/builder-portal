import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eternal Dragons REST API</title>
        <meta name="description" content="Eternal Dragons Builder" />
        <link rel="icon" href="/favicon32x32.png" />
      </Head>

      <main className={styles.main}>
        <h1> Eternal Dragons Builder</h1>
        <div style={{  width: '100%', background: "#f0f8ffcc", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black" }}>
          <SwaggerUI url="/repository.yaml" />
          <SwaggerUI url="/nft.yaml" />
        </div>
      </main>
    </div>
  )
}

export default Home
