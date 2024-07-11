import type { Metadata } from 'next'
import Image from 'next/image'
import { MenuProps } from 'antd'
import { Layout, Menu } from '@/components/Ant'
import { ThemeProvider } from '@/context/ThemeContext'
import { CloseCircle, EyeClose, EyeOpen } from '@/components/Icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import {
  DashboardContent,
  DashboardHeader,
  DashboardLayout,
  DashboardSider,
  SidebarMenu
} from './dashboard.styles'

export const metadata: Metadata = {
  title: 'NextJS + Styled Components',
  description: 'NextJS, Ant Design and Styled Components boilerplate'
}

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`
}))

const items2: MenuProps['items'] = [
  <CloseCircle key={1} />,
  <EyeClose key={2} />,
  <EyeOpen key={3} />
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon,
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function MainDashboardLayout({
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
          <DashboardLayout>
            <DashboardSider breakpoint="lg" collapsible>
              <SidebarMenu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items2}
              />
            </DashboardSider>
            <Layout>
              <DashboardHeader>
                <Image src="/images/logoFUll.svg" alt="simform logo" width={686} height={126} />
                <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items} />
                <ThemeSwitcher />
              </DashboardHeader>
              <DashboardContent>{children}</DashboardContent>
            </Layout>
          </DashboardLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
