import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([
    <script
      src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
      type="text/javascript"
      charset="UTF-8"
      data-domain-script="833401ed-6965-4b06-a80b-9282226ea246"
    ></script>,
    <script type="text/javascript">function OptanonWrapper() {}</script>,
  ])
}
