"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3307,4282,7470],{4282:(e,t,n)=>{n.r(t),n.d(t,{a:()=>a,m:()=>s});var r=n(3776),o=Object.defineProperty,i=(e,t)=>o(e,"name",{value:t,configurable:!0});function l(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(l,"_mergeNamespaces");var a={exports:{}};!function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function o(e){return e&&e.bracketRegex||/[(){}[\]]/}function l(e,t,i){var l=e.getLineHandle(t.line),s=t.ch-1,c=i&&i.afterCursor;null==c&&(c=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));var f=o(i),u=!c&&s>=0&&f.test(l.text.charAt(s))&&r[l.text.charAt(s)]||f.test(l.text.charAt(s+1))&&r[l.text.charAt(++s)];if(!u)return null;var h=">"==u.charAt(1)?1:-1;if(i&&i.strict&&h>0!=(s==t.ch))return null;var d=e.getTokenTypeAt(n(t.line,s+1)),g=a(e,n(t.line,s+(h>0?1:0)),h,d,i);return null==g?null:{from:n(t.line,s),to:g&&g.pos,match:g&&g.ch==u.charAt(0),forward:h>0}}function a(e,t,i,l,a){for(var s=a&&a.maxScanLineLength||1e4,c=a&&a.maxScanLines||1e3,f=[],u=o(a),h=i>0?Math.min(t.line+c,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-c),d=t.line;d!=h;d+=i){var g=e.getLine(d);if(g){var m=i>0?0:g.length-1,p=i>0?g.length:-1;if(!(g.length>s))for(d==t.line&&(m=t.ch-(i<0?1:0));m!=p;m+=i){var C=g.charAt(m);if(u.test(C)&&(void 0===l||(e.getTokenTypeAt(n(d,m+1))||"")==(l||""))){var v=r[C];if(v&&">"==v.charAt(1)==i>0)f.push(C);else{if(!f.length)return{pos:n(d,m),ch:C};f.pop()}}}}}return d-i!=(i>0?e.lastLine():e.firstLine())&&null}function s(e,r,o){for(var a=e.state.matchBrackets.maxHighlightLineLength||1e3,s=o&&o.highlightNonMatching,c=[],f=e.listSelections(),u=0;u<f.length;u++){var h=f[u].empty()&&l(e,f[u].head,o);if(h&&(h.match||!1!==s)&&e.getLine(h.from.line).length<=a){var d=h.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";c.push(e.markText(h.from,n(h.from.line,h.from.ch+1),{className:d})),h.to&&e.getLine(h.to.line).length<=a&&c.push(e.markText(h.to,n(h.to.line,h.to.ch+1),{className:d}))}}if(c.length){t&&e.state.focused&&e.focus();var g=i((function(){e.operation((function(){for(var e=0;e<c.length;e++)c[e].clear()}))}),"clear");if(!r)return g;setTimeout(g,800)}}function c(e){e.operation((function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=s(e,!1,e.state.matchBrackets)}))}function f(e){e.state.matchBrackets&&e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null)}i(o,"bracketRegex"),i(l,"findMatchingBracket"),i(a,"scanForBracket"),i(s,"matchBrackets"),i(c,"doMatchBrackets"),i(f,"clearHighlighted"),e.defineOption("matchBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",c),t.off("focus",c),t.off("blur",f),f(t)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",c),t.on("focus",c),t.on("blur",f))})),e.defineExtension("matchBrackets",(function(){s(this,!0)})),e.defineExtension("findMatchingBracket",(function(e,t,n){return(n||"boolean"==typeof t)&&(n?(n.strict=t,t=n):t=t?{strict:!0}:null),l(this,e,t)})),e.defineExtension("scanForBracket",(function(e,t,n,r){return a(this,e,t,n,r)}))}(r.a.exports);var s=l({__proto__:null,default:a.exports},[a.exports])},7470:(e,t,n)=>{n.r(t),n.d(t,{a:()=>a,s:()=>s});var r=n(3776),o=Object.defineProperty,i=(e,t)=>o(e,"name",{value:t,configurable:!0});function l(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(l,"_mergeNamespaces");var a={exports:{}};!function(e){var t,n,r=e.Pos;function o(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function l(e,t){for(var n=o(e),r=n,i=0;i<t.length;i++)-1==r.indexOf(t.charAt(i))&&(r+=t.charAt(i));return n==r?e:new RegExp(e.source,r)}function a(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function s(e,t,n){t=l(t,"g");for(var o=n.line,i=n.ch,a=e.lastLine();o<=a;o++,i=0){t.lastIndex=i;var s=e.getLine(o),c=t.exec(s);if(c)return{from:r(o,c.index),to:r(o,c.index+c[0].length),match:c}}}function c(e,t,n){if(!a(t))return s(e,t,n);t=l(t,"gm");for(var o,i=1,c=n.line,f=e.lastLine();c<=f;){for(var u=0;u<i&&!(c>f);u++){var h=e.getLine(c++);o=null==o?h:o+"\n"+h}i*=2,t.lastIndex=n.ch;var d=t.exec(o);if(d){var g=o.slice(0,d.index).split("\n"),m=d[0].split("\n"),p=n.line+g.length-1,C=g[g.length-1].length;return{from:r(p,C),to:r(p+m.length-1,1==m.length?C+m[0].length:m[m.length-1].length),match:d}}}}function f(e,t,n){for(var r,o=0;o<=e.length;){t.lastIndex=o;var i=t.exec(e);if(!i)break;var l=i.index+i[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=i),o=i.index+1}return r}function u(e,t,n){t=l(t,"g");for(var o=n.line,i=n.ch,a=e.firstLine();o>=a;o--,i=-1){var s=e.getLine(o),c=f(s,t,i<0?0:s.length-i);if(c)return{from:r(o,c.index),to:r(o,c.index+c[0].length),match:c}}}function h(e,t,n){if(!a(t))return u(e,t,n);t=l(t,"gm");for(var o,i=1,s=e.getLine(n.line).length-n.ch,c=n.line,h=e.firstLine();c>=h;){for(var d=0;d<i&&c>=h;d++){var g=e.getLine(c--);o=null==o?g:g+"\n"+o}i*=2;var m=f(o,t,s);if(m){var p=o.slice(0,m.index).split("\n"),C=m[0].split("\n"),v=c+p.length,S=p[p.length-1].length;return{from:r(v,S),to:r(v+C.length-1,1==C.length?S+C[0].length:C[C.length-1].length),match:m}}}}function d(e,t,n,r){if(e.length==t.length)return n;for(var o=0,i=n+Math.max(0,e.length-t.length);;){if(o==i)return o;var l=o+i>>1,a=r(e.slice(0,l)).length;if(a==n)return l;a>n?i=l:o=l+1}}function g(e,o,i,l){if(!o.length)return null;var a=l?t:n,s=a(o).split(/\r|\n\r?/);e:for(var c=i.line,f=i.ch,u=e.lastLine()+1-s.length;c<=u;c++,f=0){var h=e.getLine(c).slice(f),g=a(h);if(1==s.length){var m=g.indexOf(s[0]);if(-1==m)continue e;return i=d(h,g,m,a)+f,{from:r(c,d(h,g,m,a)+f),to:r(c,d(h,g,m+s[0].length,a)+f)}}var p=g.length-s[0].length;if(g.slice(p)==s[0]){for(var C=1;C<s.length-1;C++)if(a(e.getLine(c+C))!=s[C])continue e;var v=e.getLine(c+s.length-1),S=a(v),k=s[s.length-1];if(S.slice(0,k.length)==k)return{from:r(c,d(h,g,p,a)+f),to:r(c+s.length-1,d(v,S,k.length,a))}}}}function m(e,o,i,l){if(!o.length)return null;var a=l?t:n,s=a(o).split(/\r|\n\r?/);e:for(var c=i.line,f=i.ch,u=e.firstLine()-1+s.length;c>=u;c--,f=-1){var h=e.getLine(c);f>-1&&(h=h.slice(0,f));var g=a(h);if(1==s.length){var m=g.lastIndexOf(s[0]);if(-1==m)continue e;return{from:r(c,d(h,g,m,a)),to:r(c,d(h,g,m+s[0].length,a))}}var p=s[s.length-1];if(g.slice(0,p.length)==p){var C=1;for(i=c-s.length+1;C<s.length-1;C++)if(a(e.getLine(i+C))!=s[C])continue e;var v=e.getLine(c+1-s.length),S=a(v);if(S.slice(S.length-s[0].length)==s[0])return{from:r(c+1-s.length,d(v,S,v.length-s[0].length,a)),to:r(c,d(h,g,p.length,a))}}}}function p(e,t,n,o){var i;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof o?i=o.caseFold:(i=o,o=null),"string"==typeof t?(null==i&&(i=!1),this.matches=function(n,r){return(n?m:g)(e,t,r,i)}):(t=l(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?u:s)(e,t,r)}:this.matches=function(n,r){return(n?h:c)(e,t,r)})}i(o,"regexpFlags"),i(l,"ensureFlags"),i(a,"maybeMultiline"),i(s,"searchRegexpForward"),i(c,"searchRegexpForwardMultiline"),i(f,"lastMatchIn"),i(u,"searchRegexpBackward"),i(h,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=i((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=i((function(e){return e.normalize("NFD")}),"noFold")):(t=i((function(e){return e.toLowerCase()}),"doFold"),n=i((function(e){return e}),"noFold")),i(d,"adjustPos"),i(g,"searchStringForward"),i(m,"searchStringBackward"),i(p,"SearchCursor"),p.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var o=this.matches(t,n);if(this.afterEmptyMatch=o&&0==e.cmpPos(o.from,o.to),o)return this.pos=o,this.atOccurrence=!0,this.pos.match||!0;var i=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:i,to:i},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var o=e.splitLines(t);this.doc.replaceRange(o,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new p(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new p(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],o=this.getSearchCursor(t,this.getCursor("from"),n);o.findNext()&&!(e.cmpPos(o.to(),this.getCursor("to"))>0);)r.push({anchor:o.from(),head:o.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var s=l({__proto__:null,default:a.exports},[a.exports])},3307:(e,t,n)=>{n.r(t),n.d(t,{s:()=>f});var r=n(3776),o=n(7470),i=n(4282),l=Object.defineProperty,a=(e,t)=>l(e,"name",{value:t,configurable:!0});function s(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(s,"_mergeNamespaces");var c={exports:{}};!function(e){var t=e.commands,n=e.Pos;function r(t,r,o){if(o<0&&0==r.ch)return t.clipPos(n(r.line-1));var i=t.getLine(r.line);if(o>0&&r.ch>=i.length)return t.clipPos(n(r.line+1,0));for(var l,a="start",s=r.ch,c=s,f=o<0?0:i.length,u=0;c!=f;c+=o,u++){var h=i.charAt(o<0?c-1:c),d="_"!=h&&e.isWordChar(h)?"w":"o";if("w"==d&&h.toUpperCase()==h&&(d="W"),"start"==a)"o"!=d?(a="in",l=d):s=c+o;else if("in"==a&&l!=d){if("w"==l&&"W"==d&&o<0&&c--,"W"==l&&"w"==d&&o>0){if(c==s+1){l="w";continue}c--}break}}return n(r.line,c)}function o(e,t){e.extendSelectionsBy((function(n){return e.display.shift||e.doc.extend||n.empty()?r(e.doc,n.head,t):t<0?n.from():n.to()}))}function i(t,r){if(t.isReadOnly())return e.Pass;t.operation((function(){for(var e=t.listSelections().length,o=[],i=-1,l=0;l<e;l++){var a=t.listSelections()[l].head;if(!(a.line<=i)){var s=n(a.line+(r?0:1),0);t.replaceRange("\n",s,null,"+insertLine"),t.indentLine(s.line,null,!0),o.push({head:s,anchor:s}),i=a.line+1}}t.setSelections(o)})),t.execCommand("indentAuto")}function l(t,r){for(var o=r.ch,i=o,l=t.getLine(r.line);o&&e.isWordChar(l.charAt(o-1));)--o;for(;i<l.length&&e.isWordChar(l.charAt(i));)++i;return{from:n(r.line,o),to:n(r.line,i),word:l.slice(o,i)}}function s(e,t){for(var n=e.listSelections(),r=[],o=0;o<n.length;o++){var i=n[o],l=e.findPosV(i.anchor,t,"line",i.anchor.goalColumn),a=e.findPosV(i.head,t,"line",i.head.goalColumn);l.goalColumn=null!=i.anchor.goalColumn?i.anchor.goalColumn:e.cursorCoords(i.anchor,"div").left,a.goalColumn=null!=i.head.goalColumn?i.head.goalColumn:e.cursorCoords(i.head,"div").left;var s={anchor:l,head:a};r.push(i),r.push(s)}e.setSelections(r)}function c(t,n,r){for(var o=0;o<t.length;o++)if(0==e.cmpPos(t[o].from(),n)&&0==e.cmpPos(t[o].to(),r))return!0;return!1}a(r,"findPosSubword"),a(o,"moveSubword"),t.goSubwordLeft=function(e){o(e,-1)},t.goSubwordRight=function(e){o(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++)for(var i=t[o].from(),l=t[o].to(),a=i.line;a<=l.line;++a)l.line>i.line&&a==l.line&&0==l.ch||r.push({anchor:a==i.line?i:n(a,0),head:a==l.line?l:n(a)});e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){var i=t[o];r.push({anchor:n(i.from().line,0),head:n(i.to().line+1,0)})}e.setSelections(r)},a(i,"insertLine"),t.insertLineAfter=function(e){return i(e,!1)},t.insertLineBefore=function(e){return i(e,!0)},a(l,"wordAt"),t.selectNextOccurrence=function(t){var r=t.getCursor("from"),o=t.getCursor("to"),i=t.state.sublimeFindFullWord==t.doc.sel;if(0==e.cmpPos(r,o)){var a=l(t,r);if(!a.word)return;t.setSelection(a.from,a.to),i=!0}else{var s=t.getRange(r,o),f=i?new RegExp("\\b"+s+"\\b"):s,u=t.getSearchCursor(f,o),h=u.findNext();if(h||(h=(u=t.getSearchCursor(f,n(t.firstLine(),0))).findNext()),!h||c(t.listSelections(),u.from(),u.to()))return;t.addSelection(u.from(),u.to())}i&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),o=n.getCursor("head");t.selectNextOccurrence(n),0!=e.cmpPos(r,o)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=o})))},a(s,"addCursorToSelection"),t.addCursorToPrevLine=function(e){s(e,-1)},t.addCursorToNextLine=function(e){s(e,1)},a(c,"isSelectedRange");var f="(){}[]";function u(t){for(var r=t.listSelections(),o=[],i=0;i<r.length;i++){var l=r[i],a=l.head,s=t.scanForBracket(a,-1);if(!s)return!1;for(;;){var c=t.scanForBracket(a,1);if(!c)return!1;if(c.ch==f.charAt(f.indexOf(s.ch)+1)){var u=n(s.pos.line,s.pos.ch+1);if(0!=e.cmpPos(u,l.from())||0!=e.cmpPos(c.pos,l.to())){o.push({anchor:u,head:c.pos});break}if(!(s=t.scanForBracket(s.pos,-1)))return!1}a=n(c.pos.line,c.pos.ch+1)}}return t.setSelections(o),!0}function h(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function d(t,r,o){if(t.isReadOnly())return e.Pass;for(var i,l=t.listSelections(),a=[],s=0;s<l.length;s++){var c=l[s];if(!c.empty()){for(var f=c.from().line,u=c.to().line;s<l.length-1&&l[s+1].from().line==u;)u=l[++s].to().line;l[s].to().ch||u--,a.push(f,u)}}a.length?i=!0:a.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],l=0;l<a.length;l+=2){var s=a[l],c=a[l+1],f=n(s,0),u=n(c),h=t.getRange(f,u,!1);r?h.sort((function(e,t){return e<t?-o:e==t?0:o})):h.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase();return n!=r&&(e=n,t=r),e<t?-o:e==t?0:o})),t.replaceRange(h,f,u),i&&e.push({anchor:f,head:n(c+1,0)})}i&&t.setSelections(e,0)}))}function g(t,n){t.operation((function(){for(var r=t.listSelections(),o=[],i=[],a=0;a<r.length;a++)(c=r[a]).empty()?(o.push(a),i.push("")):i.push(n(t.getRange(c.from(),c.to())));var s;for(t.replaceSelections(i,"around","case"),a=o.length-1;a>=0;a--){var c=r[o[a]];if(!(s&&e.cmpPos(c.head,s)>0)){var f=l(t,c.head);s=f.from,t.replaceRange(n(f.word),f.from,f.to)}}}))}function m(t){var n=t.getCursor("from"),r=t.getCursor("to");if(0==e.cmpPos(n,r)){var o=l(t,n);if(!o.word)return;n=o.from,r=o.to}return{from:n,to:r,query:t.getRange(n,r),word:o}}function p(e,t){var r=m(e);if(r){var o=r.query,i=e.getSearchCursor(o,t?r.to:r.from);(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):(i=e.getSearchCursor(o,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):r.word&&e.setSelection(r.from,r.to))}}a(u,"selectBetweenBrackets"),t.selectScope=function(e){u(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!u(t))return e.Pass},a(h,"puncType"),t.goToBracket=function(t){t.extendSelectionsBy((function(r){var o=t.scanForBracket(r.head,1,h(t.getTokenTypeAt(r.head)));if(o&&0!=e.cmpPos(o.pos,r.head))return o.pos;var i=t.scanForBracket(r.head,-1,h(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))));return i&&n(i.pos.line,i.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.firstLine()-1,l=[],a=0;a<r.length;a++){var s=r[a],c=s.from().line-1,f=s.to().line;l.push({anchor:n(s.anchor.line-1,s.anchor.ch),head:n(s.head.line-1,s.head.ch)}),0!=s.to().ch||s.empty()||--f,c>i?o.push(c,f):o.length&&(o[o.length-1]=f),i=f}t.operation((function(){for(var e=0;e<o.length;e+=2){var r=o[e],i=o[e+1],a=t.getLine(r);t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),i>t.lastLine()?t.replaceRange("\n"+a,n(t.lastLine()),null,"+swapLine"):t.replaceRange(a+"\n",n(i,0),null,"+swapLine")}t.setSelections(l),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.lastLine()+1,l=r.length-1;l>=0;l--){var a=r[l],s=a.to().line+1,c=a.from().line;0!=a.to().ch||a.empty()||s--,s<i?o.push(s,c):o.length&&(o[o.length-1]=c),i=c}t.operation((function(){for(var e=o.length-2;e>=0;e-=2){var r=o[e],i=o[e+1],l=t.getLine(r);r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(l+"\n",n(i,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){for(var i=t[o],l=i.from(),a=l.line,s=i.to().line;o<t.length-1&&t[o+1].from().line==s;)s=t[++o].to().line;r.push({start:a,end:s,anchor:!i.empty()&&l})}e.operation((function(){for(var t=0,o=[],i=0;i<r.length;i++){for(var l,a=r[i],s=a.anchor&&n(a.anchor.line-t,a.anchor.ch),c=a.start;c<=a.end;c++){var f=c-t;c==a.end&&(l=n(f,e.getLine(f).length+1)),f<e.lastLine()&&(e.replaceRange(" ",n(f),n(f+1,/^\s*/.exec(e.getLine(f+1))[0].length)),++t)}o.push({anchor:s||l,head:l})}e.setSelections(o,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var o=e.listSelections()[r];o.empty()?e.replaceRange(e.getLine(o.head.line)+"\n",n(o.head.line,0)):e.replaceRange(e.getRange(o.from(),o.to()),o.from())}e.scrollIntoView()}))},a(d,"sortLines"),t.sortLines=function(e){d(e,!0,1)},t.reverseSortLines=function(e){d(e,!0,-1)},t.sortLinesInsensitive=function(e){d(e,!1,1)},t.reverseSortLinesInsensitive=function(e){d(e,!1,-1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(n)return e.setSelection(n.from,n.to);t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var o=t[r].from(),i=t[r].to(),l=t[r].empty()?e.findMarksAt(o):e.findMarks(o,i),a=0;a<l.length;a++)if(l[a].sublimeBookmark){l[a].clear();for(var s=0;s<n.length;s++)n[s]==l[a]&&n.splice(s--,1);break}a==l.length&&n.push(e.markText(o,i,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var o=t[r].find();o?n.push({anchor:o.from,head:o.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},a(g,"modifyWordOrSelection"),t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass;t.operation((function(){for(var r=t.listSelections(),o=t.getOption("indentUnit"),i=r.length-1;i>=0;i--){var l=r[i].head,a=t.getRange({line:l.line,ch:0},l),s=e.countColumn(a,null,t.getOption("tabSize")),c=t.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&s%o==0){var f=new n(l.line,e.findColumn(a,s-o,o));f.ch!=l.ch&&(c=f)}t.replaceRange("",c,l,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete");e.scrollIntoView()}))},t.upcaseAtCursor=function(e){g(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){g(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find();if(n){var r=t.getCursor(),o=n;if(e.cmpPos(r,o)>0){var i=o;o=r,r=i}t.state.sublimeKilled=t.getRange(r,o),t.replaceRange("",r,o)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},a(m,"getTarget"),a(p,"findAndGoTo"),t.findUnder=function(e){p(e,!0)},t.findUnderPrevious=function(e){p(e,!1)},t.findAllUnder=function(e){var t=m(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],o=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&o++;e.setSelections(r,o)}};var C=e.keyMap;C.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Shift-F5":"reverseSortLines","Cmd-F5":"sortLinesInsensitive","Shift-Cmd-F5":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-1":"foldAll","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(C.macSublime),C.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Shift-F9":"reverseSortLines","Ctrl-F9":"sortLinesInsensitive","Shift-Ctrl-F9":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-1":"foldAll","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(C.pcSublime);var v=C.default==C.macDefault;C.sublime=v?C.macSublime:C.pcSublime}(r.a.exports,o.a.exports,i.a.exports);var f=s({__proto__:null,default:c.exports},[c.exports])}}]);