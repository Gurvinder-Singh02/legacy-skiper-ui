"use client"

import { cn } from '@/lib/utils'
import { GradientHeading } from '@/registry/default/ui/gradient-heading'
import { ArrowRight, Globe } from 'lucide-react'

import React, { useState } from 'react'



import { Input } from "@/components/ui/input";
import { toast } from 'sonner'
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
        },
    },
};

function SubscriptionForm() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {


        if (!name || !email) {
            toast.error("Whoops! Missing something?");
            return;
        }
        
        if (!isValidEmail(email)) {
            toast.error("Hmm... That email doesn’t look right");
            return;
        }
        
        setLoading(true);

        const promise = new Promise(async (resolve, reject) => {
            try {

                const mailResponse = await fetch("/api/mail", {
                    cache: "no-store",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ firstname: name, email }),
                });

                if (!mailResponse.ok) {
                    if (mailResponse.status === 429) {
                        reject("Rate limited");
                    } else {
                        reject("Email sending failed");
                    }
                    return; // Exit the promise early if mail sending fails
                }

                // If email sending is successful, proceed to insert into Notion
                const notionResponse = await fetch("/api/notion", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email }),
                });

                if (!notionResponse.ok) {
                    if (notionResponse.status === 429) {
                        reject("Rate limited");
                    } else {
                        reject("Notion insertion failed");
                    }
                } else {
                    resolve({ name });
                }
            } catch (error) {
                reject(error);
            }
        });

        toast.promise(promise, {
            loading: "Getting you on the waitlist... 🚀",
            success: (data) => {
                setName("");
                setEmail("");
                return "Thank you for joining the waitlist 🎉";
            },
            error: (error) => {
                if (error === "Rate limited") {
                    return "You're doing that too much. Please try again later";
                } else if (error === "Email sending failed") {
                    return "Failed to send email. Please try again 😢.";
                } else if (error === "Notion insertion failed") {
                    return "Failed to save your details. Please try again 😢.";
                }
                return "An error occurred. Please try again 😢.";
            },
        });

        promise.finally(() => {
            setLoading(false);
        });
    };

    return (
        <div
            className="mt-6 flex w-[450px] flex-col items-center justify-center gap-3"
        >
            <div className='w-full' >
                <Input
                    className='rounded-full h-12 pl-7 '
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className='w-full' >
                <Input
                    type="email"
                    className='rounded-full h-12 pl-7 '
                    placeholder="Your Email Address"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div   >
                <button onClick={handleSubmit} className='flex mt-4 items-center justify-center '>
                    <div className={cn("group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",)} >
                        <div className={cn('border border-[#3B3A3A] bg-[#ff3f17]  h-[43px] rounded-full flex items-center justify-center text-white',)}>
                            <p className='font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ' > <Globe className="animate-spin " />   {loading ? "Loading..." : "Subscribe "} &nbsp;</p>
                        </div>
                        <div className='text-[#3b3a3a] group-hover:ml-6  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ' >
                            <ArrowRight size={18} className='group-hover:rotate-180 ease-in-out transition-all ' />
                        </div>
                    </div>
                </button >
            </div>
        </div>
    );
}



const page = () => {

    return (
        <div className=' relative h-screen border overflow-hidden  w-screen flex items-center justify-center' >

            <div className=" z-10 space-y-4 flex flex-col items-center justify-center">
                <GradientHeading size="xll" weight="bold" className="text-center text-xl font-bold  tracking-tighter lg:leading-[0.5rem] ">
                    Join our Newsletter
                </GradientHeading>
                <p className="text-center text-base   leading-1 opacity-60  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
                    Be the first to know about the latest components from Skiper-UI! <br />
                    No spam, no nonsense, just the good stuff sent straight to you. Let's build something amazing together! 😎
                </p>

                <br /><br />
                <SubscriptionForm />
            </div>

            <motion.div variants={containerVariants} className='-bottom-[16rem] -z-8 absolute' initial="hidden" animate="visible" >
                <motion.h2 variants={itemVariants} className='text-[450px] tracking-tighter text-black/5 ' >
                    Skiper/ui
                </motion.h2>
            </motion.div>
        </div>
    )
}

export default page
