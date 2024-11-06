// BỘ ĐẾM
const countdownDate = new Date('2024-01-20T18:20:00').getTime();
const notiTitle = document.querySelector('.notiTitle > h1');

function updateTimer() {
    const now = new Date().getTime();
    const distance = now - countdownDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.querySelector(".settingsPopup").classList.remove("show");

}

updateTimer();
setInterval(updateTimer, 1000);

// HIỆU ỨNG CHUỘT
var trailArr = [.5, 2];
var mouseMoveHandler;

function trailAnimation(e, i, callbackFn) {
    var elem = document.createElement('div');
    elem = styleSparkle(elem, e, i);

    if (typeof callbackFn == 'function') {
        elem = callbackFn(elem);
    }

    elem.classList.add("sparkle");
    document.body.appendChild(elem);

    // Thời gian xóa sparkle cố định
    window.setTimeout(function () {
        document.body.removeChild(elem);
    }, 200); // 200ms
}

function styleSparkle(elem, e, i) {
    let j = (1 - i) * 100;
    let size = Math.ceil(Math.random() * 10 * i) + 'px'; // Giảm kích thước để thấy rõ hơn

    elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';

    elem.style.width = size;
    elem.style.height = size;
    elem.style.borderRadius = '50%'; // Sử dụng 50% để tạo hình tròn
    return elem;
}

var noti = document.querySelector('.noti');
var notiContent = document.querySelector('.notiContent');
var input = document.querySelector("input");

const btnClose = document.querySelector('.btnClose');

const toggleRainButton = document.getElementById('toggleRain');
let rainInterval;
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    let mouseMoveHandler;

    function handleToggle() {
        if (toggleButton.checked) {
            noti.style.display = "none";
            mouseMoveHandler = function (e) {
                trailArr.forEach((i) => {
                    trailAnimation(e, i, (elem) => {
                        elem.style.animation = "fallingsparkles 1s forwards";
                        return elem;
                    });
                });
            };
            window.addEventListener('mousemove', mouseMoveHandler, false);
        } else {
            noti.style.display = "block";
            notiTitle.innerHTML= "XIN PHÉP THÔNG BÁO"
            notiContent.innerHTML = "HIỆU ỨNG CON CHUỘT BỊ TRÁI TYM DÍ THEO NHÌN ĐẸP VÃI CỨT ĐÃ TẮT :((((, LOAD LẠI TRANG ĐỂ BẬT HOẶC NHẤN SHIFT + M";
            window.removeEventListener('mousemove', mouseMoveHandler, false);
        }
    }
    
    toggleButton.addEventListener('change', handleToggle);
    handleToggle();
    
    document.addEventListener('keydown', (event) => {
        if (event.shiftKey && event.key === 'M') {
            toggleButton.checked = !toggleButton.checked;
            toggleButton.dispatchEvent(new Event('change'));
        }
    });
    
});
btnClose.addEventListener("click", () => {
    noti.style.display = "none";
});


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('sparkle');
    
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animation = 'fall 3s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove(); // Removes heart after animation completes
    }, 3000); // Matches the animation duration
}

function startRain() {
    if (!rainInterval) {
        rainInterval = setInterval(createHeart, 250); // Creates a new heart every 500ms
    }
}

function stopRain() {
    clearInterval(rainInterval);
    rainInterval = null;
}

toggleRainButton.addEventListener('change', function () {
    if (this.checked) {
        notiTitle.innerHTML= "XIN PHÉP THÔNG BÁO"
        noti.style.display = "block";
        notiContent.innerHTML = "MÁ NÓ TÌNH:)))"
        startRain();
    } else {
        stopRain();
    }
})

const loveimg = document.querySelector('#love-img');
const ourStories = document.querySelector('.title h1');
const CD = document.querySelector('.countdown');
const settings = document.querySelector('.settings');
const settingsPopup = document.querySelector('.settingsPopup');
const EPc = document.querySelector('.ep-content');
const cEP = document.querySelectorAll('#ep-title');
const toggleFontButton = document.querySelector('#toggleFont')

toggleFontButton.addEventListener("change", function(){
    if (this.checked) {
        EPc.classList.add('fontChange'); // Apply the font style to all content within EPc
    } else {
        EPc.classList.remove('fontChange'); // Remove the font style
    }
});
cEP[0].addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
    EPc.style = "display: block;"
    loveimg.style = "display: none;"
    CD.style = "display: none;"
    EPc.innerHTML = "NỘI DUNG EP 1 ĐAYYYYYYYYYYYYYYYYYYYYYYY"
});
cEP[1].addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
    EPc.style = "display: block;"
    EPc.innerHTML = "NỘI DUNG EP 2 ĐAYYYYYYYYYYYYYYYYYYYYYYY"
});
cEP[2].addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
    EPc.style = "display: block;"
    EPc.innerHTML = "NỘI DUNG EP 3 ĐAYYYYYYYYYYYYYYYYYYYYYYY"
});

ourStories.addEventListener("click", () => {
    loveimg.style = "display: block;"
    CD.style = "display: block;"
    EPc.style = "display: none;"
})

function Togglesettings() {
    document.querySelector(".settingsPopup").classList.toggle("show");
    document.getElementById("sidebar").classList.toggle("active");
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelector(".settingsPopup").classList.remove("show");
        }
    });

}
