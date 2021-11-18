import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Layout from '../components/Layout';

import useProductData from '../hooks/useProductData';

export default function Home() {
  const { data } = useProductData();

  return (
    <Layout>
      <Header />
      <Box padding="24px 16px">
        <SimpleGrid columns={2} spacing={4}>
          {data.map((p, index) => {
            return (
              <Box key={index + p.name}>
                <Product {...p} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Footer />
    </Layout>
  );
}
