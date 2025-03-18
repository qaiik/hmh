function mcqAnswer(q, crid) {
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
