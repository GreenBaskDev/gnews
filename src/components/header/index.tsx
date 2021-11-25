import { FC } from "react";
import Icon from "../../components/Icon";
import Menu from "../../components/menu";
import { menuList } from "../../utils/components/registry";

const Header: FC = () => {

    return (
        <header className="header">
            <div className="header_logo">
                <h1 className="headerLogo__title">Green Basket</h1>
            </div>
            
            <Menu menu={menuList} />

            <div className="header__icons">
                <Icon color="#fff" size={30} icon="instagram" className="socialIcons" />
                <Icon color="#fff" size={30} icon="twitter" className="socialIcons" />
                <Icon color="#fff" size={30} icon="facebook2" className="socialIcons" />
            </div>

        </header>
    )
}

export default Header;