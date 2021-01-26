goog.provide('server.main');
server.main.value_a = (1);
if((typeof server !== 'undefined') && (typeof server.main !== 'undefined') && (typeof server.main.value_b !== 'undefined')){
} else {
server.main.value_b = (2);
}
server.main.reload_BANG_ = (function server$main$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code updated."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trying values:",server.main.value_a,server.main.value_b], 0));
});
server.main.main_BANG_ = (function server$main$main_BANG_(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App loaded!"], 0));
});

//# sourceMappingURL=server.main.js.map
