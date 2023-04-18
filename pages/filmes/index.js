import Pagina from '@/Component/Pagina'
import apiDeputados from '@/services/apiDeputados'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = (props) => {

  

            
  return (
    <>
      <Pagina titulo='filmes'>
      <Row md={4}>

 
             
{props.filmes.map(item => (
    

    <Col>
<Card >
    <Card.Img variant="top" src= { 'https://image.tmdb.org/t/p/w500'+ item.poster_path}/>
    <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
       <p>Lançamento: {item.release_date}</p>
       <p>Popular: {item.vote_average}</p>
       <p>Lançamento</p>
       <p>Lançamento</p>
       <Link className='btn btn-dark' href={'/filmes/' +item.id}> Detalhes</Link>
       
       
    </Card.Body>
</Card>


</Col>


))}
</Row>
      </Pagina>

    </>
  )
}

export default index



export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/top_rated')
  const filmes = resultado.data.results

  // console.log(resultado.data.resuts) para saber qual a variavel

  return {
    props: { filmes },
  }
}