import { Inter } from "next/font/google";
import '../styles/theme.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juhudi Sacco",
  description: "The People Sacco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


