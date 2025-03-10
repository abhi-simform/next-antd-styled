import ThemeSwitcher from '@/components/ThemeSwitcher'

import { Button, Flex, Text, Title } from '@/components/Ant'
import Image from 'next/image'
import { HomeStyles } from './home.styles'

export default function Home() {
  return (
    <HomeStyles>
      <Flex gap={24} align="center" vertical>
        <Title level={1}>React Boilerplate</Title>
        <Flex gap={32} wrap align="center" justify="center">
          <Image src="/images/antd.avif" alt="ant design logo" width={150} height={150} />
          <Image
            src="/images/styled-components.avif"
            alt="styled components logo"
            width={150}
            height={150}
          />
        </Flex>
        <Title level={2}>Ant Design + Styled Components</Title>
        <Text>
          Also checkout{' '}
          <Button type="link" href="/auth" color="blue">
            auth
          </Button>{' '}
          pages.
        </Text>
        <ThemeSwitcher />
      </Flex>
    </HomeStyles>
  )
}
