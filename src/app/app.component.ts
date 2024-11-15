import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuClicked = false;
  title = 'food-fiesta-app';
  constructor(private router: Router, private toastr: ToastrService) {}
  ngOnInit() {}
  route(link: string) {
    this.router.navigate([link]);
  }
}
