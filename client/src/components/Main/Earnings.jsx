import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
import { charts } from '../constants/data'; 

const Earnings = () => {

  const totalEarnings = charts.reduce((sum, item) => sum + item.earnings, 0).toFixed(2);

  return (
    <div className='mt-3 sm:mt-8 dark:text-white bg-green-200 dark:bg-neutral-800'>
      <div className='border p-5 rounded-lg'>
        <h1 className='text-lg font-semibold hidden sm:flex'>Earnings</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-3 gap-3'>
          <div className='flex justify-between items-center border rounded-full px-7 py-5 tracking-wider bg-white dark:bg-black'>
            <h1 className='text-sm'>
              Epoch 9 <br /> Earnings:
            </h1>
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
              {totalEarnings}
            </h2>
          </div>
          <div className='flex justify-between items-center border rounded-full px-7 py-5 tracking-wider bg-white dark:bg-black'>
            <h1 className='flex gap-1 text-sm items-center'>
              <AlertCircleIcon size={20} />
              <div>
                Today's <br /> Earnings:
              </div>
            </h1>
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>0.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
