import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PremiumCollectionFilterButton = ({setIndex, index, handleTags, icon, content, isActive}) => {
  return (
    <button onClick={() => {handleTags(content)
         setIndex(index)
    }}className={`w-full text-nowrap px-3 py-2 text-center flex gap-2 justify-center items-center transition-all duration-200 ease-linear 
      hover:text-orange-500
      ${isActive 
        ? "bg-[#9E6747] !text-white px-3 py-2 md:bg-transparent md:!text-orange-500" 
        : "bg-transparent !text-black md:text-black"} 
      `}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="uppercase tracking-widest">{content}</span>
    </button>
  );
};

export default PremiumCollectionFilterButton;
