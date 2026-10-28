"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { site } from "@/data/site";

const navItems = [
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {

    const [open, setOpen] = useState(false);

    const handleNavigation = (
        sectionId: string
    ) => {
        setOpen(false);

        setTimeout(() => {
            document
                .getElementById(sectionId)
                ?.scrollIntoView({
                    behavior: "smooth",
                });
        }, 400);
    };

    return (
        <header className="border-b border-zinc-800 sticky top-0 z-50 bg-black/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-lg"
                >
                    {site.shortName}
                </Link>


                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Open navigation menu"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="bg-black border-zinc-800">
                            <div className="sr-only">
                                <SheetTitle>
                                    Navigation Menu
                                </SheetTitle>

                                <SheetDescription>
                                    Mobile navigation links
                                </SheetDescription>
                            </div>

                            <div className="flex flex-col items-center gap-6 mt-10 text-lg">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-zinc-300 hover:text-white transition-colors"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleNavigation(item.id);
                                        }}>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
