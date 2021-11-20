import { FC } from "react";
import Menu from "../../components/menu";
import { menuList } from "../../utils/components/registry";
import "./style.scss";

const Landing: FC = () => {

    return (
        <header className="header">
            <div className="header_logo">
                Green Basket
            </div>
            
            <Menu menu={menuList} />
        </header>
    )
}

export default Landing;