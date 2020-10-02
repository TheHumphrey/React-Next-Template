import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Portal - WAYDS' }: Props): React.ReactElement => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
  </div>
);

export default Layout;
