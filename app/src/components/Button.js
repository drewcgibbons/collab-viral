import styled from 'styled-components'
import {Flex} from '@chakra-ui/react'

export const Button = styled.button`
    border-radius: 9px;
    background-color: #ffffff;
    color: #000000;
`

export const Container = styled(Flex)`
    flex-direction: row;
    :not(:last-child) {
    margin-right: ${SPACING[4]};
  }
`

export const DeclineButton = styled.button`
    border-radius: 9px;
    background-color: #ff0000;
    color: #000000;
`