import * as React from "react";

const UrlReference = ({ title, url, caption }) => (
  <div className="pb-vgap-md font-futura">
    <dl className="border border-gray-500 px-hgap-md py-vgap-md">
      <dt className="font-bold text-lg">{title}</dt>
      <dd className="pt-vgap-xs">
        <a href={url} target="_blank" rel="noreferrer" className="break-all">
          {url}
        </a>
        {caption && <span className="block pt-vgap-xs text-sm">{caption}</span>}
      </dd>
    </dl>
  </div>
);

export { UrlReference };
