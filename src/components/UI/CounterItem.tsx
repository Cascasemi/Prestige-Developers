// components/UI/CounterItem.tsx
import React, { ReactNode } from 'react';

interface CounterItemProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default CounterItem;