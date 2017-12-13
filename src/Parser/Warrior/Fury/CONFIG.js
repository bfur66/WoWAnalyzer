import React from 'react';

import { bfur66 } from 'MAINTAINERS';

import SPECS from 'common/SPECS';
import SPEC_ANALYSIS_COMPLETENESS from 'common/SPEC_ANALYSIS_COMPLETENESS';

import CombatLogParser from './CombatLogParser';
import CHANGELOG from './CHANGELOG';

export default {
  spec: SPECS.FURY_WARRIOR,
  // TODO: Make maintainer an array
  maintainers: [bfur66],
  description: (
    <div>
      Hey Angie this is supposed to help you play Fury Warrior better. I have no idea how to play warrior but Nutits does so he is going to tell me what to put in here.
    </div>
  ),
  // good = it matches most common manual reviews in class discords, great = it support all important class features
  completeness: SPEC_ANALYSIS_COMPLETENESS.GREAT,
  specDiscussionUrl: 'https://github.com/WoWAnalyzer/WoWAnalyzer/milestone/2',

  // Shouldn't have to change these:
  changelog: CHANGELOG,
  parser: CombatLogParser,
  // used for generating a GitHub link directly to your spec
  path: __dirname,
};
