import Pagina from '@/Component/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'

const Detalhes = ({filme}) => {


    const pessoa ={nome: 'luan', telefone: '61986374029', endereço:'qnp 10 '}
    
    
    // const {nome, telefone } =pessoa

    // const nome = pessoa.nome
    // const telefone = pessoa.telefone

  return (


    <>
    <Pagina titulo={filme.title}>
        <div>
            Detalhes
        </div>
    </Pagina>
    </>
  )
}

export default Detalhes


export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data
  
    // console.log(resultado.data.resuts) para saber qual a variavel
  
    return {
      props: { filme },
    }
  }





