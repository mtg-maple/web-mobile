import { 
  IDeck,
  IResponse,
  IDeckRecord,
  ICardRecord,
} from '../models';

import DummyDB from './dummy.json';

export type IDeckResult = {
  data: IDeck;
};

const getDeck = async (deckId: string): Promise<IResponse<IDeckResult>>  => {
  return new Promise<IResponse<IDeckResult>>((resolve, reject) => {
    const decks = DummyDB.decks as IDeckRecord[];
    const deck = decks.find((deck: IDeckRecord) => deck.id === deckId);
    if (typeof deck === 'undefined') {
      reject(`deck not found: ${deckId}`);
    } else {
      const cards = DummyDB.cards as ICardRecord[];
      type DeckCard = { count: number; cardId: string };
      const createDeckCard = (deckCard: DeckCard) => {
        const card = cards.find((card: ICardRecord) => card.id === deckCard.cardId);
        if (typeof card === 'undefined') {
          throw new Error(`card not found: ${deckCard.cardId}`);
        } else {
          return {
            id: deckCard.cardId,
            count: deckCard.count,
            name: card.name,
            thumbnailImageUrl: `https://img.scryfall.com/cards/art_crop/front/${card.scryfallId.slice(0,1)}/${card.scryfallId.slice(1,2)}/${card.scryfallId}.jpg`,
            colors: typeof card.colors === 'undefined' ? [] : card.colors.split(','),
            types: card.types.split(','),
            type: card.type,
            power: card.power,
            toughness: card.toughness,
            convertedManaCost: card.convertedManaCost,
          }
        }
      };
      try {
        const mainboard = deck.mainboard.map(createDeckCard);
        const sideboard = deck.sideboard.map(createDeckCard);
        setTimeout(() => {
          resolve({
            status: 200,
            result: {
              data: {
                id: deck.id,
                name: deck.name,
                description: deck.description,
                thumbnailImageUrl: deck.thumbnailImageUrl,
                colors: deck.colors,
                mainboard,
                sideboard,
              }
            }
          });
        }, 500);
      } catch(e) {
        reject(e.message);
      }
    }
  });
};

export default getDeck;
