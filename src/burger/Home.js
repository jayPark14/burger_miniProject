import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";	// 추가
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import main_a from './image/aaa.jpg'
import main_b from './image/slidea.png'
import main_c from './image/slidey.jpg'
import main_d from './image/title.png'
import home_left from './image/left.png'
import home_right from './image/drink.jpg'
import home_bottom from './image/adf.png'

import './Home.css'
import {Component} from "react";


SwiperCore.use([Navigation, Pagination, Autoplay])	// 추가

function Slide() {
    return (
        <div className="slide_box">
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
            >
                {/*<SwiperSlide></SwiperSlide>*/}
                <SwiperSlide className="slide_image"><a herf="#"><img src={main_d}/></a></SwiperSlide>
                <SwiperSlide className="slide_image"><a herf="#"><img src={main_c}/></a></SwiperSlide>
                <SwiperSlide className="slide_image"><a herf="#"><img src={main_b}/></a></SwiperSlide>
                <SwiperSlide className="slide_image"><a herf="#"><img src={main_a}/></a></SwiperSlide>
            </Swiper>
        </div>
    );
}


function Knee() {
    return (
        <>
            <section id="lf">
                <div className="item_left">
                    <a herf="#"></a>
                    <a herf="#">
                        <img src={home_left}/>
                    </a>
                </div>
                <div className="item_right">
                    <a herf="#"></a>
                    <a herf="#">
                        <img src={home_right}/>
                    </a>
                </div>
            </section>
            <div className="item_bottom">
                <a herf="#">
                    <img src={home_bottom}/>
                </a>
            </div>
        </>
    )
}


function Footer() {
    return (
        <>
            <div id="ft">
                <div id="ft_company" className="mb-20">
                    <a href="">회사소개</a>
                    <a href="" className="bold">개인정보취급방침</a>
                    <a href="">이용약관</a>
                </div>

            </div>
            <div className="footer">
                <div className="ft_in">
                    <span>프로젝트명 : 바른버거</span><br/>
                    <span>제작 : Jay</span><br/>
                    <span>주소 : <a href="https://github.com/jayPark14">https://github.com/jayPark14</a></span><br/>
                    <span>연락처 : 010-1110-1110</span><br/>
                    <span></span><br/>
                    <div>
                        <big>
                            <span>고객센터 : <a href="tel:1110-1110"> 1110-1110</a></span><br/>
                            <small>평일 09:00~24:00 (주말 및 공휴일 off)</small>
                        </big>
                    </div>
                    <div className="copyright">
                        Copyright © 2022 바른버거 주식회사. All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
    );
}


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.count = this.count.bind(this);
        this.state = {hours: 0, minutes: 0, seconds: 0};
        this.timer = null;
        this.deadline = null;
    }

    count() {
        let now = new Date().getTime();
        let t = this.deadline - now;
        let hours = Math.floor(t / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({hours, minutes, seconds});

        if (t < 0) {
            clearInterval(this.timer);
            this.setState({hours: 0, minutes: 0, seconds: 0});
        }
    }

    componentDidMount() {
        this.deadline = new Date("2022-03-23T18:00:00").getTime();
        this.timer = setInterval(this.count, 1000);
    }


    render() {
        const {hours, minutes, seconds} = this.state;
        // localStorage.removeItem('userSession');
        const userSession = window.localStorage.getItem('userSession');
        const deliDay = window.localStorage.getItem('deliDay');

        return (
            <>
                <Slide/>
                <div className="remaining_time_box">
                    <a href="">
                        <big className="remaining_time">
                            {hours < 10 ? `0${hours}` : hours}시간
                            {minutes < 10 ? `0${minutes}` : minutes}분
                            {seconds < 10 ? `0${seconds}` : seconds}초
                        </big>
                        <span> 내 주문하면</span><br/>
                        <b>
                            2/16(수) 오전 7시 전 도착!
                        </b>
                    </a>
                    <div className="remain_anne"><b>배송안내 > </b></div>
                </div>

                <Knee/>
                <Footer/>
            </>
        );
    }
}
