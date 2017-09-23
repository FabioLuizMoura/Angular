import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsList } from './accounts_list.component';

describe('AccountsListComponent', () => {
  let component: AccountsList;
  let fixture: ComponentFixture<AccountsList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
