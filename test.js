var LZString = function() {
    function o(o, r) {
        if (!t[o]) {
            t[o] = {};
            for (var n = 0; n < o.length; n++) t[o][o.charAt(n)] = n
        }
        return t[o][r]
    }
    var r = String.fromCharCode,
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    t = {},
    i = {
        compressToBase64: function(o) {
            if (null == o) return "";
            var r = i._compress(o, 6,
            function(o) {
                return n.charAt(o)
            });
            switch (r.length % 4) {
            default:
            case 0:
                return r;
            case 1:
                return r + "===";
            case 2:
                return r + "==";
            case 3:
                return r + "="
            }
        },
        decompressFromBase64: function(r) {
            return null == r ? "": "" == r ? null: i._decompress(r.length, 32,
            function(e) {
                return o(n, r.charAt(e))
            })
        },
        compressToUTF16: function(o) {
            return null == o ? "": i._compress(o, 15,
            function(o) {
                return r(o + 32)
            }) + " "
        },
        decompressFromUTF16: function(o) {
            return null == o ? "": "" == o ? null: i._decompress(o.length, 16384,
            function(r) {
                return o.charCodeAt(r) - 32
            })
        },
        compressToUint8Array: function(o) {
            for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) {
                var s = r.charCodeAt(e);
                n[2 * e] = s >>> 8,
                n[2 * e + 1] = s % 256
            }
            return n
        },
        decompressFromUint8Array: function(o) {
            if (null === o || void 0 === o) return i.decompress(o);
            for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++) n[e] = 256 * o[2 * e] + o[2 * e + 1];
            var s = [];
            return n.forEach(function(o) {
                s.push(r(o))
            }),
            i.decompress(s.join(""))
        },
        compressToEncodedURIComponent: function(o) {
            return null == o ? "": i._compress(o, 6,
            function(o) {
                return e.charAt(o)
            })
        },
        decompressFromEncodedURIComponent: function(r) {
            return null == r ? "": "" == r ? null: (r = r.replace(/ /g, "+"), i._decompress(r.length, 32,
            function(n) {
                return o(e, r.charAt(n))
            }))
        },
        compress: function(o) {
            return i._compress(o, 16,
            function(o) {
                return r(o)
            })
        },
        _compress: function(o, r, n) {
            if (null == o) return "";
            var e, t, i, s = {},
            p = {},
            u = "",
            c = "",
            a = "",
            l = 2,
            f = 3,
            h = 2,
            d = [],
            m = 0,
            v = 0;
            for (i = 0; i < o.length; i += 1) if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c;
            else {
                if (Object.prototype.hasOwnProperty.call(p, a)) {
                    if (a.charCodeAt(0) < 256) {
                        for (e = 0; h > e; e++) m <<= 1,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                        for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t >>= 1
                    } else {
                        for (t = 1, e = 0; h > e; e++) m = m << 1 | t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t = 0;
                        for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t >>= 1
                    }
                    l--,
                    0 == l && (l = Math.pow(2, h), h++),
                    delete p[a]
                } else for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t,
                v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                t >>= 1;
                l--,
                0 == l && (l = Math.pow(2, h), h++),
                s[c] = f++,
                a = String(u)
            }
            if ("" !== a) {
                if (Object.prototype.hasOwnProperty.call(p, a)) {
                    if (a.charCodeAt(0) < 256) {
                        for (e = 0; h > e; e++) m <<= 1,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                        for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t >>= 1
                    } else {
                        for (t = 1, e = 0; h > e; e++) m = m << 1 | t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t = 0;
                        for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t,
                        v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                        t >>= 1
                    }
                    l--,
                    0 == l && (l = Math.pow(2, h), h++),
                    delete p[a]
                } else for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t,
                v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
                t >>= 1;
                l--,
                0 == l && (l = Math.pow(2, h), h++)
            }
            for (t = 2, e = 0; h > e; e++) m = m << 1 | 1 & t,
            v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++,
            t >>= 1;
            for (;;) {
                if (m <<= 1, v == r - 1) {
                    d.push(n(m));
                    break
                }
                v++
            }
            return d.join("")
        },
        decompress: function(o) {
            return null == o ? "": "" == o ? null: i._decompress(o.length, 32768,
            function(r) {
                return o.charCodeAt(r)
            })
        },
        _decompress: function(o, n, e) {
            var t, i, s, p, u, c, a, l, f = [],
            h = 4,
            d = 4,
            m = 3,
            v = "",
            w = [],
            A = {
                val: e(0),
                position: n,
                index: 1
            };
            for (i = 0; 3 > i; i += 1) f[i] = i;
            for (p = 0, c = Math.pow(2, 2), a = 1; a != c;) u = A.val & A.position,
            A.position >>= 1,
            0 == A.position && (A.position = n, A.val = e(A.index++)),
            p |= (u > 0 ? 1 : 0) * a,
            a <<= 1;
            switch (t = p) {
            case 0:
                for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position,
                A.position >>= 1,
                0 == A.position && (A.position = n, A.val = e(A.index++)),
                p |= (u > 0 ? 1 : 0) * a,
                a <<= 1;
                l = r(p);
                break;
            case 1:
                for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position,
                A.position >>= 1,
                0 == A.position && (A.position = n, A.val = e(A.index++)),
                p |= (u > 0 ? 1 : 0) * a,
                a <<= 1;
                l = r(p);
                break;
            case 2:
                return ""
            }
            for (f[3] = l, s = l, w.push(l);;) {
                if (A.index > o) return "";
                for (p = 0, c = Math.pow(2, m), a = 1; a != c;) u = A.val & A.position,
                A.position >>= 1,
                0 == A.position && (A.position = n, A.val = e(A.index++)),
                p |= (u > 0 ? 1 : 0) * a,
                a <<= 1;
                switch (l = p) {
                case 0:
                    for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position,
                    A.position >>= 1,
                    0 == A.position && (A.position = n, A.val = e(A.index++)),
                    p |= (u > 0 ? 1 : 0) * a,
                    a <<= 1;
                    f[d++] = r(p),
                    l = d - 1,
                    h--;
                    break;
                case 1:
                    for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position,
                    A.position >>= 1,
                    0 == A.position && (A.position = n, A.val = e(A.index++)),
                    p |= (u > 0 ? 1 : 0) * a,
                    a <<= 1;
                    f[d++] = r(p),
                    l = d - 1,
                    h--;
                    break;
                case 2:
                    return w.join("")
                }
                if (0 == h && (h = Math.pow(2, m), m++), f[l]) v = f[l];
                else {
                    if (l !== d) return null;
                    v = s + s.charAt(0)
                }
                w.push(v),
                f[d++] = s + v.charAt(0),
                h--,
                s = v,
                0 == h && (h = Math.pow(2, m), m++)
            }
        }
    };
    return i
} ();
"function" == typeof define && define.amd ? define(function() {
    return LZString
}) : "undefined" != typeof module && null != module && (module.exports = LZString);



let img_data = "JYWw5g9AzAHA7FATBArFAbI9AWCAGARhQDoArABzABpRJYFk1Md8C4zKbxp4lUMsuQgE4O1Wjwb9mQxHjFc6vRgJZ5EBBRPp8mg/IkRbuOlTINRjSqXrWJsVybtWySFcSeXT969I9Peduzuik5mPogw/l62sqIh2jEu+FDyCZ42yXhQmunWzubZRnlhgUJQliUBsSkOVUmFUG6ciZmNfvVtPlDBLRkF3VGdA2pQ8X354WrYaROlNXjYuXPVWdjFKw0+2JWbXdN1eyNC2M0ek2X42B1HUye95/NrQ7eXi+OPq4Uos59baihln99kIUBtgcd8GhoiCoYcIXcoWdQl8fCgbgi3igHij/qCXpiFigPrjYXh0L9SZDyUCqYjyeC6W90LtCVl0MjWtT0BimQt0DiufT0AS+eySUK3nBfkA"

var params_data = ['json', '&_KE=', '.pjax-container', 'chapter_num', 'parent', 'lazyload', 'decompressFromBase64', 'html', '\x22\x20href=\x22javascript:;\x22\x20onclick=\x22vg_pjax($(this));\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20pnext\x20next\x22\x20title=\x22下一页\x22>下页</a>\x0a\x09\x09<a\x20href=\x22javascript:goNumPage(\x27next\x27);\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20ml-1\x22\x20title=\x22下集\x22>下集</a>\x0a\x09\x09</div>\x0a\x09\x09</nav>\x0a\x09', 'asc', '\x22\x20title=\x22上一页\x22>上页</a>\x0a\x09\x09<div\x20class=\x22mx-1\x20mb-1\x22>\x0a\x09\x09<label\x20for=\x22page-selector\x22\x20class=\x22sr-only\x22>翻页</label>\x0a\x09\x09<select\x20class=\x22form-control\x20vg-page-selector\x22\x20id=\x22page-selector\x22\x20onchange=\x22vg_pjax($(this),\x201);\x22>\x0a\x09', 'ajax', '\x0a\x09\x09</select>\x0a\x09\x09</div>\x0a\x09\x09<a\x20data-p=\x22', '/uploads/', 'val', '/chapter_num?chapter_id=', '.pre', 'pre', 'location', '页</option>', 'round', 'next', 'preload', '\x0a\x09\x09<nav\x20aria-label=\x22Page\x20navigation\x22>\x0a\x09\x09<div\x20class=\x22form-inline\x22>\x0a\x09\x09<a\x20href=\x22javascript:goNumPage(\x27pre\x27);\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20mr-1\x22\x20title=\x22上集\x22>上集</a>\x0a\x09\x09<a\x20data-p=\x22', '.sort', 'chapter-type', 'url', 'split', '&type=', 'data', 'click', 'length', 'chapter-domain', 'get', '.vg-r-data', 'fadeIn', 'keydown', 'chapter-key', 'which', '没有啦，去发表下评论吧', '.show-pic', 'attr', 'href', 'push', 'replace', 'selected', '?_KS=', '.html', '<option\x20value=\x22', 'src', 'code'];
(function(a, b) {
    var d = function(t) {
        while (--t) {
            a['push'](a['shift']());
        }
    };
    d(++b);
}(params_data, 0x112));


var by = function(a, b) {
    a = a - 0x0;
    var c = params_data[a];
    return c;
};
//[Function: decompressFromBase64]
console.log(LZString[by('0x26')]);
console.log(LZString.decompressFromBase64(img_data));

var base = "https://p1.manhuacat.com/uploads/";

let img_data_arr = LZString[by('0x26')](img_data)[by('0x8')](',');

// for (var i = 0; i < img_data_arr.length; i ++) {
//     console.log("https://p1.manhuacat.com/uploads/"+img_data_arr[i]);
// }




