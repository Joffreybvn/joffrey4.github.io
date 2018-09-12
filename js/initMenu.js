function initMenu() {
    let frame = window.frames['menu'];
    let pathname = window.location.pathname;
    frame.setMenu(pathname);
}