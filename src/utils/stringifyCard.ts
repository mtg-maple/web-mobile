export const stringifyCardTypes = (supertypes: string[], types: string[], subtypes: string[]) => {
  let left: string[] = [];
  if (supertypes.length > 0) {
    left = supertypes.concat(types);
  } else {
    left = [...types];
  }
  return left.join(' ') + (subtypes.length > 0 ?  ` - ${subtypes.join(' ')}` : '');
};
