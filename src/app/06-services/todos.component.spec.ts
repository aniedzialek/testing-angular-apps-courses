import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

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
});
