let btn = $("#b5da036d-2fd6-498a-9953-48fcda5638cc_fc69fe5af2578d07cbec9ed81cb84eef > div.lrn_response_wrapper > div.lrn_response.lrn_clearfix > button")
let parent = btn.parentNode;
let nn = btn.cloneNode(true);
nn.firstChild.innerText = "Newcheck";
nn.disabled = false;

parent.removeChild(btn);
parent.appendChild(nn);

nn.addEventListener('click', () => {
  LearnosityAssess.validateQuestions();
  nn.disabled = false;
})
