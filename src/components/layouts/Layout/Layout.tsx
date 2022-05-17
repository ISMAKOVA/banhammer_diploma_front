import * as React from 'react';
import Sidebar from "../Sidebar/Sidebar";

type LayoutProps = {
    children?: React.ReactNode
};
const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <div className="fixed flex w-full h-full text-my-text-color">
            <Sidebar/>
            <main className="bg-transparent w-full h-screen  flex-1 overflow-auto no-scrollbar">
                <div className="h-auto card-main m-6">
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Layout;
