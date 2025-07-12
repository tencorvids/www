import type { Metadata } from "next";
import "@/style/global.css";
import { Provider } from "@/provider/server";

export const metadata: Metadata = {
    title: "tencorvids",
    description: "rew's personal website.",
    icons: {
        icon: "/favicon.svg"
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="max-w-screen min-h-svh">
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
