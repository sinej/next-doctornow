'use client'

import React from 'react';
import TopMenu from "@/components/layouts/includes/TopMenu";
import MainHeader from "@/components/layouts/includes/MainHeader";
import SubMenu from "@/components/layouts/includes/SubMenu";
import Footer from "@/components/layouts/includes/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="main_layout">
            <TopMenu />
            <MainHeader />
            <SubMenu />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;