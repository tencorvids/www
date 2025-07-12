"use client";

import { GridSection } from "$/grid-section";
import Waves from "$/waves";

export default function Page() {
    return (
        <main className="w-full h-full flex flex-col">
            <GridSection />

            <GridSection className="p-4">
                <h2 className="text-xs text-muted-foreground">tencorvids</h2>
                <h1 className="text-muted-foreground mt-1">And<span className="text-primary font-medium">[rew]</span> Vota</h1>

                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </GridSection>

            <GridSection outerClassName="h-32" className="p-4">
                <div className="w-full h-full relative overflow-hidden">
                    <Waves lineColor="#fff" />
                </div>
            </GridSection>


            <GridSection outerClassName="flex-1" className="p-4">
                <h1>hello</h1>
            </GridSection>

            <GridSection />
        </main>
    );
}
