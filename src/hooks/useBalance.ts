import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'

import { getBalance } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { useCustom } from './useContract'

const useBalance = () => {
  const { account } = useWeb3React()
  const customContract = useCustom()

  const { toastError } = useToast()

  const handleBalance = useCallback(
    async () => {
      try {
        const balance = await getBalance(customContract, account)
        return balance
      } catch (e) {
        toastError(e.message)
        return '0'
      }
    },
    [account, customContract, toastError],
  )

  return { balanceOf: handleBalance }
}

export default useBalance
