/**
 * @param {Array} scores
 * @param {number} newScore
 */
function setScore(scores, newScore) {
  scores.push(newScore);
}
/**
 * @param {Array} scores
 * @return {Array}
 */
function getScores(scores) {
  return scores;
}
/**
 * @param {Array} scores
 * @return {number}
 */
function latest(scores) {
  return scores[scores.length - 1];
}
/**
 * @param {Array} scores
 * @return {number[]}
 */
function highest(scores) {
  return Math.max(...scores);
}
/**
 * @param {Array} scores
 * @return {number[]}
 */
function topThree(scores) {
  const tempScores = [...scores];
  tempScores.sort((a, b) => b - a);
  return tempScores.slice(0, 3);
}

module.exports = { setScore, getScores, latest, highest, topThree };
