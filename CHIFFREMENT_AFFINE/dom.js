const open_button = document.getElementsByClassName("menu");
const close_button = document.getElementsByClassName("close");
const navigation = document.getElementsByClassName("navigation");
const modal = document.getElementsByClassName("modal");

const closeNav = () => {
    console.log(navigation[0].style);
    navigation[0].style.display = "none";
    modal[0].style.opacity = "0.7";
    setTimeout(() => {}, 500)
    modal[0].style.opacity = "0.4";
    setTimeout(() => {}, 500)
    modal[0].style.opacity = "0.1";
    modal[0].style.display = "none";
}

const openNav = () => {
    console.log(navigation[0].style);
    navigation[0].style.display = "flex";
    modal[0].style.opacity = "0.1";
    setTimeout(() => {}, 500)
    modal[0].style.opacity = "0.7";
    setTimeout(() => {}, 500)
    modal[0].style.opacity = "1";
    modal[0].style.display = "block";
}