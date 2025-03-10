// components/Home/StatsSection.tsx
import React from 'react';
import CounterItem from '../UI/CounterItem';
import { FaUsers, FaBuilding, FaTrophy, FaBusinessTime } from 'react-icons/fa';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <FaBuilding className="text-red-500 text-3xl" />,
      value: "2k+",
      label: "Projects Completed"
    },
    {
      icon: <FaUsers className="text-red-500 text-3xl" />,
      value: "3k+",
      label: "Happy Clients"
    },
    {
      icon: <FaTrophy className="text-red-500 text-3xl" />,
      value: "1.5k+",
      label: "Awards Won"
    },
    {
      icon: <FaBusinessTime className="text-red-500 text-3xl" />,
      value: "1k+",
      label: "Working Days"
    }
  ];

  return (
    <section className="py-12 bg-konta-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;