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
        <Content title="Selected interface: TV Remote">
          <img className='Image' src="https://i.imgur.com/Z2gumix.png">
          </img>
          <img className='Image' src="https://m.media-amazon.com/images/I/31p9taWggOL._AC_.jpg">
          </img>
          <img className='Image' src="https://i5.walmartimages.com/asr/acc86d4d-acc5-4c44-b408-9076a6a3bd6c.bdceca53b5377c1475c9baed71c32465.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF">
          </img>
        </Content>
        <Content title='Interview Questions'>
          <div className='InterviewSummary'>
            • All interviewed users quickly related to the selected interface, pointing towards the 
          </div>
          <div className='InterviewQuestions'>

            <div className='InterviewContent'>
              Are there any buttons whose functions are unfamiliar to you? What would you guess they do?
              <div className='InterviewAnswer'>
                This is an answer
              </div>
            </div>

            <div className='InterviewContent'>
              How much time do you think you spend using the remote when you use a TV?
              <div className='InterviewQuestionsSub'>
                - Could you estimate which functions you most frequently use?
              </div>
              <div className='InterviewQuestionsSub'>
                - What operations would take the most time?
              </div>
              <div className='InterviewAnswer'>
                A shared disapproval for typing on a keyboard with a TV remote was observed, although some cited 
                predictive text suggestions as a solution. Besides typing, users also considered changing the volume, a back button,
                and play/pause as frequented operations.
              </div>
            </div>

            <div className='InterviewContent'>
              If you have a TV, which button functions’ locations can you recall on the remote?
              <div className='InterviewAnswer'>
                Interestingly, only one user was able to recall more than two buttons; as a whole, all three were able to remember
                the volume and power button positions.
              </div>
            </div>

            <div className='InterviewContent'>
              When using a remote, how often does the output not match what buttons you intended to press?
              <div className='InterviewAnswer'>
                This is an answer
              </div>
            </div>

          </div>
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
