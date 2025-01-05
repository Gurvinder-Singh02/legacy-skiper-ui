import shiftCard from "@/assets/feature-1.png"
import family from "@/assets/feature-2.png"
import carousel from "@/assets/feature-3.png"
import textureFull from "@/assets/feature-4.png"
import buttons from "@/assets/feature-5.png"
import textureCard from "@/assets/texture-card.png"
import clsx from "clsx"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { SkiperCard } from "../ui/skiper-card"

export default function SkiperCardDemo() {
  return (
    <section className="relative w-full overflow-hidden " id="features">
      <div className=" p-2">
        <div className="mb-8 pt-4 md:container">
          <div className=" mx-auto">
            <div className="flex w-full items-center justify-center">
              <Badge
                variant="outline"
                className="mb-3 rounded-[14px] border border-black/10 bg-white text-base md:left-6"
              >
                <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
                Component Preview
              </Badge>
            </div>

            <div className=" mx-auto max-w-4xl rounded-[34px] bg-neutral-700">
              <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
                <SkiperCard
                  step1img1Class={clsx(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={clsx(
                    "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
                    "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={clsx(
                    "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={clsx(
                    "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden group-hover:-translate-y-6",
                    "max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={clsx(
                    "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                    "left-[5%] top-[50%] md:top-[30%] md:left-1/2 md:left-[68px]"
                  )}
                  step4imgClass={clsx(
                    "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                    "left-[5%] top-[50%] md:top-[30%] md:left-1/2 md:left-[68px]"
                  )}
                  description="Make your app 🤌"
                  bgClass="lg:bg-gradient-to-tr"
                  //   @ts-ignore
                  image={{
                    step1light1: family,
                    step1light2: shiftCard,
                    step2light1: carousel,
                    step2light2: textureFull,
                    step3light: textureCard,
                    step4light: buttons,
                    alt: "Something",
                  }}
                  title="Components that pop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
