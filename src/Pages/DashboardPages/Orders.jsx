import React from 'react'
import OrderCard from '../../Components/Dashboard/OrderCard'

const Orders = () => {
  return (
    <div className='space-y-9'>
      <h3 className='text-2xl font-semibold text-[#E7EBEC]'>Orders(2)</h3>
      <div className="space-y-8">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  )
}

export default Orders
