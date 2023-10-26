import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="w-full text-gray-900 dark:text-gray-300 py-12">
      <h1 className="text-center text-4xl lg:text-6xl">{title}</h1>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};

export default Header;
