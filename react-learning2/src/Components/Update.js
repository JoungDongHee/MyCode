import { useState } from "react";

export function Update(props){
    // 폼 데이터에 기존의 데이터를 가져오기 위해서는 프롭스의 데이터를 가져와야 한다
    // 프롭스 데이터를 초기값으로 선언 해주고 
    // 온체인지를 통해 값이 변경될때 마다 스테이트를 불러서 값을 지속적으로 변경해준다
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
    <article>
        <h2>Update</h2>
        <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
        }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
            setTitle(event.target.value);
        }}/></p>
        <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
            setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
        </form>
    </article>
    )
  };
  
  export default Update