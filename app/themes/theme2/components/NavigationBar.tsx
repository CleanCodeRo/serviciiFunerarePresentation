'use client'
import Link from 'next/link'
import React from 'react'
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import useMenuActive from '@/hooks/useMenuActive';
import { useRouter } from 'next/navigation';

const NavigationBar = () => {

  const router = useRouter();

  return (
    <Navbar>
      <Link href='/'>
        Logo Name
      </Link>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href='#acasa' active={useMenuActive("#acasa")}>
          Acasa
        </NavbarLink>
        <NavbarLink href='#pachete'>
          Pachete
        </NavbarLink>
        <NavbarLink href='#'>
          Servicii
        </NavbarLink>
        <NavbarLink href='#'>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavigationBar