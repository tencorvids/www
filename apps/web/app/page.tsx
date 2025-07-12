"use client";

import { useState } from "react";
import { GridSection } from "$/grid-section";
import Waves from "$/waves";
import { Button } from "@tencorvids/ui";
import { TransitionPanel } from "$/transition-panel";
import { cx } from "@tencorvids/util";
import { GithubLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, XLogoIcon } from "@phosphor-icons/react";

export default function Page() {
    return (
        <main className="w-full h-full flex flex-col">
            <GridSection />

            <GridSection className="p-4">
                <h2 className="text-xs text-muted-foreground font-mono">tencorvids</h2>
                <h1 className="mt-1">And<span className="text-brand font-medium">[rew]</span> Vota</h1>
                <h3 className="mt-1 text-muted-foreground">Software Engineer</h3>

                <p className="mt-4 max-w-[80ch]">I'm a Software Engineer building everything from firmware to frontend. Currently, I work on <a href="https://avservices.net/harmony/" target="_blank" className="underline">hardware monitoring systems @ A-V Services</a> <span className="text-muted-foreground italic">(serendipitous name, not my business)</span>, writing firmware and developing internal tools for deployment and management.</p>
            </GridSection>

            <GridSection outerClassName="h-32" className="p-4">
                <div className="w-full h-full relative overflow-hidden">
                    <Waves lineColor="primary" />
                </div>
            </GridSection>


            <GridSection outerClassName="flex-1" className="p-4">
                <Panels />
            </GridSection>

            <GridSection>
                <div className="w-full h-full flex items-center justify-end p-2">
                    <Button asChild variant="ghost" size="icon">
                        <a href="">
                            <GithubLogoIcon className="size-4 text-muted-foreground" />
                        </a>
                    </Button>

                    <Button asChild variant="ghost" size="icon">
                        <a href="">
                            <XLogoIcon className="size-4 text-muted-foreground" />
                        </a>
                    </Button>

                    <Button asChild variant="ghost" size="icon">
                        <a href="">
                            <LinkedinLogoIcon className="size-4 text-muted-foreground" />
                        </a>
                    </Button>

                    <Button asChild variant="ghost" size="icon">
                        <a href="">
                            <PaperPlaneTiltIcon className="size-4 text-muted-foreground" />
                        </a>
                    </Button>
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
                    <div key={index} className="p-4">
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
            description: "Go interface for RAK chips, generally used for LoRa communications on the RUI3-based boards.",
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
            <div className="flex gap-2">
                <p className="min-w-[50px] text-nowrap">{title}</p>
                <p className="text-muted-foreground">{description}</p>
            </div>
            <GithubLogoIcon className="size-4 min-w-4 text-muted-foreground" />
        </a>
    );
}
