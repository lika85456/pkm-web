import React from "react";
import Navigation from "./Navigation";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-full flex justify-center xl:flex-row flex-col">
            <div className="xl:absolute xl:left-8">
                <Navigation />
            </div>
            <div className="max-w-full xl:w-[650px]">
                {children}
            </div>
        </div>
    );
};

export default Layout;