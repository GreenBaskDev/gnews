import { FC } from "react";
import Icon from "../../components/Icon";
import Menu from "../../components/menu";
import { menuList } from "../../utils/components/registry";
import "./style.scss";

const Header: FC = () => {

    return (
        <header className="header">
            <div className="header_logo">
                Green Basket
            </div>
            
            <Menu menu={menuList} />

            <div className="header__icons">
                <Icon color="#168AAD" size={100} icon="instagram" className="socialIcons" />
                <Icon color="#1DA1F2" size={100} icon="twitter" className="socialIcons" />
                <Icon color="#3b5998" size={100} icon="facebook2" className="socialIcons" />
            </div>

        </header>
    )
}

export default Header;