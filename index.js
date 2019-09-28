class Backend {
  //do not modify the constructor
  constructor(){
      this.baseUrl = '';
  }

  setBaseUrl(baseUrl) {
  	this.baseUrl = baseUrl;
  }

  getBaseUrl() {
  	return this.baseUrl;
  }

  get(url) {
  	fetch(this.baseUrl + url)
  		.then(response => response.json())
  		.then(data => console.log(data));
  }
}


//sample usage
const API = new Backend();
API.setBaseUrl("https://api.learnjavascript.online/demo");
// console.log(API.getBaseUrl());

API.get("/notifications/new.json")
// .then(data => {
//     console.log(data.count);
// });

// API.post("/food.json", {
//     food: "Pasta"
// })
// .then(data => {
//     console.log(data);
// });