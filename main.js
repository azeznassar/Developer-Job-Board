
const script = document.querySelector('.api');
const list = document.querySelector('.list');

function jsonp(jobs) {
	jobs.forEach(job => {
		//console.log(data);
		count = 0;
		card = document.createElement("div");
		card.classList.add('card');
		list.appendChild(card);

		count += 1;
		jobListing = document.createElement("p");
        jobListing.textContent = `Job ${count}: ${job.title} in ${job.location}`
		card.appendChild(jobListing);
	});
}





//dymanic content
// var s = document.createElement("script");
// s.src = "https://jobs.github.com/positions.json?description=+LANG+&callback=jsonp";
// s.type = "text/javascript";
// $('body').append(s);