import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


const OtherButotns = () => {
    return (
        <div>
            <Button className="rounded-full py-0 ps-0">
                <div className="me-0.5 flex aspect-square h-full p-1.5">
                    <Image
                        className="h-auto w-full rounded-full"
                        src="https://100x-wallet.gxuri.in/avatar.png"
                        alt="Profile image"
                        width={24}
                        height={24}
                        aria-hidden="true"
                    />
                </div>
                @gurvinder_guri
            </Button>
        </div>
    )
}

export default OtherButotns