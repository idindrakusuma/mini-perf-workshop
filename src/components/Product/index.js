import React from 'react';
import { string } from 'prop-types';
import { Box, Image, Text } from '@chakra-ui/react';

import StartLogo from '../../assets/start.svg';

function Product({ imageUrl, name, price, rating }) {
  return (
    <Box boxShadow="md" borderRadius="16px">
      <Image
        src={imageUrl}
        height="100px"
        width="100%"
        objectFit="cover"
        objectPosition="center"
        borderRadius="16px 16px 0 0"
      />
      <Box padding="16px 8px">
        <Text>{name}</Text>
        <Text color="red.800">{price}</Text>
        <Box display="flex" alignItems="center">
          <Image src={StartLogo} height="16px" marginRight="4px" />
          <Text>{rating}</Text>
        </Box>
      </Box>
    </Box>
  );
}

Product.propTypes = {
  imageUrl: string.isRequired,
  name: string.isRequired,
  price: string.isRequired,
  rating: string.isRequired,
};

export default Product;
