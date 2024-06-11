'use client'

import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import CarouselComp from "@/components/ui/carousel/CarouselComp";

export default function Home() {
    return (
        <MainLayout>
            <CarouselComp />
            <div className="max-w-[1200px] mx-auto">
                <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
                <div className="grid grid-cols-5 gap-4"></div>
            </div>
        </MainLayout>
    );
}
