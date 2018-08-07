const script = document.querySelector('.api');
const list = document.querySelector('.list');

function jsonp(jobs) {
	jobs.forEach(job => {
		//console.log(data);
		card = document.createElement("div");
		card.classList.add('card');
		list.appendChild(card);

		jobListing = document.createElement("h2");
        jobListing.textContent = `${job.title} in ${job.location}`
		card.appendChild(jobListing);
	});
}




//dymanic content
// var s = document.createElement("script");
// s.src = "https://jobs.github.com/positions.json?description=+LANG+&callback=jsonp";
// s.type = "text/javascript";
// $('body').append(s);