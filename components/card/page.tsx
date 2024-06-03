import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-sm w-50 mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg">
        {children}
      </div>
    </>
  );
};

export default Card;
