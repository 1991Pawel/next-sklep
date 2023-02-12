import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/legacy/image";

interface ProductDetails {
  id: number;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  title: string;
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
      <Image
        layout="responsive"
        width={16}
        height={9}
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        objectFit="cover"
      />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
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
