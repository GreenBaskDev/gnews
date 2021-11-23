export type menu = {
    main: string,
    path: string,
    sub: menu[],
}

export type props = {
    menu: menu[],
}