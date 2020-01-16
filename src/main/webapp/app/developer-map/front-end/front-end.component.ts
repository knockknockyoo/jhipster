import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-front-end',
  templateUrl: './front-end.component.html'
})
export class FrontEndMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
