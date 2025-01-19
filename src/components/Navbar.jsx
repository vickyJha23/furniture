import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faChevronDown, faTimes, faBars, faAngleRight, faAngleLeft, faMinus } from '@fortawesome/free-solid-svg-icons';


// components import here
import Logo from './Logo';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isFirstAsideOpen, setIsFirstAsideOpen] = useState(false);
    const [isSecondAsideOpen, setIsSecondAsideOpen] = useState(false);
    const [isThirdAsideOpen, setIsThirdAsideOpen] = useState(false);
    const handleDropDown = () => {
        // this function will setIsDropdownOpen 
        // which takes a call function and provide the last state
        setIsDropdownOpen((lastState) => !lastState);
    }
    const handleSearchDisplay = () => {
        setIsSearchOpen((lastState) => !lastState);
    }
    const handleFirstAside = () => {
         setIsFirstAsideOpen((lastState) => !lastState)
         setIsSecondAsideOpen((lastState) => {
             if(lastState){
                return false;
             }
             return lastState;
         })
         setIsThirdAsideOpen((lastState) => {
            if(lastState){
                return false;
            }
            return lastState;
         })
    }
    const handleSecondAside = () => {
         setIsSecondAsideOpen((lastState) => !lastState)
    }
    const handleThirdAside = () => {
            setIsThirdAsideOpen((lastState) => !lastState)
    }

    return (
        <nav className='font-nunito flex items-center w-full py-6 mb-[80px] md:mb-[30px]'>
            <section className='container mx-auto flex justify-between w-full items-center px-4'>
                <Logo />
                <ul className='hidden lg:flex items-center tracking-[3px] font-semibold text-lg'>
                    <li className='px-4 transition-all duration-200 uppercase ease-linear delay-150 hover:text-orange-500'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li onClick={handleDropDown} className='px-4 relative uppercase ease-linear delay-150'>
                        <span className='transition-all duration-200 hover:text-orange-500'> Pages <FontAwesomeIcon icon={faChevronDown} /></span>
                        {
                            isDropdownOpen && <ul className='absolute normal-case space-y-4 top-16 px-6 py-4 w-[200px] bg-white shadow border-t-[4px] border-t-orange-400'>
                                <li className='text-sm flex items-center tracking-normal group transition-all duration-200 ease-linear align-middle'>
                                    <span className='transition-all duration-200 delay-150 ease-linear align-middle inline-block w-[8px] h-[8px] bg-orange-500 -rotate-[45deg] group-hover:w-0 group-hover:h-0'></span>
                                    <Link to="/about" className='transition-all duration-200 delay-150 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                        About us
                                    </Link>
                                </li>
                                <li className='text-sm flex items-center tracking-normal group transition-all duration-200 ease-linear align-middle'>
                                    <span className='transition-all duration-200 delay-150 ease-linear align-middle inline-block w-[8px] h-[8px] bg-orange-500 -rotate-[45deg] group-hover:w-0 group-hover:h-0'></span>
                                    <Link to="/about" className='transition-all duration-200 delay-150 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                        Gallery
                                    </Link>
                                </li>
                                <li className='text-sm flex items-center tracking-normal group transition-all duration-200 ease-linear align-middle'>
                                    <span className='transition-all duration-200 delay-150 ease-linear align-middle inline-block w-[8px] h-[8px] bg-orange-500 -rotate-[45deg] group-hover:w-0 group-hover:h-0'></span>
                                    <Link to="/about" className='transition-all duration-200 delay-150 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                        Product warranty
                                    </Link>
                                </li>
                                <li className='text-sm flex items-center tracking-normal group transition-all duration-200 ease-linear align-middle'>
                                    <span className='transition-all duration-200 delay-150 ease-linear align-middle inline-block w-[8px] h-[8px] bg-orange-500 -rotate-[45deg] group-hover:w-0 group-hover:h-0'></span>
                                    <Link to="/about" className='transition-all duration-200 delay-150 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='text-sm flex items-center tracking-normal group transition-all duration-200 ease-linear align-middle'>
                                    <span className='transition-all duration-200 delay-150 ease-linear align-middle inline-block w-[8px] h-[8px] bg-orange-500 -rotate-[45deg] group-hover:w-0 group-hover:h-0'></span>
                                    <Link to="/about" className='transition-all duration-200 delay-150 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className='px-4 uppercase transition-all duration-200 ease-linear delay-150 hover:text-orange-500'>
                        <Link to="/collections">
                            Shop
                        </Link>
                    </li>
                    <li className='px-4 uppercase transition duration-200 ease-linear delay-150 hover:text-orange-500'>
                        <Link to="/contact-us">
                            Contact us
                        </Link>
                    </li>
                </ul>
                {
                    isFirstAsideOpen && <div className='w-full h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-[50]'>
                    <aside className={`w-[250px] h-full bg-white absolute top-0 right-0 transition-all duration-200 delay-200 ease-linear shadow-md z-50 ${isFirstAsideOpen ? "translate-x-0": "translate-x-full"}`}>
                        <div className='h-[60px] relative flex items-center justify-end'>
                            <button onClick={handleFirstAside} className='py-4 px-4'>
                                <FontAwesomeIcon icon={faTimes} className='text-2xl' />
                            </button>
                        </div>
                        <ul className='w-full h-full'>
                            <li className='px-4 py-3 transition-all duration-200 ease-linear group hover:bg-orange-400 hover:text-white'>
                                <Link to="/" className='flex justify-between items-center'>
                                    <span>Home</span>
                                    <span className='flex relative'>
                                        <FontAwesomeIcon icon={faMinus} className='transition-all duration-200 ease-linear invisible group-hover:visible' />
                                        <FontAwesomeIcon icon={faAngleRight} className='transition-all duration-200 ease-linear absolute left-0 group-hover:left-1/2' />
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleSecondAside} className='px-4 py-3 flex w-full justify-between items-center transition-all duration-200 group ease-linear hover:bg-orange-500 hover:text-white'>
                                    <span className='inline-block'>
                                        Pages
                                    </span>
                                    <span className='flex relative'>
                                        <FontAwesomeIcon icon={faMinus} className='transition-all duration-200 ease-linear invisible group-hover:visible' />
                                        <FontAwesomeIcon icon={faAngleRight} className='transition-all duration-200 ease-linear absolute left-0 group-hover:left-1/2' />
                                    </span>
                                </button>
                                <aside className={`transition-all duration-200 ease-linear bg-white h-screen absolute top-0 left-0 w-full ${ isSecondAsideOpen ? "translate-x-0": "translate-x-full"} z-50`}>
                                    <div className='h-[100px]'>
                                        <div className='h-1/2 flex justify-between'>
                                            <button onClick={handleSecondAside} className='px-4 py-2'>
                                                <FontAwesomeIcon icon={faAngleLeft} className='text-lg' />
                                            </button>
                                            <button onClick={handleFirstAside} className='px-4 py-2'>
                                                <FontAwesomeIcon icon={faTimes} className='text-lg' />
                                            </button>
                                        </div>
                                        <div className='h-1/2 border-2 bg-[#f1f1f1] flex items-center'>
                                            <h4 className='px-4'>
                                                Pages
                                            </h4>
                                        </div>
                                    </div>
                                    <ul className='h-full'>
                                        <li className='px-4 py-2 border-b-2'>
                                            <Link to="/about">
                                                About us
                                            </Link>
                                        </li>
                                        <li className='px-4 py-2 border-b-2'>
                                            <Link to="/collections">
                                                Gallery
                                            </Link>
                                        </li>
                                        <li className='px-4 py-3 border-b-2'>
                                            <Link to="/collections">
                                                Product Warranty
                                            </Link>
                                        </li>
                                        <li className='px-4 py-3 border-b-2'>
                                            <Link to="/collections">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className='px-4 py-3 border-b-2'>
                                            <Link to="/collections">
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </li>
                            <li>
                                <button onClick={handleThirdAside} className='px-4 py-3 w-full flex justify-between items-center transition-all duration-200 ease-linear group hover:bg-orange-500 hover:text-white'>
                                    <span className='inline-block'>
                                        Shop
                                    </span>
                                    <span className='flex relative'>
                                        <FontAwesomeIcon icon={faMinus} className='transition-all duration-200 ease-linear invisible group-hover:visible' />
                                        <FontAwesomeIcon icon={faAngleRight} className='transition-all duration-200 ease-linear absolute left-0 group-hover:left-1/2' />
                                    </span>
                                </button>
                                <aside className={`transition-all duration-200 ease-linear w-full h-screen absolute top-0 left-0 bg-white ${isThirdAsideOpen ? "translate-x-0": "translate-x-full"} z-50`}>
                                    <div className='h-[100px]'>
                                        <div className='h-1/2 flex justify-between'>
                                            <button onClick={handleThirdAside} className='px-4 py-2'>
                                                <FontAwesomeIcon icon={faAngleLeft} className='text-lg' />
                                            </button>
                                            <button onClick={handleFirstAside} className='px-4 py-2'>
                                                <FontAwesomeIcon icon={faTimes} className='text-lg' />
                                            </button>
                                        </div>
                                        <div className='h-1/2 border-2 bg-[#f1f1f1] flex items-center'>
                                            <h4 className='px-4'>
                                                Shop
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='px-4 py-3'>
                                         <h3 className='font-bold text-xl'>
                                             Shop Listings
                                         </h3>
                                         <ul>
                                             <li className='px-3 py-3 group'>
                                                 <span className='transition-all duration-200 ease-linear w-[8px] h-[8px] bg-orange-500 inline-block -rotate-45 group-hover:w-[0] group-hover:h-[0]'></span>
                                                 <Link to="" className='transition-all duration-200 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                                     Wishlist Page
                                                 </Link>       
                                             </li>
                                             <li className='px-3 py-3 group'>
                                                 <span className='transition-all duration-200 ease-linear w-[8px] h-[8px] bg-orange-500 inline-block -rotate-45 group-hover:w-[0] group-hover:h-[0]'></span>
                                                 <Link to="" className='transition-all duration-200 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                                     Cart Page
                                                 </Link>       
                                             </li>
                                             <li className='px-3 py-3 group'>
                                                 <span className='transition-all duration-200 ease-linear w-[8px] h-[8px] bg-orange-500 inline-block -rotate-45 group-hover:w-[0] group-hover:h-[0]'></span>
                                                 <Link to="" className='transition-all duration-200 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                                      Checkout Page
                                                 </Link>       
                                             </li>
                                             <li className='px-3 py-3 group'>
                                                 <span className='transition-all duration-200 ease-linear w-[8px] h-[8px] bg-orange-500 inline-block -rotate-45 group-hover:w-[0] group-hover:h-[0]'></span>
                                                 <Link to="" className='transition-all duration-200 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                                     Order Tracking
                                                 </Link>       
                                             </li>
                                             <li className='px-3 py-3 group'>
                                                 <span className='transition-all duration-200 ease-linear w-[8px] h-[8px] bg-orange-500 inline-block -rotate-45 group-hover:w-[0] group-hover:h-[0]'></span>
                                                 <Link to="" className='transition-all duration-200 ease-linear pl-3 group-hover:text-orange-500 group-hover:pl-0'>
                                                     Login & Register
                                                 </Link>       
                                             </li>
                                         </ul>
                                    </div>

                                </aside>
                            </li>
                            <li className='px-4 py-3 transition-all duration-200 ease-linear group hover:bg-orange-500 hover:text-white'>
                            <Link to="/" className='flex justify-between items-center'>
                                    <span>Contact</span>
                                    <span className='flex relative'>
                                        <FontAwesomeIcon icon={faMinus} className='transition-all duration-200 ease-linear invisible group-hover:visible' />
                                        <FontAwesomeIcon icon={faAngleRight} className='transition-all duration-200 ease-linear absolute left-0 group-hover:left-1/2' />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
                }
                <div className='hidden lg:flex items-center gap-6 text-lg'>
                    <button onClick={handleSearchDisplay} className='group'>
                        <FontAwesomeIcon icon={faSearch} className='transition-all duration-200 ease-linear delay-150 group-hover:text-orange-500' />
                    </button>
                    <button className='group'>
                        <FontAwesomeIcon icon={faShoppingCart} className='transition-all duration-200 ease-linear delay-150 group-hover:text-orange-500' />
                    </button>
                </div>
                <div className='flex justify-between items-center lg:hidden'>
                    <button onClick={handleFirstAside} className='py-4'>
                        <FontAwesomeIcon icon={faBars} className='text-2xl' />
                    </button>
                </div>
            </section>
            <section className={`h-screen w-full bg-[rgba(0,0,0,0.5)] transition-all duration-200 ease-linear delay-150 fixed z-50 inset-0 overflow-hidden ${isSearchOpen ? "visible" : "invisible"}`}>
                <div className={`h-1/2 w-full bg-[#F6F0E6] transition-all duration-500 ease-linear grid place-items-center absolute z-40 ${isSearchOpen ? "!top-0" : "-top-full"}`}>
                    <div className='flex items-center bg-white w-96 border-2 border-yellow-500'>
                        <input type="text" className='w-[85%] px-4 py-3 outline-none' />
                        <button className='w-[15%] py-[14px] flex items-center justify-center'>
                            <FontAwesomeIcon icon={faSearch} className='text-xl' />
                        </button>
                    </div>
                    <button onClick={handleSearchDisplay} className='px-4 py-3 bg-yellow-950 flex justify-center shadow-md items-center absolute top-5 right-5 rounded-full'>
                        <FontAwesomeIcon icon={faTimes} className='text-3xl text-white' />
                    </button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
