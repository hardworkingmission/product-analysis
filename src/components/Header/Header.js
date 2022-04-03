import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className="
            relative
            w-full
            md:w-5/6
            mx-auto
            flex flex-wrap
            items-center
            justify-center
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
            ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="
                    navbar-toggler
                    text-gray-500
                    border-0
                    hover:shadow-none hover:no-underline
                    py-2
                    px-2.5
                    bg-transparent
                    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                    </path>
                </svg>
                </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none justify-center mx-auto">
                        <li className="nav-item p-2">
                            <CustomLink className="nav-CustomLink text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/'>Home</CustomLink>
                        </li>
                        <li className="nav-item p-2">
                            <CustomLink className="nav-CustomLink text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/reviews'>Reviews</CustomLink>
                        </li>
                        <li className="nav-item p-2">
                            <CustomLink className="nav-CustomLink text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/dashboard'>Dashboard</CustomLink>
                        </li>
                        <li className="nav-item p-2">
                            <CustomLink className="nav-CustomLink text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/blogs'>Blogs</CustomLink>
                        </li>
                        <li className="nav-item p-2">
                            <CustomLink className="nav-CustomLink text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/about'>About</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        );
};

export default Header;