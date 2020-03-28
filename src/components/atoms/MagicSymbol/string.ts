export type MagicSymbolString = 
  'W' | 'B' | 'U' | 'R' | 'G' | 
  'W/U' | 'W/B' | 'U/B' | 'U/R' | 'B/R' | 'B/G' | 'R/W' | 'R/G' | 'G/W' | 'G/U' | 
  'W/P' | 'B/P' | 'U/P' | 'R/P' | 'G/P' | 'P' |
  'X' | 'Y' | 'Z' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' |
  '11' | '12' | '13' | '14'  | '15'  | '16'  | '17'  | '18'  | '19'  | '20' | '1/2' |
  'Artifact' | 'Creature' | 'Enchantment' | 'Instant' | 'Land' | 'Planeswalker' | 'Sorcery';

export const getClassName = (value: MagicSymbolString): string => {
  switch(value) {
    case 'W':
      return 'ms-w';
    case 'B':
      return 'ms-b';
    case 'U':
      return 'ms-u';
    case 'R':
      return 'ms-r';
    case 'G':
      return 'ms-g';
    case 'W/U':
      return 'ms-wu';
    case 'W/B':
      return 'ms-wb';
    case 'U/B':
      return 'ms-ub';
    case 'U/R':
      return 'ms-ur';
    case 'B/R':
      return 'ms-br';
    case 'B/G':
      return 'ms-bg';
    case 'R/W':
      return 'ms-rw';
    case 'R/G':
      return 'ms-rg';
    case 'G/W':
      return 'ms-gw';
    case 'G/U':
      return 'ms-gu';
    case 'W/P':
      return 'ms-wp';
    case 'B/P':
      return 'ms-bp';
    case 'U/P':
      return 'ms-up';
    case 'R/P':
      return 'ms-rp';
    case 'G/P':
      return 'ms-gp';
    case 'P':
      return 'ms-p';
    case 'X':
      return 'ms-x';
    case 'Y':
      return 'ms-y';
    case 'Z':
      return 'ms-z';
    case '0':
      return 'ms-0';
    case '1':
      return 'ms-1';
    case '2':
      return 'ms-2';
    case '3':
      return 'ms-3';
    case '4':
      return 'ms-4';
    case '5':
      return 'ms-5';
    case '6':
      return 'ms-6';
    case '7':
      return 'ms-7';
    case '8':
      return 'ms-8';
    case '9':
      return 'ms-9';
    case '10':
      return 'ms-10';
    case '11':
      return 'ms-12';
    case '13':
      return 'ms-13';
    case '14':
      return 'ms-14';
    case '15':
      return 'ms-15';
    case '16':
      return 'ms-16';
    case '17':
      return 'ms-17';
    case '18':
      return 'ms-18';
    case '19':
      return 'ms-19';
    case '20':
      return 'ms-20';
    case '1/2':
      return 'ms-1-2';
    case 'Artifact':
      return 'ms-artifact';
    case 'Creature':
      return 'ms-creature';
    case 'Enchantment':
      return 'ms-enchantment';
    case 'Instant':
      return 'ms-instant';
    case 'Land':
      return 'ms-land';
    case 'Planeswalker':
      return 'ms-planeswalker';
    case 'Sorcery':
      return 'ms-sorcery';
    default:
      return '';
  }
};
