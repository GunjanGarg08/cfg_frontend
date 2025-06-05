"use client"

import { Button } from "./ui/button"
import { Carousel } from "./Carousel"
import Link from "next/link"
import image1 from "@/public/images/hero-1.jpg"
import image2 from "@/public/images/hero-2.jpg"
import image3 from "@/public/images/hero-3.jpg"

const carouselItems = [
    {
        image: image1.src,
        title: "Empowering Rural Communities",
        description: "Supporting sustainable development and education in rural India"
    },
    {
        image: image2.src,
        title: "Women Empowerment",
        description: "Creating opportunities for women through skill development and entrepreneurship"
    },
    {
        image: image3.src,
        title: "Child Education",
        description: "Providing quality education to underprivileged children across India"
    }
]

export function HeroSection() {
    return (
        <section className="relative">
            <Carousel items={carouselItems} />            {/* Main CTA buttons */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-0 sm:w-auto flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white backdrop-blur-sm border border-white/50 w-full sm:w-auto">
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
            {/* Auth buttons */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button asChild size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link href="/register">Register</Link>
                </Button>
            </div>
        </section>
    )
}
