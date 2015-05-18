/*!CK:60894709!*//*1430111843,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zlSSS"]); }

__d("P2PTriggersUtils",["P2PQEValues"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=/\$((\d{1,3}(,\d{3})*)|\d+)(\.\d{1,2})?(?=\s|\.\s|\,\s|$|\.$|\,$|\?|\!)/g,i={canSeeTriggers:function(){return g.P2PMessageTriggersEnabled;},getMatches:function(j){return j.match(h);},getRegexSearchResults:function(j){return h.exec(j);}};e.exports=i;},null);