import React from 'react'

function Fetures() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#0f172a] dark:text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#e2e8f0] dark:bg-[#334155] px-3 py-1 text-sm text-[#475569] dark:text-[#cbd5e1]">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                            Powerful Tools for Course Creation
                        </h2>
                        <p className="max-w-[900px] text-[#64748b] dark:text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform offers a range of features to help you create engaging and effective courses, from
                            AI-powered content generation to detailed analytics.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                                        Course Templates
                                    </h3>
                                    <p className="text-[#64748b] dark:text-[#94a3b8]">
                                        Get started quickly with our library of pre-designed course templates.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                                        AI-Powered Content
                                    </h3>
                                    <p className="text-[#64748b] dark:text-[#94a3b8]">
                                        Leverage AI to generate engaging course content and multimedia assets.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                                        Analytics and Insights
                                    </h3>
                                    <p className="text-[#64748b] dark:text-[#94a3b8]">
                                        Track your course performance and student engagement with detailed analytics.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/fetures.jpg"
                        width="550"
                        height="500"
                        alt="Features"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-top sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
    )
}

export default Fetures