'use client'

import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import SimilarProducts from "@/components/ui/similarProducts";
import {product} from "@/mock/products";
import CartItem from "@/components/ui/cart/CartItem";


const Page = () => {
    return (
        <MainLayout>
            <div className="max-w-[1200px] mx-auto mb-8  min-h-[300px]">
                <div className="text-2xl font-bold my-4">장바구니</div>
                <div className="relative flex items-baseline justify-between gap-2">
                    <div className="w-[65%]">
                        <CartItem key={product.id} {...product} />
                    </div>
                </div>
            </div>
            <SimilarProducts/>
        </MainLayout>
    );
};

export default Page;