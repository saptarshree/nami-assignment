import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} NAMI ASSIGNMENT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
