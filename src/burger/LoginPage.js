import './LoginPage.css';
import {useState} from "react";
import {GrClose} from "react-icons/gr";
import {Button} from "react-bootstrap";
import session from "./Session";


const LoginPage = () => {
    return (
        <div className="">
            <div id="mb_login">
                <LoginHead/>
                <LoginMenu/>

                <div className="login_container">
                    <LoginUser/>
                    <LoginGuest/>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;


/* 컴포넌트 */

/* 헤드 */
function LoginHead() {
    return (
        <h1><a className="xIcon" href="./home"><GrClose size="20"/></a>로그인</h1>
    )
}


/* 회원, 비회원 전환 */
function LoginMenu() {
    function loginmenu(id) {
        document.getElementById('_section0').classList.add('active');
        document.getElementById('_btn0').classList.add('active');
        document.getElementById('_section1').classList.add('active');
        document.getElementById('_btn1').classList.add('active');

        if (id === 0) {
            document.getElementById('_section1').classList.remove('active');
            document.getElementById('_btn1').classList.remove('active');
        } else {
            document.getElementById('_section0').classList.remove('active');
            document.getElementById('_btn0').classList.remove('active');
        }
    }

    return (
        <div className="login_menu">
            <div id="_btn0" className="_btn active" onClick={() => loginmenu(0)}>회원</div>
            <div id="_btn1" className="_btn" onClick={() => loginmenu(1)}>비회원</div>
        </div>
    )
}

/* 회원 로그인 */
function LoginUser() {

    const [inputs, setInputs] = useState({id: "", password: ""});

    const handleSubmit = (event) => {
        // console.log(inputs);
        event.preventDefault();
        fetch("http://localhost:8090/login", {
            method: "post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            //JSON.stringify()는 자바스크립트의 값을 JSON 문자열로 변환한다.
            body: JSON.stringify(inputs)
            // body: JSON.stringify({id: inputs.id, password: inputs.password})
            // response.json() 메서드를 호출하면 JSON데이터를 javascript 객체로 변환한다.
            // parses JSON response into native JavaScript objects
            // JSON 응답을 네이티브 JavaScript 오브젝트로 파싱
        }).then(function (response) {
            if (!response.ok) throw new Error();
            // response.json() 메서드를 호출하면 JSON데이터를 javascript 객체로 변환한다.
            return response.json();
        }).then(function (data) {
            console.log(data);
            // window.localStorage.setItem("id",inputs.id);
            // console.log(window.sessionStorage)
            // console.log(window.localStorage)
            // console.log(window.localStorage.getItem("id"))
            if (data !== null) {
                alert("로그인 성공! ");
                console.log(data);
                // 로그인 성공시 반환되는 데이터가 1이면 localStorage에 입력한 id를 넣어준다.
                window.localStorage.setItem("userSession", inputs.id);
                window.localStorage.setItem("deliDay", data);
                sessionStorage.removeItem('cartCount');
                // 본래 세션은 서버에서 관리해야 하지만 부득이하게 프론트에서도 관리하게 처리한다.
                console.log(window.localStorage)
                // 로그인에 성공하면 페이지를 ./home으로 이동시켜준다.
                window.location.href = './home';
                // document.location.href = '/home';
            }
        }).catch(function (error) {
            console.log(window.localStorage)
            alert("로그인 실패, 아이디와 비밀번호를 확인하세요. ");
            console.log(error);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    //password type 변경용 state
    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });

    //password type 변경하는 함수
    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return {type: 'text', visible: true};
            }
            return {type: 'password', visible: false};
        })
    }

    const autoLogin = () => {
        window.localStorage.setItem("userSession", inputs.id);
    }

    return (
        <div id="_section0" className="_section active">
            <form onSubmit={handleSubmit} method="post" name="login" id="flogin">
                <input type="hidden" name="url"/>

                <div id="login_frm">
                    <label htmlFor="login_id"/>
                    <input type="text" name="id" id="login_id"
                           placeholder=" 아이디(필수)" required=""
                           className="frm_input" maxLength="20" value={inputs.id} onChange={handleChange}/>

                    <label htmlFor="login_pw"/>
                    <input type={passwordType.type} name="password" id="login_pw" placeholder=" 비밀번호(필수)"
                           required="" className="frm_input" maxLength="20" value={inputs.password}
                           onChange={handleChange}/>

                    <div className="pull">

                        <div className="pull-left">
                                <span onClick={handlePasswordType}>
            	{passwordType.visible ? <div><input type="checkbox"/> 보이기 해체</div> :
                    <div><input type="checkbox"/> 비밀번호 보이기</div>}
            </span>
                        </div>

                        <div className="pull-right">
                            <input type="checkbox" name="auto_login" id="login_auto_login"
                                   onClick={autoLogin}/>
                            <label htmlFor="login_auto_login">&nbsp;자동로그인</label>
                        </div>
                    </div>


                    <input type="submit" value="로그인" className="btn_login"/>
                </div>

                <section className="">

                    <div className="mb_join_box">
                        <Button href="./regterms" variant="" size="lg" className="mb_join_btn">
                            회원가입
                        </Button>
                    </div>
                </section>
            </form>
        </div>
    )
}


/* 비회원 로그인 */
function LoginGuest() {

    const [ninputs, setNinputs] = useState({nid: "", ordernum: ""});


    const myHandelSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8090/guest", {
            method: 'post',
            body: JSON.stringify(ninputs)
        })
            .then(res => res.json())
            .then(function (data) {
                console.log(ninputs + "data위치");
                console.log(data);
                // if (data === null) {
                //     alert("비회원으로 로그인하셨습니다. ");
                //     console.log(data);
                // }
            }).catch(function (error) {
            console.log(error + "error발생");
        });

    }

    const subHandleSubmit = (event) => {
        console.log(ninputs);
        event.preventDefault();
        fetch("http://localhost:8090/guest", {
            method: "post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ninputs)
        }).then(function (response) {
            if (!response.ok) throw new Error();
            console.log(ninputs + "response위치");
            return response.json();
        }).then(function (data) {
            console.log(ninputs + "data위치");
            console.log(data);
            if (data !== null) {
                alert("비회원으로 로그인하셨습니다. ");
                console.log(data);
                // window.localStorage.setItem("guestSession", ninputs.nid);
                window.location.href = './home';
            }
        }).catch(function (error) {
            alert("비회원 로그인 실패, 주문자명과 주문번호를 확인하세요. ");
            console.log(error + "error발생");
        });
    }
    const subHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNinputs(values => ({...values, [name]: value}))
    }
    return (
        <div id="_section1" className="_section">
            <div id="mb_login_od_wr">
                <form onSubmit={myHandelSubmit} name="" method="post" action="" autoComplete="off">
                    <label htmlFor="od_name" className="od_name"/>
                    <input type="text" name="nid" id="od_name" placeholder=" 주문자명"
                           required="" className="frm_input required" size="20" value={ninputs.nid}
                           onChange={subHandleChange}/>
                    <label htmlFor="od_id" className="od_id"/>
                    <input type="text" name="ordernum" id="od_id" placeholder=" 주문번호"
                           required="" className="frm_input required" size="20" value={ninputs.ordernum}
                           onChange={subHandleChange}/>
                    <input type="submit" value="확인" className="btn_submit"/>
                </form>
            </div>
        </div>
    )
}
