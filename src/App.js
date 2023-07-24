import React, { useState } from 'react';
import Header from './components/header';
import './App.css'; // Assuming you have a CSS file for styling
import Announcements from "./components/pages/announcements";
import Projects from "./components/pages/Projects";
import HowMuch from "./components/pages/HowMuch";
import ContactMe from "./components/pages/ContactMe";
// import ProjectCard from './components/pages/ProjectCard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('announcements');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
  
      {/* The rest of your app content can go here */}
      {/* For example, you can render different components based on the current page */}
      {currentPage === 'announcements' && <Announcements />}
      {currentPage === 'Projects' && <Projects />}
      {currentPage === 'How much?' && <HowMuch />}
      {currentPage === 'contact me' && <ContactMe />}
    </div>
  );
  
};

export default App;
