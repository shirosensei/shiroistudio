import React, { useState } from 'react'

const ImagePlaceholder = ({ src, alt, placeholderSrc }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc)

  return (
    <img 
    src={imgSrc}
    alt={alt}
    onLoad={() => setImgSrc(src)} //! Set actual image when loaded
    onError={() => setImgSrc(placeholderSrc)} //? set placeholder if error
    style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default ImagePlaceholder