import React from 'react';

const OverviewCard = ({ platform, reach, icon }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
      <img src={icon} alt={`${platform} icon`} className="h-8 w-8" />
      <div>
        <h3 className="text-lg font-medium">{platform}</h3>
        <p className="text-sm text-gray-500">Reach: {reach}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
