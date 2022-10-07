/**
 *
 * @param {Array<Set<string>>} coders
 * @return {Set<string>}
 */
function union(coders) {
  const tempSet = new Set();
  for (const coder of coders) {
    coder.forEach((lang) => {
      // Lisää kielet uuteen Settiin, josta luodaan unioni
      tempSet.add(lang);
    });
  }
  return tempSet;
}
/**
 * @param {Set<string>} coders
 * @param {string} language
 * @return {boolean}
 */
function haveCodeSkill(coders, language) {
  if (union(coders).has(language)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { union, haveCodeSkill };
