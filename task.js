//this will delete new added task also
var list = document.querySelector('#task-list ul');

list.addEventListener('click', function (e) {
	if (e.target.className === 'delete') { 
		var li = e.target.parentElement; 
		list.removeChild(li);

	}
})


//add task
var addForm = document.forms['add-task'];
addForm.addEventListener('submit', function (e) {

	e.preventDefault(); //to prevent submit default refresh
	var value = addForm.querySelector('input[type="text"]').value;
	var li = document.createElement('li');
	var taskName = document.createElement('span');
	var deletebtn = document.createElement('span');
	li.appendChild(taskName);
	li.appendChild(deletebtn);
	list.appendChild(li);
	taskName.textContent = value;
	deletebtn.textContent = 'delete';
	taskName.classList.add('name');
	deletebtn.classList.add('delete');
})


//hide the list of Task
var hideform = document.querySelector('#add-task #hide');
hideform.addEventListener('click', function (e) {
	if (list.style.display == "none") {
		list.style.display = "block";
	} else {
		list.style.display = "none";
	}
})


//Search Task
var searchForm = document.forms['search-tasks'][0];
searchForm.addEventListener('keyup', function (e) {
	var searchItem = list.querySelectorAll('li');
	var filter = e.target.value.toUpperCase();
	Array.from(searchItem).forEach(function (text) {
		var textVal = text.firstElementChild.textContent;
		if (textVal.toUpperCase().indexOf(filter) > -1) {
			text.style.display = 'block';
		} else {
			text.style.display = "none";
		}

	})

})

