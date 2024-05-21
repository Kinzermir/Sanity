import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";

import Link from "next/link";

async function getData() {
  const res = await client.fetch(
    `*[_type == "product"]{title,price,category->{name},image,"urlImage":image.asset->url,_id}`
  );
  return res;
}

interface IProduct {
  title: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
  _id: string;
}

const Home = async () => {
  const data = await getData();

  return (
  
      <div className=" py-20 max-w-screen-2xl w-full mx-auto">
        <div className="flex flex-wrap justify-between px-[8.5%]">
          {data.map((product: IProduct) => (
            <div key={product._id} className="font-bold ">
              <Image
                src={urlForImage(product.image).url()}
                alt={product.title}
                width={300}
                height={300}
              />
              <h1 className="pt-2">{product.title}</h1>
              <p>${product.price}</p>
              <p>{product.category.name}</p>
              <Link href={`/${product.category.name}`}>
                <p>{product.category.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Home;