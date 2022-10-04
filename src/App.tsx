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
        <Content title="Chosen interface: TV Remote">
          <img className='Image' src="https://i.imgur.com/Z2gumix.png">
          </img>
          <img className='Image' src="https://m.media-amazon.com/images/I/31p9taWggOL._AC_.jpg">
          </img>
          <img className='Image' src="https://i5.walmartimages.com/asr/acc86d4d-acc5-4c44-b408-9076a6a3bd6c.bdceca53b5377c1475c9baed71c32465.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF">
          </img>
        </Content>
        <Content title='Interview Questions'>
          
        </Content>
        <Content title="Personas">
          Content 3
        </Content>
        <Content title='Empathy Maps'>
          
        </Content>
        <Content title='Storyboard'>
          
        </Content>
      </div>
    </div>
  );
}

export default App;
