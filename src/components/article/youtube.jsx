import * as React from "react";

const toEmbedSrc = (url) => {
  const matched = url.match(/[^/]+$/);
  const embedUrl = `https://www.youtube.com/embed/${matched[0]}`;
  return embedUrl;
};

const Youtube = ({ url }) => (
  <div className="pb-vgap-md">
    <iframe
      width="560"
      height="315"
      src={toEmbedSrc(url)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="block w-full max-w-[560px] h-[200px] sm:h-[315px]"
    ></iframe>
  </div>
);

export { Youtube };
