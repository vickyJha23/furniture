import React, {useState, useEffect} from 'react';
import { faChair, faChartSimple, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

import PremiumCollectionFilterButton from './PremiumCollectionFilterButton';
import PremiumProductCard from './PremiumProductCard';

// static data import 
import {products} from '../assets/Static/staticdata';

const PremiusShowCase = () => {
   const [tagsCategories, setTagsCategories] = useState(() => {
        const uniqueTags = new Set(products.flatMap((product) => product.tags));
         uniqueTags.delete("");
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
        }).sort((a, b) => a.tagName.localeCompare(b.tagName)); 
   })
   const [tags, setTags] = useState("premium");
   const [premiumProduct, setPremiumProduct] = useState(products.filter((product) => product.tags.includes(tags)));
   const [activeIndex, setActiveIndex] = useState(0);
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
               if(tags.toLowerCase() === "new arrival"){
                   filteredPremiumProducts = products.filter((product) => product.tags.includes(tags.replace("new arrival", "new")));
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
    <section className='py-[60px] px-6'>
        <div className='h-auto'>
             <p className='flex justify-center lg:justify-start gap-4 items-center'>
                 <span className='inline-block w-[12px] h-[12px] bg-orange-500 -rotate-45 shadow'></span>
                 <span className='text-orange-500  uppercase tracking-widest'>Premium Furnitures</span>
             </p>   
             <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between items-center mt-5'>
                  <h2 className='text-5xl font-semibold font-PlayFair text-center lg:text-left max-w-[600px] lg:w-full'>Shop Premium Collections</h2>
                  <div className='w-full lg:max-w-max grid lg:gap-6 md:grid-cols-3 place-items-center text-center md:px-6 bg-white shadow md:bg-transparent md:shadow-none'>
                      {tagsCategories.map((tagCategory, index) => <PremiumCollectionFilterButton key={index}  setIndex = {handleActiveIndex} index={index} handleTags={handleTags} icon = {tagCategory.icon} content={tagCategory.tagName} isActive={activeIndex === index} />    )}     
                  </div>
             </div>
             <div className='mt-20 grid md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6'>
                 {premiumProduct.map((product, index) => <PremiumProductCard key={index} product={product} isNew = {product.tags.includes("new")} />)}    
             </div>
        </div>
    </section>
  )
}

export default PremiusShowCase