/*!CK:2253744475!*//*1430111843,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["57M2Q"]); }

__d("P2PTriggers.react",["ChatOpenTab","DOM","Event","MercuryIDs","P2PActions","React","p2pTriggerJSXDOMToString"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=l,o=n.PropTypes,p=l.createClass({displayName:"P2PTriggers",propTypes:{renderEmoji:o.bool,renderEmoticons:o.bool,text:o.string.isRequired,threadID:o.string.isRequired},getInitialState:function(){var q=j.getUserIDFromThreadID(this.props.threadID);return {amount:'',recipientID:q};},_clickListeners:([]),componentDidMount:function(){var q=h.scry(l.findDOMNode(this),'[data-p2p-trigger]');for(var r=0,s=q.length;r<s;r++)this._clickListeners.push(i.listen(q[0],'click',this.handleTriggerClick));},componentDidUnmount:function(){var q;if(this._clickListeners){for(var r=0,s=this._clickListeners.length;r<s;r++){q=this._clickListeners[r];if(q)q.remove();}this._clickListeners=[];}},getAmountFromTriggerClickEvent:function(q){return q.target.getAttribute('data-p2p-trigger');},handleTriggerClick:function(q){q.preventDefault();this.setState({amount:this.getAmountFromTriggerClickEvent(q)});if(g.canOpenTab())g.openThread(this.props.threadID,'p2p_message_trigger');this.openSendView();},openSendView:function(){k.chatSendViewOpened(this.state.recipientID,this.state.amount);},render:function(){var q=m(this.props.text,this.props.renderEmoji,this.props.renderEmoticons,!!(this.state.recipientID));return (l.createElement("span",{dangerouslySetInnerHTML:{__html:q}}));}});e.exports=p;},null);