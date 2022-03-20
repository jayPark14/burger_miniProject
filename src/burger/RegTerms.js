import './RegTerms.css'
const RegTerms = () => {


    return (
        <div className='regterms'>

            {/*<div><input type="checkbox"/>전체 동의</div>*/}
            <section id="terms_box" className="terms_box">
                <div className="terms_box_border">
                    <p className="main_title">
                        회원가입 약관
                        <span onClick="location.href=''">더보기</span>
                    </p>
                    <ul className="terms_con">
                        <li className="terms_list">서비스 이용약관</li>
                    </ul>
                    <div><input type="checkbox"/>회원가입약관의 내용에 동의합니다.</div>

                </div>
            </section>

            <section id="terms_box" className="terms_box">
                <div className="terms_box_border">
                    <p className="main_title">
                        개인정보처리방침 안내
                        <span onClick="location.href=''">더보기</span>
                    </p>
                    <ul className="terms_con">
                        <li className="terms_list">항목 및 보유기간</li>
                    </ul>
                    <div><input type="checkbox"/>개인정보처리방침안내의 내용에 동의합니다.</div>

                </div>
            </section>
            <section className="reg_button">
                <div>
                    <a href="./register"
                       className="reg_button_text">회원가입</a>
                </div>
            </section>





        </div>
    )
}

export default RegTerms;

