import styled from "styled-components"

export default function BigLogo() {
  return (
    <Container>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="#F60919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="#F60919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5H7L10 22H26" stroke="#F60919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18H25.59C25.7056 18.0001 25.8177 17.9601 25.9072 17.8868C25.9966 17.8135 26.0579 17.7115 26.0806 17.5981L27.8806 8.59813C27.8951 8.52555 27.8934 8.45066 27.8755 8.37886C27.8575 8.30705 27.8239 8.24012 27.7769 8.1829C27.73 8.12567 27.6709 8.07959 27.604 8.04796C27.5371 8.01633 27.464 7.99995 27.39 8H8" stroke="#F60919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <div>Camppi</div>
    </Container>
  )
}

const Container = styled.div`
  font-size: 32px;
  font-family: 'Pacifico', cursive;
  color: #F60919;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    bottom: -1.5px;
    right: -2.5px;
    width: 42px;
    height: 42px;
    margin-right: 5px;
  }
`