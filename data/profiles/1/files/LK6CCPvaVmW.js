/*!CK:1495195984!*//*1430111901,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Mg\/sc"]); }

__d("RequiredFormListener",["Event","Input"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('required')&&h.isEmpty(j[k])){j[k].focus();return false;}},g.Priority.URGENT);},null);
__d("LayerHideOnSuccess",["copyProperties"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._layer=i;}h.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};h.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};g(h.prototype,{_subscription:null});e.exports=h;},null);
__d("Overlay",["CSS","DataStore","DOM","Layer","LayerButtons","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerFormHooks","LayerHideOnBlur","LayerHideOnEscape","LayerHideOnSuccess","LayerHideOnTransition","LayerMouseHooks","LayerTabIsolation","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();for(var w in j)if(j.hasOwnProperty(w))y[w]=j[w];var x=j===null?null:j.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=j;function y(z,aa){"use strict";z=v({buildWrapper:true},z||{});this._shouldBuildWrapper=z.buildWrapper;j.call(this,z,aa);}y.prototype._configure=function(z,aa){"use strict";x._configure.call(this,z,aa);var ba=this.getRoot();this._overlay=i.scry(ba,'div.uiOverlay')[0]||ba;g.hide(ba);i.appendContent(this.getInsertParent(),ba);h.set(this._overlay,'overlay',this);var ca=h.get(this._overlay,'width');ca&&this.setWidth(ca);if(this.setFixed)this.setFixed(h.get(this._overlay,'fixed')=='true');if(h.get(this._overlay,'fadeonshow')!='false')this.enableBehavior(n);if(h.get(this._overlay,'fadeonhide')!='false')this.enableBehavior(m);if(h.get(this._overlay,'hideonsuccess')!='false')this.enableBehavior(r);if(h.get(this._overlay,'hideonblur')=='true')this.enableBehavior(p);if(h.get(this._overlay,'destroyonhide')!='false')this.enableBehavior(l);return this;};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([k,o,t,q,s,u]);};y.prototype.initWithoutBuildingWrapper=function(){"use strict";this._shouldBuildWrapper=false;return this.init.apply(this,arguments);};y.prototype._buildWrapper=function(z,aa){"use strict";aa=x._buildWrapper.call(this,z,aa);if(!this._shouldBuildWrapper){this._contentRoot=aa;return aa;}this._contentRoot=i.create('div',{className:'uiOverlayContent'},aa);return i.create('div',{className:'uiOverlay'},this._contentRoot);};y.prototype.getContentRoot=function(){"use strict";return this._contentRoot;};y.prototype.destroy=function(){"use strict";h.remove(this.getRoot(),'overlay');x.destroy.call(this);};e.exports=y;},null);
__d("swfobject",["AsyncRequest","Bootloader","CSS","copyProperties","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();if(typeof l=="undefined")var l={};if(typeof l.util=="undefined")l.util={};if(typeof l.SWFObjectUtil=="undefined")l.SWFObjectUtil={};l.SWFObject=function(n,o,p,q,r,s,t,u,v,w){if(!document.getElementById)return;this.DETECT_KEY=w?w:'detectflash';this.skipDetect=l.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(n)this.setAttribute('swf',n);if(o)this.setAttribute('id',o);if(p)this.setAttribute('width',p);if(q)this.setAttribute('height',q);this.installedVer=l.SWFObjectUtil.getPlayerVersion();if(r){if(!(r instanceof Array))r=[r];var x;r.forEach(function(aa){x=new l.PlayerVersion(aa.toString().split('.'));if(x.major==this.installedVer.major){this.setAttribute('version',x);return;}else if(!this.getAttribute('version')||x.major<this.getAttribute('version').major)this.setAttribute('version',x);}.bind(this));}if(!window.opera&&document.all&&this.installedVer.major>7)if(!l.unloadSet){l.SWFObjectUtil.prepUnload=function(){var aa=function(){},ba=function(){};window.attachEvent("onunload",l.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",l.SWFObjectUtil.prepUnload);l.unloadSet=true;}if(s)this.addParam('bgcolor',s);var y=t?t:'high';this.addParam('quality',y);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var z=(u)?u:window.location;this.setAttribute('xiRedirectUrl',z);this.setAttribute('redirectUrl','');if(v)this.setAttribute('redirectUrl',v);};l.SWFObject.ieWorkaroundApplied=false;l.SWFObject.ensureIEWorkaroundAttached=function(){if(!l.SWFObject.ieWorkaroundApplied&&document.attachEvent){l.SWFObject.ieWorkaroundApplied=true;document.attachEvent('onpropertychange',l.SWFObject.onDocumentPropertyChange);}};l.SWFObject.onDocumentPropertyChange=function(event){if(event.propertyName=="title"){var n=document.title;if(n!=null&&n.indexOf('#!')!=-1){n=n.substring(0,n.indexOf('#!'));document.title=n;}}};j(l.SWFObject.prototype,{useExpressInstall:function(n){this.xiSWFPath=!n?"/swf/expressinstall.swf":n;this.setAttribute('useExpressInstall',true);},setAttribute:function(n,o){this.attributes[n]=o;},getAttribute:function(n){return this.attributes[n]||"";},addParam:function(n,o){this.params[n]=o;},getParams:function(){return this.params;},addVariable:function(n,o){this.variables[n]=o;},getVariable:function(n){return this.variables[n]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var n=[],o,p=this.getVariables();for(o in p)n[n.length]=o+"="+p[o];return n.join('&');},getSWFHTML:function(){var n,o,p;if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}o={type:'application/x-shockwave-flash',src:this.getAttribute('swf'),width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;',id:this.getAttribute('id'),name:this.getAttribute('id')};var q=this.getParams();for(var r in q)o[r]=q[r];p=this.getVariablePairs();if(p)o.flashvars=p;n=m('embed',o,null);}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}o={id:this.getAttribute('id'),classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',width:this.getAttribute('width'),height:this.getAttribute('height'),style:this.getAttribute('style')||'display: block;'};var s=m('param',{name:'movie',value:this.getAttribute('swf')},null),q=this.getParams();for(var r in q)s+=m('param',{name:r,value:q[r]},null);p=this.getVariablePairs();if(p)s+=m('param',{name:'flashvars',value:p},null);n=m('object',o,s);}return n;},write:function(n){if(this.getAttribute('useExpressInstall')){var o=new l.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(o)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}var p=(typeof n=='string')?document.getElementById(n):n;if(!p)return false;i.addClass(p,'swfObject');p.setAttribute('data-swfid',this.getAttribute('id'));if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){l.SWFObject.ensureIEWorkaroundAttached();p.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!="")document.location.replace(this.getAttribute('redirectUrl'));var q=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').release+'.'+this.getAttribute('version').build,r=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.release+'.'+this.installedVer.build;this.fallback_js_fcn(r,q);p.innerHTML=this.fallback_html;}return false;}});l.SWFObjectUtil.getPlayerVersion=function(){var n=new l.PlayerVersion([0,0,0,0]),o;if(navigator.plugins&&navigator.mimeTypes.length){for(var p=0;p<navigator.plugins.length;p++)try{var r=navigator.plugins[p];if(r.name=='Shockwave Flash'){o=new l.PlayerVersion(r.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+(r|d)|\s+b[0-9]+)/,".").split("."));if(typeof n=='undefined'||o.major>n.major||(o.major==n.major&&(o.minor>n.minor||(o.minor==n.minor&&(o.release>n.release||(o.release==n.release&&o.build>n.build))))))n=o;}}catch(q){}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var s=1,t=3;while(s)try{t++;s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t);n=new l.PlayerVersion([t,0,0]);}catch(u){s=null;}}else{try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(v){try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");n=new l.PlayerVersion([6,0,21]);s.AllowScriptAccess="always";}catch(w){if(n.major==6)return n;}try{s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(x){}}if(s!=null)n=new l.PlayerVersion(s.GetVariable("$version").split(" ")[1].split(","));}return n;};l.PlayerVersion=function(n){this.major=n[0]!=null?parseInt(n[0],10):0;this.minor=n[1]!=null?parseInt(n[1],10):0;this.release=n[2]!=null?parseInt(n[2],10):0;this.build=n[3]!=null?parseInt(n[3],10):0;};l.PlayerVersion.prototype.versionIsValid=function(n){if(this.major<n.major)return false;if(this.major>n.major)return true;if(this.minor<n.minor)return false;if(this.minor>n.minor)return true;if(this.release<n.release)return false;if(this.release>n.release)return true;if(this.build<n.build)return false;return true;};l.util={getRequestParameter:function(n){var o=document.location.search||document.location.hash;if(n==null)return o;if(o){var p=o.substring(1).split("&");for(var q=0;q<p.length;q++)if(p[q].substring(0,p[q].indexOf("="))==n)return p[q].substring((p[q].indexOf("=")+1));}return "";}};l.SWFObjectUtil.cleanupSWFs=function(){var n=document.getElementsByTagName("OBJECT");for(var o=n.length-1;o>=0;o--){n[o].style.display='none';for(var p in n[o])if(typeof n[o][p]=='function')n[o][p]=function(){};}};if(!document.getElementById&&document.all)document.getElementById=function(n){return document.all[n];};l.spawn_flash_update_dialog=function(){new g().setURI('/ajax/flash_update_dialog.php').setMethod('GET').setReadOnly(true).send();};l.showFlashErrorDialog=function(n,o){h.loadModules(["ErrorDialog"],function(p){p.show(n,o);});};function m(n,o,p){var q=/^[A-Za-z0-9\-]+$/;if(!n.match(q))throw new Error('Invalid tag '+n);var r='<'+n;for(var s in o){if(!s.match(q))throw new Error('Invalid attr '+s);r+=' '+s+'="'+k(o[s])+'"';}if(p===null){return r+'/>';}else return r+'>'+p+'</'+n+'>';}e.exports=a.deconcept||l;},null);
__d("SoundPlayer",["Arbiter","URI","createArrayFromMixed","swfobject"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('swfobject').SWFObject,k={},l=null,m=false,n='so_sound_player',o='/swf/SoundPlayer.swf?v=1',p='10.0.22.87',q=null;function r(z){var aa=h(z);if(!aa.getDomain())return h().setPath(aa.getPath()).toString();return z;}function s(z){var aa=h(z).getPath();if(/\.mp3$/.test(aa))return 'audio/mpeg';if(/\.og[ga]$/.test(aa))return 'audio/ogg';return '';}function t(){if(!q){var z=document.createElement('audio');if(!z||!z.canPlayType)return null;z.setAttribute('preload','auto');document.body.appendChild(z);q=z;}return q;}function u(){var z=document[n]||window[n];if(z)if(!z.playSound&&z.length)z=z[0];return (z&&z.playSound&&z.loopSound)?z:null;}function v(){return m;}function w(z,aa,ba){l={path:z,sync:aa,loop:ba};}function x(){m=true;if(l){var z=u();if(l.loop){z.loopSound(l.path,l.sync);}else z.playSound(l.path,l.sync);}}var y={init:function(z){z=i(z);var aa;for(var ba=0;ba<z.length;++ba){aa=z[ba];if(k[aa])return;}var ca=t();for(ba=0;ca&&ba<z.length;++ba){aa=z[ba];if(ca.canPlayType(aa)){k[aa]=true;return;}}k['audio/mpeg']=true;if(u())return;try{g.registerCallback(x,['sound/player_ready','sound/ready']);var ea=document.createElement('div');ea.id='sound_player_holder';document.body.appendChild(ea);var fa=new j(o,n,'1px','1px',[p],'#ffffff');fa.addParam('allowscriptaccess','always');fa.addParam('wmode','transparent');fa.addVariable('swf_id',n);fa.fallback_html=' ';fa.write(ea.id);window[n]=fa;g.inform('sound/player_ready');}catch(da){}},play:function(z,aa){z=i(z);var ba=t(),ca,da;for(var ea=0;ba&&ea<z.length;++ea){ca=z[ea];da=s(ca);if(!ba.canPlayType(da))continue;y.init([da]);ba.src=r(ca);if(aa){ba.setAttribute('loop','');}else ba.removeAttribute('loop');ba.play();return;}for(ea=0;ea<z.length;++ea){ca=r(z[ea]);da=s(ca);if(da!='audio/mpeg')continue;y.init([da]);var fa=u();if(!v()){w(ca,true,aa);return;}else if(fa){if(aa){fa.loopSound(ca,true);}else fa.playSound(ca,true);return;}}},stop:function(z){z=i(z);for(var aa=0;aa<z.length;++aa){var ba=r(z[aa]),ca=t(),da=u();if(ca&&ca.src==ba){ca.pause();ca.removeAttribute('src');}else da&&da.stopSound(ba);}}};e.exports=y;},null);
__d("SoundSynchronizer",["SoundPlayer","WebStorage","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='fb_sounds_playing3';function k(){var o=h.getLocalStorage();if(o)try{var q=o[j];if(q){q=JSON.parse(q);if(Array.isArray(q))return q;}}catch(p){}return [];}function l(o){var p=h.getLocalStorage();if(p){var q=k();q.push(o);while(q.length>5)q.shift();try{p[j]=JSON.stringify(q);}catch(r){}}}function m(o){return k().some(function(p){return p===o;});}var n={play:function(o,p,q){o=i(o);p=p||(o[0]+Math.floor(Date.now()/1000));if(m(p))return;g.play(o,q);l(p);},isSupported:function(){return !!h.getLocalStorage();}};e.exports=n;},null);
__d("SoundRPC",["Event","SoundSynchronizer"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(k,l,m){h.play(k,l,m);}var j={playLocal:i,playRemote:function(k,l,m,n){var o={paths:l,sync:m,loop:n};k.postMessage(JSON.stringify(o),'*');},supportsRPC:function(){return !!window.postMessage;},_listen:function(){g.listen(window,'message',function(k){if(!/\.facebook.com$/.test(k.origin))return;var l=JSON.parse(k.data||'{}');i(l.paths,l.sync,l.loop);});}};e.exports=j;},null);
__d("SpotlightViewport",["Locale","Parent","React","Vector","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=i,n=m.PropTypes,o=i.createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:n.object.isRequired},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},getInitialState:function(){return {currentActiveSection:this.sections.NONE,active:true};},_onMouseMove:function(event){var p=j.getEventPosition(event.nativeEvent),q=j.getElementPosition(i.findDOMNode(this)),r,s=p.x-q.x,t=s/this.props.stageDimensions.x;if(g.isRTL()){r=t>(1-this.PAGE_TO_PREV_PERCENTAGE);}else r=t<this.PAGE_TO_PREV_PERCENTAGE;if(r){this.setState({currentActiveSection:this.sections.BACKWARD});}else this.setState({currentActiveSection:this.sections.FORWARD});},_onClick:function(event){var p=this.state.currentActiveSection==this.sections.FORWARD,q=event.target;if(!h.byClass(q,"_51an"))this.props.onClick&&this.props.onClick(p);},_onMouseEnter:function(){this.setState({active:true});},_onMouseLeave:function(){this.setState({active:false});},render:function(){var p=(("_4-of")+(!this.state.active&&!this.props.active?' '+"_50-l":'')+(this.state.currentActiveSection===this.sections.BACKWARD?' '+"_516a":'')+(this.state.currentActiveSection===this.sections.FORWARD?' '+"_516b":'')+(this.props.showLoadingIndicator?' '+"_51jp":''));if(this.props.className)p=l(p,this.props.className);var q={};if(this.props.stageDimensions)q={height:this.props.stageDimensions.y,widht:this.props.stageDimensions.x};return (i.createElement("div",{className:p,style:q,onClick:this._onClick,onMouseMove:this._onMouseMove,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},this.props.children,i.createElement("div",{className:"_4-og"},i.createElement("span",{className:"_4-oh"}),this.props.media,i.createElement("div",{className:"_4-oi"}))));}});e.exports=o;},null);
__d("ContextualDialogFooterLink",["CSS","DOM","Event","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){"use strict";this._layer=l;}k.prototype.enable=function(){"use strict";var l=this._layer.getRoot(),m=h.scry(l,'.uiContextualDialogFooterLink')[0],n='uiContextualDialogHoverFooterArrow';this._subscriptions=[i.listen(m,'mouseenter',g.addClass.bind(null,l,n)),i.listen(m,'mouseleave',g.removeClass.bind(null,l,n))];};k.prototype.disable=function(){"use strict";this._subscriptions.forEach(function(l){l.remove();});this._subscriptions=null;};j(k.prototype,{_subscriptions:null});e.exports=k;},null);
__d("LegacyContextualDialog",["Arbiter","ArbiterMixin","ARIA","Bootloader","ContextualDialogFooterLink","ContextualThing","CSS","DataStore","DOM","Event","LayerAutoFocus","LayerRefocusOnHide","Locale","Overlay","Parent","Scroll","Style","Vector","$","copyProperties","getOverlayZIndex","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){b.__markCompiled&&b.__markCompiled();for(var ca in t)if(t.hasOwnProperty(ca))ea[ca]=t[ca];var da=t===null?null:t.prototype;ea.prototype=Object.create(da);ea.prototype.constructor=ea;ea.__superConstructor__=t;function ea(){"use strict";if(t!==null)t.apply(this,arguments);}ea.prototype._configure=function(fa,ga){"use strict";da._configure.call(this,fa,ga);var ha=this.getRoot(),ia=n.get.bind(null,ha);this.setAlignH(ia('alignh','left'));this.setOffsetX(ia('offsetx',0));this.setOffsetY(ia('offsety',0));this.setPosition(ia('position','above'));this._hasFooter=ia('hasfooter',false);if(this._hasFooter){var ja=o.scry(ha,'.uiContextualDialogFooterLink')[0];ja&&this.enableBehavior(k);}this.enableBehaviors(this._getDefaultBehaviors());this._setContextSubscription=this.subscribe('beforeshow',function(){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;var la=ia('context');if(la){this.setContext(y(la));}else{la=ia('contextselector');if(la)this.setContext(o.find(document,la));}}.bind(this));this._content=o.scry(ha,'.uiContextualDialogContent')[0];if(this._content){this._content.setAttribute('role','dialog');var ka=o.scry(this._content,'.legacyContextualDialogTitle')[0];if(ka)this._content.setAttribute('aria-labelledby',o.getID(ka));}this._showSubscription=this.subscribe('show',function(){var la=ba(this.updatePosition,this);this._resizeListener=p.listen(window,'resize',la);this._reflowSubscription=g.subscribe('reflow',la);this._setupScrollListener(this._scrollParent);l.register(ha,this.context);g.inform('layer_shown',{type:'ContextualDialog'});}.bind(this));this._hideSubscription=this.subscribe('hide',function(){this._teardownResizeAndReflowListeners();this._teardownScrollListener();g.inform('layer_hidden',{type:'ContextualDialog'});}.bind(this));return this;};ea.prototype._getDefaultBehaviors=function(){"use strict";return da._getDefaultBehaviors.call(this).concat([q,r]);};ea.prototype._buildWrapper=function(fa,ga){"use strict";var ha=da._buildWrapper.call(this,fa,ga);if(!this._shouldBuildWrapper)return ha;m.addClass(ha,'uiContextualDialog');return o.create('div',{className:'uiContextualDialogPositioner'},ha);};ea.prototype.setWidth=function(fa){"use strict";this._width=Math.floor(fa);return this;};ea.prototype.setFixed=function(fa){"use strict";fa=!!fa;m.conditionClass(this.getRoot(),'uiContextualDialogFixed',fa);this._fixed=fa;return this;};ea.prototype.setAlignH=function(fa){"use strict";this.alignH=fa;this._updateAlignmentClass();this._shown&&this.updatePosition();this.position&&this._updateArrow();return this;};ea.prototype.getContent=function(){"use strict";return this._content;};ea.prototype.getContext=function(){"use strict";return this.context;};ea.prototype.setContext=function(fa){"use strict";if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}fa=y(fa);if(this.context&&this.context!=fa)n.remove(this.context,'LegacyContextualDialog');this.context=fa;i.setPopup(this.getCausalElement(),this.getRoot());var ga=u.byClass(fa,'fbPhotoSnowlift');this.setInsertParent(ga||document.body);if(this._scrollListener&&this._scrollParent!==ga){this._teardownScrollListener();this._setupScrollListener(ga);}this._scrollParent=ga;var ha=aa(fa,this._insertParent);w.set(this.getRoot(),'z-index',ha>200?ha:'');n.set(this.context,'LegacyContextualDialog',this);return this;};ea.prototype.getCausalElement=function(){"use strict";return da.getCausalElement.call(this)||this.context;};ea.prototype.listen=function(fa,ga){"use strict";return p.listen(this.getRoot(),fa,ga);};ea.prototype.setOffsetX=function(fa){"use strict";this.offsetX=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setOffsetY=function(fa){"use strict";this.offsetY=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setPosition=function(fa){"use strict";this.position=fa;for(var ga in ea.POSITION_TO_CLASS)m.conditionClass(this.getRoot(),ea.POSITION_TO_CLASS[ga],fa==ga);this._updateAlignmentClass();this._shown&&this.updatePosition();this._updateArrow();return this;};ea.prototype.updatePosition=function(){"use strict";if(!this.context)return false;if(this._width)w.set(this._overlay,'width',this._width+'px');var fa=this._fixed?'viewport':'document',ga=x.getElementPosition(this.context,fa),ha=this._scrollParent;if(ha)ga=ga.sub(x.getElementPosition(ha,'document')).add(v.getLeft(ha),v.getTop(ha));var ia=x.getElementDimensions(this.context),ja=this.position=='above'||this.position=='below',ka=s.isRTL();if((this.position=='right'||(ja&&this.alignH=='right'))!=ka)ga=ga.add(ia.x,0);if(this.position=='below')ga=ga.add(0,ia.y);var la=new x(0,0);if(ja&&this.alignH=='center'){la=la.add((ia.x-this._width)/2,0);}else{var ma=ja?ia.x:ia.y,na=2*ea.ARROW_INSET;if(ma<na){var oa=ma/2-ea.ARROW_INSET;if(ja&&(this.alignH=='right'!=ka))oa=-oa;la=la.add(ja?oa:0,ja?0:oa);}}la=la.add(this.offsetX,this.offsetY);if(ka)la=la.mul(-1,1);ga=ga.add(la);if(this._fixed)ga=new x(ga.x,ga.y,'document');ga.setElementPosition(this.getRoot());this._adjustVerticalPosition();this._adjustHorizontalPosition();return true;};ea.prototype.scrollTo=function(){"use strict";if(this.context)j.loadModules(["DOMScroll"],function(fa){fa.scrollTo(this.context,true,true);}.bind(this));};ea.prototype.destroy=function(){"use strict";this.unsubscribe(this._showSubscription);this.unsubscribe(this._hideSubscription);if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}this._teardownScrollListener();this._teardownResizeAndReflowListeners();this.context&&n.remove(this.context,'LegacyContextualDialog');da.destroy.call(this);};ea.prototype._adjustVerticalPosition=function(){"use strict";if(this.position!='left'&&this.position!='right'){w.set(this._overlay,'top','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').y,ha=x.getElementDimensions(this._overlay).y,ia=x.getViewportDimensions().y,ja=Math.min(Math.max(ga,ea.MIN_TOP_GAP),ea.TOP_MARGIN),ka=Math.min(Math.max(0,ga+ha+ea.BOTTOM_MARGIN-ia),Math.max(-ja,ga-ja),ha-2*ea.ARROW_INSET);w.set(this._overlay,'top',(-1*ka)+'px');w.set(this._arrow,'top',ea.ARROW_OFFSET+'px');w.set(this._arrow,'marginTop',ka+'px');};ea.prototype._adjustHorizontalPosition=function(){"use strict";if((this.position!='above'&&this.position!='below')||this.alignH!='left'){w.set(this._overlay,'left','');w.set(this._overlay,'right','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').x,ha=x.getElementDimensions(this._overlay).x,ia=x.getViewportDimensions().x,ja=s.isRTL(),ka;if(!ja){ka=ga+ha+ea.RIGHT_MARGIN-ia;}else ka=ea.LEFT_MARGIN+ha-ga;ka=Math.min(Math.max(0,ka),ha-2*ea.ARROW_INSET);w.set(this._overlay,ja?'right':'left',-1*ka+'px');w.set(this._arrow,ja?'right':'left',ea.ARROW_OFFSET+'px');w.set(this._arrow,ja?'marginRight':'marginLeft',ka+'px');};ea.prototype._updateArrow=function(){"use strict";var fa=0;if(this.position=='above'||this.position=='below')switch(this.alignH){case 'center':fa=50;break;case 'right':fa=100;break;}this._renderArrow(ea.POSITION_TO_ARROW[this.position],fa);};ea.prototype._renderArrow=function(fa,ga){"use strict";for(var ha in ea.ARROW_CLASS)m.conditionClass(this._overlay,ea.ARROW_CLASS[ha],fa==ha);m.conditionClass(this._overlay,'uiContextualDialogWithFooterArrowBottom',fa=='bottom'&&this._hasFooter);if(fa=='none')return;if(!this._arrow){this._arrow=o.create('i',{className:'uiContextualDialogArrow'});o.appendContent(this._overlay,this._arrow);}w.set(this._arrow,'top','');w.set(this._arrow,'left','');w.set(this._arrow,'right','');w.set(this._arrow,'margin','');var ia=fa=='top'||fa=='bottom',ja=ia?(s.isRTL()?'right':'left'):'top';ga=ga||0;w.set(this._arrow,ja,ga+'%');var ka=ea.ARROW_LENGTH+ea.ARROW_OFFSET*2,la=-(ka*ga/100-ea.ARROW_OFFSET);w.set(this._arrow,'margin-'+ja,la+'px');};ea.prototype._updateAlignmentClass=function(){"use strict";m.conditionClass(this.getRoot(),ea.RIGHT_ALIGNED_CLASS,(this.position=='above'||this.position=='below')&&this.alignH=='right');};ea.prototype._setupScrollListener=function(fa){"use strict";this._scrollListener=p.listen(fa||window,'scroll',ba(this._adjustVerticalPosition,this));};ea.prototype._teardownScrollListener=function(){"use strict";if(this._scrollListener){this._scrollListener.remove();this._scrollListener=null;}};ea.prototype._teardownResizeAndReflowListeners=function(){"use strict";if(this._resizeListener){this._resizeListener.remove();this._resizeListener=null;}if(this._reflowSubscription){this._reflowSubscription.unsubscribe();this._reflowSubscription=null;}};ea.getInstance=function(fa){"use strict";var ga=n.get(fa,'LegacyContextualDialog');if(!ga){var ha=u.byClass(fa,'uiOverlay');if(ha)ga=n.get(ha,'overlay');}return ga;};z(ea,h,{ARROW_OFFSET:15,ARROW_LENGTH:16,ARROW_INSET:22,TOP_MARGIN:50,BOTTOM_MARGIN:30,LEFT_MARGIN:15,RIGHT_MARGIN:30,MIN_TOP_GAP:5,POSITION_TO_CLASS:{above:'uiContextualDialogAbove',below:'uiContextualDialogBelow',left:'uiContextualDialogLeft',right:'uiContextualDialogRight'},RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',ARROW_CLASS:{bottom:'uiContextualDialogArrowBottom',top:'uiContextualDialogArrowTop',right:'uiContextualDialogArrowRight',left:'uiContextualDialogArrowLeft'},POSITION_TO_ARROW:{above:'bottom',below:'top',left:'right',right:'left'}});z(ea.prototype,{_scrollListener:null,_scrollParent:null,_width:null,_fixed:false,_hasFooter:false,_showSubscription:null,_hideSubscription:null,_setContextSubscription:null,_resizeListener:null,_reflowSubscription:null});e.exports=ea;},null);