import React, {useEffect, useState} from "react";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import {ChatbubbleEllipses} from '@styled-icons/ionicons-outline/ChatbubbleEllipses';
import {Home} from '@styled-icons/boxicons-regular/Home';
import {Create} from '@styled-icons/ionicons-outline/Create';
import {Image} from '@styled-icons/ionicons-outline/Image';
import {Hammer} from '@styled-icons/ionicons-outline/Hammer';
import {LogOut} from '@styled-icons/ionicons-outline/LogOut';
import {LogIn} from '@styled-icons/ionicons-outline/LogIn';
import {Eye} from '@styled-icons/ionicons-outline/Eye';
import {List} from '@styled-icons/ionicons-outline/List';
import {People} from '@styled-icons/ionicons-outline/People';
import {Link, Navigate, useMatch, useResolvedPath} from 'react-router-dom';

export interface ISideMenuProps {

}

const Sidebar: React.FunctionComponent<ISideMenuProps> = (props) => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const ReactRouterMenuItem = (sidebarProps: any) => {
        const { to, ...menuItemProps } = sidebarProps;
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
            <MenuItem active={match} {...menuItemProps}>
                {sidebarProps.children}
                <Link to={sidebarProps.to} />
            </MenuItem>
        );
    }

    return (
        <div id="sidebar">
            <ProSidebar collapsed={menuCollapse} className="flex flex-col">
                <div className="logotext" onClick={menuIconClick}>
                    <div>{menuCollapse
                        ? <Hammer size="35"/>
                        : <p><Hammer size="30"/> Banhammer</p>
                    }</div>
                </div>
                <Menu iconShape="square" className="flex-grow">
                    {/*{подумать над названиями!!!!}*/}
                    <ReactRouterMenuItem icon={<Home size="20"/>} to="/main">
                        Главная
                    </ReactRouterMenuItem>
                    <SubMenu title="Комментарии" icon={<ChatbubbleEllipses size="20"/>}>
                        <ReactRouterMenuItem icon={<Eye size="20"/>} to="comment/view">
                            Таблица
                        </ReactRouterMenuItem>

                        <ReactRouterMenuItem icon={<List size="20"/>} to="comment/mark">Разметить</ReactRouterMenuItem>
                    </SubMenu>
                    <SubMenu title="Посты" icon={<Create size="20"/>}>
                        <ReactRouterMenuItem icon={<Eye size="20"/>} to="post/view">Таблица</ReactRouterMenuItem>
                        <ReactRouterMenuItem icon={<List size="20"/>} to="post/mark">Разметить</ReactRouterMenuItem>
                    </SubMenu>
                    <SubMenu title="Картинки" icon={<Image size="20"/>}>
                        <ReactRouterMenuItem icon={<Eye size="20"/>} to="picture/view">Таблица</ReactRouterMenuItem>
                        <ReactRouterMenuItem icon={<List size="20"/>} to="picture/mark">Разметить</ReactRouterMenuItem>
                    </SubMenu>
                    <ReactRouterMenuItem icon={<People size="20"/>} to="/about">О нас</ReactRouterMenuItem>
                </Menu>
                <Menu iconShape="square">
                    <ReactRouterMenuItem to="/login" icon={<LogOut size="20"/>}>Выйти</ReactRouterMenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default Sidebar;
