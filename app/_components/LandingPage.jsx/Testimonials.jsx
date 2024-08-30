import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import React from 'react'

function Testimonials() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#0f172a] dark:text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#e2e8f0] dark:bg-[#334155] px-3 py-1 text-sm text-[#475569] dark:text-[#cbd5e1]">
                            Student Testimonials
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                            What Our Students Say
                        </h2>
                        <p className="max-w-[900px] text-[#64748b] dark:text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Hear from our students about their experiences creating courses with our platform.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <Card className="p-6 bg-[#e2e8f0] dark:bg-[#334155]">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                                            John Doe
                                        </h3>
                                        <div className="text-sm text-[#64748b] dark:text-[#94a3b8]">Course Creator</div>
                                    </div>
                                    <p className="text-[#64748b] dark:text-[#94a3b8]">
                                        "The AI-powered tools on this platform made creating my\n course a breeze. I was able to
                                        generate high-quality\n content and track my students' progress with ease."
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <Card className="p-6 bg-[#e2e8f0] dark:bg-[#334155]">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                                            Jane Smith
                                        </h3>
                                        <div className="text-sm text-[#64748b] dark:text-[#94a3b8]">Course Creator</div>
                                    </div>
                                    <p className="text-[#64748b] dark:text-[#94a3b8]">
                                        "I was able to create an engaging and informative course\n in a fraction of the time it would
                                        have taken me\n otherwise. The AI-powered features are a game-changer!"
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials