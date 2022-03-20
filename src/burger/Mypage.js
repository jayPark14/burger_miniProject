import './Mypage.css';

const Mypage = () => {
    const userSession = window.localStorage.getItem('userSession');
    const deliDay = window.localStorage.getItem('deliDay');



    const logOut = (event) => {
        localStorage.removeItem('userSession');
        localStorage.removeItem('deliDay');
        sessionStorage.removeItem('cartCount');
    }

    const grade = () =>{
        alert("누적 배송 일수 1~19:새싹, 20~59:열매, 60~119:나무, 120이상:VIP  ")
    }
    // const [grade, setGrade] = useState("일반회원");
    // function deliGrade(){
    //     if ( deliDay > 120) {
    //         setGrade("VIP");
    //     } else if(deliDay > 60) {
    //         setGrade("Pl");
    //     }else if(deliDay > 10) {
    //         setGrade("Gold");
    //     }else if(deliDay > 0) {
    //         setGrade("silver");
    //     }
    // }

    return (
        <div className='Mypage'>

            <section id="member_head">
                <div className="member_info">
                    <div className="grade">
                        <h3>
                            <br/>
                            <span> {deliDay > 119 ? "VIP" : deliDay > 59 ? "나무" : deliDay > 19 ? "열매" : deliDay > 0 ? "새싹" : "일반회원"}</span>
                        </h3>
                        <a className="text-yellow" onClick={grade}>
                            등급 및 혜택 안내
                        </a>
                    </div>
                    <div className="deli">
                      <span className="deli_box">
                          <span className="deli_day">누적 배송 일수<br/>
                              <big>{deliDay} DAY</big>
                          </span>
                    </span>
                    </div>
                    <div className="log_text">로그인 아이디 : <big className="">{userSession}</big> </div>
                </div>
            </section>
            <section id="middle_box" className="middle_box">
                <div className="middle_box_border">
                    <p className="main_title">
                        진행중인 정기식단
                        <span onClick="location.href=''">더보기</span>
                    </p>
                    <ul className="food_con">
                        <li className="food_list">현재 진행중인 정기 식단이 없습니다.</li>
                    </ul>
                </div>
            </section>

            <div className="list">
                <div className="item">
                    <a href="">
                        주문내역
                    </a>
                </div>

                <div className="item">
                    <a href="">
                        1:1 문의
                    </a>
                </div>
                <div className="item">
                    <a href={"./regterms"}>
                        약관
                    </a>
                </div>
                <div className="item" onClick={logOut}>
                    <a href={"./home"} >
                        로그아웃
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Mypage;

