import React from 'react'
import CustomerInformation from '../Components/CustomerInformationPage/CustomerInformation'
import OrderSummary from '../Components/CustomerInformationPage/OrderSummary'

const CustomerInformationPage = () => {
  return (
    <div className='container pt-40 pb-32 flex gap-9'>
      <CustomerInformation />
      <OrderSummary />
    </div>
  )
}

export default CustomerInformationPage
