import Img1 from './img/1.jpg';
import Img2 from './img/2.jpg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.jpg';
import Img5 from './img/5.jpg';
import Img6 from './img/6.jpg';
import Img7 from './img/7.jpg';
import Img8 from './img/8.jpg';
import Img9 from './img/9.jpg';
import Img10 from './img/10.jpg';
import Img11 from './img/11.jpg';
import Img12 from './img/12.jpg';

const generateProduct = (imageUrl, name, price = 'Rp120.000', rating = '5') => {
  return {
    imageUrl,
    name,
    price,
    rating,
  };
};

const products = [
  generateProduct(Img1, 'product name 1'),
  generateProduct(Img2, 'product name 2', 'Rp220.000'),
  generateProduct(Img3, 'product name 3'),
  generateProduct(Img4, 'product name 4', 'Rp240.000'),
  generateProduct(Img5, 'product name 5'),
  generateProduct(Img6, 'product name 6'),
  generateProduct(Img7, 'product name 7'),
  generateProduct(Img8, 'product name 8'),
  generateProduct(Img9, 'product name 9'),
  generateProduct(Img10, 'product name 10'),
  generateProduct(Img11, 'product name 11'),
  generateProduct(Img12, 'product name 12'),
];

export default products;
