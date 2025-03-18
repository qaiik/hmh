//CRID == Current Response id
//Q == Question
//RID == Response id
//RIND == Response index
window.RIND = 0;
let Utils = {
  getCRID: function(n) {
    return LearnosityAssess.getCurrentItem().response_ids[n];
  },

  getQ: function(crid) {
    return LearnosityAssess.getQuestions()[crid];
  }
};

function updateRIND() {
  window.RIND = Number(prompt("rind"))
}


function getInfo(responseNumber) {
  const crid = Utils.getCRID(responseNumber);
  return [Utils.getQ(crid), crid]
};
