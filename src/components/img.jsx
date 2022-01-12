import React from "react"

const Img = props => {
  const imgWrapperClassArray = []
  const spanClassArray = ["inline-block", "align-top"]
  const imgClassArray = ["align-top", "w-full"]
  const captionClassArray = ["text-sm", "mt-vgap-sm-minus"]

  const alt = props.alt || ""
  if (props.border) {
    spanClassArray.push("border")
    spanClassArray.push("border-gray-400")
  }
  imgWrapperClassArray.push(`text-${props.align || "center"}`)
  if (props.width) {
    spanClassArray.push(`w-${props.width}`)
  }
  if (props.padding) {
    spanClassArray.push(`p-${props.padding}`)
  }
  captionClassArray.push(`text-${props.captionAlign || "center"}`)

  const imgWrapperClass = imgWrapperClassArray.join(" ")
  const spanClass = spanClassArray.join(" ")
  const imgClass = imgClassArray.join(" ")
  const captionClass = captionClassArray.join(" ")

  const caption = props.caption || null

  return (
    <figure className="pb-vgap-md">
      <div className={imgWrapperClass}>
        <span className={spanClass}>
          <img className={imgClass} src={props.src} alt={alt} />
        </span>
      </div>
      {caption && <figcaption className={captionClass}>{caption}</figcaption>}
    </figure>
  )
}

export { Img }
