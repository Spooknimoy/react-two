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



          <Col md={9}>

            <strong><p> Data do filme: {filme.release_date}</p>
              <p> Orçamento: {filme.budget}</p>
              <p> Duração: {filme.budget}</p>

              <p>Nota: {filme.vote_average}</p>
              <div>
                <strong>Generos: </strong>
                <ul>
                  {filme.genres.map(item => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              </div>
            </strong>
            <strong><p>Sobre o Filmes:</p> </strong>

            <p>{filme.overview}</p>


          </Col>
        </Row>

        <h1>Atores</h1>

        <Row>

          {atores.map(item => (
            <Col className='mb-3' md={2} title={item.name}>
              <Link href={'/filmes/atores/' + item.id}>
              
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item.profile_path} />
                
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

  const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
  const filme = resultado.data

  const resAtores = await apiFilmes.get('/movie/' + id + '/credits?language=pt-BR')
  const atores = resAtores.data.cast


  return {
    props: { filme, atores },
  }
}


