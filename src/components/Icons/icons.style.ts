import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border: 1px solid var(--clr-neutral-200);
  border-radius: 8px;
  padding: 16px;
  .anticon {
    font-size: 32px;
  }
  p {
    font-size: 16px;
    margin-top: 12px;
  }
`
