goog.provide('redditbot');
cljs.nodejs.enable_util_print_BANG_();
redditbot._main = (function redditbot$_main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5741 = arguments.length;
var i__4737__auto___5742 = (0);
while(true){
if((i__4737__auto___5742 < len__4736__auto___5741)){
args__4742__auto__.push((arguments[i__4737__auto___5742]));

var G__5743 = (i__4737__auto___5742 + (1));
i__4737__auto___5742 = G__5743;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return redditbot._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(redditbot._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
shadow.js.shim.module$dotenv.config();

redditbot.client = (function (){var G__5729 = new cljs.core.Keyword(null,"userAgent","userAgent",-205720749);
var G__5730 = new cljs.core.Keyword(null,"clientId","clientId",1767253728);
var G__5731 = new cljs.core.Keyword(null,"clientSecret","clientSecret",1407075999);
var G__5732 = new cljs.core.Keyword(null,"username","username",1605666410);
var G__5733 = new cljs.core.Keyword(null,"password","password",417022471);
var obj5735 = ({});
goog.object.set(obj5735,G__5729,"reddit-bot-example-node");

goog.object.set(obj5735,G__5730,process.env.CLIENT_ID);

goog.object.set(obj5735,G__5731,process.env.CLIENT_SECRET);

goog.object.set(obj5735,G__5732,process.env.REDDIT_USER);

goog.object.set(obj5735,G__5733,process.env.REDDIT_PASS);

return obj5735;
})();

redditbot.comments = (new shadow.js.shim.module$snoostorm.CommentStream(redditbot.client,(function (){var G__5736 = new cljs.core.Keyword(null,"subreddit","subreddit",-670654754);
var G__5737 = new cljs.core.Keyword(null,"limit","limit",-1355822363);
var G__5738 = new cljs.core.Keyword(null,"pollTime","pollTime",1761876738);
var obj5740 = ({});
goog.object.set(obj5740,G__5736,"AskReddit");

goog.object.set(obj5740,G__5737,(10));

goog.object.set(obj5740,G__5738,(2000));

return obj5740;
})()));

return redditbot.comments.on("item",cljs.core.println);
}));

(redditbot._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(redditbot._main.cljs$lang$applyTo = (function (seq5728){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5728));
}));

(cljs.core._STAR_main_cli_fn_STAR_ = redditbot._main);

//# sourceMappingURL=redditbot.js.map
