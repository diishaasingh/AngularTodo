import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

interface Task {
  id: number;
  title: string;
  status: string;
  dueDate: string;
  task_priority: string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  newTask: string = '';
  newTaskDueDate: string = '';
  priority: string='';
  tasks: Task[] = [];
  inPending: Task[] = [];
  taskDone:Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log('Fetched tasks:', tasks);
      this.tasks = tasks;
    });
  }
  
  getCurrentDateTime(): string {
    return new Date().toISOString().slice(0, 16);
  }
  
  
  
  getTaskDueTime(task: Task): string {
    const now = new Date();
    const dueDate = new Date(task.dueDate);
    const diffMs = dueDate.getTime() - now.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);
    return `${diffDays}d ${diffHrs}h ${diffMins}m ${diffSecs}s`;
  }

  completedOn(): string {
    return new Date().toDateString();
  }
  
  
  addTask() {
    if (this.newTask.trim() === '') return;

    const newTask: Task = {
      id: this.tasks.length + 1,
      title: this.newTask,
      status: 'TODO',
      dueDate: this.newTaskDueDate,
      task_priority: this.priority
    };

    this.tasks.push(newTask);
    this.newTask = ''; 
    this.newTaskDueDate = ''; 
    this.priority='';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  moveToPending(todo: Task){
    this.tasks = this.tasks.filter(item => item !== todo);
    this.inPending.push(todo);
  }
  
  moveToDone(todo: Task){
    this.inPending = this.inPending.filter(item => item !== todo);
    this.taskDone.push(todo);
  }
 
}