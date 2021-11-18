import React, { useState } from 'react';
import { string, object } from 'prop-types';
import useIntersect from '@jackyef/use-intersect';

import { Image as ImageChakra } from '@chakra-ui/react';

const optionsData = {
  root: null,
  rootMargin: '0px',
  threshold: [0, 0, 0, 0],
};

const LazyImage = ({ alt, src, style, width, height, ...rest }) => {
  const placeholder = `https://res.cloudinary.com/irfan-maulana-tkpd/image/fetch/c_fill,g_auto:face,h_50,fl_force_strip.progressive/f_webp/${encodeURIComponent(
    'https://res.cloudinary.com/irfan-maulana-tkpd/image/upload/v1597041453/placeholder_qzxxc6.png',
  )}`;

  const [showSrc, setShowSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);

  const onIntersect = () => {
    const imgObj = new Image();
    imgObj.onload = () => {
      setLoaded(true);
    };
    imgObj.src = src;
    setShowSrc(src);
  };

  const targetRef = useIntersect(onIntersect, optionsData, true);

  return (
    <ImageChakra
      ref={targetRef}
      alt={alt}
      className={`img ${loaded ? 'img--loaded' : 'img--loading'}`}
      style={style}
      src={showSrc}
      width={width}
      height={height}
      {...rest}
    />
  );
};

LazyImage.propTypes = {
  alt: string.isRequired,
  height: string,
  src: string,
  style: object,
  width: string,
};

LazyImage.defaultProps = {
  height: undefined,
  src: '',
  style: {},
  width: '100%',
};

export default LazyImage;
