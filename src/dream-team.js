module.exports = function createDreamTeam(members) {
  if (!members || !members[0]) return false;
  let output = [];
  for(let i = 0; i < members.length; i++){
    if (typeof members[i] == 'string'){
      output.push(members[i].trim()[0].toUpperCase());
    }
  }
  output.sort();
  return output.reduce((first, second) => first + second);
};
