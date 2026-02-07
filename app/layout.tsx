import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flux3tor",
  description: "Flux3tor Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <img
        src="https://assets.hackclub.com/flag-orpheus-left.svg"
        alt="Hack Club"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "clamp(80px, 10vw, 140px)",
          zIndex: 1000,
        }}
        />
        
        {children}
      </body>
    </html>
  );
}