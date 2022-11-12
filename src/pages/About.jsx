import React from 'react';

const About = () => {
  const text = ` What is a ToDo List? The definition is a simple one. 
  It's a list of tasks you need to complete or things that you want to do. 
  Most typically, they're organised in order of priority. 
  Traditionally, they're written on a piece of paper or post it notes and act as a memory aid.`;

  return (
    <section className="about">
      <div className="container">
        <header className="about-header">
          <h1>About the app</h1>
        </header>
        <div className="about-content">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
