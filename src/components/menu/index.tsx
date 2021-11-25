import { FC } from "react";
import { props } from "../../type/components/menu";
import { CreateMenu } from "../../utils/components/createMenu";

const Menu: FC<props> = (props) => {

    return (
        <nav className="nav">
            <CreateMenu list={props.menu}/>
        </nav>
    )
}

export default Menu;