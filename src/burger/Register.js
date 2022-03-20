import {useState} from "react";
import './Register.css';

function Register() {

    const [inputs, setInputs] = useState({
        id: "",
        password: "",
        pass_chk: "",
        email: "",
        name: ""
    });

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit =(event) => {
        console.log(inputs);
        event.preventDefault();
        if (inputs.id == "") {
            alert("아이디를 입력하세요");
            return;
        } else if (inputs.password == "") {
            alert("비밀번호를 입력하세요");
            return;
        } else if (inputs.pass_chk == "") {
            alert("비밀번호를 다시한번 입력하세요");
            return;
        } else if (inputs.email == "") {
            alert("이메일을 입력하세요");
            return;
        } else if (inputs.name == "") {
            alert("이름을 입력하세요");
            return;
        }
        console.log(inputs);
        fetch("http://localhost:8090/register", {
            method: "post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            // body data type must match "Content-Type" header
            //JSON.stringify()로 javascript inputs 객체를 JSON 문자열로 바꿔준다.
            //{id: 'json', password: '1234'}에서 {'id':'json','password:'1234'}같이
            body: JSON.stringify(inputs)
        }).then(function(response){
            console.log(response)
            if(!response.ok) throw new Error;
            // response.json() 메서드를 호출하면 JSON데이터를 javascript 객체로 변환한다.
            return response.json();
        }).then(function(data){
            // data에는 javascript 객체가 들어있어야 한다.
            console.log(data);
            // string타입 "1" JSON 데이터를 받아와서 response.json()으로 변경시 숫자 1로 변환되는걸 확인
            // 즉, 아래 data===1이 data==="1"같이 사용하면 작동x
            if(data === 1) {
                alert("회원가입이 완료되었습니다.");
                //페이지 리다이렉션 (바닐라js)
                window.location.href = './home';
            }
        }).catch(function(error){
            console.log(error);
            alert("회원가입 실패");
        })
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





    return (
        <div className="register">

            <form action={'./home'} onSubmit={handleSubmit}>

                <div className="">
                    <input type="text" className="reg_form" name="id" placeholder="아이디" value={inputs.id || ""}
                           onChange={handleChange}/><br/>
                </div>

                <div className="">
                    <input type={passwordType.type} className="reg_form" name="password" placeholder="비밀번호"
                           value={inputs.password || ""} onChange={handleChange}/><br/>
                </div>
                <div className="">
                    <input type={passwordType.type} className="reg_form" name="pass_chk" placeholder="비밀번호 확인"
                           value={inputs.pass_chk || ""} onChange={handleChange}/>
                </div>
                <span onClick={handlePasswordType}>
            	{passwordType.visible ? <div><input type="checkbox"/>비밀번호 보이는 중</div> :
                    <div><input type="checkbox"/>비밀번호 보이기</div>}
            </span>
                <div className="reg_mail">
                    <label htmlFor="reg_mail" className="reg_label">이메일</label><br/>
                    <input type="text" className="reg_form" id="reg_mail" name="email" placeholder="이메일을 입력해주세요"
                           value={inputs.email || ""} onChange={handleChange}/>
                </div>
                <div className="reg_name">
                    <label htmlFor="reg_name" className="reg_label">이름</label><br/>
                    <input type="text" className="reg_form" id="reg_name" name="name" placeholder="이름을 입력해주세요"
                           value={inputs.name || ""} onChange={handleChange}/><br/>
                </div>


                <div className="reg_box">
                    <input type="submit" className="reg_reg" value='가입하기'/>
                </div>
            </form>
        </div>
    )
}

export default Register;