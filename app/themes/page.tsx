import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ThemesPage = () => {
  return (
    <div className='flex items-center justify-center mt-10 gap-10'>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'><Link href="/themes/theme1">Theme 1</Link></Button>
        <Button variant='outline'><Link href="/themes/theme2">Theme 2</Link></Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 3</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 4</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 5</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 6</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 7</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 8</Button>
        <Button className=' px-4 py-2 text-white font-semibold rounded-md'>Theme 9</Button>
        <Button className='px-4 py-2 text-white font-semibold rounded-md'>Theme 10</Button>
    </div>
  )
}

export default ThemesPage