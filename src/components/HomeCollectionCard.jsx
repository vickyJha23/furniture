import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";




const HomeCollectionCard = ({product}) => {
    console.log(product)
    const collectionCardChildrenVariant = {
         hover: {
              opacity: 1,
              scale: 1,
              transition: {
                 duration: 0.5,
                 ease: "linear"
              }
         }
    }

  const collectioncardButtonVariant = {
      initial: {
         backgroundColor: "rgb(0,0,0)",
         transition: {
             duration: 0.5
         }
     },
     hover: {
         backgroundColor: "rgb(158,103,71)",
         transition: {
             duration: 0.5,
             ease: "linear"
         }
     }
  }
  const collectionCardChildrenOneVariant = {
      hover: {
          top: "-100%",
          y: 0,
          transition: {
              duration: 0.5,
              ease: "linear"
          }
      }
  }
  const collectionCardChildrenTwoVariant = {
      hover: {
          bottom: "50%",
          y: "50%",
          transition: {
              duration: 0.5,
              ease: "linear"
          }
      }
  }
  return (
    <div className="relative">
      <div className="h-full flex flex-col">
        <div className="h-[70%]">
          <img
            src={product.images[0]}
            alt=""
            className="w-full object-contain"
          />
        </div>
        <div className="h-[30%] py-5 px-3 flex flex-col gap-1">
          <p className="uppercase tracking-widest">stylish furniture</p>
          <h3 className="text-2xl font-semibold font-PlayFair">
             {product.name}
          </h3>
          <p className="tracking-wider"><span className="line-through text-[#ccc] text-sm">{product.price.original}</span> <span>{
              product.price.discounted} Rs</span></p>
        </div>
      </div>
       <AnimatePresence>
          <motion.div className="absolute top-0 left-0 w-full h-full px-4 py-4 cursor-pointer"  whileHover="hover">
             <motion.div variants={collectionCardChildrenVariant} initial={{opacity: 0, scale: 0}}  transition={{duration: 0.5}} className="w-full h-full">
                 <div className="w-full h-[70%] flex items-end">
                      <motion.button className="bg-black text-white flex flex-col w-full items-center relative overflow-hidden py-6" variants={collectioncardButtonVariant} initial="initial" whileHover="hover">
                           <motion.span className="absolute capitalize tracking-[2px] font-semibold" variants={collectionCardChildrenOneVariant} initial={{top: "50%", y:"-50%" }} transition={{
                              duration: 0.5,
                              ease: "linear"
                           }}>
                                 Add to cart
                           </motion.span>
                           <motion.span className="absolute" initial={{
                               bottom: "-100%",
            
                           }} transition={{
                               duration: 0.5,
                               ease: "linear"
                           }} variants={collectionCardChildrenTwoVariant}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                           </motion.span>
                      </motion.button>
                 </div>
             </motion.div>
          </motion.div>
       </AnimatePresence>
    </div>
  );
};

export default HomeCollectionCard;
