const addBtn = document.querySelector('#add');
const input = document.querySelector('#input');
const taskList = document.querySelector('.list');

const itemsArray = [
{name: 'coffee', complete: false},
{name: 'tea', complete: false},
{name: 'milk', complete: false}
];

function itemTemplate (arrayItem, index) {
	return `
		<li style=${arrayItem.complete ? "background-color:rgb(159,159,159)": ""}>
			<p style=${arrayItem.complete ? "text-decoration:line-through" : ""}>${arrayItem.name}</p>
		<span>
			<button id="complete" data-index=${index} style=${arrayItem.complete ? "background-color:rgb(131,163,138); color:rgb(128,193,142)": ""}>&#10004</button>
			<button id="delete" data-index=${index}>&#10006</button>
		</span>
		</li>
	`
};

function render() {
	input.value = '';
	taskList.textContent = '';
	
	for (i=0; i<itemsArray.length; i++) {
		taskList.insertAdjacentHTML('beforeend', itemTemplate(itemsArray[i], i)) 
	}
};

render();

addBtn.onclick = function () {
	if (input.value !== '') {
		newItem = {name: input.value, complete: false}
		itemsArray.push(newItem)
		render()
	}
};

taskList.onclick = function (event) {
	index = event.target.dataset.index
	if (event.target.textContent == '✖') {
		itemsArray.splice(index, 1)
	} else if (event.target.textContent == '✔') {
		itemsArray[index].complete = !itemsArray[index].complete
	} render()
};