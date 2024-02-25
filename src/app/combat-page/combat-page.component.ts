import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './player.service';
import { Monster } from './monsters';
import { EncounterTableService } from './encounter-table.service';
import { Pages } from '../app-routing.module';
import { UnlocksService } from '../unlocks.service';
import { Unlockables } from '../spells';

@Component({
  selector: 'app-combat-page',
  templateUrl: './combat-page.component.html',
  styleUrls: ['./combat-page.component.scss'],
})
export class CombatPageComponent {
  constructor(
    private router: Router,
    public player: PlayerService,
    private activatedRoute: ActivatedRoute,
    private encounterTableService: EncounterTableService,
    public unlocksService: UnlocksService
  ) {
    this.player.reset();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      const encounterNumber = queryParams['encounter'];
      if (encounterNumber === undefined) {
        this.gameState = 'error';
        throw new Error('No Envounter Error');
      }
      this.monsters = this.encounterTableService.getEncounter(+encounterNumber);
      this.gameState = 'fighting';
    });
  }

  gameState: GameState = 'loading';
  selectedActon: 'attack' | 'spell' = 'attack';
  selectedSpell?: Unlockables.Spell =
    this.unlocksService.getUnlockedSpells()[0];
  monsters: Monster[] = [];
  combatLog: string[] = [];

  attackAction(monsterIndex: number) {
    const monster = this.monsters[monsterIndex];

    if (this.selectedActon === 'attack') {
      const dmgDealt = monster.takeDamage(this.player.damage);
      this.combatLog.unshift(`You deal ${dmgDealt} damage to ${monster.name}`);
    }
    if (this.selectedActon === 'spell' && this.selectedSpell) {
      const log = this.castSpell(monster, this.selectedSpell);
      this.combatLog.unshift(log);
    }

    this.postActionPhase();
  }

  private postActionPhase() {
    this.monsters.forEach((monster) => {
      if (!monster.isDefeated()) {
        const log = monster.takeAction();
        this.combatLog.unshift(log);
      }
    });

    if (this.player.hp <= 0) {
      this.gameState = 'lost';
    }

    const allMonstersDefeated = this.monsters.reduce(
      (isDefeated, monster) => isDefeated && monster.isDefeated(),
      true
    );

    if (allMonstersDefeated) {
      this.player.levelUp();
      this.combatLog.unshift('You win and level up gaining 3 hp and 3 damage');
      this.gameState = 'win';
      this.monsters.forEach((monster) => monster.reward());
    }
  }

  castSpell(monster: Monster, spell: Unlockables.Spell) {
    if (this.player.mp < spell.mpCost) {
      return `You try to cast ${spell.name}, but you dont have enough mp`;
    }
    this.player.mp -= spell.mpCost;

    return spell.action(monster, this.monsters);
  }

  attackBtn() {
    this.selectedActon = 'attack';
  }

  spellBtn() {
    this.gameState = 'selectingSpell';
  }

  confirmRun() {
    const result = confirm('Do you wish to run?');
    if (result == true) {
      this.router.navigateByUrl(Pages.Home);
    }
  }

  selectSpell(spell: Unlockables.Spell) {
    if (spell.target === 'self' || spell.target === 'all') {
      const log = this.castSpell(this.monsters[0], spell);
      this.combatLog.unshift(log);
      this.gameState = 'fighting';
      this.postActionPhase();
      return;
    }
    this.selectedSpell = spell;
    this.selectedActon = 'spell';
    this.gameState = 'fighting';
  }

  returnHome() {
    this.router.navigateByUrl('');
  }
}

type GameState =
  | 'fighting'
  | 'lost'
  | 'win'
  | 'loading'
  | 'error'
  | 'selectingSpell';