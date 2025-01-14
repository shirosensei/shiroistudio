import React, { useState } from 'react'
// import 'react-lazy-load-image-component/src/effects/blur.css';

const ImagePlaceholder = ({ src, alt, placeholderSrc, style }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc)

  return (
    <img 
    src={imgSrc}
    alt={alt}
    onLoad={() => setImgSrc(src)} //! Set actual image when loaded
    onError={() => setImgSrc(placeholderSrc)} //? set placeholder if error
    style={{ 
      width: '100%', 
      height: '100%',
      objectFit: 'cover', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
      borderRadius: '10px',

      ...style, 
    }}

    />
  );
};

export default ImagePlaceholder