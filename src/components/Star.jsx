import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"


const Star = ({starRating}) => {
  return (
      <FontAwesomeIcon color={starRating ? "orange": "gray"} icon={starRating ? faStar : regularStar} />
   )
}

export default Star