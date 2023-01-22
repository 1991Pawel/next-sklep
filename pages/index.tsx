import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const DATA = {
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime veniam doloribus alias, totam ratione officiis neque similique corporis consequuntur expedita. Aliquid nihil, reiciendis delectus modi quam quasi',
  thumbnailUrl:'https://picsum.photos/200/300',
  thumbnailAlt:'dsdas',
  rating: 4.5
}

interface RatingProps  {
  rating: number;

}


interface ProductProps  {
  data:{
    description:string,
    thumbnailUrl:string,
    thumbnailAlt:string,
    rating:number
  }

}

const Rating = ({rating}:RatingProps) => {
  return      <div className="text-blue-500 font-bold">{rating}</div>
}

const Product = ({data}:ProductProps) => {
  return (
    <>
     <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
        <p>
        {data.description}
        </p>
        <Rating rating={data.rating}/>
        </>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-400">
      <Header />
      <main className="flex-grow mx-auto  max-w-2xl grid p-6 gap-6 sm:grid-cols-2">
        <Product data={DATA}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
