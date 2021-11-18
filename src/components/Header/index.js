import React from 'react';
import { Box, Image, Center, Text } from '@chakra-ui/react';

import TopedLogo from '../../assets/logo-tokopedia.svg';

function Header() {
  return (
    <Box padding="16px" boxShadow="lg">
      <Center>
        <Image src={TopedLogo} />
      </Center>
      <Text textAlign="center" fontFamily="heading">
        App Demo Purpose
      </Text>
    </Box>
  );
}

export default Header;
