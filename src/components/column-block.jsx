import React from "react"

const ColumnBlock = ({ children }) => (
  <div className="pt-vgap-md pb-vgap-md">
    <div className="b-ColumnBlock border border-c-primary-border px-colgap-md">
      {children}
    </div>
  </div>
)

export { ColumnBlock }
