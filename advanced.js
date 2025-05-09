!function(){
    //HACKLIB definitions

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

  
    //hacklib_teststringendswith
    function __hlTSE(s, t) {
        if (t.length > s.length) return false;
        
        let partition = "";
        for (let i = s.length - t.length; i < s.length; i++) {
            partition += s[i];
          }
        return t == partition;
    }

    //Invalidate if RegExp.prototype.test was modified
  
    function isNative(fn) {
        return __hlTSE(__hlRS(__hls(fn)),'{[nativecode]}')
    }

    function vj(json) {
        if (!isNative(open)) return

        const w = window.open()
        if (!isNative(w.document.write)) return;
        if (!isNative(JSON.stringify)) return;
        w.document.write(`<pre>${JSON.stringify(json, null, 2)}</pre>`)
    }
    if (!isNative(Array.prototype.map)) return
    vj(LearnosityAssess.getCurrentItem().questions.map(q=>{
        return {validation: q.validation, options: q.options}
    }))
}();
