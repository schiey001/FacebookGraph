/*!CK:125514437!*//*1432629242,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["T03\/q"]); }

__d("BrowsePerfLogger",["Arbiter","Banzai","collectDataAttributes","copyProperties","isEmpty","PageEvents"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m='browse_perf',n,o={init:function(p,q,r){if(!a.CavalryLogger||a.CavalryLogger.getInstance().lid!==r||!p)return;n=null;var s={is_quickling:q,pagelet_id:p};if(!q){j(s,{arbiter:g,event:l.BIGPIPE_ONLOAD});this.setupOnloadHook(s);return;}g.subscribe('BigPipe/init',function(event,t){if(!t.arbiter)return;j(s,{arbiter:t.arbiter,event:l.AJAXPIPE_ONLOAD});setTimeout(function(){this.setupOnloadHook(s);}.bind(this),0);}.bind(this));},setupOnloadHook:function(p){return p.arbiter.subscribeOnce(p.event,function(q){if(n)return;n=true;var r=a.CavalryLogger.getInstance(),s=r.events[p.pagelet_id]||[],t=this.getNavStart(p.is_quickling),u=document.getElementById('initial_browse_result'),v=u===null?{}:i(u.children[0],['bt']).bt,w=r.values.t_tti-window._cstart,x=t?(r.values.t_tti-t):0,y=!r.values.t_hooks||!r.values.t_onload||!r.values.t_tti||!t||!window._cstart,z=null;if(u===null){z='exception';}else if(k(v))z='no_results';var aa={abnormal:y?1:null,arrive:s.arrive||0,browse_sid:v.session_id,css_done:s.css||0,display:s.display||0,experience_type:v.experience_type,failure:z,is_detailed:r.is_detailed_profiler?1:0,js_done:s.jsdone||0,js_start:s.jsstart||0,navigation_start:t,onload:r.values.t_onload||0,pagelet_id:p.pagelet_id,path:v.path,quickling:p.is_quickling?1:0,raw_tti:r.values.t_tti,result_type:v.result_type,tti:Math.floor(w),tti_full:Math.floor(x),typeahead_sid:v.typeahead_sid,window_cstart:window._cstart},ba=window.performance||window.msPerformance;if(!p.is_quickling&&ba.timing){ba=ba.timing;j(aa,{wt_connect_end:ba.connectEnd,wt_connect_start:ba.connectStart,wt_domain_lookup_end:ba.domainLookupEnd,wt_domain_lookup_start:ba.domainLookupStart,wt_load_event_start:ba.loadEventStart,wt_navigation_start:ba.navigationStart,wt_request_start:ba.requestStart,wt_response_end:ba.responseEnd,wt_response_start:ba.responseStart});}h.post(m,aa,{delay:0,retry:true});}.bind(this));},getNavStart:function(p){if(p)return window.ExitTime;var q=window.performance||window.msPerformance;if(!q||!q.timing)return;return q.timing.navigationStart;}};e.exports=o;},null);
__d("BrowseResultsAreSlow",["CSS"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=1500,i={register:function(j,k,l){var m=l?0:h;setTimeout(function(){if(j.firstChild===k)g.show(k);},m);}};e.exports=i;},null);
__d("BrowseWindowTransitions",["Arbiter","Banzai","BrowseClientEventLogger","Event","NavigationMessage","Run","SubscriptionsHandler"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={init:function(o,p){this.subscriptions=new m();this.currentSessionID=o;this.currentVertical=p;this.logData('window_load');l.onLeave(function(){this.logData('window_transition_to_fb_page');this.cleanup();}.bind(this));if(!this.unLoadAttached){this.unLoadAttached=true;l.onUnload(function(){this.logData('window_unloaded');}.bind(this));}this.subscriptions.addSubscriptions(j.listen(window,'focus',function(){this.logData('window_focus');}.bind(this)),j.listen(window,'blur',function(){this.logData('window_blur');}.bind(this)),g.subscribe('pre_page_transition',function(event,q){this.logData('window_pre_page_transition');}.bind(this)),g.subscribe(k.NAVIGATION_BEGIN,function(event,q){this.logData('window_transition_to_LHC');this.cleanup();}.bind(this)),g.subscribe('BlueBar/homeClick',function(){this.logData('window_transition_to_home_click');this.cleanup();}.bind(this)));},logData:function(event){i.logData(event,this.currentSessionID,this.currentVertical);},cleanup:function(){this.subscriptions.release();}};e.exports=n;},null);
__d("SearchCommentHighlighter",["Arbiter","CSS","NodeHighlighter","Parent","csx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l='data-highlight-tokens',m=Object.assign({},i,{_enableCommentHighlighting:function(){if(this._subscription)return;this._subscription=g.subscribe('ufi/changed',function(n,o){var p=o.form;return this._highlightComments(p);}.bind(this));g.subscribeOnce('pre_page_transition',function(){return this._disableCommentHighlighting();}.bind(this));},_disableCommentHighlighting:function(){this._subscription.unsubscribe();this._subscription=null;},_highlightComments:function(n){var o=this._getHighlightTokens(n);if(o)i.highlight.call(this,n,o);},_getHighlightTokens:function(n){var o=j.byAttribute(n,l);return o?JSON.parse(o.getAttribute(l)):null;},isDiscardNode:function(n){return h.hasClass(n,'highlightNode');},getHighlightCandidates:function(){return [".UFICommentContent"];},highlight:function(n,o){if(!n.setAttribute)return;n.setAttribute(l,JSON.stringify(o));this._enableCommentHighlighting();}});e.exports=m;},null);
__d("FbFeedHighlighter",["CSS","NodeHighlighter","SearchCommentHighlighter","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l="_58cn",m=Object.assign({},h,{getHighlightCandidates:function(){return ["._5pbw","._5pbx","._6m6","._6m7","._59tj","._5b-_","._5b_0","._4_j6",".commentBody","._g2z","._6lc","._6s_"];},isStopNode:function(n){return g.hasClass(n,l);},isDiscardNode:function(n){return g.hasClass(n,'text_exposed_link');},highlight:function(n,o){h.highlight.call(this,n,o);i.highlight(n,o);}});e.exports=m;},null);
__d("XUIPageNavigationShim",["DOMContainer.react","React","isNode"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(l){var m;if(l.children)m=l.children.map(function(o){if(typeof o==='object'&&typeof o.ctor==='function'){return j(o);}else if(i(o)){return h.createElement(g,null,o);}else return o;});var n=l.ctor;return h.createElement(n,h.__spread({},l.props),m);}var k=h.createClass({displayName:"XUIPageNavigationShim",render:function(){return j(this.props);}});e.exports=k;},null);