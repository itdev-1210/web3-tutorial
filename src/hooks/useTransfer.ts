import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'

import { transfer } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { useCustom } from './useContract'

const useTransfer = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const customContract = useCustom()

  const { toastError } = useToast()

  const handleTransfer = useCallback(
    async (amount: string) => {
      try {
        const txHash = await transfer(customContract, amount, account)
        console.info(txHash)
        return txHash
      } catch (e) {
        toastError(e.message)
        return false
      }
    },
    [account, customContract, toastError, dispatch],
  )

  return { transfer: handleTransfer }
}

export default useTransfer
