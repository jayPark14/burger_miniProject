import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./burger/Navigation";
import Category from "./burger/Category";
import Home from "./burger/Home";
import Best from "./burger/Best";
import Select from "./burger/Select";
import Mypage from "./burger/Mypage";
import NoPage from "./burger/NoPage";
import LoginPage from "./burger/LoginPage";
import Register from "./burger/Register";
import RegTerms from "./burger/RegTerms";

function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path="category" element={<Category/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="best" element={<Best/>}/>
                    <Route path="select" element={<Select/>}/>
                    <Route path="mypage" element={<Mypage/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="regterms" element={<RegTerms/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
                <Route path="/loginpage" element={<LoginPage/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
