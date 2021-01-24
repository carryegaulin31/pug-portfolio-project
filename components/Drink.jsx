import React from 'react'
import styled from 'styled-components'

const Drink = styled.div`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`

export default ({ id, name, directions }) => (
  <Drink key={id}>
    {`${name} (${directions})`}
  </Drink>
)
