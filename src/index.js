import _, { first, head } from 'lodash';
import './styles.css';
import printMe from './today.js';

class Task {
  constructor(title, description, dueDate, priority/*, checklist*/) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    //this.checklist = checklist;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.tasks =[]
  }
  newProject(task) {
    this.tasks.push(task);
  }
}

// We should have:
// 1. "Add a task" tab.
// 2. "Create a project" tab.
// 3. View all projects tab.
// 4. View all tasks tab.

// We should be able to:
// 1. View all projects.
// 2. View all tasks in a project.
// 3. Expand a single task to see or edit its' details.
// 4. Delete a task or project with all the tasks it contains.

function component() {
  // Main container.
  const content = document.createElement('div');
  content.id = 'content';

  // Header.
  const header = document.createElement('header');
  content.append(header);

  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'To-Do Organizer';
  header.append(h1);

  // Navigation.
  const nav = document.createElement('nav');
  header.append(nav);

  for ( let i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.classList.add('nav-button');
    nav.append(button);
  }

  const navChildren = nav.children;
  const firstButton = navChildren.item(0);
  firstButton.innerHTML = 'Tasks';

  const secondButton = navChildren.item(1);
  secondButton.innerHTML = 'Projects';


  return content;
}
  
document.body.appendChild(component());

// --- Testing ---
let project1 = new Project('First Project');

let task1 = new Task('First Task', 'This is the first task.', new Date('August 08, 2022 16:30:00'), 'High');
console.log(task1);
project1.newProject(task1);

//let task2 = new Task('Second Task', 'This is the second task.');
//project1.newProject(task2);