# andupandu-sandu

Andupandu - Backend

// tasks
// three sections with drag and drop functionality
// open in progress and completed
//on drop status should get changed
//show on top with higher priority low medium high

create new task option button
on click popup
once saved it should get added in whichever status is selected
same way edit option
on clicking on any task show popup with that particular task

//components to create
task component
draggable component
edit popup component
search component

backend
task {
id: uuid,
name: string,
description: string,
status: enum['open', 'In Progress', 'Completed'],
priority: enum['Low', 'Medium', 'High'],
}

create new task api
update task api
get all tasks api
delete task api

// search with name
// filter with priority and status
//also need to responsive ui

Tasks -

1. Add new task creation functionality with drag and drop feature.
2. Implement sorting by priority (low, medium, high) in all sections.
3. Update task status on drop in different sections (open, in progress, completed).
4. Add the option to edit an existing task.
5. Develop a function to search for tasks by name.
6. Create filters to sort tasks by priority and status.
7. Include a "
