import React from "react"

/** Components */
import Icon from "../components/icon"
import FullBleed from "../components/fullBleed"

export default function Backtotop() {
  return (
    <FullBleed>
      <div className="backToTop">
        <a className="backToTop-link" href="#top">
          <div className="arrow">
            <Icon
              source={`/images/icons/up-arrow.svg`}
              size="sm"
              alt="Jump to top"
              isWhite
            />
          </div>

          {/** TODO: Use FormattedMessage */}
          <div className="text">Jump to top</div>
        </a>
      </div>
    </FullBleed>
  )
}
