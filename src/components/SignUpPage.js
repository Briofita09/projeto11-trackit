import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"

export default function LoginPage() {
  const [city, setCity] = useState("BH")
  const [form, setForm] = useState({ name: "", email: "", image: "", password: "" })
  const navigate = useNavigate()

  function handleForm(e) {
    const {name, value} = e.target
    setForm({...form, [name]: value})
    // setForm({...form, [e.target.name]: e.target.value})
  }

  function createAccount() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const body = {...form, city}

    const promise = axios.post(URL, body)

    promise.then((res) => {
      navigate("/")
    })

    promise.catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <Container>
      <BigLogo />

      <Input
        name="name"
        value={form.name}
        onChange={handleForm}
        type="text"
        placeholder="Nome"
      />
      <Input
        name="email"
        value={form.email}
        onChange={handleForm}
        type="text"
        placeholder="E-mail"
      />
      <Input
        name="image"
        value={form.image}
        onChange={handleForm}
        type="text"
        placeholder="Imagem"
      />
      <Input
        name="password"
        value={form.password}
        onChange={handleForm}
        type="password"
        placeholder="Senha"
      />
      <Grid>
        <Button active={city === 'BH'} onClick={() => setCity("BH")}>BH</Button>
        <Button active={city === 'RJ'} onClick={() => setCity("RJ")}>RJ</Button>
        <Button active={city === 'SP'} onClick={() => setCity("SP")}>SP</Button>
      </Grid>
      <Button onClick={createAccount}>Cadastrar</Button>
      <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F60919;
`

const Grid = styled.div`
  display: flex;
  width: 100%;

  *:not(:last-child) {
    margin-right: 10px;
  }
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`