function NoPage() {
    const topicList = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'}
    ]
    return (
        <>
            <h1>404</h1>
            <b>리액트 연습페이지</b>
            <Header title="REACT" onCm={function () {
                alert("Hello, React!")
            }}/>
            <Nav topics={topicList} onChangeMode={id => {
                alert(id + "번 아이디")
            }}/>
            <Article title="Welcome" body="Hello, 웹"/>
        </>
    )
}

export default NoPage;


function Header(props) {
    return <header>
        <h1><a href="/" onClick={(e) => { // 화살표 함수 한번 써봤고
            e.preventDefault(); // prevent로 리다이렉트 막고
            props.onCm(); // 함수 호출
        }
        }>{props.title}</a></h1>
    </header>
}

function Nav(propOk) {
    const list = []
    for (let i = 0; i < propOk.topics.length; i++) {
        let t = propOk.topics[i];
        list.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={event => {
            event.preventDefault();
            propOk.onChangeMode(event.target.id); //이벤트를 유발시킨 태그를 target으로 id를 가져온다
        }}>{t.title}</a></li>)
    }
    return <nav>
        <ol>
            {list}
        </ol>
    </nav>
}

function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}