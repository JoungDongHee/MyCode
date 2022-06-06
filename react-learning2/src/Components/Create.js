export function Create(props){
    // event 을 통해 form 태그 내부의 데이터 title , body 값을 불러오고 
    // props.onCreate 를 호출 하여 불러온 데이터를 다시 인자값으로 던저준다
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                props.onCreate(title,body)
            }}>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="body"/></p>
                <p><input type="submit" value="Create"/></p>
            </form>
        </article>
    )
};

export default Create