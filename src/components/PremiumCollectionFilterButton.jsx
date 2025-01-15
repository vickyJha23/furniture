import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PremiumCollectionFilterButton = ({setIndex, index, handleTags, icon, content, isActive}) => {
  return (
    <button onClick={() => {handleTags(content)
         setIndex(index)
    }} className={`flex gap-2 items-center transition-all duration-200 ease-linear hover:text-orange-500 ${isActive ? "text-orange-500": ""}`}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="uppercase tracking-widest">{content}</span>
    </button>
  );
};

export default PremiumCollectionFilterButton;
