import Pagina from '@/Component/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Detalhes = ({ filme, atores }) => {




  return (


    <>
      <Pagina titulo={filme.title}>

        <Row>
          <Col md={3}>

            <Card.Img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} />


          </Col>

          </Row>
           
        <Galeria titulo="Filmes que atuou" lista={filmes} fotos="poster_path" />
      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {
  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
  const filme = resultado.data

  const resAtores = await apiFilmes.get('/movie/' + id + '/credits?language=pt-BR')
  const atores = resAtores.data.cast


  return {
    props: { filme, atores },
  }
}


