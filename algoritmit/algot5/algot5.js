function getAllSubstrs(str) {
  const subStrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      if (i >= j) j = i + 1;
      subStrings.push(str.slice(i, j));
    }
  }
  return subStrings;
}

function findLcsBrute(s1, s2) {
  const s1Substrs = getAllSubstrs(s1);
  const s2Substrs = getAllSubstrs(s2);
  const commonSubstrs = [];

  for (const str1 of s1Substrs) {
    for (const str2 of s2Substrs) {
      if (str1 === str2) {
        commonSubstrs.push(str1);
      }
    }
  }

  let longestCommon = commonSubstrs[0];
  for (const str of commonSubstrs) {
    if (str.length > longestCommon.length) {
      longestCommon = str;
    }
  }

  return longestCommon;
}

function genString(charset, n) {
  let string = '';

  for (let j = 0; j < n; j++) {
    string += charset[Math.floor(Math.random() * charset.length - 1) + 1];
  }

  return string;
}

module.exports = { getAllSubstrs, findLcsBrute, genString };
