import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import './globals.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'SwampHacks Portal',
  description: 'SwampHacks portal for Hackers and Admins!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <MantineProvider defaultColorScheme='dark'>{children}</MantineProvider>
      </body>
    </html>
  );
}
