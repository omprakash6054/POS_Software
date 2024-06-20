import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyan-900 opacity-90 text-white p-4 text-left">
      &copy; {currentYear} 1decision. All Rights Are Reserved. 
    </footer>
  );
};

export default Footer;