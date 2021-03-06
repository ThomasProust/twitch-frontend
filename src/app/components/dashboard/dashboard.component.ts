import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames().subscribe(games => (this.games = games));
  }
}
