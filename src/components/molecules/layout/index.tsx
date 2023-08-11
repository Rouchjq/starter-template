// style
import Head from 'next/head';
import classes from './style.module.css';

// types
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Next.js + Tailwind CSS' />
      </Head>

      <main className={classes.main}>{children}</main>
    </div>
  );
};
