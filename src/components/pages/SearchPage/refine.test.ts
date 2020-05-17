import { ICard, IServiceCardSummary } from 'src/models';

import { refineServiceCards } from './refine';

const cases: {name: string; input: IServiceCardSummary[], expectedOutput: ICard[]}[] = [{
  name: 'normal',
  input: [
    {
      "id": "33dca2c9-963b-5ace-82e4-e512d66fc696",
      "name": "Oko, the Trickster",
      "manaCost": "{4}{G}{U}",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Oko"
      ],
      "loyalty": "4",
      "previewImageUrl": "https://img.scryfall.com/cards/large/front/8/3/83e61813-c4c8-4e80-8808-ac5107966ee3.jpg",
      "artCropImageUrl": "https://img.scryfall.com/cards/art_crop/front/8/3/83e61813-c4c8-4e80-8808-ac5107966ee3.jpg",
      "layout": "normal",
    },
    {
      "id": "7998ef11-85d3-5280-b880-bd8b3a896e66",
      "name": "Oko, Thief of Crowns",
      "manaCost": "{1}{G}{U}",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Oko"
      ],
      "loyalty": "4",
      "previewImageUrl": "https://img.scryfall.com/cards/large/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.jpg",
      "artCropImageUrl": "https://img.scryfall.com/cards/art_crop/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.jpg",
      "layout": "normal",
    },
    {
      "id": "202c6f3d-2094-516d-bd3e-1c3e7d16be3e",
      "name": "Oko, Thief of Crowns",
      "manaCost": "{1}{G}{U}",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Oko"
      ],
      "loyalty": "4",
      "previewImageUrl": "https://img.scryfall.com/cards/large/front/9/5/95da027e-34c1-4098-827d-1647693ad8f4.jpg",
      "artCropImageUrl": "https://img.scryfall.com/cards/art_crop/front/9/5/95da027e-34c1-4098-827d-1647693ad8f4.jpg",
      "layout": "normal",
    }
  ],
  expectedOutput: [
    {
      "id": "33dca2c9-963b-5ace-82e4-e512d66fc696",
      "name": "Oko, the Trickster",
      "manaCost": "{4}{G}{U}",
      "type": 'Legendary Planeswalker - Oko',
      "types": [
        "Planeswalker"
      ],
      "loyalty": "4",
      "thumbnailImageUrl": "https://img.scryfall.com/cards/art_crop/front/8/3/83e61813-c4c8-4e80-8808-ac5107966ee3.jpg",
    },
    {
      "id": "7998ef11-85d3-5280-b880-bd8b3a896e66",
      "name": "Oko, Thief of Crowns",
      "manaCost": "{1}{G}{U}",
      "type": 'Legendary Planeswalker - Oko',
      "types": [
        "Planeswalker"
      ],
      "loyalty": "4",
      "thumbnailImageUrl": "https://img.scryfall.com/cards/art_crop/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.jpg",
    },
    {
      "id": "202c6f3d-2094-516d-bd3e-1c3e7d16be3e",
      "name": "Oko, Thief of Crowns",
      "manaCost": "{1}{G}{U}",
      "type": 'Legendary Planeswalker - Oko',
      "types": [
        "Planeswalker"
      ],
      "loyalty": "4",
      "thumbnailImageUrl": "https://img.scryfall.com/cards/art_crop/front/9/5/95da027e-34c1-4098-827d-1647693ad8f4.jpg",
    }
  ],
}];

describe('refine', (): void => {
  cases.forEach((c): void => {
    it(c.name, (): void => {
      expect(refineServiceCards(c.input)).toMatchObject(c.expectedOutput);
    });
  });
});
