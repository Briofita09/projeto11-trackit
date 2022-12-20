import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"
import AuthContext from "../contexts/AuthContext"
import UserContext from "../contexts/UserContext"

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const { setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)

  function handleForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    // setForm({...form, [e.target.name]: e.target.value})
  }

  function login() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const promise = axios.post(URL, form)

    promise.then((res) => {
      setToken(res.data.token)
      setUser(res.data)
      navigate("/market")
    })

    promise.catch((err) => alert(err.response.data.message))

  }

  return (
    <Container>
      <BigLogo />
      <Input
        name="email"
        value={form.email}
        onChange={handleForm}
        type="text"
        placeholder="E-mail"
      />
      <Input
        name="password"
        value={form.password}
        onChange={handleForm}
        type="password"
        placeholder="Senha"
      />
      <Button onClick={login}>Entrar</Button>
      <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
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

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`