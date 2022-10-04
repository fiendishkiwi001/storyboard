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
          <div>(concept sketch, Roku, TV) </div>
          <img className='Image' src="https://i.imgur.com/Z2gumix.png">
          </img>
          <img className='Image' src="https://m.media-amazon.com/images/I/31p9taWggOL._AC_.jpg">
          </img>
          <img className='Image' src="https://i5.walmartimages.com/asr/acc86d4d-acc5-4c44-b408-9076a6a3bd6c.bdceca53b5377c1475c9baed71c32465.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF">
          </img>
        </Content>
        <Content title='Interview Questions'>
          <div className='InterviewSummary'>
            <div>
              • All interviewed users quickly related to the selected interface, supported by the fact that
              they all had used a TV remote before.
            </div>
            <div>
              • However, interviewees primarily had complaints about previous user experiences, with virtually no
              positive design takeaways.
            </div>
          </div>

          <div className='InterviewQuestions'>

            <div className='InterviewContent'>
              Are any of the buttons' functions unfamiliar to you? What would you guess they do?
              <div className='InterviewAnswer'>
                All three presented designs had particular sets of fallacies.
                The sketch was hard to imagine as a physical remote for some, maybe due to the small profile and unconventional layout.
                Alternatively, the standard TV remotes both had buttons whose purposes were unclear; Roku's asterisk TV options, as well
                as the other remote's page and AD buttons.
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
                and play/pause as frequented operations. One cited buttons not registering when pressed. 
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
                While this event was not uncommon for users, it didn't seem to cause a significant problem either, besides having
                to repeat button inputs.
              </div>
            </div>

          </div>
        </Content>
        <Content title='Personas and Empathy Maps'>
          <img className='Image' src="https://i.imgur.com/SlUAsxo.png">
          </img>
          <img className='Image' src="https://i.imgur.com/PyF8TK9.png">
          </img>
        </Content>
        <Content title='Storyboard'>
          
        </Content>
      </div>
    </div>
  );
}

export default App;
