import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import UserContext from "../contexts/UserContext"
import GlobalStyle from "../styles/GlobalStyle"
import LoginPage from "./LoginPage"
import MarketPage from "./MarketPage"
import SignUpPage from "./SignUpPage"

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  // Passo 2: criar o provider e passar o valor que eu quero

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AuthContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/market" element={<MarketPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </UserContext.Provider>
  )
}

export default App