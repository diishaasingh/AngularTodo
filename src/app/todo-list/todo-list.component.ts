import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTask: string = '';
  newTaskDueDate: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log('Fetched tasks:', tasks);
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.trim() === '') return;

    const newTask: Task = {
      id: this.tasks.length + 1,
      title: this.newTask,
      status: 'TODO',
      dueDate: this.newTaskDueDate
    };

    this.newTask = ''; 
    this.newTaskDueDate = ''; 
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTaskStatus(task: Task, event: any) {
    task.status = event.target.checked ? 'DONE' : 'TODO';
  }  
  
}
