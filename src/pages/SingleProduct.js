import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { id: productid } = useParams();
  const product = products.find(product => productid === product.id);
  console.log(product);
  const { id, image, name } = product;
  return (
    <section className='section product'>
      <h2>single product id ={id}</h2>
      <img src={image} alt={name} />
      <Link to='/products' className='btn'>
        back products
      </Link>
    </section>
  );
};

export default SingleProduct;
