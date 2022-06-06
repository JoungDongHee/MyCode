export function Hearder(props){
    // props = object 타입으로 인자값을 가져올수 있다
    
    // 이벤트 객체 선언 preventDefault 를 
    // 선언해서 a태그의 기본 동작을 제어
    // app.js 에서 선언한 onChaneMode 를 프롭스를 통해 가져오고
    // 그걸 실행해준다
    return  (
      <header>
        <h1><a href='/' onClick={(event)=>{
            event.preventDefault();
            props.onChaneMode(); 
        }}>{props.title}</a></h1>
      </header>
    );
  }
  
  export default Hearder