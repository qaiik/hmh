//CRID == Current Response id
//Q == Question
//RID == Response id
//RIND == Response index
//MCQ == Multiple Choice Question

function visualize(raw) {
    // Stringify the JSON data
    // Open a new tab
    const newTab = window.open('', '_blank');

    // Set the document's innerText to the stringified data
    newTab.document.body.innerText = raw;
}





const get1f = _ => LearnosityAssess.getCurrentItem().questions[0].validation.valid_response
const get1 = _ => LearnosityAssess.getCurrentItem().questions[0].validation.valid_response
const get2 = _ => LearnosityAssess.getCurrentItem().questions[1].validation.valid_response

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

function getULo(crid) {
  document.getElementById(crid).querySelector(`.lrn_response_wrapper > .lrn_response > div:nth-child(3) > .lrn-response-validate-wrapper > ul`)
}

function getUL(crid) {
  return Array.from(document.getElementsByClassName('lrn_mcqgroup lrn_mcqgroup-horizontal')).filter(n => n.parentNode.parentNode.innerHTML.includes(crid))[0]
}
function processMCQ(q, crid) {
    if (q.type !== "mcq") return
    // let crid = LearnosityAssess.getCurrentItem().response_ids[0]
    // let q = LearnosityAssess.getQuestions()[crid];
    let answers = []
    let indices = q.validation.valid_response.value.map(Number);
    let answerUl = getUL(crid);
    let answerChildren = Array.from(answerUl.children);
    indices.forEach(i => {
        answers.push(q.options[i].label)
    })
    
    visualize(answers.join("\n"))

    // LearnosityAssess.validateQuestions();
}

function processN(q, crid) {
    // let crid = LearnosityAssess.getCurrentItem().response_ids[0]
    // let q = LearnosityAssess.getQuestions()[crid];
    // let answers = q.validation.valid_response.value.map(n => n[0].value)
    let answer;
    if (window.RIND) answer = get2(); 
    if (window.RIND == 0) answer = (get1() || get1f())
    visualize(JSON.stringify(answer, null, 2))

    // LearnosityAssess.validateQuestions();
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
      break
    case "KeyN":
        processN(q,c)
        break
    case "KeyV":
          LearnosityAssess.validateQuestions();
          break
    case "KeyR":
          updateRIND();
          break
  }
})
