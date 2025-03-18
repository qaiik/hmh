//CRID == Current Response id
//Q == Question
//RID == Response id
//RIND == Response index
//MCQ == Multiple Choice Question

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

function processMCQ(q, crid) {
    // let crid = LearnosityAssess.getCurrentItem().response_ids[0]
    // let q = LearnosityAssess.getQuestions()[crid];
    let indices = q.validation.valid_response.value.map((n, i) => i);
    let answerUl = document.querySelector(`#${crid} > div.lrn_response_wrapper > div.lrn_response.lrn_clearfix > div:nth-child(3) > div.lrn-response-validate-wrapper > ul`)
    let answerChildren = Array.from(answerUl.children);

    for (let i = 0; i < indices.length; i++) {
        answerChildren[i].firstChild.click()
    }

    LearnosityAssess.validateQuestions();
}


function getInfo(responseNumber) {
  const crid = Utils.getCRID(responseNumber);
  return [Utils.getQ(crid), crid]
};


document.addEventListener("keyup", k => {
  let [q,c] = getInfo(RIND);
  switch(k.code) {
    case "KeyM":
      processMCQ(q,c);
  }
})
