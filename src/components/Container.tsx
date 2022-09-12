import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import Navbar from './Navbar';

type ContainerProps = {
  className?: string;
  title?: string;
  description?: string;
};
export default function Container(props: PropsWithChildren<ContainerProps>) {
  const { className, title, description, children } = props;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>sommeeeR - {title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://sommeeer.lol${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Magnus Dahl Eide" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/images/logo.jpg" />
      </Head>
      <header className="pt-6">
        <Navbar />
      </header>
      <main className={clsx('flex flex-col items-center', className)}>
        {children}
      </main>
    </>
  );
}
