import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type Idata = {
  name: string;
  description: string;
  price: number;
  image: string; // Change from 'any' to 'string'
  category: string;
  _id: string;
};

export default async function BlogSectionone() {
  const apifatch: Idata[] = await client.fetch(
    `*[_type == "product"][35..38]{
      "image": image.asset._ref,
      description,
      price,
      name,
      _id
    }`
  );

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-sans w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-8">
        {apifatch.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-52">
              <Link href={`/product/${post._id}`}>
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.name || "Product Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-sm font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                {post.name}
              </h3>
              <p className="text-lg font-semibold text-gray-900">${post.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
