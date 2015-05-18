/*!CK:1831102631!*//*1430122672,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5xjLi"]); }

__d("FollowLink",["Arbiter","CSS","ge"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={subscribeEvents:function(k,l,m){g.subscribe(['FollowUser','UnfollowUser'],function(event,n){if(n.profile_id!=k)return;var o=i(l),p=i(m),q=event=='FollowUser';o&&h.conditionShow(o,!q);p&&h.conditionShow(p,q);});}};e.exports=j;},null);
__d("legacy:SettingsUsernameEditor",["SettingsUsernameEditor"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.SettingsUsernameEditor=b('SettingsUsernameEditor');},3);