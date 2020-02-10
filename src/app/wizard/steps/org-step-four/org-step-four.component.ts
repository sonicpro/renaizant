import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { WizardStepService } from '../../wizardStepService';

@Component({
  selector: 'ren-org-step-four',
  templateUrl: './org-step-four.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepFourComponent implements OnInit, AfterViewInit {
  faTrash = faTrash;
  departmentListHeading = 'Department list';
  departmentNameHint = 'Enter department name';
  teamListHeading = 'Team list';
  teamNameHint = 'Enter team name';
  addDepartmentButtonText = 'Add department';
  departments: string[];
  addTeamButtonText = 'Add team';
  teams: string[];
  showDepartmentInput: boolean;
  showTeamInput: boolean;

  private readonly departmentListMock: string[] = [
    'Management',
    'Software Development'
  ];
  private readonly teamListMock: string[] = [
    'Renaizant',
    'Devs'
  ];

  @Output() readonly isValid: EventEmitter<boolean> = new EventEmitter();

  private readonly departmentListStateKey = 'departmentList';
  private readonly teamListStateKey = 'teamList';
  private readonly departmentInputStateKey = 'isDepartmentInputShown';
  private readonly teamInputStateKey = 'isTeamInputShown';

  constructor(private readonly step: WizardStepService) {
  }

  ngOnInit() {
    this.departments = this.step.getItem(this.departmentListStateKey, [ ...this.departmentListMock ]);
    this.teams = this.step.getItem(this.teamListStateKey, [ ...this.teamListMock ]);
    this.showDepartmentInput = this.step.getItem(this.departmentInputStateKey, false);
    this.showTeamInput = this.step.getItem(this.teamInputStateKey, false);
  }

  ngAfterViewInit(): void {
    this.revalidate();
  }

  removeDepartment(index: number): void {
    this.departments.splice(index, 1);
  }

  removeTeam(index: number): void {
    this.teams.splice(index, 1);
  }

  onKeyup(event: KeyboardEvent, container: string[]): void {
    if (event.keyCode === 13) {
      this.validateInput(event, container);
    } else if (event.keyCode === 27) {
      this.validateInput(event, container, true);
    }
  }

  onBlur(event: FocusEvent, container: string[]): void {
    this.validateInput(event, container);
  }

  stylePlaceholder(event: KeyboardEvent): void {
    let element = event.target as HTMLInputElement;
    if (!element.value) {
      element.classList.add("greyed-out");
    }
    else {
      element.classList.remove("greyed-out");
    }
  }

  revalidate(): void {
    // No form validation for the org-step-four.
    this.isValid.emit(true);
  }

  saveState(): void {
    this.step.setItem(this.departmentListStateKey, this.departments);
    this.step.setItem(this.teamListStateKey, this.teams);
    this.step.setItem(this.departmentInputStateKey, this.showDepartmentInput);
    this.step.setItem(this.teamInputStateKey, this.showTeamInput);
  }

  private validateInput(event: UIEvent, container: string[], exitGracefully: boolean = false) {
    let element = event.target as HTMLInputElement;
    if (element.value) {
      if (!exitGracefully) {
        container.push(element.value);
      }
      element.value = null;
      if (container === this.teams) {
        this.showTeamInput = false;
      } else {
        this.showDepartmentInput = false;
      }
    }
  }
}
