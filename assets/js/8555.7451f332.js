"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8555],{8555:(t,e,r)=>{r.r(e),r.d(e,{a:()=>o,m:()=>s});var n=r(412),a=Object.defineProperty,c=(t,e)=>a(t,"name",{value:e,configurable:!0});function i(t,e){return e.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(r){if("default"!==r&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}))})),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}c(i,"_mergeNamespaces");var o={exports:{}};!function(t){var e=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),r=t.Pos,n={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function a(t){return t&&t.bracketRegex||/[(){}[\]]/}function i(t,e,c){var i=t.getLineHandle(e.line),s=e.ch-1,l=c&&c.afterCursor;null==l&&(l=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var h=a(c),u=!l&&s>=0&&h.test(i.text.charAt(s))&&n[i.text.charAt(s)]||h.test(i.text.charAt(s+1))&&n[i.text.charAt(++s)];if(!u)return null;var f=">"==u.charAt(1)?1:-1;if(c&&c.strict&&f>0!=(s==e.ch))return null;var g=t.getTokenTypeAt(r(e.line,s+1)),m=o(t,r(e.line,s+(f>0?1:0)),f,g,c);return null==m?null:{from:r(e.line,s),to:m&&m.pos,match:m&&m.ch==u.charAt(0),forward:f>0}}function o(t,e,c,i,o){for(var s=o&&o.maxScanLineLength||1e4,l=o&&o.maxScanLines||1e3,h=[],u=a(o),f=c>0?Math.min(e.line+l,t.lastLine()+1):Math.max(t.firstLine()-1,e.line-l),g=e.line;g!=f;g+=c){var m=t.getLine(g);if(m){var d=c>0?0:m.length-1,k=c>0?m.length:-1;if(!(m.length>s))for(g==e.line&&(d=e.ch-(c<0?1:0));d!=k;d+=c){var p=m.charAt(d);if(u.test(p)&&(void 0===i||(t.getTokenTypeAt(r(g,d+1))||"")==(i||""))){var v=n[p];if(v&&">"==v.charAt(1)==c>0)h.push(p);else{if(!h.length)return{pos:r(g,d),ch:p};h.pop()}}}}}return g-c!=(c>0?t.lastLine():t.firstLine())&&null}function s(t,n,a){for(var o=t.state.matchBrackets.maxHighlightLineLength||1e3,s=a&&a.highlightNonMatching,l=[],h=t.listSelections(),u=0;u<h.length;u++){var f=h[u].empty()&&i(t,h[u].head,a);if(f&&(f.match||!1!==s)&&t.getLine(f.from.line).length<=o){var g=f.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";l.push(t.markText(f.from,r(f.from.line,f.from.ch+1),{className:g})),f.to&&t.getLine(f.to.line).length<=o&&l.push(t.markText(f.to,r(f.to.line,f.to.ch+1),{className:g}))}}if(l.length){e&&t.state.focused&&t.focus();var m=c((function(){t.operation((function(){for(var t=0;t<l.length;t++)l[t].clear()}))}),"clear");if(!n)return m;setTimeout(m,800)}}function l(t){t.operation((function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=s(t,!1,t.state.matchBrackets)}))}function h(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}c(a,"bracketRegex"),c(i,"findMatchingBracket"),c(o,"scanForBracket"),c(s,"matchBrackets"),c(l,"doMatchBrackets"),c(h,"clearHighlighted"),t.defineOption("matchBrackets",!1,(function(e,r,n){n&&n!=t.Init&&(e.off("cursorActivity",l),e.off("focus",l),e.off("blur",h),h(e)),r&&(e.state.matchBrackets="object"==typeof r?r:{},e.on("cursorActivity",l),e.on("focus",l),e.on("blur",h))})),t.defineExtension("matchBrackets",(function(){s(this,!0)})),t.defineExtension("findMatchingBracket",(function(t,e,r){return(r||"boolean"==typeof e)&&(r?(r.strict=e,e=r):e=e?{strict:!0}:null),i(this,t,e)})),t.defineExtension("scanForBracket",(function(t,e,r,n){return o(this,t,e,r,n)}))}(n.a.exports);var s=i({__proto__:null,default:o.exports},[o.exports])}}]);