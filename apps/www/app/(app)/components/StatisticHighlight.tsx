"use client"

import React, { useState, useEffect } from 'react';
import { Icons } from "@/components/icons";
import NumberFlow from '@number-flow/react';

const StatisticHighlight = ({ text, num }: { text: string; num: number }) => {

    const [percentage, setPercentage] = useState < number > (num);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prevPercentage => {

                const changeDirection = Math.random() < 0.5 ? -1 : 1;

                const randomChange = changeDirection * (1 + Math.floor(Math.random() * 3));

                return Math.min(num + 10, Math.max(num - 10, prevPercentage + randomChange));
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-20 flex flex-col items-center justify-center">
            <div className="mx-auto flex h-[90px] max-w-[480px] items-center justify-center gap-4 rounded-3xl border-2 border-dashed px-6">
                <div>
                    <Icons.thumbUp />
                    <h3 className="flex text-xl font-bold ">
                        <NumberFlow value={percentage} />%
                    </h3>
                    <Icons.thumbDown />
                </div>
                <p className="text-lg opacity-60">
                    {text}
                </p>
            </div>

            <div className="mx-auto mt-10 flex flex-col items-center justify-center">
                <h5 className="flex items-center justify-end gap-2 text-center text-lg md:text-2xl lg:text-3xl">
                    Templates are fully designed products
                    <span className="scale-125">
                        <Icons.pLogo />
                    </span>
                </h5>
                <h5 className="text-center text-lg md:text-2xl lg:text-3xl ">
                    and even have <span className="font-bold">real daily active users.</span>
                </h5>
            </div>
            <div className="mt-10 scale-125">
                <Icons.handArrows />
            </div>
        </div>
    );
};

export default StatisticHighlight;