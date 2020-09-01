'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click',() => {
        const num = ['x','c','g','lo','87','l','r','ytr','asdfg'];
        const randomNum = num[Math.floor(Math.random()*num.length)];
        btn.textContent = randomNum
    });
}