import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



// Layouts and components are imported here
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <main className='select-none overflow-x-hidden relative z-0 bg-[#FAF7F2]'>
            <header className='bg-transparent w-full overflow-x-hidden relative'>
                <div id="top-bar" className='bg-black h-[40px] w-full text-white text-sm font-nunito flex justify-center md:justify-between items-center px-4'>
                    <div className='flex justify-center md:justify-between items-center container mx-auto'>
                        <div className='hidden items-center gap-3 lg:flex'>
                            <Link to='/order-tracking'>Track Your Order</Link>
                            <span> | </span>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='hidden items-center gap-3 md:flex'>
                            <p>🔥</p>
                            <p>
                                Stylish Furniture, Timesless Design, Comfort Guaranteed
                            </p>
                        </div>
                        <div className='flex items-center tracking-widest gap-6 md:gap-3 text-lg'>
                            <button>EN</button>
                            <span> | </span>
                            <Link to="" className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCircleUser} />
                                <span className='hidden md:block'> Log in
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} className='hidden md:block' />
                            </Link>
                        </div>
                    </div>
                </div>
                <Navbar />
                <Hero />
            </header>
            <Outlet />
            <Footer />
        </main>
    )
}

export default Dashboard
