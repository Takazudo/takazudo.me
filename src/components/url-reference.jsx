import React from "react"

const UrlReference = ({ title, url, caption }) => (
  <div className="pb-vgap-md">
    <dl className="border border-t-2 border-c-primary-border px-colgap-md py-vgap-md-minus">
      <dt className="font-bold">{title}</dt>
      <dd className="pt-vgap-xs-minus text-sm">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        {caption && <span className="block pt-vgap-xs text-sm">{caption}</span>}
      </dd>
    </dl>
  </div>
)

export { UrlReference }
