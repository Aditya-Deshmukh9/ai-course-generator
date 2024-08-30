import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-[#00c6fb] to-[#005bea] bg-clip-text text-transparent animate-text">
                                Create Engaging AI-Powered Courses
                            </h1>
                            <p className="max-w-[600px] text-[#94a3b8] md:text-xl">
                                Our platform empowers you to create and publish high-quality courses with the help of AI-powered
                                tools and features.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4f46e5] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4338ca] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Create Course
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#334155] bg-[#0f172a] px-8 text-sm font-medium text-[#94a3b8] shadow-sm transition-colors hover:bg-[#475569] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <img
                        src="/banner.jpg"
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner