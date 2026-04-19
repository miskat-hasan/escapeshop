import React from 'react'
import CustomerInformation from '../Components/CustomerInformationPage/CustomerInformation'
import OrderSummary from '../Components/CustomerInformationPage/OrderSummary'

const CustomerInformationPage = () => {
  return (
    <div className='container pt-32 md:pt-40 pb-16 md:pb-32 px-4 md:px-6 flex flex-col lg:flex-row gap-2 2xl:gap-9'>
      <CustomerInformation />
      <div className='w-full lg:w-[496px] lg:flex-shrink-0'>
        <OrderSummary />
      </div>
    </div>
  )
}

export default CustomerInformationPage