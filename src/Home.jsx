import Publicity from './components/home/Publicity/Publicity';
import Advertisement from './components/home/advertisement/Advertisement';
import Header from './components/home/header/Header';
import Product from './components/home/product/Product';
import Special from './components/home/special/Special';

const Home = () => {
  return (
    <>
      <Header />
      <Product />
      <Advertisement />
      <Publicity />
      <Special />
    </>
  );
};

export default Home;
