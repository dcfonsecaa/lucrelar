"use client";

import { useState } from "react";

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery__main"><img src={images[active]} alt={`${title} — imagem ${active + 1}`} /></div>
      {images.length > 1 && <div className="gallery__thumbs">{images.map((image, index) => (
        <button key={image} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Ver imagem ${index + 1}`}>
          <img src={image} alt="" />
        </button>
      ))}</div>}
    </div>
  );
}
