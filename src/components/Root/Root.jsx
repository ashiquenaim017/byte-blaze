import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-120px)]">
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;