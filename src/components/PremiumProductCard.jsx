import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import StarRating from "./StarRating";


const PremiumProductCard = ({product, isNew}) => {
  const childVariant = {
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  const buttonVariant = {
      initial: {
          backgroundColor: "rgb(0,0,0)"
      },

       hover: {
          backgroundColor: "rgb(255, 165, 0)",
          transition: {
              duration: 0.5,
              ease: "linear"
          }
       }
  }
  const buttonChildVariant1 = {
      hover: {
         top: "-100%",
         y: "0",
         transition: {
            duration: 0.5,
            ease: "linear",
         }
      },
   }
   const buttonChildVariant2 = {
       hover: {
          bottom: "50%",
          y: "50%",
          transition: {
            duration: 0.5,
            ease: "linear",
        }
       },
       exist: {
        bottom: "-100%",
        y: "90%",
        transition: {
            duration: 0.5,
            ease: "linear",
             }
      }
   }
   const newVariant = {
         hover: {
             opacity: 0,
             scale: 0,
             transition: {
                duration: 0.5,
                ease: "linear"
             }
         }
   }
  return (
    <div className="relative  h-[450px]">
      <div className="relative h-[70%] flex justify-center items-center  before:w-full before:-z-[1] before:h-full before:absolute before:top-0 before:left-0 before:bg-[#f9f9f9]">
        <img
          src={product.image}
          alt="()"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[30%] flex flex-col items-center gap-2 py-5">
        <h2 className="font-PlayFair font-bold text-2xl">
            {product.name}
        </h2>
        <p className="tracking-widest">5000 Rs</p>
        <div className="flex justify-center">
          <StarRating rating={3} />
        </div>
      </div>
      <motion.div
        className="w-full h-full absolute top-0 left-0 cursor-pointer z-[1]"
        whileHover="hover"
      >
         {isNew && <motion.div variants={newVariant} initial={{opacity: 1, scale: 1}} transition={{duration: 0.5, ease: "linear"}} className="w-[50px] h-[25px] bg-black text-white text-center">
                New 
          </motion.div>} 
        <motion.div
          className="w-full h-[70%] z-10 flex flex-col gap-4 absolute left-0 top-0 px-6 py-8"
          variants={childVariant}
          initial={{ opacity: 0, scale: 0 }}

        >
          <div className="w-full h-[90%] flex flex-col items-end gap-4">
            <button className="border-2 border-black w-10 h-10 rounded-[50%] flex items-center justify-center transition-all duration-200 ease-linear hover:bg-black group">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="transition-all duration-200 ease-linear group-hover:text-white"
              />
            </button>
            <button className="border-2 border-black w-10 h-10 rounded-[50%] flex items-center justify-center transition-all duration-200 ease-linear hover:bg-black group">
              <FontAwesomeIcon
                icon={faHeart}
                className="transition-all duration-200 ease-linear group-hover:text-white"
              />
            </button>
          </div>
          <div className="w-full h-[10%] flex justify-center items-center">
            <AnimatePresence>
              <motion.button
                initial="initial"
                variants={buttonVariant}  
                className="w-full text-white py-5 font-PlayFair flex flex-col items-center justify-center relative overflow-hidden"
                whileHover="hover"
                transition={{ duration: 0.5 }}
              >
                 <motion.span className="absolute" variants={buttonChildVariant1} initial={{top: "50%", y: "-50%"}}>Add to Cart</motion.span>
                 <motion.span className="absolute" variants={buttonChildVariant2} initial={{bottom: "-100%", y: 0}}>
                      <FontAwesomeIcon icon={faShoppingCart}  />
                 </motion.span>
              </motion.button>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PremiumProductCard;
