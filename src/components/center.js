import React from 'react'

import styled from '@emotion/styled'

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default function Center (props) {
  return <CenterWrapper className={props.className}r>{props.children}</CenterWrapper>
}
