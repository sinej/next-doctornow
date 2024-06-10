'use client'

import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {BiLoaderCircle} from "react-icons/bi";
import Link from "next/link";

const MainHeader = () => {
    return (
        <header className="border-b" id="MainHeader">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex items-center w-full bg-white">
                    <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                        <Link href="/">
                            <img src="/images/logo.svg" alt="로고" width="120" />
                        </Link>

                        <div className="w-full">
                            <div className="relative flex items-center">
                                <div className="relative flex items-center border-2 border-gray-900 w-full p-2">
                                    <button className="flex items-center">
                                        <AiOutlineSearch size={22} />
                                    </button>

                                    <input className="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                                           placeholder="무엇이든 검색하세요."
                                           type="text"
                                    />
                                </div>

                                <button className="flex items-center bg-blue-600 text-sm font-semibold text-white p-[11px] ml-2 px-4 flex-row">
                                    검색
                                </button>
                                
                                <div className="text-xs px-2 hover:text-blue-500 cursor-pointer">옵션</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;