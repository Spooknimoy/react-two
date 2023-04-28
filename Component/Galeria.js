import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {
    
    const size = props.size || 2
    const link = props.link || '/filmes'

  return (
    <>

    {
        props.titulo &&
       <h2 className='mt-4'>Titulo: {props.titulo}</h2>

    }

    <Row>
          {props.lista.map(item => (
            <Col className='mb-3' md={size}>
                  <Link  href={link + item.id}>
                    {
                        item[props.fotos]
                        ?
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item[props.fotos]} />
                        :  
                        <Card.Img variant="top" src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8AAAAvLy/Pz89nZ2fLy8sEBASrq6szMzP7+/vr6+ubm5tUVFRjY2OXl5eurq4NDQ3v7++4uLhLS0v19fXDw8NbW1vj4+OHh4c4ODijo6MpKSl7e3sYGBgSEhJWVlba2tpwcHBBQUF9fX28vLyPj49FRUU4KI0oAAAENElEQVR4nO3daVfqMBCA4RRUoIqAbAKyKOj//4kXXI7ZmkyaZUbuvB9b8PQ5BVuaFITgOI7jOI7jOI7jOI7juIbq52m/E9lq+ITNEOtxlaSPCbIjDeNcp8Z01In2B7rkOZ0DVzJNCcGU9JNCECWdtBA8SWoImiQ5BEuSHoIkyQDBkSiQPqyN7yCKIVEg4Gcd3t3/thEk7SDnnja0JK0hYnBDStIe4jlPKy2JgYhXQpIoyMD5li8riYKIWxekrCQO4vkUUFISCRk5ISUlkZDZnfz8l7tKq5wkEqJ+MOv28CSxkAcFIvAksZChCsGTpIagSZJDsCTpIUiSDBAcSQ4IiiQLRIzKS/JAECSZIOUluSDFJdkgpSX5IIUlGSFlJUkhL49q5ufHfJKkEEDZJKUh2STFIdUqueGz8pAqzxwJBMhrcsQlBMgwOeJSLMR5Sd7eTXLEpVjI+7VAlsbR+49CWry2iEJmb1cCEYNj4EwpqpDzTpmv790d/wbE3y1DwDEkKIbAY0hQDIHHkKAYAu//gDxNt+POMehC1PJ1M97u59pSXMhg8bV0F3D9ZvR9Sn8zUBbjQhY/i+9G0L/2O3i4V5ajQnq/y6ESeRB0La9AhcjTZWASZTC3I6/BhEzkFSCJNigt33KFCTkoWwWQ6IPrB2kdJqRWN8srMSYJzKSVqO8Rfaa1W2I4lNEDVMi9tmVOiTlpQ3kw7nFkD5eYDvWSO/KR/aHSapKYjgdKR3awxOvAhgAlfgc6BCQBOPAhAAnEQQDilYAcFCA2SS/UQQLilAAdNCAOCdRBBNIoATuoQBokcAcZiFUS4KADsUkCHIQgFkmAgxLEK3E5SEE8EqeDFsQpcTuIQRwSj4MapFHic5CDNEi8DnoQq8TvIAixfflTz/8sehDzvAR0XZgcxOaASKhB7A6AhBikyXGWeEbnaEGaHV4JKYjL4ZNQgrgdZ8nJ8WRCEJ+jqsYOCR2I5aZV43ugHBIyENPRn9SmRJ/wQA5icwgRICECsTtCJDQgpmP1PYYOlpCANDuskluqEJcDLCEAsTjkmQBACT7EdLzN1EeYkp0pQYf4HVZJV38MNgTiAEmQITAHRIILMW9H/7A6ABJUyMG4darJYZNslbmpqJBFpdXssEmUzcWEDPQdMnVehzMkO3ktoamAHodFspRWEoL4HKaECkR9afkduoTMS0u5CRdwnVpoEjJvdlFvAx2KZCy/spAPiN0fyR7okCTaZS7kU5R6cTm2794D/txs+Hk6sNE+KGKfNIrJqTcH746vlvcvzydyUwFTxRB4DAmKIfAYEhRD4DEkKIbAu05I7E/XNbYpDCkTQxjCEIZEtCoPyfOFky2+ZzG2tX+rWjQv7hhn+pFUYxgkd495HGL2UdaR5x3y2aPzx87S9pb3d4TrbqEcg3ccx3Ecx3Ecx3Ecx3Fc6/4BZE1H5/iW+3cAAAAASUVORK5CYII='} />   
                    }
                  </Link> 
            </Col>
          ))}
        </Row>

     
    </>
  )
}

export default Galeria