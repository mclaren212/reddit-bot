goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__5729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__5729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5730__i = 0, G__5730__a = new Array(arguments.length -  0);
while (G__5730__i < G__5730__a.length) {G__5730__a[G__5730__i] = arguments[G__5730__i + 0]; ++G__5730__i;}
  args = new cljs.core.IndexedSeq(G__5730__a,0,null);
} 
return G__5729__delegate.call(this,args);};
G__5729.cljs$lang$maxFixedArity = 0;
G__5729.cljs$lang$applyTo = (function (arglist__5731){
var args = cljs.core.seq(arglist__5731);
return G__5729__delegate(args);
});
G__5729.cljs$core$IFn$_invoke$arity$variadic = G__5729__delegate;
return G__5729;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__5732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__5732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5733__i = 0, G__5733__a = new Array(arguments.length -  0);
while (G__5733__i < G__5733__a.length) {G__5733__a[G__5733__i] = arguments[G__5733__i + 0]; ++G__5733__i;}
  args = new cljs.core.IndexedSeq(G__5733__a,0,null);
} 
return G__5732__delegate.call(this,args);};
G__5732.cljs$lang$maxFixedArity = 0;
G__5732.cljs$lang$applyTo = (function (arglist__5734){
var args = cljs.core.seq(arglist__5734);
return G__5732__delegate(args);
});
G__5732.cljs$core$IFn$_invoke$arity$variadic = G__5732__delegate;
return G__5732;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
