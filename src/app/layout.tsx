import { GNB } from '@/widgets/gnb';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Q-IT - 면접 경험 공유 플랫폼',
  description: '면접 경험을 공유하고 검색하는 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GNB />
        {children}
      </body>
    </html>
  );
}
