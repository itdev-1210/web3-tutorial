import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID!, 10)

export const injected = new InjectedConnector({ supportedChainIds: [chainId] })

export const getLibrary = (provider): Web3 => {
  return provider
}
