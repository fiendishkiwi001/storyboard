import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Title/>
      <div className="Container">
        <Content>
          Chosen interface: TV Remote
        </Content>
        <Content>
          Interview Questions
        </Content>
        <Content>
          Content 3
        </Content>
        <Content>
          Content 4
        </Content>
      </div>
    </div>
  );
}

export default App;
