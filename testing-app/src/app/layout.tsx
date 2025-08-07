import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@copilotkit/react-ui/styles.css';
import '../styles.css';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Testing App',
  description: 'Testing application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

