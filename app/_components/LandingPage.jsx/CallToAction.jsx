import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function CallToAction() {
    return (<section className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#0f172a] dark:text-white">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0f172a] dark:text-white bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent animate-text">
                    Ready to Create Your Course?
                </h2>
                <p className="mx-auto max-w-[600px] text-[#64748b] dark:text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Sign up now and start creating engaging, AI-powered courses with our powerful platform.
                </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                    <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                    <Button type="submit" className="bg-[#4f46e5] text-white hover:bg-[#4338ca]">
                        Get Started
                    </Button>
                </form>
                <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                    By signing up, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2" prefetch={false}>
                        Terms &amp; Conditions
                    </Link>
                </p>
            </div>
        </div>
    </section>
    )
}

export default CallToAction