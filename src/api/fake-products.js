const generateProduct = (imageUrl, name, price = 'Rp120.000', rating = '5') => {
  return {
    imageUrl,
    name,
    price,
    rating,
  };
};

const products = [
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248895/mini-workshop/1_g5rrko.jpg',
    'product name 1',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248895/mini-workshop/2_jg6wbw.jpg',
    'product name 2',
    'Rp220.000',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248895/mini-workshop/3_qlk3ye.jpg',
    'product name 3',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248895/mini-workshop/4_vwkov4.jpg',
    'product name 4',
    'Rp240.000',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/5_l8u34k.jpg',
    'product name 5',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248895/mini-workshop/6_loakde.jpg',
    'product name 6',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/7_j8jq4i.jpg',
    'product name 7',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/8_jvvc4h.jpg',
    'product name 8',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/9_neutyi.jpg',
    'product name 9',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/10_zbnonz.jpg',
    'product name 10',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248896/mini-workshop/11_sl042y.jpg',
    'product name 11',
  ),
  generateProduct(
    'https://res.cloudinary.com/dfjr7ick8/image/upload/v1637248898/mini-workshop/12_yuc1mx.jpg',
    'product name 12',
  ),
];

export default products;
