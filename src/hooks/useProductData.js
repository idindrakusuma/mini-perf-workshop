import productData from '../api/fake-products';

export default function useProductData() {
  return { data: productData, loading: false };
}
