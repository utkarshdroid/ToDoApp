import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../models/todo-item.model';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  readonly baseURL = "https://localhost:44331/api/ToDoItem";
  readonly authURL = "https://localhost:44331/api/Authentication";
  list: TodoItem[] = [];

  constructor(private http: HttpClient) { }
  todoData: TodoItem= new TodoItem();
  loginData: Login = new Login();
  registerData: Register = new Register();
  postToDoItem() {

    return this.http.post(this.baseURL, this.todoData ,
      {
        headers: new HttpHeaders(
          {
            "Content-Type": "application/json"
          }
        )
      });
  }

  putToDoItem()
  {
    console.log(this.todoData.itemId)
    console.log("Hello");
    return this.http.put(`${this.baseURL}/${this.todoData.itemId}`,this.todoData,
      {headers: new HttpHeaders({
        "Content-type": "applicatio/json"
      })
      } 
    );
  }

  deleteToDoItem(id:number){
    return this.http.delete(`${this.baseURL}/${id}`,{
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    });
  }
  refreshList(){
    this.http.get(this.baseURL).toPromise().then(
      res => {
        headers : new HttpHeaders({
          "Content=Type": "applicaiton/json"
        })
      }
    );
  }

  registerURL(){
    return this.http.post(`${this.authURL}/register`,this.registerData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
   loginUser() {
    return this.http.post(`${this.authURL}/login`, this.loginData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  registerUser() {
    return this.http.post(`${this.authURL}/register`, this.registerData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

}
