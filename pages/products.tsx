// export const getStaticProps = async () => {};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductPage = () => {
  return <div>Produkty</div>;
};

export default ProductPage;
