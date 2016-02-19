
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1

  alert("yowch! don't click me so hard!")
})



document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2

  var doubleValueClick = document.querySelector ('#compoundInvestment')

  doubleValueClick.innerHTML = doubleValueClick.innerHTML*2

})



document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var circle = document.querySelector("#circle-bw")

  if (circle.style.background === "black"){
  	circle.style.background = "white"
  }
  else{
  	circle.style.background = "black"
  }

})



document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}

var circleRed = document.querySelector('.circle-red')

var circleRedStyles = window.getComputedStyle(circleRed)

var circleSizeWidth = parseInt(circleRedStyles.width)
var circleSizeHeight = parseInt(circleRedStyles.height)
//console.log(circleSizeWidth)

if(circleSizeWidth > 300){
	circleRed.style.width = 40 + "px"
	circleRed.style.height = 40 + "px"
		
}
else{
	circleRed.style.width = (circleSizeWidth*2) + "px"
	circleRed.style.height = (circleSizeHeight*2) + "px"
	
	}

})



document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userStatus = function(userElement){
  	if(userElement.classList.contains('inactive')){
  		return true 
  	}
  	else{
  		false 
  	}
  }

var allLi = document.querySelectorAll('#userList Li')
//console.log(allLi)

var allUl = document.querySelector('#userList')
//console.log(allUl)

for(i=0; i<allLi.length; i++){
	//console.log(allli[i].classname)
	var activeUserLi = allLi[i]
	if(userStatus(activeUserLi)){ //if any inactive user is on the list 
		allUl.removeChild(activeUserLi) //remove all inactive use from list
	}
}

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

	var reverseSquaresBox = document.querySelector('#reverse-squares .answer-box') 
	var reverseSquares = document.querySelectorAll('#reverse-squares .answer-box span')

	console.log(reverseSquares)

	for(var i=reverseSquares.length-1; i>=0; i--){
		console.log(reverseSquares[i])
		reverseSquaresBox.appendChild(reverseSquares[i])

	}

})



document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  var taskContainer = document.querySelectorAll('#tasks Li')

  var reverseString = function(input){
  	     var newString = ''

  		for(var i = input.length-1; i>=0; i--){
  			var char = input[i]
  			newString += char
  		}
  		return newString
  	}
 console.log(reverseString("This string"))

 var newArr = []
 	for (var i=0; i <taskContainer.length; i++){
 		//console.log(taskContainer[i].textContent)

 		var stringReversed = reverseString(taskContainer[i].textContent)
 	
 		taskContainer[i].innerHTML = stringReversed

 		// newArr.push(newStringArr)
 	}

 	console.log(taskContainer)

})



document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #

 var cityImgEl = document.querySelector('#city-img')

 var url = cityImgEl.src

 var cityArray = url.split("/")

 var incrementNum = cityArray.pop()

 var currentImgNum = parseInt(incrementNum)

 var newincrementNum = (incrementNum % 10) + 1

 cityArray.push(newincrementNum)

 cityImgEl.src = cityArray.join("/")
	

})