import type { Metadata } from "next";
import "@/style/global.css";
import { Provider } from "@/provider/server";

export const metadata: Metadata = {
    title: "tencorvids",
    description: "rew's personal website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body className="max-w-screen h-full">
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
