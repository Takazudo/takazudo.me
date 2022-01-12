import React from "react"

const ClosingArea = ({ children }) => (
  <>
    <hr className="hidden" />
    <div className="mt-vgap-md -mr-colgap-lg pr-colgap-lg pt-vgap-md border-t-10 border-c-primary-border">
      {children}
    </div>
  </>
)

export { ClosingArea }
