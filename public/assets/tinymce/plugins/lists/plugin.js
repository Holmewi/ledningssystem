tinymce.PluginManager.add("lists",function(e){function t(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)}function n(e){return e.parentNode.firstChild==e}function r(e){return e.parentNode.lastChild==e}function i(t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]}function o(t){return t===e.getBody()}var a=this;e.on("init",function(){function s(e,t){var n=N.isEmpty(e);return t&&N.select("span[data-mce-type=bookmark]").length>0?!1:n}function l(e){function t(t){var r,i,o;i=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"],1==i.nodeType&&(r=N.create("span",{"data-mce-type":"bookmark"}),i.hasChildNodes()?(o=Math.min(o,i.childNodes.length-1),t?i.insertBefore(r,i.childNodes[o]):N.insertAfter(r,i.childNodes[o])):i.appendChild(r),i=r,o=0),n[t?"startContainer":"endContainer"]=i,n[t?"startOffset":"endOffset"]=o}var n={};return t(!0),e.collapsed||t(),n}function c(e){function t(t){function n(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t==e)return n;(1!=t.nodeType||"bookmark"!=t.getAttribute("data-mce-type"))&&n++,t=t.nextSibling}return-1}var r,i,o;r=o=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],r&&(1==r.nodeType&&(i=n(r),r=r.parentNode,N.remove(o)),e[t?"startContainer":"endContainer"]=r,e[t?"startOffset":"endOffset"]=i)}t(!0),t();var n=N.createRng();n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),E.setRng(n)}function u(t,n){var r,i,o,a=N.createFragment(),s=e.schema.getBlockElements();if(e.settings.forced_root_block&&(n=n||e.settings.forced_root_block),n&&(i=N.create(n),i.tagName===e.settings.forced_root_block&&N.setAttribs(i,e.settings.forced_root_block_attrs),a.appendChild(i)),t)for(;r=t.firstChild;){var l=r.nodeName;o||"SPAN"==l&&"bookmark"==r.getAttribute("data-mce-type")||(o=!0),s[l]?(a.appendChild(r),i=null):n?(i||(i=N.create(n),a.appendChild(i)),i.appendChild(r)):a.appendChild(r)}return e.settings.forced_root_block?o||tinymce.Env.ie&&!(tinymce.Env.ie>10)||i.appendChild(N.create("br",{"data-mce-bogus":"1"})):a.appendChild(N.create("br")),a}function d(){return tinymce.grep(E.getSelectedBlocks(),function(e){return/^(LI|DT|DD)$/.test(e.nodeName)})}function f(e,t,n){function r(e){tinymce.each(a,function(n){e.parentNode.insertBefore(n,t.parentNode)}),N.remove(e)}var i,o,a,l;for(a=N.select('span[data-mce-type="bookmark"]',e),n=n||u(t),i=N.createRng(),i.setStartAfter(t),i.setEndAfter(e),o=i.extractContents(),l=o.firstChild;l;l=l.firstChild)if("LI"==l.nodeName&&N.isEmpty(l)){N.remove(l);break}N.isEmpty(o)||N.insertAfter(o,e),N.insertAfter(n,e),s(t.parentNode)&&r(t.parentNode),N.remove(t),s(e)&&N.remove(e)}function h(e){var n,r;if(n=e.nextSibling,n&&t(n)&&n.nodeName==e.nodeName){for(;r=n.firstChild;)e.appendChild(r);N.remove(n)}if(n=e.previousSibling,n&&t(n)&&n.nodeName==e.nodeName){for(;r=n.firstChild;)e.insertBefore(r,e.firstChild);N.remove(n)}}function m(e){tinymce.each(tinymce.grep(N.select("ol,ul",e)),function(e){var n,r=e.parentNode;"LI"==r.nodeName&&r.firstChild==e&&(n=r.previousSibling,n&&"LI"==n.nodeName&&(n.appendChild(e),s(r)&&N.remove(r))),t(r)&&(n=r.previousSibling,n&&"LI"==n.nodeName&&n.appendChild(e))})}function p(e){function i(e){s(e)&&N.remove(e)}var a,l=e.parentNode,c=l.parentNode;return o(l)?!0:"DD"==e.nodeName?(N.rename(e,"DT"),!0):n(e)&&r(e)?("LI"==c.nodeName?(N.insertAfter(e,c),i(c),N.remove(l)):t(c)?N.remove(l,!0):(c.insertBefore(u(e),l),N.remove(l)),!0):n(e)?("LI"==c.nodeName?(N.insertAfter(e,c),e.appendChild(l),i(c)):t(c)?c.insertBefore(e,l):(c.insertBefore(u(e),l),N.remove(e)),!0):r(e)?("LI"==c.nodeName?N.insertAfter(e,c):t(c)?N.insertAfter(e,l):(N.insertAfter(u(e),l),N.remove(e)),!0):("LI"==c.nodeName?(l=c,a=u(e,"LI")):a=t(c)?u(e,"LI"):u(e),f(l,e,a),m(l.parentNode),!0)}function g(e){function n(n,r){var i;if(t(n)){for(;i=e.lastChild.firstChild;)r.appendChild(i);N.remove(n)}}var r,i;return"DT"==e.nodeName?(N.rename(e,"DD"),!0):(r=e.previousSibling,r&&t(r)?(r.appendChild(e),!0):r&&"LI"==r.nodeName&&t(r.lastChild)?(r.lastChild.appendChild(e),n(e.lastChild,r.lastChild),!0):(r=e.nextSibling,r&&t(r)?(r.insertBefore(e,r.firstChild),!0):r&&"LI"==r.nodeName&&t(e.lastChild)?!1:(r=e.previousSibling,r&&"LI"==r.nodeName?(i=N.create(e.parentNode.nodeName),r.appendChild(i),i.appendChild(e),n(e.lastChild,i),!0):!1)))}function v(){var t=d();if(t.length){for(var n=l(E.getRng(!0)),r=0;r<t.length&&(g(t[r])||0!==r);r++);return c(n),e.nodeChanged(),!0}}function y(){var t=d();if(t.length){var n,r,i=l(E.getRng(!0)),o=e.getBody();for(n=t.length;n--;)for(var a=t[n].parentNode;a&&a!=o;){for(r=t.length;r--;)if(t[r]===a){t.splice(n,1);break}a=a.parentNode}for(n=0;n<t.length&&(p(t[n])||0!==n);n++);return c(i),e.nodeChanged(),!0}}function b(n){function r(){function t(e){var t,n;for(t=a[e?"startContainer":"endContainer"],n=a[e?"startOffset":"endOffset"],1==t.nodeType&&(t=t.childNodes[Math.min(n,t.childNodes.length-1)]||t);t.parentNode!=o;){if(i(t))return t;if(/^(TD|TH)$/.test(t.parentNode.nodeName))return t;t=t.parentNode}return t}for(var n,r=[],o=e.getBody(),s=t(!0),l=t(),c=[],u=s;u&&(c.push(u),u!=l);u=u.nextSibling);return tinymce.each(c,function(e){if(i(e))return r.push(e),void(n=null);if(N.isBlock(e)||"BR"==e.nodeName)return"BR"==e.nodeName&&N.remove(e),void(n=null);var t=e.nextSibling;return tinymce.dom.BookmarkManager.isBookmarkNode(e)&&(i(t)||!t&&e.parentNode==o)?void(n=null):(n||(n=N.create("p"),e.parentNode.insertBefore(n,e),r.push(n)),void n.appendChild(e))}),r}var o,a=E.getRng(!0),s="LI";"false"!==N.getContentEditable(E.getNode())&&(n=n.toUpperCase(),"DL"==n&&(s="DT"),o=l(a),tinymce.each(r(),function(e){var r,i;i=e.previousSibling,i&&t(i)&&i.nodeName==n?(r=i,e=N.rename(e,s),i.appendChild(e)):(r=N.create(n),e.parentNode.insertBefore(r,e),r.appendChild(e),e=N.rename(e,s)),h(r)}),c(o))}function x(){var n=l(E.getRng(!0)),r=e.getBody();tinymce.each(d(),function(e){var n,i;if(!o(e.parentNode)){if(s(e))return void p(e);for(n=e;n&&n!=r;n=n.parentNode)t(n)&&(i=n);f(i,e)}}),c(n)}function C(e){var t=N.getParent(E.getStart(),"OL,UL,DL");if(!o(t))if(t)if(t.nodeName==e)x(e);else{var n=l(E.getRng(!0));h(N.rename(t,e)),c(n)}else b(e)}function w(t){return function(){var n=N.getParent(e.selection.getStart(),"UL,OL,DL");return n&&n.nodeName==t}}var N=e.dom,E=e.selection;a.backspaceDelete=function(n){function r(t,n){var r,i,o=t.startContainer,a=t.startOffset;if(3==o.nodeType&&(n?a<o.data.length:a>0))return o;for(r=e.schema.getNonEmptyElements(),i=new tinymce.dom.TreeWalker(t.startContainer);o=i[n?"next":"prev"]();){if("LI"==o.nodeName&&!o.hasChildNodes())return o;if(r[o.nodeName])return o;if(3==o.nodeType&&o.data.length>0)return o}}function i(e,n){var r,i,a=e.parentNode;if(t(n.lastChild)&&(i=n.lastChild),r=n.lastChild,r&&"BR"==r.nodeName&&e.hasChildNodes()&&N.remove(r),s(n,!0)&&N.$(n).empty(),!s(e,!0))for(;r=e.firstChild;)n.appendChild(r);i&&n.appendChild(i),N.remove(e),s(a)&&!o(a)&&N.remove(a)}if(E.isCollapsed()){var a,u,d,f=N.getParent(E.getStart(),"LI");if(f){if(a=f.parentNode,o(a)&&N.isEmpty(a))return!0;if(u=E.getRng(!0),d=N.getParent(r(u,n),"LI"),d&&d!=f){var h=l(u);return n?i(d,f):i(f,d),c(h),!0}if(!d&&!n&&x(a.nodeName))return!0}}},e.on("BeforeExecCommand",function(t){var n,r=t.command.toLowerCase();return"indent"==r?v()&&(n=!0):"outdent"==r&&y()&&(n=!0),n?(e.fire("ExecCommand",{command:t.command}),t.preventDefault(),!0):void 0}),e.addCommand("InsertUnorderedList",function(){C("UL")}),e.addCommand("InsertOrderedList",function(){C("OL")}),e.addCommand("InsertDefinitionList",function(){C("DL")}),e.addQueryStateHandler("InsertUnorderedList",w("UL")),e.addQueryStateHandler("InsertOrderedList",w("OL")),e.addQueryStateHandler("InsertDefinitionList",w("DL")),e.on("keydown",function(t){9!=t.keyCode||tinymce.util.VK.metaKeyPressed(t)||e.dom.getParent(e.selection.getStart(),"LI,DT,DD")&&(t.preventDefault(),t.shiftKey?y():v())})}),e.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:function(){var t=this;e.on("nodechange",function(){for(var r=e.selection.getSelectedBlocks(),i=!1,o=0,a=r.length;!i&&a>o;o++){var s=r[o].nodeName;i="LI"==s&&n(r[o])||"UL"==s||"OL"==s||"DD"==s}t.disabled(i)})}}),e.on("keydown",function(e){e.keyCode==tinymce.util.VK.BACKSPACE?a.backspaceDelete()&&e.preventDefault():e.keyCode==tinymce.util.VK.DELETE&&a.backspaceDelete(!0)&&e.preventDefault()})});