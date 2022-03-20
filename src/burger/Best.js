import './Best.css';

function Intro() {
    return (
        <div className="intro_best">
            <h1> 추천식단 </h1>
            <br/>
            <h4>다양한 메뉴들을 목적에 맞게! 주 단위로!</h4>
        </div>
    )
}

function Items() {
    return (
        <div className="item_wrapper">
            <div className="item1">
                {/*<a herf="#"><img src={image1}/></a>*/}
            </div>
            <div className="item2">
            </div>
            <div className="item3">
            </div>
            <div className="item4">
            </div>
            <div className="item5">
            </div>
            <div className="item6">
            </div>
            <div className="item7">
            </div>
            <div className="item8">
            </div>
        </div>
    )
}


function Best() {
    console.log("페이지 랜더 완료 : Best.js")
    return (
        <div className='best'>
            <Intro/>
            <Items/>
        </div>
    )
}

export default Best;