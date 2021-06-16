import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import {
  push as pushToast
} from './actions'

// Toasts
export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast: any) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ type: 'Error', title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ type: 'Info', title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ type: 'Success', title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ type: 'Warning', title, description })
      },
      push
    }
  }, [dispatch])

  return helpers
}