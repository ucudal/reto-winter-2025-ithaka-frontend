import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles.css';
import '../index.css';

import ChatPopupWrapper from '../components/ChatPopupWrapper';
import { CopilotKit } from '@copilotkit/react-core';

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
      <body className={inter.className}>
        <CopilotKit runtimeUrl="/api/copilotkit">
          <ChatPopupWrapper /> {/* ✅ este sí es cliente */}
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
