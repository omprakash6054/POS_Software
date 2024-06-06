import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 opacity-90 text-white p-4 text-center">
      &copy; {currentYear} Admin Dashboard
    </footer>
  );
};

export default Footer;