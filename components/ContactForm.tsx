"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background/50"
                    required
                />
            </div>
            <div>
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background/50"
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder="Your message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background/50"
                    required
                ></textarea>
            </div>
            <Button
                type="submit"
                className=""
            >
                SEND MESSAGE
            </Button>
        </form>
    )
}
