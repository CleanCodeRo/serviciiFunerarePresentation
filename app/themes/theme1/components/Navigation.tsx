import { PhoneCallIcon } from "lucide-react"
import Link from "next/link"


const Navigation = () => {
  return (
    <div className="border-b">
        <div className="flex items-center gap-5 justify-between">
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="flex ml-4 gap-x-2 font-bold text-xl">
                    <p>Logo</p>
                    <p>Name</p>
                </Link>
            </div>
            <div className="flex flex-row gap-5">
                <Link href="#about" className="flex gap-2">About</Link>
                <Link href="/themes" className="flex gap-2">Themes</Link>
            </div>
            <div className="ml-auto gap-10 flex mr-20">
                <div>
                    Formular de contact
                </div>
                <div className="flex gap-2">
                    <PhoneCallIcon size={24}/>
                    <p>0722 222 222</p>
                </div>
                <div>
                    Meniu
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation