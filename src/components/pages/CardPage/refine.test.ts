import { IServiceCardDetail } from 'src/models';

import { createSpell, refineServiceCard } from './refine';

const serviceCardDummy: IServiceCardDetail = {
  id: '65f2a662-f0ec-5bf2-98a7-eaf50ca0fa04',
  name: 'Expansion',
  names: ['Expansion', 'Explosion'],
  manaCost: '{U/R}{U/R}',
  supertypes: [],
  types: ['Instant'],
  subtypes: [],
  text: 'Copy target instant or sorcery spell with converted mana cost 4 or less. You may choose new targets for the copy.',
  side: 'a',
  previewImageUrl: 'https://img.scryfall.com/cards/large/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.jpg',
  artCropImageUrl: 'https://img.scryfall.com/cards/art_crop/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.jpg',
  otherFaces: [
    {
      id: 'd568ac58-2345-51da-84cc-d4bbac057704',
      name: 'Explosion',
      manaCost: '{X}{U}{U}{R}{R}',
      supertypes: [],
      types: ['Instant'],
      subtypes: [],
      text: 'Explosion deals X damage to any target. Target player draws X cards.',
      side: 'b',
      previewImageUrl: 'https://img.scryfall.com/cards/large/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.jpg',
      artCropImageUrl: 'https://img.scryfall.com/cards/art_crop/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.jpg'
    }
  ],
  layout: 'split',
  rarity: 'rare',
  artist: 'Deruchenko Alexander',
  setCodes: ['GRN', 'PGRN']
}

describe('refine', () => {
  it('createSpell', () => {
    expect(createSpell(serviceCardDummy)).toMatchObject({
      name: 'Expansion',
      manaCost: '{U/R}{U/R}',
      supertypes: [],
      types: ['Instant'],
      subtypes: [],
      text: 'Copy target instant or sorcery spell with converted mana cost 4 or less. You may choose new targets for the copy.',
      side: 'a',
    });
  });

  it('refineServiceCard', () => {
    expect(refineServiceCard(serviceCardDummy)).toMatchObject({
      cardImages: [
        {
          url: 'https://img.scryfall.com/cards/large/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.jpg',
        },
      ],
      cardText: {
        spells: [
          {
            name: 'Expansion',
            manaCost: '{U/R}{U/R}',
            supertypes: [],
            types: ['Instant'],
            subtypes: [],
            text: 'Copy target instant or sorcery spell with converted mana cost 4 or less. You may choose new targets for the copy.',
            side: 'a',
          },
          {
            name: 'Explosion',
            manaCost: '{X}{U}{U}{R}{R}',
            supertypes: [],
            types: ['Instant'],
            subtypes: [],
            text: 'Explosion deals X damage to any target. Target player draws X cards.',
            side: 'b',
          }
        ],
        meta: {
          rarity: 'rare',
          sets: [ 'GRN', 'PGRN' ],
          artist: 'Deruchenko Alexander',
        },
        legalities: {},
      },
    });
  });
});
