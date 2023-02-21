import { ProductDetails } from "@/components/Product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticPaths = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  thumbnailAlt: string;
  thumbnailUrl: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!data) {
    return <div>Coś poszło nie tak</div>;
  }
  console.log("data", data);

  return (
    <div>
      <Link href="/products">Wróć na stronę główną</Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          thumbnailAlt: data.title,
          thumbnailUrl: data.image,
          description: data.description,
          rating: data.rating.rate,
          longDescription: data.longDescription,
        }}
      />
    </div>
  );
};

export default ProductIdPage;
