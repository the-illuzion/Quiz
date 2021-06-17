var i=0;
const quizData = [
	[{quiz:'OS computer abbreviation usually means?',
		a: 'Order of Significance',
        b:'Open Software',
        c:'Operating System',
        d:'Optical Sensor',
        width:"10%",
		correct: 'c'
	},
	{quiz: 'MOV extension refers usually to what kind of file?',
		a:'Image file',
        b:'Animation/movie file',
        c:'Audio file',
        d:'MS Office document',
		width:"20%",
		correct: 'b'
	},
	{quiz:'MPG extension refers usually to what kind of file?',
		a: '11',
		b: '10',
		c: '9',
		d: '8',
        width:"30%",
		correct: 'c'
	},
	{quiz: "What is part of a database that holds only one type of information?",
		a: 'Report',
		b: 'Field',
		c: 'Record',
		d: 'File',
        width:"40%",
		correct: 'b'
	},
	{quiz: "Who developed Yahoo?",
		a: 'Dennis Ritchie & Ken Thompson',
		b: 'David Filo & Jerry Yang',
		c: 'Vint Cerf & Robert Kah',
		d: 'Steve Case & Jeff Bezos',
        width:"50%",
		correct: 'b'
	},
	{quiz: 'DB computer abbreviation usually means?',
		a: 'Database',
		b: 'Double Byte',
		c: 'Data Block',
		d: 'Driver Boot',
        width:"60%",
		correct: 'a'
    },
	{quiz: "'.INI' extension refers usually to what kind of file?",
		a: 'Image file',
		b: 'System file',
		c: 'Hypertext related file',
		d: 'Image Color Matching Profile file',
        width:"70%",
		correct: 'b'
	},
	{quiz: 'The sampling rate, (how many samples per second are stored) for a CD is?',
		a: '48.4 kHz',
		b: '22,050 Hz',
		c: '44.1 kHz',
		d: '48 kHz',
        width:"80%",
		correct: 'c'
	},
	{quiz: "What is FMD?",
		a: 'Fast-Ethernet Measuring Device',
		b: 'Flashing Media Diode',
		c: 'Fluorescent Multi-Layer Disc',
		d: 'Flash Media Driver',
        width:"90%",
		correct: 'c'
	},
	{quiz: 'Which of these is a documented hoax virus?',
		a: 'McDonalds screensaver',
		b: 'Alien.worm',
		c: 'Merry Xmas',
		d: 'Adolph',
        width:"100%",
		correct: 'a'
	}
],




	[{quiz: 'MS-Word is an example of _____',
		a:'An operating system',
        b:'A processing device',
        c:'Application software',
        d:'Application software',
	    width:"10%",
		correct: 'c'
	},
	{quiz:'National Income estimates in India are prepared by',
		a:'Planning Commission',
        b:'Reserve Bank of India',
        c:'Central statistical organisation',
        d:'Indian statistical Institute',
        width:"20%",
		correct: 'c'
	},
	{quiz: 'The staple food of the Vedic Aryan was',
		a: 'Barley and rice',
        b:'Milk and its products',
        c:'Rice and pulses',
        d:'Vegetables and fruits',
        width:"30%",
		correct: 'b'
		
	},
	{quiz: 'Fathometer is used to measures',
		a: 'Earthquakes',
        b:'Rainfall',
        c:'Ocean depth',
        d:'Sound intensity',
        width:"40%",
		correct: 'c'
	},
	{quiz: 'The working principle of a washing machine is',
		a: 'reverse osmosis',
        b:'diffusion',
        c:'centrifugation',
        d:'dialysis',
        width:"50%",
		correct: 'c'
	},
	{quiz: 'Who is the author of the book "Freedom Behind Bars "',
		a: 'Kiran Bedi',
        b:'Jawaharlal Nehru',
        c:'Nelson Mandela',
        d:'Sheikh Abdullah',
		width:"60%",
		correct: 'a'
	},
	{quiz: 'Which river of India is called Vridha Ganga?',
		a: 'Krishna',
		b:'Godavari',
		c:'Kaveri',
        d:'Narmada',
        width:"70%",
		correct: 'b'
	},
	{quiz: 'Epsom(England) is the place associated with',
		a: 'Snooker',
		b:'Shooting',
		c:'Polo',
		d:'Horse racing',
		width:"80%",
		correct: 'c'
		
	},
	{quiz: 'The blue colour of the clear sky is due to',
		a: 'Diffraction of light',
		b: 'Dispersion of light',
		c: 'Reflection of light',
		d: 'Refraction of light',
        width:"90%",
		correct: 'b'
	},
	{quiz: 'Which foreign country is closest to Andaman Islands',
		a: 'Sri Lanka',
		b:'Indonesia',
		c:'Myanmar',
		d:'Pakistan',
        width:"100%",
		correct: 'c'
	}],

  []



];



//load first quiz

const questions = document.getElementById('question');
answer_bt=document.getElementsByClassName('hello');
answer_rd=document.getElementsByClassName('answer');
const aAnswer = document.getElementById('a_answer');
const bAnswer = document.getElementById('b_answer');
const cAnswer = document.getElementById('c_answer');
const dAnswer = document.getElementById('d_answer');
const que_hd =  document.getElementById('que_hd');
var pg_bar = document.getElementById('pg_bar');
var que_img= document.getElementById('que_img');

let currentQuiz = 0;
var yy;


function quizLoad(){
	document.getElementById('next').disabled=true;
    for(let i=0;i<4;i++){

		answer_rd[i].classList.remove('wrng');
	    answer_rd[i].classList.remove('crct');
	 }
	questions.innerHTML = quizData[yy][currentQuiz].quiz;
	aAnswer.innerHTML = quizData[yy][currentQuiz].a;
	bAnswer.innerHTML = quizData[yy][currentQuiz].b;
	cAnswer.innerHTML = quizData[yy][currentQuiz].c;
	dAnswer.innerHTML = quizData[yy][currentQuiz].d;
	if(quizData[yy][currentQuiz].src!=null){
		document.getElementById("que-img").style.display='block';
	document.getElementById("que-img").src=quizData[yy][currentQuiz].src;
	}
	else{
		document.getElementById("que-img").style.display='none';
	}
    que_hd.innerHTML = currentQuiz+1;
    pg_bar.style.width = quizData[yy][currentQuiz].width;
	};
function nextQuiz(){
	document.getElementById('next').disabled=true;
	currentQuiz++;
	deselect();
	document.getElementById('demo').innerHTML = '';
	if(currentQuiz >= quizData[yy].length){
		//const nextBtn = document.getElementById('next');
		document.getElementById('quiz_page').style.display = "none";
		document.getElementById('quiz-end-screen').style.display = "block";
		document.getElementById('ds_score').innerHTML =
		count*10+"/"+"100";

		} else {
		quizLoad();

		}
};

//submit Answer and check
let count = 00;
function submitAnswer(){
	document.getElementById('next').disabled=false;
	const userAnswer = document.querySelector(('input[type="radio"]:checked')|| {}).value;
	hazard=document.getElementsByClassName("answer");
	hazard2=document.getElementsByClassName("hello");

	 for(let i=0;i<4;i++){
		hazard[i].disabled = true;
		hazard2[i].disabled = true;


	 }

	 for(let i=0;i<4;i++){
		answer_bt[i].classList.remove('hover');
	 }

	console.log(userAnswer);
	if (userAnswer == quizData[yy][currentQuiz].correct){
		document.getElementById('demo').innerHTML = 'Correct!';
		count++;
		console.log(count);
		for(let i=0;i<4;i++){
			answer_rd[i].classList.add('crct');
			answer_rd[i].classList.remove('wrng');
		 }



	} else {
		var up_case = (quizData[yy][currentQuiz].correct).toUpperCase();
		document.getElementById('demo').innerHTML =
		'Incorrect,' + ' ' + up_case + ' ' +
		'is the correct answer';
		for(let i=0;i<4;i++){
			answer_rd[i].classList.remove('crct');
			answer_rd[i].classList.add('wrng');
		 }
		crt_ans=document.getElementById(quizData[yy][currentQuiz].correct);
		console.log(crt_ans);
		//crt_ans.disabled = false;
		crt_ans.checked=true;
		crt_ans.classList.remove('wrng')
		crt_ans.classList.add('crct');
	}
};
//deselect
function deselect(){
	const answerChecked = document.querySelectorAll('.answer');
	for(let i=0; i<4 ; i++){
		answerChecked[i].checked = false;
	}
	for(let i=0;i<4;i++){
		hazard[i].disabled = false;
		hazard2[i].disabled = false;
		answer_rd[i].classList.remove('wrng');
	    answer_rd[i].classList.remove('crct');
	 }

	 for(let i=0;i<4;i++){
		answer_bt[i].classList.add('hover');
	 }

};



function reload(){window.location.reload();}
