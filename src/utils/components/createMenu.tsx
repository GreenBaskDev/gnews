import { FC } from "react";
import CustomLink from "../../components/link";
import { menu } from "../../type/components/menu";

type props = {
  list: menu[];
}

export const CreateMenu:FC<props> = (props) => {

  const CreateMenu = (menuList: menu[]) => {

    return menuList.map((menu) => {
      if (menu.sub.length > 0 ){
        return ( 
          <li className="nav__item" key={menu.main}>
            <CustomLink to={menu.path}>{menu.main}</CustomLink>
            <ul className="nav__wrapper nav__subWrapper" key={menu.main}>{CreateMenu(menu.sub)}</ul>
          </li>
        )
      } else {
        return <li className="nav__item" key={menu.main}><CustomLink to={menu.path}>{menu.main}</CustomLink></li>
      }
    })

  }

    return (
      <ul className="nav__wrapper nav__wrapper--row">{CreateMenu(props.list)}</ul>
    )

}