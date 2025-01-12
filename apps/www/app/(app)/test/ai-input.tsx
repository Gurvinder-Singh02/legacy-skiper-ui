"use client";

import { Globe, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

export function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

const MIN_HEIGHT = 48;
const MAX_HEIGHT = 164;

export default function AIInput_04() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
    });
    const [showSearch, setShowSearch] = useState(true);

    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handelChange = (e: any) => {
        const file = e.target.files ? e.target.files[0] : null

        if (file) {
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = () => {
        setValue("");
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">

            <div className="relative max-w-xl border rounded-[22px] border-black/5 p-1 w-full mx-auto">
                <div className="relative rounded-2xl border border-black/5 bg-neutral-800/5 flex flex-col">
                    <div
                        className="overflow-y-auto"
                        style={{ maxHeight: `${MAX_HEIGHT}px` }}
                    >
                        <Textarea
                            id="ai-input-04"
                            value={value}
                            placeholder={showSearch ? `Search the web...` : `Ask Skiper Ai...`}
                            className="w-full rounded-2xl rounded-b-none px-4 py-3 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none focus-visible:ring-0 leading-[1.2]"
                            ref={textareaRef}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit();
                                }
                            }}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                        />
                    </div>

                    <div className="h-12 bg-black/5 dark:bg-white/5 rounded-b-xl">
                        <div className="absolute left-3 bottom-3 flex items-center gap-2">
                            <label className={cn("cursor-pointer relative rounded-full p-2 bg-black/5 dark:bg-white/5",
                                imagePreview ? "bg-[#ff3f17]/15 border  border-[#ff3f17] text-[#ff3f17]"
                                    : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                            )}>
                                <input type="file" onChange={handelChange} className="hidden" />
                                <Paperclip className={cn("w-4 h-4 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors",
                                    imagePreview && " text-[#ff3f17]")} />
                                {imagePreview &&
                                    <div className="absolute w-[100px] h-[100px] top-14 -left-4" >
                                        <Image className="  object-cover rounded-2xl" src={imagePreview || ''} height={500} width={500} alt="additinal image" />
                                    </div>
                                }

                            </label>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowSearch(!showSearch);
                                }}
                                className={cn(
                                    "rounded-full transition-all flex items-center gap-2 px-1.5 py-1 border h-8",
                                    showSearch
                                        ? "bg-[#ff3f17]/15 border-[#ff3f17] text-[#ff3f17]"
                                        : "bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                )}
                            >
                                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                    <motion.div
                                        animate={{
                                            rotate: showSearch ? 180 : 0,
                                            scale: showSearch ? 1.1 : 1,
                                        }}
                                        whileHover={{
                                            rotate: showSearch ? 180 : 15,
                                            scale: 1.1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            },
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 25,
                                        }}
                                    >
                                        <Globe
                                            className={cn(
                                                "w-4 h-4",
                                                showSearch
                                                    ? "text-[#ff3f17]"
                                                    : "text-inherit"
                                            )}
                                        />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {showSearch && (
                                        <motion.span
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{
                                                width: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ width: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-sm overflow-hidden whitespace-nowrap text-[#ff3f17] flex-shrink-0"
                                        >
                                            Search
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="absolute right-3 bottom-3">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className={cn(
                                    "rounded-full p-2 transition-colors",
                                    value
                                        ? "bg-[#ff3f17]/15 text-[#ff3f17]"
                                        : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                )}
                            >
                                <Send className="w-4 h-4" />

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
