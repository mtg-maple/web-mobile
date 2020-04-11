import { IESLegalities } from 'src/models';
import { InfoListItem } from 'src/components/molecules/InfoList';

export const getLegalitiesItems = (legalities: IESLegalities): InfoListItem[] => {
  let legalFormats: string[] = [];
  let restrictedFormats: string[] = [];
  let bannedFormats: string[] = [];
  const assign = (legality: string | undefined, formatName: string): void => {
    if(legality === 'Legal') {
      legalFormats.push(formatName);
    } else if(legality === 'Restricted') {
      restrictedFormats.push(formatName);
    } else if (legality === 'Banned') {
      bannedFormats.push(formatName);
    }
  };
  assign(legalities.standard, 'Standard');
  assign(legalities.pioneer, 'Pioneer');
  assign(legalities.modern, 'Modern');
  assign(legalities.legacy, 'Legacy');
  assign(legalities.vintage, 'Vintage');
  assign(legalities.historic, 'Historic');
  assign(legalities.brawl, 'Brawl');
  assign(legalities.commander, 'Commander');
  assign(legalities.duel, 'Duel');
  assign(legalities.future, 'Future');
  assign(legalities.frontier, 'Frontier');
  assign(legalities.pauper, 'Pauper');
  assign(legalities.penny, 'Penny');
  let legalitiesItems: InfoListItem[] = [];
  if (legalFormats.length > 0) {
    legalitiesItems.push({ label: 'Legal Formats', description: legalFormats });
  }
  if (restrictedFormats.length > 0) {
    legalitiesItems.push({ label: 'Restricted Formats', description: restrictedFormats });
  }
  if (bannedFormats.length > 0) {
    legalitiesItems.push({ label: 'Banned Formats', description: bannedFormats });
  }
  return legalitiesItems;
};
