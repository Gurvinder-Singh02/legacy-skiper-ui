import { CountDown } from "@/components/announcement"
import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/registry/default/ui/gradient-heading"

export default async function page() {
  return (
    <>
      <div className="mt-32 space-y-4 ">
        <GradientHeading
          size="xll"
          weight="bold"
          className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
        >
          <br className="hidden md:block" /> Showcase
        </GradientHeading>
        <p className="mx-2 text-center  text-base  leading-5 text-foreground md:pt-8 md:text-xl  md:font-normal ">
          Real time use case of our industry ready components Comming soon !{" "}
        </p>

        <section className=" mt-12 w-full ">
          <FadeIn>
            <div className=" mx-auto max-w-4xl rounded-[40px] border border-black/5 p-2 shadow-sm ">
              <div className=" relative mx-auto h-[470px] max-w-4xl overflow-hidden rounded-[38px] border border-black/5 bg-[#ff4017] p-2 shadow-sm md:h-[400px] ">
                <p className=" mt-20 text-center text-white">
                  Bringing simplicity to the future in{" "}
                </p>
                <h1 className=" max-w-1/2 leading-0 text-center text-[100px] font-bold tracking-tighter  text-white  ">
                  <CountDown />
                </h1>
                <h1 className=" stroked-text absolute inset-x-0  -mt-10   text-center text-[100px] font-semibold text-[#ff4017] sm:text-[190px] ">
                  skiper/ui
                </h1>
                <h1 className="  absolute inset-x-0   -mt-10 text-center text-[100px] font-semibold text-[#ff4017] sm:text-[190px] ">
                  skiper/ui
                </h1>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  )
}
