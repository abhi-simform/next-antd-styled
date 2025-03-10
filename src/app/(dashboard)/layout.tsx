import type { Metadata } from 'next'
import Image from 'next/image'
import { MenuProps } from 'antd'
import { ThemeProvider } from '@/context/ThemeContext'
import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import {
  MainLayout,
  MainLayoutContent,
  MainLayoutHeader,
  RootLayout,
  RootLayoutSider,
  SiderMenu
} from './dashboard.styles'

export const metadata: Metadata = {
  title: 'NextJS + Styled Components',
  description: 'NextJS, Ant Design and Styled Components boilerplate'
}

const items: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `Option ${subKey}`
        }
      })
    }
  }
)

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider>
          <RootLayout>
            <RootLayoutSider width={200} collapsible breakpoint="lg">
              <SiderMenu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items}
              />
            </RootLayoutSider>
            <MainLayout>
              <MainLayoutHeader>
                <Image src="/images/logo.svg" alt="" width={140} height={26} />
              </MainLayoutHeader>
              <MainLayoutContent>{children}</MainLayoutContent>
            </MainLayout>
          </RootLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
