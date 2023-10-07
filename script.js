
async function getData() {
    
    let Data = await fetch('MinTheinKha.LatHtaukBayDin.json');
    let data = await Data.json();

    getQuestion(data);
    getQuestionNo(data);
    getAnswer(data);
    function getQuestion(data){
        
        for (let i = 0; i < data.questions.length; i++) { 
            document.querySelector('.question-body').innerHTML +=
                `<div class="question">
                    <p class="questionNo">${data.questions[i].questionNo}</p>
                    <p class="questionText">${data.questions[i].questionName}</p>
                </div>`;
            
        }

        let clickedQuestion = document.querySelectorAll('.question');
        
        clickedQuestion.forEach((click, i) => {
            click.addEventListener('click', () => {
                
                localStorage.setItem("choseQuestion" , data.questions[i].questionNo)
                // console.log(choseQuestion);
                document.querySelector('.question-body').style.display = "none";
                document.querySelector('.number-body').style.display = 'flex';
                document.getElementById('footer').style.display = 'none';
            })
        })
    
    }
    
    function getQuestionNo(data) { 
        for (var i = 0; i < data.numberList.length; i++) { 
            
            document.querySelector('.number-body').innerHTML +=
                `<div class="number">
                    ${data.numberList[i]}
                </div>`
        }

        let clickedNum = document.querySelectorAll('.number');

        clickedNum.forEach((click, i) => {
            click.addEventListener('click', () => {
                
                switch (data.numberList[i]) { 
                    case '၁': data.numberList = 1; break;
                    case '၂':data.numberList =  2; break;
                    case '၃':data.numberList =  3; break;
                    case '၄': data.numberList = 4; break;
                    case '၅': data.numberList = 5; break;
                    case '၆': data.numberList = 6; break;
                    case '၇': data.numberList = 7; break;
                    case '၈': data.numberList = 8; break;
                    case '၉': data.numberList = 9; break;
                    case '၁၀': data.numberList = 10; break;
                }

                localStorage.setItem('choseNumber', data.numberList);
                location.reload();
                // console.log(choseNumber);
                // document.querySelector('.question-body').style.display = 'none';
            });
        })

    }

    function getAnswer(data) {
        for (var i = 0; i < data.answers.length; i++){

            // console.log(i);
        
            var answer = data.answers[i];
            // var answer1 = answer.filter(d => d.questionNo == choseQuestion);
            
            if (answer.questionNo == localStorage.getItem('choseQuestion')  && answer.answerNo == localStorage.getItem('choseNumber')) {
                
                document.querySelector('.answer').innerHTML = ` "${answer.answerResult}"`;
                localStorage.removeItem('choseQuestion');
                localStorage.removeItem('choseNumber');
            }
            

        }
        
    } 
     
}

window.onload;
getData();
    