// Автоматический слайдер
let changePhoto = 0;

function slideShow() {
    setTimeout(slideShow, 4000);
    const img = document.querySelectorAll('.img-confirm');
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    changePhoto++;
    if (changePhoto > img.length) {
        changePhoto = 1;
    }
    img[changePhoto - 1].style.display = "block";
}
slideShow();


/* Курсор */
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
        const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return

            if (target.closest('a')) { // если курсор наведён на ссылку
                el.classList.add('follow-cursor_active') // элементу добавляем активный класс
            } else { // иначе
                el.classList.remove('follow-cursor_active') // удаляем активный класс
            }

            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        })
    }
    followCursor() // вызываем функцию followCursor
});