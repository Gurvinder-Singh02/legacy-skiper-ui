// https://cruip-tutorials.vercel.app/cards-hover-effect/
import Image from 'next/image';
import React from 'react';

export function HoverCard() {
    return (
        <>
            <section className='mx-auto grid gap-6 max-md:max-w-xs md:grid-cols-3 '>
                <div className="group  relative rounded-2xl border bg-gradient-to-t from-[#242424] to-[#020202] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 hover:from-[#182135] hover:to-[#080808] ">
                    <div className='relative'>
                        <div className='px-6 py-5'>
                            <div className='mb-1 w-fit rounded-full bg-white px-3 py-1 text-sm text-black transition-all duration-500 ease-in-out group-hover:bg-blue-400 group-hover:text-white'>
                                stastic
                            </div>
                            <span className='mb-1 inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden'>
                                Subscriber Reports
                            </span>
                            <span className='mb-1 hidden pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block'>
                                Subscriber Highlights
                            </span>
                            <p className='text-sm text-slate-500'>
                                Building truly great products is both art and science. It&apos;s part
                                intuition and part data.
                            </p>
                        </div>
                        <div className='relative transition-transform duration-500 ease-in-out group-hover:-translate-y-2 '>
                            <Image
                                className='m-0 h-full object-cover  p-0 transition-opacity duration-500 group-hover:opacity-0'
                                src='/simplechartt.webp'
                                width={350}
                                height={240}
                                alt='Card image 01'
                            />
                            <Image
                                className='absolute left-0 top-0 m-0 h-full object-cover  p-0 opacity-0  transition-opacity  duration-300 group-hover:opacity-100'
                                src='/chartt.webp'
                                width={350}
                                height={240}
                                alt='Card image 01 displaying on hover'
                                aria-hidden='true'
                            />
                        </div>
                    </div>
                </div>
                <div className="group  relative rounded-2xl border bg-gradient-to-t from-[#050a0a] to-[#051818] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 hover:from-[#05070a] hover:to-[#0b1a3b] ">
                    <div className='relative'>
                        <div className='px-6 py-5'>
                            <div className='mb-1 w-fit  rounded-full bg-green-400 px-3 py-1 text-sm text-white transition-all duration-500 ease-in-out group-hover:bg-blue-600'>
                                Password
                            </div>
                            <span className='mb-1 inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden'>
                                Don&apos;t Show Your Password
                            </span>
                            <span className='mb-1 hidden pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block'>
                                Hide Your Password
                            </span>
                            <p className='text-sm text-slate-500'>
                                If you don&apos;t hide your password then we can see it and know it
                                and then can enter your account
                            </p>
                        </div>
                        <div className='relative transition-transform duration-500 ease-in-out group-hover:-translate-y-2'>
                            <Image
                                className='transition-opacity duration-500 group-hover:opacity-0'
                                src='/fullverificationtwo_fpi9eo.webp'
                                width={350}
                                height={240}
                                alt='Card image 01'
                            />
                            <Image
                                className='absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src='/verification_iwnfmj.webp'
                                width={350}
                                height={240}
                                alt='Card image 01 displaying on hover'
                                aria-hidden='true'
                            />
                        </div>
                    </div>
                </div>
                <div className="bbefore:bg-[url('/noise.gif')]  group relative rounded-2xl border bg-gradient-to-t from-[#171c35] to-[#000000] before:absolute before:inset-0 before:opacity-5  hover:from-[#2b131e] hover:to-[#141414] ">
                    <div className='relative'>
                        <div className='px-6 py-5'>
                            <div className='mb-1 w-fit rounded-full bg-blue-400 px-3 py-1 text-sm text-white transition-all duration-500 ease-in-out group-hover:bg-red-500'>
                                Alert
                            </div>
                            <span className='mb-1 inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden'>
                                Chatting Seemlessly
                            </span>
                            <span className='mb-1 hidden pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block'>
                                Don&apos;t Hide Chat
                            </span>
                            <p className='text-sm text-slate-500'>
                                Building truly great products is both art and science. It&apos;s part
                                intuition and part data.
                            </p>
                        </div>
                        <div className='relative transition-transform duration-500 ease-in-out group-hover:-translate-y-2'>
                            <Image
                                className='transition-opacity duration-500 group-hover:opacity-0'
                                src='/chat_zinhdw.webp'
                                width={350}
                                height={240}
                                alt='Card image 01'
                            />
                            <Image
                                className='absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src='/hide_chat_egk7h4.webp'
                                width={350}
                                height={240}
                                alt='Card image 01 displaying on hover'
                                aria-hidden='true'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


