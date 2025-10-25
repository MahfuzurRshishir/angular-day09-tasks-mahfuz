import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../../../shared/components/card/card';
import { LoggerService } from '../../../../core/services/logger.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  constructor(private logger: LoggerService) {}

  onCardClicked() {
    this.logger.log('Card clicked from HomeComponent');
  }
}
