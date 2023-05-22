//Scroll Top
const scrollBtn = document.querySelector('.isShowBtn');
window.onscroll = () => {
    if (window.scrollY > 700) {
        document.querySelector('.isShowBtn').classList.remove('isShowBtn_hide');
    } else if (window.scrollY > 100) {
        document.querySelector('.isShowBtn').classList.add('isShowBtn_hide');
    };
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    }
};

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

/* Функций кнопок для видео, stop / play */
const btnOk = document.querySelector('.btn-ok');
const btnStop = document.querySelector('.btn-stop');
const wrapperVideo = document.getElementById('video-col');

btnOk.addEventListener('click', function() {
    wrapperVideo.play();
});

btnStop.addEventListener('click', function() {
    wrapperVideo.pause();
});

/* Функций кнопок для видео, stop / play */
const btnOk2 = document.querySelector('.ok2');
const btnStop2 = document.querySelector('.stop2');
const wrapperVideo2 = document.getElementById('video-col2');

btnOk2.addEventListener('click', function() {
    wrapperVideo2.play();
});

btnStop2.addEventListener('click', function() {
    wrapperVideo2.pause();
});

/* Функций кнопок для видео, stop / play */
const btnPlay = document.querySelector('.btn_ok3');
const buttonStop = document.querySelector('.stop3');
const wrapVideo = document.getElementById('video-col3');

btnPlay.addEventListener('click', function() {
    wrapVideo.play();
});

buttonStop.addEventListener('click', function() {
    wrapVideo.pause();
});