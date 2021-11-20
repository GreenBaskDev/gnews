import { menu } from "../../type/components/menu";

export const createMenu = (list: menu[]) => {
  console.log(list)
    list.map((menu, idx) => {
        console.log(menu);
        if (menu.sub.length > 0) createMenu(menu.sub); 
    })

    return null;

}