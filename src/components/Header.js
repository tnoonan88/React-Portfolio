import React from 'react';
import NavTabs from './NavTabs';
import '../styles/Header.css';

function Header(props) {
  return (
    <header className="header">
        <h1>Tom Noonan</h1>
        <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
    </header>
  );
}

export default Header;
