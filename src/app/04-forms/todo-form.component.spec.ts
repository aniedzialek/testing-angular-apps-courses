import { TodoFormComponent } from './todo-form.component';
import {FormBuilder} from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    component = new TodoFormComponent(formBuilder);
  });

  it('creates form with 2 controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  it('name control is required', () => {
    const nameControl = component.form.get('name');

    nameControl.setValue('');

    expect(nameControl.valid).toBe(false);
  });
});
