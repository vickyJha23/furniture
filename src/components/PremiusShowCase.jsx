import React, {useState, useEffect} from 'react';
import { faChair, faChartSimple, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

import PremiumCollectionFilterButton from './PremiumCollectionFilterButton';
import PremiumProductCard from './PremiumProductCard';

// static data import 
import products from '../assets/Static/staticdata';

const PremiusShowCase = () => {
   const [tagsCategories, setTagsCategories] = useState(() => {
        const uniqueTags = new Set(products.flatMap((product) => product.tags));
        return Array.from(uniqueTags, (tag, index) => {
              if(tag.toLowerCase() === "premium"){
                   return {
                      id: index,
                      tagName:"all furniture",
                      icon: faChair
                   }
              }
              else if(tag.toLowerCase() === "new"){
                  return {
                    id: index,
                    tagName:"new arrival",
                    icon: faFireFlameCurved
                  }
              }
              else {
                return {
                   id: index,
                   tagName: tag,
                   icon: faChartSimple
                };
              }
        }) 
   })
   const [tags, setTags] = useState("premium");
   const [premiumProduct, setPremiumProduct] = useState(products.filter((product) => product.tags.includes(tags)));
   const [activeIndex, setActiveIndex] = useState(1);
   const handleTags = (content) => {
        setTags(content);
 }
 const handleActiveIndex = (index) => {
     console.log(index);
       setActiveIndex(index);
 }
 useEffect(() => {
     const handleTagsCategories = () => {
          let filteredPremiumProducts = products;
          if(tags.toLowerCase() !== "all furniture"){
               console.log(tags);
               if(tags.toLowerCase() === "new arrival"){
                   filteredPremiumProducts = products.filter((product) => product.tags.includes(tags.replace("new arrival", "new")));
                   console.log(filteredPremiumProducts);
               }   
               else {             
                    filteredPremiumProducts = products.filter((product) => product.tags.includes(tags))
               }
          
          }
         return setPremiumProduct(filteredPremiumProducts);
     }  
     handleTagsCategories();
 }, [tags]);
  return (
    <section className='py-36 px-6'>
        <div className='h-auto'>
             <p className='flex justify-center lg:justify-start gap-4 items-center'>
                 <span className='inline-block w-[12px] h-[12px] bg-orange-500 -rotate-45 shadow'></span>
                 <span className='text-orange-500  uppercase tracking-widest'>Premium Furnitures</span>
             </p>   
             <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between items-center mt-5'>
                  <h2 className='text-5xl font-semibold font-PlayFair'>Shop Premium Collections</h2>
                  <div className='flex gap-6 items-end'>
                      {tagsCategories.map((tagCategory, index) => <PremiumCollectionFilterButton key={index}  setIndex = {handleActiveIndex} index={index} handleTags={handleTags} icon = {tagCategory.icon} content={tagCategory.tagName} isActive={activeIndex === index} />    )}     
                  </div>
             </div>
             <div className='mt-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-6 gap-y-6'>
                 {premiumProduct.map((product, index) => <PremiumProductCard key={index} product={product} isNew = {product.tags.includes("new")} />)}  
             </div>
        </div>
    </section>
  )
}

export default PremiusShowCase