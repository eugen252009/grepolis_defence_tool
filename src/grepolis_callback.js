function test(o) {
    o = _.extend({ parse: !0 }, o);
    var r = this,
        a = o.success;
    return o.success = function(e) {
        var i = o.parse ? r.parse(e, o) : e;
        if (!r.set(i, o)) return !1;
        if (a) a.call(o.context, r, e, o);
        r.trigger("sync", r, e, o)
    },
        H(this, o), this.sync("read", this, o)
}

