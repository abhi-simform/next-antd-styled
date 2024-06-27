'use client'

import { Content, Header, Layout, Menu, Sider } from '@/components/Ant'
import styled from 'styled-components'

export const DashboardLayout = styled(Layout)`
  min-height: 100vh;
  min-height: 100dvh;
`

export const DashboardSider = styled(Sider)`
  overflow: auto;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  align-self: flex-start;
  &.ant-layout-sider {
    position: sticky;
  }
`

export const DashboardHeader = styled(Header)`
  position: sticky;
  top: 0;
  background-color: var(--neutral-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 200px;
  }
  .ant-menu {
    flex-grow: 1;
    justify-content: flex-end;
  }
`

export const DashboardContent = styled(Content)`
  padding: 20px;
`

export const SidebarMenu = styled(Menu)`
  height: 100%;
  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      background-color: var(--primary-500);
      color: var(--neutral-0);
      &:hover {
        background-color: var(--primary-600);
      }
    }
  }
  .ant-menu-item-selected {
    background-color: var(--primary-200);
  }
`
