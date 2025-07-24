import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import {
  useBitcoin,
  useEthereum,
  useSolana,
  useXRP,
  useUSDC,
  useDogecoin,
  useBnbcoin,
  useSuicoin,
} from '../../store/crypto';

const Stats = () => {
  const bitcoin = useBitcoin();
  const ethereum = useEthereum();
  const solana = useSolana();
  const xrp = useXRP();
  const usdc = useUSDC();
  const dogecoin = useDogecoin();
  const bnbcoin = useBnbcoin();
  const suicoin = useSuicoin();

  const allLoaded =
    !bitcoin.isLoading &&
    !ethereum.isLoading &&
    !solana.isLoading &&
    !xrp.isLoading &&
    !usdc.isLoading &&
    !dogecoin.isLoading &&
    !bnbcoin.isLoading &&
    !suicoin.isLoading;

  const error =
    bitcoin.error ||
    ethereum.error ||
    solana.error ||
    xrp.error ||
    usdc.error ||
    dogecoin.error ||
    bnbcoin.error ||
    suicoin.error;

  const data = [
    { name: 'Bitcoin', price: bitcoin.data?.Price ?? 0 },
    { name: 'Ethereum', price: ethereum.data?.Price ?? 0 },
    { name: 'Solana', price: solana.data?.Price ?? 0 },
    { name: 'XRP', price: xrp.data?.Price ?? 0 },
    { name: 'USDC', price: usdc.data?.Price ?? 0 },
    { name: 'Dogecoin', price: dogecoin.data?.Price ?? 0 },
    { name: 'BNB', price: bnbcoin.data?.Price ?? 0 },
    { name: 'SUI', price: suicoin.data?.Price ?? 0 },
  ];

  if (!allLoaded) return <p className="dark:text-white">Loading stats...</p>;
  if (error) return <p className="dark:text-white">Failed to load stats.</p>;

  return (
    <div className="w-full h-[400px] ">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Crypto Prices (USD)</h2>
      <div className="grid grid-cols-2 gap-2 mb-6 text-center">
  {data.map((item) => (
    <div key={item.name} className="text-sm dark:text-white">
      <span className="font-semibold">{item.name}:</span>{' '}
      <span>${item.price.toLocaleString()}</span>
    </div>
  ))}
</div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#000' }}
            tickLine={false}
            axisLine={{ stroke: '#8884d8' }}
            className="dark:fill-white"
          />
          <YAxis
            tick={{ fill: '#000' }}
            axisLine={false}
            tickLine={false}
            className="dark:fill-white"
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#111827', border: 'none' }}
            labelStyle={{ color: '#ffffff' }}
            itemStyle={{ color: '#86efac' }}
            formatter={(value) => `$${Number(value).toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#86efac"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
