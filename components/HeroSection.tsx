"use client"

import { Button } from "./ui/button"
import { Carousel } from "./Carousel"
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
            <Carousel items={carouselItems} />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-0 sm:w-auto flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Donate Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white backdrop-blur-sm border border-white/50 w-full sm:w-auto">
                    Learn More
                </Button>
            </div>
        </section>
    )
}
