import styled from 'styled-components'
import {Flex} from '@chakra-ui/react'
import {COLORS, FONTS, SPACING} from '../constants/constants'

export const Button = styled.button`
    border-radius: 9px;
    background-color: #000000;
`
export const ButtonText = styled(FONTS.H5)`
    color: ${COLORS['WHITE']};
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
`