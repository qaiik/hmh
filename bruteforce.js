function isCorrect(element) {
  return !element.ariaLabel.includes('incorrect')
}

function getChecks() {
  return Array.from(document.querySelectorAll("button")).filter(n => n.className.includes("lrn_validate") && !n.className.includes("invisible") && n.className.includes("lds-btn-secondary"));
}

function getWrappers(checks) {
  return checks.map(n => n.parentElement)
}

function getChildren(e) {
  return Array.from(e.children)
}

function getAnswerElements(w) {
  return w.map(w => getChildren(w).filter(c => c.ariaLabel?.includes("is equal to")))
}
