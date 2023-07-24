import React from 'react';
import title from "./pages/title";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#announcements"
              onClick={() => handlePageChange('announcements')}
              className={currentPage === 'announcements' ? 'nav-link active' : 'nav-link'}
            >
              🦋Announcements
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
            🦋About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
             🦋Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#How much?"
              onClick={() => handlePageChange('How much?')}
              className={currentPage === 'How much?' ? 'nav-link active' : 'nav-link'}
            >
             🦋How much?
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact me"
              onClick={() => handlePageChange('contact me')}
              className={currentPage === 'contact me' ? 'nav-link active' : 'nav-link'}
            >
             🦋 Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
