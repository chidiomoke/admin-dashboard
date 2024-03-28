import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DAHSBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { RiLogoutBoxRLine } from "react-icons/ri";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base '

const Sidebar = () => {
    return (
        <>
            <div className='bg-neutral-900 flex flex-col text-white h-screen w-60 p-3'>
                <div className='flex gap-2 px-1 py-3'>
                    <FcBullish fontSize={24} />
                    <span className='text-neutral-100 text-lg'>Sellmega</span>
                </div>
                <div className='flex-1 py-6 flex flex-col gap-0.5'>
                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                    ))}
                </div>
                <div className='flex flex-col gap-0.5 border-t border-neutral-600 pt-2'>
                    {DAHSBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
                        <SidebarLink key={item.key} item={item} />
                    ))}

                    <div className={classNames('text-red-500 cursor-pointer', linkClasses)} >
                        <span className='text-xl'>
                            <RiLogoutBoxRLine />
                        </span>
                        <Link to='/' className='text-red-500 hover:no-underline '> Logout</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link to={item.path} className={classNames(pathname === item.path ? "bg-neutral-700 text-white" : "text-neutral-400", linkClasses)} >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link >
    )
}


export default Sidebar
