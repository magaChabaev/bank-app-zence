import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>{children}</section>
      </main>
    </>
  )
}

export default Layout