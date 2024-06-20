'use client'

import React, {Suspense} from 'react';
import TopMenu from "@/components/layouts/includes/TopMenu";
import MainHeader from "@/components/layouts/includes/MainHeader";
import SubMenu from "@/components/layouts/includes/SubMenu";
import Footer from "@/components/layouts/includes/Footer";
import Loading from "@/app/(site)/loading";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="main_layout">
            <Suspense fallback={<Loading />}>

            <TopMenu />
            <MainHeader />
            <SubMenu />
            {children}
            <Footer />
            </Suspense>
        </div>
    );
};

export default MainLayout;