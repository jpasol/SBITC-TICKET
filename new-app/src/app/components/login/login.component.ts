import { Component,OnInit } from "@angular/core";
import { Helpers } from 'src/app/helpers/helpers';
import { Router } from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.ts']

})

export class LoginComponent implements OnInit {

  constructor(private helper:Helpers, private router:Router, private tokenService:TokenService) {}
}