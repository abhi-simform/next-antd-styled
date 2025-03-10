'use client'

import { Layout, Menu } from '@/components/Ant'
import styled from 'styled-components'

export const RootLayout = styled(Layout)``

export const RootLayoutSider = styled(Layout.Sider)`
  background-color: var(--clr-neutral-0);
`
export const SiderMenu = styled(Menu)`
  height: 100%;
  overflow: auto;
`

export const MainLayout = styled(Layout)``

export const MainLayoutHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--clr-neutral-100);
`

export const MainLayoutContent = styled(Layout.Content)`
  height: calc(100vh - 64px);
  height: calc(100dvh - 64px);
  overflow: auto;
  padding: 24px;
  background: var(--clr-neutral-50);
`
