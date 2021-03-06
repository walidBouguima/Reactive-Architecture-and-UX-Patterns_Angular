import {Component} from '@angular/core';
import {of, Subject} from 'rxjs';

@Component({
  selector: 'solution-state-selection-container',
  template: `
    <h2>Selection Handling</h2>
    <div class="case-content">
      <pre>{{ values$ | async | json }}</pre>
      <solution-state-selection
        [formGroupModel]="formGroupModel$ | async"
        (formValueChange)="values$.next($event)"
      >
      </solution-state-selection>
    </div>
  `
})
export class SolutionStateSelectionContainerComponent {
  values$ = new Subject();

  formGroupModel$ = of({
    name: '',
    age: 0
  });
}
