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

export function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-zinc-800 sticky top-0 z-50 bg-black/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-lg"
                >
                    MoiBeta
                </Link>


                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#contact">
                        Contact
                    </a>
                </nav>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
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
                                <a
                                    href="#projects"
                                    className="text-zinc-300 hover:text-white transition-colors"
                                    onClick={() => setOpen(false)}>
                                    Projects
                                </a>

                                <a
                                    href="#about"
                                    className="text-zinc-300 hover:text-white transition-colors"
                                    onClick={() => setOpen(false)}>
                                    About
                                </a>

                                <a
                                    href="#contact"
                                    className="text-zinc-300 hover:text-white transition-colors"
                                    onClick={() => setOpen(false)}>
                                    Contact
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}