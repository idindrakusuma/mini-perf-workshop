import React, { useState } from 'react';
import loadable from '@loadable/component';
import useIntersect from '@jackyef/use-intersect';

import { Box } from '@chakra-ui/react';

const LazyFooterComponent = loadable(() => import(/* webpackChunkName: "footer" */ './index'));

const FooterLoader = () => {
  return (
    <Box padding="2em" minHeight="330px">
      Sedang memuat...
    </Box>
  );
};

const optionsData = {
  root: null,
  rootMargin: '0px',
  threshold: [0, 0, 0, 0],
};

const FooterWrapper = () => {
  const [loaded, setLoaded] = useState(false);

  const onIntersect = () => {
    console.debug('Footer is intersecting!');
    setLoaded(true);
  };

  const targetRef = useIntersect(onIntersect, optionsData, true);

  return <Box ref={targetRef}>{loaded ? <LazyFooterComponent /> : <FooterLoader />}</Box>;
};

export default FooterWrapper;
