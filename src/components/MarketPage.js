import styled from "styled-components"

import FloatingCartButton from "./FloatingCartButton"
import Location from "./Location"
import Item from "./Item"
import TopBar from "./TopBar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"

export default function MarketPage() {
  const [products, setProducts] = useState([])
  // Passo 3: consumir a informação do contexto
  const {token} = useContext(AuthContext)

  useEffect(() => {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setProducts(res.data)
    })

    promise.catch((err) => console.log(err.response.data))
  }, [token])

  return (
    <Container>
      <TopBar />
      <Location />
      {products.map((item) => (
        <Item
          key={item.id}
          title={item.name}
          description={item.description}
          image={item.image}
          price={item.price} />
      ))}
      <FloatingCartButton />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 27px 20px;
  background-color: #F7F7F7;
`