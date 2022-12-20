import styled from "styled-components"

import SmallLogo from "./SmallLogo"
import User from "./User"

export default function TopBar() {

  return (
    <Container>
      <SmallLogo />
      <User />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`