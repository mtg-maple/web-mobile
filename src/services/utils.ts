export const createThumbnailImageUrl = (scryfallId: string): string => {
  return `https://img.scryfall.com/cards/art_crop/front/${scryfallId.slice(0,1)}/${scryfallId.slice(1,2)}/${scryfallId}.jpg`;
}