/*!CK:3738915729!*//*1432702904,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RTsIP"]); }

__d("NotificationConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6}};},null);
__d("NotificationTokens",["CurrentUser"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={tokenizeIDs:function(i){return i.map(function(j){return g.getID()+':'+j;});},untokenizeIDs:function(i){return i.map(function(j){return j.split(':')[1];});}};e.exports=h;},null);
__d("NotificationUpdates",["Arbiter","BizSiteIdentifier.brands","ChannelConstants","JSLogger","NotificationConstants","NotificationTokens","LiveTimer","copyProperties","createObjectFrom"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p={},q={},r={},s={},t={},u=[],v=0,w=j.create('notification_updates');function x(){if(v)return;var ca=p,da=q,ea=r,fa=s,ga=t;p={};q={};r={};s={};t={};z('notifications-updated',ca);if(Object.keys(da).length)z('seen-state-updated',da);if(Object.keys(ea).length)z('read-state-updated',ea);if(Object.keys(fa).length)z('hidden-state-updated',fa);if(Object.keys(ga).length)z('gnf-state-updated',ga);u.pop();}function y(){if(u.length)return u[u.length-1];return k.PayloadSourceType.UNKNOWN;}function z(event,ca){ba.inform(event,{updates:ca,source:y()});}g.subscribe(i.getArbiterType('notification_json'),function(ca,da){var ea=Date.now(),fa=da.obj.nodes;if(fa){fa.forEach(function(ga){ga.receivedTime=ea;});w.debug('notifications_received',fa);ba.handleUpdate(k.PayloadSourceType.LIVE_SEND,da.obj);}});g.subscribe(i.getArbiterType('notifications_seen'),function(ca,da){var ea=l.tokenizeIDs(da.obj.alert_ids);ba.handleUpdate(k.PayloadSourceType.LIVE_SEND,{seenState:o(ea)});});g.subscribe(i.getArbiterType('notifications_read'),function(ca,da){var ea=l.tokenizeIDs(da.obj.alert_ids);ba.handleUpdate(k.PayloadSourceType.LIVE_SEND,{readState:o(ea)});});var aa=null,ba=n(new g(),{getserverTime:function(){return aa;},handleUpdate:function(ca,da){if(da.nodes&&Array.isArray(da.nodes))da.nodes=this._filterNodesBasedOnBusinessID(da.nodes);if(da.servertime){aa=da.servertime;m.restart(da.servertime);}if(Object.keys(da).length)this.synchronizeInforms(function(){u.push(ca);var ea=n({payloadsource:y()},da);this.inform('update-notifications',ea);this.inform('update-seen',ea);this.inform('update-read',ea);this.inform('update-hidden',ea);this.inform('update-gnf',ea);}.bind(this));},didUpdateNotifications:function(ca){n(p,o(ca));x();},didUpdateSeenState:function(ca){n(q,o(ca));x();},didUpdateReadState:function(ca){n(r,o(ca));x();},didUpdateHiddenState:function(ca){n(s,o(ca));x();},didUpdateGNFState:function(ca){n(t,o(ca));x();},synchronizeInforms:function(ca){v++;try{ca();}catch(da){throw da;}finally{v--;x();}},_filterNodesBasedOnBusinessID:function(ca){return ca.filter(function(da){return (da.business_ids&&Object.keys(da.business_ids).length>0)?(!!(da.business_ids[h.getBusinessID()])):!h.isBizSite();});}});e.exports=ba;},null);
__d("NotificationSeenState",["NotificationConstants","NotificationUpdates","copyProperties","createObjectFrom","mergeObjects"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m=1,n=2,o=0,p=m,q=m|n,r=g.PayloadSourceType.INITIAL_LOAD,s={UNSEEN_AND_UNREAD:o,SEEN_BUT_UNREAD:p,SEEN_AND_READ:q};function t(w){var x=[],y=[];Object.keys(w).forEach(function(z){var aa=w[z],ba=l[z];l[z]=aa;if(ba===(void 0)){x.push(z);y.push(z);return;}var ca=ba^aa;if(ca&m)x.push(z);if(ca&n)y.push(z);});x.length&&h.didUpdateSeenState(x);y.length&&h.didUpdateReadState(y);}h.subscribe('update-notifications',function(w,x){var y=x.nodes;if(!y||!y.length)return;var z=x.payloadsource,aa=g.PayloadSourceType,ba=z==aa.ENDPOINT,ca={};x.nodes.forEach(function(da){var ea=da.alert_id;if(!ba||l[ea]===(void 0))ca[ea]=s[da.seen_state];});t(ca);});h.subscribe('update-seen',function(w,x){if(!x.seenState)return;var y=[],z={};Object.keys(x.seenState).forEach(function(ba){if(!x.seenState[ba]){y.push(ba);return;}var ca=l[ba];if(ca!==(void 0))z[ba]=ca|m;});var aa=k(j(y,o),z);t(aa);});h.subscribe('update-read',function(w,x){if(!x.readState)return;var y=[],z={};Object.keys(x.readState).forEach(function(ba){if(x.readState[ba]){y.push(ba);return;}var ca=l[ba];if(ca!==(void 0)){z[ba]=ca&~n;}else if(x.payloadsource==r)z[ba]=p;});var aa=k(j(y,q),z);t(aa);});function u(w){var x=l[w];return x;}var v={isRead:function(w){return u(w)===q;},isSeen:function(w){return u(w)!==o;},getUnseenCount:function(){return v.getUnseenIDs().length;},getUnseenIDs:function(){return Object.keys(l).filter(function(w){return l[w]===o;});},getUnreadCount:function(){return v.getUnreadIDs().length;},getUnreadIDs:function(){return Object.keys(l).filter(function(w){return l[w]!==q;});}};e.exports=v;},null);
__d("NotificationStore",["KeyedCallbackManager","NotificationConstants","NotificationUpdates","RangedCallbackManager","MercuryServerDispatcher"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=new g(),m=new j(function(q){var r=l.getResource(q);return r.creation_time;},function(q,r){return r-q;}),n={},o=null;i.subscribe('update-notifications',function(q,r){if(r.page_info)n=r.page_info;if(r.nodes===(void 0))return;var s,t=[],u={},v=r.nodes||[],w;v.forEach(function(x){s=x.alert_id;w=l.getResource(s);if(!w||w.creation_time<x.creation_time){t.push(s);u[s]=x;}});l.addResourcesAndExecute(u);m.addResources(t);i.didUpdateNotifications(t);});k.registerEndpoints({'/ajax/notifications/client/get.php':{mode:k.IMMEDIATE,handler:function(q){i.handleUpdate(h.PayloadSourceType.ENDPOINT,q);}}});var p={getNotifications:function(q,r){var s=m.executeOrEnqueue(0,q,function(z){var aa=l.executeOrEnqueue(z,r);}),t=m.getUnavailableResources(s);if(t.length){m.unsubscribe(s);if(!p.canFetchMore()){l.executeOrEnqueue(m.getAllResources(),r);return;}var u=n,v=(u&&u.end_cursor)||null,w;if(v){var x=Math.max.apply(null,t),y=m.getCurrentArraySize();w=x-y+1;}else w=q;k.trySend('/ajax/notifications/client/get.php',{businessID:o,cursor:v,length:w});}},getAll:function(q){p.getNotifications(p.getCount(),q);},getCount:function(){return m.getAllResources().length;},canFetchMore:function(){var q=n;return (!q||!q.hasOwnProperty('has_next_page')||q.has_next_page);},setBusinessID:function(q){o=q;}};e.exports=p;},null);
__d("NotificationInitialLoadController",["Arbiter","NotificationConstants","NotificationUpdates","NotificationSeenState","NotificationStore"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();b('NotificationSeenState');b('NotificationStore');function j(k){i.handleUpdate(h.PayloadSourceType.INITIAL_LOAD,k);g.inform('jewel/count-updated',{jewel:'notifications',count:k.nodes.length});}e.exports=j;},null);
__d("NotificationPhotoThumbnail",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(i){if(!i.media||!i.style_list||!i.style_list.length)return null;switch(i.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return i.media.image;default:return null;}}var h={getThumbnail:function(i,j,k){var l;if(i&&i.length){i.some(function(p){l=g(p);if(l)return true;return false;});if(l)return l;}if(k){var m=k.relevant_comments;if(m&&m.length){var n=m[0].attachments;if(n&&n.length){l=g(n[0]);if(l)return l;}}}if(j){var o=j.attachments;if(o&&o.length)return g(o[0]);}return null;}};e.exports=h;},null);
__d("NotificationURI",["BusinessURI.brands","URI","isFacebookURI","VideoPermalinkURI"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={localize:function(l){l=g(l);if(!i(l))return l.toString();var m=l.getSubdomain();return l.getUnqualifiedURI().getQualifiedURI().setSubdomain(m).toString();},snowliftable:function(l){if(!l)return false;l=new h(l);var m=l.getQueryData();return i(l)&&(j.isValid(l)||'fbid' in m);},isVaultSetURI:function(l){return this._areEquals(l,'/ajax/vault/sharer_preview.php');},isAlbumDraftRecoveryDialogURI:function(l){return this._areEquals(l,'/ajax/photos/upload/overlay/');},_areEquals:function(l,m){if(!l)return false;l=new h(l);return i(l)&&l.getPath()===m;},_startsWith:function(l,m){if(!l)return false;l=new h(l);return i(l)&&l.getPath().startsWith(m);}};e.exports=k;},null);
__d("XNotificationsGenericNegativeFeedbackController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/notifications\/feedback\/generic\/negative\/",{notif_id:{type:"Int",required:true},undo:{type:"Bool",defaultValue:false}});},null);
__d("NotificationUserActions",["AsyncRequest","AsyncSignal","NotificationConstants","NotificationStore","NotificationTokens","NotificationUpdates","URI","XNotificationsGenericNegativeFeedbackController","createObjectFrom","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=i.PayloadSourceType.USER_ACTION,r='mark_spam',s='turn_off',t='undo',u='original_subscription_level',v=false;function w(ca){var da=new m('/ajax/notifications/mark_read.php').getQualifiedURI().toString();new h(da,ca).send();}function x(ca){var da={};ca.forEach(function(ea,fa){da['alert_ids['+fa+']']=ea;});return da;}function y(ca,da,ea,fa,ga){var ha=k.untokenizeIDs([ca])[0],ia={notification_id:ha,client_rendered:true,request_type:da};Object.assign(ia,ea);new g('/ajax/notifications/negative_req.php').setData(ia).setHandler(fa||p).setErrorHandler(ga||p).send();}function z(ca,da,ea,fa){var ga=n.getURIBuilder().setInt('notif_id',k.untokenizeIDs([ca])[0]).setBool('undo',fa).getURI(),ha=function(ia){if(fa){l.handleUpdate(q,{hiddenState:o([ca],false),gnfState:o([ca],false)});da();}else{var ja=ia.payload.show_after_ok;l.handleUpdate(q,{hiddenState:o([ca],!ja),gnfState:o([ca],true)});da(ia.payload.confirmation);}};new g(ga).setHandler(ha||p).setErrorHandler(ea||p).send();}function aa(ca,da,ea,fa,ga){var ha=ga?t:s;j.getAll(function(ia){var ja=Object.keys(ia).filter(function(ka){var la=ia[ka];return !!(la.application&&la.application.id&&la.application.id==da);});y(ca,ha,null,function(ka){ea(ka);l.handleUpdate(q,{hiddenState:o(ja,!ga)});},fa);});}var ba={markNotificationsAsSeen:function(ca){l.handleUpdate(q,{seenState:o(ca)});var da=k.untokenizeIDs(ca),ea=x(da);ea.seen=true;w(ea);},setNextIsFromReadButton:function(ca){v=ca;},markNotificationsAsRead:function(ca){l.handleUpdate(q,{readState:o(ca)});var da=k.untokenizeIDs(ca),ea=x(da);if(v){ea.from_read_button=true;v=false;}w(ea);},giveGenericNegativeFeedback:function(ca,da,ea){z(ca,da,ea,false);},undoGenericNegativeFeedback:function(ca,da,ea){z(ca,da,ea,true);},markNotificationAsHidden:function(ca,da,ea){l.handleUpdate(q,{hiddenState:o([ca])});y(ca,s,null,da,ea);},markNotificationAsVisible:function(ca,da,ea,fa){l.handleUpdate(q,{hiddenState:o([ca],false)});var ga=null;if(da!==null){ga={};ga[u]=da;}y(ca,t,ga,ea,fa);},markNotificationAsSpam:function(ca,da,ea){l.handleUpdate(q,{hiddenState:o([ca],true)});y(ca,r,null,da,ea);},markAppAsHidden:function(ca,da,ea,fa){var ga=false;aa(ca,da,ea,fa,ga);},markAppAsVisible:function(ca,da,ea,fa){var ga=true;aa(ca,da,ea,fa,ga);}};e.exports=ba;},null);
__d("MusicButtonStore",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={addButton:function(i,j){g[i]=j;return j;},getButton:function(i){return g[i];},getButtons:function(){return g;},removeButton:function(i){g[i]&&g[i].resetLoadingTimers();delete g[i];}};e.exports=h;},null);
__d("MusicConstants",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={DEBUG:false,CONFIG:{PARTNER_TIMEOUT:8000},LIVE_LISTEN_MIN_SPOTIFY_VERSION:'spotify-0.6.6.0.g5a9eaca5',enableDebug:function(){this.DEBUG=true;},sameURLs:function(i,j){var k=/\/$/;if(i&&j){i=new g(i);j=new g(j);return i.getDomain()==j.getDomain()&&i.getPath()==j.getPath();}return false;},greaterOrEqualToMinimumVersion:function(i,j){var k=/(?:\d+\.)+/,l=i.match(k)[0].split('.').slice(0,-1),m=j.match(k)[0].split('.').slice(0,-1);if(l.length!==m.length)return false;for(var n=0;n<m.length;n++)if(+l[n]<+m[n]){return false;}else if(+l[n]>+m[n])return true;return true;},sanitizeForProviders:function(i){var j={};for(var k in i)if(this.ALLOWED_EXTERNAL_CONTEXT_PARAMS[k])j[k]=i[k];return j;},OP:{RESUME:'RESUME',PAUSE:'PAUSE',PLAY:'PLAY',VERSION:'VERSION'},STATUS_CHANGE_OP:{STATUS:'STATUS',LOGIN:'LOGIN',REINFORM:'REINFORM'},STATUS_CHANGE_EVENT:{playing:'PLAY_STATE_CHANGED',track:'TRACK_CHANGED'},DIAGNOSTIC_EVENT:{ALL_PAUSED:'ALL_PAUSED',ALL_OFFLINE:'ALL_OFFLINE',OFFLINE:'OFFLINE',ONLINE:'ONLINE',SEARCHING:'SEARCHING',HIT:'HIT',MISS:'MISS',RESIGN:'RESIGN',IFRAME_POLLING:'IFRAME_POLLING',RELAUNCH:'RELAUNCH',STATE_CHANGE:'STATE_CHANGE',WRONG_VERSION:'WRONG_VERSION',SERVICE_ERROR:'SERVICE_ERROR',INCORRECT_ONLINE_STATE:'INCORRECT_ONLINE_STATE',LOG_SEND_OP:'LOG_SEND_OP',REQUEUE_OP:'REQUEUE_OP'},ALLOWED_STATUS_PARAMS:{playing:'playing',track:'track',context:'context',client_version:'client_version',start_time:'start_time',expires_in:'expires_in',open_graph_state:'open_graph_state'},ALLOWED_EXTERNAL_CONTEXT_PARAMS:{uri:true,song:true,radio_station:true,album:true,playlist:true,musician:true,song_list:true,offset:true,title:true,request_id:true,listen_with_friends:true,needs_tos:true},LIVE_LISTEN_OP:{NOW_LEADING:'NOW_LEADING',NOW_LISTENING:'NOW_LISTENING',END_SESSION:'END_SESSION',SONG_PLAYING:'SONG_PLAYING',LISTENER_UPDATE:'LISTENER_UPDATE',QUEUE_SESSION:'QUEUE_SESSION',PLAY_ERROR:'PLAY_ERROR',SESSION_UPDATED:'SESSION_UPDATED',QUEUING_SESSION:'QUEUING_SESSION'},MUSIC_BUTTON:{ACTIVATE:'ACTIVATE'},ERROR:{1:'SERVICE_UNAVAILABLE_WITHOUT_PREMIUM',2:'SERVICE_UNAVAILABLE_WITHOUT_PREMIUM_OR_WAIT',3:'SERVICE_UNAVAILABLE_BILLING_ISSUE',4:'SERVICE_UNAVAILABLE_TECHNICAL_ISSUE',5:'AUDIO_AD_PLAYING',99:'SERVICE_TEMPORARILY_UNAVAILABLE',101:'SONG_UNAVAILABLE_WITHOUT_PURCHASE',102:'SONG_UNAVAILABLE_WITHOUT_PREMIUM',103:'SONG_UNAVAILABLE_INDEFINITELY'}};e.exports=a.MusicConstants||h;},null);
__d("MusicEvents",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=a.MusicEvents=new g();},null);
__d("MusicButton",["BanzaiODS","Bootloader","copyProperties","CSS","DOM","MusicButtonStore","MusicConstants","MusicEvents","Parent","BanzaiScuba","Tooltip","cx","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t=function(u,v,w,x,y,z){this.provider=u;this.buttonElem=v;this.url=w;this.context=x||{};this.mediaType=y;this.setState(this.STATES.OFFLINE);this.tooltip=z||'';n.subscribe(m.MUSIC_BUTTON.ACTIVATE,this.processClick.bind(this));};i(t,{tracksetableTypes:[]});i(t.prototype,{SHOW_LOADING_TIMEOUT:500,HIDE_LOADING_TIMEOUT:m.CONFIG.PARTNER_TIMEOUT,RECENTLY_ONLINE_TIMEOUT:6000,STATES:{PLAYING:'music_playing',PAUSED:'music_paused',LOADING:'music_loading',DISABLED:'music_disabled',OFFLINE:'music_offline'},setState:function(u){if(u!==this.STATES.LOADING){this.resetLoadingTimers();this.previousState=this.state||u;}if(u===this.STATES.PLAYING){q.set(this.buttonElem,this.tooltip);}else q.set(this.buttonElem,'');var v=this.buttonElem.parentNode;this.state&&j.removeClass(v,this.state);this.state=u;j.addClass(v,this.state);},isTracksetable:function(u){return t.tracksetableTypes.indexOf(this.mediaType)!==-1;},handleIncomingEvent:function(u,v){clearTimeout(this._showLoadingTimer);if(v&&v.provider&&v.provider!=this.provider)return;switch(u){case m.DIAGNOSTIC_EVENT.ONLINE:case m.STATUS_CHANGE_EVENT.track:case m.STATUS_CHANGE_EVENT.playing:var w=v&&v.track&&v.track.uri,x=v&&v.context&&v.context.uri;if(v&&v.playing&&(m.sameURLs(w,this.url)||m.sameURLs(x,this.url))){this.setState(this.STATES.PLAYING);}else if(this.state===this.STATES.LOADING&&(this.previousState===this.STATES.PAUSED||this.previousState===this.STATES.OFFLINE)){clearTimeout(this._attemptingPlayTimer);this._attemptingPlayTimer=s(this.setState.bind(this,this.STATES.PAUSED),this.RECENTLY_ONLINE_TIMEOUT);}else if(!this._attemptingPlayTimer)this.setState(this.STATES.PAUSED);break;case m.DIAGNOSTIC_EVENT.OFFLINE:this.setState(this.STATES.OFFLINE);break;case m.DIAGNOSTIC_EVENT.ALL_OFFLINE:this.setState(this.STATES.OFFLINE);break;}},processClick:function(u,v){if(v!=this.buttonElem){if(this.state===this.STATES.LOADING)this.previousState&&this.setState(this.previousState);return;}var w=new p('music_play_button_click',null,{addBrowserFields:true,addPredictedGeographyFields:true,addUser:true});w.addNormal('uses_bridge','1');w.addNormal('state',this.state);w.addNormal('provider',this.provider);w.addNormal('class','MusicButton');w.addNormal('insights_source',this.context.appear_source_log_str);w.addDenorm('url',this.url);w.post();if(this.state!=this.STATES.PLAYING){g.bumpEntityKey('music_play_button','music_play_button_click');g.bumpEntityKey('music_play_button','music_play_button_click.'+this.provider);var x=o.byClass(this.buttonElem,"_4--s");if(x){j.addClass(x,"_4--t");setTimeout(j.removeClass.bind(null,x,"_4--t"),3000);}}var y=this.isTracksetable()&&o.byClass(this.buttonElem,'music_trackset_container'),z=[];if(y){var aa=y.getAttribute('data-trackset-title'),ba=this.provider,ca=k.scry(y,'.music_button');for(var da=0;da<ca.length;da++){var ea=l.getButton([ca[da].id]);if(ea&&ea.provider==ba&&ea.isTracksetable())z.push(ea.url);}}if(!a.Music)this.showLoading(true);h.loadModules(["Music"],function(fa){var ga=(y&&z.length>1)?fa.playPauseSongList(this.provider,this.url,z,aa,this.context):fa.playPauseSong(this.provider,this.url,this.context);this.showLoading(!ga);}.bind(this));},showLoading:function(u){this.resetLoadingTimers();this._hideLoadingTimer=s(this._timeout.bind(this,u),this.HIDE_LOADING_TIMEOUT);this._showLoadingTimer=s(this.setState.bind(this,this.STATES.LOADING),this.SHOW_LOADING_TIMEOUT);},resetLoadingTimers:function(){clearTimeout(this._hideLoadingTimer);clearTimeout(this._showLoadingTimer);clearTimeout(this._attemptingPlayTimer);this._attemptingPlayTimer=null;},destroy:function(){this.resetLoadingTimers();this.buttonElem=null;},_timeout:function(u){a.Music&&a.Music.reInform([this.provider]);if(!u&&this.state===this.STATES.LOADING)this.setState(this.STATES.PAUSED);}});e.exports=t;},null);
__d("MusicButtonManager",["Event","DOM","KeyedCallbackManager","Layer","MusicButton","MusicButtonStore","MusicConstants","MusicEvents","Parent","$","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s=new i(),t=null,u={},v=0;function w(da){var ea=da.getTarget(),fa=o.byClass(ea,'music_button');fa=fa||(!(da.getModifiers&&da.getModifiers().any)&&x(ea));if(!fa)return;return y(fa,da);}function x(da){var ea=o.byClass(da,'music_button_trigger')&&o.byClass(da,'music_button_trigger_group');if(ea){var fa=h.scry(ea,'.music_button');if(fa.length)return fa[0];}return null;}function y(da,event){event&&event.stop();n.inform(m.MUSIC_BUTTON.ACTIVATE,da);return false;}function z(da){a.Music&&a.Music.reInform(da);}function aa(da,ea){var fa=l.getButtons();for(var ga in fa)if(fa[ga].noGC||r(ga)){fa[ga].handleIncomingEvent(da,ea);}else l.removeButton(ga);}var ba={init:function(da){if(t)return;t=true;k.tracksetableTypes=da||[];g.listen(document.body,'click',w);n.subscribe([m.STATUS_CHANGE_EVENT.playing,m.STATUS_CHANGE_EVENT.track,m.DIAGNOSTIC_EVENT.OFFLINE,m.DIAGNOSTIC_EVENT.ALL_OFFLINE,m.DIAGNOSTIC_EVENT.ONLINE],aa);},add:function(da,ea,fa,ga,ha,ia){t||ba.init();var ja=ea.id,ka=l.getButton(ja);if(ka)return ka;ka=l.addButton(ja,new k(da,ea,fa,q({button_id:ja},ga),ha,ia));var la=o.byClass(ea,'uiOverlay');if(la){ka.noGC=true;var ma=j.subscribe('destroy',function(na,oa){if(h.contains(oa.getRoot(),ea)){l.removeButton(ja);j.unsubscribe(ma);}});}if(da&&!u[da])u[da]=setTimeout(function(){var na=Object.keys(u);na.length&&z(na);u={};},0);return ka;},addButton:function(da,ea,fa,ga,ha,ia){if(!r(ea))return;var ja=p(ea);return ba.add(da,ja,fa,ga,ha,ia);},asyncAddMusicButton:function(da,ea){da.setAttribute('id','music_button_'+v++);ca(da,ea);},tryAddButtonInDOM:function(da,ea){var fa=r(da);fa&&ca(fa,ea);},addMusicData:function(da,ea,fa,ga,ha,ia){s.setResource(da,{provider:ea,uri:fa,context:ga,media_type:ha,tooltip:ia});}};function ca(da,ea){var fa=h.find(da,'a.button_anchor').getAttribute('href');s.executeOrEnqueue(fa,function(ga){return ba.add(ga.provider,da,ga.uri,ga.context,ga.media_type,ea?ga.tooltip:'');});}e.exports=a.MusicButtonManager||ba;},null);
__d("TypeaheadShowLoadingIndicator",["CSS","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe('loading',function(j,k){g.conditionClass(this._typeahead.getElement(),'typeaheadLoading',k.loading);g.conditionClass(this._typeahead.getView().getElement(),'typeaheadViewLoading',k.loading);}.bind(this));};i.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;};h(i.prototype,{_subscription:null});e.exports=i;},null);
__d("legacy:ShowLoadingIndicatorTypeaheadBehavior",["TypeaheadShowLoadingIndicator"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.showLoadingIndicator=function(h){h.enableBehavior(g);};},3);