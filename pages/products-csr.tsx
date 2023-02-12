import { ProductListItem } from "@/components/Product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  thumbnailAlt: string;
  thumbnailUrl: string;
  rating: {
    rate: number;
    count: number;
  };
}

const getProducts = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=0`
  );
  const data = await res.json();
  return data;
};

const ProductsCsr = () => {
  const result = useQuery("products", getProducts);

  const pageNumber = 10;
  const offset = 25;

  if (result.isLoading) {
    return <div>...ładowanie</div>;
  }
  if (!result.data || result.error) {
    return <div>...ups coś poszło nie tak.</div>;
  }

  return (
    <div>
      <h2>hej</h2>
      <Link href="/products">Wróć na stronę główną</Link>
      <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="hidden md:-mt-px md:flex">
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            1
          </a>
          <a
            href="#"
            className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            aria-current="page"
          >
            2
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            3
          </a>
          <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
            ...
          </span>
          <a
            href="#"
            className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            8
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            9
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            10
          </a>
        </div>
      </nav>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {result.data.map((product: StoreApiResponse) => (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCsr;
