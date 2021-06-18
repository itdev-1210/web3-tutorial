import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'

import { transfer } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { useCustom } from './useContract'

const useTransfer = () => {
  const { account } = useWeb3React()
  const customContract = useCustom()

  const { toastError, toastInfo } = useToast()

  const handleTransfer = useCallback(
    async (amount: string, address: string) => {
      try {
        const res = await transfer(customContract, amount, account, address)
        toastInfo(res.transactionHash)
        return res
      } catch (e) {
        toastError(e.message)
        return false
      }
    },
    [account, customContract, toastError, toastInfo],
  )

  return { transfer: handleTransfer }
}

export default useTransfer
