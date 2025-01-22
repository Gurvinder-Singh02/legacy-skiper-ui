import { cn } from '@/lib/utils';
import { Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


interface WrapButtonProps {
    className?: string;
    children: React.ReactNode;
    href?: string;
    bgColor?: string;
}

const WrapButton: React.FC<WrapButtonProps> = ({ className, children, href, bgColor, ...props }) => {
    return (
        <div className='flex items-center justify-center' >
            {href ? <Link href={href} {...props} >
                <div className={cn("group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full", className)} >
                    <div className={cn('border border-[#3B3A3A] bg-[#ff3f17]  h-[43px] rounded-full flex items-center justify-center text-white', bgColor)}>
                        <p className='font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ' >{children}</p>
                    </div>
                    <div className='text-[#3b3a3a] group-hover:ml-6  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ' >
                        <ArrowRight size={18} className='group-hover:rotate-180 ease-in-out transition-all ' />
                    </div>
                </div >
            </Link > : <div className={cn("group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full", className)} >
                <div className={cn('border border-[#3B3A3A] bg-[#ff3f17]  h-[43px] rounded-full flex items-center justify-center text-white', bgColor)}>
                    <Globe className='mx-2 animate-spin ' />
                    <p className='font-medium tracking-tight mr-3' >{children}</p>
                </ div >
                <div className='text-[#3b3a3a] group-hover:ml-6  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ' >
                    <ArrowRight size={18} className='group-hover:rotate-180 ease-in-out transition-all ' />
                </div>
            </div >
            }

        </div>
    )
}

export default WrapButton