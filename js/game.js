js-beautify
(v1.14.9)
Beautify JavaScript, JSON, React.js, HTML, CSS, SCSS, and SASS

Enable Dark Mode

Beautify JavaScript
Beautify Code (ctrl‑enter)

Copy to Clipboard
 
Select All
 
Clear
 No file chosen
Options

Indent with 4 spaces

Allow 5 newlines between tokens

Do not wrap lines

Braces with control statement
HTML <style>, <script> formatting:


Add one indent level
  End script and style with newline?
Support e4x/jsx syntax
Use comma-first list style?
Detect packers and obfuscators?
Preserve inline braces/code blocks?
Keep array indentation?
Break lines on chained methods?
Space before conditional: "if(x)" / "if (x)"
Unescape printable chars encoded as \xNN or \uNNNN?
Use JSLint-happy formatting tweaks?
Indent <head> and <body> sections?
Keep indentation on empty lines?
Use a simple textarea for code input?
Additional Settings (JSON):

{}
Your Selected Options (JSON):

{
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}
Created by Einar Lielmanis, maintained and evolved by Liam Newman.

All of the source code is completely free and open, available on GitHub under MIT licence, and we have a command-line version, python library and a node package as well.

We use the wonderful CodeMirror syntax highlighting editor, written by Marijn Haverbeke.

Made with a great help of many contributors. Special thanks to:
Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider, Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison, Chris J. Shull, Mathias Bynens, Vittorio Gambaletta, Stefano Sanfilippo and Daniel Stockman.

 
1
! function(h, u, c, P) {
2
    const Y = 26,
3
        z = 57,
4
        H = 51,
5
        U = [Y, z, H],
6
        F = 0,
7
        K = 1,
8
        B = 2,
9
        G = 0,
10
        _ = 1,
11
        V = 2,
12
        X = 3,
13
        j = 4,
14
        Z = 5,
15
        J = 6,
16
        Q = 7;
17
    const ee = 1,
18
        te = 2,
19
        ne = {
20
            LANG: 0,
21
            SLOTS: 1,
22
            DRAWTIME: 2,
23
            ROUNDS: 3,
24
            WORDCOUNT: 4,
25
            HINTCOUNT: 5,
26
            WORDMODE: 6,
27
            CUSTOMWORDSONLY: 7
28
        },
29
        ae = {
30
            NORMAL: 0,
31
            HIDDEN: 1,
32
            COMBINATION: 2
33
        },
34
        oe = ["Normal", "Hidden", "Combination"],
35
        re = ["English", "German", "Bulgarian", "Czech", "Danish", "Dutch", "Finnish", "French", "Estonian", "Greek", "Hebrew", "Hungarian", "Italian", "Japanese", "Korean", "Latvian", "Macedonian", "Norwegian", "Portuguese", "Polish", "Romanian", "Russian", "Serbian", "Slovakian", "Spanish", "Swedish", "Tagalog", "Turkish"];
36
    if (h.localStorageAvailable = !1,
37
        void 0 !== c)
38
        try {
39
            c.setItem("feature_test", "yes"),
40
                "yes" === c.getItem("feature_test") && (c.removeItem("feature_test"),
41
                    h.localStorageAvailable = !0)
42
        } catch (e) {}
43
    var d = [];
44
​
45
    function ie(e) {
46
        for (var t = 0; t < d.length; t++)
47
            if (d[t].name == e)
48
                return d[t]
49
    }
50
​
51
    function le(e, t, n, a, o) {
52
        var r, i, l = t,
53
            s = (h.localStorageAvailable && (r = c.getItem("hotkey_" + e)) && (t = r),
54
                ie(e));
55
        return s ? (s.key = t,
56
                s.def = l,
57
                s.desc = n) : (s = {
58
                    name: e,
59
                    desc: n,
60
                    key: t,
61
                    def: l,
62
                    listing: $("item"),
63
                    changed: [],
64
                    cb: []
65
                },
66
                d.push(s),
67
                Ve(r = $("key", s.name), "text"),
68
                s.listing.appendChild(r),
69
                (i = u.createElement("input")).value = s.key,
70
                s.listing.appendChild(i),
71
                D(i, "keydown", function(e) {
72
                    for (var t = e.key, n = 0; n < d.length; n++)
73
                        if (d[n].key == t)
74
                            return void e.preventDefault();
75
                    i.value = t,
76
                        s.key = t;
77
                    for (n = 0; n < s.changed.length; n++)
78
                        s.changed[n](s);
79
                    return se(),
80
                        e.preventDefault(),
81
                        !1
82
                }),
83
                y[g].querySelector("#hotkey-list").appendChild(s.listing)),
84
            a && s.cb.push(a),
85
            o && s.changed.push(o),
86
            s
87
    }
88
​
89
    function se() {
90
        if (h.localStorageAvailable)
91
            for (var e = 0; e < d.length; e++)
92
                h.localStorage.setItem("hotkey_" + d[e].name, d[e].key)
93
    }
94
    var p = {
95
        avatar: [Math.round(100 * Math.random()) % Y, Math.round(100 * Math.random()) % z, Math.round(100 * Math.random()) % H, -1],
96
        volume: 100,
97
        dark: 0,
98
        filterChat: 1,
99
        pressureSensitivity: 1,
100
        displayLang: "en",
101
        chatDeleteQuota: 100
102
    };
103
​
104
    function n(e, t) {
105
        e = c.getItem(e);
106
        return null == e ? t : e
107
    }
108
​
109
    function a() {
110
        h.localStorageAvailable ? (c.setItem("name", Bn.value),
111
            c.setItem("lang", Gn.value),
112
            c.setItem("displaylang", p.displayLang),
113
            c.setItem("volume", p.volume),
114
            c.setItem("dark", 1 == p.dark ? 1 : 0),
115
            c.setItem("filter", 1 == p.filterChat ? 1 : 0),
116
            c.setItem("pressure", 1 == p.pressureSensitivity ? 1 : 0),
117
            c.setItem("ava", JSON.stringify(p.avatar)),
118
            c.setItem("keyboard", Ye.value),
119
            c.setItem("keyboardlayout", ze.value),
120
            console.log("Settings saved.")) : console.log("Settings not saved. LocalStorage unavailable.")
121
    }
122
​
123
    function D(e, t, n) {
124
        for (var a, o = e, r = ("string" == typeof e ? o = u.querySelectorAll(e) : "[object Array]" !== (a = Object.prototype.toString.call(e)) && "[object NodeList]" !== a && "[object HTMLCollection]" !== a && (o = [e]),
125
                t.split(" ")), i = 0; i < o.length; i++)
126
            for (var l = 0; l < r.length; l++)
127
                o[i].addEventListener(r[l], n)
128
    }
129
​
130
    function $(e, t) {
131
        var n = u.createElement("div");
132
        if (void 0 !== e)
133
            for (var a = e.split(" "), o = 0; o < a.length; o++)
134
                n.classList.add(a[o]);
135
        return void 0 !== t && (n.textContent = t),
136
            n
137
    }
138
​
139
    function ce(e, t, n) {
140
        var a = u.createElement(e);
141
        if (void 0 !== t)
142
            for (var o = t.split(" "), r = 0; r < o.length; r++)
143
                a.classList.add(o[r]);
144
        return void 0 !== n && (a.textContent = n),
145
            a
146
    }
147
​
148
    function A(e) {
149
        for (; e.firstChild;)
150
            e.removeChild(e.firstChild)
151
    }
152
​
153
    function de(e, t, n) {
154
        var a = $("avatar"),
155
            o = $("color"),
156
            r = $("eyes"),
157
            i = $("mouth"),
158
            l = $("special"),
159
            s = $("owner");
160
        return s.style.display = n ? "block" : "none",
161
            a.appendChild(o),
162
            a.appendChild(r),
163
            a.appendChild(i),
164
            a.appendChild(l),
165
            a.appendChild(s),
166
            a.parts = [o, r, i],
167
            ue(a, e),
168
            a
169
    }
170
​
171
    function ue(e, t) {
172
        function n(e, t, n, a) {
173
            var o = -t % n * 100,
174
                t = 100 * -Math.floor(t / n);
175
            e.style.backgroundPosition = o + "% " + t + "%"
176
        }
177
        var a = t[0] % Y,
178
            o = t[1] % z,
179
            r = t[2] % H,
180
            t = t[3],
181
            a = (n(e.querySelector(".color"), a, 10),
182
                n(e.querySelector(".eyes"), o, 10),
183
                n(e.querySelector(".mouth"), r, 10),
184
                e.querySelector(".special"));
185
        0 <= t ? (a.style.display = "",
186
            n(a, t, 10)) : a.style.display = "none"
187
    }
188
​
189
    function he(e, t) {
190
        e.querySelector(".owner").style.display = t ? "block" : "none"
191
    }
192
​
193
    function pe(e, t, n, a) {
194
        var o = {
195
            element: $("dots"),
196
            dots: [],
197
            selected: 0,
198
            change: a
199
        };
200
        return e.appendChild(o.element),
201
            n.push(o.element),
202
            D(n, "DOMMouseScroll wheel", function(e) {
203
                var t;
204
                1 < o.dots.length && (t = -e.deltaY || e.wheelDeltaY,
205
                        t = Math.sign(t),
206
                        ge(o, Math.min(o.dots.length - 1, Math.max(0, o.selected - t)), !0)),
207
                    e.preventDefault(),
208
                    e.stopPropagation()
209
            }),
210
            me(o, t),
211
            o
212
    }
213
​
214
    function me(e, t) {
215
        A(e.element),
216
            e.dots = [];
217
        for (var n = 0; n < t; n++) {
218
            var a = $("dot");
219
            a.index = n,
220
                a.appendChild($("inner")),
221
                D(a, "click", function() {
222
                    ge(e, this.index, !0)
223
                }),
224
                e.element.appendChild(a),
225
                e.dots.push(a)
226
        }
227
        e.selected < 0 && (e.selected = 0),
228
            e.selected >= t && (e.selected = t - 1),
229
            ge(e, e.selected, !1)
230
    }
231
​
232
    function ge(e, t, n) {
233
        if (0 <= t && t < e.dots.length) {
234
            e.selected = t;
235
            for (var a = 0; a < e.dots.length; a++)
236
                e.dots[a].classList.remove("active");
237
            e.dots[t].classList.add("active"),
238
                e.change(e, t, n)
239
        }
240
    }
241
    const m = 0,
242
        fe = 1,
243
        ye = 2,
244
        ve = 3,
245
        g = 4,
246
        be = 5;
247
    var f = u.querySelector("#modal"),
248
        Se = f.querySelector(".modal-title .text"),
249
        ke = f.querySelector(".modal-content"),
250
        y = [];
251
​
252
    function we(e) {
253
        y[m].querySelector(".buttons button.mute").textContent = R(e ? "Unmute" : "Mute")
254
    }
255
​
256
    function i(e, t) {
257
        f.style.display = "block";
258
        for (var n = 0; n < y.length; n++)
259
            y[n].style.display = "none";
260
        y[e].style.display = "flex";
261
        var a = y[e];
262
        switch (e) {
263
            case fe:
264
                Se.textContent = R("Something went wrong!"),
265
                    a.querySelector(".message").textContent = t;
266
                break;
267
            case ye:
268
                Se.textContent = R("Disconnected!"),
269
                    a.querySelector(".message").textContent = t;
270
                break;
271
            case m:
272
                Se.textContent = t.id == C ? R("$ (You)", t.name) : t.name;
273
                var o = (W(C).flags & An) == An,
274
                    r = (t.flags & An) == An,
275
                    i = a.querySelector(".buttons"),
276
                    r = (i.style.display = t.id == C || r ? "none" : "flex",
277
                        i.querySelector(".button-pair").style.display = C == Rn || o ? "flex" : "none",
278
                        i.querySelector("button.report").style.display = t.reported ? "none" : "",
279
                        we(t.muted),
280
                        a.querySelector(".report-menu").style.display = "none",
281
                        a.querySelector(".invite").style.display = C == t.id ? "flex" : "none",
282
                        ke.querySelector(".player")),
283
                    o = (r.style.display = "",
284
                        A(r),
285
                        de(t.avatar));
286
                he(o, Rn == t.id),
287
                    r.appendChild(o);
288
                break;
289
            case be:
290
                Se.textContent = R("Rooms"),
291
                    roomsUpdate(t);
292
                break;
293
            case ve:
294
                Se.textContent = 0 == Tn ? "Public Room" : "Private Room",
295
                    A(a);
296
                for (var l = ["Language", "Players", "Drawtime", "Rounds", "Word count", "Hint count", "Word mode", "Custom words only"], s = $("settings"), n = 0; n < In.length; n++) {
297
                    var c = $("setting"),
298
                        d = ce("img", "icon"),
299
                        d = (d.src = "/img/setting_" + n + ".gif",
300
                            c.appendChild(d),
301
                            c.appendChild(ce("span", "name", l[n] + ":")),
302
                            In[n]);
303
                    n == ne.CUSTOMWORDSONLY && (d = d ? "Yes" : "No"),
304
                        n == ne.SLOTS && (d = w.length + "/" + d),
305
                        n == ne.LANG && (d = re[d]),
306
                        n == ne.WORDMODE && (d = oe[d]),
307
                        n == ne.DRAWTIME && (d += "s"),
308
                        c.appendChild(ce("span", "value", d)),
309
                        s.appendChild(c)
310
                }
311
                a.appendChild(s);
312
                i = u.querySelector("#game-invite").cloneNode(!0);
313
                D(i.querySelector("#copy-invite"), "click", io),
314
                    a.appendChild(i);
315
                break;
316
            case g:
317
                Se.textContent = R("Settings"),
318
                    a.querySelector("#select-pressure-sensitivity").value = p.pressureSensitivity
319
        }
320
    }
321
​
322
    function Ce() {
323
        f.style.display = "none"
324
    }
325
    y[m] = f.querySelector(".modal-container-player"),
326
        y[fe] = f.querySelector(".modal-container-info"),
327
        y[ye] = f.querySelector(".modal-container-info"),
328
        y[ve] = f.querySelector(".modal-container-room"),
329
        y[g] = f.querySelector(".modal-container-settings"),
330
        D(h, "click", function(e) {
331
            e.target == f && Ce()
332
        }),
333
        D([f.querySelector(".close"), y[fe].querySelector("button.ok")], "click", Ce);
334
    var qe = u.querySelector("#game-chat form"),
335
        xe = u.querySelector("#game-chat form input"),
336
        Me = u.querySelector("#game-chat .chat-content");
337
    const Le = 0;
338
    const Ee = 2,
339
        De = 3,
340
        $e = 4,
341
        Ae = 5,
342
        Re = 6,
343
        Ie = 7,
344
        Te = ["BASE", "GUESSED", "CLOSE", "DRAWING", "JOIN", "LEAVE", "OWNER", "GUESSCHAT"];
345
​
346
    function v(e) {
347
        return "var(--COLOR_CHAT_TEXT_" + Te[e] + ")"
348
    }
349
​
350
    function Ne() {
351
        Me.scrollTop = Me.scrollHeight + 100
352
    }
353
​
354
    function b(e, t, n, a) {
355
        var o = u.createElement("p"),
356
            r = u.createElement("b"),
357
            a = (r.textContent = a ? e : e + ": ",
358
                o.appendChild(r),
359
                o.style.color = n,
360
                u.createElement("span")),
361
            e = (a.textContent = t,
362
                o.appendChild(a),
363
                Me.scrollHeight - Me.scrollTop - Me.clientHeight <= 20);
364
        if (Me.appendChild(o),
365
            e && Ne(),
366
            0 < p.chatDeleteQuota)
367
            for (; Me.childElementCount > p.chatDeleteQuota;)
368
                Me.firstElementChild.remove();
369
        return o
370
    }
371
    var l = void 0;
372
​
373
    function Oe(e) {
374
        We();
375
        for (var t = e.dataset.tooltip, n = e.dataset.tooltipdir || "N", a = ((l = $("tooltip")).appendChild($("tooltip-arrow")),
376
                l.appendChild($("tooltip-content", R(t))),
377
                !1), o = e; o;) {
378
            if ("fixed" == h.getComputedStyle(o).position) {
379
                a = !0;
380
                break
381
            }
382
            o = o.parentElement
383
        }
384
        l.style.position = a ? "fixed" : "absolute";
385
        var t = e.getBoundingClientRect(),
386
            e = ("E" == (n = "W" == (n = "S" == (n = "N" == n && t.top - h.scrollY < 48 ? "S" : n) && t.bottom - h.scrollY > u.documentElement.clientHeight - 48 ? "N" : n) && t.left - h.scrollX < 48 ? "E" : n) && t.right - h.scrollX > u.documentElement.clientWidth - 48 && (n = "W"),
387
                t.left),
388
            r = t.top;
389
        "N" == n && (e = (t.left + t.right) / 2),
390
            "S" == n && (e = (t.left + t.right) / 2,
391
                r = t.bottom),
392
            "E" == n && (e = t.right,
393
                r = (t.top + t.bottom) / 2),
394
            "W" == n && (r = (t.top + t.bottom) / 2),
395
            a || (e += h.scrollX,
396
                r += h.scrollY),
397
            l.classList.add(n),
398
            l.style.left = e + "px",
399
            l.style.top = r + "px",
400
            u.body.appendChild(l)
401
    }
402
​
403
    function We() {
404
        l && (l.remove(),
405
            l = void 0)
406
    }
407
    const Pe = [{
408
        code: "en",
409
        name: "English",
410
        layout: [
411
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
412
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
413
            ["Z", "X", "C", "V", "B", "N", "M"]
414
        ]
415
    }, {
416
        code: "fr",
417
        name: "French",
418
        layout: [
419
            ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
420
            ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
421
            ["W", "X", "C", "V", "B", "N", "É", "È", "Ç", "À", "'"]
422
        ]
423
    }, {
424
        code: "de",
425
        name: "German",
426
        layout: [
427
            ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"],
428
            ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
429
            ["Y", "X", "C", "V", "B", "N", "M"]
430
        ]
431
    }, {
432
        code: "tr",
433
        name: "Turkish",
434
        layout: [
435
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
436
            ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
437
            ["Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç"]
438
        ]
439
    }, {
440
        code: "ru",
441
        name: "Russian",
442
        layout: [
443
            ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
444
            ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
445
            ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "Ё"]
446
        ]
447
    }, {
448
        code: "es",
449
        name: "Spanish",
450
        layout: [
451
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
452
            ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
453
            ["Z", "X", "C", "V", "B", "N", "M"]
454
        ]
455
    }];
456
    var Ye = u.querySelector("#select-mobile-keyboard-enabled"),
457
        ze = u.querySelector("#select-mobile-keyboard-layout"),
458
        He = {
459
            elements: {
460
                main: u.querySelector("#game-keyboard"),
461
                input: u.querySelector("#game-keyboard .input"),
462
                rows: u.querySelector("#game-keyboard .keys"),
463
                caps: 0,
464
                keys: []
465
            },
466
            lang: 0,
467
            input: "",
468
            caps: !1,
469
            keys: [],
470
            rows: [],
471
            columns: 0,
472
            isOpen: !1,
473
            getKeyLowercase: function(e) {
474
                return e.toLocaleLowerCase(this.lang)
475
            },
476
            getKeyUppercase: function(e) {
477
                return e.toLocaleUpperCase(this.lang)
478
            },
479
            init: function(e) {
480
                this.lang = e.code,
481
                    this.caps = !1,
482
                    this.columns = 0,
483
                    this.elements.keys = [],
484
                    A(this.elements.rows);
485
                var t = e.layout,
486
                    i = this;
487
​
488
                function n(e, t, n) {
489
                    var a, o = ce("button", "key"),
490
                        r = "PointerEvent" in h ? "pointerdown" : "click";
491
                    return Ue.has(t) ? (a = Ue.get(t),
492
                            o.classList.add(a.class),
493
                            o.appendChild(ce("span", "material-icons", a.icon)),
494
                            D(o, r, function(e) {
495
                                a.callback(i)
496
                            })) : (o.textContent = i.getKeyLowercase(t),
497
                            D(o, r, function(e) {
498
                                i.inputAdd(t)
499
                            }),
500
                            i.elements.keys.push(o)),
501
                        n ? e.insertBefore(o, e.firstChild) : e.appendChild(o),
502
                        o
503
                }
504
                for (var a = 0, o = 0; o < t.length; o++)
505
                    for (var a = i.addRow(), r = 0; r < t[o].length; r++)
506
                        n(a, t[o][r]);
507
                this.elements.caps = n(a, "caps", !0),
508
                    n(a, "backspace"),
509
                    a = i.addRow();
510
                for (var l = ["-", "space", ".", "enter"], r = 0; r < l.length; r++)
511
                    n(a, l[r])
512
            },
513
            addRow: function() {
514
                var e = $("row");
515
                return this.elements.rows.appendChild(e),
516
                    this.rows.push(e),
517
                    e
518
            },
519
            inputChanged: function() {
520
                He.elements.input.querySelector("span").textContent = He.input
521
            },
522
            inputAdd: function(e) {
523
                this.input += this.caps ? this.getKeyUppercase(e) : this.getKeyLowercase(e),
524
                    this.inputChanged(),
525
                    this.caps && this.toggleCaps()
526
            },
527
            enter: function() {
528
                0 < this.input.length && (so(this.input),
529
                    this.input = "",
530
                    this.inputChanged())
531
            },
532
            toggleCaps: function() {
533
                this.caps = !this.caps;
534
                for (var e = 0; e < this.elements.keys.length; e++) {
535
                    var t = this.elements.keys[e];
536
                    t.textContent = this.caps ? this.getKeyUppercase(t.textContent) : this.getKeyLowercase(t.textContent)
537
                }
538
                this.elements.caps.classList.toggle("enabled", this.caps)
539
            }
540
        };
541
    const Ue = new Map;
542
​
543
    function Fe() {
544
        1 == Ye.value ? u.documentElement.dataset.mobileKeyboard = "" : delete u.documentElement.dataset.mobileKeyboard
545
    }
546
    Ue.set("backspace", {
547
            class: "wide",
548
            icon: "backspace",
549
            callback: function(e) {
550
                0 < e.input.length && (e.input = e.input.slice(0, -1),
551
                    e.inputChanged())
552
            }
553
        }),
554
        Ue.set("caps", {
555
            class: "wide",
556
            icon: "keyboard_capslock",
557
            callback: function(e) {
558
                e.toggleCaps()
559
            }
560
        }),
561
        Ue.set("enter", {
562
            class: "wide",
563
            icon: "keyboard_return",
564
            callback: function(e) {
565
                e.enter()
566
            }
567
        }),
568
        Ue.set("space", {
569
            class: "extra-wide",
570
            icon: "space_bar",
571
            callback: function(e) {
572
                e.input += " ",
573
                    e.inputChanged()
574
            }
575
        });
576
    for (var e = 0; e < Pe.length; e++) {
577
        var Ke = ce("option");
578
        Ke.textContent = Pe[e].name,
579
            Ke.value = Pe[e].code,
580
            ze.appendChild(Ke)
581
    }
582
    D(ze, "change", function(e) {
583
            for (var t = void 0, n = 0; n < Pe.length; n++)
584
                Pe[n].code == this.value && (t = Pe[n]);
585
            null != t && He.init(t)
586
        }),
587
        D([Ye, ze], "change", function(e) {
588
            a(),
589
                Fe()
590
        }),
591
        D(He.elements.input, "click", function() {
592
            He.isOpen || (u.documentElement.dataset.mobileKeyboardOpen = "",
593
                za(),
594
                Ne(),
595
                He.isOpen = !0)
596
        }),
597
        He.init(Pe[0]);
598
    var Be = {},
599
        Ge = [];
600
​
601
    function _e(e, t) {
602
        e = e[t];
603
        return null != e && "" != e ? e : t
604
    }
605
​
606
    function R(e, t) {
607
        var n = _e(Be[p.displayLang], e),
608
            a = "",
609
            o = 0;
610
        Array.isArray(t) || (t = [t]);
611
        for (var r = 0; r < n.length; r++) {
612
            var i = n.charAt(r);
613
            "$" == i ? (a += t[o],
614
                o++) : a += i
615
        }
616
        return a
617
    }
618
​
619
    function Ve(e, t) {
620
        if ("children" == t)
621
            for (var n = 0; n < e.children.length; n++) {
622
                var a = e.children[n].dataset.translate;
623
                Ve(e.children[n], null == a ? "text" : a)
624
            }
625
        else {
626
            var o = "";
627
            "text" == t && (o = e.textContent),
628
                0 < (o = "placeholder" == t ? e.placeholder : o).length ? Ge.push({
629
                    key: o,
630
                    element: e,
631
                    type: t
632
                }) : (console.log("Empty key passed to translate with!"),
633
                    console.log(e))
634
        }
635
    }
636
    Be.en = {},
637
        Be.de = {
638
            "You have been kicked!": "Du wurdest gekickt!",
639
            "You have been banned!": "Du wurdest gebannt!",
640
            "You muted '$'!": "Du hast '$' stummgeschalten!",
641
            "You unmuted '$'!": "Du hast die Stummschaltung für '$' aufgehoben!",
642
            "You are on a kick cooldown!": "Du bist noch in der Kick Abklingzeit!",
643
            "You are banned from this room!": "Du bist von diesem Raum gebannt!",
644
            "You need at least 2 players to start the game!": "Du brauchst mind. 2 Spieler um das Spiel zu starten!",
645
            "Server restarting in about $ seconds!": "Server Neustart in ungefähr $ Sekunden!",
646
            "Spam detected! You're sending messages too quickly.": "Spam erkannt! Du sendest Nachrichten zu schnell.",
647
            "You can not votekick the lobby owner!": "Du kannst den Raumbesitzer nicht kicken!",
648
            "The word was '$'": "Das Wort war '$'",
649
            "$ is drawing now!": "$ zeichnet nun!",
650
            "$ is now the room owner!": "$ ist nun der Raumeigentümer!",
651
            "$ is voting to kick $ ($/$)": "$ möchte $ kicken ($/$)!",
652
            "$ joined the room!": "$ ist dem Raum beigetreten!",
653
            "$ left the room!": "$ hat den Raum verlassen!",
654
            "$ has been kicked!": "$ wurde gekickt!",
655
            "$ has been banned!": "$ wurde gebannt!",
656
            "$ guessed the word!": "$ hat das Wort erraten!",
657
            "$ liked the drawing!": "$ mag die Zeichnung!",
658
            "$ disliked the drawing!": "$ mag die Zeichnung nicht!",
659
            "$ is close!": "$ ist nah dran!",
660
            "$ is choosing a word!": "$ wählt ein Wort!",
661
            "$ won with a score of $!": "$ hat mit einem Punktestand von $ gewonnen!",
662
            "$ and $ won with a score of $!": "$ und $ haben mit einem Punktestand von $ gewonnen!",
663
            WAITING: "WARTEN",
664
            "DRAW THIS": "ZEICHNE",
665
            "WORD HIDDEN": "WORT VERSTECKT",
666
            "GUESS THIS": "RATE",
667
            "$ (You)": "$ (Du)",
668
            "$ points": "$ Punkte",
669
            "Room not found!": "Raum nicht gefunden!",
670
            "Room is full!": "Raum ist voll!",
671
            "No rooms found!": "Keine Räume gefunden!",
672
            "An unknown error ('$')": "Unbekannter Fehler ('$')",
673
            "Something went wrong!": "Etwas ist schief gelaufen!",
674
            "Disconnected!": "Verbindung getrennt!",
675
            "Connection lost!": "Verbindung verloren!",
676
            "Servers are currently undergoing maintenance!": "Server werden derzeit gewartet",
677
            "Please try again later!": "Bitte versuch es später noch einmal!",
678
            "An unknown error occurred ('$')": "Ein unbekannter Fehler ist aufgetreten ('$')",
679
            Unmute: "Stumm. aufheben",
680
            Mute: "Stummschalten",
681
            Rooms: "Räume",
682
            Settings: "Einstellungen",
683
            "Not started": "Nicht gestartet",
684
            Round: "Runde",
685
            Rounds: "Runden",
686
            "Round $": "Runde $",
687
            "Round $ of $": "Runde $ von $",
688
            "Waiting for players...": "Auf Spieler warten...",
689
            "Game starting in a few seconds...": "Das Spiel beginnt in wenigen Sekunden...",
690
            "is the winner!": "hat gewonnen!",
691
            "are the winners!": "haben gewonnen!",
692
            "Nobody won!": "Niemand hat gewonnen!",
693
            "Choose a word": "Wähle ein Wort",
694
            "The word was": "Das Wort war",
695
            User: "Spieler",
696
            Play: "Spielen",
697
            "Create Room": "Raum erstellen",
698
            "View Rooms": "Räume ansehen",
699
            "How to play": "Wie gespielt wird",
700
            About: "Über",
701
            News: "Neuigkeiten",
702
            "When it's your turn, choose a word you want to draw!": "Wähle ein Wort, das du zeichnen willst, wenn du dran bist!",
703
            "Try to draw your choosen word! No spelling!": "Versuche nun dein Wort zu zeichnen. Kein Schreiben!",
704
            "Let other players try to guess your drawn word!": "Lass andere Mitspieler dein gezeichnetes Wort erraten!",
705
            "When it's not your turn, try to guess what other players are drawing!": "Wenn du nicht dran bist mit Zeichnen, versuche die Zeichnungen anderer zu erraten!",
706
            "Score the most points and be crowned the winner at the end!": "Sammel die meisten Punkte und werde zum Gewinner!",
707
            "is a free online multiplayer drawing and guessing pictionary game.": "ist ein kostenloses Mehrspieler-Zeichnen und Raten- / Montagsmaler-Spiel.",
708
            "A normal game consists of a few rounds, where every round a player has to draw their chosen word and others have to guess it to gain points!": "Ein normales Spiel besteht aus drei Runden, in welcher jeder Spieler sein gewähltes Wort zeichnen muss, während die Anderen es für Punkte erraten müssen!",
709
            "The person with the most points at the end of the game, will then be crowned as the winner!": "Die Person mit dem höchsten Punktestand am Ende des Spiels wird als Sieger gekrönt!",
710
            "Have fun!": "Viel Spaß!",
711
            "Invite your friends!": "Lad deine Freunde ein!",
712
            Copy: "Kopieren",
713
            "Hover over me to see the Invite link!": "Einladungslink hier anschauen!",
714
            "Click to copy the link to this room!": "Klicke um den Einladungslink zu kopieren!",
715
            Visibility: "Sichtbarkeit",
716
            Name: "Name",
717
            Players: "Spieler",
718
            Drawtime: "Zeit",
719
            Language: "Sprache",
720
            "Word Mode": "Wort-Modus",
721
            "Word Count ": "Wort-Anzahl",
722
            Hints: "Hinweise",
723
            "Custom words": "Eigene Wörter",
724
            "Minimum of 10 words. 1-32 characters per word! 10000 characters maximum. Separated by a , (comma)": "Minimum von 10 Wörtern. 1-32 Buchstaben pro Wort. 10000 Buchstaben maximal. Getrennt durch ein , (Komma)",
725
            "Use custom words only": "Nur eigene Wörter benutzen",
726
            "Start!": "Starten!",
727
            All: "Alle",
728
            Custom: "Benutzerdefiniert",
729
            Public: "Öffentlich",
730
            Private: "Privat",
731
            Mode: "Modus",
732
            Normal: "Normal",
733
            Hidden: "Versteckt",
734
            Combination: "Kombination",
735
            "Please select the reasons for your report": "Bitte wählen Sie die Gründe für Ihre Meldung",
736
            "Inappropriate Messages / Drawings": "Unangemessene Nachrichten / Zeichnungen",
737
            Spam: "Spam",
738
            "Botting / Cheating": "Botting / Cheating",
739
            "Your report for '$' has been sent!": "Deine Meldung für '$' wurde abgesendet!",
740
            "Enter your name": "Gib dein Namen ein",
741
            "Filter rooms by name here...": "Suche nach Räume hier...",
742
            "Type your guess here...": "Rate das gesuchte Wort hier...",
743
            "Everyone guessed the word!": "Jeder hat das Wort erraten!",
744
            "The drawer left the game!": "Der Zeichner hat das Spiel verlassen!",
745
            "Time is up!": "Die Zeit ist abgelaufen!",
746
            Kick: "Kicken",
747
            Ban: "Bannen",
748
            Votekick: "Votekicken",
749
            Report: "Melden",
750
            "Randomize your Avatar!": "Zufälliger Avatar!",
751
            Brush: "Stift",
752
            Colorpick: "Pipette",
753
            Fill: "Füllen",
754
            Undo: "Rückgängig",
755
            Clear: "Löschen",
756
            "Mute audio": "Stummschalten",
757
            "Unmute audio": "Stumm. aufheben",
758
            "Turn the lights off": "Lichter ausmachen",
759
            "Turn the lights on": "Lichter anmachen",
760
            "Hotkeys & Misc.": "Tastenkürzel & Sonstiges",
761
            Hotkeys: "Tastenkürzel",
762
            Miscellaneous: "Sonstiges",
763
            "Display Language": "Anzeigesprache",
764
            "Filter bad words in chat": "Schlechte Wörter im Chat filtern",
765
            "Brush Pressure Sensitivity": "Stiftdruckempfindlichkeit",
766
            Reset: "Zurücksetzen",
767
            "Reset hotkeys to default": "Tastenkürzel zurücksetzen",
768
            On: "An",
769
            Off: "Aus"
770
        };
771
    const Xe = 0,
772
        je = 1;
773
    const Ze = 0,
774
        Je = 2,
775
        Qe = 1;
776
    const et = 4,
777
        tt = 40;
778
    var nt = [4, 10, 20, 32, 40],
779
        at = u.querySelector("#game-toolbar"),
780
        ot = at.querySelector(".toolbar-group-tools"),
781
        rt = at.querySelector(".toolbar-group-actions"),
782
        it = u.querySelector("#game-toolbar .sizes .size-preview"),
783
        lt = u.querySelector("#game-toolbar .sizes .container"),
784
        st = u.querySelector("#game-toolbar .colors");
785
​
786
    function ct(e, t) {
787
        var n, a, o, r = $("tool clickable"),
788
            i = (r.appendChild($("icon")),
789
                r.appendChild($("key")),
790
                t),
791
            l = (i.id = e,
792
                (i.element = r).toolIndex = e,
793
                r.querySelector(".icon").style.backgroundImage = "url(/img/" + t.graphic + ")",
794
                n = r,
795
                o = t.name,
796
                a = "S",
797
                n.dataset.tooltip = o,
798
                n.dataset.tooltipdir = a,
799
                D(n, "pointerenter", function(e) {
800
                    Oe(e.target)
801
                }),
802
                D(n, "pointerleave", function(e) {
803
                    We()
804
                }),
805
                o = t.isAction ? (r.addEventListener("click", function(e) {
806
                        Ot(this.toolIndex)
807
                    }),
808
                    rt.appendChild(r),
809
                    ut[e] = i,
810
                    le(t.name, t.keydef, "", function() {
811
                        Ot(e)
812
                    }, function(e) {
813
                        l.textContent = e.key
814
                    })) : (r.addEventListener("click", function(e) {
815
                        Wt(this.toolIndex)
816
                    }),
817
                    ot.appendChild(r),
818
                    dt[e] = i,
819
                    le(t.name, t.keydef, "", function() {
820
                        Wt(i.id)
821
                    }, function(e) {
822
                        l.textContent = e.key
823
                    })),
824
                r.querySelector(".key"));
825
        l.textContent = o.key,
826
            t.hide && (r.style.display = "none")
827
    }
828
    var dt = [],
829
        ut = (ct(Ze, {
830
                isAction: !1,
831
                name: "Brush",
832
                keydef: "B",
833
                graphic: "pen.gif",
834
                cursor: 0
835
            }),
836
            ct(Qe, {
837
                isAction: !1,
838
                name: "Fill",
839
                keydef: "F",
840
                graphic: "fill.gif",
841
                cursor: "url(/img/fill_cur.png) 7 38, default"
842
            }),
843
            []),
844
        q = (ct(0, {
845
                isAction: !0,
846
                name: "Undo",
847
                keydef: "U",
848
                graphic: "undo.gif",
849
                action: function() {
850
                    {
851
                        var e;
852
                        M == C && 0 < ft.length && (ft.pop(),
853
                            0 < ft.length ? (Bt(e = ft[ft.length - 1]),
854
                                s && s.emit("data", {
855
                                    id: $a,
856
                                    data: e
857
                                })) : jt())
858
                    }
859
                }
860
            }),
861
            ct(1, {
862
                isAction: !0,
863
                name: "Clear",
864
                keydef: "C",
865
                graphic: "clear.gif",
866
                action: jt
867
            }),
868
            u.querySelector("#game-canvas canvas")),
869
        ht = q.getContext("2d", {
870
            willReadFrequently: !0
871
        }),
872
        S = [],
873
        pt = 0,
874
        mt = 0,
875
        gt = [],
876
        r = [0, 9999, 9999, 0, 0],
877
        ft = [],
878
        k = [0, 0],
879
        yt = [0, 0],
880
        vt = 0,
881
        bt = u.createElement("canvas"),
882
        o = (bt.width = tt + 2,
883
            bt.height = tt + 2,
884
            bt.getContext("2d"));
885
​
886
    function St() {
887
        var e = dt[wt].cursor;
888
        if (L.id == j && M == C) {
889
            if (wt == Ze) {
890
                var t = bt.width,
891
                    n = Mt;
892
                if (n <= 0)
893
                    return;
894
                o.clearRect(0, 0, t, t);
895
                var a = xt[Ct],
896
                    a = [(a = 1 == p.dark ? [Math.floor(.75 * a[0]), Math.floor(.75 * a[1]), Math.floor(.75 * a[2])] : a)[0], a[1], a[2], .8];
897
                o.fillStyle = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ")",
898
                    o.beginPath(),
899
                    o.arc(t / 2, t / 2, n / 2 - 1, 0, 2 * Math.PI),
900
                    o.fill(),
901
                    o.strokeStyle = "#FFF",
902
                    o.beginPath(),
903
                    o.arc(t / 2, t / 2, n / 2 - 1, 0, 2 * Math.PI),
904
                    o.stroke(),
905
                    o.strokeStyle = "#000",
906
                    o.beginPath(),
907
                    o.arc(t / 2, t / 2, n / 2, 0, 2 * Math.PI),
908
                    o.stroke();
909
                a = t / 2,
910
                    e = "url(" + bt.toDataURL() + ")" + a + " " + a + ", default"
911
            }
912
        } else
913
            e = "default";
914
        q.style.cursor = e
915
    }
916
    var kt = 0,
917
        wt = 0,
918
        Ct = 0,
919
        qt = 0,
920
        xt = [
921
            [255, 255, 255],
922
            [0, 0, 0],
923
            [193, 193, 193],
924
            [80, 80, 80],
925
            [239, 19, 11],
926
            [116, 11, 7],
927
            [255, 113, 0],
928
            [194, 56, 0],
929
            [255, 228, 0],
930
            [232, 162, 0],
931
            [0, 204, 0],
932
            [0, 70, 25],
933
            [0, 255, 145],
934
            [0, 120, 93],
935
            [0, 178, 255],
936
            [0, 86, 158],
937
            [35, 31, 211],
938
            [14, 8, 101],
939
            [163, 0, 186],
940
            [85, 0, 105],
941
            [223, 105, 167],
942
            [135, 53, 84],
943
            [255, 172, 142],
944
            [204, 119, 77],
945
            [160, 82, 45],
946
            [99, 48, 13]
947
        ],
948
        Mt = 0,
949
        Lt = -1,
950
        Et = [];
951
​
952
    function Dt(e) {
953
        return 20 + (e - et) / (tt - et) * 80
954
    }
955
    for (e = 0; e < nt.length; e++) {
956
        var $t = $("size clickable"),
957
            At = $("icon"),
958
            Rt = (At.style.backgroundSize = Dt(nt[e]) + "%", {
959
                id: e,
960
                size: nt[e],
961
                element: $t,
962
                elementIcon: At
963
            });
964
        $t.appendChild(At),
965
            lt.appendChild($t),
966
            $t.size = Rt,
967
            Et.push(Rt)
968
    }
969
    for (var It = [$("top"), $("bottom")], e = 0; e < xt.length / 2; e++)
970
        It[0].appendChild(Ut(2 * e)),
971
        It[1].appendChild(Ut(2 * e + 1)),
972
        u.querySelector("#game-toolbar .colors-mobile .top").appendChild(Ut(2 * e)),
973
        u.querySelector("#game-toolbar .colors-mobile .bottom").appendChild(Ut(2 * e + 1));
974
    for (e = 0; e < It.length; e++)
975
        st.appendChild(It[e]);
976
​
977
    function Tt(e) {
978
        Mt = x(e, et, tt);
979
        for (var t = Et[Et.length - 1], n = t.size, a = 0; a < Et.length; a++) {
980
            var o = Et[a],
981
                r = Math.abs(Mt - o.size);
982
            r <= n && (n = r,
983
                    t = o,
984
                    0),
985
                o.element.classList.remove("selected")
986
        }
987
        t.element.classList.add("selected"),
988
            at.querySelector(".size-preview .icon").style.backgroundSize = Dt(Mt) + "%",
989
            St()
990
    }
991
​
992
    function Nt(e) {
993
        e.classList.remove("clicked"),
994
            e.offsetWidth,
995
            e.classList.add("clicked")
996
    }
997
​
998
    function Ot(e) {
999
        Nt(ut[e].element),
1000
            ut[e].action()
1001
    }
1002
​
1003
    function Wt(e, t) {
1004
        Nt(dt[e].element),
1005
            e == wt && !t || (dt[kt = wt].element.classList.remove("selected"),
1006
                dt[e].element.classList.add("selected"),
1007
                wt = e,
1008
                St())
1009
    }
1010
​
1011
    function Pt(e) {
1012
        var t = Ft(xt[e]);
1013
        Ct = e,
1014
            u.querySelector("#color-preview-primary").style.fill = t,
1015
            u.querySelector("#game-toolbar .color-picker-mobile .preview").style.backgroundColor = t,
1016
            St()
1017
    }
1018
​
1019
    function Yt(e) {
1020
        var t = Ft(xt[e]);
1021
        qt = e,
1022
            u.querySelector("#color-preview-secondary").style.fill = t,
1023
            St()
1024
    }
1025
​
1026
    function zt() {
1027
        var e = Ct;
1028
        Pt(qt),
1029
            Yt(e)
1030
    }
1031
​
1032
    function Ht() {
1033
        lt.classList.remove("open")
1034
    }
1035
​
1036
    function Ut(e) {
1037
        var t = $("color");
1038
        return t.style.backgroundColor = Ft(xt[e]),
1039
            t.colorIndex = e,
1040
            t
1041
    }
1042
​
1043
    function Ft(e) {
1044
        return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
1045
    }
1046
​
1047
    function Kt(e) {
1048
        e = x(e, 0, xt.length),
1049
            e = xt[e];
1050
        return {
1051
            r: e[0],
1052
            g: e[1],
1053
            b: e[2]
1054
        }
1055
    }
1056
​
1057
    function Bt(e) {
1058
        if (S = S.slice(0, e),
1059
            !(C != M && mt < e)) {
1060
            r = _t();
1061
            e = Math.floor(S.length / Gt);
1062
            gt = gt.slice(0, e),
1063
                tn();
1064
            for (var t = 0; t < gt.length; t++) {
1065
                var n = gt[t];
1066
                ht.putImageData(n.data, n.bounds[1], n.bounds[2])
1067
            }
1068
            for (t = gt.length * Gt; t < S.length; t++)
1069
                Vt(Jt(S[t]), S[t]);
1070
            pt = Math.min(S.length, pt),
1071
                mt = Math.min(S.length, mt)
1072
        }
1073
    }
1074
    const Gt = 50;
1075
​
1076
    function _t() {
1077
        return [0, 9999, 9999, 0, 0]
1078
    }
1079
​
1080
    function Vt(e) {
1081
        var t, n, a, o;
1082
        r[0] += 1,
1083
            r[1] = Math.min(r[1], e[0]),
1084
            r[2] = Math.min(r[2], e[1]),
1085
            r[3] = Math.max(r[3], e[2]),
1086
            r[4] = Math.max(r[4], e[3]),
1087
            r[0] >= Gt && (t = r[1],
1088
                n = r[2],
1089
                a = r[3],
1090
                o = r[4],
1091
                (a - t <= 0 || o - n <= 0) && (t = e[0],
1092
                    n = e[1],
1093
                    a = e[2],
1094
                    o = e[3]),
1095
                e = ht.getImageData(t, n, a - t, o - n),
1096
                gt.push({
1097
                    data: e,
1098
                    bounds: r
1099
                }),
1100
                r = _t())
1101
    }
1102
​
1103
    function Xt(e) {
1104
        return (e || 0 < S.length || 0 < ft.length || 0 < pt || 0 < mt) && (S = [],
1105
            ft = [],
1106
            pt = mt = 0,
1107
            r = _t(),
1108
            gt = [],
1109
            tn(),
1110
            1)
1111
    }
1112
​
1113
    function jt() {
1114
        M == C && Xt() && s && s.emit("data", {
1115
            id: Da
1116
        })
1117
    }
1118
​
1119
    function Zt(e) {
1120
        var t, n, a, o, r, i;
1121
        ((t = e)[0] != Xe ? t[0] == je && 0 <= t[2] && t[2] < q.width && 0 <= t[3] && t[3] < q.height : (a = t[3],
1122
            o = t[4],
1123
            r = t[5],
1124
            i = t[6],
1125
            t = Math.ceil(t[2] / 2),
1126
            n = (a + r) / 2,
1127
            o = (o + i) / 2,
1128
            r = Math.abs(r - a) / 2,
1129
            a = Math.abs(i - i) / 2,
1130
            (i = {
1131
                x1: -(t + r),
1132
                y1: -(t + r),
1133
                x2: q.width + t + r,
1134
                y2: q.height + t + a
1135
            }).x1 < n && n < i.x2 && i.y1 < o && o < i.y2)) ? (S.push(e),
1136
            C == M && Vt(Jt(e))) : console.log("IGNORED COMMAND OUT OF CANVAS BOUNDS")
1137
    }
1138
​
1139
    function Jt(e) {
1140
        var t = [0, 0, q.width, q.height];
1141
        switch (e[0]) {
1142
            case Xe:
1143
                var n = x(Math.floor(e[2]), et, tt),
1144
                    a = Math.ceil(n / 2),
1145
                    o = x(Math.floor(e[3]), -a, q.width + a),
1146
                    r = x(Math.floor(e[4]), -a, q.height + a),
1147
                    i = x(Math.floor(e[5]), -a, q.width + a),
1148
                    l = x(Math.floor(e[6]), -a, q.height + a),
1149
                    s = Kt(e[1]);
1150
                t[0] = x(o - a, 0, q.width),
1151
                    t[1] = x(r - a, 0, q.height),
1152
                    t[2] = x(i + a, 0, q.width),
1153
                    t[3] = x(l + a, 0, q.height),
1154
                    en(o, r, i, l, n, s.r, s.g, s.b);
1155
                break;
1156
            case je:
1157
                var s = Kt(e[1]),
1158
                    a = x(Math.floor(e[2]), 0, q.width),
1159
                    o = x(Math.floor(e[3]), 0, q.height),
1160
                    r = a,
1161
                    i = o,
1162
                    c = s.r,
1163
                    d = s.g,
1164
                    u = s.b,
1165
                    h = ht.getImageData(0, 0, q.width, q.height),
1166
                    p = [
1167
                        [r, i]
1168
                    ],
1169
                    m = function(e, t, n) {
1170
                        n = 4 * (n * e.width + t);
1171
                        return 0 <= n && n < e.data.length ? [e.data[n], e.data[1 + n], e.data[2 + n]] : [0, 0, 0]
1172
                    }(h, r, i);
1173
                if (c != m[0] || d != m[1] || u != m[2]) {
1174
                    function g(e) {
1175
                        var t = h.data[e],
1176
                            n = h.data[e + 1],
1177
                            e = h.data[e + 2];
1178
                        return (t != c || n != d || e != u) && (t = Math.abs(t - m[0]),
1179
                            n = Math.abs(n - m[1]),
1180
                            e = Math.abs(e - m[2]),
1181
                            t < 3) && n < 3 && e < 3
1182
                    }
1183
                    for (var f, y, v, b, S, k, w = h.height, C = h.width; p.length;) {
1184
                        for (f = p.pop(),
1185
                            y = f[0],
1186
                            v = f[1],
1187
                            b = 4 * (v * C + y); 0 <= v-- && g(b);)
1188
                            b -= 4 * C;
1189
                        for (b += 4 * C,
1190
                            ++v,
1191
                            k = S = !1; v++ < w - 1 && g(b);)
1192
                            Qt(h, b, c, d, u),
1193
                            0 < y && (g(b - 4) ? S || (p.push([y - 1, v]),
1194
                                S = !0) : S = S && !1),
1195
                            y < C - 1 && (g(b + 4) ? k || (p.push([y + 1, v]),
1196
                                k = !0) : k = k && !1),
1197
                            b += 4 * C
1198
                    }
1199
                    ht.putImageData(h, 0, 0)
1200
                }
1201
        }
1202
        return t
1203
    }
1204
​
1205
    function x(e, t, n) {
1206
        return e < t ? t : n < e ? n : e
1207
    }
1208
​
1209
    function Qt(e, t, n, a, o) {
1210
        0 <= t && t < e.data.length && (e.data[t] = n,
1211
            e.data[t + 1] = a,
1212
            e.data[t + 2] = o,
1213
            e.data[t + 3] = 255)
1214
    }
1215
​
1216
    function en(e, t, n, a, o, r, i, l) {
1217
        function s(e, t) {
1218
            for (var n = -c; n <= c; n++)
1219
                for (var a, o = -c; o <= c; o++)
1220
                    n * n + o * o < d && 0 <= (a = 4 * ((t + o) * m.width + e + n)) && a < m.data.length && (m.data[a] = r,
1221
                        m.data[1 + a] = i,
1222
                        m.data[2 + a] = l,
1223
                        m.data[3 + a] = 255)
1224
        }
1225
        var c = Math.floor(o / 2),
1226
            d = c * c,
1227
            o = Math.min(e, n) - c,
1228
            u = Math.min(t, a) - c,
1229
            h = Math.max(e, n) + c,
1230
            p = Math.max(t, a) + c,
1231
            m = (e -= o,
1232
                t -= u,
1233
                n -= o,
1234
                a -= u,
1235
                ht.getImageData(o, u, h - o, p - u));
1236
        if (e == n && t == a)
1237
            s(e, t);
1238
        else {
1239
            s(e, t),
1240
                s(n, a);
1241
            var g = Math.abs(n - e),
1242
                f = Math.abs(a - t),
1243
                y = e < n ? 1 : -1,
1244
                v = t < a ? 1 : -1,
1245
                b = g - f;
1246
            for (Math.floor(Math.max(0, c - 10) / 5); e != n || t != a;) {
1247
                var S = b << 1; -
1248
                f < S && (b -= f,
1249
                        e += y),
1250
                    S < g && (b += g,
1251
                        t += v),
1252
                    s(e, t)
1253
            }
1254
        }
1255
        ht.putImageData(m, o, u)
1256
    }
1257
​
1258
    function tn() {
1259
        ht.fillStyle = "#FFF",
1260
            ht.fillRect(0, 0, q.width, q.height)
1261
    }
1262
​
1263
    function nn(e, t, n) {
1264
        ((t = n ? !t : t) ? Pt : Yt)(e)
1265
    }
1266
    D(at, "contextmenu", function(e) {
1267
            return e.preventDefault(),
1268
                !1
1269
        }),
1270
        D("#game-toolbar .sizes .size", "click", function(e) {
1271
            var t;
1272
            t = this.size.id,
1273
                Nt((t = Et[t]).element),
1274
                Tt(t.size),
1275
                Ht()
1276
        }),
1277
        D([q], "DOMMouseScroll wheel", function(e) {
1278
            e.preventDefault();
1279
            e = -e.deltaY || e.wheelDeltaY,
1280
                e = Math.sign(e);
1281
            Tt(Mt + 2 * e)
1282
        }),
1283
        le("Swap", "S", "Swap the primary and secondary color.", zt),
1284
        D(at.querySelector(".color-picker .preview"), "click", function(e) {
1285
            zt()
1286
        }),
1287
        D(at.querySelector(".color-picker-mobile .preview"), "click", function(e) {
1288
            at.querySelector(".colors-mobile").classList.toggle("open")
1289
        }),
1290
        D(it, "click", function(e) {
1291
            lt.classList.toggle("open")
1292
        }),
1293
        D(u, "keyup", function(e) {
1294
            if ("Enter" == e.code)
1295
                return xe.focus(),
1296
                    0;
1297
            if ("input" == u.activeElement.tagName.toLowerCase() || "textarea" == u.activeElement.tagName.toLowerCase() || -1 != Lt)
1298
                return 0;
1299
            for (var t = e.key.toLowerCase().replace("key", ""), n = 0; n < d.length; n++)
1300
                if (d[n].key.toLowerCase() == t) {
1301
                    for (var a = 0; a < d[n].cb.length; a++)
1302
                        d[n].cb[a](d[n]);
1303
                    return void e.preventDefault()
1304
                }
1305
        }),
1306
        D(q, "contextmenu", function(e) {
1307
            return e.preventDefault(),
1308
                !1
1309
        });
1310
    var an = null;
1311
​
1312
    function on(e, t, n, a) {
1313
        var o = q.getBoundingClientRect(),
1314
            e = Math.floor((e - o.left) / o.width * q.width),
1315
            t = Math.floor((t - o.top) / o.height * q.height);
1316
        a ? (vt = n,
1317
            yt[0] = k[0] = e,
1318
            yt[1] = k[1] = t) : (yt[0] = k[0],
1319
            yt[1] = k[1],
1320
            vt = n,
1321
            k[0] = e,
1322
            k[1] = t)
1323
    }
1324
    "PointerEvent" in h ? (D("#game-toolbar .colors * .color", "pointerdown", function(e) {
1325
            nn(this.colorIndex, 0 == e.button, e.altKey)
1326
        }),
1327
        D("#game-toolbar .colors-mobile * .color", "pointerdown", function(e) {
1328
            nn(this.colorIndex, 0 == e.button, e.altKey),
1329
                at.querySelector(".colors-mobile").classList.remove("open")
1330
        }),
1331
        D(q, "pointerdown", function(e) {
1332
            if ((0 == e.button || 2 == e.button || 5 == e.button) && -1 == Lt)
1333
                switch (e.pointerType) {
1334
                    case "mouse":
1335
                        sn(e.button, e.clientX, e.clientY, !0, -1);
1336
                        break;
1337
                    case "pen":
1338
                        sn(e.button, e.clientX, e.clientY, !0, e.pressure);
1339
                        break;
1340
                    case "touch":
1341
                        null == an && (an = e.pointerId,
1342
                            sn(e.button, e.clientX, e.clientY, !0, -1))
1343
                }
1344
        }),
1345
        D(u, "pointermove", function(e) {
1346
            switch (e.pointerType) {
1347
                case "mouse":
1348
                    ln(e.clientX, e.clientY, !1, -1);
1349
                    break;
1350
                case "pen":
1351
                    ln(e.clientX, e.clientY, !1, e.pressure);
1352
                    break;
1353
                case "touch":
1354
                    an == e.pointerId && ln(e.clientX, e.clientY, !1, -1)
1355
            }
1356
        }),
1357
        D(u, "pointerup", function(e) {
1358
            "touch" == e.pointerType ? an == e.pointerId && (an = null,
1359
                cn(e.button)) : cn(e.button)
1360
        })) : (D("#game-toolbar .colors * .color", "click", function(e) {
1361
            nn(this.colorIndex, 0 == e.button, e.altKey)
1362
        }),
1363
        D("#game-toolbar .colors-mobile * .color", "click", function(e) {
1364
            nn(this.colorIndex, 0 == e.button, e.altKey),
1365
                at.querySelector(".colors-mobile").classList.remove("open")
1366
        }),
1367
        D(q, "mousedown", function(e) {
1368
            e.preventDefault(),
1369
                0 != e.button && 2 != e.button || -1 != Lt || sn(e.button, e.clientX, e.clientY, !0, -1)
1370
        }),
1371
        D(u, "mouseup", function(e) {
1372
            e.preventDefault(),
1373
                cn(e.button)
1374
        }),
1375
        D(u, "mousemove", function(e) {
1376
            ln(e.clientX, e.clientY, !1, -1)
1377
        }),
1378
        D(q, "touchstart", function(e) {
1379
            e.preventDefault();
1380
            e = e.changedTouches;
1381
            0 < e.length && null == an && (an = e[0].identitfier,
1382
                sn(0, e[0].clientX, e[0].clientY, !0, e[0].force))
1383
        }),
1384
        D(q, "touchend touchcancel", function(e) {
1385
            e.preventDefault();
1386
            for (var t = e.changedTouches, n = 0; n < t.length; n++)
1387
                if (t[n].identitfier == an) {
1388
                    cn(Lt);
1389
                    break
1390
                }
1391
        }),
1392
        D(q, "touchmove", function(e) {
1393
            e.preventDefault();
1394
            for (var t = e.changedTouches, n = 0; n < t.length; n++)
1395
                if (t[n].identitfier == an) {
1396
                    ln(t[n].clientX, t[n].clientY, !1, t[n].force);
1397
                    break
1398
                }
1399
        }));
1400
    var rn = 0;
1401
​
1402
    function ln(e, t, n, a) {
1403
        on(e, t, a = p.pressureSensitivity ? a : -1, n),
1404
            dn(!1)
1405
    }
1406
​
1407
    function sn(e, t, n, a, o) {
1408
        p.pressureSensitivity || (o = -1),
1409
            S.length,
1410
            Lt = e,
1411
            on(t, n, o, a),
1412
            dn(!0)
1413
    }
1414
​
1415
    function cn(e) {
1416
        -1 == e || 0 != e && 2 != e && 5 != e || Lt != e || (rn != S.length && (rn = S.length,
1417
                ft.push(rn)),
1418
            an = null,
1419
            Lt = -1)
1420
    }
1421
​
1422
    function dn(e) {
1423
        if (L.id == j && M == C && -1 != Lt) {
1424
            var t = 0 == Lt ? Ct : qt,
1425
                n = null;
1426
            if (e) {
1427
                var e = function(e, t) {
1428
                    for (var n = (e = ht.getImageData(e, t, 1, 1)).data[0], a = e.data[1], o = e.data[2], r = 0; r < xt.length; r++) {
1429
                        var i = xt[r],
1430
                            l = i[0] - n,
1431
                            s = i[1] - a,
1432
                            i = i[2] - o;
1433
                        if (0 == l && 0 == s && 0 == i)
1434
                            return r
1435
                    }
1436
                    return r
1437
                }(k[0], k[1]);
1438
                if (wt == Qe) {
1439
                    if (e == t)
1440
                        return;
1441
                    l = t,
1442
                        s = k[0],
1443
                        c = k[1],
1444
                        n = [je, l, s, c]
1445
                }
1446
                if (wt == Je)
1447
                    return (0 == Lt ? Pt : Yt)(e),
1448
                        void Wt(kt)
1449
            }
1450
            wt == Ze && (l = Mt,
1451
                    0 <= vt && (l = (l - et) * x(vt, 0, 1) + et),
1452
                    s = Math.ceil(.5 * l),
1453
                    c = x(Math.floor(yt[0]), -s, q.width + s),
1454
                    e = x(Math.floor(yt[1]), -s, q.height + s),
1455
                    r = x(Math.floor(k[0]), -s, q.width + s),
1456
                    i = x(Math.floor(k[1]), -s, q.height + s),
1457
                    t = t,
1458
                    a = l,
1459
                    o = c,
1460
                    e = e,
1461
                    r = r,
1462
                    i = i,
1463
                    n = [Xe, t, a, o, e, r, i]),
1464
                null != n && Zt(n)
1465
        }
1466
        var a, o, r, i, l, s, c
1467
    }
1468
    setInterval(function() {
1469
            var e, t;
1470
            s && L.id == j && M == C && 0 < S.length - pt && (e = pt + 8,
1471
                t = S.slice(pt, e),
1472
                s.emit("data", {
1473
                    id: Ea,
1474
                    data: t
1475
                }),
1476
                pt = Math.min(e, S.length))
1477
        }, 50),
1478
        setInterval(function() {
1479
            s && L.id == j && M != C && mt < S.length && (Vt(Jt(S[mt]), S[mt]),
1480
                mt++)
1481
        }, 3);
1482
    var un = u.querySelector("#game-canvas .overlay"),
1483
        hn = u.querySelector("#game-canvas .overlay-content"),
1484
        I = u.querySelector("#game-canvas .overlay-content .text"),
1485
        pn = u.querySelector("#game-canvas .overlay-content .words"),
1486
        mn = u.querySelector("#game-canvas .overlay-content .reveal"),
1487
        T = u.querySelector("#game-canvas .overlay-content .result"),
1488
        gn = u.querySelector("#game-canvas .overlay-content .room"),
1489
        fn = -100,
1490
        yn = 0,
1491
        vn = void 0;
1492
​
1493
    function bn(e, a, o) {
1494
        var r, i, l = fn,
1495
            s = yn,
1496
            c = e.top - l,
1497
            d = e.opacity - s;
1498
        Math.abs(c) < .001 && Math.abs(d) < .001 ? o && o() : (r = void 0,
1499
            i = 0,
1500
            vn = h.requestAnimationFrame(function e(t) {
1501
                var n = t - (r = null == r ? t : r),
1502
                    t = (r = t,
1503
                        (i = Math.min(i + n, a)) / a),
1504
                    n = (n = t) < .5 ? .5 * function(e, t) {
1505
                        return e * e * ((t + 1) * e - t)
1506
                    }(2 * n, 1.2 * 1.5) : .5 * (function(e, t) {
1507
                        return e * e * ((t + 1) * e + t)
1508
                    }(2 * n - 2, 1.2 * 1.5) + 2);
1509
                fn = l + c * n,
1510
                    yn = s + t * t * (3 - 2 * t) * d,
1511
                    hn.style.top = fn + "%",
1512
                    un.style.opacity = yn,
1513
                    i == a ? o && o() : vn = h.requestAnimationFrame(e)
1514
            }))
1515
    }
1516
​
1517
    function Sn(e) {
1518
        e.classList.add("show")
1519
    }
1520
​
1521
    function kn(e) {
1522
        for (var t = 0; t < hn.children.length; t++)
1523
            hn.children[t].classList.remove("show");
1524
        switch (e.id) {
1525
            case Q:
1526
                Sn(gn);
1527
                break;
1528
            case V:
1529
                Sn(I),
1530
                    I.textContent = R("Round $", e.data + 1);
1531
                break;
1532
            case G:
1533
                Sn(I),
1534
                    I.textContent = R("Waiting for players...");
1535
                break;
1536
            case _:
1537
                Sn(I),
1538
                    I.textContent = R("Game starting in a few seconds...");
1539
                break;
1540
            case Z:
1541
                Sn(mn),
1542
                    mn.querySelector("p span.word").textContent = e.data.word,
1543
                    mn.querySelector(".reason").textContent = function(e) {
1544
                        switch (e) {
1545
                            case F:
1546
                                return R("Everyone guessed the word!");
1547
                            case B:
1548
                                return R("The drawer left the game!");
1549
                            case K:
1550
                                return R("Time is up!");
1551
                            default:
1552
                                return "Error!"
1553
                        }
1554
                    }(e.data.reason);
1555
                for (var n = mn.querySelector(".player-container"), a = (A(n),
1556
                        []), o = 0; o < e.data.scores.length; o += 3) {
1557
                    var r = e.data.scores[o + 0],
1558
                        i = (e.data.scores[o + 1],
1559
                            e.data.scores[o + 2]);
1560
                    (s = W(r)) && a.push({
1561
                        name: s.name,
1562
                        score: i
1563
                    })
1564
                }
1565
                a.sort(function(e, t) {
1566
                    return t.score - e.score
1567
                });
1568
                for (o = 0; o < Math.min(a.length, 12); o++) {
1569
                    var l = $("player"),
1570
                        s = a[o],
1571
                        c = (l.appendChild($("name", s.name)),
1572
                            $("score", (0 < s.score ? "+" : "") + s.score));
1573
                    s.score <= 0 && c.classList.add("zero"),
1574
                        l.appendChild(c),
1575
                        n.appendChild(l)
1576
                }
1577
                break;
1578
            case J:
1579
                Sn(T);
1580
                for (var d = [T.querySelector(".podest-1"), T.querySelector(".podest-2"), T.querySelector(".podest-3"), T.querySelector(".ranks")], o = 0; o < 4; o++)
1581
                    A(d[o]);
1582
                if (0 < e.data.length) {
1583
                    for (var u = [
1584
                            [],
1585
                            [],
1586
                            [],
1587
                            []
1588
                        ], o = 0; o < e.data.length; o++)
1589
                        (s = {
1590
                            player: W(r = e.data[o][0]),
1591
                            rank: e.data[o][1],
1592
                            title: e.data[o][2]
1593
                        }).player && u[Math.min(s.rank, 3)].push(s);
1594
                    for (var h = 0; h < 3; h++) {
1595
                        var p = u[h];
1596
                        if (0 < p.length) {
1597
                            var m = p.map(function(e) {
1598
                                    return e.player.name
1599
                                }).join(", "),
1600
                                g = p[0].player.score,
1601
                                f = 96,
1602
                                y = d[h],
1603
                                l = $("avatar-container"),
1604
                                v = (y.appendChild(l),
1605
                                    $("border"));
1606
                            v.appendChild($("rank-place", "#" + (h + 1))),
1607
                                v.appendChild($("rank-name", m)),
1608
                                v.appendChild($("rank-score", R("$ points", g))),
1609
                                y.appendChild(v),
1610
                                0 == h && l.appendChild($("trophy"));
1611
                            for (o = 0; o < p.length; o++)
1612
                                (S = de((s = p[o]).player.avatar, 0, 0 == h)).style.left = 15 * -(p.length - 1) + 30 * o + "%",
1613
                                0 == h && (S.classList.add("winner"),
1614
                                    S.style.animationDelay = -2.35 * o + "s"),
1615
                                l.appendChild(S)
1616
                        }
1617
                    }
1618
                    for (var b = Math.min(5, u[3].length), o = 0; o < b; o++) {
1619
                        var s = u[3][o],
1620
                            f = 48,
1621
                            y = $("rank"),
1622
                            S = de(s.player.avatar, 0, !1);
1623
                        y.appendChild(S),
1624
                            y.appendChild($("rank-place", "#" + (s.rank + 1))),
1625
                            y.appendChild($("rank-name", s.player.name)),
1626
                            y.appendChild($("rank-score", R("$ points", s.player.score))),
1627
                            d[3].appendChild(y)
1628
                    }
1629
                    0 < u[0].length ? (E = u[0].map(function(e) {
1630
                            return e.player.name
1631
                        }).join(", "),
1632
                        T.querySelector(".winner-name").textContent = (0 < u[0].length ? E : "<user left>") + " ",
1633
                        T.querySelector(".winner-text").textContent = 1 == u[0].length ? R("is the winner!") : R("are the winners!")) : (T.querySelector(".winner-name").textContent = "",
1634
                        T.querySelector(".winner-text").textContent = R("Nobody won!"))
1635
                } else
1636
                    T.querySelector(".winner-name").textContent = "",
1637
                    T.querySelector(".winner-text").textContent = R("Nobody won!");
1638
                break;
1639
            case X:
1640
                if (e.data.words)
1641
                    if (Sn(I),
1642
                        Sn(pn),
1643
                        A(pn),
1644
                        In[ne.WORDMODE] == ae.COMBINATION) {
1645
                        I.textContent = R("Choose the first word");
1646
                        for (var k = e.data.words.length / 2, w = [], C = [], q = 0, o = 0; o < k; o++) {
1647
                            var x = $("word", e.data.words[o]),
1648
                                M = (x.index = o,
1649
                                    $("word", e.data.words[o + k]));
1650
                            M.index = o,
1651
                                M.style.display = "none",
1652
                                M.style.animationDelay = .03 * o + "s",
1653
                                w.push(x),
1654
                                C.push(M),
1655
                                D(x, "click", function() {
1656
                                    q = this.index;
1657
                                    for (var e = 0; e < k; e++)
1658
                                        w[e].style.display = "none",
1659
                                        C[e].style.display = "";
1660
                                    I.textContent = R("Choose the second word")
1661
                                }),
1662
                                D(M, "click", function() {
1663
                                    da([q, this.index])
1664
                                }),
1665
                                pn.appendChild(x),
1666
                                pn.appendChild(M)
1667
                        }
1668
                    } else {
1669
                        I.textContent = R("Choose a word");
1670
                        for (o = 0; o < e.data.words.length; o++) {
1671
                            var L = $("word", e.data.words[o]);
1672
                            L.index = o,
1673
                                D(L, "click", function() {
1674
                                    da(this.index)
1675
                                }),
1676
                                pn.appendChild(L)
1677
                        }
1678
                    }
1679
                else {
1680
                    Sn(I);
1681
                    var E = (s = W(e.data.id)) ? s.name : R("User"),
1682
                        E = (I.textContent = "",
1683
                            I.appendChild(ce("span", void 0, R("$ is choosing a word!", E))),
1684
                            de(s ? s.avatar : [0, 0, 0, 0], 0, !1));
1685
                    E.style.width = "2em",
1686
                        E.style.height = "2em",
1687
                        I.appendChild(E)
1688
                }
1689
        }
1690
    }
1691
    const wn = 0,
1692
        Cn = 1,
1693
        qn = 2,
1694
        xn = 3,
1695
        Mn = 4,
1696
        Ln = 5,
1697
        En = 6;
1698
​
1699
    function Dn(e, t) {
1700
        this.url = t,
1701
            this.buffer = null,
1702
            this.loaded = !1;
1703
        var n = this,
1704
            a = new XMLHttpRequest;
1705
        a.open("GET", t, !0),
1706
            a.responseType = "arraybuffer",
1707
            a.onload = function() {
1708
                e.context.decodeAudioData(a.response, function(e) {
1709
                    n.buffer = e,
1710
                        n.loaded = !0
1711
                }, function(e) {
1712
                    console.log("Failed loading audio from url '" + t + "'")
1713
                })
1714
            },
1715
            a.send()
1716
    }
1717
​
1718
    function $n() {
1719
        this.context = null,
1720
            this.gain = null,
1721
            this.sounds = new Map,
1722
            h.addEventListener("load", this.load.bind(this), !1)
1723
    }
1724
    $n.prototype.addSound = function(e, t) {
1725
            this.sounds.set(e, new Dn(this, t))
1726
        },
1727
        $n.prototype.loadSounds = function() {
1728
            this.addSound(wn, "/audio/roundStart.ogg"),
1729
                this.addSound(Cn, "/audio/roundEndSuccess.ogg"),
1730
                this.addSound(qn, "/audio/roundEndFailure.ogg"),
1731
                this.addSound(xn, "/audio/join.ogg"),
1732
                this.addSound(Mn, "/audio/leave.ogg"),
1733
                this.addSound(Ln, "/audio/playerGuessed.ogg"),
1734
                this.addSound(En, "/audio/tick.ogg")
1735
        },
1736
        $n.prototype.playSound = function(e) {
1737
            var t, n;
1738
            null == this.context ? this.load() : "running" != this.context.state ? this.context.resume().then(function() {
1739
                this.playSound(e)
1740
            }) : null != this.context && 0 < p.volume && this.sounds.has(e) && (t = this.sounds.get(e)).loaded && ((n = this.context.createBufferSource()).buffer = t.buffer,
1741
                n.connect(this.gain),
1742
                n.start(0))
1743
        },
1744
        $n.prototype.setVolume = function(e) {
1745
            y[g].querySelector("#volume .title .icon").classList.toggle("muted", e <= 0),
1746
                y[g].querySelector("#volume .volume-value").textContent = e <= 0 ? "Muted" : e + "%",
1747
                this.gain && (this.gain.gain.value = e / 100)
1748
        },
1749
        $n.prototype.load = function() {
1750
            if (null == this.context)
1751
                try {
1752
                    h.AudioContext = h.AudioContext || h.webkitAudioContext,
1753
                        this.context = new AudioContext,
1754
                        this.gain = this.context.createGain(),
1755
                        this.gain.connect(this.context.destination),
1756
                        this.setVolume(p.volume),
1757
                        console.log("AudioContext created."),
1758
                        this.loadSounds()
1759
                } catch (e) {
1760
                    console.log("Error creating AudioContext.", e),
1761
                        this.context = null
1762
                }
1763
        };
1764
    const An = 4;
1765
    G;
1766
    var s, w = [],
1767
        C = 0,
1768
        Rn = -1,
1769
        M = -1,
1770
        In = [],
1771
        L = {
1772
            id: -1,
1773
            time: 0,
1774
            data: 0
1775
        },
1776
        Tn = -1,
1777
        Nn = 0,
1778
        On = void 0,
1779
        E = new $n,
1780
        N = void 0,
1781
        Wn = !1,
1782
        Pn = !1,
1783
        Yn = u.querySelector("#game-wrapper"),
1784
        it = u.querySelector("#game-canvas .room"),
1785
        zn = u.querySelector("#game-players"),
1786
        Hn = (u.querySelector("#game-chat"),
1787
            u.querySelector("#game-board"),
1788
            u.querySelector("#game-bar")),
1789
        Un = zn.querySelector(".players-list"),
1790
        Fn = zn.querySelector(".players-footer"),
1791
        Kn = u.querySelector("#game-round"),
1792
        O = [u.querySelector("#game-word .description"), u.querySelector("#game-word .word"), u.querySelector("#game-word .hints .container")],
1793
        Bn = u.querySelector("#home .container-name-lang input"),
1794
        Gn = u.querySelector("#home .container-name-lang select"),
1795
        _n = u.querySelector("#home .panel .button-play"),
1796
        Vn = u.querySelector("#home .panel .button-create");
1797
    const Xn = 11 == (t = new Date).getMonth() && 19 <= (t = t.getDate()) && t <= 26;
1798
​
1799
    function jn(e) {
1800
        Wn = e,
1801
            u.querySelector("#load").style.display = e ? "block" : "none"
1802
    }
1803
​
1804
    function Zn(e, t, n, a) {
1805
        var o, r;
1806
        e = e,
1807
            t = t,
1808
            o = function(e, t) {
1809
                switch (e) {
1810
                    case 200:
1811
                        return void n({
1812
                            success: !0,
1813
                            data: t
1814
                        });
1815
                    case 503:
1816
                    case 0:
1817
                        a && i(fe, R("Servers are currently undergoing maintenance!") + "\n\rStatus: " + e + "\n\rPlease try again later!");
1818
                        break;
1819
                    default:
1820
                        a && i(fe, R("An unknown error occurred ('$')", e) + "\n\r" + R("Please try again later!"))
1821
                }
1822
                n({
1823
                    success: !1,
1824
                    error: e
1825
                })
1826
            },
1827
            (r = new XMLHttpRequest).onreadystatechange = function() {
1828
                4 == this.readyState && o(this.status, this.response)
1829
            },
1830
            r.open("POST", e, !0),
1831
            r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
1832
            r.send(t)
1833
    }
1834
    Xn;
1835
    var Jn = null;
1836
    adplayer = null;
1837
    try {
1838
        aiptag.cmd.player.push(function() {
1839
            console.log("ad player loaded"),
1840
                adplayer = new aipPlayer({
1841
                    AD_WIDTH: 960,
1842
                    AD_HEIGHT: 540,
1843
                    AD_FULLSCREEN: !1,
1844
                    AD_CENTERPLAYER: !0,
1845
                    LOADING_TEXT: "loading advertisement",
1846
                    PREROLL_ELEM: function() {
1847
                        return u.getElementById("preroll")
1848
                    },
1849
                    AIP_COMPLETE: function(e) {
1850
                        Jn()
1851
                    },
1852
                    AIP_REMOVE: function() {}
1853
                })
1854
        })
1855
    } catch (e) {
1856
        console.log("ad push failed: "),
1857
            console.log(e)
1858
    }
1859
​
1860
    function Qn(t) {
1861
        var e, n, a = !1;
1862
        if (h.localStorageAvailable && (n = c.getItem("lastAd"),
1863
                e = new Date,
1864
                c.setItem("lastAd", e.toString()),
1865
                null == n ? n = e : (n = new Date(Date.parse(n)),
1866
                    a = 1 <= Math.abs(n - e) / 1e3 / 60)),
1867
            a)
1868
            try {
1869
                aiptag && adplayer && void 0 !== adplayer && null !== adplayer && "undefined" !== adplayer ? (Jn = t,
1870
                    aiptag.cmd.player.push(function() {
1871
                        adplayer.startPreRoll()
1872
                    })) : t()
1873
            } catch (e) {
1874
                console.log(e),
1875
                    t()
1876
            }
1877
        else
1878
            t()
1879
    }
1880
​
1881
    function ea(e, t, n) {
1882
        E.context && E.context.resume && E.context.resume(),
1883
            s && ca();
1884
        var a = 0;
1885
        (s = P(e, {
1886
            closeOnBeforeunload: !1
1887
        })).on("connect", function() {
1888
                jn(!1),
1889
                    s.on("joinerr", function(e) {
1890
                        ca(),
1891
                            i(fe, function(e) {
1892
                                switch (e) {
1893
                                    case 1:
1894
                                        return R("Room not found!");
1895
                                    case 2:
1896
                                        return R("Room is full!");
1897
                                    case 3:
1898
                                        return R("You are on a kick cooldown!");
1899
                                    case 4:
1900
                                        return R("You are banned from this room!");
1901
                                    case 5:
1902
                                        return R("You are joining rooms too quickly!");
1903
                                    case 100:
1904
                                        return R("You are already connected to this room!");
1905
                                    case 200:
1906
                                        return R("Too many users from your IP are connected to this room!");
1907
                                    case 300:
1908
                                        return R("You have been kicked too many times!");
1909
                                    default:
1910
                                        return R("An unknown error ('$') occured!", e)
1911
                                }
1912
                            }(e))
1913
                    }),
1914
                    s.on("data", Ta);
1915
                var e = Bn.value.split("#"),
1916
                    e = {
1917
                        join: t,
1918
                        create: n ? 1 : 0,
1919
                        name: e[0],
1920
                        lang: Gn.value,
1921
                        code: e[1],
1922
                        avatar: p.avatar
1923
                    };
1924
                s.emit("login", e)
1925
            }),
1926
            s.on("reason", function(e) {
1927
                a = e
1928
            }),
1929
            s.on("disconnect", function() {
1930
                switch (a) {
1931
                    case ee:
1932
                        i(ye, R("You have been kicked!"));
1933
                        break;
1934
                    case te:
1935
                        i(ye, R("You have been banned!"));
1936
                        break;
1937
                    default:
1938
                        i(ye, R("Connection lost!"))
1939
                }
1940
                ca()
1941
            }),
1942
            s.on("connect_error", function(e) {
1943
                ca(),
1944
                    jn(!1),
1945
                    i(fe, e.message)
1946
            })
1947
    }
1948
​
1949
    function ta(e) {
1950
        var t;
1951
        E.playSound(xn),
1952
            Wt(Ze, !0),
1953
            Tt(12),
1954
            Pt(1),
1955
            Yt(0),
1956
            Xt(!0),
1957
            A(Me),
1958
            u.querySelector("#home").style.display = "none",
1959
            u.querySelector("#game").style.display = "flex",
1960
            C = e.me,
1961
            Tn = e.type,
1962
            On = e.id,
1963
            u.querySelector("#input-invite").value = "https://skribbl.io/?" + e.id,
1964
            t = e.settings,
1965
            In = t,
1966
            na(),
1967
            A(Un),
1968
            w = [];
1969
        for (var n = 0; n < e.users.length; n++)
1970
            Na(e.users[n], !1);
1971
        if (za(),
1972
            Ha(),
1973
            oa(e.round),
1974
            ma(e.owner),
1975
            ia(e.state, !0),
1976
            !Pn) {
1977
            try {
1978
                (adsbygoogle = h.adsbygoogle || []).push({}),
1979
                    (adsbygoogle = h.adsbygoogle || []).push({})
1980
            } catch (e) {
1981
                console.log("google ad request failed"),
1982
                    console.log(e)
1983
            }
1984
            Pn = !0
1985
        }
1986
    }
1987
​
1988
    function na() {
1989
        oa(Nn);
1990
        for (var e, t = 0; t < Ka.length; t++) {
1991
            var n = Ka[t];
1992
            n.index && (e = In[(n = n).index],
1993
                "checkbox" == n.element.type ? n.element.checked = !!e : n.element.value = e)
1994
        }
1995
    }
1996
​
1997
    function aa(e, t, n) {
1998
        In[e] = t,
1999
            n && s && s.emit("data", {
2000
                id: ka,
2001
                data: {
2002
                    id: e,
2003
                    val: t
2004
                }
2005
            }),
2006
            na()
2007
    }
2008
​
2009
    function oa(e) {
2010
        var e = (Nn = e) + 1,
2011
            t = In[ne.ROUNDS];
2012
        Kn.textContent = R("Round $ of $", [e, t]),
2013
            Hn.querySelector(".mobile .round span").textContent = e + "/" + t
2014
    }
2015
​
2016
    function ra() {
2017
        for (var e = 0; e < w.length; e++)
2018
            w[e].score = 0;
2019
        for (e = 0; e < w.length; e++)
2020
            Ua(w[e], !1),
2021
            Fa(w[e], !1);
2022
        Ha()
2023
    }
2024
​
2025
    function ia(e, t) {
2026
        var n, a;
2027
        if (n = L = e,
2028
            null != vn && (h.cancelAnimationFrame(vn),
2029
                vn = void 0),
2030
            n.id == j ? bn({
2031
                top: -100,
2032
                opacity: 0
2033
            }, 600, function() {
2034
                un.classList.remove("show")
2035
            }) : un.classList.contains("show") ? bn({
2036
                top: -100,
2037
                opacity: 1
2038
            }, 600, function() {
2039
                kn(n),
2040
                    bn({
2041
                        top: 0,
2042
                        opacity: 1
2043
                    }, 600)
2044
            }) : (un.classList.add("show"),
2045
                kn(n),
2046
                bn({
2047
                    top: 0,
2048
                    opacity: 1
2049
                }, 600)),
2050
            a = e.time,
2051
            Qa(),
2052
            eo(a),
2053
            Za = setInterval(function() {
2054
                eo(Math.max(0, Ja - 1));
2055
                var e = -1;
2056
                L.id == j && (e = Va),
2057
                    L.id == X && (e = Xa),
2058
                    ja.style.animationName = Ja < e ? Ja % 2 == 0 ? "rot_left" : "rot_right" : "none",
2059
                    Ja < e && E.playSound(En),
2060
                    Ja <= 0 && Qa()
2061
            }, 1e3),
2062
            Yn.classList.add("toolbar-hidden"),
2063
            St(),
2064
            sa(!1),
2065
            e.id == Q ? (ra(),
2066
                Yn.classList.add("room")) : Yn.classList.remove("room"),
2067
            e.id == V && (oa(e.data),
2068
                0 == e.data) && ra(),
2069
            e.id == Z) {
2070
            C != M && pa(e.data.word);
2071
            for (var o = 0; o < e.data.scores.length; o += 3) {
2072
                var r = e.data.scores[o + 0],
2073
                    i = e.data.scores[o + 1];
2074
                e.data.scores[o + 2];
2075
                (c = W(r)) && (c.score = i)
2076
            }
2077
            Ha();
2078
            for (var l = !0, o = 0; o < w.length; o++)
2079
                if (w[o].guessed) {
2080
                    l = !1;
2081
                    break
2082
                }
2083
            l ? E.playSound(qn) : E.playSound(Cn),
2084
                b(R("The word was '$'", e.data.word), "", v($e), !0)
2085
        } else
2086
            e.id != j && (O[0].textContent = R("WAITING"),
2087
                O[0].classList.add("waiting"),
2088
                O[1].style.display = "none",
2089
                O[2].style.display = "none");
2090
        if (e.id == j) {
2091
            if (M = e.data.id,
2092
                E.playSound(wn),
2093
                Xt(!0),
2094
                e.data.drawCommands && (S = e.data.drawCommands),
2095
                b(R("$ is drawing now!", W(M).name), "", v(De), !0),
2096
                !t)
2097
                for (o = 0; o < w.length; o++)
2098
                    Ua(w[o], !1);
2099
            O[0].classList.remove("waiting"),
2100
                M == C ? (a = e.data.word,
2101
                    O[0].textContent = R("DRAW THIS"),
2102
                    O[1].style.display = "",
2103
                    O[2].style.display = "none",
2104
                    O[1].textContent = a,
2105
                    Yn.classList.remove("toolbar-hidden"),
2106
                    St()) : (sa(!0),
2107
                    ua(e.data.word, !1),
2108
                    ha(e.data.hints))
2109
        } else {
2110
            M = -1;
2111
            for (o = 0; o < w.length; o++)
2112
                Ua(w[o], !1)
2113
        }
2114
        if (e.id == J && 0 < e.data.length) {
2115
            for (var s = [], i = 0, o = 0; o < e.data.length; o++) {
2116
                var c, d = e.data[o][0],
2117
                    u = e.data[o][1];
2118
                (c = W(d)) && 0 == u && (i = c.score,
2119
                    s.push(c.name))
2120
            }
2121
            1 == s.length ? b(R("$ won with a score of $!", [s[0], i]), "", v(Re), !0) : 1 < s.length && b(R("$ and $ won with a score of $!", [s.slice(0, -1).join(", "), s[s.length - 1], i]), "", v(Re), !0)
2122
        }
2123
        for (o = 0; o < w.length; o++)
2124
            Fa(w[o], w[o].id == M);
2125
        za()
2126
    }
2127
​
2128
    function la(e) {
2129
        s && s.connected && L.id == j && (s.emit("data", {
2130
                id: va,
2131
                data: e
2132
            }),
2133
            sa(!1))
2134
    }
2135
​
2136
    function sa(e) {
2137
        u.querySelector("#game-rate").style.display = e ? "" : "none"
2138
    }
2139
​
2140
    function ca() {
2141
        s && s.close(),
2142
            Xt(!(s = void 0)),
2143
            Qa(),
2144
            w = [],
2145
            In = [],
2146
            L = {
2147
                id: M = Rn = -1,
2148
                time: C = 0,
2149
                data: 0
2150
            },
2151
            u.querySelector("#home").style.display = "",
2152
            u.querySelector("#game").style.display = "none"
2153
    }
2154
​
2155
    function da(e) {
2156
        s && s.connected && L.id == X && s.emit("data", {
2157
            id: La,
2158
            data: e
2159
        })
2160
    }
2161
​
2162
    function ua(e, t) {
2163
        for (var n = e.length - 1, a = 0; a < e.length; a++)
2164
            n += e[a];
2165
        var o = !t && 1 == In[ne.WORDMODE];
2166
        o && (n = 3),
2167
            O[0].textContent = R(o ? "WORD HIDDEN" : "GUESS THIS"),
2168
            O[1].style.display = "none",
2169
            O[2].style.display = "",
2170
            A(O[2]),
2171
            O[2].hints = [];
2172
        for (a = 0; a < n; a++)
2173
            O[2].hints[a] = $("hint", o ? "?" : "_"),
2174
            O[2].appendChild(O[2].hints[a]);
2175
        o || O[2].appendChild($("word-length", e.join(" ")))
2176
    }
2177
​
2178
    function ha(e) {
2179
        for (var t = O[2].hints, n = 0; n < e.length; n++) {
2180
            var a = e[n][0],
2181
                o = e[n][1];
2182
            t[a].textContent = o,
2183
                t[a].classList.add("uncover")
2184
        }
2185
    }
2186
​
2187
    function pa(e) {
2188
        (!O[2].hints || O[2].hints.length < e.length) && ua([e.length], !0);
2189
        for (var t = [], n = 0; n < e.length; n++)
2190
            t.push([n, e.charAt(n)]);
2191
        ha(t)
2192
    }
2193
​
2194
    function ma(e) {
2195
        Rn = e;
2196
        for (var t = 0; t < w.length; t++)
2197
            he(w[t].element, w[t].id == Rn),
2198
            Pa(w[t], 0, w[t].id == Rn);
2199
        var n = C != Rn;
2200
        u.querySelector("#start-game").disabled = n;
2201
        for (var a = 0; a < Ka.length; a++)
2202
            Ka[a].element.disabled = n;
2203
        e = W(Rn);
2204
        e && b(R("$ is now the room owner!", e.name), "", v(Re), !0)
2205
    }
2206
    const ga = 1,
2207
        fa = 2,
2208
        ya = 5,
2209
        va = 8,
2210
        ba = 10,
2211
        Sa = 11,
2212
        ka = 12,
2213
        wa = 13,
2214
        Ca = 14,
2215
        qa = 15,
2216
        xa = 16,
2217
        Ma = 17,
2218
        La = 18,
2219
        Ea = 19,
2220
        Da = 20,
2221
        $a = 21;
2222
    const Aa = 30,
2223
        Ra = 31,
2224
        Ia = 32;
2225
​
2226
    function Ta(e) {
2227
        var t = e.id,
2228
            n = e.data;
2229
        switch (t) {
2230
            case ba:
2231
                ta(n);
2232
                break;
2233
            case Sa:
2234
                ia(n);
2235
                break;
2236
            case ka:
2237
                aa(n.id, n.val, !1);
2238
                break;
2239
            case wa:
2240
                ha(n);
2241
                break;
2242
            case Ca:
2243
                eo(n);
2244
                break;
2245
            case ga:
2246
                var a = Na(n, !0);
2247
                Ha(),
2248
                    a.joinTimeout = setTimeout(() => {
2249
                        b(R("$ joined the room!", a.name), "", v($e), !0),
2250
                            E.playSound(xn),
2251
                            a.joinTimeout = void 0
2252
                    }, 0 == Tn ? 1e3 : 0);
2253
                break;
2254
            case fa:
2255
                (a = function(e) {
2256
                    for (var t = 0; t < w.length; t++) {
2257
                        var n = w[t];
2258
                        if (n.id == e)
2259
                            return w.splice(t, 1),
2260
                                n.element.remove(),
2261
                                Ha(),
2262
                                za(),
2263
                                n
2264
                    }
2265
                    return
2266
                }(n.id)) && (null == a.joinTimeout ? (b(function(e, t) {
2267
                            switch (e) {
2268
                                default:
2269
                                    return R("$ left the room!", t);
2270
                                case ee:
2271
                                    return R("$ has been kicked!", t);
2272
                                case te:
2273
                                    return R("$ has been banned!", t)
2274
                            }
2275
                        }(n.reason, a.name), "", v(Ae), !0),
2276
                        E.playSound(Mn)) : (clearTimeout(a.joinTimeout),
2277
                        a.joinTimeout = void 0),
2278
                    n.id != M || n.reason != ee && n.reason != te || Xt(!0));
2279
                break;
2280
            case ya:
2281
                var o = W(n[0]),
2282
                    r = W(n[1]),
2283
                    i = n[2],
2284
                    l = n[3];
2285
                o && r && b(R("$ is voting to kick $ ($/$)", [o.name, r.name, i, l]), "", v(Ee), !0);
2286
                break;
2287
            case qa:
2288
                (a = W(n.id)) && (b(R("$ guessed the word!", a.name), "", v($e), !0).classList.add("guessed"),
2289
                    Ua(a, !0),
2290
                    E.playSound(Ln),
2291
                    n.id == C) && pa(n.word);
2292
                break;
2293
            case va:
2294
                (a = W(n.id)) && (o = a,
2295
                    r = 0 == n.vote ? "thumbsdown.gif" : "thumbsup.gif",
2296
                    (i = $("icon")).style.backgroundImage = "url(/img/" + r + ")",
2297
                    r = Wa(o, i).getBoundingClientRect(),
2298
                    o = .9 * (r.bottom - r.top),
2299
                    i.style.width = o + "px",
2300
                    i.style.height = o + "px",
2301
                    n.vote ? b(R("$ liked the drawing!", a.name), "", v($e), !0) : b(R("$ disliked the drawing!", a.name), "", v(Ae), !0));
2302
                break;
2303
            case Ma:
2304
                ma(n);
2305
                break;
2306
            case xa:
2307
                b(R("$ is close!", n), "", v(Ee), !0);
2308
                break;
2309
            case Aa:
2310
                Oa(W(n.id), n.msg);
2311
                break;
2312
            case Ia:
2313
                b(R("Spam detected! You're sending messages too quickly."), "", v(Ae), !0);
2314
                break;
2315
            case Ra:
2316
                switch (n.id) {
2317
                    case 0:
2318
                        b(R("You need at least 2 players to start the game!"), "", v(Ae), !0);
2319
                        break;
2320
                    case 100:
2321
                        b(R("Server restarting in about $ seconds!", n.data), "", v(Ae), !0)
2322
                }
2323
                break;
2324
            case Ea:
2325
                for (var s = 0; s < n.length; s++)
2326
                    Zt(n[s]);
2327
                break;
2328
            case Da:
2329
                Xt(!0);
2330
                break;
2331
            case $a:
2332
                Bt(n);
2333
                break;
2334
            default:
2335
                return void console.log("Unimplemented data packed received with id " + t)
2336
        }
2337
    }
2338
​
2339
    function W(e) {
2340
        for (var t = 0; t < w.length; t++) {
2341
            var n = w[t];
2342
            if (n.id == e)
2343
                return n
2344
        }
2345
    }
2346
​
2347
    function Na(e, t) {
2348
        var n = {
2349
                id: e.id,
2350
                flags: e.flags,
2351
                name: e.name,
2352
                avatar: e.avatar,
2353
                score: e.score,
2354
                guessed: e.guessed,
2355
                rank: 0,
2356
                muted: !1,
2357
                votekick: !1,
2358
                reported: !1,
2359
                page: 0,
2360
                element: $("player"),
2361
                bubble: void 0
2362
            },
2363
            e = (w.push(n),
2364
                (n.flags & An) == An),
2365
            a = (e && (n.element.classList.add("admin"),
2366
                    n.interval = setInterval(function() {
2367
                        n.avatar[0] = (n.avatar[0] + 1) % U[0],
2368
                            ue(r, n.avatar)
2369
                    }, 250)),
2370
                n.id == C ? R("$ (You)", n.name) : n.name),
2371
            o = $("player-avatar-container"),
2372
            r = de(n.avatar),
2373
            o = (n.element.drawing = $("drawing"),
2374
                r.appendChild(n.element.drawing),
2375
                o.appendChild(r),
2376
                n.element.appendChild(o),
2377
                Un.appendChild(n.element),
2378
                $("player-info")),
2379
            a = $("player-name", a),
2380
            a = (n.id == C && a.classList.add("me"),
2381
                o.appendChild(a),
2382
                o.appendChild($("player-rank", "#" + n.rank)),
2383
                o.appendChild($("player-score", R("$ points", n.score))),
2384
                e && o.appendChild($("player-tag", "THE CREATOR")),
2385
                n.element.appendChild(o),
2386
                D(n.element, "click", function() {
2387
                    N = n,
2388
                        i(m, n)
2389
                }),
2390
                $("player-icons")),
2391
            e = $("icon owner"),
2392
            o = $("icon muted");
2393
        return a.appendChild(e),
2394
            a.appendChild(o),
2395
            n.element.appendChild(a),
2396
            n.element.icons = [e, o],
2397
            Ua(n, n.guessed),
2398
            t && za(),
2399
            n
2400
    }
2401
​
2402
    function Oa(e, t) {
2403
        var n, a, o;
2404
        !e.muted && (o = ((a = W(C)).flags & An) == An,
2405
            n = e.id == M || e.guessed,
2406
            C == M || a.guessed || !n || o) && (a = (e.flags & An) == An,
2407
            o = Le,
2408
            n && (o = Ie),
2409
            a && (o = Ae),
2410
            Wa(e, $("text", t)),
2411
            b(e.name, t, v(o)))
2412
    }
2413
​
2414
    function Wa(e, t) {
2415
        e.bubble && (clearTimeout(e.bubble.timeout),
2416
            e.bubble.remove(),
2417
            e.bubble = void 0);
2418
        var n = $("player-bubble"),
2419
            a = $("content");
2420
        return a.appendChild(t),
2421
            n.appendChild($("arrow")),
2422
            n.appendChild(a),
2423
            e.element.appendChild(n),
2424
            e.bubble = n,
2425
            e.bubble.timeout = setTimeout(function() {
2426
                e.bubble.remove(),
2427
                    e.bubble = void 0
2428
            }, 1500),
2429
            n
2430
    }
2431
​
2432
    function Pa(e, t, n) {
2433
        n ? e.element.icons[t].classList.add("visible") : e.element.icons[t].classList.remove("visible")
2434
    }
2435
    var Ya = void 0;
2436
​
2437
    function za() {
2438
        L.id,
2439
            Q;
2440
        for (var e = getComputedStyle(u.documentElement).getPropertyValue("--PLAYERS_PER_PAGE"), t = (e <= 0 && (t = Math.max(48, Un.clientHeight),
2441
                    e = Math.floor(t / 48)),
2442
                Math.ceil(w.length / e)), n = 0; n < w.length; n++)
2443
            w[n].page = Math.floor(n / e);
2444
        null == Ya ? Ya = pe(Fn, t, [zn], function(e, t, n) {
2445
                for (var a = [], o = 0; o < w.length; o++) {
2446
                    var r = (i = w[o]).page == t;
2447
                    i.element.style.display = r ? "" : "none",
2448
                        r && a.push(i.element)
2449
                }
2450
                if (0 < a.length) {
2451
                    for (var i, o = 0; o < a.length; o++)
2452
                        (i = a[o]).classList.remove("first"),
2453
                        i.classList.remove("last"),
2454
                        o % 2 == 0 ? i.classList.remove("odd") : i.classList.add("odd");
2455
                    a[0].classList.add("first"),
2456
                        a[a.length - 1].classList.add("last")
2457
                }
2458
            }) : me(Ya, t),
2459
            Ya.element.style.display = 1 < t ? "" : "none"
2460
    }
2461
​
2462
    function Ha() {
2463
        for (var e = [], t = 0; t < w.length; t++)
2464
            e.push(w[t]);
2465
        e.sort(function(e, t) {
2466
            return t.score - e.score
2467
        });
2468
        for (var n, a, o = 1, t = 0; t < e.length; t++) {
2469
            var r = e[t];
2470
            a = o,
2471
                (n = r).rank = a,
2472
                n.element.querySelector(".player-score").textContent = R("$ points", n.score),
2473
                (n = n.element.querySelector(".player-rank")).textContent = "#" + a,
2474
                n.classList.remove("first"),
2475
                n.classList.remove("second"),
2476
                n.classList.remove("third"),
2477
                1 == a && n.classList.add("first"),
2478
                2 == a && n.classList.add("second"),
2479
                3 == a && n.classList.add("third"),
2480
                t < e.length - 1 && r.score > e[t + 1].score && o++
2481
        }
2482
    }
2483
​
2484
    function Ua(e, t) {
2485
        (e.guessed = t) ? e.element.classList.add("guessed"): e.element.classList.remove("guessed")
2486
    }
2487
​
2488
    function Fa(e, t) {
2489
        e.element.drawing.style.display = t ? "block" : "none"
2490
    }
2491
    var Ka = [];
2492
    for (var Ba = it.querySelectorAll('*[id^="item-"]'), Ga = 0; Ga < Ba.length; Ga++) {
2493
        var _a = {
2494
            id: Ba[Ga].id.replace("item-settings-", ""),
2495
            element: Ba[Ga],
2496
            index: Ba[Ga].dataset.setting
2497
        };
2498
        Ba[Ga].item = _a,
2499
            Ka.push(_a),
2500
            D(Ba[Ga].item.element, "change", function() {
2501
                var e = this.value;
2502
                "checkbox" == this.type && (e = this.checked ? 1 : 0),
2503
                    null != this.item.index && aa(this.item.index, e, !0)
2504
            })
2505
    }
2506
    const Va = 10,
2507
        Xa = 4;
2508
    var ja = u.querySelector("#game-clock"),
2509
        Za = null,
2510
        Ja = 0;
2511
​
2512
    function Qa() {
2513
        Za && (clearInterval(Za),
2514
            Za = null)
2515
    }
2516
​
2517
    function eo(e) {
2518
        Ja = e,
2519
            ja.textContent = Ja,
2520
            Hn.querySelector(".mobile .drawtime span").textContent = Ja + "s"
2521
    }
2522
    var to, t = u.querySelector("#tutorial"),
2523
        no = t.querySelectorAll(".page"),
2524
        ao = pe(t.querySelector(".navigation"), no.length, [t.querySelector(".pages")], function(e, t, n) {
2525
            n && clearInterval(oo);
2526
            for (var a = 0; a < no.length; a++)
2527
                no[a].classList.remove("active");
2528
            no[t].classList.add("active")
2529
        }),
2530
        oo = setInterval(function() {
2531
            ao.selected < 4 ? ge(ao, ao.selected + 1, !1) : ge(ao, 0, !1)
2532
        }, 3500),
2533
        it = u.querySelector("#game-settings");
2534
    u.querySelector("#audio"),
2535
        u.querySelector("#lightbulb");
2536
​
2537
    function ro() {
2538
        var e = .01 * h.innerHeight;
2539
        u.documentElement.style.setProperty("--vh", e + "px")
2540
    }
2541
​
2542
    function io() {
2543
        b(R("Copied room link to clipboard!"), "", v(Ee), !0);
2544
        var e = "https://skribbl.io/?" + On;
2545
        if (navigator.clipboard)
2546
            navigator.clipboard.writeText(e).then(function() {
2547
                console.log("Async: Copying to clipboard was successful!")
2548
            }, function(e) {
2549
                console.error("Async: Could not copy text: ", e)
2550
            });
2551
        else {
2552
            var t = u.createElement("textarea");
2553
            t.value = e,
2554
                t.style.top = "0",
2555
                t.style.left = "0",
2556
                t.style.position = "fixed",
2557
                u.body.appendChild(t),
2558
                t.select(),
2559
                t.focus();
2560
            try {
2561
                var n = u.execCommand("copy");
2562
                console.log("Copying link was " + (n ? "successful" : "unsuccessful"))
2563
            } catch (e) {
2564
                console.log("Unable to copy link " + e)
2565
            }
2566
            u.body.removeChild(t)
2567
        }
2568
    }
2569
​
2570
    function lo(e) {
2571
        var t = qe.querySelector(".characters");
2572
        0 == (t.textContent = e) ? t.classList.remove("visible") : t.classList.add("visible")
2573
    }
2574
​
2575
    function so(e) {
2576
        s && s.connected ? s.emit("data", {
2577
            id: Aa,
2578
            data: e
2579
        }) : Oa(W(C), e)
2580
    }
2581
    D(it, "click", function() {
2582
            i(g)
2583
        }),
2584
        D(h, "resize", function() {
2585
            ro(),
2586
                za()
2587
        }),
2588
        h.onunload = function() {
2589
            s && ca()
2590
        },
2591
        D(u, "PointerEvent" in h ? "pointerdown" : "click", function(e) {
2592
            He.elements.main.contains(e.target) || He.isOpen && (delete u.documentElement.dataset.mobileKeyboardOpen,
2593
                    za(),
2594
                    He.isOpen = !1),
2595
                u.querySelector("#game-toolbar .sizes").contains(e.target) || Ht()
2596
        }),
2597
        D([Bn, Gn], "change", a),
2598
        D(_n, "click", function() {
2599
            var t, e, n, a, o;
2600
            n = h.location.href,
2601
                o = "",
2602
                n = n.split("?"),
2603
                t = o = 1 < n.length ? (o = "" + n[1]).substring(0, a) : o,
2604
                Wn || (e = "" != t ? "id=" + t : "lang=" + Gn.value,
2605
                    Ce(),
2606
                    jn(!0),
2607
                    Qn(function() {
2608
                        Zn(location.origin + ":3000/play", e, function(e) {
2609
                            jn(!1),
2610
                                e.success && ea(e.data, t)
2611
                        }, !0)
2612
                    }))
2613
        }),
2614
        D(Vn, "click", function() {
2615
            Wn || (Ce(),
2616
                jn(!0),
2617
                Qn(function() {
2618
                    Zn(location.origin + ":3000/play", "lang=" + Gn.value, function(e) {
2619
                        e.success ? ea(e.data, 0, 1) : jn(!1)
2620
                    }, !0)
2621
                }))
2622
        }),
2623
        D(u.querySelector("#game-rate .like"), "click", function() {
2624
            la(1)
2625
        }),
2626
        D(u.querySelector("#game-rate .dislike"), "click", function() {
2627
            la(0)
2628
        }),
2629
        D(u.querySelector("#start-game"), "click", function() {
2630
            if (s) {
2631
                var e = u.querySelector("#item-settings-customwords").value.split(","),
2632
                    t = "";
2633
                if (5 <= e.length) {
2634
                    for (var n = 0; n < e.length; n++)
2635
                        e[n] = e[n].trim();
2636
                    t = e.join(",")
2637
                }
2638
                s.emit("data", {
2639
                    id: 22,
2640
                    data: t
2641
                })
2642
            }
2643
        }),
2644
        D([u.querySelector("#copy-invite"), u.querySelector("#modal-player-button-invite")], "click", io),
2645
        D(y[m].querySelector("button.kick"), "click", function() {
2646
            Ce(),
2647
                null != N && N.id != C && s && s.emit("data", {
2648
                    id: 3,
2649
                    data: N.id
2650
                })
2651
        }),
2652
        D(y[m].querySelector("button.ban"), "click", function() {
2653
            Ce(),
2654
                null != N && N.id != C && s && s.emit("data", {
2655
                    id: 4,
2656
                    data: N.id
2657
                })
2658
        }),
2659
        D(y[m].querySelector("button.votekick"), "click", function() {
2660
            Ce(),
2661
                null != N && N.id != C && s && (N.id == Rn ? b(R("You can not votekick the lobby owner!"), "", v(Ae), !0) : s.emit("data", {
2662
                    id: ya,
2663
                    data: N.id
2664
                }))
2665
        }),
2666
        D(y[m].querySelector("button.mute"), "click", function() {
2667
            null != N && N.id != C && (N.muted = !N.muted,
2668
                Pa(N, 1, N.muted),
2669
                N.muted ? b(R("You muted '$'!", N.name), "", v(Ae), !0) : b(R("You unmuted '$'!", N.name), "", v(Ae), !0),
2670
                s && s.emit("data", {
2671
                    id: 7,
2672
                    data: N.id
2673
                }),
2674
                we(N.muted))
2675
        }),
2676
        D(y[m].querySelector("button.report"), "click", function() {
2677
            y[m].querySelector(".buttons").style.display = "none",
2678
                y[m].querySelector(".player").style.display = "none",
2679
                y[m].querySelector(".report-menu").style.display = "";
2680
            for (var e = y[m].querySelectorAll(".report-menu input"), t = 0; t < e.length; t++)
2681
                e[t].checked = !1
2682
        }),
2683
        D(y[m].querySelector("button#report-send"), "click", function() {
2684
            var e = 0;
2685
            y[m].querySelector("#report-reason-toxic").checked && (e |= 1),
2686
                y[m].querySelector("#report-reason-spam").checked && (e |= 2),
2687
                y[m].querySelector("#report-reason-bot").checked && (e |= 4),
2688
                0 < e && (null != N && N.id != C && (N.reported = !0,
2689
                        s && s.emit("data", {
2690
                            id: 6,
2691
                            data: {
2692
                                id: N.id,
2693
                                reasons: e
2694
                            }
2695
                        }),
2696
                        b(R("Your report for '$' has been sent!", N.name), "", v(Ee), !0)),
2697
                    Ce())
2698
        }),
2699
        D(y[g].querySelector("#volume input"), "change", function(e) {
2700
            p.volume = e.target.value,
2701
                E.setVolume(p.volume),
2702
                E.playSound(Ln),
2703
                a()
2704
        }),
2705
        D(y[g].querySelector("#select-pressure-sensitivity"), "change", function(e) {
2706
            p.pressureSensitivity = e.target.value,
2707
                a()
2708
        }),
2709
        D(y[g].querySelector("button.reset"), "click", function() {
2710
            for (var e = 0; e < d.length; e++) {
2711
                var t = d[e];
2712
                t.key = t.def,
2713
                    t.listing.querySelector("input").value = t.key;
2714
                for (var n = 0; n < t.changed.length; n++)
2715
                    t.changed[n](t)
2716
            }
2717
            se()
2718
        }),
2719
        D(u.querySelector("#game-keyboard button.settings"), "click", function(e) {
2720
            i(g)
2721
        }),
2722
        D(xe, "focusin focus", function(e) {
2723
            e.preventDefault()
2724
        }),
2725
        D(xe, "input", function(e) {
2726
            lo(xe.value.length)
2727
        }),
2728
        D(qe, "submit", function(e) {
2729
            return e.preventDefault(),
2730
                xe.value && so(xe.value),
2731
                qe.reset(),
2732
                lo(0),
2733
                !1
2734
        }),
2735
        ro(),
2736
        h.localStorageAvailable ? (Bn.value = n("name", ""),
2737
            Gn.value = function(e) {
2738
                for (var t = u.querySelectorAll("#home .panel .container-name-lang select option"), n = 0; n < t.length; n++)
2739
                    if (t[n].value == e)
2740
                        return t[n].value;
2741
                return 0
2742
            }(n("lang", 0)),
2743
            p.displayLang = n("displaylang", "en"),
2744
            p.volume = parseInt(n("volume", 100)),
2745
            p.filterChat = 1 == parseInt(n("filter", 1)) ? 1 : 0,
2746
            p.pressureSensitivity = 1 == parseInt(n("pressure", 1)) ? 1 : 0,
2747
            p.avatar = (t = "ava",
2748
                it = p.avatar,
2749
                null == (t = c.getItem(t)) ? it : JSON.parse(t)),
2750
            Ye.value = n("keyboard", 1),
2751
            ze.value = n("keyboardlayout", "en"),
2752
            Fe(),
2753
            y[g].querySelector("#volume input").value = p.volume,
2754
            E.setVolume(p.volume),
2755
            console.log("Settings loaded.")) : console.log("Settings not loaded. LocalStorage unavailable.");
2756
    for (var co = u.querySelectorAll("[data-translate]"), uo = 0; uo < co.length; uo++) {
2757
        var ho = co[uo];
2758
        Ve(ho, ho.dataset.translate)
2759
    }
2760
    for (var po = Be[p.displayLang], mo = 0; mo < Ge.length; mo++) {
2761
        var go = Ge[mo],
2762
            fo = _e(po, go.key);
2763
        "text" == go.type && (go.element.textContent = fo),
2764
            "placeholder" == go.type && (go.element.placeholder = fo)
2765
    }
2766
​
2767
    function yo(e) {
2768
        to.parts[e].classList.remove("bounce"),
2769
            to.parts[e].offsetWidth,
2770
            to.parts[e].classList.add("bounce")
2771
    }
2772
    D(_n = u.querySelectorAll("[data-tooltip]"), "pointerenter", function(e) {
2773
            Oe(e.target)
2774
        }),
2775
        D(_n, "pointerleave", function(e) {
2776
            We()
2777
        }),
2778
        it = (Vn = u.querySelector("#home .avatar-customizer")).querySelector(".container"),
2779
        t = Vn.querySelectorAll(".arrows.left .arrow"),
2780
        _n = Vn.querySelectorAll(".arrows.right .arrow"),
2781
        Vn = Vn.querySelectorAll(".randomize"),
2782
        (to = de(p.avatar)).classList.add("fit"),
2783
        it.appendChild(to),
2784
        D(t, "click", function() {
2785
            var e = parseInt(this.dataset.avatarIndex);
2786
            --p.avatar[e],
2787
                p.avatar[e] < 0 && (p.avatar[e] = U[e] - 1),
2788
                yo(e),
2789
                ue(to, p.avatar),
2790
                a()
2791
        }),
2792
        D(_n, "click", function() {
2793
            var e = parseInt(this.dataset.avatarIndex);
2794
            p.avatar[e] += 1,
2795
                p.avatar[e] >= U[e] && (p.avatar[e] = 0),
2796
                yo(e),
2797
                ue(to, p.avatar),
2798
                a()
2799
        }),
2800
        D(Vn, "click", function() {
2801
            p.avatar[0] = Math.floor(Math.random() * U[0]),
2802
                p.avatar[1] = Math.floor(Math.random() * U[1]),
2803
                p.avatar[2] = Math.floor(Math.random() * U[2]),
2804
                p.avatar[3] = Math.floor(Math.random() * U[3]),
2805
                yo(1),
2806
                yo(2),
2807
                yo(3)
2808
                ue(to, p.avatar),
2809
                a()
2810
        });
2811
    for (var vo = Math.round(8 * Math.random()), bo = u.querySelector("#home .logo-big .avatar-container"), So = 0; So < 8; So++) {
2812
        var ko = [0, 0, 0, -1],
2813
            ko = (ko[0] = So,
2814
                ko[1] = Math.round(100 * Math.random()) % z,
2815
                ko[2] = Math.round(100 * Math.random()) % H,
2816
                ko[3] = Math.round(100 * Math.random()) % H,
2817
                100 * Math.random() < 1 && (ko[3] = Math.floor(20 * Math.random())),
2818
                Xn && 100 * Math.random() < 35 && (ko[3] = 96 + Math.floor(4 * Math.random())),
2819
                de(ko, 0, vo == So));
2820
        ko.index = So,
2821
            bo.appendChild(ko),
2822
            D(ko, "click", function() {
2823
                var e = [this.index, 0, 0, -1];
2824
                e[1] = Math.round(100 * Math.random()) % z,
2825
                    e[2] = Math.round(100 * Math.random()) % H,
2826
                    1e3 * Math.random() < 10 && (e[3] = Math.floor(20 * Math.random())),
2827
                    ue(this, e),
2828
                    this.classList.remove("clicked"),
2829
                    this.offsetWidth,
2830
                    this.classList.add("clicked")
2831
            })
2832
    }
2833
}(window, document, localStorage, io);
