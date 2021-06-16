import BigNumber from 'bignumber.js'

export const getTokenSymbol = async (customContract) => {
  try {
    return await customContract.methods.symbol().call()
  } catch (e) {
    return null
  }
}

export const getBalance = async (customContract, userAddress) => {
  try {
    const balance = await customContract.methods.balanceOf(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const transfer = async (customContract, amount, userAddress) => {
  try {
    return customContract.methods
      .transfer(userAddress, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: userAddress, gas: 200000 })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (e) {
    return false
  }
}