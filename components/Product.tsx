import Link from "next/link";
import { NextSeo } from "next-seo";
import { Rating } from "./Rating";
import Image from "next/legacy/image";
import { ZaisteReactMarkDown } from "./ZaisteReactMarkdown";
import { MarkdownResult } from "@/utils";
interface ProductDetails {
  id: number;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  title: string;
  longDescription: MarkdownResult;
}

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailAlt" | "thumbnailUrl"
>;

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p4">
        <NextSeo
          title={data.title}
          description={data.description}
          canonical={`https://next-sklep.vercel.app/products/${data.id}`}
          openGraph={{
            url: `https://next-sklep.vercel.app/products/${data.id}`,
            title: data.title,
            description: data.description,
            images: [
              {
                url: data.thumbnailUrl,
                width: 800,
                height: 600,
                alt: data.thumbnailAlt,
                type: "image/jpeg",
              },
            ],
            siteName: "Sklep",
          }}
        />
        <Image
          layout="responsive"
          width={16}
          height={9}
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          objectFit="contain"
        />
      </div>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
        <ZaisteReactMarkDown>{data.longDescription}</ZaisteReactMarkDown>
      </article>

      <Rating rating={data.rating} />
    </>
  );
};

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          objectFit="cover"
        />
      </div>
      <Link href={`products/${data.id}`}>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </Link>
    </>
  );
};
