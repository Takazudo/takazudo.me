import React from "react"

const Note = ({ children }) => (
  <div className="pb-vgap-md">
    <div className="font-bold bg-red-700 text-white px-colgap-sm py-vgap-sm">
      {children}
    </div>
  </div>
)

export { Note }
