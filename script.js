var clickMenu = clickNavbar('header__nav-mobile', 'navbar_top');
var clickContact = clickNavbar('header__contact-mobile', 'header__contact-us');

/*Create navbar and logic for mobile*/
function clickNavbar(menuEl, subMenu) {
    var menu = document.getElementsByClassName(menuEl)[0];
    var link = menu.querySelector('a');
    var navbar = document.getElementsByClassName(subMenu)[0];

    /*Create clone navbar*/
    var cloneNavbar = navbar.cloneNode(true);
    cloneNavbar.classList.add('clone-navbar');
    menu.appendChild(cloneNavbar);

    /*Open navbar*/
    link.onclick = function openCloseNavBar() {
        menu.classList.toggle('open');
        cloneNavbar.classList.toggle('open');
    };

    //if we click Not in menu or Not in submenu - menu should be closed
    document.body.addEventListener('click', clickNotOnMenu);

    function clickNotOnMenu(e) {
        if (!(link == e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            cloneNavbar.classList.remove('open');
        }
    }

}
