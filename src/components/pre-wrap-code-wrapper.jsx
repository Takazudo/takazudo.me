import React from "react"

// Usage: 

// <PreWrapCodeWrapper>
// ```html
// <p>This code will get wrapped at the right edge of the container</p>
// ```
// </PreWrapCodeWrapper>

import "./pre-wrap-code-wrapper.css"

const PreWrapCodeWrapper = ({ children }) => (
  <div className="nowrap-codeblock">{children}</div>
)

export { PreWrapCodeWrapper }
