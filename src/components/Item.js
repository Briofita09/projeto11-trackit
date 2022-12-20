import styled from "styled-components"

import Button from "./Button"

export default function Item({ title, description, image, price }) {
  return (
    <Container>
      <Left>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Price>
          <span>R$</span> {price.toFixed(2).replace(".", ",")}
        </Price>
      </Left>

      <Right>
        <img src={image} alt="produto"/>
        <Button noMargin>Adicionar</Button>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 2px;
  :not(:last-of-type) {
    border-bottom: 1px solid #C4C4C4;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-right: 10px;
`

const Right = styled.div`
  flex-shrink: 0;
  width: 128px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`

const Title = styled.div`
  font-size: 14px;
  color: #F60919;
  margin-bottom: 5px;
`

const Description = styled.div`
  font-size: 12px;
  color: #222222;
`

const Price = styled.div`
  font-size: 14px;
  color: #222222;
  padding-bottom: 10px;

  span {
    color: #F60919;
  }
`