import { IESLegalities } from 'src/models';

import { getLegalitiesItems } from './legalities';

const legalities: IESLegalities = {
  brawl: 'Legal',
  commander: 'Restricted',
  duel: 'Legal',
  future: 'Restricted',
  frontier: 'Banned',
  historic: 'Banned',
  legacy: 'Legal',
  modern: 'Legal',
  pauper: 'Banned',
  penny: 'Banned',
  pioneer: 'Banned',
  standard: 'Banned',
  vintage: 'Legal',
};

describe('getLegalitiesItems', () => {
  it('toMatchObject', () => {
    expect(getLegalitiesItems(legalities)).toMatchObject([
      { label: 'Legal Formats', description: ['Modern', 'Legacy', 'Vintage', 'Brawl', 'Duel'] },
      { label: 'Restricted Formats', description: ['Commander', 'Future'] },
      { label: 'Banned Formats', description: ['Standard', 'Pioneer', 'Historic', 'Frontier', 'Pauper', 'Penny'] },
    ]);
  })
});
