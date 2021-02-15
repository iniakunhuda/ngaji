import { Link } from 'react-router-dom';
import React from "react";

const Menu = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const cls_menu_active = "block align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
    const cls_menu_inactive = "block align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"

    return (
        <>
            <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
                <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
                <div className="block lg:hidden sticky inset-0 mb-5">
                    <button id="menu-toggle"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
                        <svg className="fill-current h-3 float-right" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "w-full sticky inset-0 h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" +
                        (navbarOpen ? " " : " hidden")
                    }
                    style={{'top': '5em'}} id="menu-content">
                    <ul className="list-reset">
                        <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                            <Link to="/"
                                  className={
                                      (props.active == 'home') ? cls_menu_active : cls_menu_inactive
                                  }>
                                <span className="pb-1 pl-5 md:pb-0 text-sm text-gray-900">Home</span>
                            </Link>
                        </li>
                        <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                            <Link to="/surat"
                                  className={
                                      (props.active == 'surat') ? cls_menu_active : cls_menu_inactive
                                  }>
                                <span className="pb-1 pl-5 md:pb-0 text-sm">Daftar Surat</span>
                            </Link>
                        </li>
                        <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
                            <Link to="/bookmark"
                                  className={
                                      (props.active == 'bookmark') ? cls_menu_active : cls_menu_inactive
                                  }>
                                <span className="pb-1 pl-5 md:pb-0 text-sm">Bookmark</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu