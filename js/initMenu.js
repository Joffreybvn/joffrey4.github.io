function initMenu(callback) {
    //let frame = window.frames['menu'];
    let pathname = window.location.pathname;
    //frame.setMenu(pathname);
    callback(pathname)
}