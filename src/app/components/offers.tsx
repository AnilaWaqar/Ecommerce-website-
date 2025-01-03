"use client"

import React from 'react'

type Offer = {
  title:string;
  description:string;
}

const OfferList:React.FC = ()=> {
const offers:Offer[] = [
  {
    title : "Happy Hour",
   description:"5pm to 7pm Between you can get 50% Discount one every item"
  },
  {
    title : "Family Deal",
   description:"Order 3 item and get family deal coupon get "
  },
  {
    title : "Weekly Dealing",
   description:"In this Deal you can get free Drink and enjoy with yur family"
  },
    {
    title : "Weekly Dealing",
   description:"In this Deal you can get free Drink and enjoy with yur family"
  },
]


const handleOfferclick = (description:string) => {
alert (description)
}


return(
<section className='py-10 my-16'>
  <div className='container mx-auto test-center'>
<h2 className='text-4xl text-center font-bold mb-6 text-white'>
Special Offer
</h2>

<div className='grid grid-cols-1 md:grid_col-1 lg:grid-cols-2 gap-6 mx-6'>
{offers.map((offer ,index)=>(
<button key={index}
onClick={()=> handleOfferclick(offer.description)}
className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105 '>
<h3 className='text-2xl font-bold text-red-700'>{offer.title}</h3>
<p className='text-gray-700 mt-3'>{offer.description}</p>
</button>
))}
</div>
  </div>
</section>
)




}

export default OfferList;