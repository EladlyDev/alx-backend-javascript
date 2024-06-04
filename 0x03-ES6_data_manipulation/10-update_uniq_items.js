export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  Array.from(map).forEach(([k, v]) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });

  return map;
}
