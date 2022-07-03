let block = document.querySelector('.container');
let audio = document.querySelector('.audio');
let volume = document.querySelector('.volume');
let mute = document.querySelector('.mute');
let congrats = document.querySelector('.congrats');

volume.addEventListener('click', () => {
    mute.style.display = 'inline-block';
    volume.style.display = 'none';
    audio.muted = true;
});
mute.addEventListener('click', () => {
    mute.style.display = 'none';
    volume.style.display = 'inline-block';
    audio.muted = false;
});

const grid = document.querySelector('.grid');
let count = 0;
let x = '';
let y = '.';
let arrGrid = grid.childNodes;
let arr = [];

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const card9 = document.getElementById('card9');
const card10 = document.getElementById('card10');
const card11 = document.getElementById('card11');
const card12 = document.getElementById('card12');

let arrCard = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
];
const backCard = document.getElementsByClassName('back');

for (const o of backCard) {
    o.addEventListener('click', transform);
}

function randomBackground() {
    let arr = arrCard;
    let x = Math.floor(Math.random() * arr.length);
    let first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    let second = arr.splice(x, 1);
    let firstCouple = [first[0], second[0]];
    firstCouple.forEach((element) => {
        element.innerHTML = 1;
        element.style.background = 'url(./1.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });

    x = Math.floor(Math.random() * arr.length);
    first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    second = arr.splice(x, 1);
    let secondCouple = [first[0], second[0]];
    secondCouple.forEach((element) => {
        element.innerHTML = 2;
        element.style.background = 'url(./7.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });

    x = Math.floor(Math.random() * arr.length);
    first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    second = arr.splice(x, 1);
    let thirdCouple = [first[0], second[0]];
    thirdCouple.forEach((element) => {
        element.innerHTML = 3;
        element.style.background = 'url(./3.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });

    x = Math.floor(Math.random() * arr.length);
    first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    second = arr.splice(x, 1);
    let fourthCouple = [first[0], second[0]];
    fourthCouple.forEach((element) => {
        element.innerHTML = 4;
        element.style.background = 'url(./4.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });

    x = Math.floor(Math.random() * arr.length);
    first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    second = arr.splice(x, 1);
    let fifthCouple = [first[0], second[0]];
    fifthCouple.forEach((element) => {
        element.innerHTML = 5;
        element.style.background = 'url(./6.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });

    x = Math.floor(Math.random() * arr.length);
    first = arr.splice(x, 1);
    x = Math.floor(Math.random() * arr.length);
    second = arr.splice(x, 1);
    let sixthCouple = [first[0], second[0]];
    sixthCouple.forEach((element) => {
        element.innerHTML = 6;
        element.style.background = 'url(./8.png)';
        element.style.backgroundRepeat = 'no-repeat';
    });
    arrCard = [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
        card8,
        card9,
        card10,
        card11,
        card12,
    ];
}
randomBackground();

function transform(el) {
    audio.play();
    count++;
    if (!y) {
        y = el.target.previousElementSibling.innerHTML;
        arr.push(el.target);
        arr.push(el.target.previousElementSibling);
    }
    if (!x) {
        x = el.target.previousElementSibling.innerHTML;
        y = '';
        arr.push(el.target);
        arr.push(el.target.previousElementSibling);
    }
    if (x === y) {
        console.log('win');
        setTimeout(() => {
            arr[0].style.visibility = 'collapse';
            arr[1].style.visibility = 'collapse';
            arr[2].style.visibility = 'collapse';
            arr[3].style.visibility = 'collapse';
            setTimeout(() => {
                congratulations();
            }, 500);
        }, 200);
    }

    if (count === 2) {
        setTimeout(() => {
            count = 0;
            arr = [];
        }, 500);
        for (const o of backCard) {
            o.removeEventListener('click', transform);
        }
        setTimeout(() => {
            for (const o of backCard) {
                o.style.transform = 'rotateY(0deg)';
            }
            arrCard.forEach((element) => {
                element.style.transform = 'rotateY(180deg)';
            });
            for (const o of backCard) {
                o.addEventListener('click', transform);
            }
        }, 1500);

        x = '';
        y = '.';
    }

    el.target.style.transform = 'rotateY(-180deg)';
    el.target.previousElementSibling.style.transform = 'rotateY(0deg)';
}

function congratulations() {
    if (
        arrCard[0].style.visibility === 'collapse' &&
        arrCard[1].style.visibility === 'collapse' &&
        arrCard[2].style.visibility === 'collapse' &&
        arrCard[3].style.visibility === 'collapse' &&
        arrCard[4].style.visibility === 'collapse' &&
        arrCard[5].style.visibility === 'collapse' &&
        arrCard[6].style.visibility === 'collapse' &&
        arrCard[7].style.visibility === 'collapse' &&
        arrCard[8].style.visibility === 'collapse' &&
        arrCard[9].style.visibility === 'collapse' &&
        arrCard[10].style.visibility === 'collapse' &&
        arrCard[11].style.visibility === 'collapse'
    ) {
        setTimeout(() => {
            congrats.innerHTML = 'C';
            setTimeout(() => {
                congrats.innerHTML += 'o';
                setTimeout(() => {
                    congrats.innerHTML += 'n';
                    setTimeout(() => {
                        congrats.innerHTML += 'g';
                        setTimeout(() => {
                            congrats.innerHTML += 'r';
                            setTimeout(() => {
                                congrats.innerHTML += 'a';
                                setTimeout(() => {
                                    congrats.innerHTML += 't';
                                    setTimeout(() => {
                                        congrats.innerHTML += 's';
                                        setTimeout(() => {
                                            congrats.innerHTML += '!';
                                        }, 150);
                                    }, 150);
                                }, 150);
                            }, 150);
                        }, 150);
                    }, 150);
                }, 150);
            }, 150);
        }, 300);

        setTimeout(() => {
            congrats.innerHTML = '';
            setTimeout(() => {
                randomBackground();
                arrCard.forEach((element) => {
                    element.style.visibility = 'visible';
                });

                for (let i = 0; i < backCard.length; i++) {
                    setInterval(() => {
                        backCard[i].style.visibility = 'visible';
                    }, `${i}00`);
                }
            }, 500);
        }, 2500);
    }
}
congratulations();
