// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const testResult = document.getElementById('testresult')
const myQuestions = [
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/cloud-vs-edge-vector-modern-technology-picture-id1331903775?b=1&k=20&m=1331903775&s=170667a&w=0&h=psjYyQPr3oXRvcEVu6XoTg-2T5XDgtGOa2QiMHxzZmY='
    },
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/man-standing-at-the-edge-of-a-cliff-using-laptop-picture-id846006728?k=20&m=846006728&s=612x612&w=0&h=Sen8qnFsX-Y0wSkJg9BSBSBQbn7ypsab58jK8MPfFc8='
    },
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/modern-city-with-smart-5g-picture-id1169517502?k=20&m=1169517502&s=612x612&w=0&h=VgAPhyjSAFpMRvkgK_MFsX-0B3vKKON1Lq-_25aLhAg='
    },
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/wireless-communication-network-in-big-city-concept-iot-ict-picture-id1024552520?k=20&m=1024552520&s=612x612&w=0&h=L-AWL0Zmo7jYU42aaKaQdVTvJwkm2yxqBe5Mozr59wo=',
    },
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/packages-are-transported-in-hightech-settingsonline-shoppingconcept-picture-id984835220?k=20&m=984835220&s=612x612&w=0&h=Af3hhBHE2rx-ws16iBvjwDqBN1gf1pqbjsY6kw9rTic=',
    },
    {
        question: "雖然好萊塢的電影和科幻小說，將 AI 描繪成接管世界的仿人類機器人，但 AI 技術目前的發展並沒有那麼厲害，或者說並沒有那麼聰明。AI 技術演進到現在，反而為所有產業帶來了許多專屬效益。",
        answers: {
            a: "AI 應用程式可提供個人化的醫療和 X 光判讀。個人健康照護助理可以扮演人生教練的角色，提醒您服藥、運動或吃得更健康。",
            b: "AI 提供虛擬購物的功能，可給予個人化的建議，並且和消費者討論購買選項。庫存管理和站點配置技術，也可透過 AI 改善。",
            c: "AI 可以分析從互聯設備串流傳來的工廠物聯網資料，運用循環式網路來預測預期的負載和需求；循環式網路是一種特定的深度學習網路，搭配序列資料使用。",
            d: "AI 可用來擷取賽事現場的影像，並提供報告給教練，建議如何更理想地規劃比賽，包括配置最佳的場上位置與策略。",
            e: "AI 能透過影像辨識技術，增強車輛辨識、號誌管理、交通安全管理等資訊整合。目前，台灣交通的人工智慧應用，已發展到自駕車、車流計算、路況安全預警、路網優化等領域。",
            f: "生活中，常見智慧音箱及手機AI助理運用的語音辨識功能；Netflix、YouTube為你推薦的影音演算法；AI客服辨識客戶想法，提出個人化回覆⋯⋯AI人工智慧應用早已無所不在，持續為你改善生活品質。"
        },
        imgUrl:'https://media.istockphoto.com/photos/pharma-logistician-using-iot-based-on-blockchain-picture-id997784670?k=20&m=997784670&s=612x612&w=0&h=w-T5OywbaO5J9pw9-tCXGRhPA0kKz1OKYMVUlSEfcUo=',
    },
];
let answerData = {
    aI: 0,
    bigData: 0,
    blockChain: 0,
    cloudComputing: 0,
    edgeComputing: 0,
    fiveG: 0,
};
// Functions
function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide row">
                <div><p class="text-center">${questionNumber+1}/${myQuestions.length}</p></div>
                <div class="question h4 mb-3"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === "a") {
            answerData.aI += 1;
        }else if (userAnswer === "b") {
            answerData.bigData += 1;
        }else if (userAnswer === "c") {
            answerData.blockChain += 1;
        }else if (userAnswer === "d") {
            answerData.cloudComputing += 1;
        }else if (userAnswer === "e") {
            answerData.edgeComputing += 1;
        }else if (userAnswer === "f") {
            answerData.fiveG += 1;
        }
    });
    console.log(answerData)
    // show number of correct answers out of total
    let big = Object.values(answerData).sort((a,b)=>{return a-b}).slice(-1)[0]
    let answerResult= []
    Object.keys(answerData).forEach((item)=>{
    if(answerData[item] === big) {
        answerResult.push(item)
    }
    });

    if(answerResult[0]=== "aI"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是人工智慧哦</h2>
        <img class="img-fluid" src="./Picture/picture/AI.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
    else if(answerResult[0]=== "bigData"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是大數據哦</h2>
        <img class="img-fluid" src="./Picture/picture/大數據.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
    else if(answerResult[0]=== "blockChain"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是區塊鏈哦</h2>
        <img class="img-fluid" src="./Picture/picture/區塊鏈.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
    else if(answerResult[0]=== "cloudComputing"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是雲計算哦</h2>
        <img class="img-fluid" src="./Picture/picture/雲計算.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
    else if(answerResult[0]=== "edgeComputing"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是邊緣計算哦</h2>
        <img class="img-fluid" src="./Picture/picture/邊緣計算-8.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
    else if(answerResult[0]=== "fiveG"){
        let str = "";
        str+=`
        <h2 class="text-center">您的本命科技是5G應用哦</h2>
        <img class="img-fluid" src="./Picture/picture/5G.png" alt="">
        <p>人工智慧可以定義為模仿人類與人類思維相關的認知功能的機器或計算機，如學習和解決問題。人工智慧是計算機科學的一個分支，它感知其環境並採取行動，最大限度地提高其成功機會。</p>
        `
        testResult.innerHTML = str;
    }
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Kick things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);