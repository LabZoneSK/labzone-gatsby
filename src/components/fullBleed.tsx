import React, { FC } from "react"
import { z } from "zod"

/** Emotion & styling */
import styled from "@emotion/styled"

const FullBleedDiv = styled.div`
  width: 100%;
  overflow: hidden;
  grid-column: 1 / 4;

  background: var(--${props => props.color});

  & img {
    width: 100%;
  }
`

const fullBleedSchema = z.object({
  className: z.string().optional(),
  color: z.string().optional(),
  children: z.custom<JSX.Element>()
})

type FullBleedProps = z.infer<typeof fullBleedSchema>

const FullBleed: FC<FullBleedProps> = (props) => {

  const { children, color, className } = props

  return <FullBleedDiv color={color} className={className}>{children}</FullBleedDiv>
}

export default FullBleed;