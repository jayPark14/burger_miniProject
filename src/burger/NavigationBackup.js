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
                                className="cart-count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className='container'>
                <div ref={side} className='sidebar'
                     style={{width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)`}}>
                    <div className="menu_close"></div>

                    {/*아래 onclick 뭔 코드지?*/}
                    {/*<div onClick="history.back();" className="page_cover"></div>*/}
                    <div id="slide_menu">
                        {/*<div className="menu_close"></div>*/}

                            <div className="sidebar_btn d-grid gap-2">
                            <Button variant="dark" size="lg" href="./regterms">회원가입</Button>{' '}
                            <Button variant="dark" size="lg" href="./loginpage">로그인</Button>{' '}
                            </div>


                        <div>
                            <div id="gnbmenu" className="px-15">


                                <div className="_item">

                                    <div className="card-header">
                                        <a className="card-link no_collapse" href="">스토리</a>
                                    </div>


                                    <Accordion>
                                        <Accordion.Item eventKey="0" flush >
                                            <Accordion.Header>메뉴</Accordion.Header>
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
                                            <Accordion.Header>고객센터</Accordion.Header>
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
                                            이벤트
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
                    <Link to="/mypage">
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