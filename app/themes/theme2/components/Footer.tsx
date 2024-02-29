import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center h-24 bg-slate-800 text-white flex-col gap-5'>
        &copy; 2024 CleanCode
        <Button>
          <Link href='/themes'>Back to themes</Link>
        </Button>
    </footer>
  )
}

export default Footer