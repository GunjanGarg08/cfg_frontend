"use client"

import Link from "next/link"
import { HeartHandshake, Mail, Globe, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t py-8 px-4 md:px-6">
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
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
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
    </footer>
  )
}
