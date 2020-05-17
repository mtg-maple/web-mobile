import { stringifyCardTypes } from '../utils';

describe('cardType', (): void => {
  const cases = [
    {
      name: 'Legendary Planeswalker - Oko',
      args: {
        supertypes: ['Legendary'], 
        types: ['Planeswalker'], 
        subtypes: ['Oko'],
      },
    },
    {
      name: 'Creature - Faerie Rogue',
      args: {
        supertypes: [], 
        types: ['Creature'], 
        subtypes: ['Faerie', 'Rogue'],
      },
    },
    {
      name: 'Instant',
      args: {
        supertypes: [], 
        types: ['Instant'], 
        subtypes: [],
      },
    },
  ]

  cases.forEach((c) => {
    it(c.name, (): void => {
      expect(stringifyCardTypes(c.args.supertypes, c.args.types, c.args.subtypes)).toBe(c.name);
    });
  });
});
