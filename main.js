
const script = document.querySelector('.api');
const list = document.querySelector('.list');

function jsonp(data) {
	for(i = 0; i < Object.keys(data).length; i++){
		jobListing = document.createElement("p");
        jobListing.textContent = `${i}: ` + data[`${i}`].title + ":" + data[`${i}`].company + "," + data[`${i}`].location;
        list.appendChild(jobListing);
	}
}





//dymanic content
// var s = document.createElement("script");
// s.src = "https://jobs.github.com/positions.json?description=+LANG+&callback=jsonp";
// s.type = "text/javascript";
// $('body').append(s);