import { client } from "@/sanity/lib/client"
import { producttype } from "../../../../type"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import BlogSectiontwo from "@/app/componentfeature/blogstwo/page"

export default async function ProductDetail ({params : {id}} :{params:{id:producttype}}){
    const ApiCatchData = `*[_type == "product" && _id == $id]{
  name,
  price,
  description,
  "category": category._ref,
  "image": image.asset._ref,
  "id": _id
}[0]`

    const product:producttype | null = await client.fetch(ApiCatchData ,{id})
    console.log(product)
    if(!product){
        return(
            <div>Not found Name </div>
        )
    }
    return(
        <div key={product._id}>
           <div className="font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="grid items-start grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="overflow-hidden rounded-lg shadow-lg ">
              <Image src={urlFor(product.image).url()}
              alt={product.name}
              height={70}
              width={400}
              className="w-full h-[70vh] object-cover rounded-lg"  >

              </Image>
               
              
            
            </div>
          </div>
  
          {/* Product Information Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Title and Tagline */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
             
            </div>
  
            {/* Rating Section */}
           
             
            
  
            {/* Price Section */}
            <div className="flex items-center space-x-4 mt-6">
              <p className="text-4xl font-semibold text-gray-900">&{product.price}</p>
            
            </div>
            {/* Product Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Product Description</h3>
              <p className="text-sm text-gray-500 mt-4">
               {product.description}
              </p>
             
            </div>

            <h1 className="text-xl">Dimensions</h1>
            <div className="flex w-full   ">
               
             <ul className="space-y-2 text-sm text-gray-600 flex gap-10 items-center ">
             <button className="bg-slate-200 px-4 py-2 ">

             <h3 className="text-lg text-pretty text-gray-800">Height</h3>
              <h3 className="font-medium text-lg text-gray-600">110cm</h3>
             </button>
             <button className="bg-slate-200 px-4 py-2 ">
             <h3 className="text-lg text-pretty text-gray-800">Width</h3>
              <h3 className="font-medium text-lg text-gray-600">110cm</h3>
             </button>
             <button className="bg-slate-200 px-4 py-2 ">
             <h3 className="text-lg text-pretty text-gray-800">Depth</h3>
              <h3 className="font-medium text-lg text-gray-600">110cm</h3>
             </button>
            </ul>  
            </div>
            <div>
                <h1 >quantity</h1>
                <button className="bg-slate-200 px-6 py-2  border-gray-800  text-center items-center mt-3"> 1</button>
              </div>
            <div className="mt-6  lg:flex gap-4">
              <button
                type="button"
                className="w-full px-4 py-3 border bg-[#2A254B] text-white text-sm font-semibold rounded-md transition duration-200"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full px-4 py-3 border border-gray-800 text-gray-800 bg-white text-sm font-semibold rounded-md transition duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        </div>
        <h1 className="justify-center items-center text-3xl font-bold px-2">More Product </h1>
        <BlogSectiontwo/>
        </div>

    )
}

