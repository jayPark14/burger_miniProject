import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Select.css'
import {ko} from "date-fns/locale";
import {getMonth, getDate, getDay, getYear} from "date-fns";
import {Button, Form} from "react-bootstrap";
import burger_a from './image/bga.png'
import burger_b from './image/bgb.png'
import burger_c from './image/bgc.png'
import burger_d from './image/bgd.png'
import burger_g from './image/bgd.png'
import burger_f from './image/bgf.png'
import burger_h from './image/bgg.png'
import burger_i from './image/bgi.jpg'


function MenuSelect(){

    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = () => {
        let Days = ['일', '월', '화', '수', '목', '금', '토'];
        let Year = getYear(startDate);
        let Month = getMonth(startDate) + 1;
        let Date = getDate(startDate);
        let Day = Days[getDay(startDate)];
        console.log(String(Year + "." + Month + "." + Date))
        alert("날짜가 선택되었습니다. 상품을 선택해주세요.")
    }

    return(
        <div className="menu_select">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ko}                   // 한글로 변경
                dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                showPopperArrow={false}       // 화살표 변경
                minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                dayClassName={(d) =>
                    getDate(d) === getDate(startDate) && getMonth(d) === getMonth(startDate)
                        ? 'normal-day selected-day'
                        : 'normal-day'
                }
                customInput={		      // 날짜 뜨는 인풋 커스텀
                    <Form.Control as="textarea" rows={1} style={{width: "250px"}}/>
                }
            />

            <div><Button className="cal_btn" onClick={handleSubmit}>확인</Button></div>
        </div>
    )
}



function Select() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);

    // const counting = window.localStorage.getItem('counting');

    const intoCart = (event) => {
        let counting = (String)(count + count1 + count2 + count3 + count4 + count5 + count6 + count7);
        window.sessionStorage.setItem("cartCount", counting)
        console.log(counting);
        console.log(window.sessionStorage)
        alert("총"+counting+"개의 상품이 장바구니에 담겼습니다.")
        window.location.href = './select';
    }



    return (
        <div className="date_cont">

            <MenuSelect/>

            <div className="item_line">
            <div className="sl_item sl_left">
                <div className="sl_item_image"><img src={burger_a}/></div>
            <div className="sl_btn_box">
                <button className="sl_btn" onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button className="sl_btn" onClick={() => setCount(count - 1)}>
                    -
                </button>
                <div>구매수량 : {count}</div>
            </div>
            </div>

            <div className="sl_item sl_right">
                <div className="sl_item_image"><img src={burger_b}/></div>
            <div className="sl_btn_box">
                <button className="sl_btn" onClick={() => setCount1(count1 + 1)}>
                    +
                </button>
                <button className="sl_btn" onClick={() => setCount1(count1 - 1)}>
                    -
                </button>
                <div>구매수량 : {count1}</div>
            </div>
            </div>
            </div>

            <div className="item_line">
                <div className="sl_item sl_left">
                    <div className="sl_item_image"><img src={burger_c}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount2(count2 + 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount2(count2 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count2}</div>
                    </div>
                </div>

                <div className="sl_item sl_right">
                    <div className="sl_item_image"><img src={burger_d}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount3(count3 + 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount3(count3 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count3}</div>
                    </div>
                </div>
            </div>

            <div className="item_line">
                <div className="sl_item sl_left">
                    <div className="sl_item_image"><img src={burger_h}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount4(count4 + 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount4(count4 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count4}</div>
                    </div>
                </div>

                <div className="sl_item sl_right">
                    <div className="sl_item_image"><img src={burger_i}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount5(count5 + 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount5(count5 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count5}</div>
                    </div>
                </div>
            </div>

            <div className="item_line">
                <div className="sl_item sl_left">
                    <div className="sl_item_image"><img src={burger_g}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount6(count6 + 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount6(count6 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count6}</div>
                    </div>
                </div>

                <div className="sl_item sl_right">
                    <div className="sl_item_image"><img src={burger_f}/></div>
                    <div className="sl_btn_box">
                        <button className="sl_btn" onClick={() => setCount7(count7+ 1)}>
                            +
                        </button>
                        <button className="sl_btn" onClick={() => setCount7(count7 - 1)}>
                            -
                        </button>
                        <div>구매수량 : {count7}</div>
                    </div>
                </div>
            </div>


            <div><Button className="select_cart_btn" onClick={intoCart}>장바구니 담기</Button></div>


        </div>
    );
};
export default Select;