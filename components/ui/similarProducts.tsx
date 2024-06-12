'use client'

import React from 'react';
import {products} from "@/mock/products";
import Product from "@/components/ui/Product";
import {BiLoader} from "react-icons/bi";

const SimilarProducts = () => {
    return (
        <div>
            <div className="border-b py-1 max-w-[1200px] mx-auto">
                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">광고</div>

                    {products.length > 0 ?
                        <div className="grid grid-cols-5 gap-4">
                            {products.map(product => <Product key={product.id} {...product} />)}
                        </div> :
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-4 font-semibold">
                                <BiLoader size={30} className="text-blue-300 animate-spin" />
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default SimilarProducts;