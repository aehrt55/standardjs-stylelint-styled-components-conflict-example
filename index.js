import styled from 'styled-compontns'

const Inner = styled.div`
  color: red;
`

const Outer = styled.div`
  & ${/* sc-sel */ Inner} {
    color: blue;
  }
`

export default Outer
