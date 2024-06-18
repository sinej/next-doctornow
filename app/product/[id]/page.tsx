'use client'

import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {product, products} from "@/mock/products";
import SimilarProducts from "@/components/ui/similarProducts";
import {useRouter} from "next/navigation";

interface PageProps {
    params?: React.ReactNode,
}

const Page = ({params}: PageProps) => {

    const router = useRouter();
    return (
        <MainLayout>
            <div className="max-w-[1200px] mx-auto flex items-start">
                {product.url ?
                    <img className="w-[40%] rounded-lg" src={`${product?.url}/280`} alt=""/> :
                    <div className="w-[40%]"></div>
                }

                <div className="px-4 w-full">
                    <div className="font-bold text-xl">{product.title}</div>
                    <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>

                    <div className="border-b py-1"/>

                    <div className="pt-3 pb-2">
                        <div className="flex items-center">
                            Condition: <span className="font-bold text-[17px] ml-2">New</span>
                        </div>
                    </div>

                    <div className="border-b py-1"/>

                    <div className="pt-3">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center">
                                Price:
                                {product?.price ?
                                    <div className="">
                                        {((product?.price) / 100).toFixed(2)}
                                    </div> :
                                null
                                }
                            </div>
                            
                            <button className="bg-[#3498C9] text-white py-2 px-20 rounded-full cursor-pointer"
                                    onClick={() => router.push('/cart')}
                            >
                                장바구니 추가
                            </button>

                        </div>
                        
                        <div className="border-b py-1"></div>
                        
                        <div className="pt-3">
                            <div className="font-semibold">Description</div>
                            <div className="text-sm">{product?.description}</div>
                        </div>
                    </div>
                </div>
            </div>
                <SimilarProducts/>
        </MainLayout>
    );
};

export default Page;