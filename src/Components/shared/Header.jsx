import React, { Fragment } from 'react'
import { GoSearch } from "react-icons/go";
import { IoChatboxEllipsesOutline, IoNotificationsOutline } from "react-icons/io5";
import { Popover, Transition, Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center'>
            <div className='relative'>
                <GoSearch fontSize={20} className='absolute translate-y-1/2 left-3 text-gray-400' />
                <input type="text"
                    placeholder='Search...'
                    className='text-sm focus:outline-none active:outine-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4' />
            </div>
            <div className='flex items-center gap-2 mr-2 '>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(open && 'bg-gray-100', 'inline-flex items-center rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5'
                                )}>
                                <IoChatboxEllipsesOutline fontSize={20} />

                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-3 w-60 sm:px-0 lg:max-w-3xl">
                                    <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Messages</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            This is messages panel
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(open && 'bg-gray-100', 'inline-flex items-center rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5'
                                )}>
                                <IoNotificationsOutline fontSize={20} />

                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-3 w-60 sm:px-0 lg:max-w-3xl">
                                    <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Notifications</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            This is messages panel
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus-ring-2">
                            <span className='sr-only'>Open user menu</span>
                            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
                                <span className='sr-only'> Hugh Jackson </span>
                            </div>

                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/settings')}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/signout')}
                                    >
                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>


                        </Menu.Items>
                    </Transition>
                </Menu>


            </div>
        </div >
    )

}

export default Header
