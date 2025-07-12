"use client"

import { ThemeProvider } from "./theme";

interface ClientProviderProps {
    children: React.ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}
