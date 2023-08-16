import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient ,} from '@angular/common/http';

interface Task {
  id: number;
  title: string;
  status: string;
  dueDate: string;
  task_priority:string;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('./assets/dummy-data.json');
  }
}
