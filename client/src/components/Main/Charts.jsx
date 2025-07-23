import React from 'react';
import { charts } from '../constants/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Charts = () => {
  return (
    <div className="p-5 rounded-lg border dark:bg-neutral-900 bg-white mt-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Earnings This Week</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={charts}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#10B981" // Tailwind green-500
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
