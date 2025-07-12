"use client";

import { useState } from "react";
import { GridSection } from "$/grid-section";
import Waves from "$/waves";
import { Button } from "@tencorvids/ui";
import { TransitionPanel } from "$/transition-panel";
import { cx } from "@tencorvids/util";

export default function Page() {
    return (
        <main className="w-full h-full flex flex-col">
            <GridSection />

            <GridSection className="p-4">
                <h2 className="text-xs text-muted-foreground">tencorvids</h2>
                <h1 className="text-muted-foreground mt-1">And<span className="text-brand font-medium">[rew]</span> Vota</h1>

                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </GridSection>

            <GridSection outerClassName="h-32" className="p-4">
                <div className="w-full h-full relative overflow-hidden">
                    <Waves lineColor="#fff" />
                </div>
            </GridSection>


            <GridSection outerClassName="flex-1" className="p-4">
                <Panels />
            </GridSection>

            <GridSection />
        </main>
    );
}

function Panels() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            tab: "Writing",
            panel: <WritingPanel />,
        },
        {
            tab: "Projects",
            panel: <ProjectsPanel />,
        },
        {
            tab: "Components",
            panel: <ComponentsPanel />,
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

function WritingPanel() {
    return (
        <p>Writing</p>
    );
}

function ProjectsPanel() {
    return (
        <p>Projects</p>
    );
}

function ComponentsPanel() {
    return (
        <p>Components</p>
    );
}
