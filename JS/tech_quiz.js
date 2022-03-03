const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitButton');

const myQuestions = [
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/stock-market-graph-picture-id491280720?k=20&m=491280720&s=612x612&w=0&h=i7ipMX-uK2H9wA1y7_Z53xYqKzIKdhLTQmQkOjBTjfU=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/blue-landscape-of-glowing-particles-picture-id1287065311?b=1&k=20&m=1287065311&s=170667a&w=0&h=04F0a32sm82f12MMeluipyUFkW562H6sCEEmAmGzPwo=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393?b=1&k=20&m=1320950393&s=170667a&w=0&h=JH6sLTsrvPZh5YrTrSSFIMvcG9sT3lpXqFYfI-RUjJw=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/cloud-computing-data-center-server-rack-connection-in-neural-network-picture-id1310129219?b=1&k=20&m=1310129219&s=170667a&w=0&h=poqLA9iCzHMQ_apSbzmHmlpc_RZLyC3bipPSNtXbkFs=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/data-center-female-it-specialist-using-laptop-server-farm-cloud-and-picture-id1336250828?b=1&k=20&m=1336250828&s=170667a&w=0&h=OKVbl760JiwHLNSQDrUGWfnJ8W6qLsJoW5FNItG0eKM=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/cloud-vs-edge-vector-modern-technology-picture-id1331903775?b=1&k=20&m=1331903775&s=170667a&w=0&h=psjYyQPr3oXRvcEVu6XoTg-2T5XDgtGOa2QiMHxzZmY=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/man-standing-at-the-edge-of-a-cliff-using-laptop-picture-id846006728?k=20&m=846006728&s=612x612&w=0&h=Sen8qnFsX-Y0wSkJg9BSBSBQbn7ypsab58jK8MPfFc8=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/modern-city-with-smart-5g-picture-id1169517502?k=20&m=1169517502&s=612x612&w=0&h=VgAPhyjSAFpMRvkgK_MFsX-0B3vKKON1Lq-_25aLhAg=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/wireless-communication-network-in-big-city-concept-iot-ict-picture-id1024552520?k=20&m=1024552520&s=612x612&w=0&h=L-AWL0Zmo7jYU42aaKaQdVTvJwkm2yxqBe5Mozr59wo=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/packages-are-transported-in-hightech-settingsonline-shoppingconcept-picture-id984835220?k=20&m=984835220&s=612x612&w=0&h=Af3hhBHE2rx-ws16iBvjwDqBN1gf1pqbjsY6kw9rTic=',
    },
    {
    question: "Who is the strongest?",
    answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously",
    d: "???",
    e: "???",
    f: "",
    },
    imgUrl:'https://media.istockphoto.com/photos/pharma-logistician-using-iot-based-on-blockchain-picture-id997784670?k=20&m=997784670&s=612x612&w=0&h=w-T5OywbaO5J9pw9-tCXGRhPA0kKz1OKYMVUlSEfcUo=',
    },
    ];

    let anwerCountData = {
        aI:'',
        bigData:'',
        blockChain:'',
        cloudComputing:'',
        edgeComputing:'',
        fiveG:''
    };

function buildQuiz(){
    let str='';
    myQuestions.forEach(function(item,index){
        str += `
        <div class="card mb-3">
            <img src="${item.imgUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="mt-3">${index+1}. ${item.question}</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault1" value="1">
                    <label class="form-check-label" for="flexRadioDefault1">
                    ${item.answers.a}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault2" value="2">
                    <label class="form-check-label" for="flexRadioDefault2">
                    ${item.answers.b}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault1" value="3">
                    <label class="form-check-label" for="flexRadioDefault1">
                    ${item.answers.c}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault2" value="4">
                    <label class="form-check-label" for="flexRadioDefault2">
                    ${item.answers.d}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault1" value="5">
                    <label class="form-check-label" for="flexRadioDefault1">
                    ${item.answers.e}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${index}" id="flexRadioDefault2" value="6">
                    <label class="form-check-label" for="flexRadioDefault2">
                    ${item.answers.f}
                    </label>
                </div>
            </div>
        </div>`;
    });
    quizContainer.innerHTML = str;
};

function answerCount(){
    
}

buildQuiz();


submitButton.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(submitButton);
});