import React from "react"

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  if (process.env.NODE_ENV === "production") {
    setHeadComponents([
      <script
        src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
        type="text/javascript"
        charSet="UTF-8"
        data-domain-script="833401ed-6965-4b06-a80b-9282226ea246"
      ></script>,
      <script type="text/javascript">function OptanonWrapper() {}</script>,
    ])
  }

  if (process.env.NODE_ENV === "production") {
    setPostBodyComponents([
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/6690555.js"
      ></script>,
      <script
        async
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "522dpqi9tb");`,
        }}
      />,
    ])
  }
}
