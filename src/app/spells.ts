import { Pages } from './app-routing.module';
import { CombatLogService } from './combat-page/combat-log.service';
import { Monster } from './combat-page/monsters';
import { PlayerService } from './combat-page/player.service';
import { UnlocksService } from './unlocks.service';
import { getRandomNumberArbitrary } from './utils/get-random-number-arbitrary';

export namespace Unlockables {
  export abstract class Unlockable {
    constructor(
      protected unlocksService: UnlocksService,
      protected playerService: PlayerService,
      protected combatLogService: CombatLogService
    ) {}
    name = this.constructor.name;
    abstract placeToGoAfterUnlock: Pages;
  }

  export class Mushroom extends Unlockable {
    placeToGoAfterUnlock = Pages.Heal;
  }
  export class GingerRoot extends Unlockable {
    placeToGoAfterUnlock = Pages.Heal;
  }
  export class Lavender extends Unlockable {
    placeToGoAfterUnlock = Pages.Heal;
  }
  export class Chamomile extends Unlockable {
    placeToGoAfterUnlock = Pages.Heal;
  }
  export class BlueStone extends Unlockable {
    placeToGoAfterUnlock = Pages.Minimize;
  }
  export class EatingPlant extends Unlockable {
    placeToGoAfterUnlock = Pages.Minimize;
  }
  export class RainbowFish extends Unlockable {
    placeToGoAfterUnlock = Pages.Minimize;
  }

  export abstract class Spell extends Unlockable {
    abstract action: (monster: Monster, monsters: Monster[]) => string;
    abstract target: TargetingType;
    abstract mpCost: number;
  }

  export type TargetingType = 'single' | 'all' | 'self';

  export class MagicMissle extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'single';
    mpCost = 8;
    action = (monster: Monster) => {
      const dmg = Math.floor(
        this.playerService.damage * (getRandomNumberArbitrary(10, 20) / 100 + 1)
      );
      const dmgDealt = monster.takeDamage(dmg);
      return `MagicMissle does ${dmgDealt} non-elemental damage to ${monster.name}`;
    };
  }

  export class Gale extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'all';
    mpCost = 8;
    action = (_: Monster, monsters: Monster[]) => {
      monsters.forEach((monster) => monster.takeDamage(10));

      return `Gale does 10 wind damage to all enemies`;
    };
  }

  export class Minimize extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'all';
    mpCost = 8;
    action = (_: Monster, monsters: Monster[]) => {
      monsters.forEach((monster) => monster.giveStatus('minimized'));
      return `All foes have been minimized and will take extra damage`;
    };
  }

  export class StoneDefence extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'self';
    mpCost = 8;
    action = () => {
      this.playerService.giveStatus('stoneDefence');
      return `You gain stone armor you will take less damage`;
    };
  }

  export class ChargeAttack extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'single';
    mpCost = 0;
    action = (monster: Monster) => {
      if (this.playerService.statuses.includes('charged')) {
        this.playerService.removeStatus('charged');
        const dmgDealt = monster.takeDamage(
          Math.round(this.playerService.damage * 2.5)
        );
        return `You deal ${dmgDealt} damage to ${monster.name} with a charged attack`;
      }
      this.playerService.giveStatus('charged');
      return `You charge up a huge attack`;
    };
  }

  export class Heal extends Spell {
    placeToGoAfterUnlock = Pages.Home;
    target: TargetingType = 'self';
    mpCost = 10;
    action = () => {
      const ammountToHeal = Math.floor(this.playerService.maxHp * 0.5);
      this.playerService.hp += ammountToHeal;
      if (this.playerService.hp > this.playerService.maxHp) {
        this.playerService.hp = this.playerService.maxHp;
      }
      return `You cast Heal and gain ${ammountToHeal} hp`;
    };
  }

  export class Fireball extends Spell {
    target: TargetingType = 'single';
    placeToGoAfterUnlock = Pages.Home;
    mpCost = 10;
    action = (monster: Monster) => {
      const dmgDealt = monster.takeDamage(this.playerService.damage + 30);
      return `Fireball does ${dmgDealt} fire damnge to ${monster.name}`;
    };
  }

  export class Icebeam extends Spell {
    target: TargetingType = 'all';
    placeToGoAfterUnlock = Pages.Home;
    mpCost = 10;
    action = (_: Monster, monsters: Monster[]) => {
      monsters.forEach((monster) => monster.takeDamage(20));

      return `Icebeam does 20 ice damage to all enemies`;
    };
  }

  export class BlindingLight extends Spell {
    target: TargetingType = 'all';
    placeToGoAfterUnlock = Pages.Home;
    mpCost = 8;
    action = (_: Monster, monsters: Monster[]) => {
      monsters.forEach((monster) => {
        if (monster.name === 'Demon Lord') {
          monster.hp = 1000;
          this.combatLogService.addLine(
            'The Demon Lord is weakend by the light'
          );
        }
      });
      monsters.forEach((monster) => monster.giveStatus('blinded'));

      return `All the enemies become blinded`;
    };
  }
}
