import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes, faChevronRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// static data will be imported here

import { products, sortingOptions } from '../assets/Static/staticdata';
import PremiumProductCard from "../components/PremiumProductCard"
import { handleCategories, handlePagination } from '../utils';
import { Link } from 'react-router-dom';



const Products = () => {
     const [search, setSearch] = useState("");
     const [filterPrice, setFilterPrice] = useState(0);
     const [currentPage, setCurrentPage] = useState(1);
     const [paginatedProduct, setPaginateProduct] = useState([]);
     const [isDropdownActive, setIsDropdownActive] = useState(false);
     const [sortingSelectedOption, setSortingSelectedOption] = useState("default");
     const [sortingDropdownOptions, setsortingDropdownOptions] = useState(sortingOptions);
     const [sortingSearch, setSortingSearch] = useState("");
     
     const totalPages = handlePagination(currentPage).totalPages;
     const temp = handlePagination(currentPage).paginatedProduct;
     
     // this function handle sorting filter 
     useEffect(() => {
           const { paginatedProduct } = handlePagination(currentPage);
           setPaginateProduct(paginatedProduct);
     }, [currentPage])

     
     const updateSortingSelectedOptions = (label) => {
          setSortingSelectedOption(label);
     }
     const updateSortingSearch = (text) => {
          setSortingSearch(text)
      }

     //  {this handles the filtering of the products based on the search input}
     useEffect(() => {
          let filteredOptions = sortingOptions;
          if(sortingSearch !== ""){
               filteredOptions = filteredOptions.filter(option => option.label.toLowerCase().includes(sortingSearch.toLowerCase()));
          } 
          setsortingDropdownOptions(filteredOptions);
     }, [sortingSearch])

     useEffect(() => {
          let toBeSortedProducts = [...paginatedProduct];
          switch(sortingSelectedOption){
                case "price-asc":
                    toBeSortedProducts.sort((a, b) => a.price.discounted - b.price.discounted);
                        break;
                  case "price-desc":
                    toBeSortedProducts.sort((a, b) => b.price.discounted - a.price.discounted);
                       break;
                   case "newest":
                           toBeSortedProducts.sort((a, b) => {
                                    const x = a.tags.includes("new") ? 1 : 0;
                                    const y = b.tags.includes("new") ? 1 : 0;
                                    return y - x;
                           });
                   break;
                   case "oldest":
                               toBeSortedProducts.sort((a, b) => {
                                        const x = a.tags.includes("new") ? 1 : 0;
                                        const y = b.tags.includes("new") ? 1 : 0;
                                        return x - y;
                               });
                       break;

                  default:
                       toBeSortedProducts = [...temp];  
                       break;
          }
          setPaginateProduct(toBeSortedProducts);
     }, [sortingSelectedOption])


     const inputRangeRef = useRef(null);
     const makeSetSearchEmpty = () => {
          setSearch("");
     }
     const productCategories = useMemo(() => {
          return handleCategories(products);
     }, [products])

     
     useEffect(() => {
          if (inputRangeRef.current) {
               const maxPrice = products.reduce((acc, currentProduct) => {
                    if (acc > currentProduct.price) {
                         return acc;
                    }
                    return currentProduct.price;
               }, 0)
               inputRangeRef.current.min = 0;
               inputRangeRef.current.max = maxPrice;
               inputRangeRef.current.value = Math.floor(maxPrice / 2);
               setFilterPrice(maxPrice / 2)
          }
     }, [])
     

     const handlePriceChange = (event) => {
          setFilterPrice(event.target.value);
     }
     

     const handlePageChnage = (page) => {
          setCurrentPage(page)     
     }
     
     const increaseCurrentPage = () => {
           if(currentPage < totalPages){
               setCurrentPage(currentPage + 1)
           }
           else {
               setCurrentPage(1)
           }
     }
     
     return (
          <section className='w-full bg-[#FFFFFF] py-[60px]'>
               <div className='container mx-auto w-full h-full'>
                    <div className='w-full h-full grid lg:grid-cols-[300px,1fr] gap-12'>
                         <div className='w-full bg-[#f9f9f9] p-6'>
                              {/* search product filter */}
                              <div className='border-[1px] border-[#ABABAB] flex relative'>
                                   <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className='w-[80%] outline-none bg-transparent py-3 px-6 placeholder:text-[#3A3A3A]' placeholder='Search product...' />
                                   <button className='w-[20%] text-lg flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faSearch} />
                                   </button>
                                   {search.length > 0 && <button onClick={makeSetSearchEmpty} className='absolute top-1/2 -translate-y-1/2 left-3/4 bg-[#ccc] px-1 shadow  rounded-[50%] text-xs text-red-400'>
                                        <FontAwesomeIcon icon={faTimes} />
                                   </button>}
                              </div>
                              {/* {category content} */}
                              <div className='h-auto my-9'>
                                   <div className='mb-5'>
                                        <h3 className='font-PlayFair font-semibold text-2xl tracking-[1px]'>
                                             Product Category
                                        </h3>
                                   </div>
                                   <div className='h-full'>
                                        {productCategories.map((product, index) => <button  key={index} className='flex w-full justify-between py-2 border-b-[0.5px] border-[#ABABAB]'><span>{product.category}</span> <span className='text-[#B5B5B5]'>({product.stock})</span></button>)}
                                   </div>
                              </div>
                              {/* {price filter} */}
                              <div className='w-full h-full'>
                                   <div>
                                        <h3 className='font-semibold font-PlayFair text-2xl tracking-wider'>
                                             Filter By Price
                                        </h3>
                                        <div className='mt-2'>
                                             <input step={1} onInput={handlePriceChange} ref={inputRangeRef}
                                                  type="range"
                                                  className="appearance-none w-full h-2 bg-gray-300 rounded-lg outline-none transition-all hover:bg-gray-400
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
    [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
    [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-blue-600
    [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-pointer [&::-webkit-range-thumb]:bg-red-300"
                                             />
                                             <p className='text-sm mt-2'>Price: <span className='tracking-wide'>{filterPrice} Rs</span></p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='w-full grid grid-rows-[100px,1fr]'>
                              <div className='border-b-[0.5px] flex items-center justify-between'>
                                   <p>Showing 1–12 of {products.length} results</p>
                                   <div className='w-[200px] h-[50px] bg-[#F9F9F9] relative'>
                                       <button onClick={() => setIsDropdownActive(prevState => !prevState)} className='w-full h-full flex justify-center items-center gap-2 mb-3'>
                                             <span className='capitalize'>
                                                  {sortingOptions.find((option) => option.value === sortingSelectedOption)?.label   || "Default sorting"}     
                                             </span>
                                             <FontAwesomeIcon icon={faCaretDown} />
                                       </button>
                                       {isDropdownActive &&  <div className='absolute w-full bg-white z-50 shadow-lg p-3'>
                                             <input onInput={(e) => updateSortingSearch(e.target.value)} type="text" className='w-full outline-none px-4 py-2 bg-[#ccc]' />
                                             <div className='w-full flex flex-col gap-2 items-start mt-5'>
                                                  {
                                                     sortingDropdownOptions.map((sortingOption, index) => <button key={index} onClick={() => updateSortingSelectedOptions(sortingOption.value)} className='capitalize text-sm w-full h-full  text-left px-4 py-2 transition-all duration-200 ease-linear hover:bg-[#9E6747] hover:text-white'>
                                                         {sortingOption.label}
                                                     </button>)
                                                  }
                                             </div>
                                       </div>       }
                                   </div>
                              </div>
                              <div className='w-full h-full grid gap-4 grid-rows-[1fr,auto]'>
                                   <div className='py-12 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8'>
                                          {paginatedProduct.map((product, index) => 
                                         <Link key={product.id} to={`/product/${product.id}`}><PremiumProductCard product={product} isNew={product.tags.includes("new")} />
                                         </Link>
                                         )}   
                                   </div>
                                   <div className='h-[80px] flex justify-center gap-6 items-center'>
                                        {Array.from({length: totalPages + 1}, (_, index) => {
                                             if(index < totalPages){return <button onClick={() => handlePageChnage(index + 1)} key={index} className={`w-[50px] text-lg h-[50px] border-2 border-[#000] rounded-[50%] transition-all duration-200 ease-linear hover:bg-[#9E6747] hover:border-[#9E6747] hover:text-white ${currentPage === index + 1 ? "bg-[#9E6747] text-white border-[#9E6747]": ""}`}>{index + 1}</button>}
                                             else {
                                                  return <button onClick={increaseCurrentPage} key={index} className='w-[50px] h-[50px] border-2 border-[#000] text-lg rounded-[50%] transition-all duration-200 ease-linear hover:bg-[#9E6747] hover:border-[#9E6747] hover:text-white'>
                                                       <FontAwesomeIcon icon={faChevronRight} />
                                                  </button> 
                                             }
                                        })}
                                   </div>    
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Products