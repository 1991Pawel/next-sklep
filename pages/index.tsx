import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Product } from "@/components/Product";
import { Main } from "@/components/Main";

const DATA = {
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime veniam doloribus alias, totam ratione officiis neque similique corporis consequuntur expedita. Aliquid nihil, reiciendis delectus modi quam quasi',
  thumbnailUrl:'https://picsum.photos/200/300',
  thumbnailAlt:'dsdas',
  rating: 4.5
}






const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-400">
      <Header />
      <Main>
        <Product data={DATA}/>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
