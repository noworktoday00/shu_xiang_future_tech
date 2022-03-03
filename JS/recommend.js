// 按鈕Dom
let sendButton = document.querySelector('#sendbutton');


function send() { 
    const userName = document.querySelector('#userName').Value;
    const gender = document.querySelector('#gender').Value;
    const age = document.querySelector('#age').Value;
    const phone = document.querySelector('#phone').Value;
    const mail = document.querySelector('#mail').Value;
    const school = document.querySelector('#school').Value;
    const program = document.querySelector('#program').Value;
    const college = document.querySelector('#college').Value;
    const degree = document.querySelector('#degree').Value;
    const grade = document.querySelector('#grade').Value;
    const techtype = document.querySelector('#techtype').Value;
    const readingtype = document.querySelector('#readingtype').Value;
    const recommendbook = document.querySelector('#recommendbook').Value;
    console.log('送出按鈕');
};

sendButton.addEventListener('click',send);