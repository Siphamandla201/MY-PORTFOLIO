function openNav() {
    let navBar = document.querySelector('nav');
    let openBtn = document.querySelector('.openBtn');
    if (!navBar.classList.contains('open')) {
        navBar.classList.add('open');
        navBar.classList.remove('close');
        openBtn.style.display = 'none';
    } else {
        navBar.classList.remove('open');
        openBtn.style.display = 'block';
    }
}

function closeNav() {
    let navBar = document.querySelector('nav');
    let openBtn = document.querySelector('.openBtn');
    if (openBtn.style.display === 'none') {
        navBar.classList.add('close');
        navBar.classList.remove('open');
        openBtn.style.display = 'block';
    } else {
        openBtn.style.display = 'none';
    }
}

function modalDisplay(className) {
    let element = document.querySelector(className);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function showInfo() {
    modalDisplay('.more-info');
}

function showInfo1() {
    modalDisplay('.more-1');
}

function showInfo2() {
    modalDisplay('.more-2');
}

function closeInfo() {
    let infoElements = document.querySelectorAll('.more-info, .more-1, .more-2');
    infoElements.forEach(info => {
        if (info.style.display === 'block') {
            info.style.display = 'none';
        } else {
            info.style.display = 'block';
        }
    });
}