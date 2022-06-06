import './App.css';
import { useState } from 'react';
import Hearder from './Components/Hearder.js'
import Article from './Components/Article.js'
import Nav from './Components/Nav.js'
import Create from './Components/Create.js'
import Update from './Components/Update.js'

function App() {
  // mode 값을 이벤트가 발생 했을때 변경을 해주기 위해 State 사용
  const [mode , setMode] = useState('WELCOME');
  // 클릭된 페이지를 알기 위해 id 값 선언
  const [id , setId] = useState(null);
  // topics 가 변경 될때를 알기 위해 스테이트 선언
  const [topics,setTopics] = useState([
      {id:1 , title:'html' , body:'html is ...'},
      {id:2 , title:'css' , body:'css is ...'},
      {id:3 , title:'js' , body:'js is ...'}
    ]);
  const [nextId , setNextId] = useState(4)

  let content = null; // 초기값 선언
  let contextControl = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcom" body="Hello,Web"></Article>
  }else if(mode === 'READ'){
    // 타이틀 바디 초기값 선언
    let title,body = null;
    //id 값과 일치 하면 세팅 해주고 뿌려줌
    for(let i=0; i<topics.length;i++){
      //태그의 속성으로 가져온 id 값은 문자열 id 이기 때문에 숫자로 선언해줘야 한다
      if(topics[i].id === Number(id)){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li><a href={/update/+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []
        for(let i=0;i<topics.length; i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode("WELCOME");
      }}></input></li>
    </>
  }else if(mode === 'CREATE'){
    content = <Create onCreate={(title,body)=>{
    // 범 객체 에서 useState 를 사용하기 위해서는 원본 을 냅두고 
    // 원본 객체를 복제하여 복제한 객체에 데이터를 수정 
    // 이후 복제한 객체를 set 해줌으로서 사용한다
    const newTopic = {id:nextId , title:title, body:body}
    let newTooics = [...topics];
    newTooics.push(newTopic);
    setTopics(newTooics);
    setMode("READ");
    setId(nextId);
    setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      console.log(title,body);
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      console.log(updatedTopic);
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      console.log(newTopics);
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div className="App">
        <Hearder title="REACT" onChaneMode={()=>{
          setMode('WELCOME');
        }}></Hearder>
        <Nav topics={topics} onChaneMode={(id)=>{
          setMode('READ');
          setId(id);
        }}></Nav>
        {content}
        <ul>
          <li><a href='/create' onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>create</a></li>
          {contextControl}
        </ul>
    </div>
  );
}

export default App;
