/*!CK:470303962!*//*1429199095,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZXHbt"]); }

__d("OGAggregationBling",["React","NumberFormat","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g.createClass({displayName:"OGAggregationBling",render:function(){var l=[];if(this.props.likes)l.push(g.createElement("span",{className:"_14a_",key:"likes"},g.createElement("i",{className:"_4fx"}),g.createElement("span",null,h.formatIntegerWithDelimiter(this.props.likes,this.props.numberDelimiter)),g.createElement("span",{className:"accessible_elem"},j._("likes"))));if(this.props.comments){l.push(g.createElement("span",{className:"_14a_",key:"comments"},g.createElement("i",{className:"_4fy"}),g.createElement("span",null,h.formatIntegerWithDelimiter(this.props.comments,this.props.numberDelimiter)),g.createElement("span",{className:"accessible_elem"},j._("comments"))));}else{var m=!(this.props.mini&&this.props.likes),n=!this.props.likes&&this.props.alwaysVisible,o=(("_14a_")+(m?' '+"_4fz":'')+(n?' '+"_55n8":''));l.push(g.createElement("span",{className:o,key:"comments"},g.createElement("i",{className:"_4fy"})));}return (g.createElement("a",{className:"_4f-",href:"#",rel:"toggle"},l));}});e.exports=k;},null);
__d("OGAggregationUFI",["DOM","CSS","OGAggregationBling","React","UFICentralUpdates","UFIToplevelCommentList","UFIConstants","UFIFeedbackTargets","UFILikeLink.react","UFIUserActions","copyProperties","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();function t(u,v,w){this._root=u;this._id=v.ftentidentifier;this._source=v.source;this._numberDelimiter=v.numberdelimiter||',';this._mini=v.mini;this._alwaysVisible=v.alwaysvisible;this._bling=g.scry(this._root,"._4f-")[0];this._initializeLikeLink();k.handleUpdate(m.UFIPayloadSourceType.INITIAL_SERVER,w);k.subscribe('feedback-updated',function(x,y){if(this._id in y.updates)this.render();}.bind(this));this.render();}q(t.prototype,{_initializeLikeLink:function(){if(this._likeLink)throw new Error('OGAggregationUFI attempted to initialize the like link when the like'+' link was already present');var u=g.scry(this._root,'.like_link')[0];if(u){var v=document.createElement('span');u.parentNode.replaceChild(v,u);this._likeLink=v;v.appendChild(u);}},render:function(){n.getFeedbackTarget(this._id,function(u){if(this._likeLink){var v=!u.hasviewerliked,w=function(event){p.changeLike(this._id,v,{source:this._source,target:event.target});}.bind(this),x=j.createElement(o,{onClick:w,likeAction:v});j.render(x,this._likeLink);}if(this._bling){var y=l.getCommentListForFeedbackTargetID_UNSAFE(this._id).getDisplayedCommentCount();h.conditionClass(this._root,"_93n",this._mini&&(u.likecount||y));var z=j.createElement(i,{alwaysVisible:this._alwaysVisible,mini:this._mini,likes:u.likecount,comments:y,numberDelimiter:this._numberDelimiter});j.render(z,this._bling);}}.bind(this));}});e.exports=t;},null);
__d("OGCollectionItemRatingControl",["AsyncRequest"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={registerStars:function(i,j,k){i.onClick(function(l){new g().setURI(k).setRelativeTo(j).setData({stars:l}).send();return false;});}};e.exports=h;},null);
__d("TimelineCollectionItemReorder",["AsyncRequest","DataStore","DOMQuery","OGCollectionAddObject","Parent","SortableGroup","TimelineAppCollection","$","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p='item-reorder-inst';function q(s,t){"use strict";this._collectionToken=t;this._initSorting();h.set(n(s),p,this);m.subscribe(m.NEW_ITEM,this._processNewItem.bind(this,s));j.subscribe(j.NEW_ITEM,this._processNewItem.bind(this,s));}q.prototype._initSorting=function(){"use strict";this._sortableGroup=new l().setDropCallback(function(s,t){new g('/ajax/timeline/collections/reorder_items/').setData({order:this._sortableGroup.getOrder(),collection_token:this._collectionToken}).send();}.bind(this));};q.prototype._registerCollectionItems=function(s){"use strict";var t=i.scry(s,'li[data-sort-id]');t.forEach(function(u){this._registerCollectionItem(u);},this);};q.prototype._registerCollectionItem=function(s){"use strict";var t=s.getAttribute('data-sort-id');this._sortableGroup.removeSortable(t);setTimeout(this._sortableGroup.addSortable.bind(this._sortableGroup,t,s),500);};q.prototype._processNewItem=function(s,t,u){"use strict";var v=k.byClass(u.grid,"_30f");if(s!=v.id)return;this._registerCollectionItem(u.newItem);};q.registerCollectionItems=function(s,t,u){"use strict";var v=r(s,t);if(v)v._registerCollectionItems(u);};function r(s,t){var u=h.get(n(s),p);return u||new q(s,t);}e.exports=q;},null);
__d("TimelineInHouseOGCurationControl",["CSS","DOM","Parent","TimelineAppCollection","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n,o,p,q){this._menu=n;this._collectionToken=o;this._popoverMenu=p;this._placeholderMarkup=q;this._menu.subscribe('itemclick',function(r,s){var t=s.item.getValue(),u='add_to_top',v='remove_from_top';if(t=="delete"||t=="recommend")return;if(t==o){s.item.deselect();n.done();return;}var w=i.byClass(this._popoverMenu,"_3owb");if(t=='highlight'){var x=h.scry(w,"._54_4");if(x[0])if(!s.item.isSelected()){g.addClass(x[0],'selected');}else g.removeClass(x[0],'selected');n.done();return;}else if(t&&(t.substring(0,u.length)===u)){j.addPlaceholderToCollection(t.substring(u.length+1),w.parentNode);n.done();return;}else if(t&&(t.substring(0,v.length)===v)){var y=t.substring(v.length+1);if(o!==y){j.decrementCount(j.getIDByToken(y));n.done();return;}}w.appendChild(q);g.hide(h.find(w,'[data-collection-item-bg]'));g.hide(h.find(w,'[data-collection-item-priv]'));if(!t){n.done();return;}j.decrementCount(j.getIDByToken(o));if(t.substring(0,15)!=v)j.addPlaceholderToCollection(t,w.parentNode);n.done();}.bind(this));}e.exports=m;},null);