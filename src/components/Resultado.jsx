import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`


const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHTDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen 
            src = {`https://cryptocompare.com/${IMAGEURL}`} 
            alt = 'imagen cripto'
        />
        <div>
            <Texto>El precio es de: <span>{PRICE}</span></Texto>
            <Texto>Precio más alto del día: <span>{HIGHTDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto> 
        </div>
        
    </Contenedor>
  )
}

export default Resultado