// 按鈕Dom
let sendButton = document.querySelector('#sendbutton');
const url="https://script.google.com/macros/s/AKfycbxZLEu3r3WrUGcvb5Ajc05AwUDpNiXKAkRrNo4ldE_1i9v34ktQoUe2DBqRuvM62s12/exec"

function send() { 
    const userName = document.getElementById('userName').value;
    const userGender = document.getElementById('userGender').value;
    const userAge = document.getElementById('userAge').value;
    const userPhone = document.getElementById('userPhone').value;
    const userMail = document.getElementById('userMail').value;
    const userSchool = document.getElementById('userSchool').value;
    const userProgram = document.getElementById('userProgram').value;
    const userCollege = document.getElementById('userCollege').value;
    const userDegree = document.getElementById('userDegree').value;
    const userGrade = document.getElementById('userGrade').value;
    const techtype = document.getElementById('techtype').value;
    const readingtype = document.getElementById('readingtype').value;
    const recommendbook = document.getElementById('recommendbook').value;

    axios.post(url,
        {data: {
            "name": userName,
            "gender": userGender,
            "age": userAge,
            "phone":userPhone,
            "mail": userMail,
            "school":userSchool,
            "program":userProgram,
            "college":userCollege,
            "degree":userDegree,
            "grade":userGrade,
            "techtype":techtype,
            "readingtype":readingtype,
            "recommendbook":recommendbook,
        }})
        .then(function(res){
            alert(`推薦成功!!!`)
        });
};

sendButton.addEventListener('click',send);