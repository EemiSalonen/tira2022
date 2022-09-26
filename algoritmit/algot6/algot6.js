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
  const s1Substrs = new Set(getAllSubstrs(s1));
  const s2Substrs = new Set(getAllSubstrs(s2));
  const intersection = new Set();

  s1Substrs.forEach((value) => {
    if (s2Substrs.has(value)) {
      intersection.add(value);
    }
  });

  let longestSubString = '';
  intersection.forEach((value) => {
    if (value.length > longestSubString.length) {
      longestSubString = value;
    }
  });
  return longestSubString;
}

function genString(charset, n) {
  let string = '';

  for (let j = 0; j < n; j++) {
    string += charset[Math.floor(Math.random() * charset.length - 1) + 1];
  }

  return string;
}

console.log(
  findLcsBrute(
    genString(['A', 'B', 'C', 'D'], 1000),
    genString(['A', 'B', 'C', 'D'], 1000)
  )
);
module.exports = { getAllSubstrs, findLcsBrute, genString };
