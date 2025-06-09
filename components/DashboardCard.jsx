import React from 'react';

const DashboardCard = ({ title, subtitle, children }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-md p-6 w-full max-w-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
      <div className="text-sm text-white">{children}</div>
    </div>
  );
};

export default DashboardCard;
