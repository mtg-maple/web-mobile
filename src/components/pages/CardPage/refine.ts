import {
  IServiceSpell,
  ICardSpell,
  ICardText,
  ICardImage,
  IServiceCardDetail,
} from 'src/models';

export const createSpell = (serviceSpell: IServiceSpell): ICardSpell => {
  return {
    name: serviceSpell.name,
    manaCost: serviceSpell.manaCost,
    supertypes: serviceSpell.supertypes,
    types: serviceSpell.types,
    subtypes: serviceSpell.subtypes,
    power: serviceSpell.power,
    toughness: serviceSpell.toughness,
    loyalty: serviceSpell.loyalty,
    text: serviceSpell.text,
    side: serviceSpell.side,
  }
};

export const refineServiceCard = (card: IServiceCardDetail): {
  title: string;
  cardText: ICardText;
  cardImages: ICardImage[]
} => {
  const title = typeof card.names === 'undefined' ? card.name : card.names.join(' // ');
  let cardImages = [ { url: card.previewImageUrl } ];
  let spells = [ createSpell(card) ];
  if (Array.isArray(card.otherFaces)) {
    spells = spells.concat(card.otherFaces.map((spell) => createSpell(spell)));
    if (!['adventure', 'split'].includes(card.layout)) {
      cardImages = cardImages.concat(card.otherFaces.map((spell) => ({ url: spell.previewImageUrl })));
    }
  }
  const cardText = {
    spells,
    meta: {
      rarity: card.rarity,
      artist: card.artist,
      sets: card.setCodes,
    },
    legalities: {},
  };
  return { title, cardText, cardImages };
}
