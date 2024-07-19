let arr = [['',''],['',''],['','']];

const circleArr = document.querySelectorAll('.circle');
const msgBox = document.querySelector('.winner');
const msg1 = document.querySelector('.counter1')
const msg2 = document.querySelector('.counter2')

const winner1 = [
    ['R','S'],
    ['P','R'],
    ['S','P']
]
const winner2 = [
    ['S','R'],
    ['R','P'],
    ['P','S']
]
let counter1 = 0;
let counter2 = 0;

const computerTurn = () => {
    const rand = Math.floor(Math.random()*3);
    console.log(rand)
    if(rand == 0) {
        arr[rand][1] = 'R';
    }
    else if(rand == 1) {
        arr[rand][1] = 'P';
    }
    else if(rand == 2) {
        arr[rand][1] = 'S';
    }
}
const checkWinner = () => {
    console.log(arr)
    let pos1,pos2;
    arr.forEach(ar => {
        if(ar[0] != '') {
            pos1 = ar[0];
            return;
        }
    });
    console.log(pos1)
    arr.forEach(ar => {
        if(ar[1] != '') {
            pos2 = ar[1];
            return;
        }
    });
    let flag = false;
    console.log(pos2)
    winner1.forEach((arr, idx) => {
        if(arr[0]==pos1 && arr[1]==pos2) {
            msg1.innerText =`${++counter1}`
            msgBox.innerText = `You Won`;
            msgBox.style.backgroundColor = 'black'
            msgBox.classList.remove('hide')
            flag = true;
        }
    })
    winner2.forEach((arr) => {
        if(arr[0]==pos1 && arr[1]==pos2) {
            msg2.innerText =`${++counter2}`
            msgBox.innerText = `Computer Won`;
            msgBox.style.backgroundColor = 'red'
            msgBox.classList.remove('hide')
            flag = true;
        }
    })
    if(!flag) {
        msgBox.innerText = `Tie`;
        msgBox.classList.remove('hide')
        msgBox.style.backgroundColor = 'green'
    }
}

const clear = () => {
    arr.forEach(ar => {
        ar[0]='';
        ar[1]='';
    });
    flag = false;
}
circleArr.forEach((circle, idx) => {
    circle.addEventListener(('click'), () => {
        if(idx == 0) {
            arr[idx][0] = 'R';
        }
        else if(idx == 1) {
            arr[idx][0] = 'P';
        }
        else {
            arr[idx][0] = 'S';
        }
        computerTurn();
        checkWinner()
        clear()
    })
});



console.log(arr)