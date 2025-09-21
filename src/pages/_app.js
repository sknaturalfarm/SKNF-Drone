import "@/styles/globals.css";
import { Inter, Syne, Raleway, Oswald } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from 'next/font/google'

const display = Raleway({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const poppins = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // choose weights
})


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
