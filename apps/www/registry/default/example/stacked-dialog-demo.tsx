import React from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTrigger,
} from "../ui/stacked-dialog"

const Icons = {
  arrow: (props: any) => (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.98298 6.19679C7.90428 5.66488 7.90428 4.33509 6.98298 3.80318L1.00704 0.352971C0.516375 0.0696831 -0.00492265 0.671685 0.345598 1.11682V1.11682C2.13943 3.39485 2.13943 6.60512 0.345598 8.88315V8.88315C-0.00492251 9.32828 0.516376 9.93029 1.00704 9.647L6.98298 6.19679Z"
        fill="black"
      />
    </svg>
  ),
}

const StackedDialogDemo = () => {
  const items = [
    {
      title: "I'm the first dialog",
      description: "With a fancy description",
      content: <p></p>,
    },
    {
      title: "I'm the second dialog",
      description: "With a fancy description",
      content: <p></p>,
    },
    {
      title: "I'm the third dialog",
      description: "With a fancy description",
      content: <p></p>,
    },
    {
      title: "I'm the fourth dialog",
      description: "With a fancy description",
      content: <p></p>,
    },
    {
      title: "I'm the fifth dialog",
      description: "With a fancy description",
      content: <p></p>,
    },
  ]

  return (
    <div className="flex items-center justify-center">
      <DialogStack>
        {/* Trigger */}
        <DialogStackTrigger>
          Click to open &nbsp;{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="fill-white dark:fill-black"
          >
            <path d="M11.589 3a.75.75 0 0 0-1.5 0v1.978a.75.75 0 0 0 1.5 0zM5.983 4.945A.75.75 0 0 0 4.917 6l1.47 1.483A.75.75 0 1 0 7.452 6.43zM16.761 6a.75.75 0 0 0-1.065-1.055l-1.47 1.484a.75.75 0 1 0 1.065 1.055zM11.8 10.096c-1.025-.404-1.994.617-1.61 1.61l3.581 9.25c.41 1.058 1.901 1.059 2.311 0l1.374-3.543l3.508-1.385c1.048-.414 1.048-1.903 0-2.317zm-6.84.067H3a.75.75 0 0 0 0 1.5h1.96a.75.75 0 0 0 0-1.5m2.492 5.234a.75.75 0 0 0-1.065-1.056l-1.47 1.484a.75.75 0 1 0 1.066 1.056z" />
          </svg>{" "}
        </DialogStackTrigger>

        {/* Overlay */}
        <DialogStackOverlay className=" backdrop-blur-[2px] " />
        {/* Body */}

        <DialogStackBody>
          {items.map((item, index) => (
            <DialogStackContent key={index}>
              <DialogStackHeader className="mt-2 flex flex-row  items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://100x-wallet.gxuri.in/avatar.png"
                    alt="@gxuri"
                  />
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    {item.title}
                  </h1>
                  <p className=" text-black/50 dark:text-white/50 ">{item.description}</p>
                </div>
              </DialogStackHeader>

              {/* content here */}
              <div className="h-[50px]">{item.content}</div>

              <DialogStackFooter>
                <DialogStackPrevious className="flex gap-3">
                  {" "}
                  <Icons.arrow className="rotate-180" /> Previous{" "}
                </DialogStackPrevious>
                <DialogStackNext className="flex gap-3 ">
                  {" "}
                  Next <Icons.arrow />{" "}
                </DialogStackNext>
              </DialogStackFooter>
            </DialogStackContent>
          ))}
        </DialogStackBody>
      </DialogStack>
    </div>
  )
}

export default StackedDialogDemo
