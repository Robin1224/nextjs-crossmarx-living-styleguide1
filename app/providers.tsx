"use client";

import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" enableSystem={false}>{children}</ThemeProvider>;
}

export default Providers;