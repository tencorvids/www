"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Toggle } from "@tencorvids/ui";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Toggle
            className="group hover:bg-accent hover:text-primary"
            pressed={theme === "dark"}
            onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <MoonIcon
                className="size-4 shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                aria-hidden="true"
            />
            <SunIcon
                className="size-4 absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                aria-hidden="true"
            />
        </Toggle>
    );
}

