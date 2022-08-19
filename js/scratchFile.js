var taskContainerEl = $('#task-container');

var taskDateInputEl = $('#dates-task');
var taskStatusInputEl = $('#task-status');
var taskDueDateInputEl = $('#due-time');
var taskDescrInputEl = $('#description-task');


var taskSubmitBtnEl = $('#button-submit-task');

var taskFormEl = $('#task-form');

var taskListMain = [];

function renderTask() {
    taskContainerEl.empty();
    console.log(taskListMain);
    if (typeof taskListMain.length == "undefined") {
        for (var i = 0; i < 1; i++) {
            var taskDateParsed = taskListMain.date;
            console.log(taskDateParsed);
            var taskDueDateParsed = taskListMain.dueDate;
            var taskDescriptionParsed = taskListMain.task;
            var taskStatusParsed = taskListMain.status

            var taskRowEl = $('<div>');
            
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(taskDueDateParsed);
            checkBtn.text("Check");

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);

            taskContainerEl.append(taskRowEl);
        }
    } else {
        for (var i=0; i < taskListMain.length; i++) {
            taskListMain.sort((a, b) => a.timeStamp - b.timeStamp);

            if (taskListMain[i].dates !== currentDate) {
                console.log("skip!");
            } else {
                var taskDateParsed = taskListMain.date;
                var taskDueDateParsed = taskListMain.dueDate;
                var taskDescriptionParsed = taskListMain.task;
                var taskStatusParsed = taskListMain.status;

                var taskRowEl = $('<div>');
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(taskDueDateParsed);
            checkBtn.text("Check");

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);

            taskContainerEl.append(taskRowEl);
            }
        }
    }
}

function initTask() {
    var storedTaskInit = JSON.parse(localStorage.getItem("taskList"));

    if (storedTaskInit !== null) {
        var storedTask = storedTaskInit;
        taskListMain = storedTask; 
    }
    renderTask();
}

function saveTaskToStorage {
    localStorage.setItem("taskList", JSON.stringify(taskListMain));
}

function handleTaskFormSubmit(event) {
    event.preventDefault();

    var taskDate = taskDateInputEl.val();
    var taskDueDate = taskDueDateInputEl.val();
    var taskDescription = taskDescrInputEl.val();
    var taskStatus = taskStatusInputEl.val();
    var timeStamp24 = moment(taskDate + taskDueDate, "YYYY-MM-DD h:mmA").format("X");
    console.log(taskDate + " " + taskDueDate)

    if (taskDescription === "") {
        return;
    } 

    var taskItem = {
        dates: taskDate,
        status: taskStatus,
        description: taskDescription,
        dueDate: taskDueDate,
        timeStamp: timeStamp24
    }; 

    if (taskListMain.length === 0) {
        taskListMain = taskItem;
        console.log("empty")
    } else if (typeof taskListMain.length == "undefined") {
        taskListMain = [taskListMain]
        taskListMain.push(taskItem);
        console.log(taskListMain)
    } else {
        console.log("third task?")
        taskListMain.push(taskItem);
        console.log(taskListMain);
    }

    taskFormEl[0].reset();

    saveTaskToStorage();
    renderTask();

}

function handleDeleteTask(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
    var index = btnClicked.parent('div').attr('data-index');
    taskListMain.splice(index, 1);

    saveTaskToStorage();
    renderTask();
}

taskFormEl.on('submit', handleTaskFormSubmit);
taskContainerEl.on('click', '.button-check', handleDeleteTask);
initTask();