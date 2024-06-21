import React from 'react';

function Header() {
  return (
    <nav className="bg-dark navbar-dark navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
        <h3>Akshith Pesaramalli</h3>
        <div className="ml-auto">
          <button className="btn btn-outline-light">About Us</button>
          <button className="btn btn-outline-light ml-2">Login</button>
          <button className="btn btn-outline-light ml-2">Shop</button>
          <button className="btn btn-outline-light ml-2">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
