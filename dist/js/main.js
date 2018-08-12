const container = document.createElement('div');
const infoModal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-body');
const modalClose = document.querySelector('.closeBtn');
container.classList.add('container');
document.querySelector('.content').appendChild(container);

// const script = document.createElement("script");
// script.src = 'https://jobs.github.com/positions.json?&callback=jsonp'//"https://jobs.github.com/positions.json?description=LANG&callback=jsonp";
// script.classList.add('api');
// document.querySelector('body').appendChild(script);

const allJobsBtn = document.querySelector('.allJobs'); const javaBtn = document.querySelector('.java'); const pythonBtn = document.querySelector('.python'); 
const phpBtn = document.querySelector('.php'); const javaScriptBtn = document.querySelector('.javaScript'); const cppBtn = document.querySelector('.cpp');
const dotNetBtn = document.querySelector('.dotNet'); const railsBtn = document.querySelector('.rails'); const scalaBtn = document.querySelector('.scala');
const androidBtn = document.querySelector('.android'); const iosBtn = document.querySelector('.ios');

function jsonp(jobs) {

	var infoIndex = [];
	var urlIndex = [];

	jobs.forEach(job => {
		//create card and append to container
		card = document.createElement('div');
		card.classList.add('card');
		container.appendChild(card);

		//create a wrapper and append to card
		cardWrapper = document.createElement('a')
		cardWrapper.href = '#';
		cardWrapper.classList.add('cardWrapper');
		card.appendChild(cardWrapper);

		//create inner card and append to wrapper
		innerCard = document.createElement('div');
		innerCard.classList.add('innerCard');
		cardWrapper.appendChild(innerCard);

		//create img and append to innerCard
		cardImg = document.createElement('img');
		cardImg.alt = "Company Logo";

		job.company_logo !== null ? cardImg.src = job.company_logo : cardImg.src = 'img/logoPlaceholder.jpg';
		innerCard.appendChild(cardImg);

		//create card header and append to innerCard
		jobTitle = document.createElement('h3');

		if (job.title.length > 36) {

			let title = job.title.slice(0,34);
			title += '...'
			jobTitle.textContent = title;
		} else {
			jobTitle.textContent = job.title;
		}
		innerCard.appendChild(jobTitle);


		//create info div and append to innerCard
		cardInfo = document.createElement('div');
		cardInfo.classList.add('info');
		innerCard.appendChild(cardInfo);

		//create h4s and append to info div
		jobCompany = document.createElement('h4');
		jobLocation = document.createElement('h4');
		jobCompany.textContent = job.company;
		jobLocation.textContent = job.location;
		cardInfo.appendChild(jobCompany);
		cardInfo.appendChild(jobLocation);

		//create bottomWrapper div
		bottomWrapper = document.createElement('div');
		bottomWrapper.classList.add('bottomWrapper');
		innerCard.appendChild(bottomWrapper);

		//create button and i and append into bottomWrapper
		cardBtn = document.createElement('button');
		bottomWrapper.appendChild(cardBtn);
		cardArrow = document.createElement('i');
		cardArrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
		cardBtn.appendChild(cardArrow);

		//append current job description into array so I can display on click later
		infoIndex.push(job.description);
		urlIndex.push(job.url);
	});

	const cards = document.getElementsByClassName('card');
	Array.prototype.forEach.call(cards, function(card, index) {
		infoIndex[index] += `<a href="${urlIndex[index]}" target="_blank">Application page on Github Jobs</a>`;
		console.log(infoIndex)
		card.addEventListener('click', function() {
			modalContent.innerHTML = infoIndex[index];
			infoModal.style.display = 'block';
		});
	});
	//console.log(urlIndex);
	//console.log(cards);
}
modalClose.addEventListener('click', () => infoModal.style.display = 'none');
window.addEventListener('click', (e) => { if(e.target == infoModal) infoModal.style.display = 'none'});

railsBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=rails&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	railsBtn.classList.add('current');
});

scalaBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=scala&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	scalaBtn.classList.add('current');
});

javaBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=java&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	javaBtn.classList.add('current');
});

pythonBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=python&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	pythonBtn.classList.add('current');
});

phpBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=php&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	phpBtn.classList.add('current');
});

javaScriptBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=javascript&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	javaScriptBtn.classList.add('current');
});

cppBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=c++&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	cppBtn.classList.add('current');
});

dotNetBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=.NET&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	dotNetBtn.classList.add('current');
});

androidBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=Android&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	androidBtn.classList.add('current');
});

iosBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?description=iOS&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	iosBtn.classList.add('current');
});

allJobsBtn.addEventListener('click', () => {
	deleteElt();
	deleteCards();
	const s = document.createElement('script');
	s.classList.add('api');
	s.src = 'https://jobs.github.com/positions.json?&callback=jsonp';
	document.querySelector('body').appendChild(s);
	deselectBtn();
	allJobsBtn.classList.add('current');
});
//TODO: ADD LINKS TO JOB APPLICATION in modal, clean up code, change footer & header, add location search
function deselectBtn() {
	let btns = document.querySelectorAll('.btn');
	[].forEach.call(btns, (btn) => {
    	btn.classList.remove("current");
	});
}

function deleteElt() {
	const script = document.querySelector('.api');
	document.querySelector('body').removeChild(script);
}

function deleteCards() {
	const cards = document.getElementsByClassName('card');
	var cardsArray = [].slice.call(cards);
	//console.log(cardsArray);
	cardsArray.forEach(card => {
		document.querySelector('.container').removeChild(card);
	});
}