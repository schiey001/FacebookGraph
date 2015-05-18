/*!CK:3958516291!*//*1430113767,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SxM5T"]); }

__d("TimelineAppSectionConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",friends_featured:null,places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",likes_other:"likes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",photos_untagged:"photos",music_mutual:"music",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:"games",video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",external_videos_for_user:"videos",friends_map:"friends",videos_user_all:"videos",info_about:null,info_all_relationships:null,info_contact_basic:null,info_edu_work:null,info_overview:null,info_places:null,info_at_work:null,info_year_overviews:null,followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}};},null);
__d("DoublyLinkedListMap",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}g.prototype.get=function(h){"use strict";return this._nodes[h]?this._nodes[h].data:null;};g.prototype.getIndex=function(h){"use strict";for(var i=this._head,j=0;i;i=i.next,j++)if(i.key===h)return j;return null;};g.prototype._insert=function(h,i,j,k){"use strict";j&&!this._nodes[j]&&(j=null);var l=(j&&this._nodes[j])||(k?this._head:this._tail),m={data:i,key:h,next:null,prev:null};if(l){this.remove(h);if(k){m.prev=l.prev;l.prev&&(l.prev.next=m);l.prev=m;m.next=l;}else{m.next=l.next;l.next&&(l.next.prev=m);l.next=m;m.prev=l;}}m.prev===null&&(this._head=m);m.next===null&&(this._tail=m);this._nodes[h]=m;this._nodeCount++;return this;};g.prototype.insertBefore=function(h,i,j){"use strict";return this._insert(h,i,j,true);};g.prototype.insertAfter=function(h,i,j){"use strict";return this._insert(h,i,j,false);};g.prototype.prepend=function(h,i){"use strict";return this.insertBefore(h,i,this._head&&this._head.key);};g.prototype.append=function(h,i){"use strict";return this.insertAfter(h,i,this._tail&&this._tail.key);};g.prototype.remove=function(h){"use strict";var i=this._nodes[h];if(i){var j=i.next,k=i.prev;j&&(j.prev=k);k&&(k.next=j);this._head===i&&(this._head=j);this._tail===i&&(this._tail=k);delete this._nodes[h];this._nodeCount--;}return this;};g.prototype.find=function(h){"use strict";for(var i=this._head;i;i=i.next)if(h(i.data))return i.key;return null;};g.prototype.reduce=function(h,i){"use strict";for(var j=this._head;j;j=j.next)i=h(j.data,i);return i;};g.prototype.exists=function(h){"use strict";return !!this._nodes[h];};g.prototype.isEmpty=function(){"use strict";return !this._head;};g.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};g.prototype.map=function(h){"use strict";for(var i=this._head;i;i=i.next)h(i.data);};g.prototype.getCount=function(){"use strict";return this._nodeCount;};g.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};g.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};g.prototype.getNext=function(h){"use strict";var i=this._nodes[h];if(i&&i.next)return i.next.data;return null;};g.prototype.getPrev=function(h){"use strict";var i=this._nodes[h];if(i&&i.prev)return i.prev.data;return null;};e.exports=g;},null);
__d("Optimus",["Event","Parent"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={};function j(l,m){var n=m.getTarget();if(!n)return;var o=i[l];for(var p in o){var q=h.byAttribute(n,p);if(q)do{var r=o[p][q.getAttribute(p)];if(r&&r.handleOptimus(l,q,m)===false)break;}while(q=h.byAttribute(q.parentNode,p));}}function k(l,m,n,o){if(!i[l]){i[l]={};g.listen(document.documentElement,l,j.bind(null,l));}if(!i[l][m])i[l][m]={};if(!i[l][m][n])i[l][m][n]=o;}e.exports={addRelClick:function(l,m){k('click','rel',l,m);},addEventListener:k};},null);
__d("PopoverMenuShowOnHover",["Event"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=250;function i(j){"use strict";this._popoverMenu=j;this._listeners=[];}i.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};i.prototype.disable=function(){"use strict";while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;}};i.prototype._onSetMenu=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot());};i.prototype._attachMouseListeners=function(j){"use strict";var k=this._popoverMenu.getPopover(),l=null;this._listeners.push(g.listen(j,'mouseleave',k.hideLayer.bind(k)),g.listen(j,'mouseenter',function(){l=Date.now();k.showLayer();}),g.listen(j,'click',function(m){if(Date.now()<l+h)m.stop();}));};e.exports=i;},null);
__d("ProfileActionBarLogger",["FBJSON","MarauderLogger","Optimus"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(){i.addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function(k,l,m){h.log('profile_high_quality_action',null,g.parse(l.getAttribute('data-store')));return false;}});}f.init=j;},null);
__d("ProfileOverviewSection",["Arbiter","DOMScroll","DoublyLinkedListMap","Run","TidyArbiterMixin","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=null;function o(){n=null;}function p(q,r,s){"use strict";this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new i();this._isLoaded=false;setTimeout(function(){return p.inform('sectionInitialized/'+q,{section:this},g.BEHAVIOR_STATE);}.bind(this),0);}p.prototype.appendSection=function(q){"use strict";this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){"use strict";this.freezeChildren();};p.prototype.freezeChildren=function(){"use strict";var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){"use strict";var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){"use strict";return this._isLoaded;};p.prototype.setIsLoaded=function(q){"use strict";this._isLoaded=q;return this;};p.prototype.scrollTo=function(){"use strict";if(!m(this.nodeID))return;h.scrollTo(this.getNode(),true,false,false,0,h.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){"use strict";this.thawChildren();};p.prototype.thawChildren=function(){"use strict";var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){"use strict";throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){"use strict";this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){"use strict";!n&&j.onLeave(o);n=q;};l(p,k);e.exports=p;},null);
__d("TimelineURI",["BizSiteIdentifier.brands","BusinessURI.brands","ProfileTabConst","TimelineAppSectionConstants","URI","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={parseURI:function(n){n=k(n);var o=n.getQueryData(),p=n.getPath(),q=p.split('/').slice(1);if(q[0]=='people'||q[0]=='pages')q=q.slice(2);var r=o.sk||q[1]||i.TIMELINE;if(r==i.WALL)r=i.TIMELINE;var s=null,t=null;if(r==i.TIMELINE){t=parseInt(q[2],10)||null;s=parseInt(q[3],10)||null;}return {path:p,id:o.id||q[0],key:r,viewas:o.viewas?o.viewas:0,filter:o.filter?o.filter:null,year:t,month:s,friendship:!!o.and};},goToProfileID:function(n){if(g.isBizSite()){l(h('/profile.php').addQueryData('id',n),true);}else l(k('/'+n),true);},getTabKeyFromURI:function(n){var o=m.getSectionKeyFromURI(n);return j.collectionTabKeyToAppTabKey[o]||o;},getSectionKeyFromURI:function(n){return n.getQueryData().sk||n.getPath().split('/')[2];},getVanityFromURI:function(n){if(n.getQueryData().id)return n.getQueryData.id;return n.getPath().split('/')[1];},isVideoPermalink:function(n){return (m.getTabKeyFromURI(n)===i.VIDEOS&&n.getPath().split('/').filter(function(o){return !!o;}).length>2);}};e.exports=m;},null);
__d("ProfileNavigation",["Arbiter","CSS","PageTransitions","ProfileDOMID","ProfileOverviewDOMID","ProfileTabConst","ProfileTabUtils","ScriptPath","TimelineComponentKeys","TimelineController","TimelineDOMID","TimelineURI","UIPagelet","URI","$","ge","merge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b.__markCompiled&&b.__markCompiled();var x=6,y='/profile_book.php',z=null,aa=null;function ba(ka){var la=t.getMostRecentURI(),ma=r.getSectionKeyFromURI(la),na=r.getTabKeyFromURI(la),oa=r.getVanityFromURI(la),pa=r.getSectionKeyFromURI(ka),qa=r.getTabKeyFromURI(ka),ra=r.getVanityFromURI(ka),sa=ka.getQueryData();if(oa!==ra||m.isActivityLogTab(qa)||qa===l.MEMORIAL_CONTACT||qa===l.POSTS||!!sa.and||r.isVideoPermalink(ka))return false;if(sa.hasOwnProperty('theater')){g.subscribeOnce('PhotoSnowlift.CLOSE',ia);return false;}if(m.isTimelineTab(na)&&!m.isTimelineTab(qa)&&ha(pa)){z=pa;ca(qa,'TimelineMedleyView',q.TAB_CONTENT,k.MEDLEY_ROOT,sa);return true;}if(!m.isTimelineTab(na)&&m.isTimelineTab(qa)){z=ma;ca(l.TIMELINE,'TimelineWallColumn',k.MEDLEY_ROOT,q.TAB_CONTENT,sa);return true;}return false;}function ca(ka,la,ma,na,oa){p.registerCurrentKey(ka);h.hide(u(ma));g.inform('save_facebar_query',true);var pa=v(na);if(pa){h.show(pa);ga(ka);}else da(la,ka,oa);}function da(ka,la,ma){ea();var na=w(aa,{tab_key:la});if(ma)na=w(na,ma);var oa=function(qa){fa();qa();},pa={append:true,displayCallback:oa,finallyHandler:ga.bind(null,la),usePipe:true};s.loadFromEndpoint(ka,j.MAIN_COLUMN_PERSONAL,na,pa);}function ea(){h.show(u(j.TAB_LOAD_INDICATOR));}function fa(){h.hide(u(j.TAB_LOAD_INDICATOR));}function ga(ka){var la=y;if(!m.isTimelineTab(ka))la+=':'+ka;n.set(la);i.transitionComplete();}function ha(ka){return z===null||ka===z;}function ia(){i.registerHandler(ba,x);}var ja={init:function(ka){aa=ka.profileContextData;p.register(o.ASYNC_NAV,this);ia();},reset:function(){aa=null;z=null;i.removeHandler(ba);}};e.exports=ja;},null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=l(g);for(var n in m)if(m.hasOwnProperty(n))p[n]=m[n];var o=m===null?null:m.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=m;function p(q,r,s){"use strict";s=s||{};this._listenOn=s.listenOn;this._offsetInput=r;this._defaultOffset=s.default_offset;this._killClicks=s.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(q,s);}p.prototype.setPicture=function(q,r){"use strict";if(!q)return false;r=r||{};this._picture=q;this._defaultOffset=r.default_offset;if(r.offsetInput)this._offsetInput=r.offsetInput;if(r.vertical!==(void 0))this._vertical=r.vertical;if(r.height)this._containerHeight=r.height;if(r.width)this._containerWidth=r.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=i.isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=h.listen(this._picture,'load',function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}.bind(this));};p.prototype.destroy=function(){"use strict";this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};p.prototype._initialLoad=function(){"use strict";var q=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=h.listen(q,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==(void 0))this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=h.listen(q,'click',this._onClick.bind(this));this._saveOffset();};p.prototype._onClick=function(event){"use strict";event.kill();};p.prototype._onMouseDown=function(event){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=q-k.getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};p.prototype._startDrag=function(){"use strict";if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[h.listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),h.listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};p.prototype._saveOffset=function(){"use strict";var q=parseInt(j.get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=q+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=q;};p.prototype._stopDrag=function(){"use strict";if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(q){q.remove();});this._saveOffset();}};p.prototype._onMouseUp=function(event){"use strict";this._stopDrag();event.kill();};p.prototype._setOffset=function(q){"use strict";if(this._RTLXSwitch){q=Math.max(0,Math.min(q,-this._maxOffset));}else q=Math.min(0,Math.max(q,this._maxOffset));j.set(this._picture,this._offsetType,q+'px');};p.prototype._onMouseMove=function(event){"use strict";this._setOffset(this._pictureStartDragOffset+k.getEventPosition(event)[this._eventCoord]);event.kill();};e.exports=p;},null);
__d("TimelineCover",["Arbiter","Button","CSS","DOM","DOMScroll","Event","FileInputUploader","HTML","PageTransitions","Parent","Run","Style","TimelineDrag","$","cx","fbt","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){b.__markCompiled&&b.__markCompiled();function y(z,aa,ba){"use strict";this.root=t('fbProfileCover');if(typeof aa==='object'){this._coverHeight=aa.cover_height;this._coverWidth=aa.cover_width;this.previewing=aa.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=aa;this.previewing=ba;}this._parentSection=p.byClass(this.root,'fbTimelineSection');this.cover=j.find(this.root,'.cover');y.instance=this;this.editing=false;q.onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=p.byClass(this.root,'fbEventHeader');if(this.previewing){this.editMode();this.updateCoverImage(this.previewing);}}y.prototype.showLoadingIndicator=function(){"use strict";var z=w('fbCoverImageContainer');if(z)i.addClass(z,'opaquedLoading');};y.prototype.hideLoadingIndicator=function(){"use strict";var z=w('fbCoverImageContainer');if(z)i.removeClass(z,'opaquedLoading');};y.prototype.onBeforeUnload=function(){"use strict";if(this.isInEditMode())return v._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.");};y.prototype.isCoverImageVerticalFlow=function(z){"use strict";return !(z.style.height);};y.prototype.editMode=function(){"use strict";h.setEnabled(j.find(this.root,'button.cancelButton'),true);h.setEnabled(j.find(this.root,'button.saveButton'),true);this.hideLoadingIndicator();this._coverImage=j.scry(this.root,'.coverImage')[0];var z=j.scry(this._coverImage,'.coverWrap')[0];if(z){var aa=j.find(z,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(aa);this._originalOffset=r.get(aa,this._originalIsVertical?'top':'left');}i.addClass(this._parentSection,'fbEditCover');k.scrollTo(this.root);if(this.previewing){j.remove(this._coverImage);i.show(this._coverImage);}var ba=j.scry(this._coverImage,'.coverPhotoImg')[0];if(ba)this._createDragger();this.editing=true;g.inform('CoverPhotoEdit',{sender:this,state:"open"});};y.prototype._exitEditMode=function(){"use strict";if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}j.find(this.root,'input.hiddenPhotoID').value=null;h.setEnabled(j.find(this.root,'button.cancelButton'),false);h.setEnabled(j.find(this.root,'button.saveButton'),false);i.removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;g.inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};y.prototype._createDragger=function(z){"use strict";var aa;if(this._isLegacy){aa=j.find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var ba=z===(void 0)?this._originalIsVertical:z;aa=ba?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new s(j.find(this.root,'.coverImage .coverPhotoImg'),aa,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:ba,killClicks:true});};y.prototype.updateCoverImage=function(z,aa){"use strict";if(aa)this.editMode();j.find(this.root,'input.hiddenPhotoID').value=z;h.setEnabled(j.find(this.root,'button.saveButton'),true);if(aa)j.replace(j.find(this.root,'.coverImage'),typeof aa==='string'?n(aa):aa);var ba=j.find(j.find(this.root,'.coverImage'),'.coverPhotoImg'),ca=this.isCoverImageVerticalFlow(ba),da;if(this._isLegacy){da=j.find(this.root,'input.photoOffsetInput');}else da=ca?j.find(this.root,'input.photoOffsetYInput'):j.find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(ba,{offsetInput:da,vertical:ca});}else this._createDragger(ca);this._updateHeader();};y.prototype.cancelUpdate=function(){"use strict";this._reloadAfterNextUpdate=false;j.remove(j.scry(this.root,'.coverImage')[0]);j.prependContent(this.cover,this._coverImage);if(this._originalOffset!==(void 0))r.set(j.find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};y.prototype.saveComplete=function(){"use strict";if(this._reloadAfterNextUpdate)a.location.reload();this._coverImage=j.scry(this.root,'.coverImage')[0];var z=p.byClass(this.root,'fbTimelineTopSectionBase');z&&i.removeClass(z,"_6_5");this._exitEditMode();this._updateHeader();o.rewriteCurrentURI(o.getCurrentURI().getUnqualifiedURI(),o.getCurrentURI().removeQueryData('preview_cover'));};y.prototype.isInEditMode=function(){"use strict";return this.editing;};y.prototype._updateHeader=function(){"use strict";var z=j.scry(this.root,'.coverImage')[0];if(!z)return;var aa=i.hasClass(z,'coverNoImage'),ba=i.hasClass(this._parentSection,'noCoverImage');if(aa!==ba)i.conditionClass(this._parentSection,'noCoverImage',aa);};y.getInstance=function(){"use strict";return y.instance;};y.staticUpdateCoverImage=function(z){"use strict";y.getInstance().updateCoverImage(null,z);};y.prototype.setupFileUpload=function(z,aa,ba){"use strict";z.subscribe('change',function(){var ca=new m(z.getInput()).setURI(aa).setAllowCrossOrigin(true);ca.subscribe('failure',function(){y.showErrorDialog(v._("Cover Upload Failed"),v._("Uploading the new cover picture failed. Please try again."));});ca.subscribe(['success','failure'],function(){this.hideLoadingIndicator();z.clear();i.removeClass(z.getControl(),ba);z.getInput().disabled=false;}.bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;ca.send();i.addClass(z.getControl(),ba);z.getInput().disabled=true;}.bind(this));};y.setupFileUpload=function(z,aa,ba){"use strict";this.getInstance().setupFileUpload(z,aa,ba);};y.imageUploadDone=function(z,aa){"use strict";this.getInstance().updateCoverImage(z,aa);};y.showErrorDialog=function(z,aa){"use strict";new Dialog().setTitle(z).setButtons(Dialog.OK).setBody(aa).show();this.getInstance().hideLoadingIndicator();};y.initFileUploadMenu=function(z){"use strict";y.showLoadingAfterFileUpload(z.getForm());};y.showLoadingAfterFileUpload=function(z){"use strict";x(z.subscribe('submit',function(){y.getInstance().showLoadingIndicator();}));};y.instance=null;e.exports=y;},null);
__d("TimelineNavLight",["CSS","DOM","DOMQuery","Parent","ProfileOverviewDOMID","TimelineAppSectionConstants","TimelineComponentKeys","TimelineController","ProfileOverviewSection","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r="_6-7",s="_529n",t="_5215",u="_70k",v="._6-7",w="._6-6";function x(y){"use strict";this.$TimelineNavLight0=i.scry(y,v)[0];this.$TimelineNavLight1=i.scry(y,w);var z=j.byClass(y,u).offsetWidth,aa=this.$TimelineNavLight1[this.$TimelineNavLight1.length-1];if(aa.offsetLeft+aa.offsetWidth>z)g.addClass(y,t);for(var ba=this.$TimelineNavLight1.length-1;ba>1;ba--)if(this.$TimelineNavLight1[ba].offsetLeft+this.$TimelineNavLight1[ba].offsetWidth>z){h.remove(this.$TimelineNavLight1[ba]);}else break;g.removeClass(j.byClass(y,s),s);o.subscribe('Medley/transitionToSection',function(ca,da){this.$TimelineNavLight3(da.slice(k.PREFIX_MEDLEY.length));}.bind(this));n.register(m.COVER_NAV,this);}x.prototype.handleTabChange=function(y){"use strict";this.$TimelineNavLight3(y);};x.prototype.$TimelineNavLight3=function(y){"use strict";this.$TimelineNavLight0&&g.removeClass(this.$TimelineNavLight0,r);this.$TimelineNavLight1.some(function(z){var aa=l.collectionTabKeyToAppTabKey[y]||y;if(z.getAttribute('data-tab-key')===aa){g.addClass(z,r);this.$TimelineNavLight0=z;return true;}}.bind(this));};e.exports=x;},null);
__d("legacy:TimelineCover",["TimelineCover"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.TimelineCover=b('TimelineCover');},3);