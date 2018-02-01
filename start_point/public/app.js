var makeRequest = function(url, callbackFunction) {
  var newRequest = new XMLHttpRequest();
  newRequest.open('GET', url);
  newRequest.addEventListener('load', callbackFunction);
  newRequest.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var collection = JSON.parse(this.response);
  displayCollection(collection);
}

var displayCollection = function(collection) {
  var ul = document.querySelector('#beer-list');
  collection.forEach(function(item) {
    addItemsToBeersList(item, ul);
    // addImagesToBeersList(item, ul);
  })
}

var addItemsToBeersList = function(beer, list) {
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.src = beer.image_url;
  // var ingredients = [beer.ingredients];
  // ingredients.forEach(function(ingredient){
  //   console.log(ingredient.value);
  // })
  li.innerHTML = `<strong>${beer.name}</strong> ${beer.tagline}`;
  li.appendChild(img);
  list.appendChild(li);
}

// var countIndex = function() {
//   var index = 0;
//   return function(index) {
//     return index ++;
//   }
// }

var addImagesToBeersList = function(beer, list) {
  var number = countIndex();
  console.log(number);
  var liArray = document.querySelectorAll('li');
  var li = liArray[number]
  console.log(li);
  var img = document.createElement('img');
  img.src = beer.image_url;
  li.appendChild(img);
  list.appendChild(li);
}

var app = function(){
  var brewdogApiUrl = "https://api.punkapi.com/v2/beers";
  makeRequest(brewdogApiUrl, requestComplete);
}

document.addEventListener('DOMContentLoaded', app);
