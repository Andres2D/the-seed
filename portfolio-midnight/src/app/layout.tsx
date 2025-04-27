import type { Metadata } from "next";
import { Fjalla_One } from 'next/font/google';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: "John Doe Portfolio",
  description: "Designed by Andres2D",
};

const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fjallaOne.className}>
      <body className={styles.layout}>
        {children}
      </body>
    </html>
  );
}
