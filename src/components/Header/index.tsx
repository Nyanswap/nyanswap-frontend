import { ChainId } from '@nyanswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import LogoTypeOnlyColor from '../../assets/svg/logo_typeonly_color.svg'
import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../state/wallet/hooks'
import { ExternalLink } from '../../theme'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    justify-self: center;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0px 0px;
    background-color: rgb(255, 255, 255);
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const NavLinkWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 50px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 960px) {
    margin: 0;
    padding: 1rem 0px 1rem 1rem;
    justify-content: flex-end;
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  justify-content: center;
  height: 1rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text3};
  opacity: 0.5;
  font-size: 20px;
  margin: 0px 12px;

  &.${activeClassName} {
    opacity: 1;
    border-radius: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text3};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0px 6px;
  `};

  :hover,
  :focus {
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const NyanIconDiv = styled.div`
  display: flex;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    img { 
      width: 120px;
    }
  `};
`

const NyanIcon = styled.img`
  width: 280px;
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    <HeaderFrame>
      <RowBetween style={{ alignItems: 'flex-start' }} padding="1rem 1rem 1rem 1rem">
        <HeaderElement style={{ width: '100%' }}>
          <Title href=".">
            <NyanIconDiv>
              <NyanIcon src={LogoTypeOnlyColor} alt="logo" />
            </NyanIconDiv>
          </Title>

          <NavLinkWrapper>
            <StyledNavLink to={'/swap'}>{t('swap')}</StyledNavLink>
            <StyledNavLink to={'/pool'}>{t('pool')}</StyledNavLink>
            <ExternalLink
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '1rem',
                borderRadius: '3rem',
                outline: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                color: `#FFFFFF`,
                opacity: '0.5',
                fontSize: '20px',
                margin: '0px 12px',
                display: 'flex',
                flexFlow: 'row nowrap'
              }}
              href="https://info.nyanswap.com/"
            >
              {t('Charts')}
            </ExternalLink>
            <StyledNavLink to={'/promotion'}>{t('Promotion')}</StyledNavLink>
          </NavLinkWrapper>
        </HeaderElement>
        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} ETH
                </BalanceText>
              ) : null}
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            <HeaderElement>
              <Web3Status />
            </HeaderElement>
            <HeaderElement>
              <Settings />
              <Menu />
            </HeaderElement>
          </HeaderElementWrap>
        </HeaderControls>
      </RowBetween>
    </HeaderFrame>
  )
}
