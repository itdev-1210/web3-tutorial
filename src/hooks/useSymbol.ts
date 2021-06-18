import { useCallback } from 'react'

import { getTokenSymbol } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { useCustom } from './useContract'

const useSymbol = () => {
  const customContract = useCustom()

  const { toastError } = useToast()

  const handleSymbol = useCallback(
    async () => {
      try {
        const symbol = await getTokenSymbol(customContract)
        return symbol
      } catch (e) {
        toastError(e.message)
        return null
      }
    },
    [customContract, toastError],
  )

  return { getSymbol: handleSymbol }
}

export default useSymbol
