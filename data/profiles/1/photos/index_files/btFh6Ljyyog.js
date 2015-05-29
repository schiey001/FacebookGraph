/*!CK:488582081!*//*1432799816,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xzJRp"]); }

__d("ReactComposerConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog"};},null);
__d("InteractionLogger",["Arbiter","Banzai","Event","PageEvents","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n){n=n||{};this.profiler={};this.log={};this.lastInteraction=Date.now();this.interactionTime=0;this.eventSequence=[];this.projectName=m;if(n.trackInteractionTime)i.listen(document.body,'mousemove',this._pingActive.bind(this));if(n.submitOnLeave||n.submitOnLeave===(void 0))this.arbiterToken=g.subscribe(j.AJAXPIPE_ONUNLOAD,function(){this.submit();this.arbiterToken.unsubscribe();}.bind(this));}k(l,{IDLE_LIMIT:20000});k(l.prototype,{set:function(m,n){this.log[m]=n;},tap:function(m){this.eventSequence.push(m);},bump:function(m,n){if(n===(void 0))n=1;this.log[m]=(this.log[m]||0)+n;},bumpTap:function(m,n){this.tap(m);this.bump(m,n);},startRun:function(m){if(!this.profiler[m])this.profiler[m]={average:0,count:0};this.profiler[m].start=+new Date();},endRun:function(m){if(!this.profiler[m]||!this.profiler[m].start)return;this._recordRun(m,new Date()-this.profiler[m].start);this.profiler[m].start=null;},getLog:function(){this._updateLog();return this.log;},submit:function(){this._updateLog();h.post(this.projectName,this.log);},_pingActive:function(){var m=Date.now(),n=m-this.lastInteraction;if(n<(l.IDLE_LIMIT))this.interactionTime+=n;this.lastInteraction=m;},_updateLog:function(){for(var m in this.profiler){this.log[m+'-count']=this.profiler[m].count;this.log[m+'-average']=this.profiler[m].average;}if(this.interactionTime)this.log['interaction-time']=this.interactionTime;if(this.eventSequence.length)this.log['event-sequence']=this.eventSequence;},_recordRun:function(m,n){var o=this.profiler[m];o.average=(o.average*o.count+n)/(o.count+1);o.count++;}});e.exports=l;},null);
__d("MapPager",["ArbiterMixin","Event","mixin"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o){"use strict";h.listen(n,'click',this.inform.bind(this,'previous'));h.listen(o,'click',this.inform.bind(this,'next'));}e.exports=m;},null);
__d("TimelineMapFilter",["Arbiter","CSS","DOM","Event","NumberFormatConfig","PageTransitions","ProfileTabConst","StickyPlaceholderInput","TimelineURI","$","copyProperties","cx","ads-lib-formatters","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v='pagelet_timeline_medley_map';function w(y){return o.getTabKeyFromURI(y)===m.MAP;}function x(){}q(x.prototype,{init:function(y,z,aa,ba,ca){this._classes={count:"_3d0",filter:"_3c_",selected:"_3s-",text:"_3sz"};this.catNames=[];this.catIndex=0;this.categoryButtons=[];this.mapController=y;this.stickies=z||[];this.tagUnit=t('fbTimelineMapTagUnit');this.tagUnitInited=false;this.mapID=aa;this.pluralMap=ba;this.initialCatName=ca;var da={},ea,fa;for(ea=0;ea<this.stickies.length;ea++){fa=this.stickies[ea].name[2];da[fa]=this.stickies[ea].countOnlyUnique;this.categoryButtons[ea]=this.stickies[ea].buttonID&&t(this.stickies[ea].buttonID);if(this.categoryButtons[ea])j.listen(this.categoryButtons[ea],'click',this.handleTabClick.bind(this,ea));}this.mapController.setCategoryCountUnique(da);u([g.subscribe('TimelineMap/updateCategories',this.updateCategories.bind(this))]);},setCategory:function(y){this.mapController.setCategory(this.catNames[y]);var z=p(v),aa=i.scry(z,'.fbTimelineStickyHeaderPlaceComposer input.skiptowant')[0];if(aa)aa.setAttribute('value',this.stickies[y].name.skip_to_want);var ba=i.scry(z,'.fbTimelineStickyHeaderPlaceComposer div.uiStickyPlaceholderInput')[0];if(ba)n.setPlaceholderText(ba,this.stickies[y].name.placeholder);var ca=i.scry(z,'div.'+"_4_zv")[0];if(ca)i.setContent(ca,this.stickies[y].name.section_title);},handleTabClick:function(y,z){var aa=l.getCurrentURI().getUnqualifiedURI();z&&!z.isDefaultRequested()&&z.prevent();if(w(aa)&&this.stickies[y].uri)l.rewriteCurrentURI(aa,this.stickies[y].uri);this.setCategory(y);this.mapController.zoomToVisible();},setFilter:function(y,z,aa,ba,ca){var da=this.categoryButtons[y];if(!da)return;var ea=aa||0;if(ea>=200)ea=(ea%100)+100;ea=z[this.pluralMap[ea]];this.catNames[y]=z[2];i.setContent(i.find(da,'.'+this._classes.text),ea);if(aa){i.setContent(i.find(da,'.'+this._classes.count),s.formatNumber(aa,0,k.numberDelimiter,''));}else i.empty(i.find(da,'.'+this._classes.count));h.conditionClass(da.firstChild,ba,!!ba);if(ca)da.setAttribute('href',ca);h.show(da);},updateCategories:function(y,z){if(z._instanceid!==this.mapID)return;var aa=this.mapController.getCategories(),ba=this.catNames[this.catIndex]||this.initialCatName;this.catNames=[];var ca=0;for(var da=0;da<this.stickies.length;da++){var ea=this.stickies[da],fa=ea.name,ga=0,ha=ea.domClass,ia=fa[2];if(aa[ia]){ga=aa[ia].count;delete aa[ia];}if(ea.showWhenZero||ga!==0){this.setFilter(ca,fa,ga,ha,ea.uri);ca++;}}var ja=[];for(var ka in aa)ja.push(aa[ka]);ja=ja.sort(function(oa,pa){return pa.count-oa.count;});for(var la=0;la<this.categoryButtons.length-ca;la++){var ma=ja[la];if(ma){this.setFilter(la+ca,ma.name,ma.count);}else h.hide(this.filters[la+ca]);}if(ba){this.initialCatName=null;var na=this.catNames.indexOf(ba);if(na!=-1){this.setCategory(na);}else this.setCategory(0);}}});q(x,{init:function(){var y=new x();y.init.apply(y,arguments);}});e.exports=x;},null);
__d("TimelineMapStickyHeaderComposer",["Arbiter","AsyncRequest","Bootloader","CSS","$","bind","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();function o(){g.subscribe('TimelineMapStickyHeaderComposer/showPhotoTagUnit',this.showPhotoTagUnit.bind(this));g.subscribe('TimelineMapStickyHeaderComposer/hidePhotoTagUnit',this.hidePhotoTagUnit.bind(this));}m(o.prototype,{initPlaceTypeahead:function(p){p.subscribe('focus',function(){i.loadModules(["TimelineMLE"],function(q){q.hideFlyout();});g.inform('TimelineMapStickyHeaderComposer/typeaheadFocus');}.bind(this));p.subscribe('blur',function(){g.inform('TimelineMapStickyHeaderComposer/typeaheadBlur');}.bind(this));p.subscribe('select',function(){g.inform('TimelineMapStickyHeaderComposer/typeaheadSelect');}.bind(this));},showPhotoTagUnit:function(p,q){this.tagUnit=k('fbTimelineMapTagUnit');j.show(this.tagUnit);var r=n('mainContainer');r&&j.addClass(r,'photoTaggingMode');if(!this.tagUnitInited){this.tagUnitInited=true;this.indicator=k('fbTimelineMapAddPhotoLoading');j.show(this.indicator);var s=q?q.sid:null;new h().setURI('/ajax/timeline/map/photo_strip.php').setData({div_id:'fbTimelineMapTagUnit',sid:s}).setReadOnly(true).setHandler(l(this,'_onLoadPhotoStrip')).send();}else this._onLoadPhotoStrip();},hidePhotoTagUnit:function(){this.tagUnit=k('fbTimelineMapTagUnit');j.hide(this.tagUnit);var p=n('mainContainer');p&&j.removeClass(p,'photoTaggingMode');},_onLoadPhotoStrip:function(){j.hide(this.indicator);}});e.exports=o;},null);
__d("legacy:TimelineMapStickyHeaderComposer",["TimelineMapStickyHeaderComposer"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.TimelineMapStickyHeaderComposer=b('TimelineMapStickyHeaderComposer');},3);
__d("TypeaheadTimelineHighlightMapPlace",["Arbiter","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){this._typeahead=j;}h(i.prototype,{_subscription:null,enable:function(){this._subscription=this._typeahead.subscribe(['reset','select','highlight'],function(j,k){if(j==='highlight'&&k.index!==-1&&k.selected.type!='freeform'&&k.selected.latitude&&k.selected.longitude&&!k.selected.changeCity&&k.index!=this.lastDataIdx){var l=k.selected.place_type=='city'?10:15;g.inform('TimelineMap/highlightMapPlace',{placeID:k.selected.uid,center:{latitude:k.selected.latitude,longitude:k.selected.longitude},zoom:l});}else if(j==='highlight'&&k.index==-1){g.inform('TimelineMap/highlightMapPlace',{dismiss:true});}else if(j==='select'){g.inform('TimelineMap/highlightMapPlace',{selected:true});}else if(j==='reset')g.inform('TimelineMap/highlightMapPlace',{dismiss:true});this.lastDataIdx=k&&k.index;});},disable:function(){this._typeahead.unsubscribe(this._subscription);this._subscription=null;}});e.exports=i;},null);
__d("TypeaheadTimelineShowThrobberOnSelect",["Arbiter","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){this._typeahead=j;}h(i.prototype,{_subscription:null,enable:function(){this._subscription=this._typeahead.subscribe(['select'],function(j,k){g.inform('TimelineMap/highlightMapPlace',{showThrobber:true});});},disable:function(){this._typeahead.unsubscribe(this._subscription);this._subscription=null;}});e.exports=i;},null);
__d("legacy:TimelineMapPlaceTypeaheadBehaviors",["TypeaheadTimelineHighlightMapPlace","TypeaheadTimelineShowThrobberOnSelect"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.highlightMapPlace=function(i){i.enableBehavior(g);};a.TypeaheadBehaviors.showThrobberOnSelect=function(i){i.enableBehavior(h);};},3);
__d("PlacesAppAddPlacesCuration",["Arbiter","TimelineAppSectionCuration"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={registerContent:function(j){h.register(j,function(k,l,m){g.inform('TimelineMapStickyHeaderComposer/showPhotoTagUnit');m.unsubscribe();});}};e.exports=i;},null);
__d("TimelineLifeEventPhotoPreviewGrid",["ActorURI","AsyncUploadRequest","AsyncRequest","Bootloader","CSS","DOM","FileInputUploader","Parent","ProgressBar","SortableGroup","TimelineLifeEventPhotoConfig","fbt","Button","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=1,v=2,w=3,x=[null,'mleOnePhoto','mleTwoPhotos','mleManyPhotos'];function y(ca,da,ea,fa){"use strict";this._container=ca;this._containerID=ca.id;this._grid=da;this._photoLimit=ea;this._profileID=fa;this._progressBarMarkup=q.progressBarMarkup;this._loadingIndicators=[];this._pendingPhotoRequests=0;this._photoDisplayType=0;this._tempPhotoRef=[];this._saveButton=l.find(this._container,"._5mlk");if(!q.enableDrag)return;this._sortableGroup=new p().setGrabCallback(aa).setDropCallback(ba);var ga=l.scry(da,'.mlePhotoPreviewThumb');for(var ha=0;ha<ga.length;ha++)this._bindPhoto(ga[ha]);this._updatePhotoDisplayType(ga.length);}y.prototype.destroy=function(){"use strict";this._sortableGroup&&this._sortableGroup.destroy();};y.prototype._getNumPhotos=function(){"use strict";return l.scry(this._grid,'.mlePhotoPreviewThumb').length+l.scry(this._grid,'.mlePhotoPlaceholder').length;};y.prototype._getPhotoType=function(ca){"use strict";switch(ca){case 0:case 1:return u;case 2:return v;default:if((ca<0)||(ca>this._photoLimit))throw new Error('invalid number of photos');return w;}};y.prototype._updatePhotoDisplayType=function(ca){"use strict";var da=x[this._photoDisplayType];da&&k.removeClass(this._container,da);this._photoDisplayType=this._getPhotoType(ca);k.addClass(this._container,x[this._photoDisplayType]);};y.prototype._updateAddMorePhotosClass=function(){"use strict";if(this._pendingPhotoRequests>0){k.addClass(l.find(this._container,'.mleAddMorePhotoButtons'),'disabled');}else k.removeClass(l.find(this._container,'.mleAddMorePhotoButtons'),'disabled');};y.prototype._updatePhotos=function(ca,da){"use strict";var ea=da,fa=[],ga=this._photoDisplayType;this._updatePhotoDisplayType(ca);if(this._photoDisplayType!==ga){var ha=l.scry(this._grid,'.mlePhotoPreviewThumb');for(var ia=0;ia<ha.length;ia++){var ja=l.find(ha[ia],'.mlePhotoPreviewInput').value;fa.push(ja);if((this._photoDisplayType===w)||(ga===w)){this._unbindPhoto(ha[ia]);l.remove(ha[ia]);this.createPlaceholder(ja);}else{k.addClass(ha[ia],'photoLoading');k.hide(l.find(ha[ia],'.detachPhotoIcon'));k.show(l.find(ha[ia],'.photoLoadingSpinner'));this._unbindPhoto(ha[ia]);this._tempPhotoRef[ja]=ha[ia];}}}var ka=ea.concat(fa);if(ka.length>0){this._pendingPhotoRequests+=ka.length;if(this._photoDisplayType!==w)this._updateAddMorePhotosClass();var la=g.create('/ajax/timeline/mle_photo_select.php',this._profileID);new i().setURI(la).setData({display_elem:this._containerID,existing_image_ids:fa,field_name:'photos',image_ids:ea,profile_id:this._profileID,total_photos:ca}).setMethod('POST').send();}};y.prototype._bindPhoto=function(ca){"use strict";this._sortableGroup&&this._sortableGroup.addSortable(l.find(ca,'input').getAttribute('value'),ca);};y.prototype._unbindPhoto=function(ca){"use strict";this._sortableGroup&&this._sortableGroup.removeSortable(l.find(ca,'input').getAttribute('value'));};y.prototype.filterPhotoClick=function(event){"use strict";if((this._pendingPhotoRequests>0)&&(this._photoDisplayType!=w))event.kill();};y.prototype.attachPhoto=function(ca,da){"use strict";if((!this._loadingIndicators[da])&&(!this._tempPhotoRef[da]))return;if(this._tempPhotoRef[da]){l.replace(this._tempPhotoRef[da],ca);this._bindPhoto(ca);delete this._tempPhotoRef[da];}else{var ea=this._loadingIndicators[da].getRoot();if(n.byTag(ea,'body')){l.replace(ea,ca);this._bindPhoto(ca);}delete this._loadingIndicators[da];}if(--this._pendingPhotoRequests===0)this._updateAddMorePhotosClass();};y.prototype.detachPhoto=function(ca){"use strict";if(this._pendingPhotoRequests>0)return;this._unbindPhoto(ca);l.remove(ca);var da=this._getNumPhotos();this._updatePhotos(da,[]);if(da===0){k.show(l.find(this._container,'.mlePhotoButtons'));k.hide(l.find(this._container,'.mleAddMorePhotoButtons'));}else if(da===this._photoLimit-1)k.show(l.find(this._container,'.mleAddMorePhotoButtons'));};y.prototype.createPlaceholder=function(ca){"use strict";var da=this._progressBarMarkup.cloneNode(true);da=l.appendContent(this._grid,da)[0];this._loadingIndicators[ca]=new o(da);return da;};y.prototype.addPhotos=function(ca){"use strict";var da=this._getNumPhotos(),ea=ca.length,fa=da+ea;if(fa>this._photoLimit){var ga=r._("The maximum number of photos you can add to this life event is {limit}. Please remove some photos and try again.",[r.param("limit",this._photoLimit)]);j.loadModules(["Dialog"],function(ja){new ja().setTitle(r._("Too Many Photos")).setBody(ga).setButtons(ja.OK).setCausalElement(this._container).show();}.bind(this));return;}if(fa===this._photoLimit)k.hide(l.find(this._container,'.mleAddMorePhotoButtons'));var ha=ca.slice(0,ea);this._updatePhotos(fa,ha);for(var ia=0;ia<ea;ia++)this.createPlaceholder(ca[ia]);};y.prototype.destroyPlaceholder=function(ca){"use strict";if(!this._loadingIndicators[ca])return;l.remove(this._loadingIndicators[ca].getRoot());delete this._loadingIndicators[ca];};y.prototype.initUploader=function(ca,da){"use strict";var ea=ca.getInput();ea.multiple=h.isSupported();ca.subscribe('change',this._uploadPhotos.bind(this,ea,da));};y.prototype._setSaveButtonEnabled=function(ca){"use strict";s.setEnabled(this._saveButton,ca);};y.prototype._uploadPhotos=function(ca,da){"use strict";k.hide(l.find(this._container,'.mlePhotoButtons'));k.show(l.find(this._container,'.mleAddMorePhotoButtons'));var ea=this._getNumPhotos(),fa=ca.files?ca.files.length:1,ga=ea+fa;if(ga>this._photoLimit){var ha=r._({"*":"The maximum number of photos you can add to this life event is {limit}. Please remove some photos and try again."},[r.param("limit",this._photoLimit,[0])]);j.loadModules(["Dialog"],function(ma){new ma().setTitle(r._("Too Many Photos")).setBody(ha).setButtons(ma.OK).setCausalElement(this._container).show();}.bind(this));z(ca);return;}var ia,ja;for(var ka=0;ka<fa;ka++){ja=ca.files?ca.files[ka].name:ca.value.split('\\').pop();ia=this.createPlaceholder(ja);}this._updatePhotos(ga,[]);da.uploadData.total_photos=ga;if(this._photoDisplayType!=w)this._pendingPhotoRequests+=fa;var la=new m(ca).setURI(da.uploadURI).setData(da.uploadData).setAllowCrossOrigin(true).setUploadInParallel(true);la.subscribe('progress',this._onProgress.bind(this));la.subscribe('success',this._onSuccess.bind(this));la.subscribe('failure',this._onFailure.bind(this,ja));la.send();this._setSaveButtonEnabled(false);z(ca);};y.prototype._onProgress=function(ca,da){"use strict";var event=da.event,ea=this._loadingIndicators[da.upload.getFile().name];k.hide(l.find(ea.getRoot(),'.mlePhotoLoadingIndicator'));k.show(l.find(ea.getRoot(),'.mlePhotoProgressBar'));if(event.loaded==event.total){ea.setPosition(50);ea.setTarget(100,2000);}else ea.setPosition(50*event.loaded/event.total);};y.prototype._onSuccess=function(ca,da){"use strict";this._setSaveButtonEnabled(true);};y.prototype._onFailure=function(ca){"use strict";this.destroyPlaceholder(ca);this._setSaveButtonEnabled(true);};function z(ca){ca.value='';ca.files=null;}function aa(ca){k.addClass(ca,'dragging');}function ba(ca,da){k.removeClass(da,'dragging');}e.exports=y;},null);
__d("ReactComposerActionTypes",["keyMirror"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g({SET_AUDIENCE:null,POST_ERROR:null,POST_STARTED:null,POST_INTENDED:null,POST_SUCCEEDED:null,COMPOSER_INITIALIZED:null,COMPOSER_RESET:null});},null);
__d("ReactComposerDispatcher",["Dispatcher"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=new g();},null);
__d("ReactComposerEvents",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={CHANGE:'change',ARBITER_SELECT_ATTACHMENT:'ARBITER_SELECT_ATTACHMENT'};e.exports=g;},null);
__d("ReactComposerStoreBase",["ReactComposerActionTypes","ReactComposerDispatcher","ReactComposerEvents","EventEmitter","Map"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in j)if(j.hasOwnProperty(l))n[l]=j[l];var m=j===null?null:j.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=j;function n(o,p){"use strict";j.call(this);this.$ReactComposerStoreBase0=o;this.$ReactComposerStoreBase1=new k();this.$ReactComposerStoreBase2=h.register(function(q){switch(q.type){case g.COMPOSER_INITIALIZED:this.__init(q);break;case g.COMPOSER_RESET:this.__cleanup(q);break;}p(q);}.bind(this));}n.prototype.getComposerData=function(o){"use strict";var p=this.$ReactComposerStoreBase1.get(o);if(!p){p=this.$ReactComposerStoreBase0();this.$ReactComposerStoreBase1.set(o,p);}return p;};n.prototype.clearComposerData=function(o){"use strict";this.$ReactComposerStoreBase1.set(o,this.$ReactComposerStoreBase0());};n.prototype.addChangeListener=function(o){"use strict";return this.addListener(i.CHANGE,o);};n.prototype.emitChange=function(o){"use strict";this.emit(i.CHANGE,{composerID:o});};n.prototype.getDispatchToken=function(){"use strict";return this.$ReactComposerStoreBase2;};n.prototype.validateAction=function(o,p){"use strict";p=[].concat(p);var q=p.map(function(r){if(o[r]===(void 0))throw 'Action missing field: '+r;return o[r];});if(p.length===1)return q[0];return q;};n.prototype.__init=function(o){"use strict";};n.prototype.__cleanup=function(o){"use strict";this.clearComposerData(o.composerID);this.emitChange(o.composerID);};e.exports=n;},null);
__d("ReactComposerIDGenerator",["ReactComposerConstants","uniqueID"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={getID:function(){return g.ID_PREFIX+h();},isComposerID:function(j){return j.startsWith(g.ID_PREFIX);}};e.exports=i;},null);
__d("ReactComposerInit",["ReactComposerIDGenerator","Map","React"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={instances:new h(),init:function(k,l,m){var n=g.getID();l.contextConfig.composerID=n;i.render(i.createElement(k,i.__spread({},l)),m);j.instances.set(n,{ComposerModule:k,props:l,container:m});},resetComposer:function(k){var l=j.instances.get(k);if(!l)throw 'Trying to reset unknown composer with id: '+k;i.unmountComponentAtNode(l.container);j.init(l.ComposerModule,l.props,l.container);}};e.exports=j;},null);
__d("ReactComposerActionStore",["ReactComposerActionTypes","ReactComposerStoreBase","ReactComposerInit","AsyncResponse","errorCode"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();for(var l in h)if(h.hasOwnProperty(l))n[l]=h[l];var m=h===null?null:h.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=h;function n(o,p){"use strict";o=o?o:function(){return null;};h.call(this,o,(function(q){switch(q.type){case g.POST_STARTED:this.$ReactComposerActionStore0(q);break;case g.POST_INTENDED:this.$ReactComposerActionStore1(q);break;case g.POST_SUCCEEDED:this.$ReactComposerActionStore2(q);break;case g.POST_ERROR:this.$ReactComposerActionStore3(q);break;default:}p&&p(q);}.bind(this)));}n.prototype.$ReactComposerActionStore0=function(o){"use strict";this.__onPostStarted&&this.__onPostStarted(o);};n.prototype.$ReactComposerActionStore1=function(o){"use strict";if(!this.__canPost||this.__canPost(o))this.$ReactComposerActionStore0(o);};n.prototype.$ReactComposerActionStore2=function(o){"use strict";this.__onPostSucceeded&&this.__onPostSucceeded(o);};n.prototype.$ReactComposerActionStore3=function(o){"use strict";var p=o.response.getError&&o.response.getError()==1455004;if(this.__onPostError){this.__onPostError(o);}else if(!p)j.defaultErrorHandler(o.response);};n.prototype.__cleanup=function(o){"use strict";setTimeout(i.resetComposer.bind(null,o.composerID),0);};e.exports=n;},null);
__d("ReactComposerStore",["ReactComposerActionStore","ReactComposerActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in g)if(g.hasOwnProperty(i))k[i]=g[i];var j=g===null?null:g.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=g;function k(){"use strict";g.call(this,(function(){return {audience:null,serverErrorResponse:null,posting:false,postSucceeded:false};}),(function(l){switch(l.type){case h.SET_AUDIENCE:this.$ReactComposerStore0(l);break;}}.bind(this)));}k.prototype.getAudience=function(l){"use strict";return this.getComposerData(l).audience;};k.prototype.getLegacyAudience=function(l){"use strict";return this.getComposerData(l).legacyAudience;};k.prototype.getServerErrorResponse=function(l){"use strict";return this.getComposerData(l).serverErrorResponse;};k.prototype.isPosting=function(l){"use strict";return this.getComposerData(l).posting;};k.prototype.hasPostSucceeded=function(l){"use strict";return this.getComposerData(l).postSucceeded;};k.prototype.$ReactComposerStore0=function(l){"use strict";var m=this.getComposerData(l.composerID);m.audience=l.audience;m.legacyAudience=l.legacyAudience;this.emitChange(l.composerID);};k.prototype.__onPostStarted=function(l){"use strict";var m=this.getComposerData(l.composerID);m.posting=true;this.emitChange(l.composerID);};k.prototype.__onPostSucceeded=function(l){"use strict";var m=this.getComposerData(l.composerID);m.serverErrorResponse=null;m.posting=false;m.postSucceeded=true;this.emitChange(l.composerID);};k.prototype.__onPostError=function(l){"use strict";var m=this.getComposerData(l.composerID);m.serverErrorResponse=l.response;m.posting=false;this.emitChange(l.composerID);};e.exports=new k();},null);
__d("ReactComposerActions",["ReactComposerActionTypes","ReactComposerDispatcher","ReactComposerStore"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();b('ReactComposerStore');var i={initialized:function(j,k){h.dispatch({composerID:j,type:g.COMPOSER_INITIALIZED,loggingConfig:k});},setAudience:function(j,k,l){h.dispatch({composerID:j,type:g.SET_AUDIENCE,audience:k,legacyAudience:l});},postError:function(j,k){h.dispatch({composerID:j,type:g.POST_ERROR,response:k});},postIntended:function(j,k){h.dispatch({composerID:j,type:g.POST_INTENDED,actorID:k.actorID,config:k.config});},postStarted:function(j,k){h.dispatch({composerID:j,type:g.POST_STARTED,actorID:k.actorID,config:k.config,targetID:k.targetID});},postSucceeded:function(j){h.dispatch({composerID:j,type:g.POST_SUCCEEDED});},reset:function(j){h.dispatch({composerID:j,type:g.COMPOSER_RESET});}};e.exports=i;},null);
__d("RelationshipStatusConst",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports={UNDEFINED:0,SINGLE:1,IN_A_RELATIONSHIP:2,OPEN_RELATIONSHIP:3,MARRIED:4,ENGAGED:5,COMPLICATED:6,WIDOWED:7,SEPARATED:8,DIVORCED:9,CIVIL_UNION:10,DOMESTIC_PATNERSHIP:11,isUnilateralStatus:function(h){return (h==this.UNDEFINED||h==this.SINGLE||h==this.WIDOWED||h==this.SEPARATED||h==this.DIVORCED);},getAnniversaryText:function(h){switch(h){case this.IN_A_RELATIONSHIP:case this.OPEN_RELATIONSHIP:case this.MARRIED:case this.CIVIL_UNION:case this.DOMESTIC_PARTNERSHIP:return (g._("Anniversary"));case this.ENGAGED:case this.COMPLICATED:return (g._("Since"));default:throw new Error('Relationship status doesn\'t support anniversaries');}},willCreateLifeEvent:function(h,i,j,k){if(this.isUnilateralStatus(i))return false;if(i==this.COMPLICATED&&!this.isUnilateralStatus(h))return false;if(i!=h)return true;if(j>0&&k>0&&j!=k)return true;return false;}};},null);
__d("TimelineMLEPhotoPreview",["Event","CSS","Dialog","DOM","Layer","Parent","TimelineLifeEventPhotoPreviewGrid","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=[],p={initPreviewGrid:function(q,r,s){var t=l.byClass(q,'mleContainer');p.destroyPreviewGrid(t);o[t.id]=new m(t,q,r,s);g.listen(j.find(t,'.mleAddMorePhotoButtons'),'click',function(event){o[t.id].filterPhotoClick(event);});},destroyPreviewGrid:function(q){if(o[q.id]){o[q.id].destroy();delete o[q.id];}},initUploader:function(q,r,s){if(o[r])o[r].initUploader(q,s);},attachPhoto:function(q,r,s){if(o[q])o[q].attachPhoto(r,s);},listenForDetach:function(q,r){var s=o[r];g.listen(j.find(q,'.detachPhotoIcon'),'click',s.detachPhoto.bind(s,q));},listenForPhotoSelect:function(q,r){var s=n(r.display_elem),t=false;g.listen(q,'click',function(){if(t)return;t=true;h.hide(j.find(s,'.mlePhotoButtons'));h.show(j.find(s,'.mleAddMorePhotoButtons'));var u=i.getCurrent();if(u)u.hide();var v=o[s.id];if(v)v.addPhotos([r.photo_fbid]);});},listenForSubmit:function(q,r,s){var t=n(s);q.subscribe('confirm',function(){var u=j.scry(q.getContentRoot(),'input[name="'+r+'"]'),v=[];for(var w=0;w<u.length;w++){var x=u[w];if(x.checked===true)v.push(x.value);}h.hide(j.find(t,'.mlePhotoButtons'));h.show(j.find(t,'.mleAddMorePhotoButtons'));var y;if(y=i.getCurrent())y.hide();if(y=k.getTopmostLayer())y.hide();if(o[t.id])o[t.id].addPhotos(v);});}};e.exports=p;},null);
__d("XFamilyNonUserCreationFormController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/family\/create\/form\/",{show_intro:{type:"Bool",defaultValue:false},name:{type:"String"},relation:{type:"Int"},existing_relationship_id:{type:"Int"},prefilled_data:{type:"StringToStringMap"},source:{type:"String",defaultValue:"unknown"},waterfall_id:{type:"String"},birth_month:{type:"Int"},birth_day:{type:"Int"},birth_year:{type:"Int"},privacy_row:{type:"StringToIntMap"},__asyncDialog:{type:"Int"}});},null);
__d("TimelineMLE",["Arbiter","AsyncRequest","Bootloader","ComposerXController","CSS","DOM","DOMScroll","Event","Form","Parent","ProgressiveDatepicker","ReactComposerActions","ReactComposerIDGenerator","RelationshipStatusConst","TimelineComposerUtilities","TimelineContentLoader","TimelineMLEPhotoPreview","XFamilyNonUserCreationFormController","$","areJSONRepresentationsEqual","csx","cx","fbt","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){b.__markCompiled&&b.__markCompiled();var fa=0,ga={},ha=null,ia=null;function ja(ua){return p.byClass(ua,'mleFlyoutForm');}function ka(ua){var va=p.byClass(ua.getContext(),'fbTimelineCapsule');if(va)return va;return v.capsuleForCurrentSection();}function la(ua){var va=o.serialize(ua);na(ua,va);ma(ua,va);if(!z(va,ga.state)){oa(ua);new h().setData(va).setURI('/ajax/timeline/mle_header.php').setRelativeTo(ua).setFinallyHandler(g.inform.bind(g,'TimelineMLE/mleHeaderUpdated')).send();}}function ma(ua,va){var wa=l.scry(ua,"._594n")[0];if(!wa)return;var xa=va.hasOwnProperty('name')?va.name:va.text_with&&va.text_with[0];if(xa)l.setContent(wa,ca._("{name} will be added to the Family section on your profile.",[ca.param("name",xa)]));k.conditionClass(wa,'hidden_elem',!xa);}function na(ua,va){var wa=parseInt(va.type,10),xa=va['with'],ya=l.scry(ua,'input.updateRelationshipStatus')[0];if(!ya)return;var za=l.scry(ua,'li.relationshipConfirmation')[0];if(!za)return;var ab=l.find(ua,'li.relationshipTooManyPartners');if(xa&&xa.length>1){k.hide(za);k.show(ab);ya.checked=false;ya.disabled=true;return;}k.hide(ab);ya.disabled=false;var bb=xa&&xa[0],cb=l.find(ua,'input.relationshipCurrentPartnerID').value,db=l.find(ua,'input.relationshipCurrentStatus').value,eb=t.isUnilateralStatus(wa),fb=ya.checked&&!eb&&bb&&(cb!=bb||db!=wa);if(bb){var gb=va.text_with[0],hb=l.find(ua,'span.relationshipPartnerName');l.setContent(hb,gb);}k.conditionClass(za,'hidden_elem',!fb);}function oa(ua){ua=ua||ga.element;if(!ua)return;ga={element:ua,state:o.serialize(ua)};}function pa(event){var ua=event.getTarget(),va=ua.options[ua.selectedIndex];g.inform('TimelineMLE/mleSelectUpdated',ua);var wa=p.byClass(va,'mleFormContainer');la(wa);var xa=l.scry(wa,'.mleOtherLabel'),ya=l.scry(wa,'.mleOtherField');if(xa.length)xa=xa[0];if(ya.length)ya=ya[0];if(k.hasClass(va,'mleOther')){k.show(xa);k.show(ya);var za=l.find(ya,'.inputOuter').firstChild;za.focus();}else{k.hide(xa);k.hide(ya);}}function qa(){if(!ha)return;var ua=ha,va=l.scry(ua.getInnerContent(),'.mleContainer')[0];va&&w.destroyPreviewGrid(va);ua.hide();ga={};ha=null;g.inform('TimelineMLE/mleFlyoutHidden');}function ra(ua,va){l.replace(y(ua),va);}function sa(ua){if(ua)n.listen(ua,'change',pa);}var ta={cancel:function(ua){if(ja(ua)){ta.hideFlyout();}else{var va=p.byClass(ua,'mleContainer');va&&w.destroyPreviewGrid(va);var wa=p.byClass(ua,'fbTimelineNewMLE');if(wa){l.remove(wa);}else{wa=p.byClass(ua,'fbTimelineEditMLE');k.removeClass(wa,'fbTimelineEditMLE');l.remove(l.scry(wa,'.timelineUnitContainer')[0]);k.show(l.scry(wa,'.timelineUnitContainer')[0]);}if(k.hasClass(wa,'fbTimelineNotStarred')){k.removeClass(wa,'fbTimelineNotStarred');i.loadModules(["TimelineStar"],function(xa){xa.unstarUnit(wa.childNodes[0],null,true);});}g.inform('TimelineMap/resizeCallout');}ga={};return false;},registerButtons:function(ua,va,wa,xa){ea(n.listen(va,'mousedown',function(){ua.standalone?ha.setStackable(false):l.setContent(l.find(xa,'.mleInlineErrorMsg'),'');}));if(wa)ea(n.listen(wa,'click',function(ya){ya.prevent();if(ua.location==='map')g.inform('TimelineMap/cancelCreation');ua.standalone?ta.hideFlyout():ta.cancel(wa);}));},registerStickyPrivacyFlyout:function(ua){g.subscribe('TimelineMLE/mleFlyoutHidden',ua.hide.bind(ua));g.subscribe('TimelineMLE/mleHeaderUpdated',ua.updatePosition.bind(ua));},replace:function(ua,va){var wa=p.byClass(ua,'mleContainer');wa&&w.destroyPreviewGrid(wa);if(ja(ua)){var xa=p.byClass(ua,'fbTimelineEditMLEFlyout');if(xa){ua=p.byClass(y(va.relativeElementID),'fbTimelineEditMLE');ta.hideFlyout();l.replace(ua,va.streamStory);ua=y(va.streamStory);}else{var ya=function(ab){var bb=da(va.relativeElementID);if(s.isComposerID(bb.id)){r.reset(bb.id);}else bb&&j.reset(bb);ab.publish(va,va.streamStory);ta.hideFlyout();};if(va.isFinch){i.loadModules(["PagesStoryPublisher"],ya);}else i.loadModules(["TimelineStoryPublisher"],ya);ua=y(va.streamStory);}}var za=l.scry(ua,'div.keepStarred')[0];if(za)i.loadModules(["TimelineStar"],function(ab){ab.starUnit(za,null,true);});return false;},startEdit:function(ua,va){ta.hideFlyout();var wa=l.scry(ua,'div.timelineUnitContainer')[0];k.hide(wa);k.addClass(ua,'fbTimelineEditMLE');if(!va)k.addClass(ua,'fbTimelineNotStarred');},showFlyout:function(ua,va,wa){ta.hideFlyout();ha=ua;fa=0;g.subscribe('TimelineMLE/mleSelectUpdated',function(bb,cb){var db=p.byClass(cb,'mleFormOuterContainer'),eb=l.scry(db,'.registrationLink');if(!eb.length)return;var fb=cb.selectedIndex;k.hide(eb[fa]);k.show(eb[fb]);fa=fb;});ua.show();if(va==='edit'){var xa=y(wa),ya=p.byClass(xa,"_5jmm")||p.byClass(xa,'lifeEventContainer');k.addClass(ya,'fbTimelineEditMLE');var za=l.find(ua.getInnerContent(),'.timelineUnitContainer');k.addClass(za,'fbTimelineEditMLEFlyout');m.ensureVisible(za,null,100);}if(va!='map'){var ab=l.scry(ua.getInnerContent(),'.mleSelect');if(ab.length)sa(ab[0]);}if(va!=='edit')ta.setEstimatedDate(ua);g.inform('TimelineMLE/mleFlyoutShown',ua);},showPrivacyNotice:function(ua,va){if(!va||!ua)return;var wa=l.find(ua.getInnerContent(),'.audienceSelector');va.setContext(wa).show();ia=va;n.listen(wa,'click',va.hide.bind(va));n.listen(l.find(va.getContent(),'input'),'click',va.hide.bind(va));g.subscribe('TimelineMLE/mleFlyoutHidden',va.hide.bind(va));},hideFlyout:qa,getFlyout:function(){return ha;},listenForEditChanges:function(ua){var va=l.find(ua,'form.mleFormContainer'),wa=va.elements;for(var xa=0;xa<wa.length;++xa){if(p.byClass(wa[xa],'uiTypeahead')||p.byClass(wa[xa],'uiTokenizer')||k.hasClass(wa[xa],'mleSelect'))continue;if(k.hasClass(wa[xa],'inputradio')){n.listen(wa[xa],'click',la.bind(null,va));}else if(p.byClass(wa[xa],'mleDatepicker')){n.listen(wa[xa],'change',la.bind(null,va));}else n.listen(wa[xa],'blur',la.bind(null,va));}ga={element:va,state:o.serialize(va)};var ya=l.scry(ua,'input.updateRelationshipStatus')[0];if(ya)ea(n.listen(ya,'change',function(){var za=o.serialize(va);na(va,za);}));},updateHeader:function(ua){la(p.byClass(ua,'mleFormContainer'));},setEstimatedDate:function(ua){var va=l.scry(ua.getContentRoot(),'.fbTimelineComposerUnit')[0];if(!va){var wa=q.getInstance(l.scry(ua.getInnerContent(),'.uiProgressiveDatepicker')[0]);if(wa)u.setEstimatedDate(wa,ka(ua));}},updatePrivacyNoticePosition:function(){ia&&ia.updatePosition();},registerOptionHandler:function(ua){var va=l.scry(ua,'.lifeEventContainer')[0],wa=l.scry(va,'.mleSelect');if(wa.length)sa(wa[0]);},subscribeToTypeahead:function(ua,va){ua.subscribe(['select','unselect','reset','blur'],ta.updateHeader.bind(null,va));},subscribeToTokenizer:function(ua,va){ua.subscribe(['addToken','removeToken'],ta.updateHeader.bind(null,va));},replaceYearlySummary:function(ua){ra('pagelet_yearly',ua);qa();},replaceHometown:function(ua){ra('pagelet_hometown',ua);qa();},showScrapbookPopover:function(ua){var va=x.getURIBuilder().getURI();new h().setURI(va).setData({experience_id:ua.experience_id,existing_relationship_id:ua.existing_relationship_id,name:ua.name,relation:ua.relation,source:ua.source,birth_month:ua.birth_month,birth_day:ua.birth_day,birth_year:ua.birth_year,privacy_row:ua.privacy_row}).send();}};e.exports=a.TimelineMLE||ta;},null);