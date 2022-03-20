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
            <Header title="REACT"></Header>
            <Nav topics={topicList}></Nav>
            <Article title="Welcome" body="Hello, 웹"></Article>
        </>
    )
}

export default NoPage;


function Header(props) {
    return <header>
        <h1><a href="/">WEB</a></h1>
    </header>
}

function Nav(propOk) {
    const list = []
    console.log(propOk)
    console.log(propOk.topics)
    console.log(propOk.topics.length)
    for (let i = 0; i < propOk.topics.length; i++) {
        let t = propOk.topics[i];
        list.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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