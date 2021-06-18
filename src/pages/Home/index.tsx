import React, { useState, useCallback } from 'react';
import useTransfer from 'hooks/useTransfer';

const HomeScreen = () => {
  const { transfer } = useTransfer()

  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [txId, setTransactionId] = useState(null)

  const handleAddress = useCallback((e) => {
    setAddress(e.target.value)
  }, [])

  const handleAmount = useCallback((e) => {
    setAmount(e.target.value)
  }, [])

  const handleSend = useCallback(() => {
    transfer(amount, address)
    .then((res) => {
      setTransactionId(res.transactionHash)
    })
    .catch((e) => {
      setTransactionId(null)
      console.log(e)
    })
  }, [amount, address, transfer])

  return (
    <>
      <div className="home-page">
        <label htmlFor="address">Address</label>
        <input value={address} id="address" onChange={handleAddress}/>
        <label htmlFor="amount">Amount</label>
        <input value={amount} id="amount" onChange={handleAmount}/>
      </div>
      <button className="btn" onClick={handleSend}>Send</button>
      {txId && <a href={`https://kovan.etherscan.io/tx/${txId}`} target="_blank" rel="noreferrer">{txId?.substring(0, 7)}...{txId?.substring(txId?.length - 5)}</a>}
    </>
  );
};

export default HomeScreen;
