/*!CK:1226143497!*//*1432608531,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["mpWdI"]); }

__d("InstanceProxy",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){"use strict";this.$InstanceProxy0=h;}g.prototype.getInstance=function(){"use strict";return this.$InstanceProxy0;};g.prototype.setInstance=function(h){"use strict";this.$InstanceProxy0=h;};e.exports=g;},null);
__d("CensorLogger",["Event","Banzai","DOM","debounce","ge","Keys"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=10*60*1000,m=b('Keys').RETURN,n=function(q){var r=(q.target||q.srcElement).id,s=(q.target||q.srcElement).value.trim().length,t=o.tracker(r);if(!t)return;if(s>5&&!t.submitted){if(t.type=='comment'&&t.parent_fbid=='unknown'){if(!o.syncTrackerWithForm(r))o.snowliftSync(r);t=o.tracker(r);}h.post('censorlogger',{impid:t.impid,clearcounter:t.clearcounter,instrument:t.type,elementid:r,parent_fbid:(t.parent_fbid=='unknown'?null:t.parent_fbid),version:"original"},h.VITAL);o.setSubmitted(r,true);}else if(s===0&&t.submitted&&q.which!=m){o.debouncers[r]=p(r);o.debouncers[r]();}else if(s>0&&t.submitted)if(o.debouncers[r])o.debouncers[r].reset();},o={init:function(q){this.impressionID=q;for(var r in this.trackedElements)if(!k(r))this.stopTracking(r);for(var s in this.unmatchedForms)if(!k(s))delete this.unmatchedForms[s];},trackElement:function(q,r,s){var t,u,v;this.debouncers=this.debouncers||{};this.trackedElements=this.trackedElements||{};this.unmatchedForms=this.unmatchedForms||{};r=r.toLowerCase();if(r=='composer'){t=(s?i.find(q,'div.uiMetaComposerMessageBox textarea.input'):i.find(q,'div.uiComposerMessageBox textarea.input'));u=i.find(q,'form.attachmentForm');var w=i.scry(q,'input[name="xhpc_targetid"]')[0];if(w)v=w.value;}else if(r=='comment')t=i.find(q,'div.commentBox textarea.textInput');if(t==null)return;var x=i.getID(t);if(u)this.addJoinTableInfoToForm(u,i.getID(t));g.listen(t,'keyup',n.bind(this));this.trackedElements[x]={submitted:false,clearcounter:0,type:r,impid:this.impressionID,parent_fbid:v||'unknown',formID:(u?i.getID(u):null)};if(r=='comment')this.syncTrackerWithForm(x);},registerForm:function(q,r){this.unmatchedForms=this.unmatchedForms||{};this.unmatchedForms[q]=r;},syncTrackerWithForm:function(q){for(var r in this.unmatchedForms){var s=k(r);if(s){var t=i.scry(s,'div.commentBox textarea.textInput')[0];if(t){var u=i.getID(t);if(u&&u==q){this.trackedElements[q].parent_fbid=this.unmatchedForms[r];this.trackedElements[q].formID=r;this.addJoinTableInfoToForm(s,q);delete this.unmatchedForms[r];return true;}}}}return false;},snowliftSync:function(q){var r,s=k(q);if(s&&(r=i.scry(s,'^.fbPhotosSnowboxFeedbackInput')[0])){var t=i.find(r,'input[name="feedback_params"]'),u=JSON.parse(t.value).target_fbid;this.trackedElements[q].parent_fbid=u;this.trackedElements[q].formID=r.id;this.addJoinTableInfoToForm(r,q);return true;}return false;},stopTracking:function(q){delete this.trackedElements[q];if(this.debouncers[q]){this.debouncers[q].reset();delete this.debouncers[q];}},tracker:function(q){return this.trackedElements[q];},getSubmitted:function(q){return (this.trackedElements[q]?this.trackedElements[q].submitted:false);},setSubmitted:function(q,r){if(this.trackedElements[q])this.trackedElements[q].submitted=r;},incrementClearCounter:function(q){if(!this.tracker(q))return;this.trackedElements[q].clearcounter++;this.trackedElements[q].submitted=false;var r=i.scry(k(this.trackedElements[q].formID),'input[name="clp"]')[0];if(r)r.value=JSON.stringify({censorlogger_impid:this.trackedElements[q].impid,clearcounter:this.trackedElements[q].clearcounter,element_id:q});},addJoinTableInfoToForm:function(q,r){i.prependContent(q,i.create('input',{type:'hidden',name:'clp',value:JSON.stringify({censorlogger_impid:this.impressionID,clearcounter:0,element_id:r,version:"original"})}));}},p=function(q){return j(function(){o.incrementClearCounter(q);},l,o);};e.exports=o;},null);
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","React","Image.react","ReactXUIMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=i,p=o.PropTypes,q=k.SelectableMenu,r=k.SelectableItem,s=i.createClass({displayName:"UFIOrderingModeSelector",propTypes:{onOrderChanged:p.func,orderingmodes:p.array.isRequired},getInitialState:function(){var t=null;this.props.orderingmodes.map(function(u){if(u.selected)t=u;});return {selectedMode:t};},onMenuItemClick:function(t,u){var v=u.item.getValue();this.props.orderingmodes.map(function(w){if(w.value===v)this.setState({selectedMode:w});}.bind(this));this.props.onOrderChanged(v);},render:function(){var t=i.createElement(q,{onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return i.createElement(r,{key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name);}.bind(this)));return (i.createElement("div",{className:"UFIOrderingModeSelector"},i.createElement(g,null,i.createElement(l,{className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},i.createElement(h,null,this.state.selectedMode.name,i.createElement(j,{className:"UFIOrderingModeSelectorDownCaret",src:n('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=s;},null);
__d("legacy:ScrollAwareDOM",["ScrollAwareDOM"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.ScrollAwareDOM=b('ScrollAwareDOM');},3);
__d("FeedTrackingAsync",["Arbiter","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(){g.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=h(n,['ft']);if(Object.keys(p.ft).length)i(o,p);}});}e.exports={init:j};},null);
__d("BookmarkFeedSorter",["Run"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i={init:function(j){h=j;g.onLeave(function(){h=null;});},setChecked:function(j){if(h)h.setValue(j);}};e.exports=i;},null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();i(g.prototype,{setNectarModuleData:function(j){if(this.method=='POST')h.addModuleData(this.data,j);},setNectarImpressionId:function(){if(this.method=='POST')h.addImpressionID(this.data);}});},null);
__d("OnVisible",["Arbiter","DOM","Event","Parent","Run","Vector","ViewportBounds","coalesce","copyProperties","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=[],r,s=0,t=[],u,v,w,x,y;function z(){q.forEach(function(fa){fa.remove();});if(v){v.remove();u.remove();r.unsubscribe();v=u=r=null;}s=0;q.length=0;}function aa(){if(!q.length){z();return;}t.length=0;w=l.getScrollPosition().y;x=l.getViewportDimensions().y;y=m.getTop();for(var fa=0;fa<q.length;++fa){var ga=q[fa];if(isNaN(ga.elementHeight))t.push(fa);ga.elementHeight=l.getElementDimensions(ga.element).y;ga.elementPos=l.getElementPosition(ga.element);ga.hidden=j.byClass(ga.element,'hidden_elem');if(ga.scrollArea){ga.scrollAreaHeight=l.getElementDimensions(ga.scrollArea).y;ga.scrollAreaY=l.getElementPosition(ga.scrollArea).y;}}s=fa;}function ba(){for(var fa=Math.min(q.length,s)-1;fa>=0;--fa){var ga=q[fa];if(!ga.elementPos||ga.removed){q.splice(fa,1);continue;}if(ga.hidden)continue;var ha=w+x+ga.buffer,ia=false;if(ha>ga.elementPos.y){var ja=w+y-ga.buffer,ka=w+y+x+ga.buffer,la=ga.elementPos.y+ga.elementHeight,ma=!ga.strict||(ja<ga.elementPos.y&&ka>la);ia=ma;if(ia&&ga.scrollArea){var na=ga.scrollAreaY+ga.scrollAreaHeight+ga.buffer;ia=(ga.elementPos.y>ga.scrollAreaY-ga.buffer)&&(ga.elementPos.y<na);}}if(ga.inverse?!ia:ia){ga.remove();ga.handler(t.indexOf(fa)!==-1);}}}function ca(){da();if(q.length)return;v=i.listen(window,'scroll',da);u=i.listen(window,'resize',da);r=g.subscribe('dom-scroll',da);}function da(){p(aa,ba,'OnVisible/positionCheck');}function ea(fa,ga,ha,ia,ja,ka){"use strict";this.element=fa;this.handler=ga;this.strict=ha;this.buffer=n(ia,300);this.inverse=n(ja,false);this.scrollArea=ka||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible0();if(q.length===0)k.onLeave(z);ca();q.push(this);}ea.prototype.remove=function(){"use strict";if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};ea.prototype.reset=function(){"use strict";this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible0();q.indexOf(this)===-1&&q.push(this);ca();};ea.prototype.setBuffer=function(fa){"use strict";this.buffer=fa;da();};ea.prototype.checkBuffer=function(){"use strict";da();};ea.prototype.getElement=function(){"use strict";return this.element;};ea.prototype.$OnVisible0=function(){"use strict";return i.listen(h.find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};o(ea,{checkBuffer:da});e.exports=ea;},null);
__d("PopoverAsyncMenu",["Bootloader","Event","PopoverMenu"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={},k=0;for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o,p,q,r,s,t){"use strict";this._endpoint=r;this._endpointData=t||{};this._loadingMenu=q;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=h.listen(p,'mouseover',this.fetchMenu.bind(this));i.call(this,o,p,null,s);}n.prototype._onLayerInit=function(){"use strict";if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this.fetchMenu();this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};n.prototype.fetchMenu=function(){"use strict";if(this._fetched)return;g.loadModules(["AsyncRequest"],function(o){new o().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this));this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};n.setMenu=function(o,p){"use strict";j[o].setMenu(p);};n.getInstance=function(o){"use strict";return j[o];};e.exports=n;},null);
__d("ScrollingPager",["Arbiter","CSS","DOM","OnVisible","UIPagelet","$","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={};function p(q,r,s,t){"use strict";this.scroll_loader_id=q;this.pagelet_src=r;this.data=s;this.options=t||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=q;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}p.prototype.setBuffer=function(q){"use strict";this.options.buffer=q;this.onvisible&&this.onvisible.setBuffer(q);};p.prototype.getBuffer=function(){"use strict";return this.options.buffer;};p.prototype.register=function(){"use strict";this.onvisible=new j(l(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,n(this.scroll_area_id));o[this.scroll_loader_id]=this;g.inform(p.REGISTERED,{id:this.scroll_loader_id});};p.prototype.getInstance=function(q){"use strict";return o[q];};p.prototype.getHandler=function(){"use strict";if(this.handler)return this.handler;function q(r){var s=n(this.scroll_loader_id);if(!s){this.onvisible.remove();return;}h.addClass(s.firstChild,'async_saving');var t=this.options.handler,u=this.options.force_remove_pager&&(this.scroll_loader_id!==this.target_id);this.options.handler=function(){g.inform('ScrollingPager/loadingComplete');t&&t.apply(null,arguments);if(u)i.remove(s);};if(r)this.data.pager_fired_on_init=true;k.loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return q.bind(this);};p.prototype.setHandler=function(q){"use strict";this.handler=q;};p.prototype.removeOnVisible=function(){"use strict";this.onvisible.remove();};p.prototype.checkBuffer=function(){"use strict";this.onvisible&&this.onvisible.checkBuffer();};p.getInstance=function(q){"use strict";return o[q];};m(p,{REGISTERED:'ScrollingPager/registered'});e.exports=p;},null);
__d("legacy:ui-scrolling-pager-js",["ScrollingPager"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.ScrollingPager=b('ScrollingPager');},3);
__d("FbFeedCommentUFIScroller",["Arbiter","DOMScroll","containsNode","ge"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();g.subscribe('comment/focus',function(k,l){var m=l.element,n=j('content');if(n&&i(n,m))h.ensureVisible(m,null,60,250);});e.exports={};},null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=false,j=false,k={likeContent:function(){},like:function(l,m){this.likeContent=l;if(j)return;if(i){this.likeContent();}else{var n=new h().setURI('/like/confirm_like.php').setRelativeTo(m);g.send(n,function(o){j=true;o.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function(){return j;},onCloseLikeConfirmDialog:function(){j=false;},likeSkipConfirmation:function(l){i=l;this.likeContent();}};e.exports=k;},null);
__d("PopoverLoadingMenu",["BehaviorsMixin","DOM","PopoverMenuInterface","copyProperties","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();for(var m in i)if(i.hasOwnProperty(m))o[m]=i[m];var n=i===null?null:i.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=i;function o(p){"use strict";i.call(this);this._config=p||{};this._theme=p.theme||{};}o.prototype.getRoot=function(){"use strict";if(!this._root){this._root=h.create('div',{className:l("_54nq",this._config.className,this._theme.className)},h.create('div',{className:"_54ng"},h.create('div',{className:"_54nf _54af"},h.create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};j(o.prototype,g,{_root:null});e.exports=o;},null);
__d("ButtonGroupX",["ArbiterMixin","mixin"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=h(g);for(var j in i)if(i.hasOwnProperty(j))l[j]=i[j];var k=i===null?null:i.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=i;function l(m,n){"use strict";n=n||{};this._root=m;this._radioButtons=n.radioButtons||[];this._selected=n.selected;this.initButtonListeners();}l.prototype.initButtonListeners=function(){"use strict";var m=this._radioButtons.length;while(m--){var n=this._radioButtons[m];n.subscribe('select',this.selectButton.bind(this,n));}};l.prototype.getSelected=function(){"use strict";return this._selected;};l.prototype.getSelectedValue=function(){"use strict";return this._selected?this._selected.getValue():null;};l.prototype.selectButton=function(m){"use strict";if(this._selected!==m){this.setSelected(m);this.inform('change',{selected:m});}return this;};l.prototype.setSelected=function(m){"use strict";if(this._selected!==m){if(this._selected)this._selected.setSelected(false);m.setSelected(true);this._selected=m;}return this;};l.prototype.setSelectedValue=function(m){"use strict";var n=this._radioButtons.length;while(n--){var o=this._radioButtons[n];if(o.getValue()===m)return this.setSelected(o);}return this;};e.exports=l;},null);
__d("ContextualLayerAsyncRelative",["Event","Parent","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};j.prototype.disable=function(){"use strict";this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};j.prototype._attachListener=function(){"use strict";this._listener=g.listen(this._layer.getRoot(),'click',this._onclick.bind(this));};j.prototype._onclick=function(k){"use strict";var l=h.byTag(k.getTarget(),'A');if(!l)return;var m=l.getAttribute('ajaxify'),n=l.href,o=m||n;if(l.rel==='async'||l.rel==='async-post'){d(['AsyncRequest'],function(p){p.bootstrap(o,this._layer.getContext(),l.rel==='async-post');}.bind(this));return false;}};i(j.prototype,{_layerSubscription:null,_listener:null});e.exports=j;},null);
__d("Hovercard",["AccessibleLayer","Arbiter","AsyncRequest","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","JSXDOM","LayerAutoFocus","LayerRefocusOnHide","Parent","Style","Vector","clickRefAction","csx","cx","getInlineBoundingRect","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z={},aa={},ba=null,ca=null,da=null,ea=null,fa=150,ga=700,ha=1000,ia=250,ja=50,ka=null,la=null,ma=null,na=null;function oa(event){var eb=r.byTag(event.getTarget(),'a');db.processNode(eb)&&event.stop();}function pa(eb){ca=eb;if(!qa(eb)){var fb;if(!eb||!(fb=ra(eb))||bb(eb)){aa.moveToken&&aa.moveToken.remove();aa={};return false;}if(aa.node!=eb){aa.moveToken&&aa.moveToken.remove();aa={node:eb,endpoint:fb,pos:null};}}return true;}function qa(eb){return eb&&ba&&aa.node==eb;}function ra(eb){return eb.getAttribute('data-hovercard');}function sa(eb){var fb=m.scry(eb,"^._5jmm ._2orz").length;if(fb)return;if(!eb.leaveToken){var gb=n.listen(eb,'mouseleave',function(){clearTimeout(ka);clearTimeout(la);gb.remove();eb.leaveToken=null;ca=null;if(!db.contains(eb))db.hide();});eb.leaveToken=gb;}if(!aa.moveToken)aa.moveToken=n.listen(eb,'mousemove',function(event){aa.pos=t.getEventPosition(event);});clearTimeout(ka);clearTimeout(la);clearTimeout(na);na=null;var hb=fa,ib=ba?ia:ga;if(eb.getAttribute('data-hovercard-instant'))hb=ib=ja;ka=setTimeout(wa.bind(null,eb),hb);la=setTimeout(ta.bind(null,eb),ib);}function ta(eb,fb){if(aa.node!=eb)return;var gb=z[ra(eb)];if(gb){va(gb);}else if(fb){va(za());}else{var hb=ba?ia:ga;ma=setTimeout(ta.bind(null,eb,true),ha-hb);}}function ua(){db.hide(true);clearTimeout(la);}function va(eb){var fb=aa.node,gb=ba,hb=gb!=fb,ib=fb.getAttribute('data-hovercard-position');ib&&eb.setPosition(ib);if(ea){var jb=ea.getContentRoot();if(!l.containsIncludingLayers(jb,fb))ea.hide();}if(!m.contains(document.body,fb)){db.hide(true);return;}ba=fb;ea=eb;eb.setContextWithBounds(fb,x(fb,aa.pos)).show();if(hb)setTimeout(function(){u('himp',ba,null,'FORCE',{ft:{evt:39}});},0);}function wa(eb){if(eb.id&&z[eb.id]!=null)return;var fb=ra(eb);if(z[fb]!=null)return;xa(fb);var gb=function(){db.dirty(fb);ua();};new i(fb).setData({endpoint:fb}).setMethod('GET').setReadOnly(true).setErrorHandler(gb).setTransportErrorHandler(gb).send();}function xa(eb){z[eb]=false;}function ya(eb){var fb=aa.node.getAttribute('data-hovercard-offset-x')||0;eb.setOffsetX(parseInt(fb,10));var gb=aa.node.getAttribute('data-hovercard-offset-y')||0;eb.setOffsetY(parseInt(gb,10));}var za=function(){if(!da){da=new j({width:275,theme:k},o.div({className:"_7lk"},y._("Loading...")));da.disableBehavior(g).disableBehavior(p).disableBehavior(q);ab(da);}var eb=aa.node.getAttribute('data-hovercard-position');da.setPosition(eb);ya(da);return da;};function ab(eb){var fb=[eb.subscribe('mouseenter',function(){clearTimeout(na);na=null;ca=aa.node;}),eb.subscribe('mouseleave',function(){eb.hide();ca=null;}),eb.subscribe('destroy',function(){while(fb.length)fb.pop().unsubscribe();fb=null;})];}function bb(eb){return (r.byClass(eb,"_7lu")!==null);}var cb=true,db={hide:function(eb){if(!ba)return;if(eb){clearTimeout(na);na=null;if(ea)ea.hide();ca=null;ba=null;ea=null;}else{var fb=aa.node.getAttribute('data-hovercard-instant')?ja:ia;if(na===null)na=setTimeout(db.hide.bind(null,true),fb);}},setDialog:function(eb,fb){fb.disableBehavior(g).disableBehavior(p).disableBehavior(q);z[eb]=fb;ab(fb);if(aa.endpoint==eb&&ca==aa.node){za().hide();ya(fb);va(fb);}},getDialog:function(eb){return z[eb];},contains:function(eb){if(ea)return l.containsIncludingLayers(ea.getContentRoot(),eb);return false;},dirty:function(eb){var fb=z[eb];if(fb){fb.destroy();delete z[eb];}},dirtyAll:function(){for(var eb in z){var fb=z[eb];fb&&db.dirty(eb);}h.inform('Hovercard/dirty');},processNode:function(eb){if(eb&&pa(eb)){sa(eb);return true;}return false;},setDirtyAllOnPageTransition:function(eb){cb=eb;},getLoadingDelay:function(){return ha;},getHideDelay:function(){return ia;}};(function(){n.listen(document.documentElement,'mouseover',oa);n.listen(window,'scroll',function(){if(ba&&s.isFixed(ba))db.hide(true);});h.subscribe('page_transition',function(){ua();cb&&db.dirtyAll();},h.SUBSCRIBE_NEW);})();e.exports=db;},null);