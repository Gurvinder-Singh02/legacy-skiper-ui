import Image from "next/image"
import Link from "next/link"
import { IceCream, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BorderButton } from "@/components/ui/button"
import { CardCarousel } from "@/components/ui/skiper/card-carousal"
import { Announcement } from "@/components/announcement"
import { FadeIn } from "@/components/fade-in"
import { Icons } from "@/components/icons"
import { FeaturesSection } from "@/components/landing/feature-section"
import { LatestComponentHorizonatal } from "@/components/landing/featured-component"
import { PlugCardGrid } from "@/components/landing/plug-grid"
import { TemplateGrid } from "@/components/landing/template-grid"
import { Testimonials } from "@/components/landing/testimonials"
import { PageActions, PageHeader } from "@/components/page-header"
import { GradientHeading } from "@/registry/default/ui/gradient-heading"

import StatisticHighlight from "./components/StatisticHighlight"

export default function IndexPage() {
  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center overflow-hidden  pb-8 sm:pb-12 md:pb-0">
      <div className="data:bg-black container relative pt-12 md:pt-8">
        <PageHeader>
          <FadeIn>
            <Announcement />
          </FadeIn>
          <FadeIn>
            <div className="pt-4 md:pt-0">
              <GradientHeading
                weight="bold"
                className="text-center text-xl font-bold leading-tight tracking-tighter md:text-5xl "
              >
                Components crafted for
              </GradientHeading>
              <GradientHeading
                size="xll"
                weight="bold"
                className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
              >
                <br className="hidden lg:block" /> Modern Websites
              </GradientHeading>
            </div>
          </FadeIn>
          <FadeIn>
            <p className=" leading-2 flex max-w-2xl flex-wrap items-center justify-center gap-1 text-center  text-base  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
              Bringing minimalism to the future <br />
              complete modern look components for you daily needs
            </p>
          </FadeIn>
          <FadeIn>
            <PageActions>
              <Link href=" /docs/components/card-carousel">
                <BorderButton className="group  ">
                  Get Started
                  <span className="transition-all duration-200 ease-in-out group-hover:rotate-90  ">
                    <Icons.arrow className="mr-2 size-4 " />
                  </span>
                </BorderButton>
              </Link>
              <Link href=" /docs/components/card-carousel">
                <BorderButton variant="org">
                  <Icons.gitHub className="mr-2 size-4" />
                  Open Source
                </BorderButton>
              </Link>
            </PageActions>
          </FadeIn>
        </PageHeader>

        <div className="absolute left-0 top-80 hidden lg:block">
          <Image
            src="/bg/bg_1.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute right-0 top-80 hidden lg:block">
          <Image
            src="/bg/bg_2.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute bottom-80 left-0 hidden lg:block">
          <Image
            src="/bg/bg_3.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute bottom-80 right-0 hidden lg:block">
          <Image
            src="/bg/bg_4.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <FadeIn>
          <CardCarousel
            images={[
              { src: "/card/1.png", alt: "Image 1" },
              { src: "/card/2.png", alt: "Image 2" },
              { src: "/card/3.png", alt: "Image 3" },
            ]}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </FadeIn>

        <FadeIn>
          <section className="w-ace-y-4 ">
            <div className=" mx-auto   max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm ">
              <TemplateGrid />
            </div>

            <section className=" mt-12 w-full">
              <FadeIn>
                <StatisticHighlight
                  text="of Next Js Saas Products Looks similar right ? Lets Change the approach"
                  num={70}
                />
              </FadeIn>
            </section>

            <div className=" mx-auto   max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-b-[44px] md:rounded-t-[20px]">
              <PlugCardGrid />
            </div>
          </section>
        </FadeIn>
      </div>

      <section className=" mt-12 w-full ">
        <FadeIn>
          <div className=" relative mx-auto max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-[44px]">
            <Badge
              variant="outline"
              className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"
            >
              <IceCream className=" fill-[#A3C0E0]  stroke-1 text-neutral-800" />{" "}
              Component Preview
            </Badge>
            <FeaturesSection />
          </div>
        </FadeIn>
      </section>
      <section className=" mt-12 w-full ">
        <FadeIn>
          <div className=" relative mx-auto max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-[44px]">
            <Badge
              variant="outline"
              className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"
            >
              <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
              Componenet Preview
            </Badge>

            <div className="mt-4 w-full gap-3 pb-12 pt-8 text-center sm:px-0">
              <div className="mt-2 px-4 text-6xl font-bold tracking-tight text-white dark:text-neutral-100/90 ">
                <GradientHeading size="xl">Testimonials</GradientHeading>
              </div>

              <p className="mt-2 text-base font-bold leading-5 text-neutral-700 md:text-3xl md:leading-7 ">
                {/* WIP  */}
                What People said About us ?
              </p>
            </div>

            <Testimonials />
          </div>
        </FadeIn>
      </section>

      <section className=" mt-12 w-full ">
        <StatisticHighlight
          text={`of users judge a business's credibility by its website design quality.`}
          num={90}
        />
      </section>

      <section className=" mt-12 w-full ">
        <FadeIn>
          <div className=" mx-auto   max-w-4xl rounded-[40px] border border-black/5 p-2 shadow-sm ">
            <div className=" relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] border border-black/5 bg-[#ff4017] p-2 shadow-sm ">
              <p className="mt-20 text-center text-white">
                Bringing simplicity to the future
              </p>
              <h1 className=" stroked-text absolute inset-x-0   mt-[190px] text-center text-[100px] font-semibold text-[#ff4017] sm:mt-[100px] sm:text-[190px] ">
                skiper/ui
              </h1>
              <h1 className="  absolute inset-x-0  mt-[190px] text-center text-[100px] font-semibold text-[#ff4017] sm:mt-[100px] sm:text-[190px] ">
                skiper/ui{" "}
              </h1>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
IndexPage.theme = "light"
