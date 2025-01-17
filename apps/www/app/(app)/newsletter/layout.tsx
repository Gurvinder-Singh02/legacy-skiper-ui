import { Metadata } from "next"


export const metadata: Metadata = {
    title: "NewsLetter.",
    description:
        "Be the first to know about the latest components from Skiper-UI. No spam emails ",
}

export default function BlocksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container relative m-auto w-full ">
            {children}
        </div>
    )
}
