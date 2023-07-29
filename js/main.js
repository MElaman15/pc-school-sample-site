const input = document.querySelector('.subscribe input');
const btn = document.querySelector('.subscribe button');

btn.onclick = () => {
    if(input.value != ''){
        location.reload()
    }
}

const menu_wrapper = document.querySelector('.menu__mobile .menu__wrapper');
const close_menu = document.querySelector('.menu__mobile .menu__wrapper .close');
const open_menu = document.querySelector('.open_menu');
const links_pc = document.querySelector('header .links')


close_menu.onclick = () => {
    menu_wrapper.classList.add('none')
}

open_menu.onclick = () => {
    menu_wrapper.classList.remove('none')
}