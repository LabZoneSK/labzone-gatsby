import React from "react"
import PropTypes from "prop-types"

/** Emotion & Styling */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Icon from "../components/icon"

const HeaderWithBottomLine = styled.h3`
  font-weight: 600;

  &:after {
    content: " ";
    display: block;
    height: 0.1rem;
    background-color: #fff;
    width: 50px;
    position: relative;
    left: calc(50% - 25px);
    top: 0.5rem;
  }
`

const CardWrapperVariant = props => props.isDark ? 
css`
  background-color: #fff;

  li {
    color: #222
  }
` : 
css`
  background-color: var(--carolina-blue);
  color: #fff;

  img {
    filter: invert(95%);
  }

  li {
    color: #eee
  }
`
const CardWrapper = styled.div`
  border-radius: var(--global-border-radius);
  padding: 1rem;
  ${CardWrapperVariant};
`

export default function Card(props) {
  const { service } = props;

  return (
    <CardWrapper>
      <Icon
        source={service.icon}
        size="lg"
        alt={`Offering card icon for ${service.title}`}
      />
      <HeaderWithBottomLine className="mb-3">
        {service.title}
      </HeaderWithBottomLine>
      <ul>
        {service.list &&
          service.list.map((item,i) => {
            return (
              <li key={i}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </CardWrapper>
  )
}

Card.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}
