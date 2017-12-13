import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import DamageDone from 'Parser/Core/Modules/DamageDone';
import Abilities from './Modules/Features/Abilities';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';

class CombatLogParser extends CoreCombatLogParser {

  static specModules = {
    // Normalizers
    damageDone: [DamageDone, {showStatistic: true}],

    // Features
    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownThroughputTracker: CooldownThroughputTracker,

    // Add these maybe?

    // Talents

    // Traits

    // Items
  };

}

export default CombatLogParser;
