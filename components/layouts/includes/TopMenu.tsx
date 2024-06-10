'use client'

import React from 'react';
import Link from "next/link";
import {BsChevronDown} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";

const TopMenu = () => {
    return (
        <section className="border-b" id="TopMenu">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul id="TopMenuLeft"
                    className="flex items-center text-[11px] text-neutral-900 px-2 h-8"
                >
                    <li className="relative px-3">
                        <Link href="/auth"
                              className="flex items-center gap-2 hover:underline cursor-pointer"
                        >
                            <div>로그인</div>
                            <BsChevronDown />
                        </Link>

                        <div id="AuthDropdown"
                             className="hidden absolute bg-white w-[200px] text-neutral-900 z-40 top-5 left-0 border shadow-lg"
                        >
                            <div className="flex items-center justify-start gap-1 p-3">
                                <img src="https://picsum.photos/200"
                                     alt="photo"
                                     width={50}
                                />
                                <div className="font-bold text-[13px]">
                                    shin-eunji
                                </div>
                            </div>
                            
                            <div className="border-b" />
                            <ul className="bg-white">
                                <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-400 hover:text-blue-500 cursor-pointer">
                                    <Link href="/orders">
                                        내 주문
                                    </Link>
                                </li>
                                <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-400 hover:text-blue-500 cursor-pointer">
                                    로그아웃
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="px-3 hover:underline cursor-pointer">
                        일일 특가
                    </li>
                    <li className="px-3 hover:underline cursor-pointer">
                        도움말 및 연락처
                    </li>
                </ul>

                <ul id="TopMenuRight"
                    className="flex items-center text-[11px] text-neutral-900 px-2 h-8"
                >
                    <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                        <img src="/images/kr.png" alt="Korea" width={32}/>
                        배송지
                    </li>
                    <li className="px-3 hover:underline cursor-pointer">
                        <div className="relative">
                            <AiOutlineShoppingCart size={22} />
                            <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                <div className="flex items-center justify-center -mt-[1px]">
                                    3
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TopMenu;