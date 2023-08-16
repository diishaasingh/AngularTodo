import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; // Import map and switchMap
import { Task } from './task.model';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';

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
