"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, HeartHandshakeIcon, UsersIcon, GlobeIcon, Moon, Sun, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const programs: { title: string; href: string; description: string }[] = [
  {
    title: "Education Initiatives",
    href: "/programs/education",
    description:
      "Supporting children's education through various programs and resources.",
  },
  {
    title: "Healthcare Access",
    href: "/programs/healthcare",
    description:
      "Improving access to healthcare services in underserved communities.",
  },
  {
    title: "Community Development",
    href: "/programs/community",
    description:
      "Building stronger communities through sustainable development projects.",
  },
  {
    title: "Environmental Projects",
    href: "/programs/environment",
    description: "Promoting environmental sustainability and conservation efforts.",
  },
  {
    title: "Youth Empowerment",
    href: "/programs/youth",
    description:
      "Empowering young people through leadership and skill development programs.",
  },
  {
    title: "Emergency Relief",
    href: "/programs/relief",
    description:
      "Providing immediate assistance and support during crisis situations.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function NavigationMenuDemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 h-14">
        {/* Logo/Brand - Add your logo here */}
        <div className="flex items-center gap-2">
          <HeartHandshakeIcon className="h-6 w-6" />
          <span className="font-semibold hidden sm:inline">NGO Platform</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md" href="/">
                          <HeartHandshakeIcon className="h-6 w-6 mb-2" />
                          <div className="mt-4 mb-2 text-lg font-medium">NGO Platform</div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Making a difference in communities through sustainable development.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/mission" title="Our Mission">
                      Dedicated to creating positive social impact through sustainable development.
                    </ListItem>
                    <ListItem href="/vision" title="Our Vision">
                      Building a world where every community has the resources to thrive.
                    </ListItem>
                    <ListItem href="/impact" title="Our Impact">
                      See how we're making a difference in communities worldwide.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs & Initiatives</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {programs.map((program) => (
                      <ListItem
                        key={program.title}
                        title={program.title}
                        href={program.href}
                      >
                        {program.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
                
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/volunteer">
                          <div className="font-medium">Volunteer</div>
                          <div className="text-muted-foreground">
                            Join our community of dedicated volunteers.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/donate">
                          <div className="font-medium">Donate</div>
                          <div className="text-muted-foreground">
                            Support our mission with your contribution.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/partner">
                          <div className="font-medium">Partner With Us</div>
                          <div className="text-muted-foreground">
                            Collaborate with us on impactful projects.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/news">News & Updates</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/resources">Resource Library</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/faq">FAQ</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Impact Dashboard</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/impact/ongoing" className="flex items-center gap-2">
                          <CircleIcon />
                          Ongoing Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/impact/completed" className="flex items-center gap-2">
                          <CircleCheckIcon />
                          Completed Projects
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/impact/reports" className="flex items-center gap-2">
                          <GlobeIcon />
                          Impact Reports
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/donate">Donate</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-9 w-9"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[3.5rem] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="max-w-screen-xl mx-auto">
          <div className="flex flex-col py-4 px-4 space-y-1">
            <Link
              href="/"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs & Initiatives
            </Link>
            <Link
              href="/about"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              href="/get-involved"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="/resources"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/impact"
              className="px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
