import React from "react";
import PropTypes from "prop-types";

const facebookSdkOptions = {
  appId: process.env.GATSBY_FACEBOOK_APP_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: "v12.0",
};

export default function HTML(props) {
  return (
    <html lang="ja" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <script
          key="facebook-async-init"
          dangerouslySetInnerHTML={{
            __html: `window.fbAsyncInit = function() {FB.init(${JSON.stringify(
              facebookSdkOptions
            )})}`,
          }}
        />
        <script
          key="facebook-sdk"
          async={true}
          defer={true}
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
