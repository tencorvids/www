"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@tencorvids/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = isMounted ? resolvedTheme === "dark" : false;

    return (
        isMounted && (
            <Button
                variant="ghost"
                size="icon"
                className="animate-in fade-in duration-300"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
                <MoonIcon
                    className={`size-4 shrink-0 transition-all ${isDark
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 absolute"
                        }`}
                    aria-hidden="true"
                />
                <SunIcon
                    className={`size-4 shrink-0 transition-all ${isDark
                        ? "scale-0 opacity-0 absolute"
                        : "scale-100 opacity-100"
                        }`}
                    aria-hidden="true"
                />
            </Button>
        )
    );
}
