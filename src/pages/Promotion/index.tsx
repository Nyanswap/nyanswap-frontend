import React, { useContext } from 'react'
import { Text } from 'rebass'
import styled, { ThemeContext } from 'styled-components'
import logoIcon from '../../assets/svg/logo_thumbnail.svg'
import launchingImg1 from '../../assets/svg/launching_img1.png'
import launchingImg2 from '../../assets/svg/launching_img2.png'
import { ButtonPrimary } from '../../components/Button'
import { OutlineCard } from '../../components/Card'
import { ExternalLink } from '../../theme'

const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-bottom: 16px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`

const AppBodyWrapper = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    display: block;
  }
`

export const BodyWrapper = styled.div<{ margin?: number }>`
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
  margin: ${({ margin }) => (margin ? margin + 'px' : '0px')};
`

export default function Promotion() {
  const theme = useContext(ThemeContext)
  return (
    <AppBodyWrapper>
      <BodyWrapper margin={16}>
        <IconWrapper size={20}>
          <img src={logoIcon} alt={'logo'} />
        </IconWrapper>
        <Text color={theme.text1} fontSize={20} fontWeight={500} textAlign={'center'} marginBottom={16}>
          Beta Launching Event!
        </Text>
        <img src={launchingImg1} alt={'img'} />

        <Text color={theme.text1} fontWeight={500} marginTop={16} marginBottom={20}>
          * The token will be distributed within 30days from the official launch of NYANSWAP.
        </Text>

        <ButtonPrimary marginTop={14} marginBottom={14}>
          <Text fontWeight={500} fontSize={20}>
            View More
          </Text>
        </ButtonPrimary>

        <OutlineCard marginTop={14} marginBottom={14}>
          <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }}>
            Check out <ExternalLink href="https://nyanswap.com">nyanswap.com</ExternalLink> to learn more
          </Text>
        </OutlineCard>
      </BodyWrapper>
      <BodyWrapper margin={16}>
        <IconWrapper size={20}>
          <img src={logoIcon} alt={'logo'} />
        </IconWrapper>
        <Text color={theme.text1} fontSize={20} fontWeight={500} textAlign={'center'} marginBottom={16}>
          Double the reward!
        </Text>
        <img src={launchingImg2} alt={'img'} />

        <Text color={theme.text1} fontWeight={500} marginTop={16} marginBottom={20}>
          * The token will be distributed within 30days from the official launch of NYANSWAP.
        </Text>

        <ButtonPrimary marginTop={14} marginBottom={14}>
          <Text fontWeight={500} fontSize={20}>
            View More
          </Text>
        </ButtonPrimary>

        <OutlineCard marginTop={14} marginBottom={14}>
          <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }}>
            Check out <ExternalLink href="https://nyanswap.com">nyanswap.com</ExternalLink> to learn more
          </Text>
        </OutlineCard>
      </BodyWrapper>
    </AppBodyWrapper>
  )
}
