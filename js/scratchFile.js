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

        }
    }
}