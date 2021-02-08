const ques = document.getElementById('ques')
const hint = document.getElementById('hint')
const div = document.getElementsByClassName('Questions')
const div1 = document.getElementsByClassName('options')

const option1 = document.getElementById('opt1')
const option2 = document.getElementById('opt2')
const option3 = document.getElementById('opt3')
const option4 = document.getElementById('opt4')
const submit = document.getElementById('submit')

const option1lb = document.getElementById('opt1lb')
const option2lb = document.getElementById('opt2lb')
const option3lb = document.getElementById('opt3lb')
const option4lb = document.getElementById('opt4lb')


const Questionairre = [
    {
        question: 'Who is the Prime Minister of India in year 2021 ?',
        hint: "Chai wala",
        a : "Rahul Gandhi",
        b : "Arvind Kejriwal",
        c : "Narendra Modi",
        d : "Uddhav Thaakre",
        correct : "c"
    },
    {
        question: 'Who is the owner of reliance ?',
        hint: "Mumbai Indians",
        a : "Ratan Tata",
        b : "Ritesh Agarwal",
        c : "Amit Shah",
        d : "Mukesh Ambani",
        correct : "d"    
    },
    {
        question: 'Which Year is it ?',
        hint: "21st year in 21st century",
        a : "2020",
        b : "2021",
        c : "2019",
        d : "None of the above",
        correct : "b"
    },
    {
        question: 'When is Kushagra\' birthday ?',
        hint: "you should know dammit !",
        a : "25 Nov 1999",
        b : "25 dec 1999",
        c : "24 Nov 2000",
        d : "24 Nov 2000",
        correct : "a"
    },
    {
        question: 'Who is Kushagra\' favourite rapper ?',
        hint: "way too easy",
        a : "Kr$na",
        b : "XXX-Tentacion",
        c : "Emiway Bantai",
        d : "Brodha V",
        correct : "d"
    }
]


let currentQuestion = 0;




loadQuiz()


function loadQuiz() {
    // check if the correct option is chosen
    ques.innerHTML = Questionairre[currentQuestion].question;
    hint.innerHTML = Questionairre[currentQuestion].hint;
    option1lb.innerHTML = Questionairre[currentQuestion].a;
    option2lb.innerHTML = Questionairre[currentQuestion].b;
    option3lb.innerHTML = Questionairre[currentQuestion].c;
    option4lb.innerHTML = Questionairre[currentQuestion].d;
       
}


function getSelected() {
    const r = document.querySelectorAll('.answer')
    let val = undefined
    r.forEach((rsub) => {
        if(rsub.checked) {
            //console.log('hii')
            val =  rsub.id 
            //return rsub.id
        }
    })

    
    return val
}

let score = 0;

function deSelect() {
    const r = document.querySelectorAll('.answer')
    
    r.forEach((rsub) => {
        if(rsub.checked) {
            rsub.checked = false
        }
    })
}

submit.addEventListener('click',() => {
    //console.log(currentQuestion)
    const response = getSelected()
        //console.log(response)
    const temp = document.getElementById(response)
        //console.log(temp.classList)
        //if(response && (temp.name))

    
    
    if(response && (temp.classList[1] === Questionairre[currentQuestion].correct)) {
        score++
        currentQuestion++

        //console.log(currentQuestion)
        //console.log(Questionairre.length)

        deSelect()
        if(currentQuestion < 5)
            loadQuiz()
        
        

        
    } else if(response){
        
        currentQuestion++
        deSelect()
        if(currentQuestion < 5)
            loadQuiz()
        


    } else {
        let newdiv = document.createElement('div')
        let newElement = document.createElement("p")
        newElement.innerText = "choose an option"
        newElement.style.color = 'red'
        //newElement.style.marginRight = "10rem"

        
        newdiv.appendChild(newElement)
        hint.appendChild(newdiv)
        //loadQuiz()
        
        //console.log(newElement)
        //document.body.insertBefore(newElement,div1)
    }

    if( currentQuestion == 5 ) {
        ques.innerHTML = `<h1>Your score is ${score}</h1>`;
        hint.innerHTML = "Thank you for playing!"
        option1.remove()
        option2.remove()
        option3.remove()
        option4.remove()
        option1lb.remove()
        option2lb.remove()
        option3lb.remove()
        option4lb.remove()

    }
    
    
})



