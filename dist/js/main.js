const script = document.querySelector('.api');
const container = document.querySelector('.container');

function jsonp(jobs) {
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
	});
}




//dymanic content
// var s = document.createElement("script");
// s.src = "https://jobs.github.com/positions.json?description=+LANG+&callback=jsonp";
// s.type = "text/javascript";
// $('body').append(s);