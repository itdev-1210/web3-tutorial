import { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import { useWeb3React } from '@web3-react/core'

import useAuth from 'hooks/useAuth'
import useBalance from 'hooks/useBalance';
import useSymbol from 'hooks/useSymbol';

const Header = () => {
  const { login } = useAuth()
  const account = useWeb3React()
  const [balance, setBalance] = useState(0)
  const [symbol, setSymbol] = useState('')
  const { balanceOf } = useBalance()
  const { getSymbol } = useSymbol()
  
  useEffect(() => {
    const getBalance = async () => {
      const balance = await balanceOf()
      const symbol = await getSymbol()
      setBalance(balance)
      setSymbol(symbol)
    }
    getBalance()
  }, [balanceOf, getSymbol])

  return (
    <header className="header">
      <div className="container">
        {account.active ? <div className="connected-wallet">
          <div className="gradient-dot"></div>
          <div className="chain-name">{process.env.REACT_APP_CHAIN_NAME}</div>|
          <div className="address">{account?.account?.substring(0, 7)}...{account?.account?.substring(account?.account?.length - 5)}</div>
        </div> :
        <button type="button" className="connect-btn" onClick={login}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path d="M10.6665 9.16648C10.9528 9.54923 11.3181 9.86594 11.7375 10.0951C12.157 10.3243 12.6208 10.4606 13.0976 10.4947C13.5744 10.5288 14.0529 10.4601 14.5007 10.293C14.9486 10.1259 15.3552 9.86453 15.6932 9.52648L17.6932 7.52648C18.3004 6.89781 18.6363 6.0558 18.6288 5.18181C18.6212 4.30782 18.2706 3.47178 17.6526 2.85375C17.0345 2.23573 16.1985 1.88516 15.3245 1.87757C14.4505 1.86997 13.6085 2.20595 12.9798 2.81315L11.8332 3.95315" stroke="#62514B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3335 7.83332C13.0472 7.45057 12.6819 7.13387 12.2624 6.90469C11.843 6.67552 11.3791 6.53924 10.9024 6.5051C10.4256 6.47095 9.94707 6.53974 9.49924 6.7068C9.0514 6.87386 8.64472 7.13527 8.3068 7.47332L6.3068 9.47332C5.69961 10.102 5.36363 10.944 5.37122 11.818C5.37881 12.692 5.72938 13.528 6.3474 14.146C6.96543 14.7641 7.80147 15.1146 8.67546 15.1222C9.54945 15.1298 10.3915 14.7938 11.0201 14.1867L12.1601 13.0467" stroke="#62514B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d" x="0" y="0.5" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
            </defs>
          </svg>
          CONNECT
        </button>}
        <div className="balance-of">
          <div className="token-name">{symbol}</div>
          <div className="amount">{balance}</div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
