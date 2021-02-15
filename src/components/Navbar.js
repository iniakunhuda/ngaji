import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaQuran } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
{/*            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        >
                            Ngaji
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/surat"
                                >
                                    <BsBookHalf className="fa fa-facebook-square text-lg leading-lg text-white opacity-75" />
                                    <span className="ml-2">Daftar Surat</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/bookmark"
                                >
                                    <BsBookmarks  className="fa fa-twitter text-lg leading-lg text-white opacity-75" />
                                    <span className="ml-2">Bookmark</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>*/}

            <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div className="pl-4 flex items-center">
                        <h3 className="2xl:text-lg h-3 pr-3 fill-current text-purple-500"><FaQuran  /></h3>
                        <Link className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
                           to="/">
                            Ngaji
                        </Link>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "w-full flex-grow lg:flex lg:content-center lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20" +
                            (navbarOpen ? " " : " hidden")
                        }
                        id="nav-content">
                        <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
                            <div className="relative pull-right pl-4 pr-4 md:pr-0">
                                {/*<input type="search" placeholder="Cari Nama Surat.."*/}
                                {/*       className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-purple-500 rounded py-1 px-2 pl-10 appearance-none leading-normal" />*/}
                                {/*<BsSearch className="absolute search-icon" style={{'top': '0.375rem', 'left': '1.75rem'}} />*/}
                            </div>
                        </div>
                        <ul className="list-reset lg:flex justify-end items-center">
                            <li className="mr-3 py-2 lg:py-0">
                                <Link className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                                   to="/">Home</Link>
                            </li>
                            <li className="mr-3 py-2 lg:py-0">
                                <Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                                   to="/">About</Link>
                            </li>
                            <li className="mr-3 py-2 lg:py-0">
                                <Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                                   to="/">Version</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar