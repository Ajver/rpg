
const getElementHeight = elementName => {
    return document.querySelector(elementName).clientHeight;
}

const getTopBarHeight = () => {
    return getElementHeight('.top-bar');
}

const scrollToSection = (sectionName, time) => {
    $.scrollTo($(sectionName).offset().top - getTopBarHeight(), time);
}

document.querySelector('#sword').addEventListener('click', () => {
    scrollToSection('main', 500);
});