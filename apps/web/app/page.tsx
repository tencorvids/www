"use client";

import { useState } from "react";
import { GithubLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, XLogoIcon } from "@phosphor-icons/react";
import { cx } from "@tencorvids/util";
import { Button } from "@tencorvids/ui";
import { GridSection } from "$/grid-section";
import Waves from "$/waves";
import { TransitionPanel } from "$/transition-panel";
import { ThemeToggle } from "$/theme-toggle";
import { useTheme } from "next-themes";

export default function Page() {
    const { theme } = useTheme();

    return (
        <main className="w-full min-h-svh flex flex-col">
            <GridSection />

            <GridSection className="p-2 md:p-4">
                <h2 className="text-xs text-muted-foreground font-mono">tencorvids</h2>
                <h1 className="mt-1">And<span className="text-brand font-medium">[rew]</span> Vota</h1>
                <h3 className="mt-1 text-muted-foreground">Software Engineer</h3>

                <p className="mt-4 max-w-[80ch]">I'm a Software Engineer building everything from firmware to frontend. Currently, I work on <a href="https://avservices.net/harmony/" target="_blank" className="underline hover:text-muted-foreground">hardware monitoring systems @ A-V Services</a> <span className="text-muted-foreground italic">(serendipitous name, not my business)</span>, writing firmware and developing internal tools for deployment and management.</p>
            </GridSection>

            <GridSection outerClassName="h-32" className="p-2 md:p-4">
                <div className="w-full h-full relative overflow-hidden">
                    <Waves lineColor={theme === "dark" ? "#fff" : "#000"} />
                </div>
            </GridSection>


            <GridSection outerClassName="flex-1" className="p-2 md:p-4">
                <Panels />
            </GridSection>

            <GridSection>
                <div className="w-full h-full flex items-center justify-between p-2">
                    <div>
                        <Button asChild variant="ghost" size="icon">
                            <a href="https://github.com/tencorvids" target="_blank">
                                <GithubLogoIcon className="size-4 text-muted-foreground" />
                            </a>
                        </Button>

                        <Button asChild variant="ghost" size="icon">
                            <a href="https://x.com/tencorvids" target="_blank">
                                <XLogoIcon className="size-4 text-muted-foreground" />
                            </a>
                        </Button>

                        <Button asChild variant="ghost" size="icon">
                            <a href="https://www.linkedin.com/in/andrewvota/" target="_blank">
                                <LinkedinLogoIcon className="size-4 text-muted-foreground" />
                            </a>
                        </Button>

                        <Button asChild variant="ghost" size="icon">
                            <a href="mailto:rew@tencorvids.com" target="_blank">
                                <PaperPlaneTiltIcon className="size-4 text-muted-foreground" />
                            </a>
                        </Button>
                    </div>

                    <ThemeToggle />
                </div>
            </GridSection>
        </main>
    );
}

function Panels() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            tab: "Projects",
            panel: <ProjectsPanel />,
        },
    ];

    return (
        <div>
            {items.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    variant="ghost"
                    className={cx("text-xs", activeIndex === index ? "text-primary" : "text-muted-foreground")}
                >
                    {item.tab}
                </Button>
            ))}

            <TransitionPanel
                activeIndex={activeIndex}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                variants={{
                    enter: { opacity: 0, y: 50, filter: "blur(4px)" },
                    center: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="p-2 lg:p-4">
                        {item.panel}
                    </div>
                ))}
            </TransitionPanel>
        </div>
    )
}


function ProjectsPanel() {
    const projects = [
        {
            title: "twigs",
            description: "My dotfiles, neovim, tmux, including darwin and linux hosts.",
            href: "https://github.com/tencorvids/twigs",
        },
        {
            title: "stork",
            description: "An opinionated template for creating scalable web applications using a pnpm monorepo.",
            href: "https://github.com/tencorvids/stork",
        },
        {
            title: "rui3-go",
            description: "Go interface for RAK chips, generally used for LoRa communications on RUI3-based boards.",
            href: "https://github.com/tencorvids/rui3-go",
        },
        {
            title: "scrawl",
            description: "A utility used to generate web fonts for my Magic: The Gathering related projects.",
            href: "https://github.com/tencorvids/scrawl",
        },
        {
            title: "_",
            description: "[archived] My first journey into NixOS and learning about declarative environments (fell in love).",
            href: "https://github.com/tencorvids/_",
        },
        {
            title: "www",
            description: "You are here.",
            href: "https://github.com/tencorvids/www",
        },
    ];
    return (
        <div className="space-y-2">
            {projects.map((project) => (
                <Row
                    key={project.title}
                    href={project.href}
                    title={project.title}
                    description={project.description}
                />
            ))}
        </div>
    );
}

interface RowProps {
    href: string;
    title: string;
    description: string;
}

function Row({ href, title, description }: RowProps) {
    return (
        <a href={href} target="_blank" className="w-full flex justify-between items-center gap-2 p-2 rounded hover:bg-accent">
            <div className="flex items-center gap-2">
                <p className="min-w-[50px] text-nowrap">{title}</p>
                <p className="text-muted-foreground pr-2">{description}</p>
            </div>
            <GithubLogoIcon className="size-4 min-w-4 text-muted-foreground" />
        </a>
    );
}
