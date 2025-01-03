import React from 'react'
import {Product} from "@/pages/types";



interface ProductCardProps extends Product{
    onAddToCart: (product: Product) => void;
}


const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    onAddToCart,
}) => { 
    console.log("Rendering ProductCard for:", name); // Debugging log
  console.log("Image source:", image); // Debugging log for image



    return(

        <div className='bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
        <img
        src={image}
        alt={name}
        className='w-full h-56 object-cover rounded-md mb-4 transform tarnsition-all duration-300 ease-in-out hover:scale-110' />
     <h3 className='text-xl font-semibold mb-2'>{name}</h3>
      <p className='text-lg text-slate-600 mb-4'>{price}</p>
         <button onClick={() => onAddToCart({id, name, price,image})}
         className='bg-blue-600 text-white px-4 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out'>

          Add To Cart
         </button>
        
        
        
        </div>


    );
};

export default ProductCard;