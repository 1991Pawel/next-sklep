import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductDetails } from "@/components/Product";
import { Main } from "@/components/Main";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-400">
      <Header />
      <Main>Main content</Main>
      <Footer />
    </div>
  );
};

export default Home;
