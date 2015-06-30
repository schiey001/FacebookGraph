/*!CK:2994114958!*//*1432609040,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sUfzE"]); }

__d("ActorURIConfig",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={PARAMETER_ACTOR:"av"};},null);
__d("BaseAsyncLoader",["KeyedCallbackManager","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={};function j(l,m,n){var o=new g(),p=false,q=[];function r(){if(!q.length||p)return;p=true;setTimeout(t,0);}function s(w){p=false;w.forEach(o.unsubscribe.bind(o));r();}function t(){var w={},x=[];q=q.filter(function(z){var aa=o.getUnavailableResources(z);if(aa.length){aa.forEach(function(ba){w[ba]=true;});x.push(z);return true;}return false;});var y=Object.keys(w);if(y.length){n(l,y,x,u.bind(null,x),v.bind(null,x));}else p=false;}function u(w,x){var y=x.payload[m]||x.payload;o.addResourcesAndExecute(y);s(w);}function v(w){s(w);}return {get:function(w,x){var y=o.executeOrEnqueue(w,x),z=o.getUnavailableResources(y);if(z.length){q.push(y);r();}},getCachedKeys:function(){return Object.keys(o.getAllResources());},getNow:function(w){return o.getResource(w)||null;},set:function(w){o.addResourcesAndExecute(w);}};}function k(l,m){throw ('BaseAsyncLoader can\'t be instantiated');}h(k.prototype,{_getLoader:function(){if(!i[this._endpoint])i[this._endpoint]=j(this._endpoint,this._type,this.send);return i[this._endpoint];},get:function(l,m){return this._getLoader().get(l,m);},getCachedKeys:function(){return this._getLoader().getCachedKeys();},getNow:function(l){return this._getLoader().getNow(l);},reset:function(){i[this._endpoint]=null;},set:function(l){this._getLoader().set(l);}});e.exports=k;},null);
__d("ChannelConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g='channel/',h={ON_SHUTDOWN:g+'shutdown',ON_INVALID_HISTORY:g+'invalid_history',ON_CONFIG:g+'config',ON_ENTER_STATE:g+'enter_state',ON_EXIT_STATE:g+'exit_state',ATTEMPT_RECONNECT:g+'attempt_reconnect',RTI_SESSION:g+'new_rti_address',SKYWALKER:g+'skywalker',OK:'ok',ERROR:'error',ERROR_MAX:'error_max',ERROR_MISSING:'error_missing',ERROR_MSG_TYPE:'error_msg_type',ERROR_SHUTDOWN:'error_shutdown',ERROR_STALE:'error_stale',SYS_OWNER:'sys_owner',SYS_NONOWNER:'sys_nonowner',SYS_ONLINE:'sys_online',SYS_OFFLINE:'sys_offline',SYS_TIMETRAVEL:'sys_timetravel',HINT_AUTH:'shutdown auth',HINT_CONN:'shutdown conn',HINT_DISABLED:'shutdown disabled',HINT_INVALID_STATE:'shutdown invalid state',HINT_MAINT:'shutdown maint',HINT_UNSUPPORTED:'shutdown unsupported',reason_Unknown:0,reason_AsyncError:1,reason_TooLong:2,reason_Refresh:3,reason_RefreshDelay:4,reason_UIRestart:5,reason_NeedSeq:6,reason_PrevFailed:7,reason_IFrameLoadGiveUp:8,reason_IFrameLoadRetry:9,reason_IFrameLoadRetryWorked:10,reason_PageTransitionRetry:11,reason_IFrameLoadMaxSubdomain:12,reason_NoChannelInfo:13,reason_NoChannelHost:14,CAPABILITY_VOIP_INTEROP:8,CAPABILITY_VIDEO:32,FANTAIL_DEBUG:'DEBUG',FANTAIL_WARN:'WARN',FANTAIL_INFO:'INFO',FANTAIL_ERROR:'ERROR',SUBSCRIBE:'subscribe',UNSUBSCRIBE:'unsubscribe',getArbiterType:function(i){return g+'message:'+i;},getSkywalkerArbiterType:function(i){return g+'skywalker:'+i;}};e.exports=h;},null);
__d("ActorURI",["ActorURIConfig","URI"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={create:function(j,k){return (new h(j)).addQueryData(g.PARAMETER_ACTOR,k);}};i.PARAMETER_ACTOR=g.PARAMETER_ACTOR;e.exports=i;},null);
__d("BanzaiLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h='logger';function i(k){return {log:function(l,m){g.post(h+':'+l,m,k);}};}var j=i();j.create=i;e.exports=j;},null);
__d("BanzaiODS",["Banzai","invariant"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(){var k={},l={};function m(n,o,p,q){if(p===(void 0))p=1;if(q===(void 0))q=1;if(n in l)if(l[n]<=0){return;}else p/=l[n];var r=k[n]||(k[n]={}),s=r[o]||(r[o]=[0]);p=Number(p);q=Number(q);if(!isFinite(p)||!isFinite(q))return;s[0]+=p;if(arguments.length>=4){if(!s[1])s[1]=0;s[1]+=q;}}return {setEntitySample:function(n,o){l[n]=Math.random()<o?o:0;},bumpEntityKey:function(n,o,p){m(n,o,p);},bumpFraction:function(n,o,p,q){m(n,o,p,q);},flush:function(n){for(var o in k)g.post('ods:'+o,k[o],n);k={};}};}var j=i();j.create=i;g.subscribe(g.SEND,j.flush.bind(j,null));e.exports=j;},null);
__d("BanzaiScuba",["Banzai","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i="scuba_sample";function j(m,n,o){this.fields={};this.post=function(p){if(!m)return;var q={};h(q,this.fields);q._ds=m;if(n)q._lid=n;q._options=o;g.post(i,q,p);this.post=function(){};this.posted=true;};this.lid=n;return this;}function k(m,n,o){if(!this.fields[m])this.fields[m]={};this.fields[m][n]=o;return this;}function l(m){return function(n,o){if(this.posted)return this;return k.call(this,m,n,o);};}h(j.prototype,{post:function(){},addNormal:l('normal'),addInteger:l('int'),addDenorm:l('denorm'),addTagset:l('tags'),addNormVector:l('normvector')});e.exports=j;},null);
__d("BasicVector",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){"use strict";this.x=h;this.y=i;}g.prototype.derive=function(h,i){"use strict";return new g(h,i);};g.prototype.toString=function(){"use strict";return '('+this.x+', '+this.y+')';};g.prototype.add=function(h,i){"use strict";if(h instanceof g){i=h.y;h=h.x;}var j=parseFloat(h),k=parseFloat(i);return this.derive(this.x+j,this.y+k);};g.prototype.mul=function(h,i){"use strict";if(i===(void 0))i=h;return this.derive(this.x*h,this.y*i);};g.prototype.div=function(h,i){"use strict";if(i===(void 0))i=h;return this.derive(this.x*1/h,this.y*1/i);};g.prototype.sub=function(h,i){"use strict";if(arguments.length===1){return this.add(h.mul(-1));}else return this.add(-h,-i);};g.prototype.distanceTo=function(h){"use strict";return this.sub(h).magnitude();};g.prototype.magnitude=function(){"use strict";return Math.sqrt((this.x*this.x)+(this.y*this.y));};g.prototype.rotate=function(h){"use strict";return this.derive(this.x*Math.cos(h)-this.y*Math.sin(h),this.x*Math.sin(h)+this.y*Math.cos(h));};e.exports=g;},null);
__d("Keys",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={BACKSPACE:8,TAB:9,RETURN:13,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,COMMA:188,PERIOD:190,A:65,Z:90,ZERO:48,NUMPAD_0:96,NUMPAD_9:105};},null);
__d("Promise",["ES6Promise","invariant","throwImmediate"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.prototype;j["finally"]=function(k){return this.then(k,k);};j.done=function(k,l){this.then(k,l).then(null,i);};g.allObject=function(k){h(!Array.isArray(k));var l=Object.keys(k);return g.all(l.map(function(m){return k[m];})).then(function(m){var n={};m.forEach(function(o,p){n[l[p]]=o;});return n;});};e.exports=g;},null);
__d("arrayContains",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){return h.indexOf(i)!=-1;}e.exports=g;},null);
__d("nativeRequestAnimationFrame",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame;e.exports=g;},null);
__d("requestAnimationFramePolyfill",["emptyFunction","nativeRequestAnimationFrame"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=0,j=h||function(k){var l=Date.now(),m=Math.max(0,16-(l-i));i=l+m;return a.setTimeout(function(){k(Date.now());},m);};j(g);e.exports=j;},null);
__d("BrowserSupportCore",["getVendorPrefixedName"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={hasCSSAnimations:function(){return !!g('animationName');},hasCSSTransforms:function(){return !!g('transform');},hasCSS3DTransforms:function(){return !!g('perspective');},hasCSSTransitions:function(){return !!g('transition');}};e.exports=h;},null);
__d("DOMVector",["BasicVector","getDocumentScrollElement","getElementPosition","getUnboundedScrollPosition","getViewportDimensions"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in g)if(g.hasOwnProperty(l))n[l]=g[l];var m=g===null?null:g.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=g;function n(o,p,q){"use strict";g.call(this,o,p);this.domain=q||'pure';}n.prototype.derive=function(o,p,q){"use strict";return new n(o,p,q||this.domain);};n.prototype.add=function(o,p){"use strict";if(o instanceof n&&o.getDomain()!=='pure')o=o.convertTo(this.domain);return m.add.call(this,o,p);};n.prototype.convertTo=function(o){"use strict";if(o!='pure'&&o!='viewport'&&o!='document')return this.derive(0,0);if(o==this.domain)return this.derive(this.x,this.y,this.domain);if(o=='pure')return this.derive(this.x,this.y);if(this.domain=='pure')return this.derive(0,0);var p=n.getScrollPosition('document'),q=this.x,r=this.y;if(this.domain=='document'){q-=p.x;r-=p.y;}else{q+=p.x;r+=p.y;}return this.derive(q,r,o);};n.prototype.getDomain=function(){"use strict";return this.domain;};n.from=function(o,p,q){"use strict";return new n(o,p,q);};n.getScrollPosition=function(o){"use strict";o=o||'document';var p=j(window);return this.from(p.x,p.y,'document').convertTo(o);};n.getElementPosition=function(o,p){"use strict";p=p||'document';var q=i(o);return this.from(q.x,q.y,'viewport').convertTo(p);};n.getElementDimensions=function(o){"use strict";return this.from(o.offsetWidth||0,o.offsetHeight||0);};n.getViewportDimensions=function(){"use strict";var o=k();return this.from(o.width,o.height,'viewport');};n.getViewportWithoutScrollbarDimensions=function(){"use strict";var o=k.withoutScrollbars();return this.from(o.width,o.height,'viewport');};n.getDocumentDimensions=function(o){"use strict";var p=h(o);return this.from(p.scrollWidth,p.scrollHeight,'document');};e.exports=n;},null);
__d("IntlSemiticSimplifiedNumberType",["IntlVariations"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={getNumberVariationType:function(i){var j=i%100;return i===2?g.NUMBER_DUAL:j>=3&&j<=10?g.NUMBER_PLURAL:g.NUMBER_SINGULAR;}};e.exports=h;},null);
__d("requestAnimationFrameAcrossTransitions",["TimeSlice","requestAnimationFramePolyfill"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);i[0]=g.guard(i[0],'requestAnimationFrame');return h.apply(a,i);};},null);
__d("requestAnimationFrame",["TimerStorage","requestAnimationFrameAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=h.apply(a,i);g.push(g.ANIMATION_FRAME,l);return l;};},null);
__d("randomInt",["invariant"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i,j){var k=arguments.length;g(k>0&&k<=2);if(k===1){j=i;i=0;}g(j>i);var l=this.random||Math.random;return Math.floor(i+l()*(j-i));}e.exports=h;},null);
__d("FallbackCompositionState",["PooledClass","Object.assign","getTextContentAccessor"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';function j(k){this._root=k;this._startText=this.getText();this._fallbackText=null;}h(j.prototype,{getText:function(){if('value' in this._root)return this._root.value;return this._root[i()];},getData:function(){if(this._fallbackText)return this._fallbackText;var k,l=this._startText,m=l.length,n,o=this.getText(),p=o.length;for(k=0;k<m;k++)if(l[k]!==o[k])break;var q=m-k;for(n=1;n<=q;n++)if(l[m-n]!==o[p-n])break;var r=n>1?1-n:(void 0);this._fallbackText=o.slice(k,r);return this._fallbackText;}});g.addPoolingTo(j);e.exports=j;},null);
__d("getEventCharCode",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();'use strict';function g(h){var i,j=h.keyCode;if('charCode' in h){i=h.charCode;if(i===0&&j===13)i=13;}else i=j;if(i>=32||i===13)return i;return 0;}e.exports=g;},null);
__d("ReactDOMButton",["AutoFocusMixin","ReactBrowserComponentMixin","ReactClass","ReactElement","keyMirror"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j.createFactory('button'),m=k({onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true}),n=i.createClass({displayName:'ReactDOMButton',tagName:'BUTTON',mixins:[g,h],render:function(){var o={};for(var p in this.props)if(this.props.hasOwnProperty(p)&&(!this.props.disabled||!m[p]))o[p]=this.props[p];return l(o,this.props.children);}});e.exports=n;},null);
__d("ReactDOMImg",["EventConstants","LocalEventTrapMixin","ReactBrowserComponentMixin","ReactClass","ReactElement"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=k.createFactory('img'),m=j.createClass({displayName:'ReactDOMImg',tagName:'IMG',mixins:[i,h],render:function(){return l(this.props);},componentDidMount:function(){this.trapBubbledEvent(g.topLevelTypes.topLoad,'load');this.trapBubbledEvent(g.topLevelTypes.topError,'error');}});e.exports=m;},null);
__d("getContextualParent",["ge"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i,j){var k,l=false;do{if(i.getAttribute&&(k=i.getAttribute('data-ownerid'))){i=g(k);l=true;}else i=i.parentNode;}while(j&&i&&!l);return i;}e.exports=h;},null);
__d("collectDataAttributes",["getContextualParent"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h='normal';function i(j,k,l){var m={},n=[],o=k.length,p;for(p=0;p<o;++p){m[k[p]]={};n.push('data-'+k[p]);}if(l){m[h]={};for(p=0;p<(l||[]).length;++p)n.push(l[p]);}var q={tn:'',"tn-debug":','};while(j){if(j.getAttribute)for(p=0;p<n.length;++p){var r=n[p],s=j.getAttribute(r);if(s){if(p>=o){if(m[h][r]===(void 0))m[h][r]=s;continue;}var t=JSON.parse(s);for(var u in t)if(q[u]!==(void 0)){if(m[k[p]][u]===(void 0))m[k[p]][u]=[];m[k[p]][u].push(t[u]);}else if(m[k[p]][u]===(void 0))m[k[p]][u]=t[u];}}j=g(j);}for(var v in m)for(var w in q)if(m[v][w]!==(void 0))m[v][w]=m[v][w].join(q[w]);return m;}e.exports=i;},null);
__d("throttle",["copyProperties"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j,k,l){return i(j,k,l,false,false);}g(h,{acrossTransitions:function(j,k,l){return i(j,k,l,true,false);},withBlocking:function(j,k,l){return i(j,k,l,false,true);},acrossTransitionsWithBlocking:function(j,k,l){return i(j,k,l,true,true);}});function i(j,k,l,m,n){if(k==null)k=100;var o,p,q=null,r=function(){p=Date.now();if(o){j.apply(l,o);o=null;q=setTimeout(r,k,!m);}else q=null;};r.__SMmeta=j.__SMmeta;return function s(){o=arguments;if(q===null||(Date.now()-p>k))if(n){r();}else q=setTimeout(r,0,!m);};}e.exports=h;},null);
__d("FlipDirection",["DOM","Input","Style"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={setDirection:function(k){var l=g.isNodeOfType(k,'input')&&(k.type=='text'),m=g.isNodeOfType(k,'textarea');if(!(l||m)||k.getAttribute('data-prevent-auto-flip'))return;var n=h.getValue(k),o=(k.style&&k.style.direction);if(!o){var p=0,q=true;for(var r=0;r<n.length;r++){var s=n.charCodeAt(r);if(s>=48){if(q){q=false;p++;}if(s>=1470&&s<=1920){i.set(k,'direction','rtl');k.setAttribute('dir','rtl');return;}if(p==5){i.set(k,'direction','ltr');k.setAttribute('dir','ltr');return;}}else q=true;}}else if(n.length===0){i.set(k,'direction','');k.removeAttribute('dir');}}};e.exports=j;},null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=function(event){var j=event.getTarget();h.setDirection(j);};g.listen(document.documentElement,{keyup:i,input:i});},null);
__d("JSLogger",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:false};function h(m){if(m=='/'||m.indexOf('/',1)<0)return false;var n=/^\/(v\d+\.\d\d?|head)\//.test(m);if(n)return (/^\/(dialog|plugins)\//).test(m.substring(m.indexOf('/',1)));return (/^\/(dialog|plugins)\//).test(m);}function i(m){if(m instanceof Error&&a.ErrorUtils)m=a.ErrorUtils.normalizeError(m);try{return JSON.stringify(m);}catch(n){return '{}';}}function j(m,event,n){if(!g.counts[m])g.counts[m]={};if(!g.counts[m][event])g.counts[m][event]=0;n=n==null?1:Number(n);g.counts[m][event]+=isFinite(n)?n:0;}g.logAction=function(event,m,n){if(this.type=='bump'){j(this.cat,event,m);}else if(this.type=='rate'){(m&&j(this.cat,event+'_n',n));j(this.cat,event+'_d',n);}else{var o={cat:this.cat,type:this.type,event:event,data:m!=null?i(m):null,date:Date.now(),seq:g.seq++};g.head=g.head?(g.head.next=o):(g.tail=o);while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return o;}};function k(m){if(!g.categories[m]){g.categories[m]={};var n=function(o){var p={cat:m,type:o};g.categories[m][o]=function(){g.forwarding=false;var q=null;if(document.domain!='facebook.com')return;q=g.logAction;if(h(location.pathname)){g.forwarding=false;}else try{q=a.top.require('JSLogger')._.logAction;g.forwarding=q!==g.logAction;}catch(r){}(q&&q.apply(p,arguments));};};n('debug');n('log');n('warn');n('error');n('bump');n('rate');}return g.categories[m];}function l(m,n){var o=[];for(var p=n||g.tail;p;p=p.next)if(!m||m(p)){var q={type:p.type,cat:p.cat,date:p.date,event:p.event,seq:p.seq};if(p.data)q.data=JSON.parse(p.data);o.push(q);}return o;}e.exports={_:g,DUMP_EVENT:'jslogger/dump',create:k,getEntries:l};},null);
__d("Nectar",["Env","getContextualParent"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(l){if(!l.nctr)l.nctr={};}function j(l){if(g.module||!l)return g.module;var m={fbpage_fan_confirm:true,photos_snowlift:true},n;while(l&&l.getAttribute){var o=l.getAttribute('id');if(o!=null&&o.startsWith('pagelet_'))return o;if(!n&&m[o])n=o;l=h(l);}return n;}var k={addModuleData:function(l,m){var n=j(m);if(n){i(l);l.nctr._mod=n;}},addImpressionID:function(l){if(g.impid){i(l);l.nctr._impid=g.impid;}}};e.exports=k;},null);
__d("LinkController",["Event","DataStore","Parent","trackReferrer"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k='LinkControllerHandler',l=[],m=[];function n(event){var r=event.getTarget(),s=i.byTag(r,'a'),t=s&&s.getAttribute('href',2);if(!t||s.rel||!p(t)||(r.nodeName=='INPUT'&&r.type=='file')||h.get(s,k))return;var u=g.listen(s,'click',function(v){if(t.charAt(t.length-1)=='#'){v.prevent();return;}j(s,t);o(s,v);});h.set(s,k,u);}function o(r,event){if(r.target||r.rel||event.getModifiers().any||(event.which&&event.which!=1))return;var s=l.concat(m);for(var t=0,u=s.length;t<u;t++)if(s[t](r,event)===false)return event.prevent();}function p(r){var s=r.match(/^(\w+):/);return !s||s[1].match(/^http/i);}var q={registerHandler:function(r){l.push(r);},registerFallbackHandler:function(r){m.push(r);}};g.listen(document.documentElement,'mousedown',n);g.listen(document.documentElement,'keydown',n);e.exports=q;},null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={DOMREADY_HOOK:'domreadyhooks',ONLOAD_HOOK:'onloadhooks'};function l(){var s=a.CavalryLogger;if(!window.domready&&s)s.getInstance().setTimeStamp('t_prehooks');o(r.DOMREADY_HOOK);if(!window.domready&&s)s.getInstance().setTimeStamp('t_hooks');window.domready=true;g.inform('uipage_onload',true,g.BEHAVIOR_STATE);}function m(){o(r.ONLOAD_HOOK);window.loaded=true;}function n(s,t){return h.applyWithGuard(s,null,null,function(u){u.event_type=t;u.category='runhook';},'PageHooks:'+t);}function o(s){var t=(s=='onbeforeleavehooks')||(s=='onbeforeunloadhooks');do{var u=window[s];if(!u)break;if(!t)window[s]=null;for(var v=0;v<u.length;v++){var w=n(u[v],s);if(t&&w)return w;}}while(!t&&window[s]);}function p(){if(!window.domready){window.domready=true;o('onloadhooks');}if(!window.loaded){window.loaded=true;o('onafterloadhooks');}}function q(){g.registerCallback(l,[j.BIGPIPE_DOMREADY,i.INITIAL_JS_READY]);g.registerCallback(m,[j.BIGPIPE_DOMREADY,j.BIGPIPE_ONLOAD,i.INITIAL_JS_READY]);g.subscribe(j.NATIVE_ONBEFOREUNLOAD,function(s,t){t.warn=o('onbeforeleavehooks')||o('onbeforeunloadhooks');if(!t.warn){window.domready=false;window.loaded=false;}},g.SUBSCRIBE_NEW);g.subscribe(j.NATIVE_ONUNLOAD,function(s,t){o('onunloadhooks');o('onafterunloadhooks');},g.SUBSCRIBE_NEW);}var r=Object.assign({_domreadyHook:l,_onloadHook:m,runHook:n,runHooks:o,keepWindowSetAsLoaded:p},k);q();a.PageHooks=e.exports=r;},null);
__d("PostLoadJS",["Bootloader","Run","emptyFunction"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(l,m){h.onAfterLoad(function(){g.loadModules.call(g,[l],m);});}var k={loadAndRequire:function(l){j(l,i);},loadAndCall:function(l,m,n){j(l,function(o){o[m].apply(o,n);});}};e.exports=k;},null);
__d("SessionName",["SessionNameConfig","isInIframe"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i='_e_',j=(window.name||'').toString();if(j.length==7&&j.substr(0,3)==i){j=j.substr(3);}else{j=g.seed||'';if(!h())window.name=i+j;}var k={TOKEN:i,getName:function(){return j;}};a.SessionName=k;e.exports=k;},3);
__d("TidyArbiter",["TidyArbiterMixin","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={};h(i,g);e.exports=i;},null);
__d("UserActivity",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=5000,j=500,k=-5,l=Date.now(),m=l,n=false,o=Date.now(),p=true,q=0,r=Date.now(),s={subscribeOnce:function(w){var x=s.subscribe(function(){s.unsubscribe(x);w();});return x;},subscribe:function(w){return g.subscribe('useractivity/activity',w);},unsubscribe:function(w){w.unsubscribe();},isActive:function(w){return (new Date()-l<(w||i));},isOnTab:function(){return p;},hasBeenInactive:function(){return n;},resetActiveStatus:function(){p=true;n=false;},getLastInActiveEnds:function(){return o;},getLastActive:function(){return l;},setIdleTime:function(w){q=w;},getLastLeaveTime:function(){return r;},getLastInformTime:function(){return m;}};function t(event){l=Date.now();var w=l-m;if(w>j){m=l;if(!p)r=l;if(w>=(q||i)){n=true;o=l;}g.inform('useractivity/activity',{event:event,idleness:w,last_inform:m});}else if(w<k)m=l;}function u(event){p=true;o=Date.now();t(event);g.inform('useractivity/focus');}function v(event){p=false;n=true;r=Date.now();}h.listen(window,'scroll',t);h.listen(window,'focus',u);h.listen(window,'blur',v);h.listen(document.documentElement,{DOMMouseScroll:t,mousewheel:t,keydown:t,mouseover:t,mousemove:t,click:t});g.subscribe('Event/stop',function(w,x){t(x.event);});e.exports=s;},null);
__d("Vector",["DOMVector","Event","Scroll"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();for(var j in g)if(g.hasOwnProperty(j))l[j]=g[j];var k=g===null?null:g.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=g;function l(m,n,o){"use strict";g.call(this,parseFloat(m),parseFloat(n),o);}l.prototype.derive=function(m,n,o){"use strict";return new l(m,n,o||this.domain);};l.prototype.setElementPosition=function(m){"use strict";var n=this.convertTo('document');m.style.left=parseInt(n.x,10)+'px';m.style.top=parseInt(n.y,10)+'px';return this;};l.prototype.setElementDimensions=function(m){"use strict";return this.setElementWidth(m).setElementHeight(m);};l.prototype.setElementWidth=function(m){"use strict";m.style.width=parseInt(this.x,10)+'px';return this;};l.prototype.setElementHeight=function(m){"use strict";m.style.height=parseInt(this.y,10)+'px';return this;};l.prototype.scrollElementBy=function(m){"use strict";if(m==document.body){window.scrollBy(this.x,this.y);}else{i.setLeft(m,i.getLeft(m)+this.x);i.setTop(m,i.getTop(m)+this.y);}return this;};l.from=function(m,n,o){"use strict";return new l(m,n,o);};l.getEventPosition=function(m,n){"use strict";n=n||'document';var o=h.getPosition(m),p=this.from(o.x,o.y,'document');return p.convertTo(n);};l.deserialize=function(m){"use strict";var n=m.split(',');return this.from(n[0],n[1]);};e.exports=l;},null);
__d("ViewportBounds",["Arbiter","ArbiterMixin","DOM","Style","Vector","csx","copyProperties","emptyFunction","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={top:[],right:[],bottom:[],left:[]};function q(u){return function(){var v=0;p[u].forEach(function(w){v=Math.max(v,w.getSize());});return v;};}function r(u,v){return function(w){return new s(u,w,v);};}function s(u,v,w){this.getSide=n.thatReturns(u);this.getSize=function(){return typeof v==='function'?v():v;};this.isPersistent=n.thatReturns(w);p[u].push(this);t.inform('change');}s.prototype.remove=function(){o(p[this.getSide()],this);t.inform('change');};g.subscribe('page_transition',function(){for(var u in p)for(var v=p[u].length-1;v>=0;v--){var w=p[u][v];if(!w.isPersistent())w.remove();}});var t=m({getTop:q('top'),getRight:q('right'),getBottom:q('bottom'),getLeft:q('left'),getElementPosition:function(u){var v=k.getElementPosition(u);v.y-=t.getTop();return v;},addTop:r('top'),addRight:r('right'),addBottom:r('bottom'),addLeft:r('left'),addPersistentTop:r('top',true),addPersistentRight:r('right',true),addPersistentBottom:r('bottom',true),addPersistentLeft:r('left',true)},h);t.addPersistentTop(function(){var u=i.scry(document,"div._4f7n")[0];if(u&&j.isFixed(u)){var v=i.scry(document,"div._21mm")[0];return v?v.offsetHeight:0;}return 0;});e.exports=t;},null);
__d("getOverlayZIndex",["Style"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i,j){j=j||document.body;var k=[];while(i&&i!==j){k.push(i);i=i.parentNode;}if(i!==j)return 0;for(var l=k.length-1;l>=0;l--){var m=k[l];if(g.get(m,'position')!='static'){var n=parseInt(g.get(m,'z-index'),10);if(!isNaN(n))return n;}}return 0;}e.exports=h;},null);
__d("highlight",["Animation","Style"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k,l,m){new g(j).from('background',m||'#fff9d7').to('background',l||'#fff').ease(g.ease.both).duration(2000).ondone(function(){h.set(j,'background','');k&&k();}).go();}e.exports=i;},null);
__d("queryThenMutateDOM",["Run","createArrayFromMixed","emptyFunction","requestAnimationFrame"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k,l,m={},n=[],o=[];function p(s,t,u){if(!s&&!t)return;if(u&&m.hasOwnProperty(u)){return;}else if(u)m[u]=1;n.push(t||i);o.push(s||i);r();if(!k){k=true;g.onLeave(function(){k=false;l=false;m={};n.length=0;o.length=0;});}}p.prepare=function(s,t,u){return function(){var v=h(arguments);v.unshift(this);var w=Function.prototype.bind.apply(s,v),x=t.bind(this);p(w,x,u);};};function q(){m={};var s=o.length,t=n.length,u=[],v;while(s--){v=o.shift();u.push(v());}while(t--){v=n.shift();v(u.shift());}l=false;r();}function r(){if(!l&&(o.length||n.length)){l=true;j(q);}}e.exports=p;},null);
__d("TimelineCoverCollapse",["Arbiter","DOMDimensions","Style","TidyArbiter","$"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();f.collapse=function(l,m){m--;var n=h.getViewportDimensions().height,o=h.getDocumentDimensions().height,p=n+m;if(o<=p)i.set(k('pagelet_timeline_main_column'),'min-height',p+'px');window.scrollBy(0,m);j.inform('TimelineCover/coverCollapsed',m,g.BEHAVIOR_STATE);};},null);
__d("EventListener",["Event","emptyFunction"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={listen:g.listen,capture:function(j,k,l){if(!j.addEventListener){return {remove:h};}else{j.addEventListener(k,l,true);return {remove:function(){j.removeEventListener(k,l,true);}};}},registerDefault:function(j,k){return g.listen(document.documentElement,j,k,1000);}};e.exports=i;},null);
__d("ProfileTypeaheadContainer.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=g.createClass({displayName:"ProfileTypeaheadContainer",render:function(){return (g.createElement("div",{className:"_1ceo"},this.props.children));}});e.exports=i;},null);
__d("FacebarStructuredFragment",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(j,k){if(j&&k){return j.toLowerCase()==k.toLowerCase();}else return !j&&!k;}var h=new RegExp('['+'\\u0590-\\u07bf'+'\\u08a0-\\u08ff'+'\\ufb1d-\\ufb4f'+'\\ufb50-\\ufefc'+'\\u200e-\\u200f\\u202a-\\u202e'+']');function i(j){"use strict";this._text=String(j.text);this._uid=j.uid?String(j.uid):null;this._type=j.type?String(j.type):null;this._typeParts=null;}i.prototype.getText=function(){"use strict";return this._text;};i.prototype.getUID=function(){"use strict";return this._uid;};i.prototype.getType=function(){"use strict";return this._type;};i.prototype.getTypePart=function(j){"use strict";return this._getTypeParts()[j];};i.prototype.getLength=function(){"use strict";return this._text.length;};i.prototype.isType=function(j){"use strict";for(var k=0;k<arguments.length;k++)if(!g(arguments[k],this.getTypePart(k)))return false;return true;};i.prototype.isWhitespace=function(){"use strict";return (/^\s*$/).test(this._text);};i.prototype.hasRTL=function(){"use strict";return h.test(this._text);};i.prototype.toStruct=function(){"use strict";return {text:this._text,type:this._type,uid:this._uid};};i.prototype.getHash=function(j){"use strict";var k=j!=null?this._getTypeParts().slice(0,j).join(':'):this._type;return k+'::'+this._text;};i.prototype._getTypeParts=function(){"use strict";if(this._typeParts===null)this._typeParts=this._type?this._type.split(':'):[];return this._typeParts;};e.exports=i;},null);
__d("FacebarStructuredText",["createArrayFromMixed","FacebarStructuredFragment"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=/\s+$/;function j(n){if(!n){return [];}else if(n instanceof m){return n.toArray();}else return g(n).map(function(o){return new h(o);});}function k(n){return new h({text:n,type:'text'});}function l(n,o,p){var q=n.getText(),r=q.replace(o,p);if(q!=r){return new h({text:r,type:n.getType(),uid:n.getUID()});}else return n;}function m(n){"use strict";this._fragments=n||[];this._hash=null;}m.prototype.matches=function(n,o){"use strict";if(n){var p=this._fragments,q=n._fragments;return p.length==q.length&&!p.some(function(r,s){if(!o&&r.getUID()){return r.getUID()!=q[s].getUID();}else return r.getText()!=q[s].getText()||r.getType()!=q[s].getType();});}return false;};m.prototype.trim=function(){"use strict";var n=null,o=null;this.forEach(function(q,r){if(!q.isWhitespace()){if(n===null)n=r;o=r;}});if(o!==null){var p=this._fragments.slice(n,o+1);p.push(l(p.pop(),i,''));return new m(p);}else return new m([]);};m.prototype.pad=function(){"use strict";var n=this.getFragment(-1);if(n&&!i.test(n.getText())&&n.getText()!==''){return new m(this._fragments.concat(k(' ')));}else return this;};m.prototype.forEach=function(n){"use strict";this._fragments.forEach(n);return this;};m.prototype.matchType=function(n){"use strict";var o=null;for(var p=0;p<this._fragments.length;p++){var q=this._fragments[p],r=q.isType.apply(q,arguments);if(r&&!o){o=q;}else if(r||!q.isWhitespace())return null;}return o;};m.prototype.hasType=function(n){"use strict";var o=arguments;return this._fragments.some(function(p){return !p.isWhitespace()&&p.isType.apply(p,o);});};m.prototype.endsOnType=function(n){"use strict";var o=arguments,p=this._fragments[this._fragments.length-1];return !!p&&!p.isWhitespace()&&p.isType.apply(p,o);};m.prototype.isEmptyOrWhitespace=function(){"use strict";return !this._fragments.some(function(n){return !n.isWhitespace();});};m.prototype.hasRTL=function(){"use strict";return this._fragments.some(function(n){return n.hasRTL();});};m.prototype.isEmpty=function(){"use strict";return this.getLength()===0;};m.prototype.getFragment=function(n){"use strict";return this._fragments[n>=0?n:this._fragments.length+n];};m.prototype.getCount=function(){"use strict";return this._fragments.length;};m.prototype.getLength=function(){"use strict";return this._fragments.reduce(function(n,o){return n+o.getLength();},0);};m.prototype.toStruct=function(){"use strict";return this._fragments.map(function(n){return n.toStruct();});};m.prototype.toArray=function(){"use strict";return this._fragments.slice();};m.prototype.toString=function(){"use strict";return this._fragments.map(function(n){return n.getText();}).join('');};m.prototype.getHash=function(){"use strict";if(this._hash===null)this._hash=this._fragments.map(function(n){if(n.getUID()){return '[['+n.getHash(1)+']]';}else return n.getText();}).join('');return this._hash;};m.fromStruct=function(n){"use strict";return new m(j(n));};m.fromString=function(n){"use strict";return new m([k(n)]);};e.exports=m;},null);
__d("QueryHistory",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={set:function(i,j){g[this._key(i)]=j;},get:function(i){return g[this._key(i)];},_key:function(i){return 'uri-'+i.getQualifiedURI().toString();}};e.exports=h;},null);
__d("FacebarNavigation",["Arbiter","csx","DOMQuery","FacebarStructuredText","Input","QueryHistory","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=null,o=null,p=null,q=false,r=true,s=false;function t(w,x){if(!s)p=w;s=false;q=x;r=false;u();}function u(){if(r){return;}else if(o){q&&o.pageTransition();o.setPageQuery(p);r=true;}else if(n&&p&&!k.getValue(n))k.setValue(n,p.structure.toString()+' ');n&&n.blur();}g.subscribe('page_transition',function(w,x){if(!v.isTopControlTransition(x.uri)&&!v.isTimelineAbout(x.uri))t(l.get(x.uri),true);});g.subscribe('save_facebar_query',function(w,x){s=true;});var v={registerInput:function(w){n=i.scry(w,"._586f")[0];u();},registerBehavior:function(w){o=w;u();},setPageQuery:function(w){l.set(m.getNextURI(),w);w.structure=j.fromStruct(w.structure);t(w,false);},isTopControlTransition:function(w){return String(w.getPath()).startsWith('/search/')&&w.getQueryData().ref==='top_filter'&&!w.getQueryData().hard_refresh;},isTimelineAbout:function(w){return /\/about$/.test(w.getPath())&&!w.getQueryData().hard_refresh;}};e.exports=v;},null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=null,m=null,n={registerInput:function(o,p){m=h.scry(o,'input')[0];if(l)this._updateTitle(l,p);g.subscribe('page_transition',function(q,r){this._updateTitle(j.get(r.uri));}.bind(this));},_updateTitle:function(o,p){if(m){i.setValue(m,o||'');m.setAttribute('singlestate',o&&p);m.blur();}},setPageTitle:function(o,p){j.set(k.getNextURI(),o);if(m){this._updateTitle(o,p);}else l=o;var q={};g.inform('search/updateNullState',q,g.BEHAVIOR_STATE);},setPageQuery:function(o){g.inform('search/updateNullState',o,g.BEHAVIOR_STATE);}};e.exports=n;},null);
__d("TinyViewport",["Arbiter","ArbiterMixin","CSS","Event","copyProperties","getDocumentScrollElement","queryThenMutateDOM","BanzaiScuba"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=document.documentElement,p,q,r=false,s=false,t={isTiny:function(){return p;}};k(t,h);var u=m.bind(null,function(){q=q||l();p=o.clientHeight<400||o.clientWidth<q.scrollWidth-1;},function(){if(p!==r){i.conditionClass(o,'tinyViewport',p);i.conditionClass(o,'canHaveFixedElements',!p);t.inform('change',p);r=p;}if(!s){var v=new n('www_tinyview_port',null,{addBrowserFields:true});v.addInteger('clientWidth',o.clientWidth);v.addInteger('clientHeight',o.clientHeight);v.addNormal('view',p?'tiny':'normal');v.post();s=true;}},'TinyViewport');u();g.subscribe('quickling/response',u);j.listen(window,'resize',u);e.exports=t;},null);
__d("Button",["CSS","DataStore","DOM","Event","Parent","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n='uiButtonDisabled',o='uiButtonDepressed',p="_42fr",q="_42fs",r='button:blocker',s='href',t='ajaxify';function u(aa,ba){var ca=h.get(aa,r);if(ba){if(ca){ca.remove();h.remove(aa,r);}}else if(!ca)h.set(aa,r,j.listen(aa,'click',m.thatReturnsFalse,j.Priority.URGENT));}function v(aa){var ba=k.byClass(aa,'uiButton')||k.byClass(aa,"_42ft");if(!ba)throw new Error('invalid use case');return ba;}function w(aa){return i.isNodeOfType(aa,'a');}function x(aa){return i.isNodeOfType(aa,'button');}function y(aa){return g.hasClass(aa,"_42ft");}var z={getInputElement:function(aa){aa=v(aa);if(w(aa))throw new Error('invalid use case');return x(aa)?aa:i.find(aa,'input');},isEnabled:function(aa){return !(g.hasClass(v(aa),n)||g.hasClass(v(aa),p));},setEnabled:function(aa,ba){aa=v(aa);var ca=y(aa)?p:n;g.conditionClass(aa,ca,!ba);if(w(aa)){var da=aa.getAttribute('href'),ea=aa.getAttribute('ajaxify'),fa=h.get(aa,s,'#'),ga=h.get(aa,t);if(ba){if(!da)aa.setAttribute('href',fa);if(!ea&&ga)aa.setAttribute('ajaxify',ga);aa.removeAttribute('tabIndex');}else{if(da&&da!==fa)h.set(aa,s,da);if(ea&&ea!==ga)h.set(aa,t,ea);aa.removeAttribute('href');aa.removeAttribute('ajaxify');aa.setAttribute('tabIndex','-1');}u(aa,ba);}else{var ha=z.getInputElement(aa);ha.disabled=!ba;u(ha,ba);}},setDepressed:function(aa,ba){aa=v(aa);var ca=y(aa)?q:o;g.conditionClass(aa,ca,ba);},isDepressed:function(aa){aa=v(aa);var ba=y(aa)?q:o;return g.hasClass(aa,ba);},setLabel:function(aa,ba){aa=v(aa);if(y(aa)){var ca=[];if(ba)ca.push(ba);var da=i.scry(aa,'.img')[0];if(da)if(aa.firstChild==da){ca.unshift(da);}else ca.push(da);i.setContent(aa,ca);}else if(w(aa)){var ea=i.find(aa,'span.uiButtonText');i.setContent(ea,ba);}else z.getInputElement(aa).value=ba;var fa=y(aa)?"_42fv":'uiButtonNoText';g.conditionClass(aa,fa,!ba);},setIcon:function(aa,ba){if(ba&&!i.isNode(ba))return;aa=v(aa);var ca=i.scry(aa,'.img')[0];if(!ba){ca&&i.remove(ca);return;}g.addClass(ba,'customimg');if(ca!=ba)if(ca){i.replace(ca,ba);}else i.prependContent(aa,ba);}};e.exports=z;},null);