import {Outlet, Link} from "react-router-dom";
import './Navigation.css';
// import styles from "./sidebar.module.css";
import {useEffect, useRef, useState} from "react";
import {AiOutlineShoppingCart, AiOutlineCalendar} from "react-icons/ai";
import {FaHamburger} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiHomeAlt} from "react-icons/bi";
import {FiThumbsUp} from "react-icons/fi";
import {IoPersonOutline} from "react-icons/io5";
import {Accordion, Button} from "react-bootstrap";

const userSession = window.localStorage.getItem('userSession');
const deliDay = window.localStorage.getItem('deliDay');
const cartCount = window.sessionStorage.getItem('cartCount');

const logOut = (event) => {
    localStorage.removeItem('userSession');
    localStorage.removeItem('deliDay');
    sessionStorage.removeItem('cartCount');
    window.location.href = './home';
}

const Navigation = ({width = 400}) => {

    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();

    // button 클릭 시 토글
    const toggleMenu = () => {
        if (xPosition > 0) {
            setX(0);
            setOpen(true);
        } else {
            setX(width);
            setOpen(false);
        }
    };


    /* 회원, 비회원 전환 */

    // useEffect 페이지 로딩시 먼저 호출
    function changemenu(id) {
        document.getElementById('_section0').classList.add('active');
        document.getElementById('_section1').classList.add('active');

        if (id === 0) {
            document.getElementById('_section1').classList.remove('active');
        } else {
            document.getElementById('_section0').classList.remove('active');
        }
    }


    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = async e => {
        let sideArea = side.current;
        let sideCildren = side.current.contains(e.target);
        if (isOpen && (!sideArea || !sideCildren)) {
            await setX(width);
            await setOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    })

    return (

        <div className='index-container'>

            <header id="hd">
                <h1>바른버거</h1>
                <div className="hd_top">
                    <div id="hd_wr" className="">
                        <div className="_inner">
                            <FaHamburger size="30"/>
                            <div className="_center">
                                <b>바른버거</b>
                            </div>
                            <div className="_right">

                                <span className="cart_icon"> <AiOutlineShoppingCart/></span><span
                                // className="cart-count"><p>{cartCount !== null ? cartCount : 0}</p></span>
                                className="cart-count"><p>{cartCount !== null ? cartCount : 0 }</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className='container'>
                <div ref={side} className='sidebar'
                     style={{width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)`}}>
                    <div className="menu_close"></div>

                    <div id="slide_menu">

                        <div>
                        </div>

                        <div className="change_menu">

                            {/*로그인시 hidden */}
                            <div id="_section0" className={"_section " + (userSession !== null ? "" : "active")}>
                                <div className="sidebar_btn">
                                    <Button variant="" size="lg" href="./regterms"
                                            className="sb_btn1">회원가입</Button>{' '}
                                    <Button variant="dark" size="lg" href="./loginpage"
                                            className="sb_btn2">로그인</Button>{' '}
                                </div>
                            </div>


                            {/* 로그인시 나타남 */}
                            <div id="_section1" className={"_section " + (userSession !== null ? "active" : "")}>
                                <div className="sidebar_btn gap-2">
                                    <Button variant="" size="lg" onClick={logOut} className="sb_btn3">로그아웃</Button>{' '}
                                    <Button variant="dark" size="lg" href="./mypage"
                                            className="sb_btn4">마이페이지</Button>{' '}
                                </div>


                                <section id="member_head">
                                    <div className="member_hd">
                                        <div className="grade">

                                            <br/>
                                            <span> {deliDay > 119 ? "VIP" : deliDay > 59 ? "나무" : deliDay > 19 ? "열매" : deliDay > 0 ? "새싹" : "일반회원"}</span>

                                        </div>

                                        <div className="log_txt"><big className="">{userSession}</big> 님</div>

                                        <div className="deli">
                      <span className="deli_box">
                          <span className="deli_day">누적 배송 일수 {deliDay} DAY</span>
                    </span>
                                        </div>

                                    </div>
                                </section>


                            </div>
                        </div>


                        <div>
                            <div id="gnbmenu" className="px-15">


                                <div className="_item">

                                    <div className="card-header">
                                        <a className="card-link no_collapse" href="">&nbsp;&nbsp;스토리</a>
                                    </div>


                                    <Accordion>
                                        <Accordion.Item eventKey="0" flush>
                                            <Accordion.Header className="panel-header">메뉴</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="menuTwo" className="collapse show" data-parent="#gnbmenu">
                                                    <div className="card-body">

                                                        <a href="./best" className="border-bottom">
                                                            <p>추천 식단</p>
                                                        </a>
                                                        <a href="./select" className="border-bottom">
                                                            <p>선택 식단</p>
                                                        </a>

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="panel-header">고객센터</Accordion.Header>
                                            <Accordion.Body>

                                                <div className="card-body">
                                                    {/*<a href="" className="border-bottom">*/}
                                                    <p className="_title">
                                                        공지사항
                                                    </p>
                                                    {/*</a>*/}

                                                    {/*<a href="" className="border-bottom">*/}
                                                    <p className="_title">
                                                        자주 하는 질문
                                                    </p>
                                                    {/*</a>*/}
                                                    {/*<a href="" target="_blank" className="">*/}
                                                    <p className="_title">
                                                        1:1 문의
                                                    </p>
                                                    {/*</a>*/}
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>


                                </div>


                                <div className="_item">
                                    <div className="card-header no-border">
                                        <a className="card-link no_collapse" href="">
                                            &nbsp;&nbsp;이벤트
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>


            <div className="navigation_wrap">
                <div className="navigation">
                    <div onClick={() => toggleMenu()}>
                        <div>
                            <span><GiHamburgerMenu size="30"/></span>
                            <span>카테고리</span>
                        </div>
                    </div>
                    <Link to="/home">
                        <div>
                            <span><BiHomeAlt size="30"/></span>
                            <span>홈</span>
                        </div>
                    </Link>
                    <Link to="/best">
                        <div>
                            <span><FiThumbsUp size="30"/></span>
                            <span>추천식단</span>
                        </div>
                    </Link>
                    <Link to="/select">
                        <div>
                            <span><AiOutlineCalendar size="30"/></span>
                            <span>선택식단</span>
                        </div>
                    </Link>
                    {/* 세션(로컬)이 존재할 경우 MyPage, 존재하지 않을 경우 LoginPage로 이동 */}
                    <Link to={userSession !== null ? "./mypage" : "./loginpage" }>
                    {/*<Link to="/mypage">*/}
                        <div>
                            <span><IoPersonOutline size="30"/></span>
                            <span>마이페이지</span>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navigation;