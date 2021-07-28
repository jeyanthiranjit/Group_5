In this step, we'll re-organise our folder structure in preparation for the next few steps.

Create a js folder in your project if one does not already exist
Copy the existing js file into your js folder, and rename it to index.js
Update the <script> tag in your html file to use the new location of the js/index.js file.
Create a taskManager.js file in the js folder
Add a <script> tag pointing to the js/taskManager.js file before the <script> tag pointing to the js/index.js file.
Step 2: The TaskManager Class
In this step, we'll create a TaskManager class that will be responsible for managing the tasks in the application.

Useful Resources for this step
ECMAScript 2015 Classes
Create a TaskManager class in js/taskManager.js
Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.
Test Your Code!
Now is a good chance to test your code, head over to js/index.js and do the following

Initialize a new instance of TaskManager
console.log() the tasks property
Expected Result You should see an empty array logged to the browser.

Step 3: Adding A New Task Programmatically
In this step, we'll add a method to the TaskManager class that will allow us to add tasks to it's tasks property.

As part of this process, we're going to create a unique id for each task.

For each task for have a unique id, we will need to keep track of what id the latest task was created with, so that we can increment that id for the next task.

For example, pay attention to the two task objects below:

const task1 = {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};

const task2 = {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};
Notice how each task has a unique id? We will be using this id in future steps to keep track of the different tasks.

Useful Resources for this step
Array.prototype.push()
In the TaskManager's constructor, accept a currentId parameter, with a default value of 0.
Assign the currentId to a new property on the class, this.currentId.
Create a method on the class, addTask. This method should accept all the nessecary information from the form to create a task as parameters.
name
description
assignedTo
dueDate
Within the addTask method, increment the this.currentId
push a new task into the this.tasks array, with the correct properties of the task, using the values passed in as parameters as well as the new this.currentId Note Make sure to include the id and a default status of 'TODO'
Test Your Code!
Now is a good chance to test your code, head over to js/index.js and do the following

Initialize a new instance of TaskManager
Use the addTask method to add a new task
console.log() the tasks property
Expected Result You should see an array containing the added task logged to the browser.

Step 4: Adding Tasks With The Form
In this final step, we will use the TaskManager class to keep track of tasks we add with the New Task form.

Note: For now, if your New Task form is on a seperate page to your Task List, copy it over to your Task List so it's all on the one page.


Make sure a new TaskManager is initialized near the top of the file.
In index.js, add an event listener to the New Task form, listening to the submit event. If there is already an event listener used for validation, use that one.
When the submit event fires, if validation of the form is successful, use the values of each input in the form to call the taskManager's addTask method.
Note: Make sure to prevent the default action of the form!
Clear the values from each form input, ready for the next submission.
Results
We've now set up the TaskManager class, created an addTask and hooked it up to our New Task form!

Test out your code by adding some tasks using the New Task form, and checking the TaskManager instance's tasks array for the tasks.
n this step, we'll create a function using template literals to return the HTML for each individual task.

In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:

name
description
assignedTo
dueDate
status
Hint: Try using an arrow function!

Within the createTaskHtml function, create a string using template literals, copying the HTML of a single task from the index.html

For example:

const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>Take out trash</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: Nick</small>
            <small>Due: 20/09/2020</small>
        </div>
        <p>Take out the trash to the front of the house</p>
    </li>
`
Using the template literal placeholders (${}), replace each section of the task HTML with the correct parameter

Return the HTML from the function

Test Your Code!
Now is a good chance to test your code, head over to js/index.js and do the following

Create a taskHtml variable with the result of calling the createTaskHtml function, making sure to pass a value for each parameter.
console.log() the taskHTML varirable
Expected Result You should see HTML for the task in the console, for example:

<li class="list-group-item">
  <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
      <h5>Take out trash</h5>
      <span class="badge badge-danger">TODO</span>
  </div>
  <div class="d-flex w-100 mb-3 justify-content-between">
      <small>Assigned To: Nick</small>
      <small>Due: 20/09/2020</small>
  </div>
  <p>Take out the trash to the front of the house</p>
</li>
Step 2: The render method
Useful Resources for this step
Loops and iteration
Date
Array.push()
Array.join()
Document.querySelector
To display the tasks, we'll be creating a new method on our TaskManager class called render.

"Render" is a term used in computer science that means to "create a visual reference of". In this step, we are rendering our tasks, so that they are visible on the page.

We can mostly rely on the data stored for each task in the TaskManager's tasks property to display the task nicely on the page. The one change we will need to make is to format the dueDate of the task so that it is human-readable. To do this, we'll be using JavaScript's Date object.

In js/taskManager.js, within the TaskManager class, create a render() method. This method does not need any parameters.

Create a variable storing an empty array to hold the HTML of all the tasks' html, tasksHtmlList.

Loop over the TaskManager's tasks, for each task:

Store the current task in a variable

Create a date variable, storing a new Date(), passing in the current task's dueDate to the Date constructor.

Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.

Hint: Use MDN's Date reference to see what methods are available to format a date. Build a string using string concatination or template literals. Check the example/taskManager.js to see how it can be done if you get stuck.

Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.

push the taskHtml into the tasksHtmlList array.

After looping through each task, create a tasksHtml variable, set the variable to a string of HTML of all the tasks by joining the tasksHtmlList array together, seperating each task's html with a newline.

Hint: \n can be used to represent a newline.

Make sure the tasks list in index.html has an id so it can be selected.

Select the tasks list element and set its innerHTML to the tasksHtml.

Step 3: Calling render
Useful Resources for this step
EventTarget.addEventListener()
Now that the TaskManager class has a render() method, we need to make sure to call it each time a new task is added, so that it is rendered to the page!

In js/index.js, in the event listener for the submit even on the New Task form, find the call to the TaskManager's addTask.

After addTask is called, call the TaskManager's render method.

Results