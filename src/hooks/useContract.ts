import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getErc20Contract,
  getCustomContract
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getErc20Contract(address, web3), [address, web3])
}

export const useCustom = () => {
  const web3 = useWeb3()
  return useMemo(() => getCustomContract(web3), [web3])
}
