let theName = document.querySelector('.name span');
let theTries = document.querySelector('.tries');
document.querySelector('.control-buttons span').onclick = function () {
	let yourName = prompt('what Is Your Name?');

	if(yourName == null || yourName=='') {
		
		theName.innerHTML = 'UnKnown';
	}
	else {
		theName.innerHTML = yourName;
	}
	document.querySelector('.control-buttons').remove();
};
let duration= 1000;
let elementContainer = document.querySelector('.memory-game-blocks');
let elements = Array.from(elementContainer.children);
let orderRange = Array.from(Array(elements.length).keys());
console.log(elements);
theSuffle(orderRange);
console.log(orderRange);

elements.forEach((element , index)=> {
	element.style.order = orderRange[index];
	element.addEventListener('click', function() {
		flipBlock(element);
	})
});

function flipBlock(selectedBlock){
	selectedBlock.classList.add('is-flipped');
	let allFlippedBlocks = elements.filter(flipedBlock => flipedBlock.classList.contains('is-flipped'));
	if (allFlippedBlocks.length === 2) {
		stopClicking();
		match(allFlippedBlocks[0],allFlippedBlocks[1]);
	}
	else {

	}
}
function stopClicking() {
	elementContainer.classList.add('no-clicking');

	setTimeout( () => {
	elementContainer.classList.remove('no-clicking');

	}, duration)
}
function match(first,second) {
	let tries = document.querySelector('.tries span');
	if(first.dataset.baby === second.dataset.baby) {
		first.classList.remove('is-flipped');
		second.classList.remove('is-flipped');
		first.classList.add('has-match');
		second.classList.add('has-match');
	}
	else {
		tries.innerHTML = parseInt(tries.innerHTML) +1;
	setTimeout(() => {
		first.classList.remove('is-flipped');
		second.classList.remove('is-flipped');	
	}, duration)
	}

}
function theSuffle(array) {
	let current = array.length,
		random,
		temp;
		
	while (current > 0) {
		random = Math.floor(Math.random() * current );
		current--;
		temp = array[current];
		array[current] = array[random];
		array[random] = temp;
	}
	return array;
}
