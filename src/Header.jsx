import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1><i className="fa-solid fa-paw"></i> {title} <i className="fa-solid fa-paw"></i></h1>
    </header>
  );
};

export default Header;