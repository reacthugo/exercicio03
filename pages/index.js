import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='hero'>
      <h1 className='title'>Exercicio 02</h1>
      <p className='description'>
        Criar uma página que receba um parâmetro dinâmico na URL, que será util nossa API. Em seguida, listar todos os posts recuperados da requisição
      </p>

      <div className='row'>
        <Link href='api/discussions/javascript'>
          <a className='card'>
            <h3>Diretamente Discussions &rarr;</h3>
            <p>Realizando a requisição diretamente</p>
          </a>
        </Link>
        <Link href='#'>
          <a className='card'>
            <h3>Componente &rarr;</h3>
            <p>Chamando a </p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
