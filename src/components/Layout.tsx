import * as React from 'react';
import Sidebar from "./Sidebar";

type LayoutProps = {
    children?: React.ReactNode
};
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <nav>
                <Sidebar />
            </nav>
            <main style={{backgroundColor: "aqua"}}>
                {children}
            </main>
          <footer style={{backgroundColor: "blue"}}>

          </footer>
        </>
    )
}
export default Layout;
