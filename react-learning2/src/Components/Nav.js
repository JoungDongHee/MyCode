export function Nav(props){
    //app.js 에서 선언한 topics 를 프롭스로 받아온다
    const Lis = []
    for(let i=0; i<props.topics.length;i++){
        let t = props.topics[i]
        // props 를 사용하기 위해서는 키를 선언해줘야 한다 여기서는 토픽스의 id 를 키로 선언해준다
        // 이벤트 객체를 사용하여 a 의 id 값을 인자값으로 onChaneMode 에 전달 해준다
        Lis.push(
            <li key={t.id}>
                <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
                    event.preventDefault();
                    props.onChaneMode(Number(event.target.id));
                }}>{t.title}</a>
            </li>
        )
    }
    return  (
        <nav>
          <ol>
            {Lis}
          </ol>
        </nav>
    );
  }
  
  export default Nav