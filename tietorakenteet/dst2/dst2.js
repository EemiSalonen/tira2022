/**
 *
 * @param {Map<string,number>} shop
 * @return {number}
 */
function sum(shop) {
  const iterator = shop.values();
  let total = 0;
  // Iteroidaan mapin lävitse
  for (let i = 0; i < shop.size; i++) {
    const value = iterator.next().value;
    // Varmistaa ettei suoriteta operaatioita merkkijonoille yms
    if (typeof value === 'number') {
      total += value;
    }
  }
  return total;
}
/**
 *
 * @param {string} key
 * @param  {...Map<string,number>} shops
 * @return {Map<string,number>}
 */
function createSumMap(key, ...shops) {
  const tempMap = new Map();
  const tempShops = [...shops];
  tempShops.forEach((map) => {
    const total = sum(map);
    const name = map.get(key);
    tempMap.set(name, total);
  });
  return tempMap;
}
/**
 *
 * @param {Map<string, number>} mapX
 * @return {Map<string, number>}
 */
function minValueMap(mapX) {
  const tempMap = new Map();
  let currentLow = Number.MAX_SAFE_INTEGER;
  let currentKey;
  mapX.forEach((value, key) => {
    // Käy lävitse Mapin arvot ja etsii pienimmän arvon sijoittamalla sen muuttujaan
    if (value < currentLow) {
      currentLow = value;
      currentKey = key;
    }
  });
  tempMap.set(currentKey, currentLow);
  return tempMap;
}

module.exports = { minValueMap, createSumMap, sum };
