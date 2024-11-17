'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './../ui/dropdown-menu'
import { Menu, XIcon } from 'lucide-react'

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isClient, setIsClient] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    useEffect(() => {
        setIsClient(true)

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className='flex justify-between items-center z-10 px-8 w-full absolute'>
            <div className='flex justify-between w-full items-center py-3'>
                <Link href={'/'}>
                    <div className='flex items-center justify-center text-gray-50'>
                        <Image src='/logo2.png' alt='Logo Manga' width={90} height={90} />
                        <p className='font-sans font-medium'>Superior College Lalazar Campus</p>
                    </div>
                </Link>

                {isClient && (
                    <ul
                        ref={menuRef}
                        className={`flex text-white text-base uppercase flex-col duration-300 sm:flex-row absolute right-0 w-screen h-screen sm:h-fit sm:top-0 sm:relative sm:bg-transparent gap-6 items-center justify-center max-sm:bg-yellow-500 ${showMenu ? 'top-0' : '-top-[100vh]'}`}
                    >
                        <li onClick={closeMenu}>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <button className='cursor-pointer text-white text-base uppercase'>Intermediate</button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Intermediate Programs</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="med">
                                            <Link href='/intermediate/pre-medical'>FSC Pre Medical</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="eng">
                                            <Link href='/intermediate/pre-engineering'>FSC Pre Engineering</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="ics">
                                            <Link href='/intermediate/ics'>ICS</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="i-com">
                                            <Link href='/intermediate/i-com'>I-COM</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="fa">
                                            <Link href='/intermediate/fa'>F.A</Link>
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <button className='cursor-pointer text-white text-base uppercase'>DAE</button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <Link href={'/dae'}>
                                            DAE Programs
                                        </Link>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="chemical">
                                            <Link href='/dae/chemical-technology'>Chemical Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="electrical">
                                            <Link href='/dae/electrical-engineering'>Electrical Engineering</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="office-management">
                                            <Link href='/dae/office-management'>Office Management</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="architure-enginnering">
                                            <Link href='/dae/architure-engineering'>Architecture Engineering</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="biomedical-technology">
                                            <Link href='/dae/biomedical-technology'>Bio-Medical Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="civil-technology">
                                            <Link href='/dae/civil-technology'>Civil Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="computer-hardware">
                                            <Link href='/dae/computer-hardware'>Computer Hardware</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="electrical-engineering">
                                            <Link href='/dae/electrical-engineering'>Electrical Engineering</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="electronics">
                                            <Link href='/dae/electronics'>Electronics</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="fashion-designing">
                                            <Link href='/dae/fashion-designing'>Fashion Designing</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="mechanical-technology">
                                            <Link href='/dae/mechanical-technology'>Mechanical Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="ref-technology">
                                            <Link href='/dae/ref-technology'>Refregration Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="telecommunication-technology">
                                            <Link href='/dae/telecommunication-technology'>Telecommunication Technology</Link>
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <button className='cursor-pointer text-white text-base uppercase'>Medical</button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <Link href={'/medical'}>
                                            Medical Programs
                                        </Link>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="cardiac">
                                            <Link href='/medical/cardiac-technology'>Cardiac Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="dental-hygiene">
                                            <Link href='/medical/dental-hygiene'>Dental Hygiene</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="dispensing-technology">
                                            <Link href='/medical/dispensing-technology'>Dispensing Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="medical-imaging-technology">
                                            <Link href='/medical/medical-imaging-tech'>Medical Imaging Technology</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="medical-lab">
                                            <Link href='/medical/medical-lab'>Medical Lab</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="operation-theatre">
                                            <Link href='/medical/operation-theatre'>Operation Theatre</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="opthalmic">
                                            <Link href='/medical/opthalmic'>Opthalmic</Link>
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem onClick={closeMenu} value="physiotherapy">
                                            <Link href='/medical/physiotherapy'>Physiotherapy</Link>
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href='/campus-facilities'>Campus Facilities</Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href='/admissions'>Admission</Link>
                        </li>
                        {/* Contact Button for Mobile View */}
                        <li className='sm:hidden' onClick={closeMenu}>
                            <Link href='/contact'>
                                <Button className='bg-[#0C7E81] px-9 hover:bg-yellow-700'>Contact</Button>
                            </Link>
                        </li>
                    </ul>
                )}

                <div>
                    <button onClick={() => toggleMenu()} className='text-white sm:hidden z-20 relative'>
                        {showMenu ? <XIcon /> : <Menu />}
                    </button>
                    <Link href={'/contact'}>
                        <Button className='max-sm:hidden md:block bg-yellow-500 px-9 hover:bg-yellow-700'>Contact</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
