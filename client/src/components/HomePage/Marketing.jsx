import React from 'react';
import ColorBtn from '../../shared/ColorBtn';

const Marketing = () => {
  const priceItem = [
    {
      title: 'Basic Plan',
      price: '$950',
      features: ['5 User Seats', 'One Workspace', 'Unlimited Integrations',
        'AI Provisioned Database', '50GB Database Storage', '50 monthly prompt credits/user'
      ],
      hoverColor: 'group-hover:bg-yellow-200', 
    },
    {
      title: 'Team Plan',
      price: '$3,000',
      features: ['10 User Seats', 'Unlimited Integrations', 'AI Provisioned Database',
        '200 GB Database Storage', '500 monthly prompt credits/userer'
      ],
      hoverColor: 'group-hover:bg-green-200',
    },
    {
      title: 'Enterprise Plan',
      price: 'Custom',
      features: ['Unlimited User Seats', 'Unlimited Workspaces', 'Unlimited Integrations',
        'Bring Your Own Database', 'Unlimited Database Storage', '1,000 monthly prompt credits/user'
      ],
      hoverColor: 'group-hover:bg-blue-200', 
    },
  ];

  return (
    <div id='marketing' className='my-10 md:my-30 px-4 sm:px-10 lg:px-30 bg-white'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-12 font-semibold text-center'>
        Plans & Pricing
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {priceItem.map((item, index) => (
          <div 
            key={index}
            className='shadow-lg rounded-lg overflow-hidden flex flex-col group bg-gray-100 transition-shadow hover:shadow-xl duration-300'
          >
            <div className={`px-8 pt-8 transition-colors duration-300 ${item.hoverColor}`}>
              <h2 className='text-lg border border-gray-300 px-4 py-1 mb-4 w-fit rounded-md bg-white'>
                {item.title}
              </h2>
              <p className='font-light mb-4 p-2 flex flex-col border-t border-gray-200 text-2xl md:text-3xl'>
                {item.price} <span className='text-lg font-semibold'>per month</span>
              </p>
            </div>
            <div className='px-8 pb-8 flex flex-col'>
              <ColorBtn name='Get Started' />
              <ul className='mt-6 list-disc list-inside text-gray-500 
              text-left text-xs space-y-2'>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketing;
