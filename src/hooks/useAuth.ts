import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'

import { useToast } from 'store/hooks'
import { injected } from 'utils/web3React'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toastError } = useToast()

  const login = useCallback(() => {
    activate(injected, (error: Error) => toastError('Please switch network'))
  }, [activate, toastError])

  return { login, logout: deactivate }
}

export default useAuth
