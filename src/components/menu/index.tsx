import { FC } from "react";
import { props } from "../../type/components/menu";
import { createMenu } from "../../utils/components/menu";
import "./style.scss";

const Menu: FC<props> = (props) => {

    return (
        <nav className="nav">
            <ul>
                {createMenu(props.menu)}
            </ul>
        </nav>
    )
}

export default Menu;