!function(){
    //HACKLIB definitions

    //Hacklib remove space using zero functions

    //hacklib_string
    function __hls(f) {
      if (typeof f !== "function") return null;
      return "" + f;
    }

    //hacklib_removespace
    function __hlRS(t){
      let ss = ""
      for (const c of t) {
          if (c != " ") ss += c
      }
      return ss
    }

  
    function __hlCI(l, i) {
      if (i >= 0) return i; else return l - (i < 0 ? -i : i)
    }
    //hacklib_slice
    function __hlSlice(string, start, end) {
      let ss = ""
      for (let i = start; i < string.length; i++) {
        if (i > end) {} else ss += string[__hlCI(string.length, i)];
      }
      return ss
    }

    function __hlTSE(s, t) {
      let partition = "";
      for (let i = s.length - t.length; i < s.length; i++) {
         partition += i;
      }
      return s == partition;
    }

    //Invalidate if RegExp.prototype.test was modified
    if (__hlRS(__hls(RegExp.prototype.test)) !== 'functiontest(){[nativecode]}') return;
  
    function isNative(fn) {
        return (/\{\s*\[native code\]\s*\}/).test(String(fn));
    }

    function vj(json) {
        const w = window.open()
        w.document.write(`<pre>${JSON.stringify(json, null, 2)}</pre>`)
    }
    vj(LearnosityAssess.getCurrentItem().questions.map(q=>{
        return {validation: q.validation, options: q.options}
    }))
}();
