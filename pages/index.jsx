import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Tooltip } from '@mui/material'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>ZeBrands Test</title>
        <meta name="description" content="ZeBrands Test By Alex Paredes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.searchButtons}>
        <h1>Welcome to GitSearch</h1>
        <div className={styles.options}>
          <Link href={"/searchByUsername"}>
            <Tooltip arrow title="Use username">
              <div className={`${styles.option}`}>
                <Image src={require('../assets/repository.png')} />
                <h2>Search by username</h2>
              </div>
            </Tooltip>
          </Link>
          <Link href={"/searchByRepository"}>
            <Tooltip arrow title="Use repository name">
              <div className={`${styles.option}`}>
                <Image src={require('../assets/username.png')} />
                <h2>Search by repository</h2>
              </div>
            </Tooltip>
          </Link>
        </div>
      </section>
      <section>
        <h1>Buscaras todo lo necesario</h1>
      </section>
    </React.Fragment>
  )
}
