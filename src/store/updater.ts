import Web3 from 'web3'
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

export default function Updater() {
  const { chainId, library } = useWeb3React()

  useEffect(() => {
    const web3 = new Web3(library)
    console.log(web3)
  }, [chainId, library])

  return null
}
