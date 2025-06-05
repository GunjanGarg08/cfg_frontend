"use client"

import Link from "next/link"
import { HeartHandshake, Mail, Globe, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      {/* Contact Form and Map Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="h-[410px] rounded-lg overflow-hidden">
            <h1 className="text-2xl p-2 font-semibold">Find Us on the Map</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8674621685145!2d72.86077757449!3d19.069564052175963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5623312cf%3A0x36e3f54356fe89db!2sJP%20Morgan%20Chase%20Bank!5e0!3m2!1sen!2sin!4v1749121641740!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NGO Location"
              className="rounded-lg "
            ></iframe>            
          </div>

          {/* Contact Form */}
          <div className=" rounded-lg p-6 ">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="YOUR E-MAIL"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background/50"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="YOUR MESSAGE"
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
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <HeartHandshake className="h-6 w-6" />
              <h3 className="text-lg font-semibold">NGO Platform</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Making a difference in communities through sustainable development and positive social impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/mission" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link 
                  href="/programs" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link 
                  href="/impact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link 
                  href="/donate" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/volunteer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link 
                  href="/partner" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Join us in making a difference.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:contact@ngoplatform.org" 
                  aria-label="Email" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Section */}        
      <div className="mt-8 pt-6 border-t">          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} NGO Platform. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}
