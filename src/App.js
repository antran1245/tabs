import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs';
import Content from './components/content';
import { useState } from 'react';

function App() {
  const [tabsLength, setTabsLength] = useState(["hello", "world", "byebye"])
  const [show, setShow] = useState('')

  const content = (text) => {
    if(text === show) {
      text = ''
    }
    setShow(text)
  }

  return (
    <div className="App">
      {tabsLength.map((item,i) =>
        <Tabs key={i} count={i} item={item} setShow={content} color={item===show?'lightgreen':''}></Tabs>
      )}
      <Content content={show}/>
    </div>
  );
}

export default App;
