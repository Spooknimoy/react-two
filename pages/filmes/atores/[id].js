import Pagina from '@/Component/Pagina'
import { images } from '@/next.config'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ ator, img, filmes, series }) => {
  return (
    <>
      <Pagina titulo={ator.name}>
        <Row>
          <Col md={3}>
            <Card.Img src={'https://image.tmdb.org/t/p/w500' + ator.profile_path} />
          </Col>

          <Col md={9}>

            <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>

            <p><strong>Local de Nascimento:</strong> {ator.place_of_birth}</p>
            <p>{ator.biography}</p>

          </Col>




        </Row>

        <h1 className='mt-5'>FOTOS: </h1>



        <Row>
          {img.map(item => (
            <Col className='mb-3' md={1}>
              <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500' + item.file_path} />
            </Col>
          ))}
        </Row>




        <h2 className='mt-4'>Filmes que também atuou</h2>

        <Row>
          {filmes.map(item => (
            <Col className='mb-3' md={2} title={item.title}>
              <Link href={'/filmes/' + item.id}>
                <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500' + item.poster_path} />
              </Link>
            </Col>
          ))}
        </Row>




        
        <h2 className='mt-5'>Series que também atuou</h2>

        <Row>
          {series.map(item => (
            <Col className='mb-3' md={2} title={item.title}>
              <Link href={'/filmes/' + item.id}>
                <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500' + item.poster_path} />
              </Link>
            </Col>
          ))}
        </Row>



      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {
  const id = context.params.id

  const resAtor = await apiFilmes.get('/person/' + id + '?language=pt-BR')
  const ator = resAtor.data

  const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
  const filmes = resFilmes.data.cast

  const resImgs = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
  const img = resImgs.data.profiles

  const resSeries = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
  const series = resSeries.data.cast

  return {
    props: { ator, img, filmes, series },
  }
}