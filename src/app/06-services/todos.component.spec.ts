import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('sets todos property with items returned from server', () => {
    // Changing implementation of getTodos() with Jasmine's spyOn.
    // With use of spyOn you get the control over a method in a class

    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ]);  // or:
      // return Observable.from( [ [
      //   {id: 1, title: 'a'},
      //   {id: 2, title: 'b'},
      //   {id: 3, title: 'c'},
      // ] ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('calls server to save the changes when new item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('adds new todo returned from the server', () => {
    const todo = {id: 1};
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.from([ todo ]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('adds new todo returned from the server (second version)', () => {
    const todo = {id: 1};
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })

  it('sets the message property if server returns error when adding new todo', () => {
    const error = 'Error from the server';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });
});
