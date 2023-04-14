import Pagina from '@/Component/Pagina'
import apiDeputados from '@/services/apiDeputados'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'

const index = (props) => {

  

            
  return (
    <>
      <Pagina titulo='filmes'>
        {props.filmes.map(item =>(
        <img src={props.filmes}></img> 
        ))}
      </Pagina>

    </>
  )
}

export default index



export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/popular')
  const filmes = resultado.data.results

  // console.log(resultado.data.resuts) para saber qual a variavel

  return {
    props: { filmes },
  }
}