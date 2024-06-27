import { Input as AntInput } from 'antd'
import styled from 'styled-components'

export const Input = styled(AntInput)`
  &.ant-input-outlined:focus,
  &.ant-input-outlined:focus-within {
    border-color: var(--primary-400);
  }
`

export const InputPassword = styled(AntInput.Password)`
  &.ant-input-outlined:focus,
  &.ant-input-outlined:focus-within {
    border-color: var(--primary-400);
  }
`
