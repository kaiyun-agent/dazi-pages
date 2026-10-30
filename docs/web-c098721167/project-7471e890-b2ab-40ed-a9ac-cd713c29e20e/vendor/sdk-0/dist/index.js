import { geojson as zs, s2 as de } from "s2js";
import { getNumCells as Gs, getRes0Cells as Os, cellToChildren as Hs, polygonToCellsExperimental as Bs, POLYGON_TO_CELLS_FLAGS as qs, cellToBoundary as ho, latLngToCell as Vs, cellToLatLng as $s, isPentagon as Us, getBaseCellNumber as js } from "h3-js";
import { getXYUnits as Ks, getGrid2DRowCol as Ys, getGrid2DGeoExtent as Js, bdgrid_2d_encode as Qs } from "xgis-bdgrid";
const Tt = ue;
function rr() {
  const e = ["44o56kYR6ioL57or776w5AY45B6E5QYj", "WQTefmoCW4KSWRJdIa", "Amk1WPRcPmkw", "gSkuW4TqiSkQjNu", "hmkSmSoSW6VdKxBcIG", "ifHLW4pdGaPWWPGthSodiSkN", "5B2q6lYN56MU6zwc5z6556cL57Ux5lMG", "jq5aWRhcHvxcHSkpqw94WP/cKq", "W5STWQCc", "iY3cGsa", "oZickKdcHmovkW", "C8kwWPhdGHG", "vmkAW4jEm8kilwu", "oCokW4JcVhjjwmoI", "dmkMkCoTWQVdLxtcLW", "fb8RaNFcPmoEfa", "WP5Eymkkiv4GW40", "mXjoW4eeWQinxW", "W5qAmYSbWQvqtq", "WObNmCkFWOe", "h8o/WQHTWP3dSSkscq", "emkwW5Puna", "ySoUW6bqkMifWPi", "W4OSWRykmmoIWRBdJW", "W6PUWPPoamoWWOq9", "fmoFW7yFFa", "W7X6WPbjhCo3WOXP", "pG4/e08", "wfOsW4e", "WRr2W7zJza", "nCoqW4JcSa", "m8oXW63cSNG", "WOuHW5e8nL5fiq", "pCkwBa", "smk2W7VcS8kz", "WOHAz8kXjG", "WRuNW6e6ea", "pSkNyu7cMSoqW7hdTq", "WOuIW4y4yKPgCG", "WPhcQSo3z18", "vCkmW6j+W7u/WROw", "wu/dGCo1WQO", "jqhcMtDf", "WPevpLFdMW", "g8o8WQL6W5VdPmkFiq", "W7G7amki", "xSkRWQ81WRm", "omoBWPFdKmk4", "wSowWQJcOG", "uGBcKZJdKW", "A8ogW4qTW5ZdKSk+W70", "emkcbSoiWOK", "c8o8WOxdT8kKWRH4jW", "W5dcRd3dKmozW4ddN8kA", "WPegh2ZdKG", "hGmNf2RcOmo3eq", "W5D8WOnRAgPtsSoMAmoE", "iCkcW5exW40XW5v2nCon", "pSoxW5NcSq", "y08vWPvBW79A", "iJFcHYa3W4a+WOy", "BuyuWPfeW7i", "pSoEW78s", "CKWpWOrtW78", "pSoiW7qOqW", "BtpcKK/cK8kuwmkh", "FvyDW7ZdNaZdMmkZ", "jqPfWRVcG1xcGSk5rNbSWPxcHa", "W7PKjLFcJW", "tZ7cHXJdH8oixa", "b3eTjmkHAq", "W59FWP9NW5S7zqi", "WO7cPsddSSoiW5RdNSkw", "xCo/F8kOW7FcHIRcPNtdV8oVWRVdHq", "vYXHWPhcUHrUBa", "5Qkx5RE75yQP57kg57UW5PAz6zAM5BYS", "CKamW5RdKG", "wCk/W5FcOmoGWPXBamoPWP0B", "m8ksESofjG", "W6RdNrOeBmkIomkSWONdTSolWQLZ", "WPNcPLBcL8oExq", "WQnahSoy", "cSkBW71JnW", "WRqgFSkOWQ18WOz9", "ySoLWQ0", "sJVcHxDCW6T1WRy", "sxpcJ8okWRO", "WP9Ez8kRjeC", "WQz6mSkHWQ8", "W7X+j2/cHgrQWPq", "Emo8WPHnje7cLCom", "W4juWPr2WOjGoq", "kmkhW5mvWRP1WPDjcCoYWRy4nG", "nmoFW6Sy", "WQVcKvXA", "WPqRWRyvh8oR", "W5pcVsxdNmoS", "WO5jCCk/pfykW4a", "W51ib1RcP1XkWQ8", "DrGsW73dMW7dGmkZ", "rSkIW58qW6a", "WR4Imwe", "WOOtlHWnWQzgrW", "W5z7pNtcOq", "ttb7WOdcTLfcCW", "CN3dK1VcLCkgw8kg", "wmomWRm0BG", "pSkHeSoFWOG", "y8o9WObn", "W49BWPnYW5SXzGu", "x0atW5BdKuH/", "zmk8W4W", "ESkxW6r6W68PWPO/", "eCkqm8o6WQW", "6k2q6icR57k8772L5A+P5B2/5Q2waG", "W5PnevRcQ0vFW6S", "a8kDW4O", "WPJcT1FcJCoCtG", "xbdcSdVdTq", "vmksW6H8W6O/WPSO", "W4BcPcZdV8oz", "Cu8BWPvvWRDDbG", "zCo3WPrCfvFcMSou", "WR8+jKZdUxLx", "W5hdRLJdQu7cNSkjW5S", "CCkEW7FdQmkFW5PpW5e", "WQHLh8kdWQ4", "t8o/WQKhDtLXW5q", "EmkGWRip", "dSocWPZcSG", "W4GrjbafWRHzrW", "WOj1W7zKWR1eEmoV", "tmkKWRZdOqy", "CGe/WO7cLuO2", "mSolW5NcShvjBa", "WOToESk9pfOQW4W", "W7PyW6z3zfbDtq", "sCoMWR8EFZPa", "ESkyW4/dKCkxW41FW5q", "Fvqq", "dmksW6H+W6u", "WPyezCkJ", "WP5EymkFpeC3W4S", "d8kAWPldP27cTLL0", "WQhcHCovuSoN", "Cs9QWOJcVHn0", "WQjfW7DZ", "rdVcGM8", "W5NcPKFdOLJcImku", "WQzFW61Ilbujwa", "WQW4iq", "ld7cUZfV", "ySo9WPLAnv0", "hSktWPZdT2RdTq", "W4ruWPrMWPu5BbG", "WOKvgGVcO1XjWRW", "EmoaWPngW6WKW6bP", "W5xcMItdSSoF", "qCk6W5hcTSkvW640WOK", "WQncW6z3yKf6ra", "A8ovWOjqW60U", "FCkwzmoglWa+W6u", "WP91W6PMWQW", "wCkrW50riSkgoxq", "omoQWPm", "u0xcLSoHW7y2W6Tj", "wedcJW", "W6nvWQndWQC", "W4PvevBcG19bWR8", "imkyz8oFnWX8W7G", "WPNcT1FcI8ozvCk3ma", "xqhcTaldRW", "WQv9pmkFWQOEgZy", "baG6kM3cTCo+cG", "WPSLlh/dJq", "usvkWPtcSa", "WRS/phW", "6k+u6ikB57gb772K5AYv5BYV5Q2gzq", "WRT5W7jOWPa", "qe8BW5RdJq", "mmovW60", "WR5KW6reWQm", "W5vegLZcSvG", "iSoRW41gy0tdN8kC", "qmk1W7ddImkWW7LGW7W", "WRRcIePalG", "WQ57bSkrWQC", "bCk+m8kAmar9W6u", "gGKKW5BdJMH8W6u", "uCkmWR3dSqBcRSk3W5a", "W4HjWPrhWPmIFq", "W5jzWOT2", "W656WPDge8oRWOqM", "cmkzWP7dSwJdVKvV", "vtn/WOdcTrK", "ECk5WOq", "eSo6W6KzW6ldN1Wi", "ovqDW6VdKapdH8k/", "uCkmW657", "zmk9W4BcP8kiW6u1WR8", "y8k8W5BcQ8ktW6ubWOK", "WPNcOKxcLG", "WOJcUCofA8o4W41BaW", "W5G8WRCIamoOWRBdJW", "sSkhWQJdPXVcTG", "WR5PW4LAWQ4", "W61GpMVcRW", "bqWPbG", "gamTbG", "c8k8oCoSWQNdNx/cKq", "EhSYWOb3", "kCoGWQBdO8ka", "hmkzW51EpG", "ymoBW4iRW40", "WQbch8oCW4rQ", "y8kDWOPnW6yLW5S7", "uvZcISoNW6X3W6Gp", "hmoRWPJdOSktWRjtpW", "iSksz8odlXe", "WOJcQmoqxSoP", "wedcISoJWQ1HW65h", "WO5LfCkDWQ4ucG", "o8oLW64PDq", "yCk7WROvWQu", "WRKSjNFdSG", "tmkHW4KlW7FdU0a2", "W6SwnaSnWQzqua", "gmklmIpcNCofW63dRW", "EmoVWQihwtTAW5y", "WRKJiq", "DCoiW5qGW5BdMCkjWRu", "eGaRdxC", "rWCIWO/cKv5IWR8", "n8oWW4zFy0ldN8ok", "xu3cNCowWRPWW6nB", "ESkvWOZdPdWEomkI", "ivi3fSk5", "WOtcVvm", "aCkfWR/dLwe", "dCkKl8o2WRi", "z8oLWRquCd1vW4W", "WOpcVfFcNCoeamoP", "WPhcQSo8zftcMG", "xCo/WQ5GW60UW5DK", "vCkgW5dcHSk6", "umoCWRn+h2VcOCoH", "WRPvW6C", "W5mqfaSAWQfBrq", "DbyHWPpcGLCM", "c8o9WPpdGSk1WQvj", "WPOhza", "gmoRWRDNWOtdSSks", "WO0mCCk8WQH7", "xIXMWOS", "WO5tgCk8WOy", "uWShWQNcTW", "rtZcH2rZW5DLWRW", "g0WBW5ZdIMX8WQe", "DCogW4a", "c8oYWQTNWPi", "nSoLW4rx", "W4qniH4CWQ1WtG", "lSoFWOlcTG", "qSk+W5lcOCku", "WObABa", "yCofjCkfDv0LW7xdLGbFW7lcTa", "dmkwW6j+W7mUWP0F", "WQfpW7joWR8", "WOHwCCkWpa", "h8kTW5TJjG", "rSoiW4qDW50", "kSksCa", "br9oWORcMZaUW7iIWR3dVv5RBW", "W6z0WP1d", "ymojWRuDBJfmW5y", "EaaLWP/cLa", "WP1xDCk9lr4MW40", "wmkCW5JcP8kd", "W5CSWPeEp8oP", "W5i3WR0ahmoKWRNdLq", "udxcIN9u", "6AcU55Ml5OY05P6w5PEX5PwK", "jdBcGq", "WP7cOexcLSodw8k6fW", "CmkiW5hdOSkDW4P5W4e", "u8kUW4GnW7hdKuSX", "pmoFW7CArqyZqa", "W7pcHeNdTea", "W5DDFCkMlvC", "WRuJmx3dPgrhWQS", "dCoqW7NcPe3dQCoJWOu", "6AkL55QJ5O+D5P2B5BwU6l+g5PY8", "W4OOWR8ofCoO", "Cvya", "ESoRWRyAFG", "ovOyW6FdLGBdKCk+", "ESozWQzXoG", "A8oRWQPjk2zeW5O", "WRRcKSo7wmov", "eCo+WO5jWQdcObzZ", "WPPFm8kZWQC", "WQ5VnCkbWQa", "zSkfW4OAwsGRyW", "vmkFW6r0W6yOWPap", "ASohW4u0W5JdHCkpW6S", "W4Tefv/cSKjgWR8", "vCk9W60AW5O", "dhe9W5hcLaX2AmodW7K", "sJJcHhDtW5m", "e8oQW7hcLN5cFmo1", "faGGegy", "sdxcI3m", "WO8HW5a", "WQnFW695zb4Ctq", "AYlcKHddJmoc", "BmkJW5lcP8kEW6qsWPm", "d8oRWPtdK8k8WRHqlG", "W6ajlSoyW4bUWRhcGq", "gSo2WRnhWOldSSkB", "WOmuW5mLnq", "aCkJhSoaWPy", "W7u8WQCZbq", "W6WFtSkiWPuXW6tcMa", "WRtcLePC", "FSo4WRub", "qCkfWPJdTMZdVq", "jSoOW4XrjvldKSk0", "WOn3WOzPkfmoyG", "zL0vW7VdMGm", "WRH9eCkeWQ4", "W5K3WQy6W7Hik8opWOuRoNHe", "W41obLRcOLu", "WONcOehcMCoex8kCdW", "WO7cVuFcJCoDx8k3fW", "a8oHWO7dSCk6WRrCjq", "umkJWQS2WRm", "gSogWPRdR8kC", "d8kqWQ/dLMG", "W4NcRfxdVG", "Ev46W7ZdLW", "BCowW7afsGS", "WPxdVmoNq8o/W4XibG", "jCoaW53cPN5c", "WONcSCoGBfdcLmkizq", "ymkYW5RdR8keW6K8WP4", "WOvLW7jHWOS", "W43cOLJdQ0/cNW", "rLr7vtxdSmkJdCoYWOjPW5NdHG", "gCoYWRnVW5VdVmkznq", "nSkBW4a8", "WPyAvSkMWQL8WPn2", "W5TBWOr4WPC9Ba", "5BM+77Y35l2R55E26zAM6AkR6k6Y5zoE", "BuWzWPDCW4LkbG", "cSkDW5PLoCkolw4", "c8oIWO/dTCk7W7bpja", "f8kCWPqsymovEte", "WOGwra3dVquBWOm3WOlcT1SW", "W7CXlcKT", "WPrabeVcQvucWRG", "vCknW7rlW6qIWOS", "W4bxFCk9lv02W4C", "W5bpaf7cT0zoWQC", "WR05mftdTwDgWOW", "WRJcJu5IlW", "cSkLjCo7WQ3dLx7cSq", "raBdImk9W7S1W75w", "zSkPW7hdHmk7", "uubnW5ddJgLTWQa", "WQrzW7bMEKvgeG", "zmk9W4VcTSkzW6e9WPi", "g2aCkmkeEq"];
  return rr = function() {
    return e;
  }, rr();
}
(function(e, t) {
  const n = { _0x32bd72: 594, _0x3f623a: 316, _0x271d7a: "]m4U", _0x547d79: "pyD]", _0x35e384: 433, _0x532bb7: "O[fX", _0x15e809: "@Ekg", _0xaa746d: 293, _0x44247a: "WZMi", _0x1fb05d: "II)b", _0x2ae36a: "HsBI" }, r = ue, o = e();
  for (; ; )
    try {
      if (-parseInt(r(n._0x32bd72, "1(7d")) / 1 + parseInt(r(n._0x3f623a, "vxiy")) / 2 + parseInt(r(502, n._0x271d7a)) / 3 + -parseInt(r(567, n._0x547d79)) / 4 + parseInt(r(n._0x35e384, n._0x532bb7)) / 5 * (parseInt(r(244, n._0x15e809)) / 6) + parseInt(r(n._0xaa746d, n._0x44247a)) / 7 * (-parseInt(r(544, n._0x1fb05d)) / 8) + parseInt(r(509, n._0x2ae36a)) / 9 === t) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(rr, 915731);
const Ue = {};
Ue.e = Tt(392, "1(7d"), Ue.c = "customer-001", Ue.b = Tt(446, "#ubd") + Tt(472, "fdlw") + "7", Ue.t = 3e5, Ue.h = 6e4;
var Vo = Ue;
const je = {};
je.e = "", je.c = Tt(300, ")wyC"), je.b = Tt(389, "$cN5"), je.t = 3e5, je.h = 6e4;
const Xs = Tt(243, "]m4U") + Tt(589, "Cqg7") + "叫：宁德正 13" + Tt(527, "hSaE") + "1", Nr = Tt(421, "v1uy") + Tt(482, "$cN5") + Tt(247, "Odut") + Tt(326, "1(7d") + "_", Zs = je, Ae = typeof Vo > "u" ? Zs : Vo;
function Mi(e) {
  const t = { _0x378adb: 522, _0xb23319: "O[fX", _0x550eff: 385, _0x3f2853: "()IH" }, n = Tt;
  return e ? Number[n(t._0x378adb, t._0xb23319)](e.split("")[n(t._0x550eff, t._0x3f2853)]()[n(510, "zOAL")](""), 36) : 0;
}
function tl(e) {
  const t = { _0x485bf9: 412, _0x3d1a62: "II)b", _0x112113: 388, _0x4ba20e: ")1mp", _0x599787: 538, _0x4e2af1: "coMW", _0x2a85b7: 419, _0x50f909: 493, _0x431494: "]3%q", _0x2e370f: 378, _0x34c103: 576, _0x4f3f92: 484 }, n = Tt, r = {};
  r[n(t._0x485bf9, t._0x3d1a62)] = function(i, s) {
    return i < s;
  }, r[n(t._0x112113, t._0x4ba20e)] = function(i, s) {
    return i >>> s;
  };
  const o = r;
  let a = 2166136261;
  for (let i = 0; o[n(t._0x599787, t._0x4e2af1)](i, e[n(t._0x2a85b7, "1(7d")]); i += 1) a ^= e[n(t._0x50f909, t._0x431494) + "At"](i), a = Math[n(t._0x2e370f, "d[lh")](a, 16777619);
  return o[n(t._0x34c103, "@Ekg")](a, 0)[n(t._0x4f3f92, "cyQ$")](36);
}
function cr() {
  const e = { _0x4b3d94: 356, _0x3d238e: 292, _0x229cbe: "Odut", _0x3a8ca7: 287, _0x4f7288: "$Ced" }, t = Tt, n = globalThis, r = {};
  return r[t(e._0x4b3d94, "U])I") + t(272, "Cqg7")] = "", r[t(e._0x3d238e, e._0x229cbe) + t(483, "[!2E")] = !1, r[t(e._0x3a8ca7, e._0x4f7288) + "inted"] = !1, r[t(327, "$cN5") + "Id"] = null, n[Nr] || (n[Nr] = r), n[Nr];
}
function Si() {
  const e = { _0x38831e: "Wi#e", _0xfb0da3: 286 }, t = Tt, n = { XTqMq: function(r, o) {
    return r(o);
  } };
  return t(432, e._0x38831e) + n[t(e._0xfb0da3, "1bAB")](tl, Ae.c + "|" + Ae.b + "|" + Ae.e);
}
function $o(e, t) {
  const n = { _0x568e97: 587 }, r = Tt;
  try {
    const o = Number(e?.[r(555, "j]5*")](t));
    return Number[r(n._0x568e97, "d[lh")](o) && o > 0 ? o : 0;
  } catch {
    return 0;
  }
}
function Uo(e, t, n) {
  try {
    e?.setItem(t, String(n));
  } catch {
  }
}
function Pi() {
  return { dYlrH: function(n, r) {
    return n(r);
  } }[Tt(279, ")1mp")](Mi, Ae.e) > 0;
}
function el() {
  const e = { _0x3cbf85: "wJ6q", _0x31a393: "]3%q", _0x233462: 556, _0x53d763: "WZMi", _0x500ae0: 230, _0x317f0c: "#ubd", _0x4f5d76: 461, _0x2e6d60: "qcAM", _0x4a9e0f: 344, _0x5a52e: 489, _0x15ea73: "d[lh", _0x45e89b: "Km19", _0x537a2f: 441, _0x6b6564: "hSaE", _0xf4cd34: 485, _0x2618e8: "*gSw", _0x57d85b: 535, _0x650e67: 481, _0xc59e67: 444, _0x220aba: "@Ekg", _0xdf05ac: 381, _0x5e4a40: 501, _0x473547: 590, _0x1fd86d: "qcAM", _0xc3c7ab: 407, _0xa95f9a: "Km19", _0x3e91fc: 397, _0x44ca95: "iu!h" }, t = Tt, n = { eYgxm: function(c) {
    return c();
  }, VhXGN: function(c, d) {
    return c(d);
  }, uZvYv: t(335, "1(7d"), ANJrY: function(c, d) {
    return c > d;
  }, SjUgH: function(c, d) {
    return c < d;
  }, XUrDJ: function(c, d, u) {
    return c(d, u);
  }, ZYdxk: t(592, e._0x3cbf85) + t(545, e._0x31a393), xKLPO: function(c, d, u, f) {
    return c(d, u, f);
  } }, r = n[t(e._0x233462, e._0x53d763)](cr);
  if (r[t(e._0x500ae0, e._0x317f0c) + t(e._0x4f5d76, "qC[J")]) return { valid: !1, reason: r[t(563, e._0x2e6d60) + t(449, "syt&")] };
  const o = n[t(e._0x4a9e0f, "#ubd")](Mi, Ae.e), a = {};
  if (a[t(496, "j]5*")] = !0, a[t(e._0x5a52e, e._0x15ea73)] = n[t(323, "Lm2L")], !Pi()) return a;
  const i = Date[t(474, e._0x45e89b)](), s = {};
  if (s.valid = !1, s[t(e._0x537a2f, e._0x6b6564)] = t(e._0xf4cd34, e._0x2618e8), n[t(e._0x57d85b, "^(t%")](o, 0) && i > o) return s;
  if (n[t(273, "WZMi")](typeof window, "u")) {
    const c = Si(), d = Ae.t, u = Math.max(n[t(e._0x650e67, "plQ*")]($o, window[t(322, "]3%q") + t(e._0xc59e67, "Odut")], c), $o(window["sessionS" + t(568, "1(7d")], c)), f = {};
    if (f.valid = !1, f[t(565, e._0x220aba)] = n[t(e._0xdf05ac, "^(t%")], u > i + d) return f;
    const h = Math[t(e._0x5e4a40, "Cqg7")](u, i);
    n[t(288, e._0x317f0c)](Uo, window[t(e._0x473547, ")wyC") + t(497, e._0x1fd86d)], c, h), Uo(window[t(e._0xc3c7ab, e._0xa95f9a) + "torage"], c, h);
  }
  const l = {};
  return l[t(517, e._0x31a393)] = !0, l[t(e._0x3e91fc, "9D0I")] = t(531, e._0x44ca95), l;
}
function Po(e) {
  const t = { _0x39232f: 262, _0x4728e6: "#vjV", _0x5f1d15: 518, _0x43a1af: "j]5*", _0x55858a: 528, _0x7b63c3: 451, _0x4eced0: "p9]g", _0x28c97d: 312 }, n = Tt, r = {};
  r[n(t._0x39232f, t._0x4728e6)] = n(t._0x5f1d15, "fdlw");
  const o = r, a = {};
  return a[n(488, t._0x43a1af)] = n(t._0x55858a, "qC[J"), a["clock-ro" + n(t._0x7b63c3, t._0x4eced0)] = n(t._0x28c97d, "#vjV") + "常", a[e] || o[n(262, t._0x4728e6)];
}
function nl(e) {
  const t = { _0x8afa76: 452, _0x22114d: "9D0I", _0x49c876: 513, _0x1753de: 368, _0x24376a: "pyD]", _0x501da3: 550, _0x252940: 278, _0x441779: "Lm2L", _0x3a1cd0: 386, _0x559ee9: "[!2E", _0x11363e: 231, _0x1c48dc: "qcAM", _0x2bd66f: 596, _0x7dd0a3: "1(7d", _0x3ed145: 554, _0x2ca194: "p9]g", _0x23faf5: 274, _0xa8f217: "(7oP", _0x2755fb: "k73P", _0x1f26a4: "j]5*", _0x1044f8: "WZMi", _0x4bb64d: 285, _0x3b2617: "hSaE", _0x31178d: "cyQ$", _0x334ade: 346, _0x432f3b: "]m4U", _0x5dd6c1: "fdlw", _0x5d64ca: "Wi#e", _0x5e183d: "Cqg7", _0xfc9441: 440 }, n = { _0x5722dd: 553, _0x15a62e: "X0pE", _0x2cc6b8: "iu!h", _0x43e280: 339, _0x3b12db: "cyQ$", _0x31832c: 532, _0x576dd2: "@Ekg", _0x2a1a29: 569, _0x48162c: "Km19", _0x34f396: 476, _0x1ded2d: "#ubd", _0x1ec561: 580, _0x26e60a: 494, _0x4ba5e7: "HsBI", _0x440fdb: 267, _0x1d6520: "fdlw", _0x189129: 525, _0x1a0405: 478, _0x4fa6a0: 234, _0x16ac1a: "[!2E", _0x5f24de: 442, _0x18dffc: 263, _0x3991c7: "zOAL", _0x8aa28: 282, _0x59f3ce: "#ubd", _0x5b2e65: 340, _0x1d3d2d: "1(7d", _0x2e8cff: "#ubd", _0x3ddf36: 233, _0x599fbc: 252, _0x1002be: 505, _0x5665c3: "Cqg7", _0x3d824d: "pyD]", _0x3ca046: "()IH", _0x54e1bc: 468, _0x45a6b0: "Odut", _0x5e8be5: 394, _0x33bc1c: "Mex*", _0x5a013d: 537, _0x2b0feb: "II)b", _0x373389: "]3%q", _0x1cbc3f: 458, _0x54424a: "coMW", _0x52de97: "plQ*", _0x4cf63e: 549, _0x37bbe6: "WZMi", _0x2832b0: 430, _0x4278a9: "c8Ju", _0xc1c0e2: 374, _0x2d8af4: 439, _0x554c09: "^(t%", _0x5f5759: 245, _0x561726: 573, _0x38c3a3: 296 }, r = Tt, o = { EZzpR: "role", JQzFy: "alert", BWTWx: r(t._0x8afa76, t._0x22114d) + r(536, "O[fX") + "47", RhZPg: r(t._0x49c876, "Cqg7") + r(t._0x1753de, t._0x24376a) + r(265, "HsBI"), ijTXP: r(t._0x501da3, "[!2E") + r(t._0x252940, t._0x441779), oZJOd: r(t._0x3a1cd0, t._0x559ee9) + r(t._0x11363e, "Lm2L") + r(470, t._0x1c48dc) + r(t._0x2bd66f, t._0x7dd0a3) + r(341, "II)b") + "inkMacSy" + r(405, "1(7d") + r(t._0x3ed145, t._0x2ca194) + r(t._0x23faf5, "!@zw") + r(332, t._0xa8f217), RewNj: r(479, t._0x2755fb), idakB: r(281, t._0x1f26a4) + r(564, t._0x1044f8) + "olor:#ff" + r(t._0x4bb64d, t._0x3b2617), XGxsj: function(s, l) {
    return s(l);
  }, vSmcr: "span", QVCCl: r(351, t._0x31178d) + "13520091" + r(401, "plQ*"), rHzyL: r(t._0x334ade, "vD7N") + r(238, "p9]g") + r(315, t._0x432f3b), BlpWs: function(s, l) {
    return s > l;
  }, MNaDv: r(546, t._0x5dd6c1) + r(362, "v1uy") };
  if (o[r(572, t._0x5d64ca)](typeof document, "u")) return;
  const a = () => {
    const s = r;
    if (document[s(n._0x5722dd, "wJ6q") + s(236, n._0x15a62e)](s(477, n._0x2cc6b8) + s(n._0x43e280, n._0x3b12db) + s(n._0x31832c, n._0x576dd2))) return;
    const l = document[s(n._0x2a1a29, n._0x48162c) + s(n._0x34f396, n._0x1ded2d)]("div");
    l.id = s(n._0x1ec561, "k73P") + s(309, "Mex*") + s(n._0x26e60a, n._0x4ba5e7), l[s(379, "Cqg7") + s(n._0x440fdb, n._0x1d6520)](o.EZzpR, o.JQzFy), l.style[s(486, "wJ6q")] = ["position" + s(n._0x189129, "Cqg7"), s(n._0x1a0405, "Km19"), o.BWTWx, s(n._0x4fa6a0, n._0x16ac1a) + s(435, "U])I"), o[s(n._0x5f24de, "pyD]")], s(534, "iu!h"), s(n._0x18dffc, n._0x3991c7) + s(n._0x8aa28, "coMW"), s(540, "U])I") + s(593, "syt&") + "1c", o[s(557, n._0x59f3ce)], o[s(n._0x5b2e65, n._0x1d3d2d)], s(241, n._0x2e8cff) + s(n._0x3ddf36, n._0x4ba5e7) + "r"][s(365, "Wi#e")](";");
    const c = document[s(n._0x599fbc, "Odut") + s(n._0x1002be, n._0x5665c3)](o[s(418, "pyD]")]);
    c[s(276, "k73P")][s(597, "U])I")] = o[s(582, n._0x3d824d)], c[s(359, "$cN5") + s(519, ")1mp")] = o[s(524, n._0x3ca046)](Po, e);
    const d = document[s(396, "[!2E") + s(n._0x54e1bc, n._0x45a6b0)](o[s(n._0x5e8be5, n._0x33bc1c)]);
    d["textCont" + s(530, "@Ekg")] = o[s(n._0x5a013d, "coMW")], l[s(431, n._0x2b0feb)](c, d), (document[s(384, n._0x373389)] || document[s(251, "#ubd") + s(n._0x1cbc3f, n._0x54424a)])[s(552, n._0x52de97) + s(n._0x4cf63e, n._0x37bbe6)](l), document[s(n._0x2832b0, n._0x4278a9) + s(n._0xc1c0e2, "iu!h")][s(n._0x2d8af4, n._0x554c09) + s(n._0x5f5759, "(7oP")](o[s(n._0x561726, "wJ6q")], s(n._0x38c3a3, ")wyC"));
  }, i = {};
  i[r(318, t._0x2ca194)] = !0, document[r(338, "qC[J")] ? (a(), typeof window < "u" && (window.setTimeout(a, 0), window[r(253, t._0x5e183d) + "ut"](a, 250))) : document[r(t._0xfc9441, "(7oP") + r(463, "cyQ$")](o[r(504, t._0x24376a)], a, i);
}
function Ei(e) {
  const t = { _0x583e07: 571, _0x469d3e: "wJ6q", _0x515ae8: "syt&", _0x43859e: 450, _0x2ac3d5: "$Ced", _0x5d348b: 578, _0x42b2b7: "^(t%", _0x2d4099: "c8Ju", _0x1e1ad0: "qC[J", _0x339236: "Lm2L", _0x103e1d: 350 }, n = Tt, r = { Zvreq: function(a) {
    return a();
  }, WxabY: function(a, i) {
    return a(i);
  }, cfRRm: function(a, i) {
    return a < i;
  }, yYybj: n(t._0x583e07, t._0x469d3e) + n(434, "@Ekg") + n(249, t._0x515ae8) }, o = r.Zvreq(cr);
  o[n(257, "j]5*") + "eason"] = e, nl(e), typeof console < "u" && console[n(t._0x43859e, t._0x2ac3d5)]("[Kongjia" + n(t._0x5d348b, "^(t%") + "] " + r[n(415, "pyD]")](Po, e) + (n(237, t._0x42b2b7) + n(559, "p9]g") + n(499, "v1uy"))), r[n(574, t._0x2d4099)](typeof window, "u") && typeof window[n(364, "iu!h") + n(466, t._0x1e1ad0)] == n(372, "Cqg7") && window[n(457, t._0x339236) + "Event"](new CustomEvent(r[n(t._0x103e1d, "#ubd")], { detail: { reason: e } }));
}
function jo() {
  const e = { _0x4c9366: "^(t%", _0x102912: 291, _0x2ca4a6: 380, _0x833472: "c8Ju", _0x447ee6: 451, _0x461744: "p9]g", _0x110aab: "plQ*", _0x10bf1c: "qC[J", _0x204a45: 404, _0x56b05f: "vD7N", _0xf860ab: 321, _0x3b3b54: 560, _0x352bb3: "vxiy", _0x1eead3: 541, _0x360d67: "fdlw" }, t = { _0x486d17: 307, _0x556252: "X0pE", _0x320b3e: "Km19", _0xb01212: 348, _0x3ecb1b: "Wi#e", _0x3e0f85: "coMW", _0x35ae0a: 417, _0x2df6a7: 367 }, n = { _0x145bf3: 455, _0x89551f: 443, _0x216dae: "1(7d", _0x48af18: 473, _0x56c115: "X0pE", _0x219053: "U])I", _0x1f931b: 248, _0x1c62df: "qC[J", _0x1a1ff7: 270 }, r = { _0x23e5f4: 324, _0xa60827: "Cqg7", _0x3690d8: "v1uy", _0x2c27ef: 311, _0x7e392e: 475, _0x3c1283: "Cqg7", _0x18b878: 325 }, o = Tt, a = { msBQd: o(456, e._0x4c9366), TAJPj: function(c, d) {
    return c === d;
  }, TFiGt: o(e._0x102912, "qC[J"), CatYb: o(e._0x2ca4a6, e._0x833472) + o(e._0x447ee6, e._0x461744), scSRg: o(581, e._0x110aab), mhIzy: o(542, "1(7d") + "e", HoDPQ: function(c) {
    return c();
  } };
  if (typeof window > "u" || !window[o(526, e._0x10bf1c) + "B"]) return;
  const i = a[o(e._0x204a45, e._0x56b05f)](Si), s = Date[o(e._0xf860ab, "iu!h")](), l = Ae.t;
  try {
    const c = window[o(436, e._0x110aab) + "B"][o(e._0x3b3b54, e._0x352bb3)](i, 1);
    c[o(e._0x1eead3, "$Ced") + o(371, e._0x360d67)] = () => {
      const d = o;
      c[d(r._0x23e5f4, r._0xa60827)][d(521, r._0x3690d8) + "oreNames"][d(r._0x2c27ef, "II)b")](a[d(r._0x7e392e, "c8Ju")]) || c[d(354, "Km19")][d(334, r._0x3c1283) + "jectStore"](a[d(r._0x18b878, "coMW")]);
    }, c[o(462, "O[fX") + "s"] = () => {
      const d = o, u = { KtXVl: function(x) {
        return x();
      } }, f = c[d(t._0x486d17, t._0x556252)], h = f[d(520, t._0x320b3e) + d(t._0xb01212, "plQ*")](d(460, t._0x3ecb1b), a.mhIzy), g = h.objectStore(d(566, t._0x3e0f85)), p = g[d(t._0x35ae0a, "#vjV")](a.scSRg);
      p[d(391, "vD7N") + "s"] = () => {
        const x = d, S = Number(p[x(n._0x145bf3, "]m4U")]) || 0;
        if (S > s + l)
          if (a[x(n._0x89551f, n._0x216dae)](a[x(343, "iu!h")], a[x(n._0x48af18, n._0x56c115)])) {
            Ei(a[x(507, "$Ced")]);
            return;
          } else _0x4080cb(_0x3def28 + (x(503, n._0x219053) + "at")), u[x(n._0x1f931b, "hSaE")](_0x23ff32);
        g[x(387, n._0x1c62df)](Math[x(n._0x1a1ff7, "]m4U")](S, s), a[x(319, "syt&")]);
      }, h[d(t._0x2df6a7, "cyQ$") + "te"] = () => f[d(363, "coMW")]();
    };
  } catch {
  }
}
function rl() {
  const e = { _0x2d6497: 437, _0xa1455e: 512, _0x1e5085: 250, _0x46d937: 258, _0x57a8e3: 264, _0xcb0bc0: "Odut", _0x1d0b1f: 299, _0x17d377: "#vjV" }, t = Tt, n = {};
  n[t(264, "Odut")] = function(a, i) {
    return a < i;
  };
  const r = n, o = cr();
  o[t(e._0x2d6497, "plQ*") + t(e._0xa1455e, "*gSw")] || (o[t(e._0x1e5085, "fdlw") + t(e._0x46d937, "syt&")] = !0, r[t(e._0x57a8e3, e._0xcb0bc0)](typeof console, "u") && console[t(e._0x1d0b1f, e._0x17d377)](Xs));
}
function Ko(e = "runtime") {
  const t = { _0x569502: 416, _0x3846fa: "HsBI", _0x2a91c0: "O[fX", _0x2ab804: "c8Ju", _0x3bac1c: 579, _0x5b51b6: "fdlw", _0x4ec758: 548, _0x294fab: "]3%q", _0x328b72: 320, _0x429cb3: "U])I", _0x4ddf72: 561 }, n = Tt, r = { fxxRg: function(i) {
    return i();
  }, vrWdN: function(i, s) {
    return i(s);
  } }, o = r[n(313, "@Ekg")](el);
  if (o[n(t._0x569502, t._0x3846fa)]) return !0;
  r[n(543, t._0x2a91c0)](Ei, o[n(390, t._0x2ab804)]);
  const a = new Error(Po(o[n(t._0x3bac1c, t._0x5b51b6)]) + " (" + e + ")");
  throw a[n(t._0x4ec758, t._0x294fab)] = n(t._0x328b72, "d[lh") + n(349, t._0x429cb3) + n(t._0x4ddf72, "iu!h"), a;
}
function Ti(e = Tt(588, "vD7N")) {
  const t = { _0x1e9bc5: "#vjV", _0x504bfe: 403, _0x49e924: "Lm2L", _0x2c07c4: 422, _0x17db3a: "vxiy", _0x2c5740: "1bAB", _0x553d03: 398, _0x75784f: "]m4U", _0x351c32: 425, _0x1a5023: "]m4U", _0x20b2a2: 480, _0x2c6ef9: 409, _0x376294: "[!2E", _0x375bbb: "U])I", _0x503a64: 235, _0x5018e9: "syt&", _0x23aac3: 508, _0x31837e: "Odut" }, n = { _0x28f3f3: "hSaE", _0x364a2a: 355, _0x2ac8c7: "[!2E", _0x2e99fa: 271, _0x539a4a: "plQ*", _0x124cec: 345, _0x28ad96: "$cN5", _0x71a99c: 447, _0x4b3a51: ")wyC", _0x5620f1: 406, _0x28e1a5: "]m4U", _0x3326d7: "vD7N", _0xd30373: "j]5*", _0x14b065: "Odut", _0x10717b: 445, _0x4bdb24: "Odut", _0x195b98: 411, _0x59d79c: "qC[J", _0x3cbae1: "wJ6q", _0x1e2efa: 255, _0x3607db: "cyQ$", _0x3fb152: 591, _0x1e61ca: 471, _0x2a0bdc: 395, _0x4823e1: 232, _0x79376d: 240, _0x1f47f8: 423, _0x3e557b: "coMW", _0x101305: "1(7d", _0x1eb69c: 426 }, r = Tt, o = { EeYqi: r(523, t._0x1e9bc5) + r(598, "Cqg7") + "-blocked", WSVwM: r(t._0x504bfe, t._0x49e924), yXHvG: r(t._0x2c07c4, t._0x17db3a), CERlJ: "font:16p" + r(342, t._0x2c5740) + "stem-ui," + r(t._0x553d03, t._0x75784f) + "ystem,BlinkMacSy" + r(260, "(7oP") + r(t._0x351c32, "HsBI") + r(424, t._0x1a5023) + r(562, "c8Ju"), GhygQ: function(i) {
    return i();
  }, AnFuP: function(i, s) {
    return i < s;
  }, yCJCE: r(t._0x20b2a2, "9D0I") + r(t._0x2c6ef9, "coMW"), PUwFh: function(i, s) {
    return i === s;
  }, VBRNW: r(266, t._0x376294), dTQgi: function(i) {
    return i();
  } };
  if (rl(), Ko(e + r(377, t._0x375bbb)), !Pi()) return;
  const a = cr();
  a[r(t._0x503a64, "plQ*") + r(353, t._0x5018e9)] || typeof window > "u" || (a[r(303, "@Ekg") + r(t._0x23aac3, "]m4U")] = !0, jo(), a.intervalId = window[r(410, t._0x31837e) + "val"](() => {
    const i = r;
    try {
      if (o[i(284, "wJ6q")](i(369, n._0x28f3f3), o[i(n._0x364a2a, "1bAB")])) Ko(e + (i(373, n._0x2ac8c7) + "at")), o[i(268, "fdlw")](jo);
      else {
        const s = { _0x403a1c: 515, _0x2765e5: "cyQ$", _0x4cd799: 337, _0x2c0dc3: 333, _0x360821: "Mex*", _0xa9a491: "(7oP", _0x5aab8b: 464, _0x2885c: "!@zw", _0x312ed6: 383, _0x4230a5: "pyD]", _0x500f6d: 427, _0x4e3553: "qC[J", _0x4042d0: "vD7N", _0x2d4f27: 361, _0x316018: "()IH", _0x1c2303: 254, _0x1c411e: 595, _0x1f4150: ")wyC", _0x51ce23: 302, _0x56922c: 467, _0x41cd86: "$Ced", _0x5d9c29: 259, _0x121a8a: "iu!h", _0xb4a029: 239, _0x2fab26: "plQ*", _0x56b02a: 506, _0x40e336: "syt&", _0x1a5c81: "#vjV", _0x1c7aa7: "II)b", _0x5b71be: 317, _0x44bbc9: "Km19", _0x2dfe15: "qC[J", _0x9fdefe: "Lm2L", _0x21d89e: "c8Ju", _0x43e916: "wJ6q", _0x2acaa8: 500, _0x2b96f1: "plQ*", _0x32c069: 289, _0x287e6e: 438, _0xa11bf6: 414, _0x5def61: 551, _0x54e2e1: "1bAB", _0xe9bf6d: 575, _0x104a9c: 382, _0x1292d3: "II)b", _0x45b366: "@Ekg", _0x30fe99: 570, _0x37abc1: 290, _0x598a0e: 246, _0x2497b7: "coMW" }, l = { blVPJ: axDqNc[i(n._0x2e99fa, n._0x539a4a)], ptlMA: axDqNc[i(408, "1bAB")], ciaPu: i(n._0x124cec, n._0x28ad96), RyTjZ: axDqNc[i(n._0x71a99c, n._0x4b3a51)], MXkOG: i(n._0x5620f1, n._0x28e1a5) + i(577, "#vjV"), PNkVE: "display:" + i(413, "qC[J"), fUuRv: axDqNc[i(305, "1(7d")], lUwTZ: i(308, n._0x3326d7) + "gn:center", Ompcd: function(u, f) {
          return u(f);
        }, KnAoJ: i(585, n._0xd30373) + "gjian-li" + i(547, n._0x14b065) };
        if (typeof _0x3080a0 > "u") return;
        const c = () => {
          const u = i;
          if (_0x2d5204["getEleme" + u(s._0x403a1c, "(7oP")](l.blVPJ)) return;
          const f = _0x39c11b[u(498, s._0x2765e5) + u(s._0x4cd799, "O[fX")](l[u(s._0x2c0dc3, s._0x360821)]);
          f.id = u(516, s._0xa9a491) + "-license-blocked", f[u(s._0x5aab8b, s._0x2885c) + u(s._0x312ed6, "[!2E")](l[u(229, "vxiy")], l.RyTjZ), f[u(399, s._0x4230a5)][u(s._0x500f6d, "vD7N")] = [l[u(280, s._0x4e3553)], u(328, s._0x4042d0), u(s._0x2d4f27, s._0x316018) + u(s._0x1c2303, ")wyC") + "47", l[u(s._0x1c411e, "cyQ$")], u(358, s._0x1f4150) + "ntent:center", u(s._0x51ce23, "1bAB"), u(s._0x56922c, "$Ced") + u(586, s._0x41cd86), u(429, "zOAL") + u(s._0x5d9c29, s._0x121a8a) + "1c", "color:#e" + u(s._0xb4a029, s._0x2fab26), l[u(s._0x56b02a, s._0x40e336)], l[u(459, s._0x1a5c81)]][u(490, s._0x1c7aa7)](";");
          const h = _0x416376[u(277, "U])I") + u(357, "Mex*")](u(s._0x5b71be, s._0x44bbc9));
          h.style[u(360, s._0x2dfe15)] = u(420, "qcAM") + "e:24px;c" + u(402, s._0x9fdefe) + u(366, s._0x21d89e), h[u(454, s._0x43e916) + u(487, "d[lh")] = l[u(s._0x2acaa8, s._0x2b96f1)](_0x257438, _0x439dc7);
          const g = _0x230be1[u(s._0x32c069, s._0x43e916) + "ement"](u(s._0x287e6e, "Km19"));
          g[u(465, s._0x121a8a) + "ent"] = u(s._0xa11bf6, "O[fX") + "13520091591", f[u(s._0x5def61, s._0x54e2e1)](h, g), (_0x592a0a[u(s._0xe9bf6d, s._0x316018)] || _0x46e3d6["document" + u(s._0x104a9c, s._0x1292d3)])[u(393, "9D0I") + u(376, s._0x45b366)](f), _0x18f89f[u(s._0x30fe99, "Km19") + u(306, "1bAB")][u(s._0x37abc1, s._0x360821) + u(s._0x598a0e, ")1mp")](l[u(256, s._0x2497b7)], "blocked");
        }, d = {};
        d[i(n._0x10717b, n._0x4bdb24)] = !0, _0x5e31e1.body ? (axDqNc[i(n._0x195b98, n._0x59d79c)](c), axDqNc[i(448, n._0x3cbae1)](typeof _0x35b77d, "u") && (_0x5a3e7b[i(n._0x1e2efa, n._0x3607db) + "ut"](c, 0), _0x1b4060[i(n._0x3fb152, "syt&") + "ut"](c, 250))) : _0x4b563e[i(n._0x1e61ca, "Lm2L") + i(n._0x2a0bdc, "plQ*")](axDqNc[i(n._0x4823e1, "v1uy")], c, d);
      }
    } catch {
      window[i(n._0x79376d, "syt&") + i(n._0x1f47f8, n._0x3e557b)](a[i(599, n._0x101305) + "Id"]), a[i(n._0x1eb69c, n._0x28f3f3) + "Id"] = null;
    }
  }, Ae.h));
}
Ti(Tt(330, "#vjV"));
function ue(e, t) {
  e = e - 228;
  const n = rr();
  let r = n[e];
  if (ue.dQAPHQ === void 0) {
    var o = function(c) {
      const d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let u = "", f = "";
      for (let h = 0, g, p, x = 0; p = c.charAt(x++); ~p && (g = h % 4 ? g * 64 + p : p, h++ % 4) ? u += String.fromCharCode(255 & g >> (-2 * h & 6)) : 0)
        p = d.indexOf(p);
      for (let h = 0, g = u.length; h < g; h++)
        f += "%" + ("00" + u.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(f);
    };
    const l = function(c, d) {
      let u = [], f = 0, h, g = "";
      c = o(c);
      let p;
      for (p = 0; p < 256; p++)
        u[p] = p;
      for (p = 0; p < 256; p++)
        f = (f + u[p] + d.charCodeAt(p % d.length)) % 256, h = u[p], u[p] = u[f], u[f] = h;
      p = 0, f = 0;
      for (let x = 0; x < c.length; x++)
        p = (p + 1) % 256, f = (f + u[p]) % 256, h = u[p], u[p] = u[f], u[f] = h, g += String.fromCharCode(c.charCodeAt(x) ^ u[(u[p] + u[f]) % 256]);
      return g;
    };
    ue.oZFrdP = l, ue.OGyByQ = {}, ue.dQAPHQ = !0;
  }
  const a = n[0], i = e + a, s = ue.OGyByQ[i];
  return s ? r = s : (ue.wbobkZ === void 0 && (ue.wbobkZ = !0), r = ue.oZFrdP(r, t), ue.OGyByQ[i] = r), r;
}
const ol = {
  west: -128,
  south: 7,
  east: -58,
  north: 55
}, Yo = [
  "#31c5ff",
  "#7bdcff",
  "#5b8cff",
  "#8f7cff",
  "#d665d8",
  "#ff756b",
  "#f7b955",
  "#71d88b",
  "#38d6bd",
  "#f2ec8b"
];
function t0(e, t, n = {}) {
  let r = [], o = /* @__PURE__ */ new Map(), a = 0;
  function i(F) {
    n.onStatusChange?.(F), n.onCountChange?.(r.length);
  }
  function s(F, q, K) {
    const J = Array.isArray(q.geometryInstances) ? q.geometryInstances : [q.geometryInstances];
    J.forEach((V, y) => {
      const W = typeof K == "function" ? K(V, y) : Array.isArray(K) ? K[y] : K;
      !V || !W || (V.attributes = {
        ...V.attributes || {},
        show: new t.ShowGeometryInstanceAttribute(!0)
      }, V.id = {
        allPrimitiveExample: !0,
        exampleKey: W,
        exampleIndex: y,
        geometryType: V.geometry?.constructor?.name || "Geometry"
      });
    });
    const L = F.add(new t.Primitive(q));
    return r.push(L), J.forEach((V) => {
      const y = V?.id;
      if (!y?.exampleKey) return;
      const W = o.get(y.exampleKey) || [];
      W.push({
        ...y,
        instanceId: y,
        primitive: L
      }), o.set(y.exampleKey, W);
    }), L;
  }
  function l(F) {
    const q = t.Color.fromCssColorString(
      Yo[a % Yo.length]
    ).withAlpha(F);
    return a += 1, q;
  }
  function c(F) {
    return t.ColorGeometryInstanceAttribute.fromColor(l(F));
  }
  function d(F, q, K) {
    return t.Matrix4.multiplyByUniformScale(
      t.Matrix4.multiplyByTranslation(
        t.Transforms.eastNorthUpToFixedFrame(
          t.Cartesian3.fromDegrees(F, q)
        ),
        new t.Cartesian3(0, 0, K),
        new t.Matrix4()
      ),
      9e4,
      new t.Matrix4()
    );
  }
  function u(F) {
    return new t.PerInstanceColorAppearance({
      flat: !0,
      translucent: !1,
      renderState: { lineWidth: Math.min(4, F.maximumAliasedLineWidth) }
    });
  }
  function f(F, q, K) {
    return new t.GeometryInstance({
      geometry: F,
      modelMatrix: q,
      attributes: { color: c(K) }
    });
  }
  function h(F, q, K) {
    return new t.GeometryInstance({
      geometry: F,
      modelMatrix: q,
      attributes: { color: K }
    });
  }
  function g(F, q, K) {
    const J = [], L = Math.PI / F;
    for (let V = 0; V < F * 2; V += 1) {
      const y = V % 2 === 0 ? q : K;
      J.push(new t.Cartesian2(
        Math.cos(V * L) * y,
        Math.sin(V * L) * y
      ));
    }
    return J;
  }
  function p(F) {
    const q = [];
    for (let K = 0; K < 360; K += 1) {
      const J = t.Math.toRadians(K);
      q.push(new t.Cartesian2(
        F * Math.cos(J),
        F * Math.sin(J)
      ));
    }
    return q;
  }
  function x(F, q) {
    const K = t.Rectangle.fromDegrees(-92, 20, -86, 27), J = t.Cartesian3.fromDegreesArray([
      -107,
      27,
      -107,
      22,
      -102,
      23,
      -97,
      21,
      -97,
      25
    ]), L = t.Cartesian3.fromDegrees(-80, 25), V = t.Cartesian3.fromDegrees(-72, 25), y = t.EllipsoidSurfaceAppearance.VERTEX_FORMAT;
    s(F, {
      geometryInstances: [
        new t.GeometryInstance({ geometry: new t.RectangleGeometry({
          rectangle: K,
          vertexFormat: y,
          stRotation: t.Math.toRadians(45)
        }) }),
        new t.GeometryInstance({ geometry: t.PolygonGeometry.fromPositions({
          positions: J,
          vertexFormat: y
        }) }),
        new t.GeometryInstance({ geometry: new t.EllipseGeometry({
          center: L,
          semiMinorAxis: 3e5,
          semiMajorAxis: 5e5,
          rotation: t.Math.toRadians(-40),
          stRotation: t.Math.toRadians(22),
          vertexFormat: y
        }) }),
        new t.GeometryInstance({ geometry: new t.CircleGeometry({
          center: V,
          radius: 25e4,
          stRotation: t.Math.toRadians(90),
          vertexFormat: y
        }) })
      ],
      appearance: new t.EllipsoidSurfaceAppearance({
        material: t.Material.fromType("Stripe", {
          evenColor: t.Color.fromCssColorString("#2fc8ff").withAlpha(0.72),
          oddColor: t.Color.fromCssColorString("#e8fbff").withAlpha(0.18),
          repeat: 8
        })
      })
    }, ["surface-rectangle", "surface-polygon", "surface-ellipse", "surface-circle"]), s(F, {
      geometryInstances: [
        new t.GeometryInstance({
          geometry: new t.RectangleOutlineGeometry({ rectangle: K }),
          attributes: { color: q }
        }),
        new t.GeometryInstance({
          geometry: t.PolygonOutlineGeometry.fromPositions({ positions: J }),
          attributes: { color: q }
        }),
        new t.GeometryInstance({ geometry: new t.EllipseOutlineGeometry({
          center: L,
          semiMinorAxis: 3e5,
          semiMajorAxis: 5e5,
          rotation: t.Math.toRadians(-40)
        }), attributes: { color: q } }),
        new t.GeometryInstance({
          geometry: new t.CircleOutlineGeometry({ center: V, radius: 25e4 }),
          attributes: { color: q }
        })
      ],
      appearance: new t.PerInstanceColorAppearance({ flat: !0, translucent: !1 })
    }, [
      "surface-rectangle-outline",
      "surface-polygon-outline",
      "surface-ellipse-outline",
      "surface-circle-outline"
    ]);
  }
  function S(F, q, K) {
    const J = t.PerInstanceColorAppearance.VERTEX_FORMAT, L = t.Rectangle.fromDegrees(-118, 38, -116, 40), V = t.Cartesian3.fromDegrees(-117, 35), y = { positions: t.Cartesian3.fromDegreesArray([
      -118,
      30,
      -115,
      30,
      -117.1,
      31.1,
      -118,
      33
    ]) }, W = 0, N = 7e5, R = t.Matrix4.multiplyByTranslation(
      t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(-70, 45)),
      new t.Cartesian3(0, 0, 1e5),
      new t.Matrix4()
    );
    s(F, {
      geometryInstances: [
        new t.GeometryInstance({ geometry: new t.PolygonGeometry({
          polygonHierarchy: y,
          vertexFormat: J,
          height: W,
          extrudedHeight: N
        }), attributes: { color: c(1) } }),
        new t.GeometryInstance({ geometry: new t.RectangleGeometry({
          rectangle: L,
          vertexFormat: J,
          extrudedHeight: 5e5
        }), attributes: { color: c(1) } }),
        new t.GeometryInstance({ geometry: new t.EllipseGeometry({
          center: V,
          semiMinorAxis: 1e5,
          semiMajorAxis: 2e5,
          vertexFormat: J,
          height: 1e5,
          rotation: t.Math.toRadians(90),
          extrudedHeight: 2e5
        }), attributes: { color: c(1) } }),
        new t.GeometryInstance({ geometry: new t.CylinderGeometry({
          length: 2e5,
          topRadius: 15e4,
          bottomRadius: 15e4,
          vertexFormat: J
        }), modelMatrix: R, attributes: { color: c(1) } })
      ],
      appearance: new t.PerInstanceColorAppearance({ translucent: !1, closed: !0 })
    }, [
      "extruded-polygon",
      "extruded-rectangle",
      "extruded-ellipse",
      "cylinder"
    ]), s(F, {
      geometryInstances: [
        new t.GeometryInstance({ geometry: new t.RectangleOutlineGeometry({
          rectangle: L,
          extrudedHeight: 5e5
        }), attributes: { color: K } }),
        new t.GeometryInstance({ geometry: new t.EllipseOutlineGeometry({
          center: V,
          semiMinorAxis: 1e5,
          semiMajorAxis: 2e5,
          height: 1e5,
          rotation: t.Math.toRadians(90),
          extrudedHeight: 2e5
        }), attributes: { color: K } }),
        new t.GeometryInstance({ geometry: new t.PolygonOutlineGeometry({
          polygonHierarchy: y,
          height: W,
          extrudedHeight: N
        }), attributes: { color: K } }),
        new t.GeometryInstance({ geometry: new t.CylinderOutlineGeometry({
          length: 2e5,
          topRadius: 15e4,
          bottomRadius: 15e4
        }), modelMatrix: R, attributes: { color: K } })
      ],
      appearance: u(q)
    }, [
      "extruded-rectangle-outline",
      "extruded-ellipse-outline",
      "extruded-polygon-outline",
      "cylinder-outline"
    ]);
  }
  function T(F, q, K) {
    const J = t.PerInstanceColorAppearance.VERTEX_FORMAT, L = t.BoxGeometry.fromDimensions({ dimensions: new t.Cartesian3(1, 1, 1), vertexFormat: J }), V = t.BoxOutlineGeometry.fromDimensions({ dimensions: new t.Cartesian3(1, 1, 1) }), y = new t.EllipsoidGeometry({ radii: new t.Cartesian3(0.5, 0.5, 1), vertexFormat: J }), W = new t.EllipsoidOutlineGeometry({ radii: new t.Cartesian3(0.5, 0.5, 1), stackPartitions: 6, slicePartitions: 5 }), N = new t.SphereGeometry({ radius: 0.75, vertexFormat: J }), R = new t.SphereOutlineGeometry({ radius: 0.75, stackPartitions: 6, slicePartitions: 5 }), X = [], O = [];
    for (let $ = 0; $ < 5; $ += 1) {
      const U = 1e5 + 2e5 * $, Q = d(-106, 45, U), B = d(-102, 45, U), et = d(-98, 45, U);
      X.push(f(L, Q, 1), f(y, B, 1), f(N, et, 1)), O.push(
        h(V, Q, K),
        h(W, B, K),
        h(R, et, K)
      );
    }
    s(F, {
      geometryInstances: X,
      appearance: new t.PerInstanceColorAppearance({ translucent: !1, closed: !0 })
    }, ($, U) => ["box", "ellipsoid", "sphere"][U % 3]), s(
      F,
      { geometryInstances: O, appearance: u(q) },
      ($, U) => ["box-outline", "ellipsoid-outline", "sphere-outline"][U % 3]
    );
  }
  function M(F) {
    const q = t.PerInstanceColorAppearance.VERTEX_FORMAT, K = t.Cartesian3.fromDegrees(-65, 35), J = t.Rectangle.fromDegrees(-67, 27, -63, 32), L = [];
    for (let R = 0; R < 5; R += 1) {
      const X = 2e5 * R;
      L.push(
        new t.GeometryInstance({ geometry: new t.CircleGeometry({
          center: K,
          radius: 2e5,
          height: X,
          vertexFormat: q
        }), attributes: { color: c(0.5) } }),
        new t.GeometryInstance({ geometry: new t.RectangleGeometry({
          rectangle: J,
          height: X,
          vertexFormat: q
        }), attributes: { color: c(0.5) } })
      );
    }
    s(
      F,
      { geometryInstances: L, appearance: new t.PerInstanceColorAppearance() },
      (R, X) => ["transparent-circle", "transparent-rectangle"][X % 2]
    );
    const V = t.BoxGeometry.fromDimensions({ dimensions: new t.Cartesian3(1, 1, 1), vertexFormat: q }), y = new t.EllipsoidGeometry({ radii: new t.Cartesian3(0.5, 0.5, 1), vertexFormat: q }), W = new t.SphereGeometry({ radius: 0.75, vertexFormat: q }), N = [];
    for (let R = 0; R < 5; R += 1) {
      const X = 1e5 + 2e5 * R;
      N.push(
        f(V, d(-108, 45, X), 0.5),
        f(y, d(-104, 45, X), 0.5),
        f(W, d(-100, 45, X), 0.5)
      );
    }
    s(F, {
      geometryInstances: N,
      appearance: new t.PerInstanceColorAppearance({ translucent: !0, closed: !0 })
    }, (R, X) => [
      "transparent-box",
      "transparent-ellipsoid",
      "transparent-sphere"
    ][X % 3]);
  }
  function A(F, q) {
    let K = [], J = [];
    for (let L = 0; L < 40; L += 1)
      K.push(t.Cartesian3.fromDegrees(-100 + L, 48)), J.push(l(1));
    s(F, {
      geometryInstances: new t.GeometryInstance({ geometry: new t.SimplePolylineGeometry({ positions: K, colors: J }) }),
      appearance: u(q)
    }, "simple-polyline"), K = [];
    for (let L = 0; L < 40; L += 1) K.push(t.Cartesian3.fromDegrees(-100 + L, 15));
    s(F, {
      geometryInstances: new t.GeometryInstance({ geometry: new t.PolylineGeometry({
        positions: K,
        width: 10,
        vertexFormat: t.PolylineMaterialAppearance.VERTEX_FORMAT
      }) }),
      appearance: new t.PolylineMaterialAppearance({ material: t.Material.fromType(
        t.Material.PolylineGlowType,
        { color: t.Color.fromCssColorString("#31c5ff").withAlpha(0.95), glowPower: 0.18, taperPower: 0.7 }
      ) })
    }, "glow-polyline");
    for (const L of [
      { lat: 12, colorsPerVertex: !1, exampleKey: "segment-color-polyline" },
      { lat: 9, colorsPerVertex: !0, exampleKey: "vertex-color-polyline" }
    ]) {
      K = [], J = [];
      for (let V = 0; V < 40; V += 1)
        K.push(t.Cartesian3.fromDegrees(-100 + V, L.lat)), J.push(l(1));
      s(F, {
        geometryInstances: new t.GeometryInstance({ geometry: new t.PolylineGeometry({
          positions: K,
          width: 10,
          vertexFormat: t.PolylineColorAppearance.VERTEX_FORMAT,
          colors: J,
          colorsPerVertex: L.colorsPerVertex
        }) }),
        appearance: new t.PolylineColorAppearance()
      }, L.exampleKey);
    }
  }
  function _(F, q, K) {
    s(F, {
      geometryInstances: new t.GeometryInstance({ geometry: new t.WallGeometry({
        positions: t.Cartesian3.fromDegreesArrayHeights([
          -90,
          43,
          1e5,
          -87.5,
          45,
          1e5,
          -85,
          43,
          1e5,
          -87.5,
          41,
          1e5,
          -90,
          43,
          1e5
        ])
      }) }),
      appearance: new t.MaterialAppearance({ material: t.Material.fromType("Checkerboard", {
        repeat: new t.Cartesian2(20, 6),
        evenColor: t.Color.fromCssColorString("#38d6bd").withAlpha(0.72),
        oddColor: t.Color.fromCssColorString("#082842").withAlpha(0.56)
      }) })
    }, "wall");
    const J = t.Cartesian3.fromDegreesArray([-120, 45, -125, 50, -125, 55]), L = 1e5, V = t.PerInstanceColorAppearance.VERTEX_FORMAT;
    s(F, {
      geometryInstances: [
        new t.GeometryInstance({ geometry: new t.CorridorGeometry({ positions: J, width: L, vertexFormat: V }), attributes: { color: c(1) } }),
        new t.GeometryInstance({ geometry: new t.CorridorGeometry({ positions: J, width: L, vertexFormat: V, height: 3e5, extrudedHeight: 4e5 }), attributes: { color: c(0.7) } }),
        new t.GeometryInstance({ geometry: new t.CorridorGeometry({ positions: J, width: L, vertexFormat: V, height: 7e5 }), attributes: { color: c(0.7) } })
      ],
      appearance: new t.PerInstanceColorAppearance({ translucent: !0, closed: !0 })
    }, ["corridor-ground", "corridor-extruded", "corridor-elevated"]), s(F, {
      geometryInstances: new t.GeometryInstance({ geometry: new t.CorridorOutlineGeometry({
        positions: J,
        width: L,
        height: 7e5
      }), attributes: { color: K } }),
      appearance: u(q)
    }, "corridor-outline");
  }
  function k(F, q) {
    const K = g(7, 3e4, 2e4), J = t.PerInstanceColorAppearance.VERTEX_FORMAT;
    s(F, {
      geometryInstances: [
        new t.GeometryInstance({ geometry: new t.PolylineVolumeGeometry({
          polylinePositions: t.Cartesian3.fromDegreesArray([-104, 13, -107, 18, -112, 18]),
          vertexFormat: J,
          shapePositions: p(4e4)
        }), attributes: { color: q } }),
        new t.GeometryInstance({ geometry: new t.PolylineVolumeGeometry({
          polylinePositions: t.Cartesian3.fromDegreesArray([-102, 15, -105, 20, -110, 20]),
          vertexFormat: J,
          shapePositions: K
        }), attributes: { color: c(1) } }),
        new t.GeometryInstance({ geometry: new t.PolylineVolumeGeometry({
          polylinePositions: t.Cartesian3.fromDegreesArrayHeights([-102, 15, 1e5, -105, 20, 2e5, -110, 20, 1e5]),
          vertexFormat: J,
          shapePositions: K
        }), attributes: { color: c(1) } })
      ],
      appearance: new t.PerInstanceColorAppearance({ translucent: !1, closed: !0 })
    }, ["polyline-volume-circle", "polyline-volume-star", "polyline-volume-elevated"]), s(F, {
      geometryInstances: new t.GeometryInstance({ geometry: new t.PolylineVolumeOutlineGeometry({
        polylinePositions: t.Cartesian3.fromDegreesArrayHeights([-102, 15, 1e5, -105, 20, 2e5, -110, 20, 1e5]),
        shapePositions: K
      }), attributes: { color: q } }),
      appearance: new t.PerInstanceColorAppearance({ flat: !0, translucent: !1, renderState: { lineWidth: 1 } })
    }, "polyline-volume-outline");
  }
  function C() {
    if (!e || !t)
      return [];
    P(!1);
    try {
      t.Math.setRandomNumberSeed(1234), a = 0;
      const F = e.scene, q = F.primitives, K = t.ColorGeometryInstanceAttribute.fromColor(
        t.Color.fromCssColorString("#e8fbff").withAlpha(0.92)
      );
      return x(q, K), S(q, F, K), T(q, F, K), M(q), A(q, F), _(q, F, K), k(q, K), i(`已创建 ${r.length} 组 Primitive。`), [...r];
    } catch (F) {
      throw n.onError?.(F), i("AllPrimitive 加载失败。"), F;
    }
  }
  function P(F = !0) {
    r.forEach((q) => e?.scene?.primitives?.remove(q)), r = [], o = /* @__PURE__ */ new Map(), F && i("Primitive 已清空。");
  }
  function H(F = ol) {
    e?.camera?.setView({
      destination: t.Rectangle.fromDegrees(F.west, F.south, F.east, F.north)
    });
  }
  function E(F) {
    if (!F || !e?.scene) return null;
    const q = e.scene.pick(F), K = q?.id;
    return K?.allPrimitiveExample ? {
      ...K,
      instanceId: K,
      primitive: q.primitive
    } : null;
  }
  function G(F, q) {
    const K = F?.primitive?.getGeometryInstanceAttributes?.(
      F.instanceId
    );
    return K?.show ? (K.show = t.ShowGeometryInstanceAttribute.toValue(q, K.show), e?.scene?.requestRender?.(), !0) : !1;
  }
  function I(F, q) {
    const K = o.get(F) || [];
    return K.find((J) => J.exampleIndex === q) || K[0] || null;
  }
  return {
    createAllPrimitive: C,
    clearPrimitives: P,
    focusScene: H,
    pickExample: E,
    setExampleVisible: G,
    getExampleHandle: I,
    getPrimitives: () => [...r],
    destroy: () => P(!1)
  };
}
const Jo = "kv-circular-clock-styles";
let al = 0;
const il = {
  startTime: void 0,
  stopTime: void 0,
  size: 150,
  locale: "en-US",
  timeZone: "UTC",
  minMultiplier: 0,
  maxMultiplier: 1e4,
  accentColor: "#68e7ff",
  markerColor: "#8beaff",
  boundaryMarkerColor: "#ffb454",
  trackColor: "rgba(99, 211, 235, 0.3)",
  backgroundColor: "rgba(7, 18, 26, 0.94)",
  textColor: "#f4f7f8",
  showTimeZone: !1,
  keyboardSeekStep: 0.01,
  position: "bottom-left",
  offset: 10,
  zIndex: 5,
  contentOffsetY: -8,
  controlsOffsetY: 2,
  draggable: !0,
  wheelZoom: !0,
  minScale: 0.6,
  maxScale: 2,
  wheelScaleStep: 0.1,
  timelineMarkerType: "diamond",
  timelineMarkers: []
}, on = {
  play: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 5.5 25 16 9 26.5Z"/></svg>',
  pause: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 5h5v22H8zM19 5h5v22h-5z"/></svg>',
  slower: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 6h3v20H7zM25 6 11 16l14 10z"/></svg>',
  faster: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m7 6 14 10L7 26zM22 6h3v20h-3z"/></svg>'
};
function sl(e) {
  const t = e.getElementById(Jo), n = t || e.createElement("style");
  t || (n.id = Jo, e.head.append(n)), n.textContent = `
.kv-circular-clock {
  --kv-clock-size: 300px;
  --kv-clock-accent: #68e7ff;
  --kv-clock-track: rgba(99, 211, 235, .3);
  --kv-clock-bg: rgba(7, 18, 26, .94);
  --kv-clock-color: #ff2a2a;
  --kv-clock-text: #f4f7f8;
  position: absolute;
  z-index: 5;
  box-sizing: border-box;
  width: var(--kv-clock-size);
  height: var(--kv-clock-size);
  flex: 0 0 auto;
  border: 0;
  border-radius: 50%;
  color: var(--kv-clock-text);
  background: var(--kv-clock-bg);
  box-shadow:
    0 4px 10px rgba(0,0,0,.38),
    inset 0 0 0 1px rgba(3, 13, 20, .78);
  font-family: "DIN Alternate", "Rajdhani", "Segoe UI", Arial, sans-serif;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  cursor: grab;
}
.kv-circular-clock--dragging { cursor: grabbing; }
.kv-circular-clock *,
.kv-circular-clock *::before,
.kv-circular-clock *::after { box-sizing: border-box; }
.kv-circular-clock__ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 1;
  shape-rendering: geometricPrecision;
}
.kv-circular-clock__outer-edge,
.kv-circular-clock__inner-edge {
  fill: none;
  stroke: var(--kv-clock-track);
}
.kv-circular-clock__outer-edge {
  stroke: color-mix(in srgb, var(--kv-clock-accent), transparent 18%);
  stroke-width: 2;
}
.kv-circular-clock__inner-edge {
  stroke: color-mix(in srgb, var(--kv-clock-accent), transparent 35%);
  stroke-width: 3;
  opacity: 1;
}
.kv-circular-clock__track {
  fill: none;
  stroke: var(--kv-clock-track);
  stroke-width: 9;
}
.kv-circular-clock__progress {
  fill: none;
  stroke: var(--kv-clock-accent);
  stroke-width: 7;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 80ms linear;
}
.kv-circular-clock__hit {
  fill: none;
  stroke: transparent;
  stroke-width: 28;
  cursor: pointer;
  pointer-events: stroke;
}
.kv-circular-clock__thumb-ring {
  fill: var(--kv-clock-bg);
  stroke: var(--kv-clock-accent);
  stroke-width: 3;
  filter: drop-shadow(0 0 2px var(--kv-clock-accent));
  pointer-events: none;
}
.kv-circular-clock__thumb {
  fill: #fff;
  stroke: rgba(5, 26, 35, .9);
  stroke-width: 1.5;
  pointer-events: none;
}
.kv-circular-clock__boundary-tick {
  fill: none;
  stroke: var(--kv-clock-boundary-marker);
  stroke-width: 3;
  stroke-linecap: round;
  filter: drop-shadow(0 0 3px var(--kv-clock-boundary-marker));
  pointer-events: none;
}
.kv-circular-clock__timeline-marker {
  fill: var(--kv-clock-bg);
  stroke: var(--kv-clock-marker);
  stroke-width: 3;
  stroke-linejoin: round;
  cursor: pointer;
  pointer-events: all;
  filter: drop-shadow(0 0 2px var(--kv-clock-marker));
  transition: fill .15s ease;
}
.kv-circular-clock__timeline-marker--tick {
  fill: none;
  stroke: rgb(255, 255, 255, 1);
  stroke-width: 2;
  stroke-linecap: butt;
  filter: none;
}
.kv-circular-clock__timeline-marker:hover,
.kv-circular-clock__timeline-marker:focus-visible {
  outline: none;
}
.kv-circular-clock__tooltip {
  position: absolute;
  z-index: 3;
  max-width: 180px;
  padding: 5px 8px;
  border: 1px solid color-mix(in srgb, var(--kv-clock-marker), transparent 25%);
  border-radius: 4px;
  color: var(--kv-clock-text);
  background: rgba(4, 14, 22, .94);
  box-shadow: 0 4px 14px rgba(0, 0, 0, .38);
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 8px));
}
.kv-circular-clock__tooltip[hidden] { display: none; }
.kv-circular-clock__range {
  fill: color-mix(in srgb, var(--kv-clock-text), transparent 5%);
  stroke: rgba(0, 0, 0, .78);
  stroke-width: 1.5;
  paint-order: stroke fill;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.02em;
  dominant-baseline: middle;
  pointer-events: none;
}
.kv-circular-clock__face {
  position: absolute;
  z-index: 1;
  inset: 16.6667%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  box-shadow: none;
}
.kv-circular-clock__speed {
  position: absolute;
  top: 15.5%;
  width: 100%;
  color: color-mix(in srgb, var(--kv-clock-text), transparent 5%);
  font-size: calc(var(--kv-clock-size) * .095);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,.9);
}
.kv-circular-clock__speed,
.kv-circular-clock__date,
.kv-circular-clock__time {
  transform: translateY(var(--kv-clock-content-offset-y, -8px));
}
.kv-circular-clock__date {
  margin-top: 3%;
  transform: translateY(
    calc(var(--kv-clock-content-offset-y, -8px) - 2px)
  );
  color: var(--kv-clock-text);
  font-size: calc(var(--kv-clock-size) * .075);
  font-weight: 600;
  letter-spacing: .01em;
  white-space: nowrap;
  text-shadow: 0 1px 0 rgba(0,0,0,.95);
}
.kv-circular-clock__time {
  margin-top: 3.6%;
  transform: translateY(
    calc(var(--kv-clock-content-offset-y, -8px) - 2px)
  );
  font-size: calc(var(--kv-clock-size) * .1);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: .01em;
  white-space: nowrap;
  text-shadow: 0 1px 0 rgba(0,0,0,.95);
}
.kv-circular-clock__controls {
  position: absolute;
  right: 8%;
  bottom: 10%;
  left: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  transform: translateY(
    calc(
      var(--kv-clock-content-offset-y, -8px) +
      var(--kv-clock-controls-offset-y, 2px)
    )
  );
}
.kv-circular-clock__button {
  display: inline-flex;
  width: 24%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: var(--kv-clock-text);
  background: color-mix(in srgb, var(--kv-clock-accent), transparent 94%);
  cursor: pointer;
  transition: color .15s ease, background .15s ease, transform .15s ease;
}
.kv-circular-clock__button:hover {
  color: var(--kv-clock-accent);
  background: color-mix(in srgb, var(--kv-clock-accent), transparent 88%);
}
.kv-circular-clock__button:active { transform: scale(.92); }
.kv-circular-clock__button:focus-visible {
  outline: 2px solid var(--kv-clock-accent);
  outline-offset: 1px;
}
.kv-circular-clock__button:disabled { opacity: .35; cursor: not-allowed; }
.kv-circular-clock__button svg {
  width: 74%;
  height: 74%;
  fill: currentColor;
  pointer-events: none;
}
.kv-circular-clock__button--play {
  width: 28%;
  background: color-mix(in srgb, var(--kv-clock-accent), transparent 91%);
}
@media (prefers-reduced-motion: reduce) {
  .kv-circular-clock__progress,
  .kv-circular-clock__button { transition: none; }
}`;
}
function ll(e, t) {
  return typeof e == "string" ? t.querySelector(e) : e;
}
function Qo(e, t, n) {
  if (e == null) return null;
  try {
    if (typeof e == "string") {
      let r = e.trim().replace(" ", "T");
      if (!r) throw new Error("empty time");
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(
        r
      ) && (r += "Z"), n.JulianDate.fromIso8601(r);
    }
    if (e instanceof Date || typeof e == "number") {
      const r = e instanceof Date ? e : new Date(e);
      if (Number.isNaN(r.getTime())) throw new Error("invalid date");
      return n.JulianDate.fromDate(r);
    }
    if (typeof e == "object") {
      if (typeof n.JulianDate.clone == "function")
        return n.JulianDate.clone(e);
      if (typeof e.clone == "function") return e.clone();
    }
  } catch {
  }
  throw new TypeError(
    `createCircularClock 的 ${t} 必须是有效的 ISO 时间字符串、Date、时间戳或 Cesium.JulianDate。`
  );
}
function jt(e) {
  return String(e).padStart(2, "0");
}
function fo(e, t, n) {
  if (!e.showTimeZone) return "";
  const r = n.formatToParts(t).find((a) => a.type === "timeZoneName")?.value;
  if (!r || /^(GMT|UTC)$/i.test(r)) return " +00:00";
  const o = r.match(
    /(?:GMT|UTC)?([+-])(\d{1,2})(?::?(\d{2}))?/i
  );
  return o ? ` ${o[1]}${jt(o[2])}:${jt(o[3] || 0)}` : "";
}
function or(e, t) {
  return Object.fromEntries(
    t.formatToParts(e).filter((n) => n.type !== "literal").map((n) => [n.type, n.value])
  );
}
function cl(e, t) {
  const n = or(e, t);
  return `${n.year}-${jt(n.month)}-${jt(n.day)}`;
}
function Xo(e, t, n, r) {
  const o = or(e, n);
  return `${jt(o.hour)}:${jt(o.minute)}:${jt(
    o.second
  )}${fo(t, e, r)}`;
}
function Zo(e, t, n, r, o) {
  const a = or(e, r), i = or(t, r), s = `${a.year}-${jt(a.month)}-${jt(
    a.day
  )} ${jt(a.hour)}:${jt(a.minute)}:${jt(
    a.second
  )}${fo(n, e, o)}`, l = `${i.year}-${jt(i.month)}-${jt(
    i.day
  )} ${jt(i.hour)}:${jt(i.minute)}:${jt(
    i.second
  )}${fo(n, t, o)}`;
  return `${s} - ${l}`;
}
function dl(e) {
  return Number.isFinite(e) ? `×${Math.abs(e) >= 10 ? Math.round(e) : Number(e.toFixed(2))}` : "×1";
}
function Lr(e, t, n, r) {
  const o = e.createElement("button");
  return o.type = "button", o.className = `kv-circular-clock__button ${t}`, o.setAttribute("aria-label", n), o.title = n, o.innerHTML = r, o;
}
function e0(e, t, n = {}) {
  if (!e?.clock || !t?.JulianDate)
    throw new TypeError(
      "createCircularClock 需要有效的 Cesium Viewer 和 Cesium 命名空间。"
    );
  if (typeof document > "u")
    throw new Error("createCircularClock 只能在浏览器环境中创建。");
  const r = { ...il, ...n }, o = Qo(
    r.startTime,
    "startTime",
    t
  ), a = Qo(r.stopTime, "stopTime", t);
  if (o || a) {
    const Y = o || e.clock.startTime, lt = a || e.clock.stopTime;
    if (!(t.JulianDate.secondsDifference(
      lt,
      Y
    ) > 0))
      throw new RangeError(
        "createCircularClock 的 stopTime 必须晚于 startTime。"
      );
    o && (e.clock.startTime = o), a && (e.clock.stopTime = a);
  }
  const i = e.container?.querySelector?.(".cesium-viewer") || e.container, s = ll(r.container, document) || i;
  if (!(s instanceof Element))
    throw new TypeError(
      "createCircularClock 无法找到 Cesium Viewer 的场景容器。"
    );
  const l = Number(r.minMultiplier), c = Number(r.maxMultiplier), d = Number.isFinite(l) ? Math.max(0, l) : 0, u = Number.isFinite(c) ? Math.max(d, c) : 1e4, f = Math.max(120, Number(r.size) || 150), h = Number(r.minScale), g = Number(r.maxScale), p = Number.isFinite(h) && h > 0 ? h : 0.6, x = Number.isFinite(g) && g >= p ? g : Math.max(2, p), S = Math.max(0.01, Number(r.wheelScaleStep) || 0.1), T = new Intl.DateTimeFormat(r.locale, {
    timeZone: r.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }), M = new Intl.DateTimeFormat(r.locale, {
    timeZone: r.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }), A = new Intl.DateTimeFormat(r.locale, {
    timeZone: r.timeZone,
    timeZoneName: "longOffset"
  });
  sl(document);
  const _ = `kv-clock-range-${++al}`, k = 143, C = 2 * Math.PI * k;
  let P = !1, H = !1, E = !1, G = null, I = 0, F = 0, q = 1, K = "", J = null;
  const L = document.createElement("section");
  L.className = "kv-circular-clock", L.setAttribute("role", "group"), L.setAttribute("aria-label", r.ariaLabel || "Cesium 时间控制器"), L.style.setProperty("--kv-clock-size", `${f}px`), L.style.setProperty("--kv-clock-accent", r.accentColor), L.style.setProperty("--kv-clock-marker", r.markerColor), L.style.setProperty(
    "--kv-clock-boundary-marker",
    r.boundaryMarkerColor
  ), L.style.setProperty("--kv-clock-track", r.trackColor), L.style.setProperty("--kv-clock-bg", r.backgroundColor), L.style.setProperty("--kv-clock-text", r.textColor), L.style.setProperty(
    "--kv-clock-content-offset-y",
    `${Number(r.contentOffsetY) || 0}px`
  ), L.style.setProperty(
    "--kv-clock-controls-offset-y",
    `${Number(r.controlsOffsetY) || 0}px`
  ), L.style.zIndex = String(r.zIndex);
  const V = typeof r.offset == "number" ? { x: r.offset, y: r.offset } : {
    x: Number(r.offset?.x) || 0,
    y: Number(r.offset?.y) || 0
  }, [y, W] = String(r.position).split(
    "-"
  );
  L.style[y === "top" ? "top" : "bottom"] = `${V.y}px`, L.style[W === "left" ? "left" : "right"] = `${V.x}px`, L.innerHTML = `
    <svg class="kv-circular-clock__ring" viewBox="0 0 300 300" aria-label="时间进度">
      <defs>
        <path id="${_}" d="M 73.5 241.2 A 119 119 0 1 1 226.5 241.2" />
      </defs>
      <circle class="kv-circular-clock__outer-edge" cx="150" cy="150" r="149" />
      <circle class="kv-circular-clock__track" cx="150" cy="150" r="${k}" />
      <circle class="kv-circular-clock__progress" cx="150" cy="150" r="${k}" />
      <circle class="kv-circular-clock__hit" cx="150" cy="150" r="${k}" role="slider" tabindex="0" aria-label="时间进度" aria-valuemin="0" aria-valuemax="100" />
      <circle class="kv-circular-clock__inner-edge" cx="150" cy="150" r="100" />
      <text class="kv-circular-clock__range"><textPath href="#${_}" startOffset="50%" text-anchor="middle"></textPath></text>
      <g class="kv-circular-clock__time-points"></g>
      <circle class="kv-circular-clock__thumb-ring" cx="150" cy="8" r="9" />
      <circle class="kv-circular-clock__thumb" cx="150" cy="8" r="4" />
      <path class="kv-circular-clock__boundary-tick" d="M 150 0.5 V 18" aria-label="时间轴起止位置" />
    </svg>
    <div class="kv-circular-clock__face">
      <div class="kv-circular-clock__speed"></div>
      <div class="kv-circular-clock__date"></div>
      <time class="kv-circular-clock__time"></time>
      <div class="kv-circular-clock__controls"></div>
    </div>
    <div class="kv-circular-clock__tooltip" role="tooltip" hidden></div>`;
  const N = L.querySelector(".kv-circular-clock__progress"), R = L.querySelector(".kv-circular-clock__hit"), X = L.querySelector(".kv-circular-clock__thumb-ring"), O = L.querySelector(".kv-circular-clock__thumb"), $ = L.querySelector(".kv-circular-clock__range textPath"), U = L.querySelector(
    ".kv-circular-clock__time-points"
  ), Q = L.querySelector(".kv-circular-clock__tooltip"), B = L.querySelector(".kv-circular-clock__speed"), et = L.querySelector(".kv-circular-clock__date"), it = L.querySelector(".kv-circular-clock__time"), ut = L.querySelector(".kv-circular-clock__controls");
  let Z = Array.isArray(r.timelineMarkers) ? r.timelineMarkers : [];
  N.style.strokeDasharray = `${C}`;
  const st = Lr(
    document,
    "kv-circular-clock__button--slower",
    "减速",
    on.slower
  ), nt = Lr(
    document,
    "kv-circular-clock__button--play",
    "暂停",
    on.pause
  ), rt = Lr(
    document,
    "kv-circular-clock__button--faster",
    "加速",
    on.faster
  );
  ut.append(st, nt, rt), s.append(L);
  function ct() {
    const { clock: Y } = e, lt = t.JulianDate.secondsDifference(
      Y.stopTime,
      Y.startTime
    ), pt = t.JulianDate.secondsDifference(
      Y.currentTime,
      Y.startTime
    ), ot = Number.isFinite(lt) && lt > 0 ? Math.min(1, Math.max(0, pt / lt)) : 0;
    return {
      currentTime: Y.currentTime,
      startTime: Y.startTime,
      stopTime: Y.stopTime,
      multiplier: Y.multiplier,
      shouldAnimate: !!Y.shouldAnimate,
      totalSeconds: lt,
      progress: ot
    };
  }
  function w(Y) {
    if (Y instanceof Date)
      return Number.isNaN(Y.getTime()) ? null : new Date(Y.getTime());
    if (typeof Y == "string") {
      const lt = Y.trim();
      if (!lt) return null;
      let pt = lt.replace(" ", "T");
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(pt) && (pt += "Z");
      const ot = new Date(pt);
      return Number.isNaN(ot.getTime()) ? null : ot;
    }
    if (typeof Y == "number") {
      const lt = new Date(Y);
      return Number.isNaN(lt.getTime()) ? null : lt;
    }
    if (Y && typeof Y == "object")
      try {
        const lt = t.JulianDate.toDate(Y);
        return Number.isNaN(lt.getTime()) ? null : lt;
      } catch {
        return null;
      }
    return null;
  }
  function b() {
    Q.hidden = !0;
  }
  function v(Y, lt, pt) {
    if (lt.markerType === "tick") {
      const ot = Math.cos(lt.angle), Et = Math.sin(lt.angle), Dt = k - pt - 2, Ct = k + 5;
      Y.setAttribute(
        "d",
        `M ${150 + Dt * ot} ${150 + Dt * Et} L ${150 + Ct * ot} ${150 + Ct * Et}`
      );
      return;
    }
    Y.setAttribute(
      "d",
      `M ${lt.x} ${lt.y - pt} L ${lt.x + pt} ${lt.y} L ${lt.x} ${lt.y + pt} L ${lt.x - pt} ${lt.y} Z`
    );
  }
  function D(Y) {
    Q.textContent = Y.text, Q.style.left = `${Y.x / 300 * 100}%`, Q.style.top = `${Y.y / 300 * 100}%`, Q.hidden = !1;
  }
  function z(Y, lt) {
    U.replaceChildren(), b();
    const pt = Y.getTime(), ot = lt.getTime() - pt;
    ot > 0 && Z.forEach((Et, Dt) => {
      const Ct = w(Et?.dateTime);
      if (!Ct) return;
      const Mt = (Ct.getTime() - pt) / ot;
      if (Mt < 0 || Mt > 1) return;
      const ce = Mt * Math.PI * 2 - Math.PI / 2, fe = r.timelineMarkerType === "tick" ? "tick" : "diamond", Wt = {
        item: Et,
        index: Dt,
        progress: Mt,
        angle: ce,
        markerType: fe,
        text: String(
          Et?.label || Xo(
            Ct,
            r,
            M,
            A
          )
        ),
        x: 150 + k * Math.cos(ce),
        y: 150 + k * Math.sin(ce)
      }, kt = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      kt.setAttribute(
        "class",
        `kv-circular-clock__timeline-marker kv-circular-clock__timeline-marker--${fe}`
      ), v(kt, Wt, 7), kt.setAttribute("tabindex", "0"), kt.setAttribute("role", "button"), kt.setAttribute(
        "aria-label",
        `${Wt.text}，跳转到 ${Zo(
          Ct,
          Ct,
          r,
          M,
          A
        ).split(" - ")[0]}`
      ), kt.addEventListener("pointerenter", () => {
        D(Wt);
      }), kt.addEventListener("pointerleave", () => {
        v(kt, Wt, 7), b();
      }), kt.addEventListener("focus", () => {
        D(Wt);
      }), kt.addEventListener("blur", () => {
        v(kt, Wt, 7), b();
      }), kt.addEventListener("click", (qt) => {
        qt.stopPropagation(), m(Wt.progress), kt.blur?.(), b(), r.onTimelineMarkerClick?.(Wt.item, Wt.index, ct());
      }), kt.addEventListener("keydown", (qt) => {
        qt.key !== "Enter" && qt.key !== " " || (qt.preventDefault(), m(Wt.progress), r.onTimelineMarkerClick?.(Wt.item, Wt.index, ct()));
      }), U.append(kt);
    });
  }
  function j(Y) {
    Z = Array.isArray(Y) ? Y : [], r.timelineMarkers = Z;
    const lt = ct();
    return z(
      t.JulianDate.toDate(lt.startTime),
      t.JulianDate.toDate(lt.stopTime)
    ), Z;
  }
  function tt() {
    if (P) return;
    const Y = ct(), lt = t.JulianDate.toDate(Y.currentTime), pt = t.JulianDate.toDate(Y.startTime), ot = t.JulianDate.toDate(Y.stopTime), Et = Y.progress * Math.PI * 2 - Math.PI / 2;
    N.style.strokeDashoffset = `${C * (1 - Y.progress)}`;
    const Dt = String(150 + k * Math.cos(Et)), Ct = String(150 + k * Math.sin(Et));
    X.setAttribute("cx", Dt), X.setAttribute("cy", Ct), O.setAttribute("cx", Dt), O.setAttribute("cy", Ct), R.setAttribute(
      "aria-valuenow",
      String(Math.round(Y.progress * 100))
    ), B.textContent = r.formatMultiplier ? r.formatMultiplier(Y.multiplier, Y) : dl(Y.multiplier), et.textContent = r.formatDate ? r.formatDate(lt, Y) : cl(lt, T), it.textContent = r.formatTime ? r.formatTime(lt, Y) : Xo(
      lt,
      r,
      M,
      A
    ), it.dateTime = lt.toISOString();
    const Mt = `${pt.getTime()}|${ot.getTime()}`;
    Mt !== K && ($.textContent = r.formatRange ? r.formatRange(pt, ot, Y) : Zo(
      pt,
      ot,
      r,
      M,
      A
    ), K = Mt, z(pt, ot)), Y.shouldAnimate !== J && (nt.innerHTML = Y.shouldAnimate ? on.pause : on.play, nt.setAttribute(
      "aria-label",
      Y.shouldAnimate ? "暂停" : "播放"
    ), nt.setAttribute("aria-pressed", String(Y.shouldAnimate)), nt.title = Y.shouldAnimate ? "暂停" : "播放", J = Y.shouldAnimate), st.disabled = Y.multiplier <= d, rt.disabled = Y.multiplier >= u, R.style.cursor = Y.totalSeconds > 0 ? "pointer" : "not-allowed", r.onTimeChange?.(Y);
  }
  function at(Y) {
    const lt = ct();
    return r.onControl?.(Y, lt), lt;
  }
  function dt() {
    e.scene?.requestRender?.();
  }
  function gt() {
    e.clock.shouldAnimate = !0, tt(), dt(), r.onPlayChange?.(!0, ct()), at("play");
  }
  function yt() {
    e.clock.shouldAnimate = !1, tt(), dt(), r.onPlayChange?.(!1, ct()), at("pause");
  }
  function vt() {
    return e.clock.shouldAnimate ? yt() : gt(), e.clock.shouldAnimate;
  }
  function bt(Y) {
    const lt = Number(Y);
    if (!Number.isFinite(lt)) return e.clock.multiplier;
    const pt = Math.min(u, Math.max(d, lt));
    return e.clock.multiplier = pt, tt(), dt(), r.onMultiplierChange?.(pt, ct()), at("multiplier"), pt;
  }
  function Pt() {
    const Y = Math.max(
      d,
      Number(e.clock.multiplier) || 0
    );
    if (Y <= 1) return bt(d);
    const lt = 2 ** Math.floor(Math.log2(Y));
    return bt(Y <= lt ? lt / 2 : lt);
  }
  function At() {
    const Y = Math.max(
      d,
      Number(e.clock.multiplier) || 0
    );
    if (Y < 1) return bt(1);
    const lt = 2 ** Math.floor(Math.log2(Y));
    return bt(lt * 2);
  }
  function m(Y) {
    const lt = ct();
    if (!(lt.totalSeconds > 0)) return lt.currentTime;
    const pt = Math.min(1, Math.max(0, Number(Y) || 0));
    e.clock.currentTime = t.JulianDate.addSeconds(
      e.clock.startTime,
      lt.totalSeconds * pt,
      new t.JulianDate()
    ), tt();
    const ot = ct();
    return r.onSeek?.(pt, ot), at("seek"), e.scene?.requestRender?.(), e.clock.currentTime;
  }
  function ht(Y) {
    const lt = L.getBoundingClientRect(), pt = Y.clientX - lt.left - lt.width / 2, ot = Y.clientY - lt.top - lt.height / 2;
    let Et = Math.atan2(ot, pt) + Math.PI / 2;
    Et < 0 && (Et += Math.PI * 2), m(Et / (Math.PI * 2));
  }
  function ft(Y) {
    ct().totalSeconds > 0 && (H = !0, R.setPointerCapture?.(Y.pointerId), ht(Y), Y.preventDefault());
  }
  function wt(Y) {
    H && (ht(Y), Y.preventDefault());
  }
  function xt(Y) {
    H = !1, R.hasPointerCapture?.(Y.pointerId) && R.releasePointerCapture(Y.pointerId);
  }
  function _t(Y) {
    return !!Y?.closest?.(
      ".kv-circular-clock__button, .kv-circular-clock__hit, .kv-circular-clock__timeline-marker"
    );
  }
  function St() {
    const Y = Number.parseFloat(L.style.left), lt = Number.parseFloat(L.style.top);
    return {
      left: Number.isFinite(Y) ? Y : 0,
      top: Number.isFinite(lt) ? lt : 0
    };
  }
  function Ot(Y, lt) {
    const pt = s.getBoundingClientRect(), ot = L.getBoundingClientRect(), Et = Math.max(0, pt.width - ot.width), Dt = Math.max(0, pt.height - ot.height), Ct = Math.min(
      Et,
      Math.max(0, Y - pt.left - I)
    ), Mt = Math.min(
      Dt,
      Math.max(0, lt - pt.top - F)
    );
    return L.style.left = `${Ct}px`, L.style.top = `${Mt}px`, { left: Ct, top: Mt };
  }
  function Vt(Y) {
    const lt = Number(Y);
    if (!Number.isFinite(lt)) return q;
    const pt = s.getBoundingClientRect(), ot = L.getBoundingClientRect(), Dt = Math.min(
      pt.width || Number.POSITIVE_INFINITY,
      pt.height || Number.POSITIVE_INFINITY
    ) / f, Ct = Math.max(
      p,
      Math.min(x, Dt)
    ), Mt = Math.min(
      Ct,
      Math.max(p, lt)
    );
    if (Math.abs(Mt - q) < 1e-4) return q;
    const ce = ot.left - pt.left + ot.width / 2, fe = ot.top - pt.top + ot.height / 2, Wt = f * Mt, kt = Math.max(0, pt.width - Wt), qt = Math.max(0, pt.height - Wt), zt = Math.min(kt, Math.max(0, ce - Wt / 2)), ne = Math.min(qt, Math.max(0, fe - Wt / 2));
    q = Mt, L.style.setProperty("--kv-clock-size", `${Wt}px`), L.style.left = `${zt}px`, L.style.top = `${ne}px`, L.style.right = "", L.style.bottom = "";
    const _e = { left: zt, top: ne };
    return r.onScaleChange?.(q, Wt, _e, ct()), q;
  }
  function It(Y) {
    if (!r.wheelZoom || !Y.deltaY) return;
    Y.preventDefault(), Y.stopPropagation();
    const lt = Y.deltaY < 0 ? 1 : -1;
    Vt(Number((q + lt * S).toFixed(3)));
  }
  function le(Y) {
    if (!r.draggable || Y.button !== void 0 && Y.button !== 0 || _t(Y.target))
      return;
    const lt = L.getBoundingClientRect(), pt = s.getBoundingClientRect();
    E = !0, G = Y.pointerId, I = Y.clientX - lt.left, F = Y.clientY - lt.top, L.style.left = `${lt.left - pt.left}px`, L.style.top = `${lt.top - pt.top}px`, L.style.right = "", L.style.bottom = "", L.classList?.add("kv-circular-clock--dragging"), L.setPointerCapture?.(Y.pointerId), Y.preventDefault();
  }
  function Yt(Y) {
    if (!E || Y.pointerId !== G) return;
    const lt = Ot(Y.clientX, Y.clientY);
    r.onDrag?.(lt, ct()), Y.preventDefault();
  }
  function Jt(Y) {
    !E || Y.pointerId !== G || (E = !1, G = null, L.classList?.remove("kv-circular-clock--dragging"), L.hasPointerCapture?.(Y.pointerId) && L.releasePointerCapture(Y.pointerId), r.onPositionChange?.(St(), ct()));
  }
  function ee(Y) {
    const lt = Math.min(
      1,
      Math.max(1e-3, Number(r.keyboardSeekStep) || 0.01)
    );
    if (Y.key === "Home") m(0);
    else if (Y.key === "End") m(1);
    else if (Y.key === "ArrowLeft" || Y.key === "ArrowDown")
      m(ct().progress - lt);
    else if (Y.key === "ArrowRight" || Y.key === "ArrowUp")
      m(ct().progress + lt);
    else
      return;
    Y.preventDefault();
  }
  st.addEventListener("click", Pt), nt.addEventListener("click", vt), rt.addEventListener("click", At), L.addEventListener("wheel", It, { passive: !1 }), L.addEventListener("pointerdown", le), L.addEventListener("pointermove", Yt), L.addEventListener("pointerup", Jt), L.addEventListener("pointercancel", Jt), R.addEventListener("pointerdown", ft), R.addEventListener("pointermove", wt), R.addEventListener("pointerup", xt), R.addEventListener("pointercancel", xt), R.addEventListener("keydown", ee);
  const re = e.clock.onTick.addEventListener(tt);
  tt();
  function Bt() {
    return P ? !1 : (P = !0, H = !1, E = !1, G !== null && L.hasPointerCapture?.(G) && L.releasePointerCapture(G), G = null, re?.(), st.removeEventListener("click", Pt), nt.removeEventListener("click", vt), rt.removeEventListener("click", At), L.removeEventListener("wheel", It), L.removeEventListener("pointerdown", le), L.removeEventListener("pointermove", Yt), L.removeEventListener("pointerup", Jt), L.removeEventListener("pointercancel", Jt), R.removeEventListener("pointerdown", ft), R.removeEventListener("pointermove", wt), R.removeEventListener("pointerup", xt), R.removeEventListener("pointercancel", xt), R.removeEventListener("keydown", ee), b(), Z = [], U.replaceChildren(), ut.replaceChildren(), L.remove(), !0);
  }
  return {
    element: L,
    play: gt,
    pause: yt,
    togglePlay: vt,
    slower: Pt,
    faster: At,
    setMultiplier: bt,
    setScale: Vt,
    getScale: () => q,
    setTimelineMarkers: j,
    seek: m,
    refresh: tt,
    getState: ct,
    destroy: Bt
  };
}
const ul = "Earth", hl = {
  type: "cone",
  topRadius: 0,
  bottomRadius: void 0,
  swathWidth: void 0,
  fov: 30,
  color: "#ff3b30",
  displayMode: "solid",
  show: !0,
  solidAlpha: 0.28,
  radarAlpha: 0.82,
  repeat: 30,
  thickness: 0.02,
  duration: 1500,
  offset: 0,
  surface: "ellipsoid",
  topSurface: !0,
  bottomSurface: !0,
  footprintMode: "auto",
  surfaceTolerance: 1e4,
  outline: !1
}, fl = {
  type: "frustum",
  fov: 30,
  aspectRatio: 1.25,
  bottomWidth: void 0,
  bottomHeight: void 0,
  repeat: 3,
  thickness: 0.04,
  footprintEffect: !0,
  footprintRepeat: 10,
  footprintWidth: 0.8,
  footprintAlpha: 0.14,
  outlineWidth: 2,
  outlineAlpha: 0.65,
  animationDirection: "+"
}, Ir = "radarPrimitive", Rr = "frustumScanMaterial", Fr = "frustumFootprintMaterial", gl = `
  uniform vec4 color;
  uniform float repeat;
  uniform float offset;
  uniform float thickness;
  czm_material czm_getMaterial(czm_materialInput materialInput) {
    czm_material material = czm_getDefaultMaterial(materialInput);
    float spacing = 1.0 / repeat;
    float distanceToCenter = distance(materialInput.st, vec2(0.5));
    float phase = mod(distanceToCenter + offset - time, spacing);
    float alpha = step(spacing * (1.0 - thickness), phase);
    material.diffuse = color.rgb;
    material.alpha = alpha * color.a;
    return material;
  }
`, pl = `
  uniform vec4 color;
  uniform float repeat;
  uniform float offset;
  uniform float thickness;
  uniform float direction;
  czm_material czm_getMaterial(czm_materialInput materialInput) {
    czm_material material = czm_getDefaultMaterial(materialInput);
    float coordinate = (
      materialInput.st.t + offset - direction * time
    ) * repeat;
    float pattern = fract(coordinate);
    float distanceToBand = min(pattern, 1.0 - pattern);
    float pixel = max(fwidth(coordinate), 0.0001);
    float halfThickness = max(thickness, 0.001) * 0.5;
    float alpha = 1.0 - smoothstep(
      halfThickness,
      halfThickness + pixel,
      distanceToBand
    );
    material.diffuse = color.rgb;
    material.alpha = alpha * color.a;
    return material;
  }
`, ml = `
  uniform vec4 color;
  uniform float repeat;
  uniform float offset;
  uniform float width;
  uniform float direction;
  czm_material czm_getMaterial(czm_materialInput materialInput) {
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec2 centered = abs(materialInput.st - vec2(0.5)) * 2.0;
    float squareDistance = max(centered.x, centered.y);
    float coordinate = (squareDistance + offset - direction * time) * repeat;
    float pattern = fract(coordinate);
    float distanceToLine = min(pattern, 1.0 - pattern);
    float pixel = max(fwidth(coordinate), 0.0001);
    float halfLineWidth = max(width, 0.5) * pixel * 0.5;
    float alpha = 1.0 - smoothstep(
      halfLineWidth,
      halfLineWidth + pixel,
      distanceToLine
    );
    material.diffuse = color.rgb;
    material.alpha = alpha * color.a;
    return material;
  }
`, ta = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap();
function n0(e, t, n = {}) {
  if (!e || !t)
    throw new TypeError("createConeManager 必须传入 viewer 和 Cesium。");
  const r = vl(t), o = _l(t), a = Ml(t), i = /* @__PURE__ */ new Map();
  let s = 0;
  function l(y) {
    n.onStatusChange?.(y);
  }
  function c() {
    n.onCountChange?.(i.size);
  }
  function d() {
    e.scene?.requestRender?.();
  }
  function u(y = {}) {
    if (y.start == null)
      throw new TypeError(
        "addCone 必须传入 start（开始坐标、Entity 或元素 ID）。"
      );
    if (y.end == null && (!y.direction || !ae(y.length)))
      throw new TypeError(
        "没有传入 end 时，必须同时传入 direction 和大于 0 的 length。"
      );
    const W = String(y.id ?? `cone-${++s}`);
    i.has(W) && P(W, !1);
    const N = yl(n, y, W), R = f(N);
    return i.set(W, R), c(), l(`已创建 ${i.size} 个扫描体。`), d(), R;
  }
  function f(y) {
    const W = {
      time: null,
      pose: null,
      invalidReason: ""
    }, N = {
      id: y.id,
      options: y,
      solidEntity: null,
      radarEntity: null,
      solidEntities: [],
      radarEntities: [],
      coneFootprintEntities: [],
      frustumScanEntities: [],
      frustumFootprintEntities: [],
      getPose(Z = e.clock.currentTime) {
        return R(Z);
      },
      update(Z = {}) {
        return O(Z);
      },
      setVisible(Z) {
        return y.show = !!Z, X(), d(), N;
      },
      setDisplayMode(Z) {
        return go(Z), y.displayMode = Z, d(), N;
      },
      setColor(Z) {
        return y.color = Z, $(), d(), N;
      },
      flyTo() {
        return I(N);
      },
      remove() {
        return P(N.id);
      }
    };
    y.type === "frustum" ? it() : U();
    function R(Z) {
      const st = Z || e.clock.currentTime;
      if (W.time && t.JulianDate.equals(W.time, st))
        return W.pose;
      W.time = t.JulianDate.clone(st, W.time);
      const nt = h(y, st);
      return W.pose = nt.pose, nt.error && nt.error !== W.invalidReason ? (W.invalidReason = nt.error, n.onUnavailable?.({
        id: y.id,
        message: nt.error
      })) : nt.error || (W.invalidReason = ""), W.pose;
    }
    function X() {
      W.time = null, W.pose = null;
    }
    function O(Z) {
      if (Z.id != null && String(Z.id) !== y.id)
        throw new TypeError("扫描体 id 创建后不能修改。");
      if (Z.start === null)
        throw new TypeError("start 不能设置为空。");
      const st = Z.type ?? y.type, nt = Z.animation?.footprint ?? Z.footprintEffect ?? y.footprintEffect;
      if (st !== y.type || y.type === "frustum" && !!nt != !!y.footprintEffect)
        return u({ ...y, ...Z, id: y.id });
      if (Object.assign(y, Z, xl(Z.animation)), delete y.animation, ki(y), y.type === "cone")
        for (const rt of [N.solidEntity, N.radarEntity])
          rt.name = y.name || rt.name, rt.cylinder.topRadius = y.topRadius, rt.cylinder.topSurface = y.topSurface, rt.cylinder.outline = y.outline;
      else
        N.solidEntities.forEach((rt) => {
          rt.polyline && (rt.polyline.width = y.outlineWidth);
        }), N.frustumFootprintEntities.forEach((rt) => {
          rt.polyline && (rt.polyline.width = y.footprintWidth);
        });
      return $(), X(), d(), N;
    }
    function $() {
      if (y.type === "cone") {
        N.solidEntity.cylinder.material = F(y), N.radarEntity.cylinder.material = q(y), N.coneFootprintEntities.forEach((Z) => {
          Z.ellipse.material = Z.id.endsWith("-solid-footprint") ? F(y) : q(y);
        });
        return;
      }
      N.solidEntities.forEach((Z) => {
        Z.polygon ? Z.polygon.material = F(y) : Z.polyline && (Z.polyline.material = K(y));
      }), N.frustumScanEntities.forEach((Z) => {
        Z.polygon.material = J(y);
      }), N.frustumFootprintEntities.forEach((Z) => {
        Z.polyline.material = L(y);
      });
    }
    function U() {
      const Z = new t.CallbackProperty((D, z) => {
        const j = B(D);
        return j ? t.Cartesian3.clone(j.center, z) : void 0;
      }, !1), st = new t.CallbackProperty(
        (D, z) => {
          const j = R(D);
          return j ? t.Quaternion.clone(j.orientation, z) : void 0;
        },
        !1
      ), nt = new t.CallbackProperty(
        (D) => B(D)?.length,
        !1
      ), rt = new t.CallbackProperty((D) => Q(D), !1);
      N.solidEntity = e.entities.add({
        id: `${y.id}-solid`,
        name: y.name || `${y.id} 静态圆锥`,
        position: Z,
        orientation: st,
        cylinder: {
          length: nt,
          topRadius: y.topRadius,
          bottomRadius: rt,
          topSurface: y.topSurface,
          bottomSurface: y.bottomSurface,
          outline: y.outline,
          show: new t.CallbackProperty(
            (D) => !!(y.show && En(y.displayMode) && R(D)),
            !1
          ),
          material: F(y)
        }
      }), N.radarEntity = e.entities.add({
        id: `${y.id}-radar`,
        name: y.name || `${y.id} 动态圆锥`,
        position: Z,
        orientation: st,
        cylinder: {
          length: nt,
          topRadius: y.topRadius,
          bottomRadius: rt,
          topSurface: y.topSurface,
          bottomSurface: y.bottomSurface,
          outline: y.outline,
          show: new t.CallbackProperty(
            (D) => !!(y.show && Tn(y.displayMode) && R(D)),
            !1
          ),
          material: q(y)
        }
      }), N.solidEntities = [N.solidEntity], N.radarEntities = [N.radarEntity];
      const ct = new t.CallbackProperty(
        (D, z) => {
          const j = R(D);
          return j ? t.Cartesian3.clone(j.end, z) : void 0;
        },
        !1
      ), w = (D, z, j) => e.entities.add({
        id: `${y.id}-${D}-footprint`,
        name: y.name || `${y.id} 地表扫描覆盖`,
        position: ct,
        ellipse: {
          semiMajorAxis: rt,
          semiMinorAxis: rt,
          height: 0,
          heightReference: t.HeightReference.CLAMP_TO_GROUND,
          classificationType: t.ClassificationType.TERRAIN,
          show: new t.CallbackProperty(
            (tt) => !!(y.show && z(y.displayMode) && et(tt)),
            !1
          ),
          material: j
        }
      }), b = w(
        "solid",
        En,
        F(y)
      ), v = w(
        "radar",
        Tn,
        q(y)
      );
      N.coneFootprintEntities = [b, v], N.solidEntities.push(b), N.radarEntities.push(v);
    }
    function Q(Z) {
      if (ae(y.swathWidth))
        return Number(y.swathWidth) / 2;
      if (ae(y.bottomRadius))
        return Number(y.bottomRadius);
      const st = R(Z);
      if (!st)
        return;
      const nt = t.Math.toRadians(Number(y.fov)) / 2;
      return Number(y.topRadius) + st.length * Math.tan(nt);
    }
    function B(Z) {
      const st = R(Z);
      if (!st || !et(Z))
        return st;
      const nt = Q(Z), rt = t.Ellipsoid.WGS84.minimumRadius, ct = Math.min(Number(nt) || 0, rt * 0.999), b = rt - Math.sqrt(rt * rt - ct * ct) + 50, v = t.Cartesian3.normalize(
        t.Cartesian3.subtract(
          st.end,
          st.start,
          new t.Cartesian3()
        ),
        new t.Cartesian3()
      ), D = t.Cartesian3.add(
        st.end,
        t.Cartesian3.multiplyByScalar(
          v,
          b,
          new t.Cartesian3()
        ),
        new t.Cartesian3()
      );
      return {
        ...st,
        center: t.Cartesian3.midpoint(
          st.start,
          D,
          new t.Cartesian3()
        ),
        length: t.Cartesian3.distance(st.start, D)
      };
    }
    function et(Z) {
      if (!y.bottomSurface || y.footprintMode === "plane")
        return !1;
      if (y.footprintMode === "surface")
        return !!R(Z);
      const st = R(Z);
      if (!st)
        return !1;
      const nt = t.Ellipsoid.WGS84.cartesianToCartographic(
        st.end
      );
      return !!(nt && Math.abs(nt.height) <= Number(y.surfaceTolerance));
    }
    function it() {
      const Z = [
        [0, 1, 2],
        [0, 2, 3],
        [0, 3, 4],
        [0, 4, 1],
        [1, 2, 3, 4]
      ], st = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1]
      ];
      if (Z.forEach((nt, rt) => {
        N.solidEntities.push(
          e.entities.add({
            id: `${y.id}-frustum-face-${rt}`,
            name: y.name || `${y.id} 静态视锥面`,
            polygon: {
              hierarchy: new t.CallbackProperty((ct) => {
                const w = ut(ct);
                return new t.PolygonHierarchy(
                  nt.map((b) => w[b]).filter(Boolean)
                );
              }, !1),
              perPositionHeight: !0,
              arcType: t.ArcType.NONE,
              show: new t.CallbackProperty(
                (ct) => !!(y.show && En(y.displayMode) && R(ct)),
                !1
              ),
              material: F(y)
            }
          })
        );
      }), st.forEach((nt, rt) => {
        N.solidEntities.push(
          e.entities.add({
            id: `${y.id}-frustum-edge-${rt}`,
            name: y.name || `${y.id} 视锥轮廓`,
            polyline: {
              positions: new t.CallbackProperty((ct) => {
                const w = ut(ct);
                return nt.map((b) => w[b]).filter(Boolean);
              }, !1),
              arcType: t.ArcType.NONE,
              width: y.outlineWidth,
              show: new t.CallbackProperty(
                (ct) => !!(y.show && En(y.displayMode) && R(ct)),
                !1
              ),
              material: K(y)
            }
          })
        );
      }), Z.slice(0, 4).forEach((nt, rt) => {
        const ct = e.entities.add({
          id: `${y.id}-frustum-scan-${rt}`,
          name: y.name || `${y.id} 动态视锥扫描面`,
          polygon: {
            hierarchy: new t.CallbackProperty((w) => {
              const b = ut(w);
              return new t.PolygonHierarchy(
                nt.map((v) => b[v]).filter(Boolean)
              );
            }, !1),
            textureCoordinates: new t.PolygonHierarchy([
              new t.Cartesian2(0.5, 0),
              new t.Cartesian2(0, 1),
              new t.Cartesian2(1, 1)
            ]),
            perPositionHeight: !0,
            arcType: t.ArcType.NONE,
            show: new t.CallbackProperty(
              (w) => !!(y.show && Tn(y.displayMode) && R(w)),
              !1
            ),
            material: J(y)
          }
        });
        N.frustumScanEntities.push(ct), N.radarEntities.push(ct);
      }), y.footprintEffect) {
        const nt = e.entities.add({
          id: `${y.id}-frustum-footprint`,
          name: y.name || `${y.id} 视锥底部四边形动态材质`,
          polygon: {
            hierarchy: new t.CallbackProperty((rt) => {
              const ct = ut(rt);
              return new t.PolygonHierarchy(ct.slice(1));
            }, !1),
            textureCoordinates: new t.PolygonHierarchy([
              new t.Cartesian2(0, 1),
              new t.Cartesian2(1, 1),
              new t.Cartesian2(1, 0),
              new t.Cartesian2(0, 0)
            ]),
            perPositionHeight: !0,
            arcType: t.ArcType.NONE,
            show: new t.CallbackProperty(
              (rt) => !!(y.show && Tn(y.displayMode) && R(rt)),
              !1
            ),
            material: L(y)
          }
        });
        N.frustumFootprintEntities.push(nt), N.radarEntities.push(nt);
      }
      N.solidEntity = N.solidEntities[0] || null, N.radarEntity = N.radarEntities[0] || null;
    }
    function ut(Z) {
      const st = R(Z);
      return st ? k(st, y) : [];
    }
    return N;
  }
  function h(y, W) {
    const N = g(y.start, W);
    if (!N)
      return {
        pose: null,
        error: `圆锥体 ${y.id} 的 start 暂无有效位置。`
      };
    let R;
    if (ra(y.end)) {
      const U = y.direction ? T(N, y.direction) : M(N);
      if (R = A(N, U, y.surface), !R)
        return {
          pose: null,
          error: `圆锥体 ${y.id} 的扫描方向没有与地球相交。`
        };
    } else if (y.end != null) {
      if (R = g(y.end, W), !R)
        return {
          pose: null,
          error: `圆锥体 ${y.id} 的 end 暂无有效位置。`
        };
    } else {
      const U = T(N, y.direction);
      R = t.Cartesian3.add(
        N,
        t.Cartesian3.multiplyByScalar(
          U,
          y.length,
          new t.Cartesian3()
        ),
        new t.Cartesian3()
      );
    }
    const X = t.Cartesian3.distance(N, R);
    if (!Number.isFinite(X) || X <= 0)
      return {
        pose: null,
        error: `圆锥体 ${y.id} 的起点和终点不能重合。`
      };
    const O = t.Cartesian3.midpoint(
      N,
      R,
      new t.Cartesian3()
    ), $ = _(
      N,
      R,
      Number(y.direction?.roll ?? 0)
    );
    return {
      pose: {
        start: t.Cartesian3.clone(N),
        end: t.Cartesian3.clone(R),
        center: O,
        length: X,
        orientation: $
      },
      error: ""
    };
  }
  function g(y, W) {
    return y == null || ra(y) ? null : y instanceof t.Cartesian3 || oa(y) ? t.Cartesian3.clone(y) : Array.isArray(y) && y.length >= 2 ? S(y[0], y[1], y[2] ?? 0) : typeof y == "function" ? p(y(W, e, t), W) : typeof y == "string" ? x(e.entities.getById(y), W) : y.entity ? x(y.entity, W) : y.entityId != null ? x(
      e.entities.getById(String(y.entityId)),
      W
    ) : zr(y) ? S(
      y.lon ?? y.lng ?? y.longitude,
      y.lat ?? y.latitude,
      y.height ?? y.alt ?? 0
    ) : typeof n.resolvePosition == "function" ? p(
      n.resolvePosition(y, W, { viewer: e, Cesium: t }),
      W
    ) : null;
  }
  function p(y, W) {
    return y == null || y === !1 ? null : y?.position && !zr(y) ? x(y, W) : y instanceof t.Cartesian3 || oa(y) ? t.Cartesian3.clone(y) : Array.isArray(y) ? S(y[0], y[1], y[2] ?? 0) : zr(y) ? S(
      y.lon ?? y.lng ?? y.longitude,
      y.lat ?? y.latitude,
      y.height ?? y.alt ?? 0
    ) : null;
  }
  function x(y, W) {
    if (!y?.position)
      return null;
    const N = t.Property.getValueOrUndefined(y.position, W);
    return N ? t.Cartesian3.clone(N) : null;
  }
  function S(y, W, N) {
    const R = Number(y), X = Number(W), O = Number(N);
    return [R, X, O].every(Number.isFinite) ? t.Cartesian3.fromDegrees(R, X, O) : null;
  }
  function T(y, W = {}) {
    const N = t.Math.toRadians(Number(W.heading ?? 0)), R = t.Math.toRadians(Number(W.pitch ?? 0)), X = Math.cos(R), O = new t.Cartesian3(
      Math.sin(N) * X,
      Math.cos(N) * X,
      Math.sin(R)
    ), $ = t.Transforms.eastNorthUpToFixedFrame(y), U = t.Matrix4.multiplyByPointAsVector(
      $,
      O,
      new t.Cartesian3()
    );
    return t.Cartesian3.normalize(U, U);
  }
  function M(y) {
    const W = t.Ellipsoid.WGS84.geodeticSurfaceNormal(
      y,
      new t.Cartesian3()
    );
    return t.Cartesian3.negate(W, W);
  }
  function A(y, W, N) {
    const R = new t.Ray(y, W);
    if (N === "terrain")
      return e.scene?.globe?.pick(R, e.scene) || null;
    const X = t.IntersectionTests.rayEllipsoid(
      R,
      t.Ellipsoid.WGS84
    );
    if (!X)
      return null;
    const O = X.start >= 0 ? X.start : X.stop;
    return O >= 0 ? t.Ray.getPoint(R, O, new t.Cartesian3()) : null;
  }
  function _(y, W, N = 0) {
    const R = t.Cartesian3.normalize(
      t.Cartesian3.subtract(y, W, new t.Cartesian3()),
      new t.Cartesian3()
    ), X = t.Ellipsoid.WGS84.geodeticSurfaceNormal(
      t.Cartesian3.midpoint(y, W, new t.Cartesian3()),
      new t.Cartesian3()
    );
    let O = t.Cartesian3.cross(
      X,
      R,
      new t.Cartesian3()
    );
    t.Cartesian3.magnitudeSquared(O) < t.Math.EPSILON12 && (O = t.Cartesian3.cross(t.Cartesian3.UNIT_X, R, O)), t.Cartesian3.normalize(O, O);
    const $ = t.Cartesian3.normalize(
      t.Cartesian3.cross(R, O, new t.Cartesian3()),
      new t.Cartesian3()
    ), U = new t.Matrix3();
    t.Matrix3.setColumn(U, 0, O, U), t.Matrix3.setColumn(U, 1, $, U), t.Matrix3.setColumn(U, 2, R, U);
    const Q = t.Quaternion.fromRotationMatrix(
      U,
      new t.Quaternion()
    );
    if (!N)
      return Q;
    const B = t.Quaternion.fromAxisAngle(
      t.Cartesian3.UNIT_Z,
      t.Math.toRadians(N),
      new t.Quaternion()
    );
    return t.Quaternion.multiply(Q, B, new t.Quaternion());
  }
  function k(y, W) {
    const N = t.Cartesian3.normalize(
      t.Cartesian3.subtract(y.end, y.start, new t.Cartesian3()),
      new t.Cartesian3()
    ), R = t.Ellipsoid.WGS84.geodeticSurfaceNormal(
      y.start,
      new t.Cartesian3()
    );
    let X = t.Cartesian3.cross(
      N,
      R,
      new t.Cartesian3()
    );
    if (t.Cartesian3.magnitudeSquared(X) < t.Math.EPSILON12) {
      const nt = t.Transforms.eastNorthUpToFixedFrame(y.start);
      X = t.Matrix4.getColumn(nt, 0, new t.Cartesian4()), X = new t.Cartesian3(X.x, X.y, X.z);
    }
    t.Cartesian3.normalize(X, X);
    let O = t.Cartesian3.normalize(
      t.Cartesian3.cross(X, N, new t.Cartesian3()),
      new t.Cartesian3()
    );
    const $ = t.Math.toRadians(Number(W.direction?.roll ?? 0));
    if ($) {
      const nt = Math.cos($), rt = Math.sin($), ct = t.Cartesian3.clone(X), w = t.Cartesian3.clone(O);
      X = t.Cartesian3.add(
        t.Cartesian3.multiplyByScalar(
          ct,
          nt,
          new t.Cartesian3()
        ),
        t.Cartesian3.multiplyByScalar(
          w,
          rt,
          new t.Cartesian3()
        ),
        new t.Cartesian3()
      ), O = t.Cartesian3.add(
        t.Cartesian3.multiplyByScalar(
          w,
          nt,
          new t.Cartesian3()
        ),
        t.Cartesian3.multiplyByScalar(
          ct,
          -rt,
          new t.Cartesian3()
        ),
        new t.Cartesian3()
      );
    }
    const U = ae(W.bottomHeight) ? Number(W.bottomHeight) / 2 : Math.tan(t.Math.toRadians(Number(W.fov)) / 2) * y.length, Q = ae(W.bottomWidth) ? Number(W.bottomWidth) / 2 : U * Number(W.aspectRatio), B = t.Cartesian3.multiplyByScalar(
      X,
      Q,
      new t.Cartesian3()
    ), et = t.Cartesian3.multiplyByScalar(
      O,
      U,
      new t.Cartesian3()
    ), it = t.Cartesian3.add(
      t.Cartesian3.subtract(
        y.end,
        B,
        new t.Cartesian3()
      ),
      et,
      new t.Cartesian3()
    ), ut = t.Cartesian3.add(
      t.Cartesian3.add(y.end, B, new t.Cartesian3()),
      et,
      new t.Cartesian3()
    ), Z = t.Cartesian3.subtract(
      t.Cartesian3.add(y.end, B, new t.Cartesian3()),
      et,
      new t.Cartesian3()
    ), st = t.Cartesian3.subtract(
      t.Cartesian3.subtract(
        y.end,
        B,
        new t.Cartesian3()
      ),
      et,
      new t.Cartesian3()
    );
    return [y.start, it, ut, Z, st];
  }
  function C(y, W = {}) {
    const N = i.get(String(y));
    if (!N)
      throw new Error(`未找到圆锥体：${y}`);
    return N.update(W);
  }
  function P(y, W = !0) {
    const N = typeof y == "object" ? y?.id : String(y), R = i.get(N);
    return R ? ([...R.solidEntities, ...R.radarEntities].forEach((X) => {
      e.entities.remove(X);
    }), i.delete(N), W && (c(), l(
      i.size ? `当前共有 ${i.size} 个扫描体。` : "扫描体已清空。"
    ), d()), !0) : !1;
  }
  function H() {
    for (const y of i.values())
      [...y.solidEntities, ...y.radarEntities].forEach((W) => {
        e.entities.remove(W);
      });
    i.clear(), c(), l("扫描体已清空。"), d();
  }
  function E(y, W) {
    if (W == null) {
      go(y);
      for (const R of i.values())
        R.setDisplayMode(y);
      return;
    }
    const N = i.get(String(y));
    if (!N)
      throw new Error(`未找到圆锥体：${y}`);
    N.setDisplayMode(W);
  }
  function G(y, W) {
    if (W == null) {
      for (const R of i.values())
        R.setColor(y);
      return;
    }
    const N = i.get(String(y));
    if (!N)
      throw new Error(`未找到圆锥体：${y}`);
    N.setColor(W);
  }
  function I(y) {
    const W = typeof y == "string" ? i.get(y) : y?.solidEntity ? y : i.values().next().value;
    return W ? e.flyTo(W.solidEntity) : Promise.resolve(!1);
  }
  function F(y) {
    return V(y.color, y.solidAlpha);
  }
  function q(y) {
    return new r({
      color: V(y.color, y.radarAlpha),
      repeat: y.repeat,
      thickness: y.thickness,
      duration: y.duration,
      offset: y.offset
    });
  }
  function K(y) {
    return V(y.outlineColor || y.color, y.outlineAlpha);
  }
  function J(y) {
    return new o({
      color: V(y.effectColor || y.color, y.radarAlpha),
      repeat: bl(y.repeat),
      thickness: y.thickness,
      duration: y.duration,
      offset: y.offset,
      direction: y.animationDirection
    });
  }
  function L(y) {
    return new a({
      color: V(
        y.footprintColor || y.color,
        y.footprintAlpha
      ),
      repeat: wl(y.footprintRepeat),
      width: y.footprintWidth,
      duration: y.duration,
      offset: y.offset,
      direction: y.animationDirection
    });
  }
  function V(y, W) {
    const N = y instanceof t.Color ? t.Color.clone(y) : t.Color.fromCssColorString(String(y));
    if (!N)
      throw new TypeError(`无法解析圆锥体颜色：${y}`);
    return N.withAlpha(Number(W));
  }
  return {
    addCone: u,
    updateCone: C,
    removeCone: P,
    clearCones: H,
    clearCone: H,
    flyToCone: I,
    setColor: G,
    setDisplayMode: E,
    setSolidMode: () => E("solid"),
    setRadarMode: () => E("radar"),
    setOverlayMode: () => E("overlay"),
    getCone: (y) => i.get(String(y)) || null,
    getCones: () => Array.from(i.values()),
    getPrimaryEntity: () => i.values().next().value?.solidEntity || null,
    getSolidEntities: () => Array.from(i.values()).flatMap((y) => y.solidEntities),
    getRadarEntities: () => Array.from(i.values()).flatMap((y) => y.radarEntities),
    destroy: H
  };
}
function yl(e, t, n) {
  const r = e.defaults || {}, o = t.type ?? r.type ?? "cone", a = {
    repeat: t.animation?.repeat ?? t.repeat ?? r.animation?.repeat ?? r.repeat,
    thickness: t.animation?.thickness ?? t.thickness ?? r.animation?.thickness ?? r.thickness,
    duration: t.animation?.duration ?? t.duration ?? r.animation?.duration ?? r.duration,
    offset: t.animation?.offset ?? t.offset ?? r.animation?.offset ?? r.offset,
    footprintEffect: t.animation?.footprint ?? t.footprintEffect ?? r.animation?.footprint ?? r.footprintEffect,
    footprintRepeat: t.animation?.footprintRepeat ?? t.footprintRepeat ?? r.animation?.footprintRepeat ?? r.footprintRepeat,
    footprintWidth: t.animation?.footprintWidth ?? t.footprintWidth ?? r.animation?.footprintWidth ?? r.footprintWidth,
    footprintAlpha: t.animation?.footprintAlpha ?? t.footprintAlpha ?? r.animation?.footprintAlpha ?? r.footprintAlpha,
    animationDirection: t.animation?.direction ?? t.animationDirection ?? r.animation?.direction ?? r.animationDirection
  }, i = {
    ...hl,
    ...o === "frustum" ? fl : {},
    ...r,
    ...t,
    ...Ai(a),
    type: o,
    id: n
  };
  return delete i.animation, ki(i), i;
}
function ki(e) {
  if (!["cone", "frustum"].includes(e.type))
    throw new TypeError('type 只能是 "cone" 或 "frustum"。');
  if (go(e.displayMode), e.start == null)
    throw new TypeError("圆锥体 start 不能为空。");
  if (e.end == null && (!e.direction || !ae(e.length)))
    throw new TypeError("没有 end 时必须提供 direction 和大于 0 的 length。");
  if (e.type === "cone") {
    if (e.swathWidth != null && !ae(e.swathWidth))
      throw new TypeError("swathWidth 必须大于 0。");
    if (e.bottomRadius != null && !ae(e.bottomRadius))
      throw new TypeError("bottomRadius 必须大于 0，或不传以根据 fov 自动计算。");
    if (!Number.isFinite(Number(e.topRadius)) || Number(e.topRadius) < 0)
      throw new TypeError("topRadius 必须是大于或等于 0 的数字。");
    if (e.swathWidth == null && e.bottomRadius == null) {
      const t = Number(e.fov);
      if (!Number.isFinite(t) || t <= 0 || t >= 179)
        throw new TypeError(
          "自动计算圆锥底面半径时，fov 必须大于 0 且小于 179。"
        );
    }
  } else {
    const t = Number(e.fov);
    if (!Number.isFinite(t) || t <= 0 || t >= 179)
      throw new TypeError("frustum 类型的 fov 必须大于 0 且小于 179。");
    if (!ae(e.aspectRatio))
      throw new TypeError("frustum 类型的 aspectRatio 必须大于 0。");
    if (e.bottomWidth != null && !ae(e.bottomWidth))
      throw new TypeError("bottomWidth 必须大于 0。");
    if (e.bottomHeight != null && !ae(e.bottomHeight))
      throw new TypeError("bottomHeight 必须大于 0。");
    if (!ae(e.footprintRepeat))
      throw new TypeError(
        "frustum 类型的 animation.footprintRepeat 必须大于 0。"
      );
    if (!ae(e.footprintWidth))
      throw new TypeError(
        "frustum 类型的 animation.footprintWidth 必须大于 0。"
      );
    if (!Number.isFinite(Number(e.footprintAlpha)) || e.footprintAlpha < 0 || e.footprintAlpha > 1)
      throw new TypeError(
        "frustum 类型的 animation.footprintAlpha 必须在 0 到 1 之间。"
      );
  }
  if (e.surface !== "ellipsoid" && e.surface !== "terrain")
    throw new TypeError('surface 只能是 "ellipsoid" 或 "terrain"。');
  if (!["auto", "surface", "plane"].includes(e.footprintMode))
    throw new TypeError(
      'footprintMode 只能是 "auto"、"surface" 或 "plane"。'
    );
  if (!Number.isFinite(Number(e.surfaceTolerance)) || Number(e.surfaceTolerance) < 0)
    throw new TypeError("surfaceTolerance 必须是大于或等于 0 的数字。");
}
function go(e) {
  if (!["solid", "radar", "overlay"].includes(e))
    throw new TypeError('displayMode 只能是 "solid"、"radar" 或 "overlay"。');
}
function En(e) {
  return e === "solid" || e === "overlay";
}
function Tn(e) {
  return e === "radar" || e === "overlay";
}
function ra(e) {
  return e === ul || e?.type?.toLowerCase?.() === "earth";
}
function oa(e) {
  return e && [e.x, e.y, e.z].every((t) => Number.isFinite(Number(t)));
}
function zr(e) {
  const t = e?.lon ?? e?.lng ?? e?.longitude, n = e?.lat ?? e?.latitude;
  return Number.isFinite(Number(t)) && Number.isFinite(Number(n));
}
function ae(e) {
  return Number.isFinite(Number(e)) && Number(e) > 0;
}
function Ai(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([, t]) => t !== void 0)
  );
}
function xl(e) {
  return e ? Ai({
    repeat: e.repeat,
    thickness: e.thickness,
    duration: e.duration,
    offset: e.offset,
    footprintEffect: e.footprint,
    footprintRepeat: e.footprintRepeat,
    footprintWidth: e.footprintWidth,
    footprintAlpha: e.footprintAlpha,
    animationDirection: e.direction
  }) : {};
}
function bl(e) {
  return Math.min(12, Math.max(1, Math.round(Number(e) || 3)));
}
function wl(e) {
  return Math.min(24, Math.max(1, Math.round(Number(e) || 10)));
}
function vl(e) {
  if (!e)
    return null;
  const t = ta.get(e);
  if (t)
    return t;
  function n(r = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this._colorSubscription = void 0, this.color = r.color || e.Color.RED, this.duration = Math.max(1, Number(r.duration ?? 1500)), this.repeat = Math.max(1, Number(r.repeat ?? 30)), this.offset = Number(r.offset ?? 0), this.thickness = Math.min(1, Math.max(0, Number(r.thickness ?? 0.3))), this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: e.createPropertyDescriptor("color")
  }), n.prototype.getType = () => Ir, n.prototype.getValue = function(o, a) {
    const i = a || {};
    i.color = e.Property.getValueOrClonedDefault(
      this._color,
      o,
      e.Color.WHITE,
      i.color
    );
    const s = (Date.now() - this._time) % this.duration / this.duration;
    return i.time = s / this.repeat, i.repeat = this.repeat, i.offset = this.offset, i.thickness = this.thickness, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n && e.Property.equals(this._color, o._color) && this.duration === o.duration && this.repeat === o.repeat && this.offset === o.offset && this.thickness === o.thickness;
  }, e.Material._materialCache.addMaterial(Ir, {
    fabric: {
      type: Ir,
      uniforms: {
        color: new e.Color(1, 0, 0, 0.5),
        time: 0,
        repeat: 30,
        offset: 0,
        thickness: 0.3
      },
      source: gl
    },
    translucent: () => !0
  }), ta.set(e, n), n;
}
function _l(e) {
  if (!e)
    return null;
  const t = ea.get(e);
  if (t)
    return t;
  function n(r = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this._colorSubscription = void 0, this.color = r.color || e.Color.RED, this.duration = Math.max(1, Number(r.duration ?? 1500)), this.repeat = Math.max(1, Number(r.repeat ?? 3)), this.offset = Number(r.offset ?? 0), this.thickness = Math.min(
      1,
      Math.max(1e-3, Number(r.thickness ?? 0.1))
    ), this.direction = r.direction === "-" ? -1 : 1, this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: e.createPropertyDescriptor("color")
  }), n.prototype.getType = () => Rr, n.prototype.getValue = function(o, a) {
    const i = a || {};
    i.color = e.Property.getValueOrClonedDefault(
      this._color,
      o,
      e.Color.WHITE,
      i.color
    );
    const s = (Date.now() - this._time) % this.duration / this.duration;
    return i.time = s / this.repeat, i.repeat = this.repeat, i.offset = this.offset, i.thickness = this.thickness, i.direction = this.direction, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n && e.Property.equals(this._color, o._color) && this.duration === o.duration && this.repeat === o.repeat && this.offset === o.offset && this.thickness === o.thickness && this.direction === o.direction;
  }, e.Material._materialCache.addMaterial(Rr, {
    fabric: {
      type: Rr,
      uniforms: {
        color: new e.Color(1, 0, 0, 0.82),
        time: 0,
        repeat: 3,
        offset: 0,
        thickness: 0.1,
        direction: 1
      },
      source: pl
    },
    translucent: () => !0
  }), ea.set(e, n), n;
}
function Ml(e) {
  if (!e)
    return null;
  const t = na.get(e);
  if (t)
    return t;
  function n(r = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this._colorSubscription = void 0, this.color = r.color || e.Color.RED.withAlpha(0.14), this.duration = Math.max(1, Number(r.duration ?? 1500)), this.repeat = Math.max(1, Number(r.repeat ?? 10)), this.offset = Number(r.offset ?? 0), this.width = Math.max(0.5, Number(r.width ?? 0.8)), this.direction = r.direction === "-" ? -1 : 1, this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: e.createPropertyDescriptor("color")
  }), n.prototype.getType = () => Fr, n.prototype.getValue = function(o, a) {
    const i = a || {};
    i.color = e.Property.getValueOrClonedDefault(
      this._color,
      o,
      e.Color.WHITE,
      i.color
    );
    const s = (Date.now() - this._time) % this.duration / this.duration;
    return i.time = s / this.repeat, i.repeat = this.repeat, i.offset = this.offset, i.width = this.width, i.direction = this.direction, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n && e.Property.equals(this._color, o._color) && this.duration === o.duration && this.repeat === o.repeat && this.offset === o.offset && this.width === o.width && this.direction === o.direction;
  }, e.Material._materialCache.addMaterial(Fr, {
    fabric: {
      type: Fr,
      uniforms: {
        color: new e.Color(1, 0, 0, 0.14),
        time: 0,
        repeat: 10,
        offset: 0,
        width: 0.8,
        direction: 1
      },
      source: ml
    },
    translucent: () => !0
  }), na.set(
    e,
    n
  ), n;
}
const $t = {
  url: "/libs/case_list/PointLight/beijing_buildings_case_area.geojson",
  bounds: { west: 116.322, south: 39.945, east: 116.458, north: 40.035 },
  maxFeatures: Number.POSITIVE_INFINITY,
  initialBatchSize: 150,
  batchSize: 600,
  heightScale: 1,
  minHeight: 6,
  maxHeight: 260,
  bottomColor: "#102a5f",
  topColor: "#3cecff",
  glowColor: "#ffffff",
  alpha: 0.86,
  duration: 3600,
  glowWidth: 0.08,
  glowStrength: 1.15
}, kn = {
  lon: 116.3903,
  lat: 39.9914,
  height: 80
}, aa = { heading: 5, pitch: -38, range: 9800 }, Kn = "CustomShaderGradientMaterial", ia = /* @__PURE__ */ new WeakMap();
function oe(e, t = "#3cecff", n = 1) {
  if (t instanceof e.Color) return t.withAlpha(n);
  if (Array.isArray(t)) {
    const [r = 0.24, o = 0.93, a = 1, i = n] = t, s = Math.max(r, o, a) > 1 ? 255 : 1;
    return new e.Color(
      r / s,
      o / s,
      a / s,
      i
    );
  }
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function sa(e) {
  const t = ia.get(e);
  if (t) return t;
  const n = e.createPropertyDescriptor;
  function r(o = {}) {
    this._definitionChanged = new e.Event(), this.bottomColor = oe(
      e,
      o.bottomColor || $t.bottomColor
    ), this.topColor = oe(
      e,
      o.topColor || $t.topColor
    ), this.glowColor = oe(
      e,
      o.glowColor || $t.glowColor
    ), this.alpha = Number(o.alpha ?? $t.alpha), this.duration = Number(
      o.duration || $t.duration
    ), this.glowWidth = Number(
      o.glowWidth || $t.glowWidth
    ), this.glowStrength = Number(
      o.glowStrength || $t.glowStrength
    ), this._time = Date.now();
  }
  return Object.defineProperties(r.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    bottomColor: n("bottomColor"),
    topColor: n("topColor"),
    glowColor: n("glowColor")
  }), r.prototype.getType = () => Kn, r.prototype.getValue = function(a, i) {
    const s = i || {}, l = (c, d, u) => e.Property.getValueOrClonedDefault(
      c,
      a,
      d,
      u
    );
    return s.bottomColor = l(
      this.bottomColor,
      oe(e, $t.bottomColor),
      s.bottomColor
    ), s.topColor = l(
      this.topColor,
      oe(e, $t.topColor),
      s.topColor
    ), s.glowColor = l(
      this.glowColor,
      oe(e, $t.glowColor),
      s.glowColor
    ), s.alpha = this.alpha, s.glowWidth = this.glowWidth, s.glowStrength = this.glowStrength, s.time = (Date.now() - this._time) % this.duration / this.duration, s;
  }, r.prototype.equals = function(a) {
    return this === a;
  }, e.Material._materialCache.addMaterial(Kn, {
    fabric: {
      type: Kn,
      uniforms: {
        bottomColor: oe(e, $t.bottomColor),
        topColor: oe(e, $t.topColor),
        glowColor: oe(e, $t.glowColor),
        alpha: $t.alpha,
        time: 0,
        glowWidth: $t.glowWidth,
        glowStrength: $t.glowStrength
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          float heightRatio = clamp(materialInput.st.t, 0.0, 1.0);
          vec3 gradientColor = mix(bottomColor.rgb, topColor.rgb, heightRatio);
          float scan = fract(time);
          float glow = 1.0 - smoothstep(0.0, glowWidth, abs(heightRatio - scan));
          material.diffuse = gradientColor + glowColor.rgb * glow * glowStrength;
          material.alpha = alpha;
          return material;
        }
      `
    },
    translucent: () => !0
  }), ia.set(e, r), r;
}
function wn(e, t) {
  const n = e.geometry;
  n && (n.type === "Polygon" && t(n.coordinates), n.type === "MultiPolygon" && n.coordinates.forEach(t));
}
function Eo(e = []) {
  const t = e.reduce(
    (n, r) => ({
      lon: n.lon + Number(r[0]),
      lat: n.lat + Number(r[1])
    }),
    { lon: 0, lat: 0 }
  );
  return {
    lon: t.lon / (e.length || 1),
    lat: t.lat / (e.length || 1)
  };
}
function Sl(e, t) {
  let n = !1;
  return wn(e, (r) => {
    const o = Eo(r?.[0] || []);
    n ||= o.lon >= t.west && o.lon <= t.east && o.lat >= t.south && o.lat <= t.north;
  }), n;
}
function la(e) {
  let t = null;
  return wn(e, (n) => {
    !t && n?.[0]?.length && (t = Eo(n[0]));
  }), t;
}
function Pl(e) {
  const t = {
    west: Number.POSITIVE_INFINITY,
    south: Number.POSITIVE_INFINITY,
    east: Number.NEGATIVE_INFINITY,
    north: Number.NEGATIVE_INFINITY
  };
  return e.forEach((n) => {
    wn(n, (r) => {
      r.forEach((o) => {
        o.forEach((a) => {
          const i = Number(a[0]), s = Number(a[1]);
          !Number.isFinite(i) || !Number.isFinite(s) || (t.west = Math.min(t.west, i), t.south = Math.min(t.south, s), t.east = Math.max(t.east, i), t.north = Math.max(t.north, s));
        });
      });
    });
  }), Number.isFinite(t.west) ? t : null;
}
function El(e, t, n) {
  const r = Pl(t);
  if (!r) return null;
  const o = Math.max(Number(n) || 0, 0), a = [];
  for (const i of [r.west, r.east])
    for (const s of [r.south, r.north])
      a.push(e.Cartesian3.fromDegrees(i, s, 0)), a.push(e.Cartesian3.fromDegrees(i, s, o));
  return e.BoundingSphere.fromPoints(a);
}
function Tl(e, t, n) {
  const r = Math.cos(e.Math.toRadians(n.lat));
  return [...t].sort((o, a) => {
    const i = la(o) || n, s = la(a) || n, l = (i.lon - n.lon) * r, c = (s.lon - n.lon) * r, d = i.lat - n.lat, u = s.lat - n.lat;
    return l * l + d * d - (c * c + u * u);
  });
}
function kl(e = []) {
  if (e.length < 2) return e;
  const t = e[0], n = e[e.length - 1];
  return Number(t[0]) === Number(n[0]) && Number(t[1]) === Number(n[1]) ? e.slice(0, -1) : e;
}
function Al(e, t) {
  const n = t.slice(1).map(
    (r) => new e.PolygonHierarchy(
      e.Cartesian3.fromDegreesArray(r.flat())
    )
  );
  return new e.PolygonHierarchy(
    e.Cartesian3.fromDegreesArray(t[0].flat()),
    n
  );
}
function An(e, t) {
  if (!e || !t) return null;
  const n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return String(e).match(new RegExp(`"${n}"=>"?([^",]+)"?`))?.[1] ?? null;
}
function pe(e) {
  if (e == null) return null;
  const t = Number.parseFloat(String(e).replace(/[^\d.-]/g, ""));
  return Number.isFinite(t) && t > 0 ? t : null;
}
function Dl(e, t) {
  const n = t?.[0] || [];
  if (n.length < 3) return 0;
  const r = Eo(n), o = 111320 * Math.cos(e.Math.toRadians(r.lat));
  let a = 0;
  return n.forEach((i, s) => {
    const l = n[(s + 1) % n.length], c = (Number(i[0]) - r.lon) * o, d = (Number(i[1]) - r.lat) * 110540, u = (Number(l[0]) - r.lon) * o, f = (Number(l[1]) - r.lat) * 110540;
    a += c * f - u * d;
  }), Math.abs(a) * 0.5;
}
function Wl(e, t) {
  let n = 0;
  return wn(t, (r) => {
    n += Dl(e, r);
  }), n;
}
function Cl(e, t) {
  const n = t.properties || {}, r = Wl(e, t), o = String(n.building || "").toLowerCase(), a = String(n.osm_id ?? n.osm_way_id ?? "").split("").reduce((s, l) => s + l.charCodeAt(0), 0) % 6;
  let i = r > 3e4 ? 34 : r > 12e3 ? 28 : r > 5e3 ? 22 : r > 1800 ? 16 : 9;
  return ["apartments", "residential", "dormitory"].includes(o) ? i = Math.max(i, 24 + a * 2.4) : ["commercial", "retail", "office"].includes(o) || n.office ? i = Math.max(i, 30 + a * 3.2) : ["house", "detached", "roof"].includes(o) ? i = Math.max(i, 7 + a) : ["stadium", "sports_centre", "train_station"].includes(o) && (i = Math.max(i, 18 + a)), ["conference_centre", "hospital", "university", "school"].includes(
    String(n.amenity || "").toLowerCase()
  ) && (i = Math.max(i, 22 + a * 2)), (["hotel", "museum"].includes(
    String(n.tourism || "").toLowerCase()
  ) || n.shop === "mall") && (i = Math.max(i, 28 + a * 2.8)), i;
}
function Nl(e, t, n) {
  const r = t.properties || {}, o = r.other_tags || "", a = pe(r.height) || pe(r.Height) || pe(r["building:height"]) || pe(An(o, "height")) || pe(An(o, "building:height")), i = pe(r["building:levels"]) || pe(r.levels) || pe(An(o, "building:levels")) || pe(An(o, "level"));
  let s = a || (i ? i * 3.2 : null);
  if (!s) {
    const c = Number.parseFloat(
      r.height_num ?? r.height_num_m
    );
    s = Number.isFinite(c) && c > 12 ? c : Cl(e, t);
  }
  const l = s * Number(n.heightScale || 1);
  return Math.max(n.minHeight, Math.min(n.maxHeight, l));
}
function r0(e, t, n = {}) {
  let r = [], o = [], a = 0, i = 0, s = 0, l = null, c = null, d = null;
  function u(_) {
    n.onStatusChange?.(_), n.onCountChange?.(a);
  }
  function f() {
    c?.(), c = null, l = null;
  }
  function h() {
    i += 1, f(), o.forEach(
      (_) => e?.scene?.primitives?.remove(_)
    ), o = [], r = [], d = null, a = 0, n.onCountChange?.(0);
  }
  function g(_) {
    sa(t);
    const k = t.Material.fromType(Kn, {
      bottomColor: oe(t, _.bottomColor),
      topColor: oe(t, _.topColor),
      glowColor: oe(t, _.glowColor),
      alpha: Number(_.alpha),
      time: 0,
      glowWidth: Number(_.glowWidth),
      glowStrength: Number(_.glowStrength)
    }), C = Date.now(), P = Math.max(Number(_.duration) || 3600, 1);
    return c = e.scene.preRender.addEventListener(() => {
      k.uniforms.time = (Date.now() - C) % P / P;
    }), l = k, k;
  }
  function p(_, k, C) {
    const P = Nl(t, _, k), H = _.properties?.name || "GeoJSON gradient building", E = [];
    return wn(_, (G) => {
      if (!G?.[0]?.length) return;
      const I = kl(G[0]);
      if (I.length < 3) return;
      const F = t.Cartesian3.fromDegreesArray(I.flat()), q = `geojson-gradient-building-${i}-${++s}`;
      E.push({
        wallInstance: new t.GeometryInstance({
          id: `${q}-wall`,
          geometry: new t.WallGeometry({
            positions: F,
            minimumHeights: new Array(F.length).fill(0),
            maximumHeights: new Array(F.length).fill(P),
            vertexFormat: t.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat
          })
        }),
        roofInstance: new t.GeometryInstance({
          id: `${q}-roof`,
          geometry: new t.PolygonGeometry({
            polygonHierarchy: Al(t, G),
            height: P,
            vertexFormat: t.PerInstanceColorAppearance.VERTEX_FORMAT
          }),
          attributes: {
            color: t.ColorGeometryInstanceAttribute.fromColor(C)
          }
        }),
        record: {
          id: q,
          name: H,
          height: P,
          wallPrimitive: null,
          roofPrimitive: null
        }
      });
    }), E;
  }
  function x() {
    return new Promise((_) => requestAnimationFrame(_));
  }
  async function S(_, k, C = 120) {
    let P = 0;
    for (; k === i && _.some((H) => !H.ready) && P < C; )
      P += 1, e.scene.requestRender(), await x();
  }
  async function T(_, k, C, P) {
    const H = Math.max(Math.round(Number(k.batchSize) || 600), 1), E = Math.min(
      Math.max(Math.round(Number(k.initialBatchSize) || 150), 1),
      H
    ), G = oe(
      t,
      k.topColor,
      Math.min(0.95, Number(k.alpha) + 0.06)
    );
    let I = !0;
    for (let F = 0; F < _.length; ) {
      if (P !== i) return;
      const q = F === 0 ? E : H, K = _.slice(F, F + q).flatMap(
        (V) => p(V, k, G)
      );
      if (F += q, !K.length) continue;
      const J = e.scene.primitives.add(
        new t.Primitive({
          geometryInstances: K.map(({ wallInstance: V }) => V),
          appearance: new t.MaterialAppearance({
            material: C,
            translucent: !0,
            closed: !1,
            faceForward: !0
          }),
          asynchronous: !0,
          compressVertices: !0,
          interleave: !0,
          releaseGeometryInstances: !0
        })
      ), L = e.scene.primitives.add(
        new t.Primitive({
          geometryInstances: K.map(({ roofInstance: V }) => V),
          appearance: new t.PerInstanceColorAppearance({
            translucent: G.alpha < 1,
            closed: !1,
            flat: !0
          }),
          asynchronous: !0,
          compressVertices: !0,
          interleave: !0,
          releaseGeometryInstances: !0
        })
      );
      o.push(J, L), K.forEach(({ record: V }) => {
        V.wallPrimitive = J, V.roofPrimitive = L, r.push(V);
      }), a += K.length, u(`已加载 ${a} 个渐变建筑单元。`), e.scene.requestRender(), I ? (I = !1, await S([J, L], P)) : await x();
    }
  }
  async function M(_ = {}) {
    if (!e || !t) return [];
    const k = {
      ...$t,
      ...n.defaults,
      ...n,
      ..._
    };
    h();
    const C = i;
    u("GeoJSON 建筑渐变加载中。");
    try {
      const P = await fetch(k.url);
      if (!P.ok)
        throw new Error(`${P.status} ${P.statusText}`);
      const H = await P.json();
      if (C !== i) return [];
      const E = (H.features || []).filter(
        (q) => k.bounds ? Sl(q, k.bounds) : !0
      ), G = Tl(
        t,
        E,
        k.center || kn
      ), I = Number.isFinite(k.maxFeatures) ? G.slice(0, Math.max(Number(k.maxFeatures), 0)) : G;
      if (!I.length)
        return u("未找到可加载的 GeoJSON 建筑。"), [];
      d = El(
        t,
        I,
        k.maxHeight
      ), A(k.camera);
      const F = g(k);
      return await T(I, k, F, C), C !== i ? [] : (u(`已加载 ${a} 个渐变建筑单元。`), [...r]);
    } catch (P) {
      return C !== i ? [] : (h(), n.onError?.(P, k), u("GeoJSON 建筑渐变加载失败。"), []);
    }
  }
  function A(_ = {}) {
    if (!e || !t) return;
    const k = { ...aa, ..._ }, C = Number(k.range) || aa.range, P = d || new t.BoundingSphere(
      t.Cartesian3.fromDegrees(
        kn.lon,
        kn.lat,
        kn.height
      ),
      C / 2.4
    ), H = Number(_?.range), E = Number.isFinite(H) && H > 0 ? H : Math.max(P.radius * 0.5, 450);
    e.camera.viewBoundingSphere(
      P,
      new t.HeadingPitchRange(
        t.Math.toRadians(k.heading),
        t.Math.toRadians(k.pitch),
        E
      )
    ), e.camera.lookAtTransform(t.Matrix4.IDENTITY);
  }
  return {
    loadGradientBuildings: M,
    clearGradientBuildings: h,
    focusScene: A,
    createGradientMaterialProperty: (_) => new (sa(t))(_),
    getBuildingEntities: () => [...r],
    getBuildingRecords: () => [...r],
    getBuildingPrimitives: () => [...o],
    getGradientMaterial: () => l,
    getBuildingCount: () => a,
    destroy: h
  };
}
const Ll = {
  tilesetUrl: "/libs/case_list/CustomShaderMaterial/tileset.json",
  upperTextureUrl: "/libs/case_list/CustomShaderMaterial/wall.jpg",
  lowerTextureUrl: "/libs/case_list/CustomShaderMaterial/wall1.jpg",
  splitHeight: 40
};
function o0(e, t, n = {}) {
  const r = { ...Ll, ...n };
  let o = null, a = "none", i = !1;
  function s(M) {
    n.onStateChange?.({ activeMaterial: a, glowEnabled: i, status: M }), n.onStatusChange?.(M);
  }
  async function l(M = r.tilesetUrl) {
    if (!e || !t) return null;
    S(), n.onError?.(null), s("正在加载本地 3D Tiles。");
    try {
      return o = typeof t.Cesium3DTileset.fromUrl == "function" ? await t.Cesium3DTileset.fromUrl(M) : new t.Cesium3DTileset({ url: M }), e.scene.primitives.add(o), o.readyPromise && await o.readyPromise, await e.zoomTo(o), s("3D Tiles 已加载，可切换 CustomShader 材质。"), o;
    } catch (A) {
      return n.onError?.(A), s("3D Tiles 加载失败。"), null;
    }
  }
  function c() {
    if (!(!o || !t)) {
      if (a === "gradient") return x();
      a = "gradient", d(i);
    }
  }
  function d(M = !1) {
    o.customShader = new t.CustomShader({
      fragmentShaderText: `
        void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
          vec3 positionMC = fsInput.attributes.positionMC;
          material.diffuse = vec3(0.0, 1.0 - positionMC.y * 0.005, 1.0 - positionMC.y * 0.0015);
          ${M ? `
          float baseHeight = 18.0;
          float heightRange = 60.0;
          float glowRange = 120.0;
          float height = fsInput.attributes.positionMC.y - baseHeight;
          float phase = fract(czm_frameNumber / 360.0) * 3.14159265 * 2.0;
          float value = height / heightRange + sin(phase) * 0.1;
          material.diffuse *= vec3(value, value, value);
          float scan = fract(czm_frameNumber / 360.0);
          float normalizedHeight = clamp(height / glowRange, 0.0, 1.0);
          scan = abs(scan - 0.5) * 2.0;
          material.diffuse += material.diffuse * (1.0 - step(0.01, abs(normalizedHeight - scan)));
          ` : ""}
        }
      `
    }), s(`已应用纯渐变色${M ? " + 竖向动态光圈" : ""} CustomShader。`);
  }
  function u() {
    if (!(!o || !t)) {
      if (i = !i, a === "none")
        if (i) a = "gradient";
        else return x();
      g();
    }
  }
  function f() {
    if (a === "texture") return x();
    a = "texture", p({
      upperTexture: r.upperTextureUrl,
      lowerTexture: r.lowerTextureUrl,
      splitHeight: r.splitHeight,
      withGlow: i,
      status: `已应用墙面贴图1${i ? " + 竖向动态光圈" : ""} CustomShader。`
    });
  }
  function h() {
    if (a === "textureAlt") return x();
    a = "textureAlt", p({
      upperTexture: r.lowerTextureUrl,
      lowerTexture: r.lowerTextureUrl,
      splitHeight: 0,
      withGlow: i,
      status: `已应用墙面贴图2${i ? " + 竖向动态光圈" : ""} CustomShader。`
    });
  }
  function g() {
    if (a === "texture") return f();
    if (a === "textureAlt") return h();
    a === "gradient" && d(i);
  }
  function p(M) {
    !o || !t || (o.customShader = new t.CustomShader({
      varyings: { v_normalMC: t.VaryingType.VEC3, v_st: t.VaryingType.VEC3 },
      uniforms: {
        u_texture: { value: new t.TextureUniform({ url: M.upperTexture }), type: t.UniformType.SAMPLER_2D },
        u_texture1: { value: new t.TextureUniform({ url: M.lowerTexture }), type: t.UniformType.SAMPLER_2D }
      },
      vertexShaderText: `
        void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
          v_normalMC = vsInput.attributes.normalMC;
          v_st = vsInput.attributes.positionMC;
        }
      `,
      fragmentShaderText: `
        void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
          vec3 positionMC = fsInput.attributes.positionMC;
          float width = 30.0;
          float height = 70.0;
          vec3 rgb;
          if (dot(vec3(0.0, 1.0, 0.0), v_normalMC) > 0.95) {
            material.diffuse = vec3(0.65, 0.65, 0.65);
          } else {
            float textureX;
            float dotYAxis = dot(vec3(0.0, 0.0, 1.0), v_normalMC);
            if (dotYAxis > 0.71 || dotYAxis < -0.71) textureX = mod(positionMC.x, width) / width;
            else textureX = mod(positionMC.z, width) / width;
            float textureY = mod(positionMC.y, height) / height;
            if (positionMC.y > ${Number(M.splitHeight).toFixed(1)}) rgb = texture(u_texture, vec2(textureX, textureY)).rgb;
            else rgb = texture(u_texture1, vec2(textureX, textureY)).rgb;
            material.diffuse = rgb;
            ${M.withGlow ? `
            float glowHeight = fsInput.attributes.positionMC.y - 10.0;
            float glowScan = abs(fract(czm_frameNumber / 360.0) - 0.5) * 2.0;
            float glowValue = clamp(glowHeight / 120.0, 0.0, 1.0);
            material.diffuse += material.diffuse * (1.0 - step(0.01, abs(glowValue - glowScan)));
            ` : ""}
          }
        }
      `
    }), s(M.status));
  }
  function x() {
    !o || !t || (o.customShader = new t.CustomShader({}), a = "none", i = !1, s("已清除 CustomShader 材质。"));
  }
  function S() {
    e && o && e.scene.primitives.contains(o) && e.scene.primitives.remove(o), o = null, a = "none", i = !1, n.onStateChange?.({ activeMaterial: a, glowEnabled: i });
  }
  function T() {
    S();
  }
  return {
    loadTileset: l,
    applyGradientShader: c,
    applyGlowShader: u,
    applyTextureShader: f,
    applyTextureAltShader: h,
    clearShader: x,
    clearTileset: S,
    getTileset: () => o,
    getState: () => ({ activeMaterial: a, glowEnabled: i }),
    destroy: T
  };
}
const Il = {
  url: "/libs/case_list/CzmlLayer/wx.czml",
  satelliteModelUrl: "/resources/model/weixin.gltf",
  orbitColor: "#56d7ff"
};
function Rl(e = {}) {
  return e.czml !== void 0 ? e.czml : e.url;
}
function a0(e, t, n = {}) {
  const r = { ...Il, ...n };
  let o = null, a = null;
  function i(f) {
    n.onStatusChange?.(f), n.onCountChange?.(o?.entities.values.length || 0), n.onPlayingChange?.(!!e?.clock?.shouldAnimate);
  }
  function s(f) {
    const h = new t.PolylineGlowMaterialProperty({
      color: t.Color.fromCssColorString(r.orbitColor).withAlpha(0.9),
      glowPower: 0.08,
      taperPower: 0.3
    });
    f.forEach((g) => {
      g.path && (g.path.material = h, g.path.width = 2, g.path.resolution = 90), g.position && (g.billboard = void 0, g.point = void 0, g.model = new t.ModelGraphics({
        uri: r.satelliteModelUrl,
        scale: 1,
        minimumPixelSize: 34,
        maximumScale: 9e5,
        runAnimations: !1
      }), g.orientation = new t.VelocityOrientationProperty(g.position));
    });
  }
  async function l(f = Rl(r)) {
    if (!e || !t) return null;
    u(), n.onError?.(null), i("正在读取卫星 CZML 轨道。");
    try {
      o = await t.CzmlDataSource.load(f), e.dataSources.add(o), s(o.entities.values);
      const h = o.clock;
      return h && (e.clock.startTime = h.startTime.clone(), e.clock.stopTime = h.stopTime.clone(), e.clock.currentTime = h.currentTime.clone(), e.clock.clockRange = h.clockRange, e.clock.clockStep = h.clockStep, e.clock.multiplier = h.multiplier, a = h.startTime.clone()), e.clock.shouldAnimate = !0, await e.zoomTo(o), i(`已加载 ${o.entities.values.length} 个 CZML 实体，轨道播放中。`), o;
    } catch (h) {
      return n.onError?.(h), i("CZML 轨道加载失败。"), null;
    }
  }
  function c() {
    e && (e.clock.shouldAnimate = !e.clock.shouldAnimate, i(e.clock.shouldAnimate ? "轨道播放中。" : "轨道已暂停。"));
  }
  function d() {
    !e || !a || (e.clock.currentTime = a.clone(), e.clock.shouldAnimate = !0, i("已复位到 CZML 起始时间。"));
  }
  function u() {
    e && o && e.dataSources.remove(o, !0), o = null, a = null, n.onCountChange?.(0);
  }
  return {
    loadCzmlLayer: l,
    togglePlay: c,
    resetTime: d,
    clearCzmlLayer: u,
    getDataSource: () => o,
    destroy: u
  };
}
let be = null, Ut = [], ve, ze, Ge;
const Di = [], dr = [];
function ca(e, t, n) {
  const r = t?.scene;
  if (!(!r || !n)) {
    if (r.pickPositionSupported) {
      const o = r.pickPosition(n);
      if (e.defined(o))
        return o;
    }
    return t.camera.pickEllipsoid(n, r.globe.ellipsoid);
  }
}
function da(e, t, n) {
  if (!e.defined(t) || !e.defined(n))
    return 0;
  const r = e.Cartographic.fromCartesian(t), o = e.Cartographic.fromCartesian(n);
  return new e.EllipsoidGeodesic(r, o).surfaceDistance;
}
function Fl(e, t) {
  const n = e.Cartographic.fromCartesian(t);
  return {
    longitude: Number(e.Math.toDegrees(n.longitude).toFixed(6)),
    latitude: Number(e.Math.toDegrees(n.latitude).toFixed(6)),
    height: Number(n.height.toFixed(2))
  };
}
function Ke(e) {
  be && !be.isDestroyed() && be.destroy(), be = null, e?._element && (e._element.style.cursor = "default");
}
function To(e) {
  Ci(e), ve && e?.entities.remove(ve), ze && e?.entities.remove(ze), ve = void 0, ze = void 0, Ut = [];
}
function Wi(e, t, n) {
  return t.entities.add({
    position: n,
    point: {
      color: e.Color.fromBytes(0, 255, 0, 170),
      pixelSize: 7,
      outlineColor: e.Color.fromBytes(0, 255, 0, 230),
      outlineWidth: 1,
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    }
  });
}
function ua(e, t, n) {
  const r = Wi(e, t, n);
  return Di.push(r), r;
}
function Ci(e) {
  Di.splice(0).forEach((t) => e?.entities.remove(t));
}
function zl(e, t, n, r = !0) {
  const o = t.entities.add({
    position: n,
    point: {
      outlineWidth: r ? 2 : 0,
      outlineColor: e.Color.fromBytes(51, 153, 204),
      color: r ? e.Color.WHITE.withAlpha(0.72) : e.Color.TRANSPARENT,
      pixelSize: 10
    }
  });
  return o.positionData = n, o.drawType = "Point", o;
}
function Ni(e, t, n, r, o = !1) {
  let a;
  switch (n) {
    case "Polyline":
      a = t.entities.add({
        polyline: {
          positions: r,
          width: 3,
          material: e.Color.fromBytes(51, 153, 204)
        }
      }), a.positionData = Array.isArray(r) ? [...r] : r;
      break;
    case "Polygon":
      a = t.entities.add({
        polygon: {
          hierarchy: r,
          perPositionHeight: !1,
          height: 0,
          material: e.Color.WHITE.withAlpha(0.42),
          outline: !0,
          outlineColor: e.Color.fromBytes(51, 153, 204)
        }
      }), a.positionData = Array.isArray(r) ? [...r] : r;
      break;
    case "Circle": {
      const i = r instanceof e.CallbackProperty ? r.getValue(e.JulianDate.now()) : r, s = da(
        e,
        i[0],
        i[i.length - 1]
      ), l = new e.CallbackProperty(
        () => da(
          e,
          i[0],
          i[i.length - 1]
        ),
        !1
      ), c = e.Cartographic.fromCartesian(i[0]);
      a = t.entities.add({
        position: i[0],
        name: "Circle",
        ellipse: {
          semiMinorAxis: l,
          semiMajorAxis: l,
          height: c.height,
          material: e.Color.WHITE.withAlpha(0.42),
          outline: !0,
          outlineColor: e.Color.fromBytes(51, 153, 204),
          outlineWidth: 1
        }
      }), Object.assign(a, { positionData: [i[0]], radius: s });
      break;
    }
    case "Rectangle": {
      const i = r instanceof e.CallbackProperty ? r.getValue(e.JulianDate.now()) : r, s = e.Cartographic.fromCartesian(i[0]);
      a = t.entities.add({
        name: "Rectangle",
        rectangle: {
          coordinates: new e.CallbackProperty(
            () => e.Rectangle.fromCartesianArray(i),
            !1
          ),
          height: s.height,
          material: e.Color.WHITE.withAlpha(0.42),
          outline: !0,
          outlineColor: e.Color.fromBytes(51, 153, 204),
          outlineWidth: 1
        }
      }), a.positionData = [...i];
      break;
    }
  }
  return a && (a.drawType = n), o && (Ge = a), a;
}
function ha(e, t, n, r, o) {
  if (r && Ge && (t.entities.remove(Ge), Ge = void 0), Ut.length) {
    const a = Ni(
      e,
      t,
      n,
      Ut,
      !0
    );
    a && (dr.push(a), o?.(a, ar(e)));
  }
  Ci(t), ve && t.entities.remove(ve), ze && t.entities.remove(ze), ve = void 0, ze = void 0, Ut = [];
}
function Gl(e, t, n, r = { removeLast: !0 }, o) {
  if (!e)
    return;
  const { removeLast: a = !0 } = r;
  return e.scene.globe.depthTestAgainstTerrain = !1, e.enableCursorStyle = !1, e._element.style.cursor = "crosshair", Ke(e), To(e), be = new t.ScreenSpaceEventHandler(e.canvas), be.setInputAction((i) => {
    const s = ca(t, e, i.position);
    if (t.defined(s)) {
      if (n === "Point") {
        const l = zl(t, e, s);
        dr.push(l), Ke(e), o?.(l, ar(t));
        return;
      }
      if (Ut.length)
        if (["Rectangle", "Circle"].includes(n)) {
          Ut[Ut.length - 1] = s, Ke(e), ha(t, e, n, a, o);
          return;
        } else
          Ut[Ut.length - 1] = s, ua(t, e, s), Ut.push(s);
      else {
        ua(t, e, s), ve = Wi(t, e, s), Ut = [s, s];
        const l = new t.CallbackProperty(() => n === "Polygon" ? new t.PolygonHierarchy(Ut) : Ut, !1);
        ze = Ni(t, e, n, l);
      }
    }
  }, t.ScreenSpaceEventType.LEFT_CLICK), be.setInputAction((i) => {
    if (!ve)
      return;
    const s = ca(t, e, i.endPosition);
    t.defined(s) && (ve.position?.setValue(s), Ut[Ut.length - 1] = s);
  }, t.ScreenSpaceEventType.MOUSE_MOVE), be.setInputAction(() => {
    Ke(e), Ut = Ut.slice(0, -1), ha(t, e, n, a, o);
  }, t.ScreenSpaceEventType.LEFT_DOUBLE_CLICK), be;
}
function fa(e) {
  Ke(e), To(e), dr.splice(0).forEach((t) => e?.entities.remove(t)), Ge && (e?.entities.remove(Ge), Ge = void 0);
}
function ar(e) {
  return dr.map((t, n) => {
    const r = t.drawType || t.name || "Unknown", o = Array.isArray(t.positionData) ? t.positionData : t.positionData ? [t.positionData] : [], a = {
      id: t.id,
      index: n,
      type: r,
      coordinates: o.map(
        (i) => Fl(e, i)
      )
    };
    return r === "Circle" && (a.center = a.coordinates[0] || null, a.radius = Number((t.radius || 0).toFixed(2))), a;
  });
}
function ga(e) {
  Ke(e), To(e);
}
const Li = [
  { id: "Point", name: "点", icon: "●", hint: "单击地图连续绘制点" },
  {
    id: "Polyline",
    name: "线",
    icon: "╱",
    hint: "连续单击添加节点，双击结束一条线"
  },
  {
    id: "Polygon",
    name: "面",
    icon: "△",
    hint: "连续单击添加顶点，双击闭合一个面"
  },
  {
    id: "Circle",
    name: "圆",
    icon: "○",
    hint: "第一次点击圆心，第二次点击半径"
  },
  {
    id: "Rectangle",
    name: "矩形",
    icon: "□",
    hint: "第一次点击起点，第二次点击对角点"
  }
];
function Gr(e) {
  const t = typeof e == "string" ? e : e?.id;
  return Li.find((n) => n.id === t) || null;
}
function i0(e, t, n = {}) {
  if (!t?.Color || !t?.ScreenSpaceEventHandler)
    throw new Error(
      "createGeometryDrawingManager 需要传入创建 Viewer 时使用的 Cesium。"
    );
  const r = {
    isDrawing: !1,
    mode: Gr(n.defaultMode) || Li[0]
  }, o = n.removeLast ?? !1;
  let a = null, i = !1;
  function s(_) {
    n.onStatusChange?.(_);
  }
  function l() {
    n.onDrawingChange?.(r.isDrawing);
  }
  function c() {
    n.onModeChange?.(r.mode);
  }
  function d(_ = ar(t)) {
    return n.onDataChange?.(_), _;
  }
  function u() {
    a !== null && (window.clearTimeout(a), a = null);
  }
  function f() {
    u(), a = window.setTimeout(() => {
      a = null, r.isDrawing && !i && h();
    }, 0);
  }
  function h() {
    if (!e || !r.isDrawing || i)
      return null;
    const _ = r.mode;
    return s(_.hint), Gl(e, t, _.id, { removeLast: o }, (k, C) => {
      d(C), s(`${_.name}绘制完成，可继续绘制或切换工具。`), f();
    });
  }
  function g(_) {
    if (i || !e)
      return null;
    if (_) {
      const k = Gr(_);
      if (!k)
        throw new Error(`不支持的绘制类型: ${typeof _ == "string" ? _ : _?.id}`);
      r.mode = k, c();
    }
    return r.isDrawing = !0, l(), h();
  }
  function p(_ = "已退出绘制。") {
    u(), ga(e), r.isDrawing = !1, l(), _ && s(_);
  }
  function x(_) {
    const k = Gr(_);
    if (!k)
      throw new Error(`不支持的绘制类型: ${typeof _ == "string" ? _ : _?.id}`);
    return r.mode = k, c(), r.isDrawing && (u(), h()), k;
  }
  function S() {
    u(), fa(e), d([]), s("已清空绘制结果。"), r.isDrawing && f();
  }
  function T() {
    return ar(t);
  }
  function M() {
    return {
      isDrawing: r.isDrawing,
      mode: r.mode
    };
  }
  function A({ clear: _ = !1 } = {}) {
    i || (i = !0, u(), ga(e), r.isDrawing = !1, _ && (fa(e), d([])));
  }
  return {
    start: g,
    stop: p,
    setMode: x,
    clear: S,
    getData: T,
    getState: M,
    destroy: A
  };
}
class Ol {
  listeners;
  constructor() {
    this.listeners = /* @__PURE__ */ new Map([
      ["drawStart", /* @__PURE__ */ new Set()],
      ["drawUpdate", /* @__PURE__ */ new Set()],
      ["drawEnd", /* @__PURE__ */ new Set()],
      ["editStart", /* @__PURE__ */ new Set()],
      ["editEnd", /* @__PURE__ */ new Set()]
    ]);
  }
  on(t, n) {
    if (!this.listeners.has(t)) {
      console.warn("Event binding must be one of 'drawStart', 'drawUpdate', or 'drawEnd'.");
      return;
    }
    this.listeners.get(t).add(n);
  }
  off(t, n) {
    this.listeners.has(t) && this.listeners.get(t).delete(n);
  }
  dispatchEvent(t, n) {
    this.listeners.has(t) && this.listeners.get(t).forEach((r) => {
      r(n);
    });
  }
}
function po(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e === null || typeof e != "object")
    return e;
  if (t.has(e))
    return t.get(e);
  if (typeof e.clone == "function")
    try {
      const r = e.clone();
      if (r)
        return r;
    } catch {
    }
  if (e instanceof Date)
    return new Date(e.getTime());
  if (Array.isArray(e)) {
    const r = [];
    return t.set(e, r), e.forEach((o, a) => {
      r[a] = po(o, t);
    }), r;
  }
  const n = Object.create(Object.getPrototypeOf(e));
  return t.set(e, n), Reflect.ownKeys(e).forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(e, r);
    o && ("value" in o && (o.value = po(o.value, t)), Object.defineProperty(n, r, o));
  }), n;
}
const pa = 100, ko = 1e-4, Ft = (e, t) => Math.sqrt((e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2), ur = (e) => {
  let t = 0;
  return e && Array.isArray(e) && e.length > 0 && e.forEach((n, r) => {
    r < e.length - 1 && (t += Ft(n, e[r + 1]));
  }), t;
}, he = (e) => ur(e) ** 0.99, ge = (e, t) => [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2], Hl = (e, t, n) => {
  const r = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2], o = [r[0] - e[1] + t[1], r[1] + e[0] - t[0]], a = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2], i = [a[0] - e[1] + n[1], a[1] + e[0] - n[0]];
  return Bl(r, o, a, i);
}, Bl = (e, t, n, r) => {
  if (e[1] === t[1]) {
    const c = (r[0] - n[0]) / (r[1] - n[1]) * (e[1] - n[1]) + n[0], d = e[1];
    return [c, d];
  }
  if (n[1] === r[1]) {
    const c = (t[0] - e[0]) / (t[1] - e[1]) * (n[1] - e[1]) + e[0], d = n[1];
    return [c, d];
  }
  const o = (t[0] - e[0]) / (t[1] - e[1]), a = (r[0] - n[0]) / (r[1] - n[1]), i = (o * e[1] - e[0] - a * n[1] + n[0]) / (o - a);
  return [o * i - o * e[1] + e[0], i];
}, He = (e, t) => {
  let n;
  const r = Ft(e, t);
  if (!Number.isFinite(r) || r <= 1e-12)
    return 0;
  const o = Math.min(
    1,
    Math.max(0, Math.abs(t[1] - e[1]) / r)
  ), a = Math.asin(o);
  return t[1] >= e[1] && t[0] >= e[0] ? n = a + Math.PI : t[1] >= e[1] && t[0] < e[0] ? n = Math.PI * 2 - a : t[1] < e[1] && t[0] < e[0] ? n = a : t[1] < e[1] && t[0] >= e[0] && (n = Math.PI - a), n;
}, mo = (e, t, n) => {
  const r = He(t, e) - He(t, n);
  return r < 0 ? r + Math.PI * 2 : r;
}, vn = (e, t, n) => (n[1] - e[1]) * (t[0] - e[0]) > (t[1] - e[1]) * (n[0] - e[0]), ql = (e, t, n, r, o) => {
  e = Math.max(Math.min(e, 1), 0);
  const [a, i] = [1 - e, e * e], s = i * e, l = a * a, c = l * a, d = c * t[0] + 3 * l * e * n[0] + 3 * a * i * r[0] + s * o[0], u = c * t[1] + 3 * l * e * n[1] + 3 * a * i * r[1] + s * o[1];
  return [d, u];
}, mt = (e, t, n, r, o) => {
  const a = He(e, t), i = o ? a + n : a - n, s = r * Math.cos(i), l = r * Math.sin(i);
  return [t[0] + s, t[1] + l];
}, Ii = (e, t, n, r) => {
  let [o, a, i, s] = [null, null, [], r - n];
  s = s < 0 ? s + Math.PI * 2 : s;
  for (let l = 0; l <= 100; l++) {
    const c = n + s * l / 100;
    o = e[0] + t * Math.cos(c), a = e[1] + t * Math.sin(c), i.push([o, a]);
  }
  return i;
}, Ao = (e, t, n, r) => {
  const o = Do(t, n, r);
  let [a, i, s, l, c] = [null, null, null, null, null];
  const d = Math.sqrt(o[0] * o[0] + o[1] * o[1]), u = o[0] / d, f = o[1] / d, h = Ft(t, n), g = Ft(n, r);
  return d > ko ? vn(t, n, r) ? (s = e * h, l = n[0] - s * f, c = n[1] + s * u, a = [l, c], s = e * g, l = n[0] + s * f, c = n[1] - s * u, i = [l, c]) : (s = e * h, l = n[0] + s * f, c = n[1] - s * u, a = [l, c], s = e * g, l = n[0] - s * f, c = n[1] + s * u, i = [l, c]) : (l = n[0] + e * (t[0] - n[0]), c = n[1] + e * (t[1] - n[1]), a = [l, c], l = n[0] + e * (r[0] - n[0]), c = n[1] + e * (r[1] - n[1]), i = [l, c]), [a, i];
}, Do = (e, t, n) => {
  let r = e[0] - t[0], o = e[1] - t[1];
  const a = Math.sqrt(r * r + o * o);
  r /= a, o /= a;
  let i = n[0] - t[0], s = n[1] - t[1];
  const l = Math.sqrt(i * i + s * s);
  i /= l, s /= l;
  const c = r + i, d = o + s;
  return [c, d];
}, Vl = (e, t) => {
  let [n, r, o, a, i] = [e[0], e[1], e[2], null, null];
  const l = Ao(0, n, r, o)[0], c = Do(n, r, o);
  if (Math.sqrt(c[0] * c[0] + c[1] * c[1]) > ko) {
    const u = ge(n, r), f = n[0] - u[0], h = n[1] - u[1], p = 2 / Ft(n, r), x = -p * h, S = p * f, T = x * x - S * S, M = 2 * x * S, A = S * S - x * x, _ = l[0] - u[0], k = l[1] - u[1];
    a = u[0] + T * _ + M * k, i = u[1] + M * _ + A * k;
  } else
    a = n[0] + t * (r[0] - n[0]), i = n[1] + t * (r[1] - n[1]);
  return [a, i];
}, $l = (e, t) => {
  const n = e.length, r = e[n - 3], o = e[n - 2], a = e[n - 1], s = Ao(0, r, o, a)[1], l = Do(r, o, a), c = Math.sqrt(l[0] * l[0] + l[1] * l[1]);
  let [d, u] = [null, null];
  if (c > ko) {
    const f = ge(o, a), h = a[0] - f[0], g = a[1] - f[1], x = 2 / Ft(o, a), S = -x * g, T = x * h, M = S * S - T * T, A = 2 * S * T, _ = T * T - S * S, k = s[0] - f[0], C = s[1] - f[1];
    d = f[0] + M * k + A * C, u = f[1] + A * k + _ * C;
  } else
    d = a[0] + t * (o[0] - a[0]), u = a[1] + t * (o[1] - a[1]);
  return [d, u];
}, Wo = (e, t) => {
  const n = Vl(t, e);
  let [r, o, a, i, s] = [null, null, null, [n], []];
  for (let c = 0; c < t.length - 2; c++) {
    [r, o, a] = [t[c], t[c + 1], t[c + 2]];
    const d = Ao(e, r, o, a);
    i = i.concat(d);
  }
  const l = $l(t, e);
  l && i.push(l);
  for (let c = 0; c < t.length - 1; c++) {
    r = t[c], o = t[c + 1], s.push(r);
    for (let d = 0; d < pa; d++) {
      const u = ql(d / pa, r, i[c * 2], i[c * 2 + 1], o);
      s.push(u);
    }
    s.push(o);
  }
  return s;
}, Or = function(e) {
  if (e.length <= 2)
    return e;
  const t = [], n = e.length - 1;
  for (let r = 0; r <= 1; r += 0.01) {
    let [o, a] = [0, 0];
    for (let i = 0; i <= n; i++) {
      const s = Ul(n, i), l = r ** i, c = (1 - r) ** (n - i);
      o += s * l * c * e[i][0], a += s * l * c * e[i][1];
    }
    t.push([o, a]);
  }
  return t.push(e[n]), t;
}, Hr = (e) => {
  let t = 1;
  switch (e) {
    case e <= 1:
      t = 1;
      break;
    case e === 2:
      t = 2;
      break;
    case e === 3:
      t = 6;
      break;
    case e === 24:
      t = 24;
      break;
    case e === 5:
      t = 120;
      break;
    default:
      for (let n = 1; n <= e; n++)
        t *= n;
      break;
  }
  return t;
}, Ul = (e, t) => Hr(e) / (Hr(t) * Hr(e - t)), De = (e) => {
  if (e.length <= 2)
    return e;
  const [t, n] = [2, []], r = e.length - t - 1;
  n.push(e[0]);
  for (let o = 0; o <= r; o++)
    for (let a = 0; a <= 1; a += 0.05) {
      let [i, s] = [0, 0];
      for (let l = 0; l <= t; l++) {
        const c = jl(l, a);
        i += c * e[o + l][0], s += c * e[o + l][1];
      }
      n.push([i, s]);
    }
  return n.push(e[e.length - 1]), n;
}, jl = (e, t) => {
  let n = 0;
  return e === 0 ? n = (t - 1) ** 2 / 2 : e === 1 ? n = (-2 * t ** 2 + 2 * t + 1) / 2 : e === 2 && (n = t ** 2 / 2), n;
};
class Kt {
  cesium;
  viewer;
  eventHandler;
  polygonEntity;
  geometryPoints = [];
  state = "drawing";
  controlPoints = [];
  controlPointsEventHandler;
  lineEntity;
  pointEntity;
  type;
  freehand;
  style;
  outlineEntity;
  eventDispatcher;
  dragEventHandler;
  entityId = "";
  points = [];
  styleCache;
  minPointsForShape = 0;
  tempLineEntity;
  selected = !1;
  drawingFinishedAt = 0;
  constructor(t, n, r) {
    this.cesium = t, this.viewer = n, this.type = this.getType(), this.mergeStyle(r), this.cartesianToLnglat = this.cartesianToLnglat.bind(this), this.pixelToCartesian = this.pixelToCartesian.bind(this), this.eventDispatcher = new Ol(), n.trackedEntity = void 0, this.onClick(), this.onDoubleClick();
  }
  mergeStyle(t) {
    this.type === "polygon" ? this.style = Object.assign(
      {
        material: new this.cesium.Color(),
        outlineMaterial: new this.cesium.Color(),
        outlineWidth: 2
      },
      t
    ) : this.type === "line" ? this.style = Object.assign(
      {
        material: new this.cesium.Color(),
        lineWidth: 2
      },
      t
    ) : this.type === "point" && (this.style = Object.assign(
      {
        color: this.cesium.Color.CYAN,
        pixelSize: 10,
        outlineColor: this.cesium.Color.WHITE,
        outlineWidth: 2
      },
      t
    )), this.styleCache = po(this.style);
  }
  /**
   * The base class provides a method to change the state, and different logic is implemented based on the state.
   *  The state is controlled by individual sub-components according to the actual situation.
   * @param state
   */
  setState(t) {
    this.state = t;
  }
  getState() {
    return this.state;
  }
  /**
   * Bind a global click event that responds differently based on the state. When in the drawing state,
   * a click will add points for geometric shapes. During editing, selecting a drawn shape puts it in an
   *  editable state. Clicking on empty space sets it to a static state.
   */
  onClick() {
    this.eventHandler = new this.cesium.ScreenSpaceEventHandler(this.viewer.canvas), this.eventHandler.setInputAction((t) => {
      const n = this.viewer.scene.pick(t.position), r = this.cesium.defined(n) && n.id instanceof this.cesium.Entity;
      if (this.state === "drawing") {
        const o = this.pixelToCartesian(t.position), a = this.getPoints();
        if (!o || !this.freehand && a.length > 0 && !this.checkDistance(o, a[a.length - 1]))
          return;
        this.addPoint(o), this.getPoints().length === 1 && this.eventDispatcher.dispatchEvent("drawStart"), this.eventDispatcher.dispatchEvent("drawUpdate", o);
      } else if (this.state === "edit") {
        const o = r && this.controlPoints.includes(n.id), a = r && this.isCurrentEntity(n.id.id);
        !o && !a && (this.setState("static"), this.removeControlPoints(), this.disableDrag(), this.eventDispatcher.dispatchEvent("editEnd", this.getPoints()));
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  onMouseMove() {
    this.eventHandler.setInputAction((t) => {
      const n = this.getPoints(), r = this.pixelToCartesian(t.endPosition);
      r && this.checkDistance(r, n[n.length - 1]) && this.updateMovingPoint(r, n.length);
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }
  onDoubleClick() {
    this.eventHandler.setInputAction((t) => {
      if (this.state === "drawing") {
        this.finishDrawing();
        return;
      }
      if (this.state !== "static" || Date.now() - this.drawingFinishedAt < 500)
        return;
      const n = this.viewer.scene.pick(t.position);
      this.cesium.defined(n) && n.id instanceof this.cesium.Entity && this.isCurrentEntity(n.id.id) && (this.setState("edit"), this.addControlPoints(), this.eventDispatcher.dispatchEvent("editStart"));
    }, this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }
  /**
   * Check if the distance between two points is greater than 10 meters.
   */
  checkDistance(t, n) {
    return this.cesium.Cartesian3.distance(t, n) > 10;
  }
  finishDrawing() {
    this.type === "polygon" && this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    const t = this.polygonEntity || this.lineEntity || this.pointEntity;
    t && (this.removeMoveListener(), this.setState("static"), this.drawingFinishedAt = Date.now(), this.entityId = t.id, this.eventDispatcher.dispatchEvent("drawEnd", this.getPoints()));
  }
  /**
   * 选择只改变显示效果，不进入控制点编辑状态。
   * 双击图形后才由 onDoubleClick 切换到 edit。
   */
  setSelected(t) {
    this.selected = !!t, this.type === "polygon" && this.outlineEntity?.polyline ? this.outlineEntity.polyline.width = this.selected ? Number(this.style.outlineWidth || 2) + 2 : this.style.outlineWidth : this.type === "line" && this.lineEntity?.polyline ? this.lineEntity.polyline.width = this.selected ? Number(this.style.lineWidth || 2) + 2 : this.style.lineWidth : this.type === "point" && this.pointEntity?.point && (this.pointEntity.point.pixelSize = this.selected ? Number(this.style.pixelSize || 10) + 4 : this.style.pixelSize);
  }
  isSelected() {
    return this.selected;
  }
  removeClickListener() {
    this.eventHandler?.removeInputAction(this.cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  removeMoveListener() {
    this.eventHandler?.removeInputAction(this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }
  removeDoubleClickListener() {
    this.eventHandler?.removeInputAction(this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }
  setGeometryPoints(t) {
    this.geometryPoints = t;
  }
  getGeometryPoints() {
    return this.geometryPoints;
  }
  drawPolygon() {
    const t = () => new this.cesium.PolygonHierarchy(this.geometryPoints);
    if (!this.polygonEntity) {
      const n = this.style;
      this.polygonEntity = this.viewer.entities.add({
        polygon: new this.cesium.PolygonGraphics({
          hierarchy: new this.cesium.CallbackProperty(t, !1),
          show: !0,
          material: n.material
        })
      }), this.outlineEntity = this.viewer.entities.add({
        polyline: {
          positions: new this.cesium.CallbackProperty(() => [...this.geometryPoints, this.geometryPoints[0]], !1),
          width: n.outlineWidth,
          material: n.outlineMaterial,
          clampToGround: !0
        }
      });
    }
  }
  drawLine() {
    if (!this.lineEntity) {
      const t = this.style;
      this.lineEntity = this.addLineEntity(t);
    }
  }
  drawPoint() {
    if (!this.pointEntity) {
      const t = this.style;
      this.pointEntity = this.viewer.entities.add({
        position: new this.cesium.CallbackProperty(
          () => this.geometryPoints[0],
          !1
        ),
        point: {
          pixelSize: t.pixelSize,
          color: t.color,
          outlineColor: t.outlineColor,
          outlineWidth: t.outlineWidth,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND
        }
      });
    }
  }
  addTempLine() {
    if (!this.tempLineEntity) {
      const t = this.style, n = {
        material: t.outlineMaterial,
        lineWidth: t.outlineWidth
      };
      this.tempLineEntity = this.addLineEntity(n);
    }
  }
  removeTempLine() {
    this.tempLineEntity && (this.viewer.entities.remove(this.tempLineEntity), this.tempLineEntity = null);
  }
  addLineEntity(t) {
    return this.viewer.entities.add({
      polyline: {
        positions: new this.cesium.CallbackProperty(() => this.geometryPoints, !1),
        width: t.lineWidth,
        material: t.material,
        clampToGround: !0
      }
    });
  }
  cartesianToLnglat(t) {
    const n = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(t), r = this.cesium.Math.toDegrees(n.latitude);
    return [this.cesium.Math.toDegrees(n.longitude), r];
  }
  pixelToCartesian(t) {
    if (this.viewer.scene.pickPositionSupported) {
      const o = this.viewer.scene.pickPosition(t);
      if (this.cesium.defined(o))
        return o;
    }
    const n = this.viewer.camera.getPickRay(t);
    return this.viewer.scene.globe.pick(n, this.viewer.scene);
  }
  /**
   * Display key points when creating a shape, allowing dragging of these points to edit and generate new shapes.
   */
  addControlPoints() {
    const t = this.getPoints();
    this.controlPoints = t.map((i) => this.viewer.entities.add({
      position: i,
      point: {
        pixelSize: 10,
        heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
        color: this.cesium.Color.RED
      }
    }));
    let n = !1, r = null, o, a = null;
    this.controlPointsEventHandler = new this.cesium.ScreenSpaceEventHandler(this.viewer.canvas), this.controlPointsEventHandler.setInputAction((i) => {
      const s = this.viewer.scene.pick(i.position);
      if (this.cesium.defined(s)) {
        for (let l = 0; l < this.controlPoints.length; l++)
          if (s.id === this.controlPoints[l]) {
            n = !0, r = this.controlPoints[l], o = r.position._value, r.index = l, a = this.disableCameraForDrag();
            break;
          }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN), this.controlPointsEventHandler.setInputAction((i) => {
      if (n && r) {
        const s = this.pixelToCartesian(i.endPosition);
        s && (r.position.setValue(s), this.updateDraggingPoint(s, r.index));
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE), this.controlPointsEventHandler.setInputAction(() => {
      r && !this.cesium.Cartesian3.equals(o, r.position._value) && this.eventDispatcher.dispatchEvent("drawUpdate", r.position._value), n = !1, r = null, this.restoreCameraAfterDrag(a), a = null;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }
  removeControlPoints() {
    this.controlPoints.forEach((t) => {
      this.viewer.entities.remove(t);
    }), this.controlPoints = [], this.destroyHandler(this.controlPointsEventHandler), this.controlPointsEventHandler = void 0;
  }
  /**
   * Allow the entire shape to be dragged while in edit mode.
   */
  draggable() {
    let t = !1, n, r = null;
    this.dragEventHandler = new this.cesium.ScreenSpaceEventHandler(this.viewer.canvas), this.dragEventHandler.setInputAction((o) => {
      const a = this.viewer.scene.camera.getPickRay(o.position);
      if (a) {
        const i = this.viewer.scene.globe.pick(a, this.viewer.scene), s = this.viewer.scene.pick(o.position);
        if (this.cesium.defined(s) && s.id instanceof this.cesium.Entity) {
          const l = s.id;
          this.isCurrentEntity(l.id) && (t = !0, n = i, r = this.disableCameraForDrag());
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN), this.dragEventHandler.setInputAction((o) => {
      if (t && n) {
        const a = this.pixelToCartesian(o.endPosition);
        if (a) {
          const i = this.cesium.Cartesian3.subtract(a, n, new this.cesium.Cartesian3()), s = this.geometryPoints.map((l) => this.cesium.Cartesian3.add(l, i, new this.cesium.Cartesian3()));
          this.points = this.points.map((l) => this.cesium.Cartesian3.add(l, i, new this.cesium.Cartesian3())), this.controlPoints.map((l) => {
            const c = l.position?.getValue(this.cesium.JulianDate.now()), d = this.cesium.Cartesian3.add(c, i, new this.cesium.Cartesian3());
            l.position?.setValue(d);
          }), this.setGeometryPoints(s), this.minPointsForShape === 4 && (this.curveControlPointLeft = this.cesium.Cartesian3.add(this.curveControlPointLeft, i, new this.cesium.Cartesian3()), this.curveControlPointRight = this.cesium.Cartesian3.add(this.curveControlPointRight, i, new this.cesium.Cartesian3())), n = a;
        }
      } else if (this.viewer.scene.camera.getPickRay(o.endPosition)) {
        const i = this.viewer.scene.pick(o.endPosition);
        if (this.cesium.defined(i) && i.id instanceof this.cesium.Entity) {
          const s = i.id;
          this.isCurrentEntity(s.id) ? this.viewer.scene.canvas.style.cursor = "move" : this.viewer.scene.canvas.style.cursor = "default";
        } else
          this.viewer.scene.canvas.style.cursor = "default";
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE), this.dragEventHandler.setInputAction(() => {
      t = !1, n = void 0, this.restoreCameraAfterDrag(r), r = null;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }
  disableCameraForDrag() {
    const t = this.viewer.scene.screenSpaceCameraController, n = {
      enableRotate: t.enableRotate,
      enableTranslate: t.enableTranslate
    };
    return t.enableRotate = !1, t.enableTranslate = !1, n;
  }
  restoreCameraAfterDrag(t) {
    if (!t) return;
    const n = this.viewer.scene.screenSpaceCameraController;
    n.enableRotate = t.enableRotate, n.enableTranslate = t.enableTranslate;
  }
  // Finish editing, disable dragging."
  disableDrag() {
    this.destroyHandler(this.dragEventHandler), this.dragEventHandler = void 0, this.viewer.scene.canvas.style.cursor = "default";
  }
  deactivate() {
    this.state === "edit" && (this.setState("static"), this.removeControlPoints(), this.disableDrag(), this.eventDispatcher.dispatchEvent("editEnd", this.getPoints()));
  }
  show(t) {
    if (t) {
      const { duration: n, delay: r, callback: o } = t;
      this.showWithAnimation(n, r, o);
      return;
    } else
      this.showWithAnimation(0, 0);
  }
  hide(t) {
    if (t) {
      const { duration: n, delay: r, callback: o } = t;
      this.hideWithAnimation(n, r, o);
      return;
    } else
      this.hideWithAnimation(0, 0);
  }
  showWithAnimation(t = 2e3, n = 0, r) {
    if (this.state === "hidden") {
      if (this.setState("static"), this.type === "polygon") {
        let o = 0.3;
        const a = this.styleCache.material;
        a.image ? o = a.color.getValue().alpha : o = a.alpha, this.animateOpacity(this.polygonEntity, o, t, n, r, this.state);
        const i = this.styleCache?.outlineMaterial?.alpha;
        this.animateOpacity(this.outlineEntity, i || 1, t, n, void 0, this.state);
      } else if (this.type === "line") {
        const o = this.styleCache.material;
        let a = 1;
        o.image ? a = o.color.alpha : o.dashLength ? a = o.color.getValue().alpha : a = this.styleCache?.material?.alpha, this.animateOpacity(this.lineEntity, a, t, n, r, this.state);
      } else if (this.type === "point") {
        const o = this.styleCache?.color?.alpha ?? 1;
        this.animateOpacity(this.pointEntity, o, t, n, r, this.state);
      }
      t != 0 && this.setState("animating");
    }
  }
  hideWithAnimation(t = 2e3, n = 0, r) {
    this.state === "hidden" || this.state != "static" || (this.setState("hidden"), this.type === "polygon" ? (this.animateOpacity(this.polygonEntity, 0, t, n, r, this.state), this.animateOpacity(this.outlineEntity, 0, t, n, void 0, this.state)) : this.type === "line" ? this.animateOpacity(this.lineEntity, 0, t, n, r, this.state) : this.type === "point" && this.animateOpacity(this.pointEntity, 0, t, n, r, this.state), t != 0 && this.setState("animating"));
  }
  animateOpacity(t, n, r, o, a, i) {
    setTimeout(() => {
      const s = t.polygon || t.polyline || t.billboard || t.point;
      let l, c = s.material;
      c ? c.image && c.color.alpha !== void 0 ? l = c.color.alpha : l = c.color.getValue().alpha : l = s.color.getValue().alpha;
      let d = 0;
      const u = (f) => {
        d || (d = f);
        const h = f - d;
        if (h < r) {
          const g = h / r * (n - l), p = l + g;
          if (c)
            if (c.image && c.color.alpha !== void 0)
              c.color.alpha = p;
            else {
              const x = c.color.getValue().withAlpha(p);
              c.color.setValue(x);
            }
          else {
            const S = s.color.getValue().withAlpha(p);
            s.color.setValue(S);
          }
          requestAnimationFrame(u);
        } else {
          a && a();
          const g = i || "static";
          if (c)
            if (c.image && c.color.alpha !== void 0)
              c.color.alpha = n;
            else {
              const p = c.color.getValue().withAlpha(n);
              c.color.setValue(p);
            }
          else {
            const x = s.color.getValue().withAlpha(n);
            s.color.setValue(x);
          }
          requestAnimationFrame(() => {
            this.setState(g);
          });
        }
      };
      requestAnimationFrame(u);
    }, o);
  }
  startGrowthAnimation(t) {
    const { duration: n = 2e3, delay: r = 0, callback: o } = t || {};
    if (!(this.state === "hidden" || this.state != "static")) {
      if (!this.minPointsForShape) {
        console.warn("Growth animation is not supported for this type of shape");
        return;
      }
      if (this.setState("animating"), this.minPointsForShape === 4) {
        this.doubleArrowGrowthAnimation(n, r, o);
        return;
      }
      setTimeout(() => {
        this.hideWithAnimation(0, 0, void 0);
        const a = this.getPoints();
        let i = 0;
        this.minPointsForShape === 2 ? i = n / (a.length - 1) : i = n / (a.length - 2);
        let s = Date.now(), l = 0;
        this.viewer.clock.shouldAnimate = !0;
        const c = (d) => {
          const f = Date.now() - s;
          if (f >= n) {
            this.setGeometryPoints(this.createGraphic(a)), o && o(), s = 0, this.viewer.clock.shouldAnimate = !1, this.viewer.clock.onTick.removeEventListener(c), this.setState("static");
            return;
          }
          const h = Math.floor(f / i);
          let g;
          this.minPointsForShape === 2 ? l = h + 1 : l = h + 2, g = a[l - 1], h == 0 && this.minPointsForShape === 3 && (g = this.cesium.Cartesian3.midpoint(a[0], a[1], new this.cesium.Cartesian3()));
          let p = a[l];
          const x = (f - h * i) / i, S = Math.min(1, Math.max(1e-4, x)), T = this.cesium.Cartesian3.lerp(g, p, S, new this.cesium.Cartesian3()), M = a.slice(0, l + 1);
          M[M.length - 1] = T;
          const A = this.createGraphic(M);
          this.setGeometryPoints(A), this.showWithAnimation(0, 0, void 0);
        };
        this.viewer.clock.onTick.addEventListener(c);
      }, r);
    }
  }
  doubleArrowGrowthAnimation(t = 2e3, n = 0, r) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
      const o = this.getPoints();
      let a = Date.now();
      this.viewer.clock.shouldAnimate = !0;
      const i = (s) => {
        const c = Date.now() - a;
        if (c >= t) {
          r && r(), a = 0, this.viewer.clock.shouldAnimate = !1, this.viewer.clock.onTick.removeEventListener(i), this.setState("static");
          return;
        }
        const d = this.cesium.Cartesian3.midpoint(o[0], o[1], new this.cesium.Cartesian3()), u = this.cesium.Cartesian3.midpoint(o[0], d, new this.cesium.Cartesian3()), f = this.cesium.Cartesian3.midpoint(d, o[1], new this.cesium.Cartesian3());
        let h = o[3], g = o[2];
        const p = c / t, x = this.getBezierControlPointforGrowthAnimation();
        let S = [u, x.left, h], T = [f, x.right, g];
        const M = this.getNewPosition(S, p), A = this.getNewPosition(T, p), _ = [...o];
        _[2] = A, _[3] = M;
        const k = this.createGraphic(_);
        this.setGeometryPoints(k), this.showWithAnimation(0, 0, void 0);
      };
      this.viewer.clock.onTick.addEventListener(i);
    }, n);
  }
  getNewPosition(t, n) {
    t = t.map((a) => this.cartesianToLnglat(a));
    let r = Wo(0.3, t);
    return r = r.map((a) => this.cesium.Cartesian3.fromDegrees(a[0], a[1])), this.interpolateAlongCurve(r, n);
  }
  interpolateAlongCurve(t, n) {
    const r = t.length - 1, o = Math.floor(n * r), a = n * r - o, i = t[o], s = t[o + 1], l = i.x + (s.x - i.x) * a, c = i.y + (s.y - i.y) * a, d = i.z + (s.z - i.z) * a;
    return new this.cesium.Cartesian3(l, c, d);
  }
  remove() {
    this.type === "polygon" ? (this.polygonEntity && this.viewer.entities.remove(this.polygonEntity), this.outlineEntity && this.viewer.entities.remove(this.outlineEntity), this.polygonEntity = null, this.outlineEntity = null, this.lineEntity = null) : this.type === "line" ? (this.lineEntity && this.viewer.entities.remove(this.lineEntity), this.lineEntity = null) : this.type === "point" && (this.pointEntity && this.viewer.entities.remove(this.pointEntity), this.pointEntity = null), this.removeTempLine(), this.removeControlPoints(), this.disableDrag(), this.destroyHandler(this.eventHandler), this.eventHandler = void 0;
  }
  destroyHandler(t) {
    t && (!t.isDestroyed || !t.isDestroyed()) && t.destroy();
  }
  on(t, n) {
    this.eventDispatcher.on(t, n);
  }
  off(t, n) {
    this.eventDispatcher.off(t, n);
  }
  isCurrentEntity(t) {
    return t == null || t === "" ? !1 : this.entityId === t || this.polygonEntity?.id === t || this.lineEntity?.id === t || this.pointEntity?.id === t || this.outlineEntity?.id === t;
  }
  addPoint(t) {
  }
  getPoints() {
    return [new this.cesium.Cartesian3()];
  }
  updateMovingPoint(t, n) {
  }
  updateDraggingPoint(t, n) {
  }
  getType() {
    return "polygon";
  }
  createGraphic(t) {
    return t;
  }
}
class Ri extends Kt {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 2;
  tailWidthFactor;
  neckWidthFactor;
  headWidthFactor;
  headAngle;
  neckAngle;
  minPointsForShape;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.tailWidthFactor = 0.1, this.neckWidthFactor = 0.2, this.headWidthFactor = 0.25, this.headAngle = Math.PI / 8.5, this.neckAngle = Math.PI / 13, this.minPointsForShape = 2, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    if (this.points.length < 2 && (this.points.push(t), this.onMouseMove()), this.points.length === 2) {
      const n = this.createGraphic(this.points);
      this.setGeometryPoints(n), this.drawPolygon(), this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const [n, r] = t.map(this.cartesianToLnglat), o = he([n, r]), a = o * this.tailWidthFactor, i = o * this.neckWidthFactor, s = o * this.headWidthFactor, l = mt(r, n, Math.PI / 2, a, !0), c = mt(r, n, Math.PI / 2, a, !1), d = mt(n, r, this.headAngle, s, !1), u = mt(n, r, this.headAngle, s, !0), f = mt(n, r, this.neckAngle, i, !1), h = mt(n, r, this.neckAngle, i, !0), g = [...l, ...f, ...d, ...r, ...u, ...h, ...c, ...n];
    return this.cesium.Cartesian3.fromDegreesArray(g);
  }
  getPoints() {
    return this.points;
  }
}
class Co extends Kt {
  points = [];
  headHeightFactor;
  headWidthFactor;
  neckHeightFactor;
  neckWidthFactor;
  headTailFactor;
  minPointsForShape;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.headTailFactor = 0.8, this.minPointsForShape = 3, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 && (this.setGeometryPoints(this.points), this.drawPolygon());
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    if (this.setGeometryPoints(n), n.length === 2)
      this.addTempLine();
    else {
      this.removeTempLine();
      const r = this.createGraphic(n);
      this.setGeometryPoints(r), this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((T) => this.cartesianToLnglat(T));
    let [r, o] = [n[0], n[1]];
    vn(n[0], n[1], n[2]) && (r = n[1], o = n[0]);
    const i = [ge(r, o)].concat(n.slice(2)), s = this.getArrowHeadPoints(i, r, o), [l, c] = [s[0], s[4]], d = Ft(r, o) / he(i), u = this.getArrowBodyPoints(i, l, c, d), f = u.length;
    let h = [r].concat(u.slice(0, f / 2));
    h.push(l);
    let g = [o].concat(u.slice(f / 2, f));
    g.push(c), h = De(h), g = De(g);
    const p = h.concat(s, g.reverse()), x = [].concat(...p);
    return this.cesium.Cartesian3.fromDegreesArray(x);
  }
  getPoints() {
    return this.points;
  }
  getArrowHeadPoints(t, n, r) {
    try {
      let o = he(t), a = o * this.headHeightFactor;
      const i = t[t.length - 1];
      o = Ft(i, t[t.length - 2]);
      const s = Ft(n, r);
      a > s * this.headTailFactor && (a = s * this.headTailFactor);
      const l = a * this.headWidthFactor, c = a * this.neckWidthFactor;
      a = a > o ? o : a;
      const d = a * this.neckHeightFactor, u = mt(t[t.length - 2], i, 0, a, !0), f = mt(t[t.length - 2], i, 0, d, !0), h = mt(i, u, Math.PI / 2, l, !1), g = mt(i, u, Math.PI / 2, l, !0), p = mt(i, f, Math.PI / 2, c, !1), x = mt(i, f, Math.PI / 2, c, !0);
      return [p, h, i, g, x];
    } catch (o) {
      console.log(o);
    }
  }
  getArrowBodyPoints(t, n, r, o) {
    const a = ur(t), s = he(t) * o, l = Ft(n, r), c = (s - l) / 2;
    let [d, u, f] = [0, [], []];
    for (let h = 1; h < t.length - 1; h++) {
      const g = mo(t[h - 1], t[h], t[h + 1]) / 2;
      d += Ft(t[h - 1], t[h]);
      const p = (s / 2 - d / a * c) / Math.sin(g), x = mt(t[h - 1], t[h], Math.PI - g, p, !0), S = mt(t[h - 1], t[h], g, p, !1);
      u.push(x), f.push(S);
    }
    return u.concat(f);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
}
class Kl extends Co {
  points = [];
  headHeightFactor;
  headWidthFactor;
  neckHeightFactor;
  neckWidthFactor;
  headTailFactor;
  tailWidthFactor;
  swallowTailFactor;
  swallowTailPnt;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.headTailFactor = 0.8, this.swallowTailFactor = 1, this.swallowTailPnt = [0, 0], this.minPointsForShape = 3;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((_) => this.cartesianToLnglat(_));
    let [r, o] = [n[0], n[1]];
    vn(n[0], n[1], n[2]) && (r = n[1], o = n[0]);
    const i = [ge(r, o)].concat(n.slice(2)), s = this.getArrowHeadPoints(i, r, o), [l, c] = [s[0], s[4]], d = Ft(r, o), u = he(i), f = u * this.tailWidthFactor * this.swallowTailFactor;
    this.swallowTailPnt = mt(i[1], i[0], 0, f, !0);
    const h = d / u, g = this.getArrowBodyPoints(i, l, c, h), p = g.length;
    let x = [r].concat(g.slice(0, p / 2));
    x.push(l);
    let S = [o].concat(g.slice(p / 2, p));
    S.push(c), x = De(x), S = De(S);
    const T = x.concat(s, S.reverse(), [this.swallowTailPnt, x[0]]), M = [].concat(...T);
    return this.cesium.Cartesian3.fromDegreesArray(M);
  }
}
class Fi extends Co {
  points = [];
  headHeightFactor;
  headWidthFactor;
  neckHeightFactor;
  neckWidthFactor;
  tailWidthFactor;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.minPointsForShape = 2;
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length > 2 && this.lineEntity && this.viewer.entities.remove(this.lineEntity);
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    if (this.setGeometryPoints(n), !(n.length < 2)) {
      const r = this.createGraphic(n);
      this.setGeometryPoints(r), this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((g) => this.cartesianToLnglat(g)), r = this.getTailPoints(n), o = this.getArrowHeadPoints(n, r[0], r[1]), a = o[0], i = o[4], s = this.getArrowBodyPoints(n, a, i, this.tailWidthFactor), l = s.length;
    let c = [r[0]].concat(s.slice(0, l / 2));
    c.push(a);
    let d = [r[1]].concat(s.slice(l / 2, l));
    d.push(i), c = De(c), d = De(d);
    const u = c.concat(o, d.reverse()), f = [].concat(...u);
    return this.cesium.Cartesian3.fromDegreesArray(f);
  }
  getTailPoints(t) {
    const r = he(t) * this.tailWidthFactor, o = mt(t[1], t[0], Math.PI / 2, r, !1), a = mt(t[1], t[0], Math.PI / 2, r, !0);
    return [o, a];
  }
}
class Yl extends Fi {
  points = [];
  headHeightFactor;
  headWidthFactor;
  neckHeightFactor;
  neckWidthFactor;
  tailWidthFactor;
  swallowTailFactor;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.swallowTailFactor = 1, this.minPointsForShape = 2;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((g) => this.cartesianToLnglat(g)), r = this.getTailPoints(n), o = this.getArrowHeadPoints(n, r[0], r[2]), a = o[0], i = o[4], s = this.getArrowBodyPoints(n, a, i, this.tailWidthFactor), l = s.length;
    let c = [r[0]].concat(s.slice(0, l / 2));
    c.push(a);
    let d = [r[2]].concat(s.slice(l / 2, l));
    d.push(i), c = De(c), d = De(d);
    const u = c.concat(o, d.reverse(), [r[1], c[0]]), f = [].concat(...u);
    return this.cesium.Cartesian3.fromDegreesArray(f);
  }
  getTailPoints(t) {
    const r = he(t) * this.tailWidthFactor, o = mt(t[1], t[0], Math.PI / 2, r, !1), a = mt(t[1], t[0], Math.PI / 2, r, !0), i = r * this.swallowTailFactor, s = mt(t[1], t[0], 0, i, !0);
    return [o, s, a];
  }
}
let Jl = class extends Kt {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 3e6;
  minPointsForShape;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.minPointsForShape = 2, this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    if (this.points.length < 2 && (this.points.push(t), this.onMouseMove()), this.points.length === 2) {
      const n = this.createGraphic(this.points);
      this.setGeometryPoints(n), this.drawLine(), this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawLine();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const [n, r] = t.map(this.cartesianToLnglat);
    let a = Ft(n, r) / this.arrowLengthScale;
    a = a > this.maxArrowLength ? this.maxArrowLength : a;
    const i = mt(n, r, Math.PI / 6, a / 2, !1), s = mt(n, r, Math.PI / 6, a / 2, !0), l = [...n, ...r, ...i, ...r, ...s];
    return this.cesium.Cartesian3.fromDegreesArray(l);
  }
  getPoints() {
    return this.points;
  }
};
class Ql extends Kt {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 3e6;
  t;
  minPointsForShape;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.t = 0.3, this.minPointsForShape = 2, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 && this.onMouseMove();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    let r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawLine();
  }
  createStraightArrow(t) {
    const [n, r] = t.map(this.cartesianToLnglat);
    let a = Ft(n, r) / this.arrowLengthScale;
    a = a > this.maxArrowLength ? this.maxArrowLength : a;
    const i = mt(n, r, Math.PI / 6, a / 2, !1), s = mt(n, r, Math.PI / 6, a / 2, !0), l = [...n, ...r, ...i, ...r, ...s];
    return this.cesium.Cartesian3.fromDegreesArray(l);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((f) => this.cartesianToLnglat(f));
    if (t.length === 2)
      return this.createStraightArrow(t);
    const r = Wo(this.t, n), o = n[n.length - 1];
    let i = ur(n) / this.arrowLengthScale;
    i = i > this.maxArrowLength ? this.maxArrowLength : i;
    const s = mt(r[r.length - 2], r[r.length - 1], Math.PI / 6, i / 2, !1), l = mt(r[r.length - 2], r[r.length - 1], Math.PI / 6, i / 2, !0), d = [...[].concat(...r), ...s, ...o, ...l];
    return this.cesium.Cartesian3.fromDegreesArray(d);
  }
  getPoints() {
    return this.points;
  }
}
class Xl extends Ri {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 2;
  tailWidthFactor;
  neckWidthFactor;
  headWidthFactor;
  headAngle;
  neckAngle;
  minPointsForShape;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.tailWidthFactor = 0.08, this.neckWidthFactor = 0.1, this.headWidthFactor = 0.13, this.headAngle = Math.PI / 4, this.neckAngle = Math.PI * 0.17741, this.minPointsForShape = 2, this.setState("drawing");
  }
  createGraphic(t) {
    const [n, r] = t.map(this.cartesianToLnglat), o = he([n, r]) * 1.5, a = o * this.tailWidthFactor, i = o * this.neckWidthFactor, s = o * this.headWidthFactor, l = mt(r, n, Math.PI / 2, a, !0), c = mt(r, n, Math.PI / 2, a, !1), d = mt(n, r, this.headAngle, s, !1), u = mt(n, r, this.headAngle, s, !0), f = mt(n, r, this.neckAngle, i, !1), h = mt(n, r, this.neckAngle, i, !0), g = [...l, ...f, ...d, ...r, ...u, ...h, ...c, ...n];
    return this.cesium.Cartesian3.fromDegreesArray(g);
  }
}
class Zl extends Kt {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 2;
  neckWidthFactor;
  headWidthFactor;
  headHeightFactor;
  neckHeightFactor;
  connPoint;
  tempPoint4;
  minPointsForShape;
  llBodyPnts = [];
  rrBodyPnts = [];
  curveControlPointLeft;
  curveControlPointRight;
  isClockWise;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.headHeightFactor = 0.25, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.connPoint = [0, 0], this.tempPoint4 = [0, 0], this.minPointsForShape = 4, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 ? (this.setGeometryPoints(this.points), this.drawPolygon()) : this.points.length === 3 ? this.lineEntity && this.viewer.entities.remove(this.lineEntity) : this.finishDrawing();
  }
  finishDrawing() {
    this.curveControlPointLeft = this.cesium.Cartesian3.fromDegrees(this.llBodyPnts[2][0], this.llBodyPnts[2][1]), this.curveControlPointRight = this.cesium.Cartesian3.fromDegrees(this.rrBodyPnts[1][0], this.rrBodyPnts[1][1]), super.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    if (this.setGeometryPoints(n), n.length === 2)
      this.addTempLine();
    else if (n.length > 2) {
      this.removeTempLine();
      const r = this.createGraphic(n);
      this.setGeometryPoints(r), this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const n = t.map((_) => this.cartesianToLnglat(_)), [r, o, a] = [n[0], n[1], n[2]], i = n.length;
    i === 3 ? (this.tempPoint4 = this.getTempPoint4(r, o, a), this.connPoint = ge(r, o)) : i === 4 ? (this.tempPoint4 = n[3], this.connPoint = ge(r, o)) : (this.tempPoint4 = n[3], this.connPoint = n[4]);
    let s, l;
    this.isClockWise = vn(r, o, a), this.isClockWise ? (s = this.getArrowPoints(r, this.connPoint, this.tempPoint4, !1), l = this.getArrowPoints(this.connPoint, o, a, !0)) : (s = this.getArrowPoints(o, this.connPoint, a, !1), l = this.getArrowPoints(this.connPoint, r, this.tempPoint4, !0));
    const c = s.length, d = (c - 5) / 2, u = s.slice(0, d), f = s.slice(d, d + 5);
    let h = s.slice(d + 5, c);
    this.llBodyPnts = u;
    let g = l.slice(0, d);
    const p = l.slice(d, d + 5), x = l.slice(d + 5, c);
    this.rrBodyPnts = x, g = Or(g);
    const S = Or(x.concat(u.slice(1)));
    h = Or(h);
    const T = g.concat(p, S, f, h), M = [].concat(...T);
    return this.cesium.Cartesian3.fromDegreesArray(M);
  }
  getTempPoint4(t, n, r) {
    const o = ge(t, n), a = Ft(o, r), i = mo(t, o, r);
    let s = [0, 0], l, c, d;
    return i < Math.PI / 2 ? (l = a * Math.sin(i), c = a * Math.cos(i), d = mt(t, o, Math.PI / 2, l, !1), s = mt(o, d, Math.PI / 2, c, !0)) : i >= Math.PI / 2 && i < Math.PI ? (l = a * Math.sin(Math.PI - i), c = a * Math.cos(Math.PI - i), d = mt(t, o, Math.PI / 2, l, !1), s = mt(o, d, Math.PI / 2, c, !1)) : i >= Math.PI && i < Math.PI * 1.5 ? (l = a * Math.sin(i - Math.PI), c = a * Math.cos(i - Math.PI), d = mt(t, o, Math.PI / 2, l, !0), s = mt(o, d, Math.PI / 2, c, !0)) : (l = a * Math.sin(Math.PI * 2 - i), c = a * Math.cos(Math.PI * 2 - i), d = mt(t, o, Math.PI / 2, l, !0), s = mt(o, d, Math.PI / 2, c, !1)), s;
  }
  getArrowPoints(t, n, r, o) {
    const a = ge(t, n), i = Ft(a, r);
    let s = mt(r, a, 0, i * 0.3, !0), l = mt(r, a, 0, i * 0.5, !0);
    s = mt(a, s, Math.PI / 2, i / 5, o), l = mt(a, l, Math.PI / 2, i / 4, o);
    const c = [a, s, l, r], d = this.getArrowHeadPoints(c);
    if (d && Array.isArray(d) && d.length > 0) {
      const u = d[0], f = d[4], h = Ft(t, n) / he(c) / 2, g = this.getArrowBodyPoints(c, u, f, h);
      if (g) {
        const p = g.length;
        let x = g.slice(0, p / 2), S = g.slice(p / 2, p);
        return x.push(u), S.push(f), x = x.reverse(), x.push(n), S = S.reverse(), S.push(t), x.reverse().concat(d, S);
      }
    } else
      throw new Error("Interpolation Error");
  }
  getArrowBodyPoints(t, n, r, o) {
    const a = ur(t), s = he(t) * o, l = Ft(n, r), c = (s - l) / 2;
    let d = 0, u = [], f = [];
    for (let h = 1; h < t.length - 1; h++) {
      const g = mo(t[h - 1], t[h], t[h + 1]) / 2;
      d += Ft(t[h - 1], t[h]);
      const p = (s / 2 - d / a * c) / Math.sin(g), x = mt(t[h - 1], t[h], Math.PI - g, p, !0), S = mt(t[h - 1], t[h], g, p, !1);
      u.push(x), f.push(S);
    }
    return u.concat(f);
  }
  getArrowHeadPoints(t) {
    const r = he(t) * this.headHeightFactor, o = t[t.length - 1], a = r * this.headWidthFactor, i = r * this.neckWidthFactor, s = r * this.neckHeightFactor, l = mt(t[t.length - 2], o, 0, r, !0), c = mt(t[t.length - 2], o, 0, s, !0), d = mt(o, l, Math.PI / 2, a, !1), u = mt(o, l, Math.PI / 2, a, !0), f = mt(o, c, Math.PI / 2, i, !1), h = mt(o, c, Math.PI / 2, i, !0);
    return [f, d, o, u, h];
  }
  getPoints() {
    return this.points;
  }
  getBezierControlPointforGrowthAnimation() {
    return this.isClockWise ? {
      left: this.curveControlPointLeft,
      right: this.curveControlPointRight
    } : {
      right: this.curveControlPointLeft,
      left: this.curveControlPointRight
    };
  }
}
class tc extends Kt {
  points = [];
  freehand;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    this.points.push(t), this.setGeometryPoints(this.points), this.drawLine(), this.eventDispatcher.dispatchEvent("drawUpdate", t);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints(this.points), this.drawLine();
  }
  getPoints() {
    return this.points;
  }
}
class ec extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : (this.setGeometryPoints(this.points), this.drawLine());
  }
  updateMovingPoint(t) {
    this.setGeometryPoints([...this.points, t]), this.drawLine();
  }
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints(this.points), this.drawLine();
  }
  getPoints() {
    return this.points;
  }
}
class nc extends Kt {
  points = [];
  arrowLengthScale = 5;
  maxArrowLength = 3e6;
  t;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.t = 0.3, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 && (this.setGeometryPoints(this.points), this.drawLine());
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    let r = [];
    n.length === 2 ? (this.setGeometryPoints(n), this.drawLine()) : (r = this.createGraphic(n), this.setGeometryPoints(r));
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(t) {
    const n = t.map((i) => this.cartesianToLnglat(i)), r = Wo(this.t, n), o = [].concat(...r);
    return this.cesium.Cartesian3.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class rc extends Kt {
  points = [];
  freehand;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 2 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    this.points.push(t), this.points.length > 2 && (this.setGeometryPoints(this.points), this.drawPolygon(), this.eventDispatcher.dispatchEvent("drawUpdate", t));
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class oc extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.minPointsForShape = 1, this.setState("drawing");
  }
  getType() {
    return "point";
  }
  addPoint(t) {
    this.points.length > 0 || (this.points = [t], this.setGeometryPoints(this.points), this.drawPoint(), queueMicrotask(() => {
      this.getState() === "drawing" && this.finishDrawing();
    }));
  }
  createGraphic(t) {
    return t;
  }
  getPoints() {
    return this.points;
  }
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints([...this.points]);
  }
  startGrowthAnimation(t = {}) {
    if (this.state !== "static") return;
    const { duration: n = 800, delay: r = 0, callback: o } = t, a = Number(this.style.pixelSize || 10) + (this.selected ? 4 : 0);
    this.setState("animating"), setTimeout(() => {
      let i = 0;
      const s = (l) => {
        i || (i = l);
        const c = Math.min(1, (l - i) / Math.max(1, n));
        if (this.pointEntity?.point && (this.pointEntity.point.pixelSize = Math.max(1, a * c)), c < 1) {
          requestAnimationFrame(s);
          return;
        }
        this.setState("static"), o?.();
      };
      requestAnimationFrame(s);
    }, r);
  }
}
class ac extends Kt {
  points = [];
  freehand;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  createGraphic(t) {
    const n = t.map((u) => this.cartesianToLnglat(u)), r = n[0], o = n[1], a = ge(r, o), i = Math.abs((r[0] - o[0]) / 2), s = Math.abs((r[1] - o[1]) / 2), l = this.generatePoints(a, i, s), c = [].concat(...l);
    return this.cesium.Cartesian3.fromDegreesArray(c);
  }
  generatePoints(t, n, r) {
    let [o, a, i, s] = [null, null, 0, []];
    for (let l = 0; l <= 100; l++)
      i = Math.PI * 2 * l / 100, o = t[0] + n * Math.cos(i), a = t[1] + r * Math.sin(i), s.push([o, a]);
    return s;
  }
  getPoints() {
    return this.points;
  }
}
class ic extends Kt {
  points = [];
  freehand;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 2 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  createGraphic(t) {
    const n = t.map((p) => this.cartesianToLnglat(p));
    if (n.length === 2) {
      const p = ge(n[0], n[1]), x = Ft(n[0], p), S = mt(n[0], p, Math.PI / 2, x, !1);
      n.push(S);
    }
    let [r, o, a, i, s] = [
      n[0],
      n[1],
      n[2],
      void 0,
      void 0
    ];
    const l = Hl(r, o, a), c = Ft(r, l), d = He(r, l), u = He(o, l);
    vn(r, o, a) ? (i = u, s = d) : (i = d, s = u);
    let f = Ii(l, c, i, s);
    const h = [].concat(...f);
    return this.cesium.Cartesian3.fromDegreesArray(h);
  }
  getPoints() {
    return this.points;
  }
}
class ma extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  createGraphic(t) {
    const [n, r] = t.map(this.cartesianToLnglat), o = [...n, n[0], r[1], ...r, r[0], n[1], ...n];
    return this.cesium.Cartesian3.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class sc extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length === 3 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    this.setGeometryPoints(n), n.length === 2 ? this.addTempLine() : (this.removeTempLine(), this.drawPolygon());
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class lc extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 && this.onMouseMove();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    this.setGeometryPoints(n), n.length === 2 ? this.addTempLine() : (this.removeTempLine(), this.drawPolygon());
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class cc extends Kt {
  points = [];
  freehand;
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t], r = this.createGraphic(n);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  createGraphic(t) {
    const n = t.map((c) => this.cartesianToLnglat(c)), r = n[0], o = n[1], a = Ft(r, o), i = this.generatePoints(r, a), s = [].concat(...i);
    return this.cesium.Cartesian3.fromDegreesArray(s);
  }
  generatePoints(t, n) {
    let r, o, a;
    const i = [];
    for (let s = 0; s <= 100; s++)
      a = Math.PI * 2 * s / 100, r = t[0] + n * Math.cos(a), o = t[1] + n * Math.sin(a), i.push([r, o]);
    return i;
  }
  getPoints() {
    return this.points;
  }
}
class dc extends Kt {
  points = [];
  constructor(t, n, r) {
    super(t, n, r), this.cesium = t, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length === 3 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const n = [...this.points, t];
    if (this.setGeometryPoints(n), n.length === 2)
      this.addTempLine();
    else {
      this.removeTempLine();
      const r = this.createGraphic(n);
      this.setGeometryPoints(r), this.drawPolygon();
    }
  }
  createGraphic(t) {
    const n = t.map((f) => this.cartesianToLnglat(f)), [r, o, a] = [n[0], n[1], n[2]], i = Ft(o, r), s = He(o, r), l = He(a, r), c = Ii(r, i, s, l);
    c.push(r, c[0]);
    const d = [].concat(...c);
    return this.cesium.Cartesian3.fromDegreesArray(d);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, n) {
    this.points[n] = t;
    const r = this.createGraphic(this.points);
    this.setGeometryPoints(r), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
const ir = {
  Point: oc,
  FineArrow: Ri,
  AttackArrow: Co,
  SwallowtailAttackArrow: Kl,
  SquadCombat: Fi,
  SwallowtailSquadCombat: Yl,
  StraightArrow: Jl,
  CurvedArrow: Ql,
  AssaultDirection: Xl,
  DoubleArrow: Zl,
  FreehandLine: tc,
  Polyline: ec,
  FreehandPolygon: rc,
  Curve: nc,
  Ellipse: ac,
  Lune: ic,
  Rectangle: ma,
  // Backward-compatible alias for the misspelling used before v0.0.6.
  Reactangle: ma,
  Triangle: sc,
  Polygon: lc,
  Circle: cc,
  Sector: dc
};
ir.createGeometryFromData = (e, t, n) => {
  const { type: r, style: o, cartesianPoints: a } = n, i = ir[r];
  if (typeof i != "function")
    throw new Error(`Unknown geometry type: ${r}`);
  const s = new i(e, t, o);
  s.points = a;
  const l = s.createGraphic(a);
  return s.setGeometryPoints(l), s.type === "polygon" ? s.drawPolygon() : s.type === "line" ? s.drawLine() : s.drawPoint(), s.finishDrawing(), s;
};
const uc = {
  Reactangle: "Rectangle"
}, hc = {
  Point: 1,
  Triangle: 3,
  Sector: 3,
  Lune: 3,
  AttackArrow: 3,
  SwallowtailAttackArrow: 3,
  DoubleArrow: 4
}, fc = [
  {
    id: "basic",
    name: "基础图形",
    modes: [
      ["Point", "点", "单击地图放置点。", "point"],
      ["Polyline", "折线", "连续单击添加节点，双击结束。", "line"],
      ["Polygon", "多边形", "连续单击添加顶点，双击结束。", "polygon"],
      ["Rectangle", "矩形", "依次点击两个对角点。", "polygon"],
      ["Triangle", "三角形", "依次点击三个顶点。", "polygon"],
      ["Circle", "圆形", "第一次点击圆心，第二次点击半径点。", "polygon"],
      ["Ellipse", "椭圆", "依次点击外接矩形的两个对角点。", "polygon"],
      ["Sector", "扇形", "依次点击圆心、起点和终点。", "polygon"],
      ["Lune", "弓形", "依次点击三个控制点。", "polygon"],
      ["FreehandPolygon", "自由面", "单击开始，移动鼠标绘制，再次单击完成。", "polygon"]
    ]
  },
  {
    id: "line",
    name: "线与箭头",
    modes: [
      ["Curve", "曲线", "连续单击添加控制点，双击结束。", "line"],
      ["FreehandLine", "自由线", "单击开始，移动鼠标绘制，再次单击完成。", "line"],
      ["StraightArrow", "细直箭头", "依次点击起点和终点。", "line"],
      ["CurvedArrow", "曲线箭头", "连续单击添加控制点，双击结束。", "line"]
    ]
  },
  {
    id: "military",
    name: "军事标绘",
    modes: [
      ["FineArrow", "直箭头", "依次点击箭尾和箭头。", "polygon"],
      ["AssaultDirection", "突击方向", "依次点击箭尾和箭头。", "polygon"],
      ["AttackArrow", "进攻方向", "先点击两个尾点，再添加方向点，双击结束。", "polygon"],
      ["SwallowtailAttackArrow", "燕尾进攻方向", "先点击两个尾点，再添加方向点，双击结束。", "polygon"],
      ["SquadCombat", "分队战斗方向", "点击尾点后添加方向点，双击结束。", "polygon"],
      ["SwallowtailSquadCombat", "燕尾分队方向", "点击尾点后添加方向点，双击结束。", "polygon"],
      ["DoubleArrow", "双箭头", "依次点击四个控制点完成双箭头。", "polygon"]
    ]
  }
], gc = fc.map(
  (e) => ({
    ...e,
    modes: e.modes.map(([t, n, r, o]) => ({
      id: t,
      name: n,
      hint: r,
      category: o,
      group: e.id
    }))
  })
), zi = gc.flatMap(
  (e) => e.modes
);
function an(e) {
  const t = typeof e == "string" ? e : e?.id, n = uc[t] || t;
  return zi.find((r) => r.id === n) || null;
}
function pc() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `plot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function mc(e, t) {
  return t instanceof e.Cartesian3 ? t : t && Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z) ? new e.Cartesian3(t.x, t.y, t.z) : Array.isArray(t) ? e.Cartesian3.fromDegrees(
    Number(t[0]),
    Number(t[1]),
    Number(t[2] || 0)
  ) : e.Cartesian3.fromDegrees(
    Number(t.longitude ?? t.lng ?? t.lon),
    Number(t.latitude ?? t.lat),
    Number(t.height || 0)
  );
}
function yc(e, t) {
  const n = e.Cartographic.fromCartesian(t);
  return {
    longitude: Number(e.Math.toDegrees(n.longitude).toFixed(6)),
    latitude: Number(e.Math.toDegrees(n.latitude).toFixed(6)),
    height: Number(n.height.toFixed(2))
  };
}
function xc(e, t) {
  if (t.length < 2) return 0;
  const n = e.Cartographic.fromCartesian(t[0]), r = e.Cartographic.fromCartesian(t[1]);
  return new e.EllipsoidGeodesic(n, r).surfaceDistance;
}
function xe(e) {
  return !!(e && typeof e == "object" && Number.isFinite(e.red) && Number.isFinite(e.green) && Number.isFinite(e.blue) && (e.alpha === void 0 || Number.isFinite(e.alpha)));
}
function me(e, t, n) {
  let r;
  if (typeof t == "string" ? r = e.Color.fromCssColorString(t) : xe(t) && (r = new e.Color(
    t.red,
    t.green,
    t.blue,
    t.alpha ?? 1
  )), !r)
    throw new Error(
      `标绘样式 ${n} 必须是合法的 CSS 颜色字符串或 Cesium.Color。`
    );
  return r;
}
function ya(e, t) {
  if (e === void 0) return;
  const n = Number(e);
  if (!Number.isFinite(n) || n < 0 || n > 1)
    throw new Error(`标绘样式 ${t} 必须是 0 到 1 之间的数字。`);
  return n;
}
function sn(e, t) {
  if (e === void 0) return;
  const n = Number(e);
  if (!Number.isFinite(n) || n <= 0)
    throw new Error(`标绘样式 ${t} 必须是大于 0 的数字。`);
  return n;
}
function Me(e, t, n) {
  const r = t ?? (e.alpha < 1 ? e.alpha : n);
  return e.withAlpha(r);
}
function xa(e, t, n) {
  return typeof t == "string" || xe(t) ? me(e, t, n) : t;
}
function bc(e, t, n, r) {
  if (n == null) return {};
  const o = typeof n == "string" || xe(n);
  if (!o && (typeof n != "object" || Array.isArray(n)))
    throw new Error(
      "标绘样式必须是 CSS 颜色字符串、Cesium.Color 或样式对象。"
    );
  const a = o ? { color: n } : n, i = Object.fromEntries(
    Object.entries(a).filter(([, p]) => p !== void 0)
  );
  delete i.opacity, delete i.outlineOpacity, delete i.width, delete i.size;
  const s = ya(a.opacity, "opacity"), l = ya(
    a.outlineOpacity,
    "outlineOpacity"
  ), c = sn(a.width, "width"), d = sn(a.size, "size");
  a.lineWidth !== void 0 && (i.lineWidth = sn(a.lineWidth, "lineWidth")), a.pixelSize !== void 0 && (i.pixelSize = sn(a.pixelSize, "pixelSize")), a.outlineWidth !== void 0 && (i.outlineWidth = sn(a.outlineWidth, "outlineWidth")), a.material !== void 0 && (i.material = xa(e, a.material, "material")), a.outlineMaterial !== void 0 && (i.outlineMaterial = xa(
    e,
    a.outlineMaterial,
    "outlineMaterial"
  ));
  const u = a.color !== void 0, f = a.outlineColor !== void 0, h = u ? me(e, a.color, "color") : void 0, g = f ? me(e, a.outlineColor, "outlineColor") : void 0;
  if (t.category === "point") {
    if (u || s !== void 0) {
      const p = h || r.color;
      i.color = Me(
        p,
        s,
        r.color.alpha
      );
    }
    if (f || l !== void 0) {
      const p = g || r.outlineColor;
      i.outlineColor = Me(
        p,
        l,
        r.outlineColor.alpha
      );
    }
    c !== void 0 && (i.outlineWidth = c), d !== void 0 && (i.pixelSize = d);
  } else if (t.category === "line") {
    if (u || s !== void 0) {
      const p = h || r.material;
      if (!xe(p))
        throw new Error("标绘样式 opacity 只能与颜色材质一起使用。");
      i.material = Me(
        me(e, p, "material"),
        s,
        r.material.alpha
      );
    } else xe(i.material) && (i.material = Me(
      me(e, i.material, "material"),
      void 0,
      r.material.alpha
    ));
    c !== void 0 && (i.lineWidth = c);
  } else {
    if (u || s !== void 0) {
      const p = h || r.material;
      if (!xe(p))
        throw new Error("标绘样式 opacity 只能与颜色材质一起使用。");
      i.material = Me(
        me(e, p, "material"),
        s,
        r.material.alpha
      );
    } else xe(i.material) && (i.material = Me(
      me(e, i.material, "material"),
      void 0,
      r.material.alpha
    ));
    if (u || f || l !== void 0) {
      const p = g || h || r.outlineMaterial;
      if (!xe(p))
        throw new Error("标绘样式 outlineOpacity 只能与颜色材质一起使用。");
      i.outlineMaterial = Me(
        me(e, p, "outlineMaterial"),
        l,
        r.outlineMaterial.alpha
      );
    } else xe(i.outlineMaterial) && (i.outlineMaterial = Me(
      me(e, i.outlineMaterial, "outlineMaterial"),
      void 0,
      r.outlineMaterial.alpha
    ));
    c !== void 0 && (i.outlineWidth = c);
  }
  return t.category !== "point" && (delete i.color, delete i.outlineColor), i;
}
function l0(e, t, n = {}) {
  if (!e || e.isDestroyed?.())
    throw new Error("createGeometryPlotManager 需要一个可用的 Cesium.Viewer。");
  const r = t;
  if (!r?.Color || !r?.Cartesian3 || !r?.ScreenSpaceEventHandler)
    throw new Error(
      "createGeometryPlotManager 需要传入创建 Viewer 时使用的 Cesium。"
    );
  let o = an(n.defaultMode) || zi[0], a = [], i = null, s = null, l = null, c = !1, d = !1, u, f = null, h = 0, g = !1, p, x = !1;
  function S() {
    if (g)
      throw new Error("标绘管理器已经销毁。");
  }
  function T(w) {
    const b = w instanceof Error ? w : new Error(String(w));
    return n.onError?.(b), b;
  }
  function M(w, b) {
    n.onEvent?.(w, b);
  }
  function A() {
    const w = rt();
    n.onStateChange?.(w), n.onDrawingChange?.(w.isDrawing);
  }
  function _() {
    f !== null && (clearTimeout(f), f = null);
  }
  function k(w) {
    const b = w.drawingSessionGeneration;
    _(), f = setTimeout(() => {
      f = null, !(g || !d || h !== b) && X(o, u);
    }, 0);
  }
  function C(w, { silent: b = !1 } = {}) {
    const v = R(w);
    if (v === s) return v;
    const D = s;
    if (D && (D.setSelected?.(!1), D !== v && D.deactivate?.()), s = v, v && (v.setSelected?.(!0), i = v), !b) {
      if (D) {
        const z = y(D);
        M("deselected", z), n.onDeselected?.(z);
      }
      if (v) {
        const z = y(v);
        M("selected", z), n.onSelected?.(z);
      }
      n.onSelectionChange?.(
        v ? y(v) : null
      ), A();
    }
    return v;
  }
  function P(w) {
    return S(), C(w);
  }
  function H() {
    return g || C(null), null;
  }
  function E() {
    !e.canvas || !e.scene?.pick || (l = new r.ScreenSpaceEventHandler(e.canvas), l.setInputAction((w) => {
      if (c) return;
      const b = e.scene.pick(w.position), v = r.defined(b) ? b.id : null, D = v?.id, j = D != null && D !== "" ? a.find((at) => at.isCurrentEntity?.(D)) : null;
      if (j) {
        C(j);
        return;
      }
      a.some(
        (at) => at.controlPoints?.includes?.(v)
      ) || H();
    }, r.ScreenSpaceEventType.LEFT_CLICK));
  }
  function G(w) {
    const b = r.Color.fromBytes(51, 153, 204);
    return w.category === "point" ? {
      color: r.Color.fromBytes(87, 211, 255),
      pixelSize: 10,
      outlineColor: r.Color.WHITE,
      outlineWidth: 2
    } : w.category === "polygon" ? {
      material: b.withAlpha(0.35),
      outlineMaterial: b.withAlpha(0.95),
      outlineWidth: 2
    } : {
      material: b.withAlpha(0.95),
      lineWidth: 3
    };
  }
  function I(w, b) {
    return [n.defaultStyle, n.styles?.[w.id], b].reduce((v, D) => ({
      ...v,
      ...bc(r, w, D, v)
    }), G(w));
  }
  function F(w, b = a.indexOf(w)) {
    const v = w.getPoints?.() || [], D = {
      id: w.plotId,
      entityId: w.entityId || null,
      index: b,
      type: w.plotType,
      category: w.type,
      state: w.getState?.() || "static",
      coordinates: v.map((z) => yc(r, z)),
      properties: w.properties || {}
    };
    return w.plotType === "Circle" && (D.center = D.coordinates[0] || null, D.radius = Number(xc(r, v).toFixed(2))), D;
  }
  function q() {
    const w = nt();
    return n.onDataChange?.(w), w;
  }
  function K() {
    const w = e.cesiumWidget?.screenSpaceEventHandler;
    !w || x || (p = w.getInputAction?.(
      r.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    ), w.removeInputAction(r.ScreenSpaceEventType.LEFT_DOUBLE_CLICK), x = !0);
  }
  function J() {
    if (!x) return;
    const w = e.cesiumWidget?.screenSpaceEventHandler;
    w && p && w.setInputAction(
      p,
      r.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    ), p = void 0, x = !1;
  }
  function L(w) {
    a.forEach((b) => {
      b === w || b.getState?.() === "hidden" || (b.deactivate?.(), b.setState?.("disabled"));
    });
  }
  function V(w) {
    a.forEach((b) => {
      b !== w && b.getState?.() === "disabled" && b.setState("static");
    });
  }
  function y(w, b) {
    return {
      data: b,
      geometry: w,
      mode: an(w.plotType),
      plot: F(w),
      points: w.getPoints?.() || [],
      type: w.plotType
    };
  }
  function W(w) {
    w.on("drawStart", (b) => {
      c = !0;
      const v = y(w, b);
      M("drawStart", v), n.onDrawStart?.(v), A();
    }), w.on("drawUpdate", (b) => {
      const v = y(w, b);
      M("drawUpdate", v), n.onDrawUpdate?.(v), n.emitDataOnUpdate && q();
    }), w.on("drawEnd", (b) => {
      i = w, V(w), C(w);
      const v = y(w, b);
      q(), M("drawEnd", v), n.onDrawEnd?.(v), n.onStatusChange?.(`${v.mode?.name || w.plotType}标绘完成；单击选择，双击进入编辑。`), n.onComplete?.(v), c = d, d && h === w.drawingSessionGeneration && k(w), A();
    }), w.on("editStart", (b) => {
      i && i !== w && i.deactivate?.(), i = w, C(w);
      const v = y(w, b);
      M("editStart", v), n.onEditStart?.(v), A();
    }), w.on("editEnd", (b) => {
      const v = y(w, b);
      q(), M("editEnd", v), n.onEditEnd?.(v), A();
    });
  }
  function N(w, b, v = {}) {
    return w.plotType = b.id, w.plotId = v.id || pc(), w.properties = v.properties || {}, w.minPointsForShape || (w.minPointsForShape = hc[b.id] || 2), W(w), a = [...a, w], i = w, M("created", y(w)), w;
  }
  function R(w = i) {
    return w ? typeof w == "string" ? a.find(
      (b) => b.plotId === w || b.entityId === w
    ) || null : a.includes(w) ? w : null : null;
  }
  function X(w = o, b) {
    S(), _();
    const v = an(w);
    if (!v)
      throw T(
        new Error(`不支持的标绘类型: ${typeof w == "string" ? w : w?.id}`)
      );
    C(null), i?.getState?.() === "drawing" ? U(i, { silent: !0 }) : i?.deactivate?.(), o = v, u = b, d = !0, h += 1, n.onModeChange?.(o), K();
    try {
      const D = ir[o.id], z = new D(r, e, I(o, b));
      return N(z, o), z.drawingSessionGeneration = h, L(z), c = !0, n.onStatusChange?.(o.hint), A(), z;
    } catch (D) {
      throw c = !1, d = !1, V(), J(), A(), T(D);
    }
  }
  function O(w, { start: b = c } = {}) {
    S();
    const v = an(w);
    if (!v)
      throw T(
        new Error(`不支持的标绘类型: ${typeof w == "string" ? w : w?.id}`)
      );
    return o = v, n.onModeChange?.(o), b ? X(o) : (A(), o);
  }
  function $({ silent: w = !1 } = {}) {
    g || (_(), d = !1, i?.getState?.() === "drawing" ? U(i, { silent: !0 }) : i?.deactivate?.(), c = !1, V(), a.length === 0 && J(), w || n.onStatusChange?.("已退出标绘。"), A());
  }
  function U(w = i, { silent: b = !1 } = {}) {
    const v = R(w);
    if (!v) return !1;
    const D = v.getState?.() === "drawing", z = y(v);
    return s === v && C(null, { silent: b }), v.remove(), a = a.filter((j) => j !== v), i = a.at(-1) || null, D && (c = !1, d = !1, _(), V()), a.length === 0 && J(), b || (q(), M("removed", z), n.onRemoved?.(z), A()), !0;
  }
  function Q() {
    S(), $({ silent: !0 }), [...a].forEach((b) => b.remove()), a = [], i = null, s = null, d = !1, _(), J();
    const w = q();
    return M("cleared", { data: w }), n.onCleared?.(w), n.onStatusChange?.("已清空全部标绘结果。"), A(), w;
  }
  function B(w, b) {
    S();
    const v = an(w?.type);
    if (!v)
      throw T(new Error(`不支持的标绘类型: ${w?.type}`));
    const D = w.cartesianPoints || w.coordinates || w.points;
    if (!Array.isArray(D) || D.length === 0)
      throw T(new Error("恢复标绘需要 coordinates 或 cartesianPoints。"));
    i?.deactivate?.(), K();
    const z = D.map(
      (j) => mc(r, j)
    );
    try {
      const j = ir.createGeometryFromData(r, e, {
        type: v.id,
        cartesianPoints: z,
        style: I(v, b || w.style)
      });
      return N(j, v, w), c = !1, C(j), q(), M("restored", y(j)), A(), j;
    } catch (j) {
      throw T(j);
    }
  }
  function et(w, b) {
    return w.map(
      (v, D) => B(v, typeof b == "function" ? b(v, D) : b)
    );
  }
  function it(w, b) {
    const v = R(w);
    return v ? { geometry: v, animationOptions: b } : {
      geometry: i,
      animationOptions: w && typeof w == "object" ? w : b
    };
  }
  function ut(w = i, b) {
    const v = it(w, b), { geometry: D } = v;
    return D?.deactivate?.(), D?.hide(v.animationOptions), D || null;
  }
  function Z(w = i, b) {
    const v = it(w, b), { geometry: D } = v;
    return D?.show(v.animationOptions), D || null;
  }
  function st(w = i, b) {
    const v = it(w, b), { geometry: D } = v;
    return D?.deactivate?.(), D?.startGrowthAnimation(v.animationOptions), D || null;
  }
  function nt() {
    return a.map(F);
  }
  function rt() {
    return {
      isDrawing: c,
      mode: o,
      activeId: i?.plotId || null,
      activeGeometry: i,
      selectedId: s?.plotId || null,
      selectedGeometry: s,
      count: a.length,
      destroyed: g
    };
  }
  function ct({ clear: w = !1 } = {}) {
    g || ($({ silent: !0 }), w ? [...a].forEach((b) => b.remove()) : a.forEach((b) => {
      b.removeControlPoints?.(), b.disableDrag?.(), b.destroyHandler?.(b.eventHandler), b.eventHandler = void 0;
    }), a = [], i = null, s = null, l?.destroy(), l = null, g = !0, J());
  }
  return E(), {
    start: X,
    stop: $,
    setMode: O,
    remove: U,
    clear: Q,
    restore: B,
    restoreMany: et,
    hide: ut,
    show: Z,
    startGrowthAnimation: st,
    select: P,
    deselect: H,
    getData: nt,
    getState: rt,
    getActiveGeometry: () => i,
    getSelectedGeometry: () => s,
    getGeometries: () => [...a],
    destroy: ct
  };
}
const ba = {
  id: "demo-dynamic-cone",
  position: { lon: 114, lat: 35, height: 5e5 },
  orientationPosition: { lon: 114, lat: 35, height: 75e4 },
  heading: 135,
  pitch: 0,
  roll: 0,
  length: 5e5,
  topRadius: 0,
  bottomRadius: 5e4,
  color: "#ff7f50",
  alpha: 0.55,
  repeat: 30,
  thickness: 0.1,
  duration: 2e3
}, Br = "caseListDynamicConeMaterial", wa = /* @__PURE__ */ new WeakMap();
function qr(e = {}) {
  return {
    lon: Number(e.lon ?? e.lng ?? e.longitude),
    lat: Number(e.lat ?? e.latitude),
    height: Number(e.height ?? e.alt ?? 0)
  };
}
function wc(e, t, n = 1) {
  if (t instanceof e.Color)
    return t.withAlpha(n);
  if (Array.isArray(t)) {
    const [r = 1, o = 1, a = 1, i = n] = t, s = Math.max(r, o, a) > 1 ? 255 : 1;
    return new e.Color(r / s, o / s, a / s, i);
  }
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function vc(e) {
  const t = wa.get(e);
  if (t)
    return t;
  function n(r = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this.color = r.color || e.Color.CORAL, this.duration = r.duration || 2e3, this.repeat = r.repeat || 30, this.offset = r.offset || 0, this.thickness = r.thickness || 0.3, this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: e.createPropertyDescriptor("color")
  }), n.prototype.getType = () => Br, n.prototype.getValue = function(o, a) {
    const i = a || {};
    return i.color = e.Property.getValueOrClonedDefault(
      this._color,
      o,
      e.Color.WHITE,
      i.color
    ), i.time = (Date.now() - this._time) % this.duration / this.duration / 10, i.repeat = this.repeat, i.offset = this.offset, i.thickness = this.thickness, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n;
  }, e.Material._materialCache.addMaterial(Br, {
    fabric: {
      type: Br,
      uniforms: {
        color: new e.Color(1, 0, 0, 0.5),
        time: 0,
        repeat: 30,
        offset: 0,
        thickness: 0.3
      },
      source: `
        uniform vec4 color;
        uniform float repeat;
        uniform float offset;
        uniform float thickness;
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          float sp = 1.0 / repeat;
          float dis = distance(materialInput.st, vec2(0.5));
          float m = mod(dis + offset - time, sp);
          float a = step(sp * (1.0 - thickness), m);
          material.diffuse = color.rgb;
          material.alpha = a * color.a;
          return material;
        }
      `
    },
    translucent: () => !0
  }), wa.set(e, n), n;
}
function c0(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map();
  function o(d) {
    n.onStatusChange?.(d), n.onCountChange?.(r.size);
  }
  function a(d = {}) {
    if (!e || !t)
      return null;
    const u = { ...ba, ...d };
    s(u.id, !1);
    const f = vc(t), h = qr(u.position), g = qr(u.orientationPosition), p = t.Cartesian3.fromDegrees(
      h.lon,
      h.lat,
      h.height
    ), x = t.Cartesian3.fromDegrees(
      g.lon,
      g.lat,
      g.height
    ), S = t.Transforms.headingPitchRollQuaternion(
      x,
      new t.HeadingPitchRoll(
        t.Math.toRadians(Number(u.heading)),
        t.Math.toRadians(Number(u.pitch)),
        t.Math.toRadians(Number(u.roll))
      )
    ), T = e.entities.add({
      id: u.id,
      name: u.name || u.id,
      position: p,
      orientation: S,
      show: u.show ?? !0,
      cylinder: {
        length: Number(u.length),
        topRadius: Number(u.topRadius),
        bottomRadius: Number(u.bottomRadius),
        topSurface: !0,
        bottomSurface: !0,
        material: new f({
          color: wc(t, u.color, Number(u.alpha)),
          duration: Number(u.duration),
          repeat: Number(u.repeat),
          thickness: Number(u.thickness)
        })
      }
    }), M = {
      id: u.id,
      entity: T,
      options: u,
      setVisible(A) {
        T.show = !!A, e.scene.requestRender();
      },
      remove() {
        e.entities.remove(T), r.delete(u.id), o(r.size ? `已创建 ${r.size} 个动态圆锥体。` : "动态圆锥体已清空。");
      }
    };
    return r.set(u.id, M), o(`已创建 ${r.size} 个动态圆锥体。`), e.scene.requestRender(), M;
  }
  function i(d, u = {}) {
    const f = r.get(d);
    return a({ ...f?.options || {}, ...u, id: d });
  }
  function s(d, u = !0) {
    const f = typeof d == "string" ? r.get(d) : d;
    return f ? (e.entities.remove(f.entity), r.delete(f.id), u && o(r.size ? `已创建 ${r.size} 个动态圆锥体。` : "动态圆锥体已清空。"), !0) : !1;
  }
  function l() {
    Array.from(r.values()).forEach((d) => e.entities.remove(d.entity)), r.clear(), o("动态圆锥体已清空。");
  }
  function c(d = ba.position) {
    if (!e || !t)
      return;
    const u = qr(d);
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(u.lon, u.lat, 18e5),
      orientation: { heading: 0, pitch: t.Math.toRadians(-70), roll: 0 }
    });
  }
  return {
    addDynamicCone: a,
    updateDynamicCone: i,
    removeDynamicCone: s,
    clearDynamicCones: l,
    focusScene: c,
    getDynamicCone: (d) => r.get(d) || null,
    getDynamicCones: () => Array.from(r.values()),
    destroy: l
  };
}
const Yn = {
  lon: 121.466139,
  lat: 31.257341
}, _c = {
  color: "#ff3b3b",
  radius: 3e3,
  height: 100,
  duration: 3e3,
  alpha: 1,
  showCenter: !0,
  pixelSize: 9,
  position: Yn
}, Vr = "EllipsoidFade", va = /* @__PURE__ */ new WeakMap();
function Mc(e = Yn) {
  const t = Array.isArray(e) ? { lon: e[0], lat: e[1], height: e[2] } : e;
  return {
    lon: Number(
      t.lon ?? t.lng ?? t.longitude ?? Yn.lon
    ),
    lat: Number(
      t.lat ?? t.latitude ?? Yn.lat
    ),
    height: Number(t.height ?? t.alt ?? 0)
  };
}
function Sc(e, t = "#ff3b3b", n = 1) {
  if (t instanceof e.Color)
    return t.withAlpha(n);
  if (Array.isArray(t)) {
    const [r = 1, o = 0, a = 0, i = n] = t, s = Math.max(r, o, a) > 1 ? 255 : 1;
    return new e.Color(r / s, o / s, a / s, i);
  }
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function Pc(e) {
  const t = va.get(e);
  if (t)
    return t;
  function n(r, o = 3e3) {
    this._definitionChanged = new e.Event(), this.color = r, this.duration = o, this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: e.createPropertyDescriptor("color")
  }), n.prototype.getType = () => Vr, n.prototype.getValue = function(o, a) {
    const i = a || {};
    return i.color = e.Property.getValueOrClonedDefault(
      this.color,
      o,
      e.Color.WHITE,
      i.color
    ), i.time = (Date.now() - this._time) % this.duration / this.duration, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n && e.Property.equals(this.color, o.color);
  }, e.Material._materialCache.addMaterial(Vr, {
    fabric: {
      type: Vr,
      uniforms: { color: e.Color.RED, time: 1 },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          material.diffuse = 1.5 * color.rgb;
          float dis = distance(materialInput.st, vec2(0.5, 0.5));
          float per = max(fract(time), 0.01);
          if (dis > per * 0.5) {
            material.alpha = 0.0;
            discard;
          } else {
            material.alpha = color.a * dis / per;
          }
          return material;
        }
      `
    },
    translucent: () => !0
  }), va.set(e, n), n;
}
function d0(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  function a(l = {}) {
    if (!e || !t)
      return null;
    const c = { ..._c, ...l }, d = c.id || `diffusion-point-${o += 1}`;
    i(d);
    const u = Mc(c.position), f = t.Cartesian3.fromDegrees(
      u.lon,
      u.lat,
      u.height
    ), h = Sc(t, c.color, c.alpha), g = Pc(t), p = e.entities.add({
      id: d,
      name: c.name || "Dynamic diffusion point",
      position: f,
      show: c.show ?? !0,
      ellipse: {
        height: c.height,
        semiMinorAxis: Number(c.radius ?? c.size),
        semiMajorAxis: Number(c.radius ?? c.size),
        material: new g(h, Number(c.duration))
      }
    }), x = c.showCenter === !1 ? null : e.entities.add({
      id: `${d}-center`,
      position: t.Cartesian3.fromDegrees(
        u.lon,
        u.lat,
        u.height + 120
      ),
      show: c.show ?? !0,
      point: {
        pixelSize: c.pixelSize,
        color: h,
        outlineColor: t.Color.WHITE.withAlpha(0.8),
        outlineWidth: 1,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      }
    }), S = {
      id: d,
      entity: p,
      centerEntity: x,
      options: c,
      setVisible(T) {
        p.show = !!T, x && (x.show = !!T), e.scene.requestRender();
      },
      remove() {
        e.entities.remove(p), x && e.entities.remove(x), r.delete(d);
      }
    };
    return r.set(d, S), S;
  }
  function i(l) {
    r.get(l)?.remove();
  }
  function s() {
    Array.from(r.keys()).forEach(i);
  }
  return {
    addDiffusionPoint: a,
    createDiffusionPoint: a,
    removeDiffusionPoint: i,
    clear: s,
    destroy: s,
    getDiffusionPoint: (l) => r.get(l) || null,
    getDiffusionPoints: () => Array.from(r.values())
  };
}
const Gi = [
  [104.0185546875, 30.66235300961486],
  [104.01589393615723, 30.65652022496456],
  [104.029541015625, 30.65053940942565],
  [104.0397548675537, 30.65777541087788],
  [104.03829574584961, 30.66604446357028],
  [104.0255069732666, 30.667963963897005],
  [104.0185546875, 30.66235300961486]
], _a = {
  id: "demo-electronic-fence",
  type: "static",
  path: Gi,
  duration: 1500,
  minimumHeight: 0
}, Ma = {
  vertical: { image: "/libs/case_list/ElectronicFence/wall.png", color: "#00ffff", height: 500, count: 3, freely: "vertical", direction: "-" },
  horizontal: { image: "/libs/case_list/ElectronicFence/jt.png", color: "#ffff00", height: 200, count: 23, freely: "standard", direction: "+" },
  static: { image: "/libs/case_list/ElectronicFence/fence-wall-2.png", color: "#00ffff", height: 360, count: 1, freely: "vertical", direction: "-", static: !0 }
}, Ec = {
  lon: 104.0278,
  lat: 30.6593,
  heading: 0,
  pitch: -70,
  range: 6200
}, Tc = "caseListDynamicWallMaterial", Sa = /* @__PURE__ */ new WeakMap();
function kc(e) {
  return e.flatMap((t) => [Number(t[0] ?? t.lon ?? t.lng), Number(t[1] ?? t.lat)]);
}
function Pa(e, t, n = 1) {
  return t instanceof e.Color ? t.withAlpha(n) : e.Color.fromCssColorString(t).withAlpha(n);
}
function Ac(e) {
  return [Tc, e.freely, e.direction === "+" ? "plus" : "minus", Number(e.count || 1)].join("_");
}
function Dc(e, t, n) {
  let r = Sa.get(e);
  r || (r = /* @__PURE__ */ new Map(), Sa.set(e, r));
  const o = Ac(t);
  if (r.has(o)) return r.get(o);
  const a = Number(t.count || 3), i = t.direction === "+" ? "+" : "-", s = t.freely === "standard" ? `vec2(fract(float(${a}) * st.s ${i} time), fract(st.t))` : `vec2(fract(st.s), fract(float(${a}) * st.t ${i} time))`, l = function(d = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this.color = d.color || e.Color.CYAN, this.duration = d.duration || 1e3, this.trailImage = d.trailImage, this.materialType = o, this._time = Date.now();
  };
  return Object.defineProperties(l.prototype, {
    isConstant: { get: () => !1 },
    definitionChanged: { get() {
      return this._definitionChanged;
    } },
    color: e.createPropertyDescriptor("color")
  }), l.prototype.getType = function() {
    return this.materialType;
  }, l.prototype.getValue = function(d, u) {
    const f = u || {};
    return f.color = e.Property.getValueOrClonedDefault(this._color, d, e.Color.WHITE, f.color), f.image = this.trailImage, f.time = (Date.now() - this._time) % this.duration / this.duration, n?.scene?.requestRender(), f;
  }, l.prototype.equals = function(d) {
    return this === d || d instanceof l;
  }, e.Material._materialCache.addMaterial(o, {
    fabric: {
      type: o,
      uniforms: { color: new e.Color(1, 0, 0, 0.8), image: e.Material.DefaultImageId, time: -20 },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 st = materialInput.st;
          vec4 colorImage = texture(image, ${s});
          vec4 fragColor;
          fragColor.rgb = colorImage.rgb + color.rgb;
          fragColor = czm_gammaCorrect(fragColor);
          material.diffuse = colorImage.rgb;
          material.alpha = colorImage.a;
          material.emission = fragColor.rgb;
          return material;
        }
      `
    },
    translucent: () => !0
  }), r.set(o, l), l;
}
function u0(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map();
  function o(u) {
    n.onStatusChange?.(u), n.onCountChange?.(r.size);
  }
  function a(u = {}) {
    if (!e || !t) return null;
    const f = { ..._a, ...u };
    s(f.id, !1);
    const h = { ...Ma[f.type] || Ma.vertical, ...f.style || {} }, g = f.path || Gi, p = new Array(g.length).fill(Number(f.height || h.height)), x = Dc(t, h, e), S = h.static ? new t.ImageMaterialProperty({
      transparent: !0,
      image: h.image,
      repeat: new t.Cartesian2(Number(h.repeatX || 1), Number(h.repeatY || 1)),
      color: Pa(t, h.color, Number(f.alpha || 1))
    }) : new x({
      trailImage: h.image,
      color: Pa(t, h.color, Number(f.alpha || 1)),
      duration: Number(f.duration)
    }), T = e.entities.add({
      id: f.id,
      name: f.name || f.id,
      wall: {
        positions: t.Cartesian3.fromDegreesArray(kc(g)),
        maximumHeights: p,
        minimumHeights: new Array(g.length).fill(Number(f.minimumHeight)),
        material: S
      }
    }), M = {
      id: f.id,
      entity: T,
      options: f,
      setVisible(A) {
        T.show = !!A, e.scene.requestRender();
      },
      remove() {
        e.entities.remove(T), r.delete(f.id), o(r.size ? `已创建 ${r.size} 个电子围栏。` : "电子围栏已清空。");
      }
    };
    return r.set(f.id, M), o(`已创建 ${r.size} 个电子围栏。`), e.scene.requestRender(), M;
  }
  function i(u, f = {}) {
    const h = r.get(u);
    return a({ ...h?.options || {}, ...f, id: u });
  }
  function s(u, f = !0) {
    const h = typeof u == "string" ? r.get(u) : u;
    return h ? (e.entities.remove(h.entity), r.delete(h.id), f && o(r.size ? `已创建 ${r.size} 个电子围栏。` : "电子围栏已清空。"), !0) : !1;
  }
  function l() {
    Array.from(r.values()).forEach((u) => e.entities.remove(u.entity)), r.clear(), o("电子围栏已清空。");
  }
  function c(u) {
    return i(_a.id, { type: u });
  }
  function d(u = Ec) {
    !e || !t || (e.camera.lookAt(t.Cartesian3.fromDegrees(u.lon, u.lat), new t.HeadingPitchRange(t.Math.toRadians(u.heading), t.Math.toRadians(u.pitch), u.range)), e.camera.lookAtTransform(t.Matrix4.IDENTITY));
  }
  return {
    addElectronicFence: a,
    updateElectronicFence: i,
    removeElectronicFence: s,
    clearElectronicFences: l,
    switchFenceType: c,
    focusScene: d,
    getElectronicFence: (u) => r.get(u) || null,
    getElectronicFences: () => Array.from(r.values()),
    destroy: l
  };
}
function $r(e, t) {
  const n = t || { lon: 0, lat: 0, height: 0 }, r = Array.isArray(e) ? { lon: e[0], lat: e[1], height: e[2] } : e || {};
  return {
    lon: Number(
      r.lon ?? r.lng ?? r.longitude ?? n.lon
    ),
    lat: Number(r.lat ?? r.latitude ?? n.lat),
    height: Number(r.height ?? r.alt ?? n.height)
  };
}
function _n(e, t = {}) {
  const n = new e.Cartesian3();
  return (r, o) => {
    e.Cartesian3.fromElements(
      Number(t.x || 0) * o,
      Number(t.y || 0) * o,
      Number(t.z || 0) * o,
      n
    ), r.velocity = e.Cartesian3.add(
      r.velocity,
      n,
      r.velocity
    );
  };
}
function Ea(e, t = "#ffffff", n = 1) {
  if (t instanceof e.Color) return t.withAlpha(n);
  if (Array.isArray(t)) {
    const [r = 1, o = 1, a = 1, i = n] = t, s = Math.max(r, o, a) > 1 ? 255 : 1;
    return new e.Color(
      r / s,
      o / s,
      a / s,
      i
    );
  }
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function Wc(e, t, n) {
  const r = {
    image: t.image,
    startColor: Ea(
      e,
      t.startColor,
      t.startAlpha
    ),
    endColor: Ea(e, t.endColor, t.endAlpha),
    startScale: Number(t.startScale),
    endScale: Number(t.endScale),
    minimumParticleLife: Number(t.minimumParticleLife),
    maximumParticleLife: Number(t.maximumParticleLife),
    minimumSpeed: Number(t.minimumSpeed),
    maximumSpeed: Number(t.maximumSpeed),
    imageSize: new e.Cartesian2(
      Number(t.particleSize),
      Number(t.particleSize)
    ),
    emissionRate: Number(t.emissionRate),
    lifetime: Number(t.lifetime),
    sizeInMeters: !!t.sizeInMeters,
    emitter: n.createEmitter({ Cesium: e, options: t })
  };
  Object.prototype.hasOwnProperty.call(t, "loop") && (r.loop = !!t.loop);
  const o = n.createUpdateCallback?.({ Cesium: e, options: t });
  return o && (r.updateCallback = o), {
    ...r,
    ...n.createParticleSystemOptions?.({ Cesium: e, options: t }) || {}
  };
}
function Mn(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new WeakSet();
  let a = 0;
  const {
    preset: i,
    onStatusChange: s,
    onCountChange: l,
    ...c
  } = n;
  if (!i || typeof i != "object")
    throw new Error("createParticleEffectManager 的 options.preset 不能为空。");
  const d = i.defaultOptions || {}, u = i.defaultPosition || d.position || { lon: 0, lat: 0, height: 0 }, f = i.defaultCamera || {
    heading: 0,
    pitch: -90,
    range: 1100
  };
  function h() {
    return r.size === 0 && i.clearedStatus ? i.clearedStatus : i.formatCountStatus?.(r.size);
  }
  function g(k = h()) {
    s?.(k), l?.(r.size), e?.scene?.requestRender?.();
  }
  function p(k = {}) {
    a += 1;
    const C = {
      ...d,
      ...c,
      ...k,
      id: k.id || `${i.idPrefix || "particle"}-${Date.now()}-${a}`,
      position: $r(
        k.position ?? c.position ?? d.position,
        u
      )
    };
    for (const P of i.nestedOptionKeys || ["offset"])
      C[P] = {
        ...d[P] || {},
        ...c[P] || {},
        ...k[P] || {}
      };
    return C;
  }
  function x(k, C = !0) {
    const P = typeof k == "string" ? r.get(k) : k;
    return !P || o.has(P) ? !1 : (o.add(P), e?.scene?.preUpdate.removeEventListener(P.preUpdateListener), e?.scene?.primitives.remove(P.particleSystem), e?.entities.remove(P.entity), r.delete(P.id), C && g(), !0);
  }
  function S(k = {}) {
    if (!e || !t || e.isDestroyed?.()) return null;
    const C = p(k), P = r.get(C.id);
    e.clock.shouldAnimate = !0, e.scene.globe.depthTestAgainstTerrain = !1;
    const H = $r(C.position, u);
    let E, G, I;
    const F = new t.Matrix4(), q = new t.Matrix4(), K = new t.Cartesian3(), J = new t.Quaternion(), L = new t.HeadingPitchRoll(), V = () => (t.HeadingPitchRoll.fromDegrees(
      Number(C.heading || 0),
      Number(C.pitch || 0),
      Number(C.roll || 0),
      L
    ), t.Cartesian3.fromElements(
      Number(C.offset?.x || 0),
      Number(C.offset?.y || 0),
      Number(C.offset?.z || 0),
      K
    ), t.Quaternion.fromHeadingPitchRoll(L, J), t.Matrix4.fromTranslationRotationScale(
      {
        translation: K,
        rotation: J,
        scale: t.Cartesian3.ONE
      },
      F
    ));
    try {
      E = e.entities.add({
        name: C.name || C.id,
        position: t.Cartesian3.fromDegrees(
          H.lon,
          H.lat,
          H.height
        )
      }), G = e.scene.primitives.add(
        new t.ParticleSystem(
          Wc(t, C, i)
        )
      ), I = (W, N) => {
        G.modelMatrix = E.computeModelMatrix(N, q), G.emitterModelMatrix = V();
      }, e.scene.preUpdate.addEventListener(I);
    } catch (W) {
      throw I && e.scene.preUpdate.removeEventListener(I), G && e.scene.primitives.remove(G), E && e.entities.remove(E), W;
    }
    const y = {
      id: C.id,
      entity: E,
      particleSystem: G,
      options: C,
      preUpdateListener: I,
      setVisible(W) {
        E.show = !!W, G.show = !!W, e?.scene?.requestRender?.();
      },
      remove() {
        return x(y);
      }
    };
    return P && x(P, !1), r.set(C.id, y), g(h()), y;
  }
  function T(k, C = {}) {
    const P = r.get(k);
    return S({ ...P?.options || {}, ...C, id: k });
  }
  function M() {
    Array.from(r.values()).forEach((k) => x(k, !1)), g(i.clearedStatus);
  }
  function A(k) {
    r.forEach((C) => C.setVisible(k));
  }
  function _(k = u, C = {}) {
    if (!e || !t || e.isDestroyed?.()) return;
    const P = $r(k, u), H = { ...f, ...C }, E = Number(H.heading), G = Number(H.pitch), I = Number(H.range);
    e.camera.lookAt(
      t.Cartesian3.fromDegrees(P.lon, P.lat, P.height),
      new t.HeadingPitchRange(
        t.Math.toRadians(
          Number.isFinite(E) ? E : f.heading
        ),
        t.Math.toRadians(
          Number.isFinite(G) ? G : f.pitch
        ),
        Number.isFinite(I) ? I : f.range
      )
    ), e.camera.lookAtTransform(t.Matrix4.IDENTITY);
  }
  return {
    add: S,
    create: S,
    update: T,
    remove: x,
    clear: M,
    setVisible: A,
    focusScene: _,
    getEffect: (k) => r.get(k) || null,
    getEffects: () => Array.from(r.values()),
    destroy: M
  };
}
const Oi = {
  lon: -117.16,
  lat: 32.71,
  height: 360
}, Cc = {
  position: Oi,
  image: "/libs/case_list/Explosion/explot.png",
  startColor: "#ff0000",
  endColor: "#ffff00",
  startAlpha: 0.7,
  endAlpha: 0.3,
  emissionRate: 5,
  emitterRadius: 5,
  minimumParticleLife: 1,
  maximumParticleLife: 6,
  minimumSpeed: 1,
  maximumSpeed: 4,
  startScale: 0,
  endScale: 10,
  particleSize: 25,
  lifetime: 16,
  loop: !0,
  sizeInMeters: !0,
  offset: { x: -4, y: 0, z: 50 },
  wind: { x: 0, y: 0, z: 0 }
}, Nc = {
  heading: 0,
  pitch: -90,
  range: 1100
};
function h0(e, t, n = {}) {
  const r = Mn(
    e,
    t,
    {
      ...n,
      preset: {
        idPrefix: "explosion",
        defaultOptions: Cc,
        defaultPosition: Oi,
        defaultCamera: Nc,
        nestedOptionKeys: ["offset", "wind"],
        createEmitter: ({ Cesium: o, options: a }) => new o.CircleEmitter(Number(a.emitterRadius)),
        createUpdateCallback: ({ Cesium: o, options: a }) => _n(o, a.wind),
        formatCountStatus: (o) => `已创建 ${o} 个爆炸粒子效果。`,
        clearedStatus: "爆炸粒子已清空。"
      }
    }
  );
  return {
    addExplosion: r.add,
    createExplosionEffect: r.create,
    removeExplosion: r.remove,
    updateExplosion: r.update,
    clearExplosionEffects: r.clear,
    focusScene: r.focusScene,
    getExplosionEffect: r.getEffect,
    getExplosionEffects: r.getEffects,
    destroy: r.destroy
  };
}
const Lc = "/libs/case_list/Fire/fire.png", Hi = {
  lon: -117.16,
  lat: 32.71,
  height: 360
}, Ic = {
  position: Hi,
  image: Lc,
  startColor: "#ffffff",
  endColor: "#7f0000",
  startAlpha: 1,
  endAlpha: 0,
  emissionRate: 5,
  coneAngle: 45,
  minimumParticleLife: 1,
  maximumParticleLife: 6,
  minimumSpeed: 1,
  maximumSpeed: 4,
  startScale: 0,
  endScale: 10,
  particleSize: 25,
  lifetime: 16,
  loop: !0,
  sizeInMeters: !0,
  offset: { x: -4, y: 0, z: 50 },
  wind: { x: 0, y: 0, z: 0 }
};
function f0(e, t, n = {}) {
  const r = Mn(
    e,
    t,
    {
      ...n,
      preset: {
        idPrefix: "fire",
        defaultOptions: Ic,
        defaultPosition: Hi,
        nestedOptionKeys: ["offset", "wind"],
        createEmitter: ({ Cesium: o, options: a }) => new o.ConeEmitter(
          o.Math.toRadians(Number(a.coneAngle))
        ),
        createUpdateCallback: ({ Cesium: o, options: a }) => _n(o, a.wind)
      }
    }
  );
  return {
    addFire: r.add,
    createFireEffect: r.create,
    update: r.update,
    remove: r.remove,
    clear: r.clear,
    setVisible: r.setVisible,
    getEffect: r.getEffect,
    getEffects: r.getEffects
  };
}
const Rc = 50, Fc = "#28a8ff", zc = 0.52;
function Gc(e) {
  if (!Array.isArray(e))
    throw new TypeError("positions 必须是经纬度坐标数组。");
  const t = e.map((r, o) => {
    if (!Array.isArray(r) || r.length < 2)
      throw new TypeError(`positions[${o}] 必须是 [经度, 纬度]。`);
    const a = r[0], i = r[1];
    if (!Number.isFinite(a) || !Number.isFinite(i))
      throw new TypeError(`positions[${o}] 包含无效经纬度。`);
    if (a < -180 || a > 180 || i < -90 || i > 90)
      throw new RangeError(`positions[${o}] 超出有效经纬度范围。`);
    return [a, i];
  });
  if (t.length > 1) {
    const r = t[0], o = t[t.length - 1];
    r[0] === o[0] && r[1] === o[1] && t.pop();
  }
  if (t.length < 3)
    throw new RangeError("淹没区域至少需要 3 个不同的坐标点。");
  if (new Set(t.map(
    ([r, o]) => `${r},${o}`
  )).size !== t.length)
    throw new RangeError("淹没区域不能包含重复的坐标点。");
  for (let r = 0; r < t.length; r += 1) {
    const o = t[r], a = t[(r + 1) % t.length];
    if (o[0] === a[0] && o[1] === a[1])
      throw new RangeError("淹没区域不能包含连续重复的坐标点。");
  }
  return Hc(t), t;
}
function Dn(e, t, n) {
  const r = (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]);
  return Math.abs(r) < 1e-12 ? 0 : r > 0 ? 1 : -1;
}
function Wn(e, t, n) {
  return n[0] >= Math.min(e[0], t[0]) - 1e-12 && n[0] <= Math.max(e[0], t[0]) + 1e-12 && n[1] >= Math.min(e[1], t[1]) - 1e-12 && n[1] <= Math.max(e[1], t[1]) + 1e-12;
}
function Oc(e, t, n, r) {
  const o = Dn(e, t, n), a = Dn(e, t, r), i = Dn(n, r, e), s = Dn(n, r, t);
  return o !== a && i !== s || o === 0 && Wn(e, t, n) || a === 0 && Wn(e, t, r) || i === 0 && Wn(n, r, e) ? !0 : s === 0 && Wn(n, r, t);
}
function Hc(e) {
  for (let n = 0; n < e.length; n += 1) {
    const r = (n + 1) % e.length;
    for (let o = n + 1; o < e.length; o += 1) {
      const a = (o + 1) % e.length;
      if (!(n === o || r === o || a === n) && Oc(
        e[n],
        e[r],
        e[o],
        e[a]
      ))
        throw new RangeError("淹没区域不能是自相交多边形。");
    }
  }
  let t = 0;
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n], o = e[(n + 1) % e.length];
    t += r[0] * o[1] - o[0] * r[1];
  }
  if (Math.abs(t) < 1e-12)
    throw new RangeError("淹没区域不能退化为直线或零面积多边形。");
}
function Bc(e) {
  if (!e || typeof e != "object")
    throw new TypeError("start 必须传入淹没分析参数。");
  const t = Gc(e.positions), { startWaterLevel: n, targetWaterLevel: r, riseRate: o } = e;
  if (![n, r, o].every(Number.isFinite))
    throw new TypeError("起始水位、目标水位和上涨速度必须是有效数字。");
  if (r < n)
    throw new RangeError("目标水位不能低于起始水位。");
  if (o <= 0)
    throw new RangeError("上涨速度必须大于 0 米/秒。");
  return { positions: t, startWaterLevel: n, targetWaterLevel: r, riseRate: o };
}
function g0(e, t, n = {}) {
  if (!e?.entities || !t?.Cartesian3 || !t?.CallbackProperty)
    throw new TypeError("创建淹没分析组件时必须传入有效的 viewer 和 Cesium。");
  let r = null, o = null, a = null, i = null, s = null, l = null;
  function c() {
    o !== null && (globalThis.clearInterval(o), o = null), l = null;
  }
  function d() {
    const p = typeof e.isDestroyed == "function" && e.isDestroyed();
    r && !p && e.entities.remove(r), r = null;
  }
  function u(p, x) {
    if (!e.camera?.flyTo || !t.Rectangle?.fromDegrees) return;
    const S = p.map(([E]) => E), T = p.map(([, E]) => E), M = Math.min(...S), A = Math.max(...S), _ = Math.min(...T), k = Math.max(...T), C = t.Rectangle.fromDegrees(M, _, A, k), P = e.camera.getRectangleCameraCoordinates?.(C);
    if (!P) return;
    const H = t.Cartographic?.fromCartesian?.(P);
    if (H && t.Cartesian3?.fromRadians) {
      const E = t.Cartesian3.fromRadians(
        H.longitude,
        H.latitude,
        Math.max(H.height, Math.abs(x) + 1e3)
      );
      e.camera.flyTo({ destination: E, duration: 0.8 });
      return;
    }
    e.camera.flyTo({ destination: P, duration: 0.8 });
  }
  function f() {
    if (a === null || i === null || s === null) return;
    if (typeof e.isDestroyed == "function" && e.isDestroyed()) {
      c();
      return;
    }
    const p = Date.now(), x = l === null ? 0 : (p - l) / 1e3;
    l = p, a = Math.min(
      i,
      a + s * x
    ), e.scene?.requestRender?.(), a >= i && c();
  }
  function h(p) {
    const x = Bc(p);
    c(), d(), a = x.startWaterLevel, i = x.targetWaterLevel, s = x.riseRate;
    const S = x.positions.flatMap(([T, M]) => [
      T,
      M
    ]);
    return r = e.entities.add({
      name: "淹没水面",
      polygon: {
        hierarchy: t.Cartesian3.fromDegreesArray(S),
        // 只绘制当前绝对水位的水平面。开启地形深度检测后，高于水位的地形会自然遮挡水面。
        height: new t.CallbackProperty(() => a, !1),
        material: t.Color.fromCssColorString(Fc).withAlpha(zc),
        outline: !1
      }
    }), u(x.positions, x.startWaterLevel), a < i ? (l = Date.now(), o = globalThis.setInterval(f, Rc)) : e.scene?.requestRender?.(), r;
  }
  function g() {
    c(), d(), a = null, i = null, s = null;
  }
  return {
    start: h,
    destroy: g
  };
}
const Ur = "PolylineTrailLink", Bi = 900;
let Cn = null;
const jr = /* @__PURE__ */ new Map();
function qi(e, t = "#35d7ff", n = 1) {
  if (t instanceof e.Color)
    return t.withAlpha(n);
  if (Array.isArray(t)) {
    const [r = 0.2, o = 0.84, a = 1, i = n] = t;
    return new e.Color(r, o, a, i);
  }
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function Nn(e, t, n) {
  const r = qi(e, t, n);
  return `rgba(${Math.round(r.red * 255)},${Math.round(
    r.green * 255
  )},${Math.round(r.blue * 255)},${n})`;
}
function Vi(e, t = "#35d7ff") {
  const n = t.toString();
  if (jr.has(n))
    return jr.get(n);
  const r = document.createElement("canvas");
  r.width = 256, r.height = 32;
  const o = r.getContext("2d"), a = o.createLinearGradient(0, 0, r.width, 0);
  a.addColorStop(0, Nn(e, t, 0)), a.addColorStop(0.3, Nn(e, t, 0.18)), a.addColorStop(0.62, Nn(e, t, 0.95)), a.addColorStop(0.78, "rgba(255,255,255,1)"), a.addColorStop(1, Nn(e, t, 0)), o.clearRect(0, 0, r.width, r.height), o.fillStyle = a, o.fillRect(0, 0, r.width, r.height);
  const i = o.createLinearGradient(0, 0, 0, r.height);
  i.addColorStop(0, "rgba(255,255,255,0)"), i.addColorStop(0.5, "rgba(255,255,255,1)"), i.addColorStop(1, "rgba(255,255,255,0)"), o.globalCompositeOperation = "destination-in", o.fillStyle = i, o.fillRect(0, 0, r.width, r.height), o.globalCompositeOperation = "source-over";
  const s = r.toDataURL("image/png");
  return jr.set(n, s), s;
}
function qc(e) {
  if (!e)
    return null;
  if (Cn)
    return Cn;
  const t = typeof e.createPropertyDescriptor == "function" ? e.createPropertyDescriptor : (o) => {
    const a = `_${o}`;
    return {
      get() {
        return this[a];
      },
      set(i) {
        const s = this[a];
        s !== i && (this[a] = i, this._definitionChanged.raiseEvent(
          this,
          o,
          i,
          s
        ));
      }
    };
  };
  function n(o = {}) {
    this._definitionChanged = new e.Event(), this.color = o.color || e.Color.WHITE, this.duration = o.duration || Bi, this.image = o.image, this.repeat = o.repeat || 1, this.reverse = o.reverse || !1, this._time = Date.now();
  }
  return Object.defineProperties(n.prototype, {
    isConstant: {
      get() {
        return !1;
      }
    },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: t("color")
  }), n.prototype.getType = function() {
    return Ur;
  }, n.prototype.getValue = function(a, i) {
    const s = i || {};
    return s.color = e.Property && typeof e.Property.getValueOrClonedDefault == "function" ? e.Property.getValueOrClonedDefault(
      this.color,
      a,
      e.Color.WHITE,
      s.color
    ) : this.color || e.Color.WHITE, s.image = this.image, s.time = (Date.now() - this._time) % this.duration / this.duration * this.repeat * (this.reverse ? -1 : 1), s;
  }, n.prototype.equals = function(a) {
    return this === a || a instanceof n && e.Property.equals(this.color, a.color);
  }, e.Material._materialCache.addMaterial(Ur, {
    fabric: {
      type: Ur,
      uniforms: {
        color: e.Color.WHITE,
        image: Vi(e),
        time: 0
      },
      source: `
    czm_material czm_getMaterial(czm_materialInput materialInput) {
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st;
      vec4 colorImage = texture(image, vec2(fract(st.s - time), st.t));
      material.alpha = colorImage.a * color.a;
      material.diffuse = (colorImage.rgb + color.rgb) / 2.0;
      return material;
    }
  `
    },
    translucent() {
      return !0;
    }
  }), Cn = n, Cn;
}
function Kr(e, t = {}) {
  const n = qc(e);
  return n ? new n({
    color: qi(e, t.color, t.alpha ?? 1),
    image: Vi(e, t.color || "#35d7ff"),
    duration: t.duration ?? Bi,
    repeat: t.repeat ?? 1,
    reverse: t.reverse ?? !1
  }) : null;
}
const Vc = 900, $c = 1;
function dn(e) {
  const t = Number(e);
  return Number.isFinite(t) && t > 0 ? t : $c;
}
function Ln(e, t) {
  return (Number(e) || Vc) / dn(t);
}
function $i(e) {
  const t = Array.isArray(e) ? { lon: e[0], lat: e[1], height: e[2] } : e;
  return {
    lon: Number(t.lon ?? t.lng ?? t.longitude),
    lat: Number(t.lat ?? t.latitude),
    height: Number(t.height ?? t.alt ?? 0)
  };
}
function Uc(e, t = []) {
  const n = [];
  return t.forEach((r) => {
    const o = $i(r);
    n.push(o.lon, o.lat, o.height);
  }), e.Cartesian3.fromDegreesArrayHeights(n);
}
function Yr(e, t) {
  const n = 111320 * Math.cos(e.Math.toRadians(t.lat));
  return {
    x: t.lon * n,
    y: t.lat * 110540,
    lonScale: n
  };
}
function jc(e, t = [], n = 800) {
  const r = t.map($i);
  if (r.length < 2)
    return null;
  const o = Math.max(Number(n) || 1, 1) / 2, a = [], i = [];
  r.forEach((l, c) => {
    const d = r[Math.max(c - 1, 0)], u = r[Math.min(c + 1, r.length - 1)], f = Yr(e, d), h = Yr(e, u), g = Yr(e, l), p = h.x - f.x, x = h.y - f.y, S = Math.hypot(p, x) || 1, T = -x / S, M = p / S, A = T * o / g.lonScale, _ = M * o / 110540;
    a.push({
      lon: l.lon + A,
      lat: l.lat + _,
      height: l.height
    }), i.push({
      lon: l.lon - A,
      lat: l.lat - _,
      height: l.height
    });
  });
  const s = [...a, ...i.reverse()].flatMap((l) => [
    l.lon,
    l.lat,
    l.height
  ]);
  return e.Cartesian3.fromDegreesArrayHeights(s);
}
function Ta(e, t, n, r) {
  if (!n)
    return null;
  if (n.type === "entity") {
    const o = t.entities.getById(n.id);
    return o?.position?.getValue ? o.position.getValue(r) : o?.position ?? null;
  }
  return n.type === "position" ? n.position ?? null : n.type === "lnglat" ? e.Cartesian3.fromDegrees(
    n.lon,
    n.lat,
    n.height || 0
  ) : n.type === "callback" && typeof n.getPosition == "function" ? n.getPosition(r) : null;
}
function Kc(e, t, n, r) {
  const o = e.Cartesian3.midpoint(
    t,
    n,
    new e.Cartesian3()
  ), a = e.Cartesian3.distance(t, n);
  if (e.Cartesian3.magnitude(o) < 1)
    return o;
  const s = e.Cartesian3.normalize(
    o,
    new e.Cartesian3()
  ), l = e.Math.clamp(a * r, 300, 78e4);
  return e.Cartesian3.add(
    o,
    e.Cartesian3.multiplyByScalar(
      s,
      l,
      new e.Cartesian3()
    ),
    new e.Cartesian3()
  );
}
function Yc(e, t, n, r, o) {
  const a = 1 - o, i = e.Cartesian3.multiplyByScalar(
    t,
    a * a,
    new e.Cartesian3()
  ), s = e.Cartesian3.multiplyByScalar(
    n,
    2 * a * o,
    new e.Cartesian3()
  ), l = e.Cartesian3.multiplyByScalar(
    r,
    o * o,
    new e.Cartesian3()
  ), c = e.Cartesian3.add(
    i,
    s,
    new e.Cartesian3()
  );
  return e.Cartesian3.add(c, l, c);
}
function Jc(e, t, n, r = {}) {
  if (!t || !n)
    return [];
  if (r.mode === "straight-trail")
    return [t, n];
  const o = Math.max(r.sampleCount ?? 48, 2), a = Kc(
    e,
    t,
    n,
    r.curveHeightRatio ?? 0.28
  ), i = [];
  for (let s = 0; s <= o; s += 1)
    i.push(
      Yc(
        e,
        t,
        a,
        n,
        s / o
      )
    );
  return i;
}
function p0(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map();
  let o = dn(n.speed);
  function a(u = {}) {
    if (!e || !t)
      return null;
    const f = Uc(t, u.positions || []);
    return f.length ? e.entities.add({
      name: u.name || "Flow line",
      polyline: {
        positions: f,
        width: u.width ?? 8,
        material: Kr(t, {
          ...u,
          duration: Ln(
            u.duration,
            u.speed ?? o
          )
        }),
        clampToGround: u.clampToGround ?? !1
      }
    }) : null;
  }
  function i(u = {}) {
    if (!e || !t)
      return null;
    const f = jc(
      t,
      u.positions || [],
      u.ribbonWidth
    );
    return f ? e.entities.add({
      name: u.name || "Flow ribbon",
      polygon: {
        hierarchy: f,
        material: Kr(t, {
          ...u,
          duration: Ln(
            u.duration,
            u.speed ?? o
          )
        }),
        perPositionHeight: !0
      }
    }) : null;
  }
  function s(u = {}) {
    if (!e || !t || r.has(u.id))
      return r.get(u.id) || null;
    const f = u.style || {}, h = dn(f.speed ?? u.speed ?? o), g = Kr(t, {
      color: f.color || "#35d7ff",
      alpha: f.alpha ?? 1,
      duration: Ln(f.duration, h),
      repeat: f.repeat ?? 1,
      reverse: f.reverse ?? !1
    }), p = (T) => Jc(
      t,
      Ta(t, e, u.source, T),
      Ta(t, e, u.target, T),
      {
        mode: u.mode,
        sampleCount: f.sampleCount,
        curveHeightRatio: f.curveHeightRatio
      }
    ), x = e.entities.add({
      id: u.id,
      name: u.name || "Transmission link",
      ...u.availability ? { availability: u.availability } : {},
      polyline: {
        positions: new t.CallbackProperty(p, !1),
        width: f.width ?? 7,
        material: g,
        clampToGround: !1,
        arcType: t.ArcType.NONE
      },
      description: u.description
    }), S = {
      id: u.id,
      type: "transmission",
      entity: x,
      speed: h,
      setSpeed(T) {
        const M = dn(T);
        g.duration = Ln(f.duration, M), S.speed = M, e.scene.requestRender();
      },
      setVisible(T) {
        x.show = T;
      },
      remove() {
        e.entities.contains(x) && e.entities.remove(x), r.delete(u.id);
      }
    };
    return r.set(u.id, S), S;
  }
  function l(u) {
    o = dn(u);
  }
  function c(u) {
    const f = r.get(u);
    f && f.remove();
  }
  function d() {
    Array.from(r.keys()).forEach(c);
  }
  return {
    addFlowLine: a,
    addFlowRibbon: i,
    addTransmissionLink: s,
    setDefaultSpeed: l,
    remove: c,
    clear: d,
    getLink(u) {
      return r.get(u);
    },
    getLinks() {
      return Array.from(r.values());
    }
  };
}
const Qc = /* @__PURE__ */ Object.assign({}), m0 = "100000", Xc = /* @__PURE__ */ new Set(["11", "12", "31", "50", "81", "82"]), Zc = {
  extrudedHeight: 6e3,
  fillAlpha: 0.38,
  strokeColor: "#ffffff",
  strokeWidth: 2,
  highlightColor: [0.87, 0.16, 0.06, 0.78],
  highlightOutlineColor: [1, 0.87, 0, 1],
  highlightOutlineWidth: 6,
  showLabels: !0,
  flyTo: !0
};
function Ui(e = Qc) {
  const t = {
    country: null,
    province: [],
    city: [],
    district: [],
    byAdcode: /* @__PURE__ */ new Map()
  };
  return Object.entries(e).forEach(([n, r]) => {
    const o = td(n), i = (n.split("/").pop() || "").match(/^(\d{6})_(.+?)(?:_full)?\.json$/);
    if (!o || !i) return;
    const s = { level: o, adcode: i[1], name: i[2], loader: r };
    t.byAdcode.set(s.adcode, s), o === "country" ? t.country = s : t[o].push(s);
  }), ["province", "city", "district"].forEach((n) => {
    t[n].sort((r, o) => r.adcode.localeCompare(o.adcode));
  }), t;
}
const y0 = Ui();
function td(e) {
  return e.includes("/country/") ? "country" : e.includes("/province/") ? "province" : e.includes("/city/") ? "city" : e.includes("/district/") ? "district" : "";
}
function In(e, t, n) {
  const r = e?.byAdcode?.get(String(n));
  return r?.level === t ? r : null;
}
function ed(e) {
  return `${String(e || "").slice(0, 2)}0000`;
}
function nd(e) {
  return Xc.has(String(e || "").slice(0, 2));
}
function x0(e, t, n) {
  if (!e?.[t] || !n) return [];
  const r = t === "city" || nd(n) ? 2 : 4, o = String(n).slice(0, r);
  return e[t].filter((a) => a.adcode !== String(n) && a.adcode.startsWith(o));
}
function ji(e, t) {
  const n = e.properties?.[t];
  return typeof n?.getValue == "function" ? n.getValue() : n;
}
function rd(e, t) {
  for (const n of ["name", "fullname", "NAME", "Name"]) {
    const r = ji(e, n);
    if (r) return String(r);
  }
  return `区域 ${t + 1}`;
}
function od(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    const o = rd(n, r), a = String(ji(n, "adcode") || "");
    t.has(o) || t.set(o, { name: o, adcode: a, entities: [] });
    const i = t.get(o);
    !i.adcode && a && (i.adcode = a), i.entities.push(n);
  }), Array.from(t.values());
}
function ad(e, t, n) {
  const r = (1 - Math.abs(2 * n - 1)) * t, o = e * 6, a = r * (1 - Math.abs(o % 2 - 1)), i = n - r / 2;
  let s = 0, l = 0, c = 0;
  return o < 1 ? [s, l] = [r, a] : o < 2 ? [s, l] = [a, r] : o < 3 ? [l, c] = [r, a] : o < 4 ? [l, c] = [a, r] : o < 5 ? [s, c] = [a, r] : [s, c] = [r, a], { red: s + i, green: l + i, blue: c + i };
}
function id(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n -= 1) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
}
function sd(e, t, n) {
  const r = Math.random(), o = 1 / Math.max(t, 1), a = Array.from({ length: t }, (i, s) => {
    const l = (r + s * o) % 1, c = 0.66 + s % 5 * 0.05, d = 0.48 + s % 4 * 0.035, { red: u, green: f, blue: h } = ad(l, c, d);
    return new e.Color(u, f, h, n);
  });
  return id(a);
}
function Ie(e, t, n, r) {
  if (t instanceof e.Color) return t.withAlpha(r ?? t.alpha);
  if (Array.isArray(t)) {
    const [a = 1, i = 1, s = 1, l = r ?? 1] = t, c = Math.max(a, i, s) > 1 ? 255 : 1;
    return new e.Color(a / c, i / c, s / c, l);
  }
  const o = e.Color.fromCssColorString(t || n);
  return r === void 0 ? o : o.withAlpha(r);
}
function ka(e) {
  return {
    ...e,
    features: (e?.features || []).filter((t) => /^\d{6}$/.test(String(t.properties?.adcode || "")))
  };
}
function ld(e) {
  const t = {
    minLongitude: Number.POSITIVE_INFINITY,
    maxLongitude: Number.NEGATIVE_INFINITY,
    minLatitude: Number.POSITIVE_INFINITY,
    maxLatitude: Number.NEGATIVE_INFINITY
  };
  function n(r) {
    if (Array.isArray(r)) {
      if (r.length >= 2 && typeof r[0] == "number" && typeof r[1] == "number") {
        t.minLongitude = Math.min(t.minLongitude, r[0]), t.maxLongitude = Math.max(t.maxLongitude, r[0]), t.minLatitude = Math.min(t.minLatitude, r[1]), t.maxLatitude = Math.max(t.maxLatitude, r[1]);
        return;
      }
      r.forEach((o) => n(o?.geometry?.coordinates || o));
    }
  }
  return n(e?.features || []), Object.values(t).every(Number.isFinite) ? t : null;
}
function yo(e, t) {
  if (e) {
    if (Array.isArray(e)) {
      e.forEach((n) => yo(n, t));
      return;
    }
    Array.isArray(e.positions) && t.push(...e.positions), Array.isArray(e.holes) && e.holes.forEach((n) => yo(n, t));
  }
}
function b0(e, t, n = {}) {
  const r = { ...Zc, ...n }, o = n.catalog || Ui(n.modules), a = /* @__PURE__ */ new Map();
  let i = null, s = null, l = null, c = [], d = null, u = -1, f = 0;
  function h(L) {
    n.onStatusChange?.(L);
  }
  function g() {
    n.onRegionItemsChange?.([...c]), n.onCountChange?.(c.length);
  }
  function p() {
    P(), e && i && e.dataSources.remove(i, !0), e && s && e.dataSources.remove(s, !0), i = null, s = null, c = [], g();
  }
  async function x(L) {
    const V = String(L);
    if (a.has(V)) return a.get(V);
    const y = o.byAdcode.get(V);
    if (!y) throw new Error(`本地缺少 ${V} 对应的 GeoJson 数据文件。`);
    const W = await y.loader();
    return a.set(V, W), W;
  }
  async function S(L, V) {
    const y = Ie(t, V.strokeColor, "#ffffff"), W = Ie(
      t,
      V.fillColor || "#0059ff",
      "#0059ff",
      V.fillAlpha
    ), N = new t.GeoJsonDataSource(`${V.name || "行政区"}随机配色图`);
    await N.load(L, {
      stroke: y,
      fill: W,
      strokeWidth: V.strokeWidth,
      clampToGround: !!V.clampToGround
    });
    const R = od(
      N.entities.values.filter(($) => !!$.polygon)
    ), X = sd(t, R.length, V.fillAlpha), O = R.map(($, U) => {
      const Q = X[U];
      return $.entities.forEach((B) => {
        B._geojsonRegionIndex = U, B._geojsonRegionAdcode = $.adcode, B.polygon.material = Q, B.polygon.outline = !0, B.polygon.outlineColor = y, B.polygon.outlineWidth = V.strokeWidth, B.polygon.height = V.baseHeight ?? 0, B.polygon.extrudedHeight = V.extrudedHeight;
      }), {
        index: U,
        name: $.name,
        adcode: $.adcode,
        entities: $.entities,
        color: Q,
        cssColor: Q.toCssColorString()
      };
    });
    return { dataSource: N, items: O };
  }
  function T(L) {
    const V = [], y = t.JulianDate.now();
    return L.forEach((W) => {
      const N = W.polygon?.hierarchy, R = typeof N?.getValue == "function" ? N.getValue(y) : N;
      yo(R, V);
    }), V.length ? t.BoundingSphere.fromPoints(V).center : null;
  }
  function M(L) {
    !e || L.showLabels === !1 || (s = new t.CustomDataSource("行政区名称标注"), c.forEach((V) => {
      const y = T(V.entities);
      y && s.entities.add({
        position: y,
        label: {
          text: V.name,
          font: L.labelFont || "800 13px sans-serif",
          style: t.LabelStyle.FILL_AND_OUTLINE,
          fillColor: Ie(t, L.labelColor, "#ffffff"),
          outlineColor: Ie(t, L.labelOutlineColor, "#000000"),
          outlineWidth: L.labelOutlineWidth ?? 3,
          showBackground: !1,
          horizontalOrigin: t.HorizontalOrigin.CENTER,
          verticalOrigin: t.VerticalOrigin.CENTER,
          heightReference: t.HeightReference.NONE,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          scaleByDistance: new t.NearFarScalar(4e5, 1, 7e6, 0.62)
        }
      });
    }), e.dataSources.add(s));
  }
  function A(L, V = {}, y = {}) {
    if (!e || !t) return;
    const W = ld(L);
    if (!W) return;
    if ((V.level || V.type) === "country") {
      const et = t.Cartesian3.fromDegrees(
        y.longitude ?? 104.5,
        y.latitude ?? 36
      );
      e.camera.flyToBoundingSphere(new t.BoundingSphere(et, y.radius ?? 47e5), {
        offset: new t.HeadingPitchRange(
          t.Math.toRadians(y.heading ?? 0),
          t.Math.toRadians(y.pitch ?? -55),
          y.range ?? y.height ?? 108e5
        ),
        duration: y.duration ?? 2.4,
        complete: () => e.camera.lookAtTransform(t.Matrix4.IDENTITY)
      });
      return;
    }
    const R = Math.max(W.maxLongitude - W.minLongitude, 0.1), X = Math.max(W.maxLatitude - W.minLatitude, 0.1), O = (W.minLongitude + W.maxLongitude) / 2, $ = (W.minLatitude + W.maxLatitude) / 2, U = t.Cartesian3.fromDegrees(O, $), Q = t.BoundingSphere.fromPoints([
      U,
      t.Cartesian3.fromDegrees(W.minLongitude, W.minLatitude),
      t.Cartesian3.fromDegrees(W.minLongitude, W.maxLatitude),
      t.Cartesian3.fromDegrees(W.maxLongitude, W.minLatitude),
      t.Cartesian3.fromDegrees(W.maxLongitude, W.maxLatitude)
    ]), B = Math.min(
      Math.max(Math.max(Math.max(R, X) * 12e4, Q.radius * 2.75), 18e4),
      18e5
    );
    e.camera.flyToBoundingSphere(Q, {
      offset: new t.HeadingPitchRange(
        t.Math.toRadians(y.heading ?? 0),
        t.Math.toRadians(y.pitch ?? -68),
        y.range ?? y.height ?? B
      ),
      duration: y.duration ?? 2.4,
      complete: () => e.camera.lookAtTransform(t.Matrix4.IDENTITY)
    });
  }
  async function _(L, V, y, W) {
    const N = { ...r, ...y, name: y.name || V.name }, { dataSource: R, items: X } = await S(L, N);
    return W !== f ? null : (e.dataSources.add(R), i = R, c = X, d = V, g(), M(N), n.onRegionChange?.(V), N.flyTo !== !1 && A(L, V, N), h(`已加载${V.name} GeoJson 随机配色行政区划图。`), e.scene.requestRender?.(), R);
  }
  async function k(L = o.country, V = {}) {
    if (!e || !t) return null;
    const y = typeof L == "object" ? L : o.byAdcode.get(String(L));
    if (!y?.adcode) {
      const N = new Error("未找到要加载的行政区数据。");
      return n.onError?.(N), null;
    }
    const W = ++f;
    p(), n.onError?.(null), h(`正在加载${y.name} GeoJson 行政区划数据。`);
    try {
      const N = ka(await x(y.adcode));
      return await _(N, y, V, W);
    } catch (N) {
      return W === f && (n.onError?.(N), h("GeoJson 多色图加载失败。")), null;
    }
  }
  async function C(L, V = {}) {
    if (!e || !t || !L) return null;
    const y = ++f;
    p(), n.onError?.(null);
    const W = {
      name: V.name || "自定义区域",
      adcode: String(V.adcode || ""),
      level: V.level || "custom"
    };
    h(`正在加载${W.name} GeoJson 数据。`);
    try {
      const N = V.filterAdministrativeFeatures ? ka(L) : L;
      return await _(N, W, V, y);
    } catch (N) {
      return y === f && (n.onError?.(N), h("GeoJson 多色图加载失败。")), null;
    }
  }
  function P() {
    const L = c[u];
    L && L.entities.forEach((V) => {
      V.polygon.material = L.color, V.polygon.outlineColor = Ie(t, r.strokeColor, "#ffffff"), V.polygon.outlineWidth = r.strokeWidth;
    }), u = -1, n.onActiveRegionChange?.(null);
  }
  function H(L) {
    if (u === L) return;
    P();
    const V = c[L];
    V && (V.entities.forEach((y) => {
      y.polygon.material = Ie(t, r.highlightColor, "#de2910"), y.polygon.outlineColor = Ie(t, r.highlightOutlineColor, "#ffde00"), y.polygon.outlineWidth = r.highlightOutlineWidth;
    }), u = L, n.onActiveRegionChange?.(V));
  }
  async function E(L) {
    if (!L?.adcode) return null;
    const V = d?.level || d?.type;
    if (V === "country") {
      const y = In(o, "province", L.adcode);
      return y ? k(y) : null;
    }
    if (V === "province") {
      const y = In(o, "city", L.adcode) || In(o, "district", L.adcode);
      return y ? k(y) : null;
    }
    return null;
  }
  function G() {
    !e || l || (e.screenSpaceEventHandler.removeInputAction(t.ScreenSpaceEventType.LEFT_DOUBLE_CLICK), l = new t.ScreenSpaceEventHandler(e.scene.canvas), l.setInputAction((L) => {
      const V = e.scene.pick(L.endPosition)?.id;
      V?.polygon && Number.isInteger(V._geojsonRegionIndex) ? H(V._geojsonRegionIndex) : P();
    }, t.ScreenSpaceEventType.MOUSE_MOVE), l.setInputAction((L) => {
      const V = d?.level || d?.type;
      if (!["country", "province"].includes(V)) return;
      const y = e.scene.pick(L.position)?.id;
      y?.polygon && Number.isInteger(y._geojsonRegionIndex) && E(c[y._geojsonRegionIndex]);
    }, t.ScreenSpaceEventType.LEFT_CLICK), l.setInputAction(() => {
    }, t.ScreenSpaceEventType.LEFT_DOUBLE_CLICK));
  }
  function I() {
    l && !l.isDestroyed() && l.destroy(), l = null;
  }
  function F(L = {}) {
    return k(o.country, L);
  }
  function q(L = {}) {
    const V = d?.level || d?.type;
    if (["city", "district"].includes(V)) {
      const y = In(
        o,
        "province",
        ed(d?.adcode)
      );
      return y ? k(y, L) : null;
    }
    return V === "province" ? F(L) : null;
  }
  function K(L = !0) {
    f += 1, p(), d = null, L && h("已清除 GeoJson 多色图。");
  }
  function J() {
    I(), K(!1), a.clear();
  }
  return {
    loadGeoJson: C,
    loadRegion: k,
    selectRegion: k,
    createColorMap: (L = {}) => k(L.region || o.country, L),
    showCountry: F,
    drillUp: q,
    drillIntoRegionItem: E,
    bindInteractions: G,
    unbindInteractions: I,
    setActiveRegion: H,
    clearActiveRegion: P,
    clearColorMap: K,
    fetchGeoJsonByAdcode: x,
    flyToGeoJson: A,
    getCatalog: () => o,
    getDataSource: () => i,
    getLabelDataSource: () => s,
    getCurrentRegion: () => d,
    getRegionItems: () => [...c],
    destroy: J
  };
}
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jn = { exports: {} }, dd = Jn.exports, Aa;
function ud() {
  return Aa || (Aa = 1, (function(e) {
    (function(t, n, r) {
      e.exports ? e.exports = r() : n[t] = r();
    })("h337", dd, function() {
      var t = {
        defaultRadius: 40,
        defaultRenderer: "canvas2d",
        defaultGradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1: "rgb(255,0,0)" },
        defaultMaxOpacity: 1,
        defaultMinOpacity: 0,
        defaultBlur: 0.85,
        defaultXField: "x",
        defaultYField: "y",
        defaultValueField: "value",
        plugins: {}
      }, n = (function() {
        var c = function(f) {
          this._coordinator = {}, this._data = [], this._radi = [], this._min = 10, this._max = 1, this._xField = f.xField || f.defaultXField, this._yField = f.yField || f.defaultYField, this._valueField = f.valueField || f.defaultValueField, f.radius && (this._cfgRadius = f.radius);
        }, d = t.defaultRadius;
        return c.prototype = {
          // when forceRender = false -> called from setData, omits renderall event
          _organiseData: function(u, f) {
            var h = u[this._xField], g = u[this._yField], p = this._radi, x = this._data, S = this._max, T = this._min, M = u[this._valueField] || 1, A = u.radius || this._cfgRadius || d;
            x[h] || (x[h] = [], p[h] = []), x[h][g] ? x[h][g] += M : (x[h][g] = M, p[h][g] = A);
            var _ = x[h][g];
            return _ > S ? (f ? this.setDataMax(_) : this._max = _, !1) : _ < T ? (f ? this.setDataMin(_) : this._min = _, !1) : {
              x: h,
              y: g,
              value: M,
              radius: A,
              min: T,
              max: S
            };
          },
          _unOrganizeData: function() {
            var u = [], f = this._data, h = this._radi;
            for (var g in f)
              for (var p in f[g])
                u.push({
                  x: g,
                  y: p,
                  radius: h[g][p],
                  value: f[g][p]
                });
            return {
              min: this._min,
              max: this._max,
              data: u
            };
          },
          _onExtremaChange: function() {
            this._coordinator.emit("extremachange", {
              min: this._min,
              max: this._max
            });
          },
          addData: function() {
            if (arguments[0].length > 0)
              for (var u = arguments[0], f = u.length; f--; )
                this.addData.call(this, u[f]);
            else {
              var h = this._organiseData(arguments[0], !0);
              h && (this._data.length === 0 && (this._min = this._max = h.value), this._coordinator.emit("renderpartial", {
                min: this._min,
                max: this._max,
                data: [h]
              }));
            }
            return this;
          },
          setData: function(u) {
            var f = u.data, h = f.length;
            this._data = [], this._radi = [];
            for (var g = 0; g < h; g++)
              this._organiseData(f[g], !1);
            return this._max = u.max, this._min = u.min || 0, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
          },
          removeData: function() {
          },
          setDataMax: function(u) {
            return this._max = u, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
          },
          setDataMin: function(u) {
            return this._min = u, this._onExtremaChange(), this._coordinator.emit("renderall", this._getInternalData()), this;
          },
          setCoordinator: function(u) {
            this._coordinator = u;
          },
          _getInternalData: function() {
            return {
              max: this._max,
              min: this._min,
              data: this._data,
              radi: this._radi
            };
          },
          getData: function() {
            return this._unOrganizeData();
          }
          /*,
          
          		      TODO: rethink.
          
          		    getValueAt: function(point) {
          		      var value;
          		      var radius = 100;
          		      var x = point.x;
          		      var y = point.y;
          		      var data = this._data;
          
          		      if (data[x] && data[x][y]) {
          		        return data[x][y];
          		      } else {
          		        var values = [];
          		        // radial search for datapoints based on default radius
          		        for(var distance = 1; distance < radius; distance++) {
          		          var neighbors = distance * 2 +1;
          		          var startX = x - distance;
          		          var startY = y - distance;
          
          		          for(var i = 0; i < neighbors; i++) {
          		            for (var o = 0; o < neighbors; o++) {
          		              if ((i == 0 || i == neighbors-1) || (o == 0 || o == neighbors-1)) {
          		                if (data[startY+i] && data[startY+i][startX+o]) {
          		                  values.push(data[startY+i][startX+o]);
          		                }
          		              } else {
          		                continue;
          		              } 
          		            }
          		          }
          		        }
          		        if (values.length > 0) {
          		          return Math.max.apply(Math, values);
          		        }
          		      }
          		      return false;
          		    }*/
        }, c;
      })(), r = (function() {
        var c = function(h) {
          var g = h.gradient || h.defaultGradient, p = document.createElement("canvas"), x = p.getContext("2d");
          p.width = 256, p.height = 1;
          var S = x.createLinearGradient(0, 0, 256, 1);
          for (var T in g)
            S.addColorStop(T, g[T]);
          return x.fillStyle = S, x.fillRect(0, 0, 256, 1), x.getImageData(0, 0, 256, 1).data;
        }, d = function(h, g) {
          var p = document.createElement("canvas"), x = p.getContext("2d"), S = h, T = h;
          if (p.width = p.height = h * 2, g == 1)
            x.beginPath(), x.arc(S, T, h, 0, 2 * Math.PI, !1), x.fillStyle = "rgba(0,0,0,1)", x.fill();
          else {
            var M = x.createRadialGradient(S, T, h * g, S, T, h);
            M.addColorStop(0, "rgba(0,0,0,1)"), M.addColorStop(1, "rgba(0,0,0,0)"), x.fillStyle = M, x.fillRect(0, 0, 2 * h, 2 * h);
          }
          return p;
        }, u = function(T) {
          for (var g = [], p = T.min, x = T.max, S = T.radi, T = T.data, M = Object.keys(T), A = M.length; A--; )
            for (var _ = M[A], k = Object.keys(T[_]), C = k.length; C--; ) {
              var P = k[C], H = T[_][P], E = S[_][P];
              g.push({
                x: _,
                y: P,
                value: H,
                radius: E
              });
            }
          return {
            min: p,
            max: x,
            data: g
          };
        };
        function f(h) {
          var g = h.container, p = this.shadowCanvas = document.createElement("canvas"), x = this.canvas = h.canvas || document.createElement("canvas");
          this._renderBoundaries = [1e4, 1e4, 0, 0];
          var S = getComputedStyle(h.container) || {};
          x.className = "heatmap-canvas", this._width = x.width = p.width = h.width || +S.width.replace(/px/, ""), this._height = x.height = p.height = h.height || +S.height.replace(/px/, ""), this.shadowCtx = p.getContext("2d"), this.ctx = x.getContext("2d"), x.style.cssText = p.style.cssText = "position:absolute;left:0;top:0;", g.style.position = "relative", g.appendChild(x), this._palette = c(h), this._templates = {}, this._setStyles(h);
        }
        return f.prototype = {
          renderPartial: function(h) {
            h.data.length > 0 && (this._drawAlpha(h), this._colorize());
          },
          renderAll: function(h) {
            this._clear(), h.data.length > 0 && (this._drawAlpha(u(h)), this._colorize());
          },
          _updateGradient: function(h) {
            this._palette = c(h);
          },
          updateConfig: function(h) {
            h.gradient && this._updateGradient(h), this._setStyles(h);
          },
          setDimensions: function(h, g) {
            this._width = h, this._height = g, this.canvas.width = this.shadowCanvas.width = h, this.canvas.height = this.shadowCanvas.height = g;
          },
          _clear: function() {
            this.shadowCtx.clearRect(0, 0, this._width, this._height), this.ctx.clearRect(0, 0, this._width, this._height);
          },
          _setStyles: function(h) {
            this._blur = h.blur == 0 ? 0 : h.blur || h.defaultBlur, h.backgroundColor && (this.canvas.style.backgroundColor = h.backgroundColor), this._width = this.canvas.width = this.shadowCanvas.width = h.width || this._width, this._height = this.canvas.height = this.shadowCanvas.height = h.height || this._height, this._opacity = (h.opacity || 0) * 255, this._maxOpacity = (h.maxOpacity || h.defaultMaxOpacity) * 255, this._minOpacity = (h.minOpacity || h.defaultMinOpacity) * 255, this._useGradientOpacity = !!h.useGradientOpacity;
          },
          _drawAlpha: function(x) {
            for (var g = this._min = x.min, p = this._max = x.max, x = x.data || [], S = x.length, T = 1 - this._blur; S--; ) {
              var M = x[S], A = M.x, _ = M.y, k = M.radius, C = Math.min(M.value, p), P = A - k, H = _ - k, E = this.shadowCtx, G;
              this._templates[k] ? G = this._templates[k] : this._templates[k] = G = d(k, T);
              var I = (C - g) / (p - g);
              E.globalAlpha = I < 0.01 ? 0.01 : I, E.drawImage(G, P, H), P < this._renderBoundaries[0] && (this._renderBoundaries[0] = P), H < this._renderBoundaries[1] && (this._renderBoundaries[1] = H), P + 2 * k > this._renderBoundaries[2] && (this._renderBoundaries[2] = P + 2 * k), H + 2 * k > this._renderBoundaries[3] && (this._renderBoundaries[3] = H + 2 * k);
            }
          },
          _colorize: function() {
            var h = this._renderBoundaries[0], g = this._renderBoundaries[1], p = this._renderBoundaries[2] - h, x = this._renderBoundaries[3] - g, S = this._width, T = this._height, M = this._opacity, A = this._maxOpacity, _ = this._minOpacity, k = this._useGradientOpacity;
            h < 0 && (h = 0), g < 0 && (g = 0), h + p > S && (p = S - h), g + x > T && (x = T - g);
            for (var C = this.shadowCtx.getImageData(h, g, p, x), P = C.data, H = P.length, E = this._palette, G = 3; G < H; G += 4) {
              var I = P[G], F = I * 4;
              if (F) {
                var q;
                M > 0 ? q = M : I < A ? I < _ ? q = _ : q = I : q = A, P[G - 3] = E[F], P[G - 2] = E[F + 1], P[G - 1] = E[F + 2], P[G] = k ? E[F + 3] : q;
              }
            }
            C.data = P, this.ctx.putImageData(C, h, g), this._renderBoundaries = [1e3, 1e3, 0, 0];
          },
          getValueAt: function(h) {
            var g, p = this.shadowCtx, x = p.getImageData(h.x, h.y, 1, 1), S = x.data[3], T = this._max, M = this._min;
            return g = Math.abs(T - M) * (S / 255) >> 0, g;
          },
          getDataURL: function() {
            return this.canvas.toDataURL();
          }
        }, f;
      })(), o = (function() {
        var c = !1;
        return t.defaultRenderer === "canvas2d" && (c = r), c;
      })(), a = {
        merge: function() {
          for (var l = {}, c = arguments.length, d = 0; d < c; d++) {
            var u = arguments[d];
            for (var f in u)
              l[f] = u[f];
          }
          return l;
        }
      }, i = (function() {
        var c = (function() {
          function h() {
            this.cStore = {};
          }
          return h.prototype = {
            on: function(g, p, x) {
              var S = this.cStore;
              S[g] || (S[g] = []), S[g].push((function(T) {
                return p.call(x, T);
              }));
            },
            emit: function(g, p) {
              var x = this.cStore;
              if (x[g])
                for (var S = x[g].length, T = 0; T < S; T++) {
                  var M = x[g][T];
                  M(p);
                }
            }
          }, h;
        })(), d = function(f) {
          var h = f._renderer, g = f._coordinator, p = f._store;
          g.on("renderpartial", h.renderPartial, h), g.on("renderall", h.renderAll, h), g.on("extremachange", function(x) {
            f._config.onExtremaChange && f._config.onExtremaChange({
              min: x.min,
              max: x.max,
              gradient: f._config.gradient || f._config.defaultGradient
            });
          }), p.setCoordinator(g);
        };
        function u() {
          var f = this._config = a.merge(t, arguments[0] || {});
          if (this._coordinator = new c(), f.plugin) {
            var h = f.plugin;
            if (t.plugins[h]) {
              var g = t.plugins[h];
              this._renderer = new g.renderer(f), this._store = new g.store(f);
            } else
              throw new Error("Plugin '" + h + "' not found. Maybe it was not registered.");
          } else
            this._renderer = new o(f), this._store = new n(f);
          d(this);
        }
        return u.prototype = {
          addData: function() {
            return this._store.addData.apply(this._store, arguments), this;
          },
          removeData: function() {
            return this._store.removeData && this._store.removeData.apply(this._store, arguments), this;
          },
          setData: function() {
            return this._store.setData.apply(this._store, arguments), this;
          },
          setDataMax: function() {
            return this._store.setDataMax.apply(this._store, arguments), this;
          },
          setDataMin: function() {
            return this._store.setDataMin.apply(this._store, arguments), this;
          },
          configure: function(f) {
            return this._config = a.merge(this._config, f), this._renderer.updateConfig(this._config), this._coordinator.emit("renderall", this._store._getInternalData()), this;
          },
          repaint: function() {
            return this._coordinator.emit("renderall", this._store._getInternalData()), this;
          },
          getData: function() {
            return this._store.getData();
          },
          getDataURL: function() {
            return this._renderer.getDataURL();
          },
          getValueAt: function(f) {
            return this._store.getValueAt ? this._store.getValueAt(f) : this._renderer.getValueAt ? this._renderer.getValueAt(f) : null;
          }
        }, u;
      })(), s = {
        create: function(l) {
          return new i(l);
        },
        register: function(l, c) {
          t.plugins[l] = c;
        }
      };
      return s;
    });
  })(Jn)), Jn.exports;
}
var hd = ud();
const fd = /* @__PURE__ */ cd(hd), Ht = 120, gd = 18, pd = 1200, md = 0.8, yd = [
  { stop: 0, color: [0.08, 0.18, 0.86, 0] },
  { stop: 0.3, color: [0.05, 0.2, 0.95, 0.38] },
  { stop: 0.5, color: [0.05, 0.7, 0.22, 0.58] },
  { stop: 0.7, color: [1, 0.88, 0.08, 0.72] },
  { stop: 0.88, color: [1, 0.36, 0.02, 0.82] },
  { stop: 1, color: [0.95, 0.02, 0, 0.9] }
];
function xd(e = yd) {
  if (!Array.isArray(e) || e.length < 2)
    throw new TypeError("colorStops 至少需要包含 2 个颜色节点。");
  const t = e.map((n, r) => {
    if (!n || typeof n != "object" || !Number.isFinite(n.stop))
      throw new TypeError(`colorStops[${r}].stop 必须是有效数字。`);
    if (n.stop < 0 || n.stop > 1)
      throw new RangeError(`colorStops[${r}].stop 必须在 0～1 之间。`);
    if (!Array.isArray(n.color) || n.color.length !== 4 || !n.color.every((o) => Number.isFinite(o)))
      throw new TypeError(`colorStops[${r}].color 必须是 RGBA 四项数字数组。`);
    if (n.color.some((o) => o < 0 || o > 1))
      throw new RangeError(`colorStops[${r}].color 的每个通道必须在 0～1 之间。`);
    return { stop: n.stop, color: [...n.color] };
  }).sort((n, r) => n.stop - r.stop);
  for (let n = 1; n < t.length; n += 1)
    if (t[n].stop === t[n - 1].stop)
      throw new RangeError("colorStops 中不能包含重复的 stop。");
  return t;
}
function bd(e) {
  if (!Array.isArray(e))
    throw new TypeError("热力图数据必须是点位数组。");
  if (e.length < 3)
    throw new RangeError("热力图至少需要 3 个点位。");
  const t = e.map((r, o) => {
    if (!r || typeof r != "object")
      throw new TypeError(`points[${o}] 必须是点位对象。`);
    const { lng: a, lat: i, value: s } = r;
    if (![a, i, s].every(Number.isFinite))
      throw new TypeError(`points[${o}] 的 lng、lat、value 必须是有效数字。`);
    if (a < -180 || a > 180 || i < -90 || i > 90)
      throw new RangeError(`points[${o}] 超出有效经纬度范围。`);
    if (s < 0)
      throw new RangeError(`points[${o}].value 不能小于 0。`);
    return { lng: a, lat: i, value: s };
  });
  if (new Set(t.map(({ lng: r, lat: o }) => `${r},${o}`)).size < 2)
    throw new RangeError("热力图点位不能全部重合。");
  if (!t.some(({ value: r }) => r > 0))
    throw new RangeError("热力图至少需要一个 value 大于 0 的点位。");
  return t;
}
function wd(e) {
  let t = e[0].lng, n = e[0].lng, r = e[0].lat, o = e[0].lat;
  for (let c = 1; c < e.length; c += 1) {
    const { lng: d, lat: u } = e[c];
    t = Math.min(t, d), n = Math.max(n, d), r = Math.min(r, u), o = Math.max(o, u);
  }
  const a = n - t, i = o - r, s = Math.max(a * 0.18, i * 0.05, 2e-3), l = Math.max(i * 0.18, a * 0.05, 2e-3);
  return {
    west: t - s,
    south: r - l,
    east: n + s,
    north: o + l
  };
}
function vd(e) {
  const t = e.container.ownerDocument || globalThis.document;
  if (!t?.createElement)
    throw new Error("当前运行环境不支持热力图离屏画布。");
  const n = t.createElement("div");
  return Object.assign(n.style, {
    width: `${Ht}px`,
    height: `${Ht}px`,
    position: "absolute",
    left: "0",
    top: "0",
    visibility: "hidden",
    pointerEvents: "none"
  }), e.container.appendChild(n), n;
}
function _d(e) {
  const t = e?._renderer;
  !t || t.__safeColorize || (t._colorize = function() {
    let r = Math.max(this._renderBoundaries[0], 0), o = Math.max(this._renderBoundaries[1], 0), a = Math.min(this._renderBoundaries[2] - r, this._width - r), i = Math.min(this._renderBoundaries[3] - o, this._height - o);
    if (a <= 0 || i <= 0) return;
    const s = this.shadowCtx.getImageData(r, o, a, i), l = s.data;
    for (let c = 3; c < l.length; c += 4) {
      const d = l[c] * 4;
      d && (l[c - 3] = this._palette[d], l[c - 2] = this._palette[d + 1], l[c - 1] = this._palette[d + 2], l[c] = Math.min(l[c], this._maxOpacity));
    }
    this.ctx.putImageData(s, r, o), this._renderBoundaries = [1e3, 1e3, 0, 0];
  }, t.__safeColorize = !0);
}
function Md(e, t, n) {
  return e + (t - e) * n;
}
function Sd(e, t) {
  if (e <= 0.01) return [0, 0, 0, 0];
  if (e <= t[0].stop) return t[0].color;
  for (let n = 1; n < t.length; n += 1) {
    const r = t[n - 1], o = t[n];
    if (e <= o.stop) {
      const a = (e - r.stop) / (o.stop - r.stop);
      return r.color.map((i, s) => Md(i, o.color[s], a));
    }
  }
  return t[t.length - 1].color;
}
function Pd(e, t, n) {
  const r = vd(e);
  try {
    const o = fd.create({
      container: r,
      radius: gd,
      maxOpacity: 0.9,
      minOpacity: 0,
      blur: 0.78,
      gradient: { ".3": "blue", ".5": "green", ".7": "yellow", ".95": "red" }
    });
    _d(o);
    const a = n.east - n.west, i = n.north - n.south, s = Math.max(...t.map(({ value: c }) => c));
    o.setData({
      min: 0,
      max: s,
      data: t.map(({ lng: c, lat: d, value: u }) => ({
        x: Math.round((c - n.west) / a * (Ht - 1)),
        y: Math.round((n.north - d) / i * (Ht - 1)),
        value: u
      }))
    });
    const l = o._renderer.shadowCtx.getImageData(
      0,
      0,
      Ht,
      Ht
    ).data;
    return { container: r, intensityData: l };
  } catch (o) {
    throw r.remove(), o;
  }
}
function Ed(e, t, n, r) {
  const o = Ht * Ht, a = (Ht - 1) * (Ht - 1), i = new Float64Array(o * 3), s = new Float32Array(o * 3), l = new Float32Array(o * 4), c = new Float32Array(o * 2), d = new Uint16Array(a * 6), u = (n.east - n.west) / (Ht - 1), f = (n.north - n.south) / (Ht - 1);
  let h = 0;
  for (let p = 0; p < Ht; p += 1) {
    const x = n.north - f * p;
    for (let S = 0; S < Ht; S += 1) {
      const T = n.west + u * S, M = (p * Ht + S) * 4 + 3, A = t[M] / 255, _ = e.Cartesian3.fromDegrees(
        T,
        x,
        A * pd
      ), k = e.Cartesian3.normalize(_, new e.Cartesian3()), C = Sd(A, r), P = h * 3, H = h * 4, E = h * 2;
      i[P] = _.x, i[P + 1] = _.y, i[P + 2] = _.z, s[P] = k.x, s[P + 1] = k.y, s[P + 2] = k.z, l[H] = C[0], l[H + 1] = C[1], l[H + 2] = C[2], l[H + 3] = C[3], c[E] = S / (Ht - 1), c[E + 1] = p / (Ht - 1), h += 1;
    }
  }
  let g = 0;
  for (let p = 0; p < Ht - 1; p += 1)
    for (let x = 0; x < Ht - 1; x += 1) {
      const S = p * Ht + x, T = (p + 1) * Ht + x;
      d[g] = S, d[g + 1] = S + 1, d[g + 2] = T, d[g + 3] = T, d[g + 4] = S + 1, d[g + 5] = T + 1, g += 6;
    }
  return new e.Geometry({
    attributes: new e.GeometryAttributes({
      position: new e.GeometryAttribute({
        componentDatatype: e.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: i
      }),
      normal: new e.GeometryAttribute({
        componentDatatype: e.ComponentDatatype.FLOAT,
        componentsPerAttribute: 3,
        values: s
      }),
      color: new e.GeometryAttribute({
        componentDatatype: e.ComponentDatatype.FLOAT,
        componentsPerAttribute: 4,
        values: l
      }),
      st: new e.GeometryAttribute({
        componentDatatype: e.ComponentDatatype.FLOAT,
        componentsPerAttribute: 2,
        values: c
      })
    }),
    indices: d,
    primitiveType: e.PrimitiveType.TRIANGLES,
    boundingSphere: e.BoundingSphere.fromVertices(i)
  });
}
function Td(e, t, n) {
  return e.scene.primitives.add(new t.Primitive({
    geometryInstances: new t.GeometryInstance({ geometry: n }),
    appearance: new t.MaterialAppearance({
      vertexShaderSource: `
        in vec3 position3DHigh;
        in vec3 position3DLow;
        in vec3 normal;
        in vec4 color;
        in float batchId;
        out vec4 v_color;
        void main() {
          vec4 position = czm_computePosition();
          v_color = color;
          gl_Position = czm_modelViewProjectionRelativeToEye * position;
        }`,
      fragmentShaderSource: `
        in vec4 v_color;
        void main() {
          if (v_color.a <= 0.01) discard;
          out_FragColor = v_color;
        }`,
      translucent: !0,
      flat: !0
    }),
    asynchronous: !1
  }));
}
function kd(e, t, n) {
  !e.camera?.flyTo || !t.Rectangle?.fromDegrees || e.camera.flyTo({
    destination: t.Rectangle.fromDegrees(
      n.west,
      n.south,
      n.east,
      n.north
    ),
    duration: md
  });
}
function Ad(e, t, n, r) {
  const o = wd(n), { container: a, intensityData: i } = Pd(e, n, o);
  let s = null;
  try {
    s = Td(
      e,
      t,
      Ed(t, i, o, r)
    );
  } catch (l) {
    throw a.remove(), l;
  }
  return {
    primitive: s,
    container: a,
    bounds: o,
    destroy() {
      a.remove(), s && e.scene.primitives.remove(s), s = null;
    }
  };
}
function w0(e, t, n = {}) {
  if (!e?.scene?.primitives || !e?.container || !t?.Cartesian3)
    throw new TypeError("创建热力图组件时必须传入有效的 viewer 和 Cesium。");
  const r = xd(n.colorStops);
  let o = null;
  function a(s) {
    const l = bd(s), c = Ad(e, t, l, r);
    return o?.destroy(), o = c, kd(e, t, o.bounds), e.scene.requestRender?.(), o.primitive;
  }
  function i() {
    o?.destroy(), o = null, e.scene?.requestRender?.();
  }
  return { draw: a, destroy: i };
}
const Dd = {
  west: 109.8919,
  south: 29.8919,
  east: 110.2081,
  north: 30.2081
}, Ki = [
  { value: 0, color: "#1737c9" },
  { value: 120, color: "#1f72d6" },
  { value: 230, color: "#16a6b7" },
  { value: 340, color: "#18a957" },
  { value: 470, color: "#b8d63d" },
  { value: 580, color: "#ffe03a" },
  { value: 700, color: "#ff8a24" },
  { value: 800, color: "#e5251f" },
  { value: 1e3, color: "#b91516" }
], Qn = {
  type: "hex",
  bounds: null,
  gridWidth: 2e-3,
  baseHeight: 0,
  minHeight: 0,
  maxHeight: 1e3,
  power: 1.45,
  opacity: 0.5,
  outline: !1,
  outlineColor: "#ffffff",
  searchRadius: 10,
  focus: !0,
  boundsPadding: 0,
  maxCells: 6e4,
  colorStops: Ki
};
function Wd(e) {
  const t = String(e || Qn.type).toLowerCase();
  return ["hex", "hexagon", "honeycomb"].includes(t) ? "hex" : "grid";
}
function Cd(e = []) {
  return Array.isArray(e) ? e.map((t) => {
    const n = Array.isArray(t) ? { lon: t[0], lat: t[1], value: t[2] } : t;
    return {
      lon: Number(n.lon ?? n.lng ?? n.longitude),
      lat: Number(n.lat ?? n.latitude),
      value: Number(n.value ?? n.count ?? n.weight ?? 0)
    };
  }).filter((t) => Number.isFinite(t.lon) && Number.isFinite(t.lat) && Number.isFinite(t.value)) : [];
}
function v0(e = Dd, t = 20260527, n = 2600) {
  let r = t;
  const o = () => (r = (r * 9301 + 49297) % 233280, r / 233280), a = e.east - e.west, i = e.north - e.south, s = [
    { x: 0.18, y: 0.28, radius: 0.096, weight: 1.08 },
    { x: 0.28, y: 0.72, radius: 0.094, weight: 1.08 },
    { x: 0.48, y: 0.52, radius: 0.098, weight: 1.02 },
    { x: 0.64, y: 0.78, radius: 0.092, weight: 1.06 },
    { x: 0.78, y: 0.36, radius: 0.096, weight: 1.04 },
    { x: 0.88, y: 0.16, radius: 0.08, weight: 0.96 },
    { x: 0.36, y: 0.36, radius: 0.082, weight: 0.94 }
  ];
  return Array.from({ length: n }, () => {
    const l = o(), c = o(), d = s.reduce((u, f) => {
      const h = l - f.x, g = c - f.y, p = (h * h + g * g) / (2 * f.radius * f.radius);
      return Math.max(u, f.weight * Math.exp(-p));
    }, 0);
    return {
      lon: e.west + l * a,
      lat: e.south + c * i,
      value: Math.max(0, Math.min(
        1e3,
        Math.round(230 + Math.min(1, d) * 860 + (o() - 0.5) * 12)
      ))
    };
  });
}
function Nd(e, t) {
  const n = e.reduce((r, o) => ({
    west: Math.min(r.west, o.lon),
    east: Math.max(r.east, o.lon),
    south: Math.min(r.south, o.lat),
    north: Math.max(r.north, o.lat)
  }), {
    west: Number.POSITIVE_INFINITY,
    east: Number.NEGATIVE_INFINITY,
    south: Number.POSITIVE_INFINITY,
    north: Number.NEGATIVE_INFINITY
  });
  return {
    west: n.west - t,
    east: n.east + t,
    south: n.south - t,
    north: n.north + t
  };
}
function Ld(e, t, n) {
  if (!e) return Nd(t, n);
  const r = {
    west: Number(e.west),
    south: Number(e.south),
    east: Number(e.east),
    north: Number(e.north)
  };
  if (!Object.values(r).every(Number.isFinite))
    throw new Error("蜂窝热力图 bounds 参数无效。");
  if (r.west >= r.east || r.south >= r.north)
    throw new Error("蜂窝热力图 bounds 范围无效。");
  return r;
}
function xo(e, t) {
  const n = (e.lat + t.lat) / 2 * (Math.PI / 180), r = (e.lon - t.lon) * 111320 * Math.cos(n), o = (e.lat - t.lat) * 110540;
  return Math.sqrt(r * r + o * o);
}
function Id(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = (a, i) => `${a}:${i}`;
  return e.forEach((a) => {
    const i = Math.floor((a.lon - t.west) / n), s = Math.floor((a.lat - t.south) / n), l = o(i, s);
    r.has(l) || r.set(l, []), r.get(l).push(a);
  }), { bounds: t, cellSize: n, buckets: r, getKey: o };
}
function Da(e, t, n) {
  const r = Math.floor((e.lon - t.bounds.west) / t.cellSize), o = Math.floor((e.lat - t.bounds.south) / t.cellSize), a = [];
  for (let i = r - n; i <= r + n; i += 1)
    for (let s = o - n; s <= o + n; s += 1) {
      const l = t.buckets.get(t.getKey(i, s));
      l && a.push(...l);
    }
  return a;
}
function Wa(e, t, n, r) {
  let o = Da(e, t, r);
  o.length || (o = Da(e, t, r + 2));
  let a = 0, i = 0;
  return o.forEach((s) => {
    const c = 1 / Math.max(xo(e, s), 1) ** n;
    a += s.value * c, i += c;
  }), i > 0 ? a / i : 0;
}
function Rd(e, t, n) {
  return [
    e,
    t,
    e,
    t + n,
    e + n,
    t + n,
    e + n,
    t
  ];
}
function Fd(e, t, n) {
  const r = n / 2, o = Math.sqrt(3) * r / 2;
  return [
    e + r,
    t,
    e + r / 2,
    t + o,
    e - r / 2,
    t + o,
    e - r,
    t,
    e - r / 2,
    t - o,
    e + r / 2,
    t - o
  ];
}
function zd(e, t) {
  const n = e.east - e.west, r = e.north - e.south;
  if (t.type === "hex") {
    const o = t.gridWidth / 2;
    return Math.ceil(n / (o * 1.5)) * Math.ceil(r / (Math.sqrt(3) * o));
  }
  return Math.ceil(n / t.gridWidth) * Math.ceil(r / t.gridWidth);
}
function Gd(e, t) {
  const n = Ld(t.bounds, e, t.boundsPadding), r = zd(n, t);
  if (r > t.maxCells)
    throw new Error(`预计生成 ${r} 个热力单元，请增大 gridWidth。`);
  const o = Id(e, n, t.gridWidth * 2), a = [];
  if (t.type === "hex") {
    const i = t.gridWidth / 2, s = i * 1.5, l = Math.sqrt(3) * i;
    let c = 0;
    for (let d = n.west + i; d < n.east; d += s) {
      const u = c % 2 === 0 ? 0 : l / 2;
      for (let f = n.south + i + u; f < n.north; f += l) {
        const h = { lon: d, lat: f };
        a.push({
          type: "hex",
          center: h,
          positions: Fd(d, f, t.gridWidth),
          value: Wa(h, o, t.power, t.searchRadius)
        });
      }
      c += 1;
    }
  } else
    for (let i = n.west; i < n.east; i += t.gridWidth)
      for (let s = n.south; s < n.north; s += t.gridWidth) {
        const l = {
          lon: i + t.gridWidth / 2,
          lat: s + t.gridWidth / 2
        };
        a.push({
          type: "grid",
          center: l,
          positions: Rd(i, s, t.gridWidth),
          value: Wa(l, o, t.power, t.searchRadius)
        });
      }
  return { cells: a, bounds: n };
}
function Od(e, t) {
  if (Array.isArray(e)) return { dataPoints: e, options: t };
  const n = e || {}, { data: r, points: o, dataPoints: a, ...i } = n;
  return {
    dataPoints: a || o || r || [],
    options: { ...i, ...t }
  };
}
function _0(e, t, n = {}) {
  let r = null, o = [], a = {}, i = null, s = [];
  function l(p, x) {
    if (p instanceof t.Color) return p.withAlpha(x ?? p.alpha);
    if (Array.isArray(p)) {
      const [S = 255, T = 255, M = 255, A = x] = p, _ = Math.max(S, T, M) > 1 ? 255 : 1;
      return new t.Color(S / _, T / _, M / _, A);
    }
    return t.Color.fromCssColorString(p || "#ffffff").withAlpha(x);
  }
  function c(p, x = {}, S = null) {
    if (typeof x.getColor == "function")
      return l(x.getColor(p, S, x), x.opacity);
    const T = (x.colorStops || Ki).map((A) => ({ value: Number(A.value), color: A.color })).filter((A) => Number.isFinite(A.value) && A.color).sort((A, _) => A.value - _.value);
    if (!T.length) return t.Color.WHITE.withAlpha(x.opacity);
    const M = Math.max(x.minHeight, Math.min(x.maxHeight, p));
    if (M <= T[0].value) return l(T[0].color, x.opacity);
    if (M >= T[T.length - 1].value)
      return l(T[T.length - 1].color, x.opacity);
    for (let A = 0; A < T.length - 1; A += 1) {
      const _ = T[A], k = T[A + 1];
      if (M >= _.value && M <= k.value) {
        const C = (M - _.value) / (k.value - _.value), P = l(_.color, x.opacity), H = l(k.color, x.opacity);
        return new t.Color(
          P.red + (H.red - P.red) * C,
          P.green + (H.green - P.green) * C,
          P.blue + (H.blue - P.blue) * C,
          x.opacity
        );
      }
    }
    return l(T[T.length - 1].color, x.opacity);
  }
  function d(p = !0) {
    e && r && e.dataSources.remove(r, !0), r = null, i = null, s = [], p && (n.onCountChange?.(0), n.onStatusChange?.("已清除蜂窝热力图。")), e?.scene?.requestRender?.();
  }
  function u(p = i, x = {}) {
    if (!e || !t || !p) return !1;
    const S = (p.west + p.east) / 2, T = (p.south + p.north) / 2, M = xo(
      { lon: p.west, lat: T },
      { lon: p.east, lat: T }
    ), A = xo(
      { lon: S, lat: p.south },
      { lon: S, lat: p.north }
    ), _ = Math.max(M, A);
    return e.camera.flyToBoundingSphere(
      new t.BoundingSphere(
        t.Cartesian3.fromDegrees(S, T, 0),
        _ * 0.5
      ),
      {
        duration: x.duration ?? 1.5,
        offset: new t.HeadingPitchRange(
          t.Math.toRadians(x.heading ?? 0),
          t.Math.toRadians(x.pitch ?? -28),
          x.range ?? Math.max(_ * 1.584, 13e3)
        ),
        complete: () => e.camera.lookAtTransform(t.Matrix4.IDENTITY)
      }
    ), !0;
  }
  function f(p, x = {}) {
    if (!e || !t) return null;
    const S = Od(p, x), T = Cd(S.dataPoints);
    if (T.length < 3) {
      const A = new Error("蜂窝热力图点位不得少于 3 个。");
      return n.onError?.(A), null;
    }
    const M = {
      ...Qn,
      ...n,
      ...S.options
    };
    if (M.type = Wd(M.type), M.gridWidth = Number(M.gridWidth), M.power = Math.max(Number(M.power) || 1.45, 0.1), M.searchRadius = Math.max(Math.round(Number(M.searchRadius) || 10), 1), M.boundsPadding = Math.max(Number(M.boundsPadding) || 0, 0), M.maxCells = Math.max(Math.round(Number(M.maxCells) || 6e4), 1), M.opacity = Math.min(Math.max(Number(M.opacity), 0), 1), M.minHeight = Number.isFinite(Number(M.minHeight)) ? Number(M.minHeight) : Qn.minHeight, M.maxHeight = Number.isFinite(Number(M.maxHeight)) ? Number(M.maxHeight) : Qn.maxHeight, !Number.isFinite(M.gridWidth) || M.gridWidth <= 0)
      return n.onError?.(new Error("gridWidth 必须是大于 0 的数字。")), null;
    if (M.maxHeight < M.minHeight)
      return n.onError?.(new Error("maxHeight 不能小于 minHeight。")), null;
    n.onError?.(null);
    try {
      const A = Gd(T, M);
      d(!1);
      const _ = new t.CustomDataSource(M.name || "HoneycombHeatmap");
      _.entities.suspendEvents();
      try {
        A.cells.forEach((k) => {
          const C = Math.max(
            M.minHeight,
            Math.min(M.maxHeight, k.value)
          ), P = _.entities.add({
            name: `蜂窝热力值 ${k.value.toFixed(1)}`,
            properties: {
              heatValue: k.value,
              centerLongitude: k.center.lon,
              centerLatitude: k.center.lat,
              cellType: k.type
            },
            polygon: {
              hierarchy: t.Cartesian3.fromDegreesArray(k.positions),
              height: Number(M.baseHeight) || 0,
              extrudedHeight: (Number(M.baseHeight) || 0) + C,
              material: c(C, M, k),
              outline: !!M.outline,
              outlineColor: l(M.outlineColor, 1)
            }
          });
          P._honeycombCell = k;
        });
      } finally {
        _.entities.resumeEvents();
      }
      return e.dataSources.add(_), r = _, i = A.bounds, s = A.cells, o = T, a = S.options, n.onCountChange?.(A.cells.length), n.onTypeChange?.(M.type), n.onBoundsChange?.({ ...A.bounds }), n.onCellsChange?.(A.cells), n.onStatusChange?.(
        `已生成 ${A.cells.length} 个${M.type === "hex" ? "六边形" : "四边形"}热力单元。`
      ), M.focus !== !1 && u(A.bounds, M.camera || {}), e.scene.requestRender?.(), _;
    } catch (A) {
      return n.onError?.(A), n.onStatusChange?.("蜂窝热力图生成失败。"), null;
    }
  }
  function h(p = o, x = {}) {
    return f(p, { ...a, ...x });
  }
  function g(p) {
    return r ? (r.show = !!p, e.scene.requestRender?.(), !0) : !1;
  }
  return {
    drawHoneycombHeatmap: f,
    updateHoneycombHeatmap: h,
    clearHoneycombHeatmap: d,
    focusHoneycomb: u,
    setVisible: g,
    getHeatmapColor: c,
    getDataSource: () => r,
    getBounds: () => i ? { ...i } : null,
    getCells: () => [...s],
    destroy: () => d(!1)
  };
}
const Ca = {
  url: "/libs/case_list/InverseMask/beijingBorder.json",
  name: "反选遮罩",
  borderName: "区域边界",
  maskColor: "#1f8bff",
  maskAlpha: 0.58,
  borderColor: "#6dcdeb",
  borderAlpha: 1,
  borderWidth: 2,
  clampToGround: !0,
  areaPadding: 5.5,
  cameraPadding: 0.08,
  focus: !0
};
function Yi(e) {
  return e ? e.type === "Polygon" ? e.coordinates?.[0] ? [e.coordinates[0]] : [] : e.type === "MultiPolygon" ? e.coordinates?.map((t) => t?.[0]).filter(Array.isArray) || [] : e.type === "MultiLineString" ? e.coordinates?.filter(Array.isArray) || [] : e.type === "LineString" ? Array.isArray(e.coordinates) ? [e.coordinates] : [] : e.type === "GeometryCollection" ? e.geometries?.flatMap(Yi) || [] : [] : [];
}
function bo(e) {
  if (!Array.isArray(e)) return [];
  const t = e.map((o) => [Number(o?.[0]), Number(o?.[1])]).filter(([o, a]) => Number.isFinite(o) && Number.isFinite(a));
  if (t.length < 3) return [];
  const n = t[0], r = t[t.length - 1];
  return (n[0] !== r[0] || n[1] !== r[1]) && t.push([...n]), t;
}
function Hd(e) {
  let t = [];
  e?.type === "FeatureCollection" ? t = (e.features || []).map((r) => r?.geometry) : e?.type === "Feature" ? t = [e.geometry] : e?.type && (t = [e]);
  const n = t.flatMap(Yi).map(bo).filter((r) => r.length >= 4);
  if (!n.length) throw new Error("边界数据格式不正确或边界点数量不足。");
  return n;
}
function Bd(e) {
  const t = e.flat();
  if (!t.length) return null;
  const n = t.reduce((r, [o, a]) => ({
    west: Math.min(r.west, o),
    south: Math.min(r.south, a),
    east: Math.max(r.east, o),
    north: Math.max(r.north, a)
  }), {
    west: Number.POSITIVE_INFINITY,
    south: Number.POSITIVE_INFINITY,
    east: Number.NEGATIVE_INFINITY,
    north: Number.NEGATIVE_INFINITY
  });
  return Object.values(n).every(Number.isFinite) ? n : null;
}
function Na(e) {
  return e.flatMap(([t, n]) => [t, n]);
}
function qd(e, t) {
  const n = Math.max(e.west - t, -180), r = Math.max(e.south - t, -89.9), o = Math.min(e.east + t, 180), a = Math.min(e.north + t, 89.9);
  return [n, r, o, r, o, a, n, a, n, r];
}
function M0(e, t, n = {}) {
  let r = null, o = [], a = null, i = [], s = { ...Ca, ...n }, l = 0, c = null, d = !1;
  function u(_, k) {
    if (_ instanceof t.Color) return _.withAlpha(k ?? _.alpha);
    if (Array.isArray(_)) {
      const [C = 255, P = 255, H = 255, E = k ?? 1] = _, G = Math.max(C, P, H) > 1 ? 255 : 1;
      return new t.Color(C / G, P / G, H / G, E);
    }
    return t.Color.fromCssColorString(_ || "#ffffff").withAlpha(k ?? 1);
  }
  function f() {
    n.onCountChange?.((r ? 1 : 0) + o.length);
  }
  function h(_ = !0) {
    e && (r && e.entities.remove(r), o.forEach((k) => e.entities.remove(k))), r = null, o = [], _ && f(), e?.scene?.requestRender?.();
  }
  function g(_ = a, k = {}) {
    if (!e || !t || !_) return !1;
    const C = Number(k.padding ?? s.cameraPadding);
    return e.camera.flyTo({
      destination: t.Rectangle.fromDegrees(
        Math.max(_.west - C, -180),
        Math.max(_.south - C, -89.9),
        Math.min(_.east + C, 180),
        Math.min(_.north + C, 89.9)
      ),
      duration: k.duration ?? 1.2
    }), !0;
  }
  function p(_, k = {}) {
    if (!e || !t) return null;
    const C = _.map(bo).filter((G) => G.length >= 4);
    if (!C.length) {
      const G = new Error("边界点数量不足。");
      return n.onError?.(G), null;
    }
    const P = Bd(C), H = {
      ...Ca,
      ...n,
      ...k
    };
    h(!1), a = P, i = C, s = H;
    const E = C.map((G) => new t.PolygonHierarchy(
      t.Cartesian3.fromDegreesArray(Na(G))
    ));
    return r = e.entities.add({
      name: H.name,
      polygon: {
        hierarchy: new t.PolygonHierarchy(
          t.Cartesian3.fromDegreesArray(
            qd(P, Number(H.areaPadding) || 0)
          ),
          E
        ),
        material: u(H.maskColor, Number(H.maskAlpha)),
        outline: !1,
        height: Number(H.height) || 0
      }
    }), o = C.map((G, I) => e.entities.add({
      name: `${H.borderName} ${I + 1}`,
      polyline: {
        positions: t.Cartesian3.fromDegreesArray(Na(G)),
        width: Number(H.borderWidth) || 2,
        clampToGround: !!H.clampToGround,
        material: u(H.borderColor, Number(H.borderAlpha))
      }
    })), n.onError?.(null), f(), n.onBoundsChange?.({ ...P }), n.onStatusChange?.(
      `已创建反选遮罩，透出 ${C.length} 个边界区域。`
    ), H.focus !== !1 && g(P, H.camera || {}), e.scene.requestRender?.(), {
      maskEntity: r,
      borderEntities: [...o],
      bounds: { ...P },
      rings: C
    };
  }
  async function x(_ = s.url, k = {}) {
    if (!e || !t || !_) return null;
    const C = ++l;
    c?.abort(), c = typeof AbortController > "u" ? null : new AbortController(), n.onError?.(null), n.onStatusChange?.("正在读取反选遮罩边界。");
    try {
      let P = _;
      if (typeof _ == "string") {
        const E = await fetch(_, { signal: c?.signal });
        if (!E.ok) throw new Error(`边界数据加载失败：${E.status}`);
        P = await E.json();
      }
      if (d || C !== l) return null;
      c = null;
      const H = Array.isArray(P) ? P.map(bo).filter((E) => E.length >= 4) : Hd(P);
      return p(H, k);
    } catch (P) {
      return P?.name === "AbortError" || d || C !== l || (c = null, n.onError?.(P), n.onStatusChange?.("反选遮罩加载失败。")), null;
    }
  }
  function S(_ = {}) {
    return i.length ? p(i, {
      ...s,
      ..._,
      focus: _.focus ?? !1
    }) : null;
  }
  function T(_) {
    if (!r && !o.length) return !1;
    const k = !!_;
    return r && (r.show = k), o.forEach((C) => {
      C.show = k;
    }), e.scene.requestRender?.(), !0;
  }
  function M() {
    l += 1, c?.abort(), c = null, h(), a = null, i = [], n.onStatusChange?.("已清除反选遮罩。");
  }
  function A() {
    d = !0, l += 1, c?.abort(), c = null, h(!1), a = null, i = [];
  }
  return {
    loadInverseMask: x,
    createInverseMask: p,
    updateStyle: S,
    setVisible: T,
    focusMask: g,
    resetCamera: g,
    clearMask: M,
    getMaskEntity: () => r,
    getBorderEntities: () => [...o],
    getBounds: () => a ? { ...a } : null,
    getRings: () => i.map((_) => _.map((k) => [...k])),
    destroy: A
  };
}
const Xn = {
  count: 1e5,
  batchSize: 5e4,
  seed: 20260609,
  image: "/libs/case_list/MassiveIcons/icon-creatspace-pin.png",
  width: 32,
  height: 32,
  bounds: {
    west: -180,
    south: -90,
    east: 180,
    north: 90
  },
  scaleByDistance: {
    near: 2e6,
    nearValue: 1,
    far: 8e6,
    farValue: 0.1
  }
}, Vd = {
  lon: 104,
  lat: 35,
  height: 18e6
};
function $d(e) {
  let t = Number(e) >>> 0;
  return () => (t = 1664525 * t + 1013904223 >>> 0, t / 4294967296);
}
function Ud() {
  return new Promise((e) => {
    typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : globalThis.setTimeout(e, 0);
  });
}
function jd(e) {
  const t = { ...Xn.bounds, ...e || {} }, n = {
    west: Number(t.west),
    south: Number(t.south),
    east: Number(t.east),
    north: Number(t.north)
  };
  if (!Object.values(n).every(Number.isFinite))
    throw new Error("图标分布范围 bounds 参数无效。");
  if (n.west >= n.east || n.south >= n.north)
    throw new Error("图标分布范围 bounds 参数无效。");
  return n;
}
function La(e, t) {
  if (e instanceof t.Cartesian3) return e;
  if (Array.isArray(e))
    return t.Cartesian3.fromDegrees(
      Number(e[0]),
      Number(e[1]),
      Number(e[2]) || 0
    );
  const n = Number(e?.lon ?? e?.lng ?? e?.longitude), r = Number(e?.lat ?? e?.latitude), o = Number(e?.height ?? e?.alt ?? 0);
  return !Number.isFinite(n) || !Number.isFinite(r) ? null : t.Cartesian3.fromDegrees(n, r, o);
}
function S0(e, t, n = {}) {
  let r = null, o = 0, a = null, i = 0, s = 0, l = !1, c = { ...Xn, ...n };
  function d(M) {
    M && n.onStatusChange?.(M), n.onCountChange?.(i), n.onGeneratingChange?.(l), n.onProgress?.({
      count: i,
      targetCount: s,
      isGenerating: l,
      remaining: Math.max(s - i, 0)
    }), e?.scene?.requestRender?.();
  }
  function u(M) {
    if (M.scaleByDistance instanceof t.NearFarScalar) return M.scaleByDistance;
    const A = {
      ...Xn.scaleByDistance,
      ...M.scaleByDistance || {}
    };
    return new t.NearFarScalar(
      Number(A.near),
      Number(A.nearValue),
      Number(A.far),
      Number(A.farValue)
    );
  }
  function f(M, A) {
    if (typeof A.getPosition == "function")
      return La(A.getPosition(M, a, A), t);
    if (Array.isArray(A.positions))
      return La(A.positions[M], t);
    const _ = A.bounds;
    return t.Cartesian3.fromDegrees(
      _.west + a() * (_.east - _.west),
      _.south + a() * (_.north - _.south),
      Number(A.height) || 0
    );
  }
  function h(M = !0) {
    o += 1, e && r && e.scene.primitives.remove(r), r = null, a = null, i = 0, s = 0, l = !1, M && d("已清除海量图标。");
  }
  async function g(M, A) {
    if (!e || !t) return null;
    const _ = c, k = Math.max(Math.floor(Number(M) || 0), 0), C = Array.isArray(_.positions) ? _.positions.length : 1 / 0;
    if (s = Math.min(k, C), s <= i) return r;
    l = !0, d(`正在生成 ${s.toLocaleString()} 个 Billboard 图标。`);
    try {
      a || (a = $d(_.seed)), r || (r = e.scene.primitives.add(new t.BillboardCollection()));
      const P = u(_);
      r.show = !1;
      const H = Math.max(Math.floor(Number(_.batchSize) || 5e4), 1);
      for (let E = i; E < s; E += 1) {
        if (o !== A) return null;
        const G = f(E, _);
        if (!G) throw new Error(`第 ${E + 1} 个图标位置无效。`);
        r.add({
          position: G,
          image: _.image,
          width: Number(_.width) || 32,
          height: Number(_.height) || 32,
          scaleByDistance: P,
          ..._.billboardOptions
        }), (E + 1) % H === 0 && (i = E + 1, d(`正在生成 ${i.toLocaleString()} / ${s.toLocaleString()} 个图标。`), await Ud());
      }
      return o !== A ? null : (i = s, r.show = !0, d(`已通过 BillboardCollection 加载 ${i.toLocaleString()} 个图标。`), r);
    } catch (P) {
      return o === A && r && (r.show = !0), n.onError?.(P), d("海量图标加载失败。"), null;
    } finally {
      o === A && (l = !1, n.onGeneratingChange?.(!1), n.onProgress?.({
        count: i,
        targetCount: s,
        isGenerating: l,
        remaining: Math.max(s - i, 0)
      }));
    }
  }
  async function p(M = {}) {
    if (!e || !t) return null;
    h(!1), c = {
      ...Xn,
      ...n,
      ...M,
      bounds: jd(M.bounds ?? n.bounds)
    }, n.onError?.(null);
    const A = ++o, _ = M.count ?? c.count;
    return g(_, A);
  }
  async function x(M = c.count) {
    if (!e || !t || l) return null;
    n.onError?.(null);
    const A = ++o;
    return g(i + Math.max(Math.floor(Number(M) || 0), 0), A);
  }
  function S(M) {
    return r ? (r.show = !!M, e.scene.requestRender?.(), !0) : !1;
  }
  function T(M = {}) {
    if (!e || !t) return;
    const A = { ...Vd, ...M };
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(A.lon ?? A.lng ?? A.longitude),
        Number(A.lat ?? A.latitude),
        Number(A.height ?? A.alt)
      )
    });
  }
  return {
    createMassiveIcons: p,
    appendIcons: x,
    clearIcons: h,
    setVisible: S,
    focusScene: T,
    getCollection: () => r,
    getState: () => ({ currentCount: i, targetCount: s, isGenerating: l }),
    destroy: () => h(!1)
  };
}
const wo = {
  count: 1e3,
  batchSize: 160,
  seed: 20260610,
  url: "/resources/model/Man.glb",
  height: 2e4,
  scale: 5e5,
  bounds: {
    west: -180,
    south: -90,
    east: 180,
    north: 90
  },
  allowPicking: !1,
  asynchronous: !1,
  incrementallyLoadTextures: !0,
  shadows: "DISABLED",
  enableShowOutline: !1,
  disableInteractionWhileLoading: !0
}, Kd = {
  lon: 104,
  lat: 35,
  height: 18e6
};
function Yd(e) {
  let t = Number(e) % 2147483647;
  return t <= 0 && (t += 2147483646), () => (t = t * 16807 % 2147483647, (t - 1) / 2147483646);
}
function Jd() {
  return new Promise((e) => {
    typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : globalThis.setTimeout(e, 0);
  });
}
function Qd(e) {
  const t = { ...wo.bounds, ...e || {} }, n = {
    west: Number(t.west),
    south: Number(t.south),
    east: Number(t.east),
    north: Number(t.north)
  };
  if (!Object.values(n).every(Number.isFinite))
    throw new Error("模型分布范围 bounds 参数无效。");
  if (n.west >= n.east || n.south >= n.north)
    throw new Error("模型分布范围 bounds 参数无效。");
  return n;
}
function Xd(e) {
  return Array.isArray(e) ? {
    lon: Number(e[0]),
    lat: Number(e[1]),
    height: e[2] === void 0 ? void 0 : Number(e[2])
  } : {
    lon: Number(e?.lon ?? e?.lng ?? e?.longitude),
    lat: Number(e?.lat ?? e?.latitude),
    height: e?.height ?? e?.alt ?? void 0
  };
}
function Ia(e) {
  e && !e.isDestroyed?.() && e.destroy?.();
}
function P0(e, t, n = {}) {
  let r = [], o = [], a = null, i = 0, s = 0, l = 0, c = !1, d = { ...wo, ...n }, u = null;
  function f(C) {
    C && n.onStatusChange?.(C), n.onCountChange?.(s), n.onLoadingChange?.(c), n.onProgress?.({
      loadedCount: s,
      targetCount: l,
      isLoading: c,
      remaining: Math.max(l - s, 0)
    }), e?.scene?.requestRender?.();
  }
  function h(C) {
    const P = e?.scene?.screenSpaceCameraController;
    if (!P) return;
    const H = [
      "enableRotate",
      "enableTranslate",
      "enableZoom",
      "enableTilt",
      "enableLook"
    ];
    if (!C) {
      u || (u = Object.fromEntries(
        H.map((E) => [E, P[E]])
      )), H.forEach((E) => {
        P[E] = !1;
      });
      return;
    }
    u && (H.forEach((E) => {
      P[E] = u[E];
    }), u = null);
  }
  function g(C, P) {
    let H;
    typeof P.getPosition == "function" ? H = P.getPosition(C, a, P) : Array.isArray(P.positions) ? H = P.positions[C] : H = o[C];
    const E = Xd(H);
    if (!Number.isFinite(E.lon) || !Number.isFinite(E.lat))
      throw new Error(`第 ${C + 1} 个模型位置无效。`);
    return E;
  }
  function p(C, P) {
    if (a || (a = Yd(P.seed)), !(typeof P.getPosition == "function" || Array.isArray(P.positions)))
      for (; o.length < C; )
        o.push({
          lon: P.bounds.west + a() * (P.bounds.east - P.bounds.west),
          lat: P.bounds.south + a() * (P.bounds.north - P.bounds.south),
          height: Number(P.height) || 0
        });
  }
  async function x(C, P) {
    const H = t.Cartesian3.fromDegrees(
      C.lon,
      C.lat,
      Number.isFinite(Number(C.height)) ? Number(C.height) : Number(P.height) || 0
    ), E = {
      url: P.url,
      modelMatrix: t.Transforms.eastNorthUpToFixedFrame(H),
      scale: Number(P.scale) || 1,
      allowPicking: !!P.allowPicking,
      asynchronous: !!P.asynchronous,
      incrementallyLoadTextures: !!P.incrementallyLoadTextures,
      shadows: t.ShadowMode[P.shadows] ?? t.ShadowMode.DISABLED,
      enableShowOutline: !!P.enableShowOutline,
      ...P.modelOptions
    };
    return typeof t.Model.fromGltfAsync == "function" ? t.Model.fromGltfAsync(E) : t.Model.fromGltf(E);
  }
  function S(C = !0) {
    i += 1, h(!0), r.forEach((P) => {
      e?.scene?.primitives?.contains(P) && e.scene.primitives.remove(P), Ia(P);
    }), r = [], o = [], a = null, s = 0, l = 0, c = !1, C && f("已清除海量模型。");
  }
  async function T(C, P) {
    const H = d, E = Math.max(Math.floor(Number(C) || 0), 0), G = Array.isArray(H.positions) ? H.positions.length : 1 / 0;
    if (l = Math.min(E, G), l <= s) return r;
    c = !0, H.disableInteractionWhileLoading && h(!1), f(`正在通过 Primitive 加载到 ${l.toLocaleString()} 个 GLB 模型。`);
    try {
      p(l, H);
      const I = Math.max(Math.floor(Number(H.batchSize) || 160), 1);
      for (let F = s; F < l; F += I) {
        if (i !== P) return null;
        const q = Array.from(
          { length: Math.min(I, l - F) },
          (J, L) => g(F + L, H)
        ), K = await Promise.all(q.map((J) => x(J, H)));
        if (i !== P)
          return K.forEach(Ia), null;
        K.forEach((J) => {
          e.scene.primitives.add(J), r.push(J), s += 1;
        }), f(`已加载 ${s.toLocaleString()} / ${l.toLocaleString()} 个模型。`), await Jd();
      }
      return f(`已通过 Primitive 加载 ${s.toLocaleString()} 个模型。`), r;
    } catch (I) {
      return n.onError?.(I), f("海量模型加载失败。"), null;
    } finally {
      i === P && (c = !1, h(!0), f());
    }
  }
  async function M(C = {}) {
    if (!e || !t) return null;
    S(!1), d = {
      ...wo,
      ...n,
      ...C,
      bounds: Qd(C.bounds ?? n.bounds)
    }, n.onError?.(null);
    const P = ++i;
    return T(C.count ?? d.count, P);
  }
  function A(C = d.count) {
    if (!e || !t || c) return null;
    n.onError?.(null);
    const P = ++i;
    return T(s + Math.max(Math.floor(Number(C) || 0), 0), P);
  }
  function _(C) {
    return r.forEach((P) => {
      P.show = !!C;
    }), e?.scene?.requestRender?.(), r.length > 0;
  }
  function k(C = {}) {
    if (!e || !t) return;
    const P = { ...Kd, ...C };
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(P.lon ?? P.lng ?? P.longitude),
        Number(P.lat ?? P.latitude),
        Number(P.height ?? P.alt)
      )
    });
  }
  return {
    createMassiveModels: M,
    appendModels: A,
    clearModels: S,
    setVisible: _,
    focusScene: k,
    getModels: () => [...r],
    getState: () => ({ loadedCount: s, targetCount: l, isLoading: c }),
    destroy: () => S(!1)
  };
}
const sr = {
  url: "/libs/case_list/MvtLayer/tiles/{z}/{x}/{y}.pbf",
  bounds: {
    west: 110.3,
    south: 29.2,
    east: 112.8,
    north: 31.9
  },
  minimumLevel: 7,
  maximumLevel: 10,
  tileWidth: 256,
  tileHeight: 256,
  maxCacheSize: 512,
  credit: "MVT",
  alpha: 1,
  show: !0
}, Zd = {
  lon: 111.5,
  lat: 30.5,
  height: 5e4
};
function tu(e, t, n, r) {
  return e.replace("{z}", String(r)).replace("{x}", String(t)).replace("{y}", String(n));
}
function Ji(e, t) {
  const n = document.createElement("canvas");
  return n.width = e, n.height = t, n;
}
function eu(e) {
  const t = { ...sr.bounds, ...e || {} }, n = {
    west: Number(t.west),
    south: Number(t.south),
    east: Number(t.east),
    north: Number(t.north)
  };
  if (!Object.values(n).every(Number.isFinite))
    throw new Error("MVT 图层 bounds 参数无效。");
  if (n.west >= n.east || n.south >= n.north)
    throw new Error("MVT 图层 bounds 参数无效。");
  return n;
}
function Sn(e) {
  return {
    bytes: e,
    pos: 0,
    end: e.length,
    done() {
      return this.pos >= this.end;
    },
    readVarint() {
      let t = 0, n = 0, r = 0;
      do
        r = this.bytes[this.pos++], t += (r & 127) * 2 ** n, n += 7;
      while (r >= 128 && this.pos < this.end);
      return t;
    },
    readSVarint() {
      return un(this.readVarint());
    },
    readBytes() {
      const t = this.readVarint(), n = this.pos;
      return this.pos += t, this.bytes.subarray(n, n + t);
    },
    readString() {
      return new TextDecoder().decode(this.readBytes());
    },
    readFloat() {
      const t = new DataView(
        this.bytes.buffer,
        this.bytes.byteOffset + this.pos,
        4
      ).getFloat32(0, !0);
      return this.pos += 4, t;
    },
    readDouble() {
      const t = new DataView(
        this.bytes.buffer,
        this.bytes.byteOffset + this.pos,
        8
      ).getFloat64(0, !0);
      return this.pos += 8, t;
    },
    skip(t) {
      t === 0 ? this.readVarint() : t === 1 ? this.pos += 8 : t === 2 ? this.pos += this.readVarint() : t === 5 ? this.pos += 4 : this.pos = this.end;
    }
  };
}
function un(e) {
  return e >> 1 ^ -(e & 1);
}
function Ra(e) {
  const t = Sn(e), n = [];
  for (; !t.done(); ) n.push(t.readVarint());
  return n;
}
function nu(e) {
  const t = [];
  let n = 0, r = 0, o = [], a = 0;
  for (; a < e.length; ) {
    const i = e[a++], s = i & 7, l = i >> 3;
    if (s === 1) {
      o.length && t.push(o), o = [];
      for (let c = 0; c < l; c += 1)
        n += un(e[a++]), r += un(e[a++]), o.push([n, r]);
    } else if (s === 2)
      for (let c = 0; c < l; c += 1)
        n += un(e[a++]), r += un(e[a++]), o.push([n, r]);
    else s === 7 && o.length && o.push(o[0]);
  }
  return o.length && t.push(o), t;
}
function ru(e) {
  const t = Sn(e);
  for (; !t.done(); ) {
    const n = t.readVarint(), r = n >> 3, o = n & 7;
    if (r === 1 && o === 2) return t.readString();
    if (r === 2 && o === 5) return t.readFloat();
    if (r === 3 && o === 1) return t.readDouble();
    if (r === 4 && o === 0) return t.readVarint();
    if (r === 5 && o === 0) return t.readSVarint();
    if (r === 6 && o === 0) return !!t.readVarint();
    t.skip(o);
  }
  return null;
}
function ou(e) {
  const t = Sn(e), n = { type: 0, tagIndexes: [], properties: {}, geometryCommands: [], geometry: [] };
  for (; !t.done(); ) {
    const r = t.readVarint(), o = r >> 3, a = r & 7;
    o === 2 && a === 2 ? n.tagIndexes = Ra(t.readBytes()) : o === 3 && a === 0 ? n.type = t.readVarint() : o === 4 && a === 2 ? n.geometryCommands = Ra(t.readBytes()) : t.skip(a);
  }
  return n.geometry = nu(n.geometryCommands), n;
}
function au(e) {
  const t = Sn(e), n = { name: "", extent: 4096, keys: [], values: [], features: [] };
  for (; !t.done(); ) {
    const r = t.readVarint(), o = r >> 3, a = r & 7;
    o === 1 && a === 2 ? n.name = t.readString() : o === 2 && a === 2 ? n.features.push(ou(t.readBytes())) : o === 3 && a === 2 ? n.keys.push(t.readString()) : o === 4 && a === 2 ? n.values.push(ru(t.readBytes())) : o === 5 && a === 0 ? n.extent = t.readVarint() : t.skip(a);
  }
  return n.features.forEach((r) => {
    for (let o = 0; o < r.tagIndexes.length; o += 2) {
      const a = n.keys[r.tagIndexes[o]], i = n.values[r.tagIndexes[o + 1]];
      a !== void 0 && (r.properties[a] = i);
    }
  }), n;
}
function iu(e) {
  const t = Sn(e), n = [];
  for (; !t.done(); ) {
    const r = t.readVarint(), o = r >> 3, a = r & 7;
    o === 3 && a === 2 ? n.push(au(t.readBytes())) : t.skip(a);
  }
  return { layers: n };
}
function su(e, t = "") {
  const n = `${t} ${e.properties?.class || ""} ${e.properties?.type || ""}`;
  return e.type === 3 ? /water|river|lake/i.test(n) ? { fill: "rgba(39, 139, 214, 0.46)", stroke: "rgba(90, 178, 235, 0.7)", width: 0.8 } : /park|green|landuse|wood/i.test(n) ? { fill: "rgba(65, 166, 95, 0.34)", stroke: "rgba(110, 210, 140, 0.4)", width: 0.7 } : { fill: "rgba(79, 183, 255, 0.14)", stroke: "rgba(96, 214, 255, 0.38)", width: 0.7 } : /road|transport|street/i.test(n) ? { stroke: "rgba(255, 205, 94, 0.82)", width: 1.6 } : /rail/i.test(n) ? { stroke: "rgba(230, 230, 230, 0.72)", width: 1.2 } : { stroke: "rgba(96, 236, 255, 0.72)", width: e.type === 1 ? 1 : 1.1 };
}
function lu(e, t, n, r, o) {
  const a = o.getFeatureStyle?.(t, r, o) || su(t, r);
  if (t.type === 1) {
    e.fillStyle = a.stroke, t.geometry.forEach((i) => i.forEach(([s, l]) => {
      e.beginPath(), e.arc(s * n, l * n, a.radius || 2.2, 0, Math.PI * 2), e.fill();
    }));
    return;
  }
  e.beginPath(), t.geometry.forEach((i) => {
    i.forEach(([s, l], c) => {
      c === 0 ? e.moveTo(s * n, l * n) : e.lineTo(s * n, l * n);
    });
  }), t.type === 3 ? (e.fillStyle = a.fill, e.fill("evenodd"), e.strokeStyle = a.stroke, e.lineWidth = a.width, e.stroke()) : t.type === 2 && (e.strokeStyle = a.stroke, e.lineWidth = a.width, e.stroke());
}
function cu(e, t = {}) {
  const n = Ji(t.tileWidth || 256, t.tileHeight || 256), r = n.getContext("2d");
  return r.lineJoin = "round", r.lineCap = "round", e.layers.forEach((o) => {
    const a = n.width / o.extent;
    o.features.forEach((i) => lu(r, i, a, o.name, t));
  }), n;
}
function du({ Cesium: e, ...t }) {
  const n = {
    ...sr,
    ...t,
    bounds: eu(t.bounds)
  }, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = Ji(n.tileWidth, n.tileHeight), i = n.bounds;
  let s = 0, l = !1;
  function c(d, u) {
    for (r.set(d, u); r.size > n.maxCacheSize; ) r.delete(r.keys().next().value);
  }
  return {
    tileWidth: n.tileWidth,
    tileHeight: n.tileHeight,
    minimumLevel: n.minimumLevel,
    maximumLevel: n.maximumLevel,
    tilingScheme: new e.WebMercatorTilingScheme(),
    rectangle: e.Rectangle.fromDegrees(i.west, i.south, i.east, i.north),
    errorEvent: new e.Event(),
    credit: new e.Credit(n.credit),
    hasAlphaChannel: !0,
    ready: !0,
    readyPromise: Promise.resolve(!0),
    requestImage(d, u, f) {
      if (l || f < n.minimumLevel || f > n.maximumLevel) return a;
      const h = `${f}/${d}/${u}`;
      if (r.has(h)) return r.get(h);
      const g = typeof AbortController > "u" ? null : new AbortController();
      g && o.add(g);
      const p = fetch(tu(n.url, d, u, f), {
        signal: g?.signal
      }).then((x) => {
        if (x.status === 404) return null;
        if (!x.ok) throw new Error(`MVT 瓦片请求失败：${x.status}`);
        return x.arrayBuffer();
      }).then((x) => {
        if (!x || l) return a;
        const S = cu(iu(new Uint8Array(x)), n);
        return s += 1, n.onTileLoaded?.(s, { x: d, y: u, level: f }), S;
      }).catch((x) => (x?.name !== "AbortError" && !l && (n.onError?.(x), this.errorEvent.raiseEvent(x)), a)).finally(() => {
        g && o.delete(g);
      });
      return c(h, p), p;
    },
    pickFeatures() {
    },
    destroy() {
      l = !0, o.forEach((d) => d.abort()), o.clear(), r.clear();
    },
    isDestroyed() {
      return l;
    }
  };
}
function E0(e, t, n = {}) {
  let r = null, o = null, a = 0, i = 0, s = { ...sr, ...n };
  function l(h = !0) {
    a += 1, o?.destroy?.(), e && r && e.imageryLayers.remove(r, !0), r = null, o = null, i = 0, h && (n.onTileCountChange?.(0), n.onStatusChange?.("已清除 MVT 图层。")), e?.scene?.requestRender?.();
  }
  function c(h = {}) {
    if (!e || !t) return null;
    l(!1), s = { ...sr, ...n, ...h };
    const g = ++a;
    n.onError?.(null), n.onStatusChange?.("正在创建 MVT 影像瓦片图层。");
    try {
      return o = du({
        Cesium: t,
        ...s,
        onTileLoaded: (p, x) => {
          g === a && (i = p, n.onTileCountChange?.(p), n.onTileLoaded?.(p, x), n.onStatusChange?.(`已解析 ${p} 个 MVT 瓦片。`));
        },
        onError: (p) => {
          g === a && (n.onError?.(p), n.onStatusChange?.("MVT 瓦片加载失败。"));
        }
      }), r = e.imageryLayers.addImageryProvider(o), r.alpha = Number.isFinite(Number(s.alpha)) ? Number(s.alpha) : 1, r.show = s.show !== !1, n.onStatusChange?.("MVT 图层已创建，正在按视图请求瓦片。"), r;
    } catch (p) {
      return n.onError?.(p), n.onStatusChange?.("MVT 图层创建失败。"), null;
    }
  }
  function d(h) {
    return r ? (r.show = !!h, e.scene.requestRender?.(), !0) : !1;
  }
  function u(h) {
    if (!r) return !1;
    const g = Number(h);
    return Number.isFinite(g) ? (r.alpha = Math.min(Math.max(g, 0), 1), e.scene.requestRender?.(), !0) : !1;
  }
  function f(h = {}) {
    if (!e || !t) return;
    const g = { ...Zd, ...h };
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(g.lon ?? g.lng ?? g.longitude),
        Number(g.lat ?? g.latitude),
        Number(g.height ?? g.alt)
      )
    });
  }
  return {
    loadMvtLayer: c,
    clearMvtLayer: l,
    setVisible: d,
    setAlpha: u,
    focusScene: f,
    getLayer: () => r,
    getProvider: () => o,
    getTileCount: () => i,
    destroy: () => l(!1)
  };
}
const hn = {
  url: "/libs/case_list/PointCluster/beijing-points.geojson",
  icon: "/libs/case_list/MassiveIcons/icon-creatspace-pin.png",
  iconWidth: 28,
  iconHeight: 28,
  pixelRange: 32,
  minimumClusterSize: 2,
  clusterEnabled: !0,
  clampToGround: !1,
  scaleByDistance: {
    near: 1e4,
    nearValue: 1,
    far: 18e4,
    farValue: 0.45
  },
  clusterRules: [
    { min: 200, size: 58, color: "#f05d5ecc" },
    { min: 100, size: 52, color: "#f7b955cc" },
    { min: 50, size: 46, color: "#31c5ffcc" },
    { min: 2, size: 40, color: "#38d6bdcc" }
  ]
}, uu = {
  lon: 116.4036,
  lat: 39.6584,
  height: 5e4,
  heading: 0,
  pitch: -62,
  roll: 0
};
function hu(e) {
  return [...e || hn.clusterRules].map((t) => ({
    min: Number(t.min),
    size: Number(t.size),
    color: t.color
  })).filter((t) => Number.isFinite(t.min) && Number.isFinite(t.size) && t.color).sort((t, n) => n.min - t.min);
}
function fu(e, t) {
  return t.find((n) => e >= n.min) || t[t.length - 1];
}
function gu(e = {}) {
  return e.geoJson !== void 0 ? e.geoJson : e.url;
}
function T0(e, t, n = {}) {
  let r = null, o = null, a = /* @__PURE__ */ new Map(), i = 0, s = n.clusterEnabled ?? hn.clusterEnabled, l = { ...hn, ...n }, c = 0;
  function d(A) {
    A && n.onStatusChange?.(A), n.onCountChange?.(i), n.onClusterEnabledChange?.(s), e?.scene?.requestRender?.();
  }
  function u(A, _, k) {
    const C = `${A}_${_}_${k}`;
    if (a.has(C)) return a.get(C);
    const P = document.createElement("canvas"), H = window.devicePixelRatio || 1;
    P.width = _ * H, P.height = _ * H;
    const E = P.getContext("2d");
    E.scale(H, H), E.beginPath(), E.arc(_ / 2, _ / 2, _ / 2 - 1, 0, Math.PI * 2), E.fillStyle = k, E.fill(), E.lineWidth = 2, E.strokeStyle = "rgba(255,255,255,0.78)", E.stroke(), E.beginPath(), E.arc(_ / 2, _ / 2, _ / 2 - 7, 0, Math.PI * 2), E.strokeStyle = "rgba(255,255,255,0.22)", E.stroke(), E.fillStyle = "#ffffff", E.font = `700 ${_ >= 52 ? 18 : 16}px sans-serif`, E.textAlign = "center", E.textBaseline = "middle", E.fillText(String(A), _ / 2, _ / 2 + 1);
    const G = P.toDataURL("image/png");
    return a.set(C, G), G;
  }
  function f() {
    if (!r) return;
    const A = r.clustering.pixelRange;
    r.clustering.pixelRange = 0, r.clustering.pixelRange = A, e?.scene?.requestRender?.();
  }
  function h(A = l) {
    if (!r) return;
    const _ = r.clustering, k = hu(A.clusterRules);
    _.enabled = s, _.pixelRange = Math.max(Math.round(Number(A.pixelRange) || 32), 0), _.minimumClusterSize = Math.max(Math.round(Number(A.minimumClusterSize) || 2), 2), o?.(), o = _.clusterEvent.addEventListener((C, P) => {
      const H = C.length, E = fu(H, k);
      E && (P.label.show = !1, P.billboard.show = !0, P.billboard.id = P.label.id, P.billboard.verticalOrigin = t.VerticalOrigin.CENTER, P.billboard.image = u(H, E.size, E.color), P.billboard.width = E.size, P.billboard.height = E.size, n.onCluster?.({ count: H, clusteredEntities: C, cluster: P, rule: E }));
    }), f();
  }
  function g(A = !0) {
    c += 1, o?.(), o = null, e && r && e.dataSources.remove(r, !0), r = null, a.clear(), i = 0, A && d("已清除点位聚合图层。");
  }
  async function p(A = gu(l), _ = {}) {
    if (!e || !t || !A) return null;
    g(!1);
    const k = ++c;
    l = { ...hn, ...n, ..._ }, s = _.clusterEnabled ?? l.clusterEnabled, n.onError?.(null), d("正在读取点位 GeoJSON。");
    try {
      const C = await t.GeoJsonDataSource.load(A, {
        clampToGround: !!l.clampToGround
      });
      if (k !== c)
        return C.destroy?.(), null;
      const P = {
        ...hn.scaleByDistance,
        ...l.scaleByDistance || {}
      }, H = new t.NearFarScalar(
        Number(P.near),
        Number(P.nearValue),
        Number(P.far),
        Number(P.farValue)
      );
      return C.entities.values.forEach((E) => {
        E.billboard = {
          image: l.icon,
          width: Number(l.iconWidth) || 28,
          height: Number(l.iconHeight) || 28,
          verticalOrigin: t.VerticalOrigin.BOTTOM,
          scaleByDistance: H,
          ...l.billboardOptions
        };
      }), e.dataSources.add(C), r = C, i = r.entities.values.length, h(l), d(`已加载 ${i.toLocaleString()} 个聚合点位。`), r;
    } catch (C) {
      return k !== c || (n.onError?.(C), d("点位聚合加载失败。")), null;
    }
  }
  function x(A) {
    return s = !!A, r && (r.clustering.enabled = s, f()), d(s ? "已开启点位聚合。" : "已关闭点位聚合。"), s;
  }
  function S() {
    return x(!s);
  }
  function T(A = {}) {
    return r ? (l = { ...l, ...A }, A.clusterEnabled !== void 0 && (s = !!A.clusterEnabled), h(l), d("点位聚合参数已更新。"), !0) : !1;
  }
  function M(A = {}) {
    if (!e || !t) return;
    const _ = { ...uu, ...A }, k = Number(_.heading), C = Number(_.pitch), P = Number(_.roll);
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(_.lon ?? _.lng ?? _.longitude),
        Number(_.lat ?? _.latitude),
        Number(_.height ?? _.alt)
      ),
      orientation: {
        heading: t.Math.toRadians(Number.isFinite(k) ? k : 0),
        pitch: t.Math.toRadians(Number.isFinite(C) ? C : -62),
        roll: t.Math.toRadians(Number.isFinite(P) ? P : 0)
      }
    });
  }
  return {
    loadClusterLayer: p,
    clearClusterLayer: g,
    configureClustering: h,
    updateClustering: T,
    refreshCluster: f,
    setClusterEnabled: x,
    toggleCluster: S,
    focusScene: M,
    getDataSource: () => r,
    getPointCount: () => i,
    isClusterEnabled: () => s,
    destroy: () => g(!1)
  };
}
const Jr = "/libs/case_list/PointLight/beijing_buildings_case_area.geojson", ye = {
  lon: 116.3903,
  lat: 39.9914,
  height: 120
}, Ve = {
  position: ye,
  color: "#ff3434",
  intensity: 3,
  radius: 1200
}, Qr = {
  heading: 0,
  pitch: -35,
  range: 12500
}, Xr = {
  lightRadius: 1200,
  buildingHeightScale: 5,
  viewRadius: 5800,
  bounds: {
    west: 116.322,
    south: 39.945,
    east: 116.458,
    north: 40.035
  },
  maxFeatures: Number.POSITIVE_INFINITY,
  initialBatchSize: 150,
  batchSize: 600,
  lights: {
    red: {
      position: { lon: 116.3868, lat: 39.9897, height: 130 },
      color: "#ff3434",
      intensity: 3.2
    },
    green: {
      position: { lon: 116.3936, lat: 39.9909, height: 130 },
      color: "#2dff8a",
      intensity: 3
    },
    blue: {
      position: { lon: 116.3902, lat: 39.9954, height: 130 },
      color: "#35d7ff",
      intensity: 3.4
    }
  }
};
function pu(e) {
  return Object.fromEntries(
    Object.entries(e || {}).map(([t, n]) => [
      t,
      {
        ...n,
        position: { ...n.position }
      }
    ])
  );
}
function Se(e) {
  if (e == null) return null;
  const t = Number.parseFloat(String(e).replace(/[^\d.-]/g, ""));
  return Number.isFinite(t) && t > 0 ? t : null;
}
function Zr(e, t) {
  if (!e || !t) return null;
  const n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return String(e).match(
    new RegExp(`"${n}"=>"?([^",]+)"?`)
  )?.[1] ?? null;
}
function k0(e, t, n = {}) {
  let r = [], o = [], a = [], i = 0, s = 0, l = null;
  const c = (b) => Object.prototype.hasOwnProperty.call(n, b), d = c("buildingUrl") || c("lights");
  let u = {
    ...Xr,
    ...n,
    buildingUrl: n.buildingUrl ?? Jr,
    camera: n.camera ? { ...n.camera } : void 0,
    bounds: c("bounds") ? n.bounds : d ? null : { ...Xr.bounds }
  }, f = S(
    c("lights") ? n.lights : Xr.lights
  );
  function h(b) {
    n.onStatusChange?.(b), n.onBuildingCountChange?.(r.length), e?.scene?.requestRender?.();
  }
  function g(b) {
    n.onError?.(b);
  }
  function p(b = ye) {
    const v = Array.isArray(b) ? { lon: b[0], lat: b[1], height: b[2] } : b || {};
    return {
      lon: Number(
        v.lon ?? v.lng ?? v.longitude ?? ye.lon
      ),
      lat: Number(
        v.lat ?? v.latitude ?? ye.lat
      ),
      height: Number(
        v.height ?? v.alt ?? ye.height
      )
    };
  }
  function x(b = {}) {
    const v = Number(b.intensity ?? Ve.intensity), D = Number(b.radius ?? u.lightRadius);
    return {
      position: p(b.position),
      color: b.color ?? Ve.color,
      intensity: Number.isFinite(v) ? v : Ve.intensity,
      radius: Number.isFinite(D) && D > 0 ? D : Ve.radius
    };
  }
  function S(b) {
    return Array.isArray(b) ? Object.fromEntries(
      b.map((v, D) => [
        v?.key || `light-${D + 1}`,
        x(v)
      ])
    ) : Object.fromEntries(
      Object.entries(b || {}).map(([v, D]) => [
        v,
        x(D)
      ])
    );
  }
  function T(b = "#3c96fa", v = 1) {
    if (b instanceof t.Color) return b.withAlpha(v);
    if (Array.isArray(b)) {
      const [D = 0.24, z = 0.59, j = 0.98, tt = v] = b;
      return new t.Color(D, z, j, tt);
    }
    return t.Color.fromCssColorString(b).withAlpha(v);
  }
  function M(b) {
    const v = p(b);
    return t.Cartesian3.fromDegrees(v.lon, v.lat, v.height);
  }
  function A(b, v) {
    return b / (111320 * Math.cos(t.Math.toRadians(v)));
  }
  function _(b) {
    return b / 110540;
  }
  function k(b, v) {
    const D = b?.geometry;
    if (D) {
      if (D.type === "Polygon") {
        v(D.coordinates);
        return;
      }
      D.type === "MultiPolygon" && D.coordinates.forEach((z) => v(z));
    }
  }
  function C(b) {
    const v = (b || []).reduce(
      (z, j) => (z.lon += Number(j[0]), z.lat += Number(j[1]), z),
      { lon: 0, lat: 0 }
    ), D = Math.max(b?.length || 0, 1);
    return { lon: v.lon / D, lat: v.lat / D };
  }
  function P(b) {
    const v = b?.[0] || [];
    if (v.length < 3) return 0;
    const D = C(v), z = 111320 * Math.cos(
      t.Math.toRadians(D.lat || ye.lat)
    ), j = 110540;
    let tt = 0;
    for (let at = 0; at < v.length; at += 1) {
      const dt = v[at], gt = v[(at + 1) % v.length], yt = (Number(dt[0]) - D.lon) * z, vt = (Number(dt[1]) - D.lat) * j, bt = (Number(gt[0]) - D.lon) * z, Pt = (Number(gt[1]) - D.lat) * j;
      tt += yt * Pt - bt * vt;
    }
    return Math.abs(tt) * 0.5;
  }
  function H(b) {
    let v = 0;
    return k(b, (D) => {
      v += P(D);
    }), v;
  }
  function E(b) {
    let v = null;
    return k(b, (D) => {
      !v && D?.[0]?.length && (v = C(D[0]));
    }), v;
  }
  function G(b, v) {
    const D = Math.cos(t.Math.toRadians(v.lat));
    return [...b].sort((z, j) => {
      const tt = E(z) || v, at = E(j) || v, dt = (tt.lon - v.lon) * D, gt = (at.lon - v.lon) * D, yt = tt.lat - v.lat, vt = at.lat - v.lat;
      return dt * dt + yt * yt - (gt * gt + vt * vt);
    });
  }
  function I(b, v = 8) {
    return String(
      b.properties?.osm_id ?? b.properties?.osm_way_id ?? ""
    ).split("").reduce((z, j) => z + j.charCodeAt(0), 0) % v;
  }
  function F(b) {
    const v = b.properties || {}, D = H(b), z = String(v.building || "").toLowerCase(), j = String(v.amenity || "").toLowerCase(), tt = String(v.landuse || "").toLowerCase(), at = I(b);
    let dt = 12;
    return D > 3e4 ? dt = 36 : D > 12e3 ? dt = 30 : D > 5e3 ? dt = 24 : D > 1800 && (dt = 18), ["apartments", "residential", "dormitory"].includes(z) ? dt = Math.max(dt, 28 + at * 2) : ["commercial", "retail", "office"].includes(z) || v.office ? dt = Math.max(dt, 32 + at * 2.5) : ["house", "detached", "yes"].includes(z) ? dt = Math.max(dt, 10 + at) : ["stadium", "sports_centre"].includes(z) && (dt = Math.max(dt, 18)), ["hospital", "university", "school", "conference_centre"].includes(
      j
    ) && (dt = Math.max(dt, 22 + at)), tt === "military" && (dt = Math.max(dt, 20)), Math.min(Math.max(dt, 8), 88);
  }
  function q(b) {
    const v = b.properties || {}, D = v.other_tags || "", z = Se(v.height) || Se(v.Height) || Se(v["building:height"]) || Se(Zr(D, "height")) || Se(Zr(D, "building:height"));
    if (z) return Math.max(z, 3);
    const j = Se(v["building:levels"]) || Se(v.levels) || Se(Zr(D, "building:levels"));
    if (j) return Math.max(j * 3.2, 6);
    const tt = Number.parseFloat(
      v.height_num ?? v.height_num_m
    );
    return Number.isFinite(tt) && tt > 12 ? Math.max(tt, 10) : F(b);
  }
  function K(b, v, D) {
    if (!Number.isFinite(D)) return !0;
    const z = A(D, v.lat), j = _(D);
    let tt = !1;
    return k(b, (at) => {
      if (tt || !at?.[0]?.length) return;
      const dt = C(at[0]);
      tt = Math.abs(dt.lon - v.lon) <= z && Math.abs(dt.lat - v.lat) <= j;
    }), tt;
  }
  function J(b, v) {
    if (!v) return !0;
    let D = !1;
    return k(b, (z) => {
      if (D || !z?.[0]?.length) return;
      const j = C(z[0]);
      D = j.lon >= v.west && j.lon <= v.east && j.lat >= v.south && j.lat <= v.north;
    }), D;
  }
  function L(b) {
    const v = b[0] || [], D = b.slice(1).map(
      (z) => new t.PolygonHierarchy(
        z.map(
          ([j, tt]) => t.Cartesian3.fromDegrees(j, tt, 0)
        )
      )
    );
    return new t.PolygonHierarchy(
      v.map(([z, j]) => t.Cartesian3.fromDegrees(z, j, 0)),
      D
    );
  }
  function V(b, v, D = 0.92) {
    const z = { red: 0, green: 0.1, blue: 0.3 }, j = t.Cartesian3.fromDegrees(
      b.lon,
      b.lat,
      v * 0.5
    );
    Object.values(f).forEach((at) => {
      const dt = T(at.color, 1), gt = t.Cartesian3.distance(
        j,
        M(at.position)
      ), yt = Number(at.radius ?? u.lightRadius), bt = (1 - Math.min(Math.max(gt / yt, 0.2), 1)) * Number(at.intensity ?? 3);
      z.red += dt.red * bt, z.green += dt.green * bt, z.blue += dt.blue * bt;
    });
    const tt = 0.72 + Math.sin(Date.now() / 420) * 0.08;
    return new t.Color(
      Math.min(z.red * tt, 1),
      Math.min(z.green * tt, 1),
      Math.min(z.blue * tt, 1),
      D
    );
  }
  function y(b = !0) {
    l?.(), l = null, o.forEach(
      (v) => e?.scene?.primitives?.remove(v)
    ), o = [], r = [], b && h("已清除建筑点光源效果。");
  }
  function W() {
    a.forEach((b) => e?.entities.remove(b)), a = [];
  }
  function N() {
    let b = !1;
    if (r.forEach((v) => {
      if (v.pendingColor) {
        if (!v.primitive?.ready) {
          b = !0;
          return;
        }
        try {
          const D = v.primitive.getGeometryInstanceAttributes(
            v.id
          );
          D?.color ? (D.color = t.ColorGeometryInstanceAttribute.toValue(
            v.pendingColor,
            D.color
          ), v.pendingColor = null) : b = !0;
        } catch {
          b = !0;
        }
      }
    }), !b) {
      l?.(), l = null;
      return;
    }
    e?.scene?.requestRender?.();
  }
  function R() {
    l || !e?.scene?.postRender || (l = e.scene.postRender.addEventListener(
      N
    ));
  }
  function X() {
    r.forEach((b) => {
      b.pendingColor = V(b.center, b.height);
    }), N(), r.some((b) => b.pendingColor) && R(), e?.scene?.requestRender?.();
  }
  function O() {
    !e || !t || (W(), Object.entries(f).forEach(([b, v]) => {
      const D = p(v.position), z = T(v.color, 0.95), j = Number(v.radius ?? u.lightRadius);
      a.push(
        e.entities.add({
          name: `${b}-point-light`,
          position: t.Cartesian3.fromDegrees(
            D.lon,
            D.lat,
            D.height
          ),
          point: {
            pixelSize: 10,
            color: z,
            outlineColor: t.Color.WHITE.withAlpha(0.85),
            outlineWidth: 2,
            disableDepthTestDistance: Number.POSITIVE_INFINITY
          }
        })
      ), a.push(
        e.entities.add({
          name: `${b}-light-radius`,
          position: t.Cartesian3.fromDegrees(
            D.lon,
            D.lat,
            2
          ),
          ellipse: {
            height: 0,
            semiMinorAxis: j,
            semiMajorAxis: j,
            material: z.withAlpha(0.12),
            outline: !0,
            outlineColor: z.withAlpha(0.45)
          }
        })
      );
    }), e.scene.requestRender());
  }
  function $({
    key: b = "red",
    position: v = ye,
    color: D = Ve.color,
    intensity: z = Ve.intensity,
    radius: j = u.lightRadius
  } = {}) {
    return !e || !t ? null : (f[b] = x({ position: v, color: D, intensity: z, radius: j }), O(), X(), n.onLightChange?.({ key: b, light: { ...f[b] } }), h(`已更新 ${b} 点光源。`), f[b]);
  }
  function U(b, v = {}) {
    const D = f[b] || {};
    return $({
      key: b,
      position: v.position || D.position,
      color: v.color || D.color,
      intensity: v.intensity ?? D.intensity,
      radius: v.radius ?? D.radius
    });
  }
  function Q(b) {
    const v = q(b) * Number(u.buildingHeightScale), D = b.properties?.name || "Building", z = [];
    return k(b, (j) => {
      if (!j?.[0]?.length) return;
      const tt = C(j[0]), at = `point-light-building-${i}-${++s}`, dt = V(tt, v), gt = new t.PolygonGeometry({
        polygonHierarchy: L(j),
        height: 0,
        extrudedHeight: Math.max(v, 10),
        vertexFormat: t.PerInstanceColorAppearance.VERTEX_FORMAT
      }), yt = new t.GeometryInstance({
        id: at,
        geometry: gt,
        attributes: {
          color: t.ColorGeometryInstanceAttribute.fromColor(dt)
        }
      });
      z.push({
        instance: yt,
        record: {
          id: at,
          name: D,
          center: tt,
          height: v,
          primitive: null,
          pendingColor: null
        }
      });
    }), z;
  }
  function B() {
    return new Promise((b) => requestAnimationFrame(b));
  }
  async function et(b, v, D = 120) {
    let z = 0;
    for (; v === i && !b.ready && z < D; )
      z += 1, e?.scene?.requestRender?.(), await B();
  }
  async function it(b, v, D) {
    const z = Math.max(Math.round(Number(v) || 600), 1), j = Math.min(
      Math.max(Math.round(Number(u.initialBatchSize) || 150), 1),
      z
    );
    let tt = !0;
    for (let at = 0; at < b.length; ) {
      if (D !== i) return;
      const dt = at === 0 ? j : z, gt = b.slice(at, at + dt).flatMap(Q);
      if (at += dt, !gt.length) continue;
      const yt = e.scene.primitives.add(
        new t.Primitive({
          geometryInstances: gt.map(({ instance: vt }) => vt),
          appearance: new t.PerInstanceColorAppearance({
            translucent: !0,
            closed: !0,
            flat: !0
          }),
          asynchronous: !0,
          compressVertices: !0,
          interleave: !0,
          releaseGeometryInstances: !0
        })
      );
      o.push(yt), gt.forEach(({ record: vt }) => {
        vt.primitive = yt, r.push(vt);
      }), e?.scene?.requestRender?.(), tt ? (tt = !1, await et(yt, D)) : await B();
    }
  }
  async function ut(b = Jr, v = {}) {
    if (!e || !t || !b) return [];
    y(!1);
    const D = ++i, z = {
      ...u,
      ...v,
      bounds: v.bounds === void 0 ? u.bounds : v.bounds
    };
    u = z;
    const j = p(
      z.center || ye
    );
    g(null), h("正在加载建筑点光源效果。");
    try {
      const tt = await fetch(b);
      if (!tt.ok)
        throw new Error(`${tt.status} ${tt.statusText}`);
      const at = await tt.json();
      if (D !== i) return [];
      const dt = (at.features || []).filter(
        (bt) => z.bounds ? J(bt, z.bounds) : K(
          bt,
          j,
          Number(z.viewRadius)
        )
      ), gt = G(dt, j), yt = Number(z.maxFeatures), vt = Number.isFinite(yt) ? gt.slice(0, Math.max(yt, 0)) : gt;
      if (!vt.length) {
        const bt = new Error(
          "当前范围未筛选到建筑，请调整 center 或 radius。"
        );
        return g(bt), h(bt.message), [];
      }
      return await it(
        vt,
        z.batchSize,
        D
      ), D !== i ? [] : (h(
        `已加载 ${r.length.toLocaleString()} 栋受光建筑。`
      ), [...r]);
    } catch (tt) {
      return D !== i ? [] : (g(tt), h(`GeoJSON 建筑加载失败：${b}`), []);
    }
  }
  function Z() {
    const b = Object.values(f);
    if (!b.length)
      return {
        center: p(u.center || ye),
        ...Qr
      };
    const v = b.map(
      (at) => p(at.position)
    ), D = {
      lon: v.reduce((at, dt) => at + dt.lon, 0) / v.length,
      lat: v.reduce((at, dt) => at + dt.lat, 0) / v.length,
      height: 0
    }, z = t.Cartesian3.fromDegrees(
      D.lon,
      D.lat,
      0
    ), j = Math.max(
      ...v.map(
        (at) => t.Cartesian3.distance(
          z,
          t.Cartesian3.fromDegrees(at.lon, at.lat, 0)
        )
      ),
      0
    ), tt = Math.max(
      ...b.map((at) => Number(at.radius) || u.lightRadius),
      u.lightRadius
    );
    return {
      center: D,
      heading: Qr.heading,
      pitch: Qr.pitch,
      range: Math.max(2500, (j + tt) * 3)
    };
  }
  function st(b = u.camera || {}) {
    if (!e || !t) return;
    const v = Z(), D = p(
      b.center || v.center
    ), z = Number(b.heading ?? v.heading), j = Number(b.pitch ?? v.pitch), tt = Number(b.range ?? v.range);
    e.camera.lookAt(
      t.Cartesian3.fromDegrees(D.lon, D.lat, 0),
      new t.HeadingPitchRange(
        t.Math.toRadians(Number.isFinite(z) ? z : 0),
        t.Math.toRadians(Number.isFinite(j) ? j : -35),
        Number.isFinite(tt) ? tt : v.range
      )
    ), e.camera.lookAtTransform(t.Matrix4.IDENTITY);
  }
  function nt(b) {
    f = S(b), O(), X(), h("点光源配置已更新。");
  }
  function rt() {
    return pu(f);
  }
  async function ct(b = {}) {
    if (!e || !t) return [];
    Object.prototype.hasOwnProperty.call(b, "lights") ? nt(b.lights) : O();
    const v = b.buildingUrl ?? b.url ?? u.buildingUrl ?? Jr, D = {
      ...u.camera || {},
      ...b.camera || {}
    }, z = { ...b };
    return delete z.buildingUrl, delete z.url, delete z.lights, delete z.camera, z.center === void 0 && (z.center = Z().center), st(D), await ut(v, z);
  }
  function w() {
    i += 1, y(!1), W();
  }
  return {
    createPointLight: $,
    updatePointLight: U,
    setLights: nt,
    getLights: rt,
    renderPointLightHelpers: O,
    refreshBuildingMaterials: X,
    load: ct,
    loadBuildingGeoJson: ut,
    clearBuildings: y,
    clearLightHelpers: W,
    focusScene: st,
    getBuildingEntities: () => [...r],
    getBuildingRecords: () => [...r],
    getBuildingPrimitives: () => [...o],
    destroy: w
  };
}
const Fa = {
  id: "demo-track-matte",
  position: [116.3974, 39.9087],
  shortwaveRange: 1e5,
  speed: 2,
  color: "#00dcff82"
}, mu = {
  heading: 0,
  pitch: -46,
  range: 46e4
};
class yu {
  constructor(t, n, r) {
    this.Cesium = t, this.viewer = n, this.id = r.id, this.shortwaveRange = r.shortwaveRange, this.longitude = r.position[0], this.latitude = r.position[1], this.speed = r.speed, this.color = t.Color.fromCssColorString(r.color), this.position = t.Cartesian3.fromDegrees(this.longitude, this.latitude), this.heading = 0, this.positionArr = this.calcPoints(this.heading), this.tickRemove = null, this.entity = null, this.addEntities();
  }
  addEntities() {
    const { Cesium: t, viewer: n } = this;
    this.entity = n.entities.add({
      id: this.id,
      position: this.position,
      wall: {
        positions: new t.CallbackProperty(
          () => t.Cartesian3.fromDegreesArrayHeights(this.positionArr),
          !1
        ),
        material: this.color,
        distanceDisplayCondition: new t.DistanceDisplayCondition(0, 105e5)
      },
      ellipsoid: {
        radii: new t.Cartesian3(
          this.shortwaveRange,
          this.shortwaveRange,
          this.shortwaveRange
        ),
        maximumCone: t.Math.toRadians(90),
        material: this.color,
        outline: !0,
        outlineColor: this.color,
        outlineWidth: 1,
        distanceDisplayCondition: new t.DistanceDisplayCondition(0, 105e5)
      }
    }), this.start();
  }
  start() {
    this.tickRemove || (this.tickRemove = this.viewer.clock.onTick.addEventListener(() => {
      this.heading += this.speed, this.positionArr = this.calcPoints(this.heading);
    }));
  }
  stop() {
    this.tickRemove?.(), this.tickRemove = null;
  }
  remove() {
    this.stop(), this.entity && (this.viewer.entities.remove(this.entity), this.entity = null);
  }
  calcPoints(t) {
    const { Cesium: n } = this, r = n.Transforms.eastNorthUpToFixedFrame(this.position), o = this.shortwaveRange * Math.cos(n.Math.toRadians(t)), a = this.shortwaveRange * Math.sin(n.Math.toRadians(t)), i = n.Matrix4.multiplyByPoint(
      r,
      n.Cartesian3.fromElements(o, a, 0),
      new n.Cartesian3()
    ), s = n.Cartographic.fromCartesian(i);
    return this.computeCircularFlight(
      this.longitude,
      this.latitude,
      n.Math.toDegrees(s.longitude),
      n.Math.toDegrees(s.latitude),
      0,
      90
    );
  }
  computeCircularFlight(t, n, r, o, a, i) {
    const { Cesium: s } = this, l = [t, n, 0], c = s.Cartesian3.distance(
      s.Cartesian3.fromDegrees(t, n),
      s.Cartesian3.fromDegrees(r, o)
    );
    for (let d = a; d <= a + i; d += 1) {
      const u = s.Math.toRadians(d);
      l.push(
        (r - t) * Math.cos(u) + t,
        (o - n) * Math.cos(u) + n,
        c * Math.sin(u)
      );
    }
    return l;
  }
}
function A0(e, t, n = {}) {
  let r = null;
  function o(c) {
    n.onStatusChange?.(c), n.onCountChange?.(r ? 1 : 0), n.onRunningChange?.(!!r?.tickRemove);
  }
  function a(c = {}) {
    return !e || !t ? null : (s(!1), r = new yu(t, e, {
      ...Fa,
      ...c
    }), o("已创建雷达遮罩扫描。"), r);
  }
  function i() {
    return r ? (r.tickRemove ? (r.stop(), o("雷达遮罩扫描已暂停。")) : (r.start(), o("雷达遮罩扫描运行中。")), e.scene.requestRender(), r) : a();
  }
  function s(c = !0) {
    r?.remove(), r = null, c ? o("雷达遮罩扫描已清除。") : (n.onCountChange?.(0), n.onRunningChange?.(!1));
  }
  function l(c = mu) {
    if (!e || !t)
      return;
    const d = r ? [r.longitude, r.latitude] : Fa.position;
    e.camera.lookAt(
      t.Cartesian3.fromDegrees(d[0], d[1]),
      new t.HeadingPitchRange(
        t.Math.toRadians(c.heading),
        t.Math.toRadians(c.pitch),
        c.range
      )
    ), e.camera.lookAtTransform(t.Matrix4.IDENTITY);
  }
  return {
    addTrackMatteScan: a,
    toggleScan: i,
    clearTrackMatteScan: s,
    flyToScan: l,
    getScan: () => r,
    destroy: () => s(!1)
  };
}
const xu = "/libs/case_list/RoadLayer/beijing-road.json", bu = {
  lon: 116.3982,
  lat: 39.8182,
  height: 15e3,
  heading: 0,
  pitch: -62,
  roll: 0
}, za = {
  dataSourceName: "road-layer",
  minPointCount: 6,
  baseHeight: 4,
  shoulderHeight: 5,
  roadHeight: 6,
  edgeLineHeight: 12,
  centerLineHeight: 14
};
function wu(e, t) {
  const n = Math.min(t / 120, 1);
  return {
    motorway: {
      baseWidth: 54,
      shoulderWidth: 48,
      roadWidth: 38,
      shoulderColor: "#2d333a",
      roadColor: "#20252b",
      edgeLine: !0,
      edgeLineWidth: 2.4,
      edgeLineColor: "#f5f1df",
      edgeLineAlpha: 0.56,
      centerLine: !0,
      centerLineWidth: 2.2,
      centerLineColor: "#e5b94f",
      centerLineAlpha: 0.92,
      dashLength: 28
    },
    trunk: {
      baseWidth: 46,
      shoulderWidth: 40,
      roadWidth: 32,
      shoulderColor: "#2b3138",
      roadColor: "#22272d",
      edgeLine: !0,
      edgeLineWidth: 2,
      edgeLineColor: "#eef3f4",
      edgeLineAlpha: 0.5,
      centerLine: !0,
      centerLineWidth: 2,
      centerLineColor: "#d6dee2",
      centerLineAlpha: 0.78,
      dashLength: 24
    },
    primary: {
      baseWidth: 34 + n * 6,
      shoulderWidth: 31 + n * 5,
      roadWidth: 25 + n * 4,
      shoulderColor: "#292f35",
      roadColor: "#24292f",
      edgeLine: !1,
      centerLine: !0,
      centerLineWidth: 1.6,
      centerLineColor: "#dfe7e9",
      centerLineAlpha: 0.66,
      dashLength: 20
    },
    secondary: {
      baseWidth: 28 + n * 4,
      shoulderWidth: 25 + n * 3,
      roadWidth: 20 + n * 2,
      shoulderColor: "#272d33",
      roadColor: "#262b31",
      edgeLine: !1,
      centerLine: t > 30,
      centerLineWidth: 1.3,
      centerLineColor: "#cdd5d8",
      centerLineAlpha: 0.45,
      dashLength: 18
    }
  }[e] || { lightweight: !0, lineWidth: 1.4 };
}
function vu(e, t) {
  const n = [];
  for (const r of e?.features || []) {
    const o = r.geometry;
    if (!o) continue;
    const a = o.type === "LineString" ? [o.coordinates] : o.type === "MultiLineString" ? o.coordinates : [];
    for (const i of a)
      Array.isArray(i) && i.length >= t && n.push({
        coordinates: i,
        highway: r.properties?.highway || "road",
        properties: r.properties || {}
      });
  }
  return n;
}
function _u(e = {}) {
  return e.geoJson !== void 0 ? e.geoJson : e.url ?? xu;
}
function D0(e, t, n = {}) {
  let r = null, o = 0, a = 0, i = { ...za, ...n };
  function s(g) {
    n.onStatusChange?.(g), n.onRoadCountChange?.(o), e?.scene?.requestRender?.();
  }
  function l(g, p) {
    return t.Cartesian3.fromDegreesArrayHeights(
      g.flatMap(([x, S]) => [x, S, p])
    );
  }
  function c(g, p = i) {
    if (!r) return;
    const { coordinates: x, highway: S } = g, T = t.Cartesian3.fromDegreesArray(
      x.flatMap(([A, _]) => [A, _])
    ), M = wu(S, x.length);
    if (M.lightweight) {
      r.entities.add({
        polyline: {
          positions: l(x, Number(p.roadHeight)),
          width: M.lineWidth,
          material: t.Color.fromCssColorString("#59616a").withAlpha(0.58)
        }
      });
      return;
    }
    r.entities.add({
      corridor: {
        positions: T,
        width: M.baseWidth,
        height: Number(p.baseHeight),
        cornerType: t.CornerType.ROUNDED,
        material: t.Color.fromCssColorString("#07090d").withAlpha(0.96)
      }
    }), r.entities.add({
      corridor: {
        positions: T,
        width: M.shoulderWidth,
        height: Number(p.shoulderHeight),
        cornerType: t.CornerType.ROUNDED,
        material: t.Color.fromCssColorString(
          M.shoulderColor
        ).withAlpha(0.94)
      }
    }), r.entities.add({
      corridor: {
        positions: T,
        width: M.roadWidth,
        height: Number(p.roadHeight),
        cornerType: t.CornerType.ROUNDED,
        material: t.Color.fromCssColorString(M.roadColor).withAlpha(
          0.98
        )
      }
    }), M.edgeLine && r.entities.add({
      polyline: {
        positions: l(x, Number(p.edgeLineHeight)),
        width: M.edgeLineWidth,
        material: t.Color.fromCssColorString(
          M.edgeLineColor
        ).withAlpha(M.edgeLineAlpha)
      }
    }), M.centerLine && r.entities.add({
      polyline: {
        positions: l(x, Number(p.centerLineHeight)),
        width: M.centerLineWidth,
        material: new t.PolylineDashMaterialProperty({
          color: t.Color.fromCssColorString(
            M.centerLineColor
          ).withAlpha(M.centerLineAlpha),
          gapColor: t.Color.TRANSPARENT,
          dashLength: M.dashLength
        })
      }
    });
  }
  function d(g = !0) {
    a += 1, e && r && e.dataSources.remove(r, !0), r = null, o = 0, g && s("已清除道路图层。");
  }
  async function u(g) {
    if (typeof g != "string") return g;
    const p = await fetch(g);
    if (!p.ok)
      throw new Error(`道路数据请求失败：${p.status}`);
    return p.json();
  }
  async function f(g = _u(n), p = {}) {
    if (!e || !t || !g) return null;
    d(!1);
    const x = ++a;
    i = {
      ...za,
      ...n,
      ...p
    }, n.onError?.(null), s("正在读取道路 GeoJSON。");
    try {
      const S = await u(g);
      if (x !== a) return null;
      const T = Math.max(
        Math.round(Number(i.minPointCount) || 6),
        2
      ), M = vu(S, T);
      return r = new t.CustomDataSource(
        i.dataSourceName || "road-layer"
      ), e.dataSources.add(r), M.forEach((A) => c(A, i)), o = M.length, s(`已加载 ${o.toLocaleString()} 条道路。`), r;
    } catch (S) {
      return x !== a || (n.onError?.(S), s("道路图层加载失败。")), null;
    }
  }
  function h(g = {}) {
    if (!e || !t) return;
    const p = { ...bu, ...g }, x = Number(p.heading), S = Number(p.pitch), T = Number(p.roll);
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(p.lon ?? p.lng ?? p.longitude),
        Number(p.lat ?? p.latitude),
        Number(p.height ?? p.alt)
      ),
      orientation: {
        heading: t.Math.toRadians(Number.isFinite(x) ? x : 0),
        pitch: t.Math.toRadians(Number.isFinite(S) ? S : -62),
        roll: t.Math.toRadians(Number.isFinite(T) ? T : 0)
      }
    });
  }
  return {
    loadRoadLayer: f,
    clearRoadLayer: d,
    focusScene: h,
    getDataSource: () => r,
    getRoadCount: () => o,
    destroy: () => d(!1)
  };
}
function Mu(e, t, n = 30) {
  const r = Number.isFinite(n) ? Math.max(1, n) : 30, o = /* @__PURE__ */ new Map();
  let a = -1;
  function i(l, c) {
    const d = Math.floor(performance.now() / 250);
    d !== a && (o.clear(), a = d);
    const u = `${l},${c}`;
    let f = o.get(u);
    return f === void 0 && (f = t.scene?.globe?.getHeight(e.Cartographic.fromDegrees(l, c)), f = Number.isFinite(f) ? f : 0, o.set(u, f)), e.Cartesian3.fromDegrees(l, c, f + r);
  }
  function s(l) {
    const c = [];
    for (let d = 0; d < l.length; d += 2) {
      if (d > 0) {
        const u = e.Cartographic.fromDegrees(l[d - 2], l[d - 1]), f = e.Cartographic.fromDegrees(l[d], l[d + 1]);
        if (!e.Cartographic.equals(u, f)) {
          const h = new e.EllipsoidGeodesic(u, f), g = Math.min(512, Math.ceil(h.surfaceDistance / 500));
          for (let p = 1; p < g; p += 1) {
            const x = h.interpolateUsingFraction(p / g);
            c.push(i(e.Math.toDegrees(x.longitude), e.Math.toDegrees(x.latitude)));
          }
        }
      }
      c.push(i(l[d], l[d + 1]));
    }
    return c;
  }
  return { position: i, line: s };
}
var te = Math.PI, Nt = te * 2, fn = te / 180, Su = 180 / te, Pu = 1440, Eu = 398600.8, ie = 6378.135, we = 60 / Math.sqrt(ie * ie * ie / Eu), to = ie * we / 60, Tu = 1 / we, Re = 1082616e-9, ku = -253881e-11, Au = -165597e-11, Fe = ku / Re, xn = 2 / 3, Du = 1440 / (2 * te);
function Wu(e, t) {
  for (var n = [31, e % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], r = Math.floor(t), o = 1, a = 0; r > a + n[o - 1] && o < 12; )
    a += n[o - 1], o += 1;
  var i = o, s = r - a, l = (t - r) * 24, c = Math.floor(l);
  l = (l - c) * 60;
  var d = Math.floor(l), u = (l - d) * 60;
  return {
    mon: i,
    day: s,
    hr: c,
    minute: d,
    sec: u
  };
}
function Ga(e, t, n, r, o, a) {
  var i = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
  return 367 * e - Math.floor(7 * (e + Math.floor((t + 9) / 12)) * 0.25) + Math.floor(275 * t / 9) + n + 17210135e-1 + ((i / 6e4 + a / 60 + o) / 60 + r) / 24;
}
function No(e, t, n, r, o, a) {
  var i = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
  if (e instanceof Date) {
    var s = e;
    return Ga(
      s.getUTCFullYear(),
      s.getUTCMonth() + 1,
      // Note, this function requires months in range 1-12.
      s.getUTCDate(),
      s.getUTCHours(),
      s.getUTCMinutes(),
      s.getUTCSeconds(),
      s.getUTCMilliseconds()
    );
  }
  return Ga(e, t, n, r, o, a, i);
}
function Qi(e, t) {
  var n = e.e3, r = e.ee2, o = e.peo, a = e.pgho, i = e.pho, s = e.pinco, l = e.plo, c = e.se2, d = e.se3, u = e.sgh2, f = e.sgh3, h = e.sgh4, g = e.sh2, p = e.sh3, x = e.si2, S = e.si3, T = e.sl2, M = e.sl3, A = e.sl4, _ = e.t, k = e.xgh2, C = e.xgh3, P = e.xgh4, H = e.xh2, E = e.xh3, G = e.xi2, I = e.xi3, F = e.xl2, q = e.xl3, K = e.xl4, J = e.zmol, L = e.zmos, V = t.init, y = t.opsmode, W = t.ep, N = t.inclp, R = t.nodep, X = t.argpp, O = t.mp, $, U, Q, B, et, it, ut, Z, st, nt, rt, ct, w, b, v, D, z, j, tt, at, dt, gt = 119459e-10, yt = 0.01675, vt = 15835218e-11, bt = 0.0549;
  dt = L + gt * _, V === "y" && (dt = L), at = dt + 2 * yt * Math.sin(dt), z = Math.sin(at), nt = 0.5 * z * z - 0.25, rt = -0.5 * z * Math.cos(at);
  var Pt = c * nt + d * rt, At = x * nt + S * rt, m = T * nt + M * rt + A * z, ht = u * nt + f * rt + h * z, ft = g * nt + p * rt;
  dt = J + vt * _, V === "y" && (dt = J), at = dt + 2 * bt * Math.sin(dt), z = Math.sin(at), nt = 0.5 * z * z - 0.25, rt = -0.5 * z * Math.cos(at);
  var wt = r * nt + n * rt, xt = G * nt + I * rt, _t = F * nt + q * rt + K * z, St = k * nt + C * rt + P * z, Ot = H * nt + E * rt;
  return ct = Pt + wt, v = At + xt, D = m + _t, w = ht + St, b = ft + Ot, V === "n" && (ct -= o, v -= s, D -= l, w -= a, b -= i, N += v, W += ct, B = Math.sin(N), Q = Math.cos(N), N >= 0.2 ? (b /= B, w -= Q * b, X += w, R += b, O += D) : (it = Math.sin(R), et = Math.cos(R), $ = B * it, U = B * et, ut = b * et + v * Q * it, Z = -b * it + v * Q * et, $ += ut, U += Z, R %= Nt, R < 0 && y === "a" && (R += Nt), j = O + X + Q * R, st = D + w - v * R * B, j += st, tt = R, R = Math.atan2($, U), R < 0 && y === "a" && (R += Nt), Math.abs(tt - R) > te && (R < tt ? R += Nt : R -= Nt), O += D, X = j - O - Q * R)), {
    ep: W,
    inclp: N,
    nodep: R,
    argpp: X,
    mp: O
  };
}
function Cu(e) {
  var t = e.epoch, n = e.ep, r = e.argpp, o = e.tc, a = e.inclp, i = e.nodep, s = e.np, l, c, d, u, f, h, g, p, x, S, T, M, A, _, k, C, P, H, E, G, I, F, q, K, J, L, V, y, W, N, R, X, O, $, U, Q, B, et, it, ut, Z, st, nt, rt, ct, w, b, v, D, z, j, tt, at, dt, gt, yt, vt, bt, Pt, At, m, ht, ft, wt = 0.01675, xt = 0.0549, _t = 29864797e-13, St = 47968065e-14, Ot = 0.39785416, Vt = 0.91744867, It = 0.1945905, le = -0.98088458, Yt = s, Jt = n, ee = Math.sin(i), re = Math.cos(i), Bt = Math.sin(r), Y = Math.cos(r), lt = Math.sin(a), pt = Math.cos(a), ot = Jt * Jt, Et = 1 - ot, Dt = Math.sqrt(Et), Ct = 0, Mt = 0, ce = 0, fe = 0, Wt = 0, kt = t + 18261.5 + o / 1440, qt = (4.523602 - 92422029e-11 * kt) % Nt, zt = Math.sin(qt), ne = Math.cos(qt), _e = 0.91375164 - 0.03568096 * ne, Be = Math.sqrt(1 - _e * _e), Qt = 0.089683511 * zt / Be, Xt = Math.sqrt(1 - Qt * Qt), Gt = 5.8351514 + 1944368e-9 * kt, Ce = 0.39785416 * zt / Be, br = Xt * ne + 0.91744867 * Qt * zt;
  Ce = Math.atan2(Ce, br), Ce += Gt - qt;
  var wr = Math.cos(Ce), vr = Math.sin(Ce);
  G = It, I = le, K = Vt, J = Ot, F = re, q = ee, T = _t;
  for (var _r = 1 / Yt, tn = 0; tn < 2; )
    tn += 1, l = G * F + I * K * q, d = -I * F + G * K * q, g = -G * q + I * K * F, p = I * J, x = I * q + G * K * F, S = G * J, c = pt * g + lt * p, u = pt * x + lt * S, f = -lt * g + pt * p, h = -lt * x + pt * S, M = l * Y + c * Bt, A = d * Y + u * Bt, _ = -l * Bt + c * Y, k = -d * Bt + u * Y, C = f * Bt, P = h * Bt, H = f * Y, E = h * Y, m = 12 * M * M - 3 * _ * _, ht = 24 * M * A - 6 * _ * k, ft = 12 * A * A - 3 * k * k, tt = 3 * (l * l + c * c) + m * ot, at = 6 * (l * d + c * u) + ht * ot, dt = 3 * (d * d + u * u) + ft * ot, gt = -6 * l * f + ot * (-24 * M * H - 6 * _ * C), yt = -6 * (l * h + d * f) + ot * (-24 * (A * H + M * E) + -6 * (_ * P + k * C)), vt = -6 * d * h + ot * (-24 * A * E - 6 * k * P), bt = 6 * c * f + ot * (24 * M * C - 6 * _ * H), Pt = 6 * (u * f + c * h) + ot * (24 * (A * C + M * P) - 6 * (k * H + _ * E)), At = 6 * u * h + ot * (24 * A * P - 6 * k * E), tt = tt + tt + Et * m, at = at + at + Et * ht, dt = dt + dt + Et * ft, b = T * _r, w = -0.5 * b / Dt, v = b * Dt, ct = -15 * Jt * v, D = M * _ + A * k, z = A * _ + M * k, j = A * k - M * _, tn === 1 && (L = ct, V = w, y = b, W = v, N = D, R = z, X = j, O = tt, $ = at, U = dt, Q = gt, B = yt, et = vt, it = bt, ut = Pt, Z = At, st = m, nt = ht, rt = ft, G = wr, I = vr, K = _e, J = Be, F = Xt * re + Qt * ee, q = ee * Xt - re * Qt, T = St);
  var en = (4.7199672 + (0.2299715 * kt - Gt)) % Nt, Mr = (6.2565837 + 0.017201977 * kt) % Nt, Sr = 2 * L * R, Ne = 2 * L * X, Le = 2 * V * B, Pr = 2 * V * (et - Q), Er = -2 * y * $, Tr = -2 * y * (U - O), kr = -2 * y * (-21 - 9 * ot) * wt, qe = 2 * W * nt, Ar = 2 * W * (rt - st), Dr = -18 * W * wt, nn = -2 * V * ut, Pn = -2 * V * (Z - it), rn = 2 * ct * z, Wr = 2 * ct * j, Cr = 2 * w * yt, As = 2 * w * (vt - gt), Ds = -2 * b * at, Ws = -2 * b * (dt - tt), Cs = -2 * b * (-21 - 9 * ot) * xt, Ns = 2 * v * ht, Ls = 2 * v * (ft - m), Is = -18 * v * xt, Rs = -2 * w * Pt, Fs = -2 * w * (At - bt);
  return {
    snodm: ee,
    cnodm: re,
    sinim: lt,
    cosim: pt,
    sinomm: Bt,
    cosomm: Y,
    day: kt,
    e3: Wr,
    ee2: rn,
    em: Jt,
    emsq: ot,
    gam: Gt,
    peo: Ct,
    pgho: fe,
    pho: Wt,
    pinco: Mt,
    plo: ce,
    rtemsq: Dt,
    se2: Sr,
    se3: Ne,
    sgh2: qe,
    sgh3: Ar,
    sgh4: Dr,
    sh2: nn,
    sh3: Pn,
    si2: Le,
    si3: Pr,
    sl2: Er,
    sl3: Tr,
    sl4: kr,
    s1: ct,
    s2: w,
    s3: b,
    s4: v,
    s5: D,
    s6: z,
    s7: j,
    ss1: L,
    ss2: V,
    ss3: y,
    ss4: W,
    ss5: N,
    ss6: R,
    ss7: X,
    sz1: O,
    sz2: $,
    sz3: U,
    sz11: Q,
    sz12: B,
    sz13: et,
    sz21: it,
    sz22: ut,
    sz23: Z,
    sz31: st,
    sz32: nt,
    sz33: rt,
    xgh2: Ns,
    xgh3: Ls,
    xgh4: Is,
    xh2: Rs,
    xh3: Fs,
    xi2: Cr,
    xi3: As,
    xl2: Ds,
    xl3: Ws,
    xl4: Cs,
    nm: Yt,
    z1: tt,
    z2: at,
    z3: dt,
    z11: gt,
    z12: yt,
    z13: vt,
    z21: bt,
    z22: Pt,
    z23: At,
    z31: m,
    z32: ht,
    z33: ft,
    zmol: en,
    zmos: Mr
  };
}
function Nu(e) {
  var t = e.cosim, n = e.argpo, r = e.s1, o = e.s2, a = e.s3, i = e.s4, s = e.s5, l = e.sinim, c = e.ss1, d = e.ss2, u = e.ss3, f = e.ss4, h = e.ss5, g = e.sz1, p = e.sz3, x = e.sz11, S = e.sz13, T = e.sz21, M = e.sz23, A = e.sz31, _ = e.sz33, k = e.t, C = e.tc, P = e.gsto, H = e.mo, E = e.mdot, G = e.no, I = e.nodeo, F = e.nodedot, q = e.xpidot, K = e.z1, J = e.z3, L = e.z11, V = e.z13, y = e.z21, W = e.z23, N = e.z31, R = e.z33, X = e.ecco, O = e.eccsq, $ = e.emsq, U = e.em, Q = e.argpm, B = e.inclm, et = e.mm, it = e.nm, ut = e.nodem, Z = e.irez, st = e.atime, nt = e.d2201, rt = e.d2211, ct = e.d3210, w = e.d3222, b = e.d4410, v = e.d4422, D = e.d5220, z = e.d5232, j = e.d5421, tt = e.d5433, at = e.dedt, dt = e.didt, gt = e.dmdt, yt = e.dnodt, vt = e.domdt, bt = e.del1, Pt = e.del2, At = e.del3, m = e.xfact, ht = e.xlamo, ft = e.xli, wt = e.xni, xt, _t, St, Ot, Vt, It, le, Yt, Jt, ee, re, Bt, Y, lt, pt, ot, Et, Dt, Ct, Mt, ce, fe, Wt, kt, qt, zt, ne, _e, Be, Qt, Xt, Gt, Ce = 17891679e-13, br = 21460748e-13, wr = 22123015e-14, vr = 17891679e-13, _r = 73636953e-16, tn = 21765803e-16, en = 0.0043752690880113, Mr = 37393792e-14, Sr = 11428639e-14, Ne = 15835218e-11, Le = 119459e-10;
  Z = 0, it < 0.0052359877 && it > 0.0034906585 && (Z = 1), it >= 826e-5 && it <= 924e-5 && U >= 0.5 && (Z = 2);
  var Pr = c * Le * h, Er = d * Le * (x + S), Tr = -Le * u * (g + p - 14 - 6 * $), kr = f * Le * (A + _ - 6), qe = -Le * d * (T + M);
  (B < 0.052359877 || B > te - 0.052359877) && (qe = 0), l !== 0 && (qe /= l);
  var Ar = kr - t * qe;
  at = Pr + r * Ne * s, dt = Er + o * Ne * (L + V), gt = Tr - Ne * a * (K + J - 14 - 6 * $);
  var Dr = i * Ne * (N + R - 6), nn = -Ne * o * (y + W);
  (B < 0.052359877 || B > te - 0.052359877) && (nn = 0), vt = Ar + Dr, yt = qe, l !== 0 && (vt -= t / l * nn, yt += nn / l);
  var Pn = 0, rn = (P + C * en) % Nt;
  if (U += at * k, B += dt * k, Q += vt * k, ut += yt * k, et += gt * k, Z !== 0) {
    if (Qt = Math.pow(it / we, xn), Z === 2) {
      Xt = t * t;
      var Wr = U;
      U = X;
      var Cr = $;
      $ = O, Gt = U * $, lt = -0.306 - (U - 0.64) * 0.44, U <= 0.65 ? (pt = 3.616 - 13.247 * U + 16.29 * $, Et = -19.302 + 117.39 * U - 228.419 * $ + 156.591 * Gt, Dt = -18.9068 + 109.7927 * U - 214.6334 * $ + 146.5816 * Gt, Ct = -41.122 + 242.694 * U - 471.094 * $ + 313.953 * Gt, Mt = -146.407 + 841.88 * U - 1629.014 * $ + 1083.435 * Gt, ce = -532.114 + 3017.977 * U - 5740.032 * $ + 3708.276 * Gt) : (pt = -72.099 + 331.819 * U - 508.738 * $ + 266.724 * Gt, Et = -346.844 + 1582.851 * U - 2415.925 * $ + 1246.113 * Gt, Dt = -342.585 + 1554.908 * U - 2366.899 * $ + 1215.972 * Gt, Ct = -1052.797 + 4758.686 * U - 7193.992 * $ + 3651.957 * Gt, Mt = -3581.69 + 16178.11 * U - 24462.77 * $ + 12422.52 * Gt, U > 0.715 ? ce = -5149.66 + 29936.92 * U - 54087.36 * $ + 31324.56 * Gt : ce = 1464.74 - 4664.75 * U + 3763.64 * $), U < 0.7 ? (kt = -919.2277 + 4988.61 * U - 9064.77 * $ + 5542.21 * Gt, fe = -822.71072 + 4568.6173 * U - 8491.4146 * $ + 5337.524 * Gt, Wt = -853.666 + 4690.25 * U - 8624.77 * $ + 5341.4 * Gt) : (kt = -37995.78 + 161616.52 * U - 229838.2 * $ + 109377.94 * Gt, fe = -51752.104 + 218913.95 * U - 309468.16 * $ + 146349.42 * Gt, Wt = -40023.88 + 170470.89 * U - 242699.48 * $ + 115605.82 * Gt), qt = l * l, xt = 0.75 * (1 + 2 * t + Xt), _t = 1.5 * qt, Ot = 1.875 * l * (1 - 2 * t - 3 * Xt), Vt = -1.875 * l * (1 + 2 * t - 3 * Xt), le = 35 * qt * xt, Yt = 39.375 * qt * qt, Jt = 9.84375 * l * (qt * (1 - 2 * t - 5 * Xt) + 0.33333333 * (-2 + 4 * t + 6 * Xt)), ee = l * (4.92187512 * qt * (-2 - 4 * t + 10 * Xt) + 6.56250012 * (1 + 2 * t - 3 * Xt)), re = 29.53125 * l * (2 - 8 * t + Xt * (-12 + 8 * t + 10 * Xt)), Bt = 29.53125 * l * (-2 - 8 * t + Xt * (12 + 8 * t - 10 * Xt)), _e = it * it, Be = Qt * Qt, ne = 3 * _e * Be, zt = ne * vr, nt = zt * xt * lt, rt = zt * _t * pt, ne *= Qt, zt = ne * Mr, ct = zt * Ot * Et, w = zt * Vt * Dt, ne *= Qt, zt = 2 * ne * _r, b = zt * le * Ct, v = zt * Yt * Mt, ne *= Qt, zt = ne * Sr, D = zt * Jt * ce, z = zt * ee * Wt, zt = 2 * ne * tn, j = zt * re * fe, tt = zt * Bt * kt, ht = (H + I + I - (rn + rn)) % Nt, m = E + gt + 2 * (F + yt - en) - G, U = Wr, $ = Cr;
    }
    Z === 1 && (Y = 1 + $ * (-2.5 + 0.8125 * $), Et = 1 + 2 * $, ot = 1 + $ * (-6 + 6.60937 * $), xt = 0.75 * (1 + t) * (1 + t), St = 0.9375 * l * l * (1 + 3 * t) - 0.75 * (1 + t), It = 1 + t, It *= 1.875 * It * It, bt = 3 * it * it * Qt * Qt, Pt = 2 * bt * xt * Y * Ce, At = 3 * bt * It * ot * wr * Qt, bt = bt * St * Et * br * Qt, ht = (H + I + n - rn) % Nt, m = E + q + gt + vt + yt - (G + en)), ft = ht, wt = G, st = 0, it = G + Pn;
  }
  return {
    em: U,
    argpm: Q,
    inclm: B,
    mm: et,
    nm: it,
    nodem: ut,
    irez: Z,
    atime: st,
    d2201: nt,
    d2211: rt,
    d3210: ct,
    d3222: w,
    d4410: b,
    d4422: v,
    d5220: D,
    d5232: z,
    d5421: j,
    d5433: tt,
    dedt: at,
    didt: dt,
    dmdt: gt,
    dndt: Pn,
    dnodt: yt,
    domdt: vt,
    del1: bt,
    del2: Pt,
    del3: At,
    xfact: m,
    xlamo: ht,
    xli: ft,
    xni: wt
  };
}
function Oa(e) {
  var t = (e - 2451545) / 36525, n = -62e-7 * t * t * t + 0.093104 * t * t + (876600 * 3600 + 8640184812866e-6) * t + 67310.54841;
  return n = n * fn / 240 % Nt, n < 0 && (n += Nt), n;
}
function Lo(e, t, n, r, o, a, i) {
  return e instanceof Date ? Oa(No(e)) : Oa(e);
}
function Lu(e) {
  var t = e.ecco, n = e.epoch, r = e.inclo, o = e.opsmode, a = e.no, i = t * t, s = 1 - i, l = Math.sqrt(s), c = Math.cos(r), d = c * c, u = Math.pow(we / a, xn), f = 0.75 * Re * (3 * d - 1) / (l * s), h = f / (u * u), g = u * (1 - h * h - h * (1 / 3 + 134 * h * h / 81));
  h = f / (g * g), a /= 1 + h;
  var p = Math.pow(we / a, xn), x = Math.sin(r), S = p * s, T = 1 - 5 * d, M = -T - d - d, A = 1 / p, _ = S * S, k = p * (1 - t), C = "n", P;
  if (o === "a") {
    var H = n - 7305, E = Math.floor(H + 1e-8), G = H - E, I = 0.017202791694070362, F = 1.7321343856509375, q = 5075514194322695e-30, K = I + Nt;
    P = (F + I * E + K * G + H * H * q) % Nt, P < 0 && (P += Nt);
  } else
    P = Lo(n + 24332815e-1);
  return {
    no: a,
    method: C,
    ainv: A,
    ao: p,
    con41: M,
    con42: T,
    cosio: c,
    cosio2: d,
    eccsq: i,
    omeosq: s,
    posq: _,
    rp: k,
    rteosq: l,
    sinio: x,
    gsto: P
  };
}
function Iu(e) {
  var t = e.irez, n = e.d2201, r = e.d2211, o = e.d3210, a = e.d3222, i = e.d4410, s = e.d4422, l = e.d5220, c = e.d5232, d = e.d5421, u = e.d5433, f = e.dedt, h = e.del1, g = e.del2, p = e.del3, x = e.didt, S = e.dmdt, T = e.dnodt, M = e.domdt, A = e.argpo, _ = e.argpdot, k = e.t, C = e.tc, P = e.gsto, H = e.xfact, E = e.xlamo, G = e.no, I = e.atime, F = e.em, q = e.argpm, K = e.inclm, J = e.xli, L = e.mm, V = e.xni, y = e.nodem, W = e.nm, N = 0.13130908, R = 2.8843198, X = 0.37448087, O = 5.7686396, $ = 0.95240898, U = 1.8014998, Q = 1.050833, B = 4.4108898, et = 0.0043752690880113, it = 720, ut = -720, Z = 259200, st, nt, rt, ct, w, b, v, D, z = 0, j = 0, tt = (P + C * et) % Nt;
  if (F += f * k, K += x * k, q += M * k, y += T * k, L += S * k, t !== 0) {
    (I === 0 || k * I <= 0 || Math.abs(k) < Math.abs(I)) && (I = 0, V = G, J = E), k > 0 ? st = it : st = ut;
    for (var at = 381; at === 381; )
      t !== 2 ? (v = h * Math.sin(J - N) + g * Math.sin(2 * (J - R)) + p * Math.sin(3 * (J - X)), w = V + H, b = h * Math.cos(J - N) + 2 * g * Math.cos(2 * (J - R)) + 3 * p * Math.cos(3 * (J - X)), b *= w) : (D = A + _ * I, rt = D + D, nt = J + J, v = n * Math.sin(rt + J - O) + r * Math.sin(J - O) + o * Math.sin(D + J - $) + a * Math.sin(-D + J - $) + i * Math.sin(rt + nt - U) + s * Math.sin(nt - U) + l * Math.sin(D + J - Q) + c * Math.sin(-D + J - Q) + d * Math.sin(D + nt - B) + u * Math.sin(-D + nt - B), w = V + H, b = n * Math.cos(rt + J - O) + r * Math.cos(J - O) + o * Math.cos(D + J - $) + a * Math.cos(-D + J - $) + l * Math.cos(D + J - Q) + c * Math.cos(-D + J - Q) + 2 * (i * Math.cos(rt + nt - U) + s * Math.cos(nt - U) + d * Math.cos(D + nt - B) + u * Math.cos(-D + nt - B)), b *= w), Math.abs(k - I) >= it ? at = 381 : (j = k - I, at = 0), at === 381 && (J += w * st + v * Z, V += v * st + b * Z, I += st);
    W = V + v * j + b * j * j * 0.5, ct = J + w * j + v * j * j * 0.5, t !== 1 ? (L = ct - 2 * y + 2 * tt, z = W - G) : (L = ct - y - q + tt, z = W - G), W = G + z;
  }
  return {
    atime: I,
    em: F,
    argpm: q,
    inclm: K,
    xli: J,
    mm: L,
    xni: V,
    nodem: y,
    dndt: z,
    nm: W
  };
}
var Ee;
(function(e) {
  e[e.None = 0] = "None", e[e.MeanEccentricityOutOfRange = 1] = "MeanEccentricityOutOfRange", e[e.MeanMotionBelowZero = 2] = "MeanMotionBelowZero", e[e.PerturbedEccentricityOutOfRange = 3] = "PerturbedEccentricityOutOfRange", e[e.SemiLatusRectumBelowZero = 4] = "SemiLatusRectumBelowZero", e[e.Decayed = 6] = "Decayed";
})(Ee || (Ee = {}));
function Xi(e, t) {
  var n, r, o, a, i, s, l, c, d, u, f, h, g, p, x, S, T, M, A, _, k, C, P, H, E, G, I, F = 15e-13;
  e.t = t, e.error = Ee.None;
  var q = e.mo + e.mdot * e.t, K = e.argpo + e.argpdot * e.t, J = e.nodeo + e.nodedot * e.t;
  d = K, k = q;
  var L = e.t * e.t;
  if (P = J + e.nodecf * L, T = 1 - e.cc1 * e.t, M = e.bstar * e.cc4 * e.t, A = e.t2cof * L, e.isimp !== 1) {
    l = e.omgcof * e.t;
    var V = 1 + e.eta * Math.cos(q);
    s = e.xmcof * (V * V * V - e.delmo), S = l + s, k = q + S, d = K - S, h = L * e.t, g = h * e.t, T = T - e.d2 * L - e.d3 * h - e.d4 * g, M += e.bstar * e.cc5 * (Math.sin(k) - e.sinmao), A = A + e.t3cof * h + g * (e.t4cof + e.t * e.t5cof);
  }
  C = e.no;
  var y = e.ecco;
  if (_ = e.inclo, e.method === "d") {
    p = e.t;
    var W = {
      irez: e.irez,
      d2201: e.d2201,
      d2211: e.d2211,
      d3210: e.d3210,
      d3222: e.d3222,
      d4410: e.d4410,
      d4422: e.d4422,
      d5220: e.d5220,
      d5232: e.d5232,
      d5421: e.d5421,
      d5433: e.d5433,
      dedt: e.dedt,
      del1: e.del1,
      del2: e.del2,
      del3: e.del3,
      didt: e.didt,
      dmdt: e.dmdt,
      dnodt: e.dnodt,
      domdt: e.domdt,
      argpo: e.argpo,
      argpdot: e.argpdot,
      t: e.t,
      tc: p,
      gsto: e.gsto,
      xfact: e.xfact,
      xlamo: e.xlamo,
      no: e.no,
      atime: e.atime,
      em: y,
      argpm: d,
      inclm: _,
      xli: e.xli,
      mm: k,
      xni: e.xni,
      nodem: P,
      nm: C
    }, N = Iu(W);
    y = N.em, d = N.argpm, _ = N.inclm, k = N.mm, P = N.nodem, C = N.nm;
  }
  if (C <= 0)
    return e.error = Ee.MeanMotionBelowZero, null;
  var R = Math.pow(we / C, xn) * T * T;
  if (C = we / Math.pow(R, 1.5), y -= M, y >= 1 || y < -1e-3)
    return e.error = Ee.MeanEccentricityOutOfRange, null;
  y < 1e-6 && (y = 1e-6), k += e.no * A, E = k + d + P, P %= Nt, d %= Nt, E %= Nt, k = (E - d - P) % Nt;
  var X = {
    am: R,
    em: y,
    im: _,
    Om: P,
    om: d,
    mm: k,
    nm: C
  }, O = Math.sin(_), $ = Math.cos(_), U = y;
  if (H = _, u = d, I = P, G = k, a = O, o = $, e.method === "d") {
    var Q = {
      inclo: e.inclo,
      init: "n",
      ep: U,
      inclp: H,
      nodep: I,
      argpp: u,
      mp: G,
      opsmode: e.operationmode
    }, B = Qi(e, Q);
    if (U = B.ep, I = B.nodep, u = B.argpp, G = B.mp, H = B.inclp, H < 0 && (H = -H, I += te, u -= te), U < 0 || U > 1)
      return e.error = Ee.PerturbedEccentricityOutOfRange, null;
  }
  e.method === "d" && (a = Math.sin(H), o = Math.cos(H), e.aycof = -0.5 * Fe * a, Math.abs(o + 1) > 15e-13 ? e.xlcof = -0.25 * Fe * a * (3 + 5 * o) / (1 + o) : e.xlcof = -0.25 * Fe * a * (3 + 5 * o) / F);
  var et = U * Math.cos(u);
  S = 1 / (R * (1 - U * U));
  var it = U * Math.sin(u) + S * e.aycof, ut = G + u + I + S * e.xlcof * et, Z = (ut - I) % Nt;
  c = Z, x = 9999.9;
  for (var st = 1; Math.abs(x) >= 1e-12 && st <= 10; )
    r = Math.sin(c), n = Math.cos(c), x = 1 - n * et - r * it, x = (Z - it * n + et * r - c) / x, Math.abs(x) >= 0.95 && (x > 0 ? x = 0.95 : x = -0.95), c += x, st += 1;
  var nt = et * n + it * r, rt = et * r - it * n, ct = et * et + it * it, w = R * (1 - ct);
  if (w < 0)
    return e.error = Ee.SemiLatusRectumBelowZero, null;
  var b = R * (1 - nt), v = Math.sqrt(R) * rt / b, D = Math.sqrt(w) / b, z = Math.sqrt(1 - ct);
  S = rt / (1 + z);
  var j = R / b * (r - it - et * S), tt = R / b * (n - et + it * S);
  f = Math.atan2(j, tt);
  var at = (tt + tt) * j, dt = 1 - 2 * j * j;
  S = 1 / w;
  var gt = 0.5 * Re * S, yt = gt * S;
  e.method === "d" && (i = o * o, e.con41 = 3 * i - 1, e.x1mth2 = 1 - i, e.x7thm1 = 7 * i - 1);
  var vt = b * (1 - 1.5 * yt * z * e.con41) + 0.5 * gt * e.x1mth2 * dt;
  if (vt < 1)
    return e.error = Ee.Decayed, null;
  f -= 0.25 * yt * e.x7thm1 * at;
  var bt = I + 1.5 * yt * o * at, Pt = H + 1.5 * yt * o * a * dt, At = v - C * gt * e.x1mth2 * at / we, m = D + C * gt * (e.x1mth2 * dt + 1.5 * e.con41) / we, ht = Math.sin(f), ft = Math.cos(f), wt = Math.sin(bt), xt = Math.cos(bt), _t = Math.sin(Pt), St = Math.cos(Pt), Ot = -wt * St, Vt = xt * St, It = Ot * ht + xt * ft, le = Vt * ht + wt * ft, Yt = _t * ht, Jt = Ot * ft - xt * ht, ee = Vt * ft - wt * ht, re = _t * ft, Bt = {
    x: vt * It * ie,
    y: vt * le * ie,
    z: vt * Yt * ie
  }, Y = {
    x: (At * It + m * Jt) * to,
    y: (At * le + m * ee) * to,
    z: (At * Yt + m * re) * to
  };
  return {
    position: Bt,
    velocity: Y,
    meanElements: X
  };
}
function Ru(e, t) {
  var n = t.opsmode, r = t.epoch, o = t.xbstar, a = t.xecco, i = t.xargpo, s = t.xinclo, l = t.xmo, c = t.xno, d = t.xnodeo, u, f, h, g, p, x, S, T, M, A, _, k, C, P, H, E, G, I, F, q, K, J, L, V, y, W, N, R, X, O, $, U, Q, B, et, it, ut, Z, st, nt, rt, ct, w, b, v, D, z, j, tt, at, dt, gt, yt, vt, bt, Pt, At = 15e-13, m = e;
  m.isimp = 0, m.method = "n", m.aycof = 0, m.con41 = 0, m.cc1 = 0, m.cc4 = 0, m.cc5 = 0, m.d2 = 0, m.d3 = 0, m.d4 = 0, m.delmo = 0, m.eta = 0, m.argpdot = 0, m.omgcof = 0, m.sinmao = 0, m.t = 0, m.t2cof = 0, m.t3cof = 0, m.t4cof = 0, m.t5cof = 0, m.x1mth2 = 0, m.x7thm1 = 0, m.mdot = 0, m.nodedot = 0, m.xlcof = 0, m.xmcof = 0, m.nodecf = 0, m.irez = 0, m.d2201 = 0, m.d2211 = 0, m.d3210 = 0, m.d3222 = 0, m.d4410 = 0, m.d4422 = 0, m.d5220 = 0, m.d5232 = 0, m.d5421 = 0, m.d5433 = 0, m.dedt = 0, m.del1 = 0, m.del2 = 0, m.del3 = 0, m.didt = 0, m.dmdt = 0, m.dnodt = 0, m.domdt = 0, m.e3 = 0, m.ee2 = 0, m.peo = 0, m.pgho = 0, m.pho = 0, m.pinco = 0, m.plo = 0, m.se2 = 0, m.se3 = 0, m.sgh2 = 0, m.sgh3 = 0, m.sgh4 = 0, m.sh2 = 0, m.sh3 = 0, m.si2 = 0, m.si3 = 0, m.sl2 = 0, m.sl3 = 0, m.sl4 = 0, m.gsto = 0, m.xfact = 0, m.xgh2 = 0, m.xgh3 = 0, m.xgh4 = 0, m.xh2 = 0, m.xh3 = 0, m.xi2 = 0, m.xi3 = 0, m.xl2 = 0, m.xl3 = 0, m.xl4 = 0, m.xlamo = 0, m.zmol = 0, m.zmos = 0, m.atime = 0, m.xli = 0, m.xni = 0, m.bstar = o, m.ecco = a, m.argpo = i, m.inclo = s, m.mo = l, m.no = c, m.nodeo = d, m.operationmode = n;
  var ht = 78 / ie + 1, ft = 42 / ie, wt = ft * ft * ft * ft;
  m.init = "y", m.t = 0;
  var xt = {
    ecco: m.ecco,
    epoch: r,
    inclo: m.inclo,
    no: m.no,
    method: m.method,
    opsmode: m.operationmode
  }, _t = Lu(xt), St = _t.ao, Ot = _t.con42, Vt = _t.cosio, It = _t.cosio2, le = _t.eccsq, Yt = _t.omeosq, Jt = _t.posq, ee = _t.rp, re = _t.rteosq, Bt = _t.sinio;
  if (m.no = _t.no, m.con41 = _t.con41, m.gsto = _t.gsto, m.a = Math.pow(m.no * Tu, -2 / 3), m.alta = m.a * (1 + m.ecco) - 1, m.altp = m.a * (1 - m.ecco) - 1, m.error = 0, Yt >= 0 || m.no >= 0) {
    if (m.isimp = 0, ee < 220 / ie + 1 && (m.isimp = 1), N = ht, K = wt, I = (ee - 1) * ie, I < 156) {
      N = I - 78, I < 98 && (N = 20);
      var Y = (120 - N) / ie;
      K = Y * Y * Y * Y, N = N / ie + 1;
    }
    F = 1 / Jt, D = 1 / (St - N), m.eta = St * m.ecco * D, k = m.eta * m.eta, _ = m.ecco * m.eta, q = Math.abs(1 - k), x = K * Math.pow(D, 4), S = x / Math.pow(q, 3.5), g = S * m.no * (St * (1 + 1.5 * k + _ * (4 + k)) + 0.375 * Re * D / q * m.con41 * (8 + 3 * k * (8 + k))), m.cc1 = m.bstar * g, p = 0, m.ecco > 1e-4 && (p = -2 * x * D * Fe * m.no * Bt / m.ecco), m.x1mth2 = 1 - It, m.cc4 = 2 * m.no * S * St * Yt * (m.eta * (2 + 0.5 * k) + m.ecco * (0.5 + 2 * k) - Re * D / (St * q) * (-3 * m.con41 * (1 - 2 * _ + k * (1.5 - 0.5 * _)) + 0.75 * m.x1mth2 * (2 * k - _ * (1 + k)) * Math.cos(2 * m.argpo))), m.cc5 = 2 * S * St * Yt * (1 + 2.75 * (k + _) + _ * k), T = It * It, w = 1.5 * Re * F * m.no, b = 0.5 * w * Re * F, v = -0.46875 * Au * F * F * m.no, m.mdot = m.no + 0.5 * w * re * m.con41 + 0.0625 * b * re * (13 - 78 * It + 137 * T), m.argpdot = -0.5 * w * Ot + 0.0625 * b * (7 - 114 * It + 395 * T) + v * (3 - 36 * It + 49 * T), j = -w * Vt, m.nodedot = j + (0.5 * b * (4 - 19 * It) + 2 * v * (3 - 7 * It)) * Vt, z = m.argpdot + m.nodedot, m.omgcof = m.bstar * p * Math.cos(m.argpo), m.xmcof = 0, m.ecco > 1e-4 && (m.xmcof = -xn * x * m.bstar / _), m.nodecf = 3.5 * Yt * j * m.cc1, m.t2cof = 1.5 * m.cc1, Math.abs(Vt + 1) > 15e-13 ? m.xlcof = -0.25 * Fe * Bt * (3 + 5 * Vt) / (1 + Vt) : m.xlcof = -0.25 * Fe * Bt * (3 + 5 * Vt) / At, m.aycof = -0.5 * Fe * Bt;
    var lt = 1 + m.eta * Math.cos(m.mo);
    if (m.delmo = lt * lt * lt, m.sinmao = Math.sin(m.mo), m.x7thm1 = 7 * It - 1, 2 * te / m.no >= 225) {
      m.method = "d", m.isimp = 1, rt = 0, H = m.inclo;
      var pt = {
        epoch: r,
        ep: m.ecco,
        argpp: m.argpo,
        tc: rt,
        inclp: m.inclo,
        nodep: m.nodeo,
        np: m.no,
        e3: m.e3,
        ee2: m.ee2,
        peo: m.peo,
        pgho: m.pgho,
        pho: m.pho,
        pinco: m.pinco,
        plo: m.plo,
        se2: m.se2,
        se3: m.se3,
        sgh2: m.sgh2,
        sgh3: m.sgh3,
        sgh4: m.sgh4,
        sh2: m.sh2,
        sh3: m.sh3,
        si2: m.si2,
        si3: m.si3,
        sl2: m.sl2,
        sl3: m.sl3,
        sl4: m.sl4,
        xgh2: m.xgh2,
        xgh3: m.xgh3,
        xgh4: m.xgh4,
        xh2: m.xh2,
        xh3: m.xh3,
        xi2: m.xi2,
        xi3: m.xi3,
        xl2: m.xl2,
        xl3: m.xl3,
        xl4: m.xl4,
        zmol: m.zmol,
        zmos: m.zmos
      }, ot = Cu(pt);
      m.e3 = ot.e3, m.ee2 = ot.ee2, m.peo = ot.peo, m.pgho = ot.pgho, m.pho = ot.pho, m.pinco = ot.pinco, m.plo = ot.plo, m.se2 = ot.se2, m.se3 = ot.se3, m.sgh2 = ot.sgh2, m.sgh3 = ot.sgh3, m.sgh4 = ot.sgh4, m.sh2 = ot.sh2, m.sh3 = ot.sh3, m.si2 = ot.si2, m.si3 = ot.si3, m.sl2 = ot.sl2, m.sl3 = ot.sl3, m.sl4 = ot.sl4, f = ot.sinim, u = ot.cosim, M = ot.em, A = ot.emsq, J = ot.s1, L = ot.s2, V = ot.s3, y = ot.s4, W = ot.s5, R = ot.ss1, X = ot.ss2, O = ot.ss3, $ = ot.ss4, U = ot.ss5, Q = ot.sz1, B = ot.sz3, et = ot.sz11, it = ot.sz13, ut = ot.sz21, Z = ot.sz23, st = ot.sz31, nt = ot.sz33, m.xgh2 = ot.xgh2, m.xgh3 = ot.xgh3, m.xgh4 = ot.xgh4, m.xh2 = ot.xh2, m.xh3 = ot.xh3, m.xi2 = ot.xi2, m.xi3 = ot.xi3, m.xl2 = ot.xl2, m.xl3 = ot.xl3, m.xl4 = ot.xl4, m.zmol = ot.zmol, m.zmos = ot.zmos, G = ot.nm, tt = ot.z1, at = ot.z3, dt = ot.z11, gt = ot.z13, yt = ot.z21, vt = ot.z23, bt = ot.z31, Pt = ot.z33;
      var Et = {
        inclo: H,
        init: m.init,
        ep: m.ecco,
        inclp: m.inclo,
        nodep: m.nodeo,
        argpp: m.argpo,
        mp: m.mo,
        opsmode: m.operationmode
      }, Dt = Qi(m, Et);
      m.ecco = Dt.ep, m.inclo = Dt.inclp, m.nodeo = Dt.nodep, m.argpo = Dt.argpp, m.mo = Dt.mp, C = 0, P = 0, E = 0;
      var Ct = {
        cosim: u,
        emsq: A,
        argpo: m.argpo,
        s1: J,
        s2: L,
        s3: V,
        s4: y,
        s5: W,
        sinim: f,
        ss1: R,
        ss2: X,
        ss3: O,
        ss4: $,
        ss5: U,
        sz1: Q,
        sz3: B,
        sz11: et,
        sz13: it,
        sz21: ut,
        sz23: Z,
        sz31: st,
        sz33: nt,
        t: m.t,
        tc: rt,
        gsto: m.gsto,
        mo: m.mo,
        mdot: m.mdot,
        no: m.no,
        nodeo: m.nodeo,
        nodedot: m.nodedot,
        xpidot: z,
        z1: tt,
        z3: at,
        z11: dt,
        z13: gt,
        z21: yt,
        z23: vt,
        z31: bt,
        z33: Pt,
        ecco: m.ecco,
        eccsq: le,
        em: M,
        argpm: C,
        inclm: H,
        mm: E,
        nm: G,
        nodem: P,
        irez: m.irez,
        atime: m.atime,
        d2201: m.d2201,
        d2211: m.d2211,
        d3210: m.d3210,
        d3222: m.d3222,
        d4410: m.d4410,
        d4422: m.d4422,
        d5220: m.d5220,
        d5232: m.d5232,
        d5421: m.d5421,
        d5433: m.d5433,
        dedt: m.dedt,
        didt: m.didt,
        dmdt: m.dmdt,
        dnodt: m.dnodt,
        domdt: m.domdt,
        del1: m.del1,
        del2: m.del2,
        del3: m.del3,
        xfact: m.xfact,
        xlamo: m.xlamo,
        xli: m.xli,
        xni: m.xni
      }, Mt = Nu(Ct);
      m.irez = Mt.irez, m.atime = Mt.atime, m.d2201 = Mt.d2201, m.d2211 = Mt.d2211, m.d3210 = Mt.d3210, m.d3222 = Mt.d3222, m.d4410 = Mt.d4410, m.d4422 = Mt.d4422, m.d5220 = Mt.d5220, m.d5232 = Mt.d5232, m.d5421 = Mt.d5421, m.d5433 = Mt.d5433, m.dedt = Mt.dedt, m.didt = Mt.didt, m.dmdt = Mt.dmdt, m.dnodt = Mt.dnodt, m.domdt = Mt.domdt, m.del1 = Mt.del1, m.del2 = Mt.del2, m.del3 = Mt.del3, m.xfact = Mt.xfact, m.xlamo = Mt.xlamo, m.xli = Mt.xli, m.xni = Mt.xni;
    }
    m.isimp !== 1 && (h = m.cc1 * m.cc1, m.d2 = 4 * St * D * h, ct = m.d2 * D * m.cc1 / 3, m.d3 = (17 * St + N) * ct, m.d4 = 0.5 * ct * St * D * (221 * St + 31 * N) * m.cc1, m.t3cof = m.d2 + 2 * h, m.t4cof = 0.25 * (3 * m.d3 + m.cc1 * (12 * m.d2 + 10 * h)), m.t5cof = 0.2 * (3 * m.d4 + 12 * m.cc1 * m.d3 + 6 * m.d2 * m.d2 + 15 * h * (2 * m.d2 + h)));
  }
  Xi(m, 0), m.init = "n";
}
function Zi(e, t) {
  var n = "i", r = 0, o = e.substring(2, 7), a = parseInt(e.substring(18, 20), 10), i = parseFloat(e.substring(20, 32)), s = parseFloat(e.substring(33, 43)), l = parseFloat("".concat(e.substring(44, 45), ".").concat(e.substring(45, 50), "E").concat(e.substring(50, 52))), c = parseFloat("".concat(e.substring(53, 54), ".").concat(e.substring(54, 59), "E").concat(e.substring(59, 61))), d = parseFloat(t.substring(8, 16)) * fn, u = parseFloat(t.substring(17, 25)) * fn, f = parseFloat(".".concat(t.substring(26, 33))), h = parseFloat(t.substring(34, 42)) * fn, g = parseFloat(t.substring(43, 51)) * fn, p = parseFloat(t.substring(52, 63)) / Du, x = a < 57 ? a + 2e3 : a + 1900, S = Wu(x, i), T = S.mon, M = S.day, A = S.hr, _ = S.minute, k = S.sec, C = No(x, T, M, A, _, k), P = {
    error: r,
    satnum: o,
    epochyr: a,
    epochdays: i,
    ndot: s,
    nddot: l,
    bstar: c,
    inclo: d,
    nodeo: u,
    ecco: f,
    argpo: h,
    mo: g,
    no: p,
    jdsatepoch: C
  };
  return Ru(P, {
    opsmode: n,
    satn: P.satnum,
    epoch: P.jdsatepoch - 24332815e-1,
    xbstar: P.bstar,
    xecco: P.ecco,
    xargpo: P.argpo,
    xinclo: P.inclo,
    xmo: P.mo,
    xno: P.no,
    xnodeo: P.nodeo
  }), P;
}
function Fu(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = No.apply(void 0, n), a = (o - e.jdsatepoch) * Pu;
  return Xi(e, a);
}
function ts(e) {
  return e * Su;
}
function zu(e) {
  if (e < -te / 2 || e > te / 2)
    throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");
  return ts(e);
}
function Gu(e) {
  if (e < -te || e > te)
    throw new RangeError("Longitude radians must be in range [-pi; pi].");
  return ts(e);
}
function Ou(e, t) {
  for (var n = 6378.137, r = 6356.7523142, o = Math.sqrt(e.x * e.x + e.y * e.y), a = (n - r) / n, i = 2 * a - a * a, s = Math.atan2(e.y, e.x) - t; s < -te; )
    s += Nt;
  for (; s > te; )
    s -= Nt;
  for (var l = 20, c = 0, d = Math.atan2(e.z, Math.sqrt(e.x * e.x + e.y * e.y)), u; c++ < l; )
    u = 1 / Math.sqrt(1 - i * (Math.sin(d) * Math.sin(d))), d = Math.atan2(e.z + n * u * i * Math.sin(d), o);
  var f = o / Math.cos(d) - n * u;
  return {
    longitude: s,
    latitude: d,
    height: f
  };
}
const Ha = "CreatspaceSatelliteStripEnergyV2", Ba = "CreatspaceSatelliteBeamCurtainV2", qa = "CreatspaceSatelliteEnergyLineV2", Va = /* @__PURE__ */ new WeakMap();
function Hu(e, t) {
  if (typeof e.createPropertyDescriptor == "function")
    return e.createPropertyDescriptor(t);
  const n = `_${t}`;
  return {
    get() {
      return this[n];
    },
    set(r) {
      const o = this[n];
      o !== r && (this[n] = r, this._definitionChanged.raiseEvent(this, t, r, o));
    }
  };
}
function eo(e, t) {
  function n(r = {}) {
    this._definitionChanged = new e.Event(), this._color = void 0, this.color = r.color || e.Color.WHITE, this.duration = Math.max(0.1, Number(r.duration) || 2.4), this.repeat = Math.max(1, Number(r.repeat) || 8), this.intensity = Math.max(0, Number(r.intensity) || 1), this.reverse = r.reverse === !0, this._epoch = null;
  }
  return Object.defineProperties(n.prototype, {
    isConstant: {
      get() {
        return !1;
      }
    },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: Hu(e, "color")
  }), n.prototype.getType = function() {
    return t;
  }, n.prototype.getValue = function(o, a) {
    const i = a || {};
    !this._epoch && o && (this._epoch = e.JulianDate.clone(o));
    const s = o && this._epoch ? e.JulianDate.secondsDifference(o, this._epoch) : 0;
    return i.color = e.Property.getValueOrClonedDefault(
      this._color,
      o,
      e.Color.WHITE,
      i.color
    ), i.time = s / this.duration * (this.reverse ? -1 : 1), i.repeat = this.repeat, i.intensity = this.intensity, i;
  }, n.prototype.equals = function(o) {
    return this === o || o instanceof n && e.Property.equals(this._color, o._color) && this.duration === o.duration && this.repeat === o.repeat && this.intensity === o.intensity && this.reverse === o.reverse;
  }, n;
}
function no(e, t, n) {
  e.Material._materialCache.addMaterial(t, {
    fabric: {
      type: t,
      uniforms: {
        color: e.Color.WHITE,
        time: 0,
        repeat: 8,
        intensity: 1
      },
      source: n
    },
    translucent() {
      return !0;
    }
  });
}
function Io(e) {
  if (!e)
    return null;
  const t = Va.get(e);
  if (t)
    return t;
  const n = eo(
    e,
    Ha
  ), r = eo(
    e,
    Ba
  ), o = eo(
    e,
    qa
  );
  no(
    e,
    Ha,
    `
      uniform vec4 color;
      uniform float time;
      uniform float repeat;
      uniform float intensity;

      czm_material czm_getMaterial(czm_materialInput materialInput) {
        czm_material material = czm_getDefaultMaterial(materialInput);
        // st 是当前面片的二维纹理坐标，范围通常为 0~1。
        vec2 uv = materialInput.st;

        // 沿轨和横轨方向的细线叠加，形成低透明度技术纹理。
        float alongGrid = step(0.94, fract(uv.s * repeat * 1.8));
        float crossGrid = step(0.965, fract(uv.t * max(4.0, repeat * 0.45)));
        float grid = max(alongGrid, crossGrid);

        // 主能量带沿 uv.s 方向移动，较大的指数让亮带中心更集中。
        float energyPosition = fract(time * 0.72);
        float energyDistance = abs(fract(uv.s * 1.7 - energyPosition) - 0.5) * 2.0;
        float energyBand = pow(max(0.0, 1.0 - energyDistance), 9.0);

        // 高频微光带用于打破大面积材质的静态感。
        float microPosition = fract(time * 1.45 + uv.t * 0.18);
        float microDistance = abs(fract(uv.s * 4.0 - microPosition) - 0.5) * 2.0;
        float microBand = pow(max(0.0, 1.0 - microDistance), 18.0);

        // 条带两侧增加柔和边缘光，避免面材质边界显得生硬。
        float sideDistance = min(uv.t, 1.0 - uv.t) * 2.0;
        float sideGlow = pow(max(0.0, 1.0 - sideDistance), 5.0);
        float circuit = grid * (0.42 + 0.58 * sin((uv.s + uv.t + time) * 16.0) * 0.5 + 0.29);

        float energy = clamp(
          circuit + energyBand * 1.2 + microBand * 0.65 + sideGlow * 0.3,
          0.0,
          1.8
        );
        // emission 负责自发光观感；alpha 保留传入颜色的透明度控制。
        vec3 hotColor = mix(color.rgb, vec3(0.78, 0.97, 1.0), 0.72);
        material.diffuse = mix(color.rgb * 0.72, hotColor, clamp(energy, 0.0, 1.0));
        material.emission = hotColor * energy * 0.42 * intensity;
        material.alpha = color.a * (0.48 + energy * 0.72) * intensity;
        return material;
      }
    `
  ), no(
    e,
    Ba,
    `
      uniform vec4 color;
      uniform float time;
      uniform float repeat;
      uniform float intensity;

      czm_material czm_getMaterial(czm_materialInput materialInput) {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 uv = materialInput.st;

        // center 让扫描幕中央略亮，边缘逐渐衰减。
        float center = pow(max(0.0, 1.0 - abs(uv.s - 0.5) * 2.0), 2.4);
        // verticalBand 模拟能量从卫星端沿扫描幕向地面传播。
        float verticalBand = pow(
          max(0.0, 1.0 - abs(fract(uv.t * repeat - time) - 0.5) * 2.0),
          12.0
        );
        // 两组细线构成扫描幕上的轻量线框效果。
        float wireX = step(0.965, fract(uv.s * 18.0));
        float wireY = step(0.97, fract(uv.t * repeat * 1.4 - time * 0.35));
        float wire = max(wireX, wireY);
        float shimmer = 0.72 + 0.28 * sin((uv.t * 24.0 - time * 9.0));
        float energy = center * 0.34 + verticalBand * 1.1 + wire * 0.42;

        vec3 hotColor = mix(color.rgb, vec3(0.86, 0.98, 1.0), 0.68);
        material.diffuse = mix(color.rgb * 0.65, hotColor, clamp(energy, 0.0, 1.0));
        material.emission = hotColor * energy * 0.5 * intensity;
        material.alpha = color.a * (0.2 + energy) * shimmer * intensity;
        return material;
      }
    `
  ), no(
    e,
    qa,
    `
      uniform vec4 color;
      uniform float time;
      uniform float repeat;
      uniform float intensity;

      czm_material czm_getMaterial(czm_materialInput materialInput) {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 uv = materialInput.st;
        // flow 表示当前像素在线段动画周期中的相位。
        float flow = fract(uv.s * repeat - time);
        // head 是主要能量包，packet 是较弱的次级能量包。
        float head = pow(max(0.0, 1.0 - abs(flow - 0.72) * 3.4), 7.0);
        float packet = pow(max(0.0, 1.0 - abs(flow - 0.36) * 5.0), 11.0) * 0.45;
        float edge = pow(max(0.0, 1.0 - abs(uv.t - 0.5) * 2.0), 0.7);
        float energy = (0.16 + head + packet) * edge;

        vec3 hotColor = mix(color.rgb, vec3(0.92, 1.0, 1.0), 0.78);
        material.diffuse = mix(color.rgb, hotColor, clamp(head + packet, 0.0, 1.0));
        material.emission = hotColor * energy * 0.72 * intensity;
        material.alpha = color.a * energy * intensity;
        return material;
      }
    `
  );
  const a = {
    StripMaterialProperty: n,
    BeamMaterialProperty: r,
    LineMaterialProperty: o
  };
  return Va.set(e, a), a;
}
function Bu(e, t = {}) {
  const n = Io(e);
  return n ? new n.StripMaterialProperty(t) : null;
}
function qu(e, t = {}) {
  const n = Io(e);
  return n ? new n.BeamMaterialProperty(t) : null;
}
function $a(e, t = {}) {
  const n = Io(e);
  return n ? new n.LineMaterialProperty(t) : null;
}
const gn = 398600.4418, lr = 6378.137, Vu = 0.00108262668, Ua = 18, ja = 16, $u = 5, Ka = 30, Te = {
  // 总开关。false 时任务控制器不创建任何实体。
  enabled: !0,
  // 星下点开关，不影响业务卫星和扫描计算。
  showGroundPoint: !0,
  // 仅 manageClock=true 时用于设置 viewer.clock.multiplier。
  speed: 5,
  // 独立演示模式下，任务窗口前后保留的时间范围。
  startBufferSeconds: 90,
  stopBufferSeconds: 90,
  // 扫描中和完成后的默认颜色。
  color: "#35d7ff",
  completedColor: "#59e391",
  // 当前扫描高亮块沿飞行方向的长度，单位 km。
  beamLengthKm: 0.5,
  stripHeightMeters: 0,
  // 大场景默认不抢占镜头，也不接管全局 Cesium 时钟。
  autoTrack: !1,
  autoFlyToTask: !1,
  manageClock: !1,
  // 限制进度回调频率，避免高帧率下持续触发业务响应式更新。
  progressIntervalMs: 120,
  // 控制自定义动态材质、脉冲与多层光晕。
  sciFiVisuals: !0
};
function Je(e = {}, t = {}) {
  const n = { ...t, ...e }, r = (i, s) => e[i] ?? e[s] ?? n[s], o = { ...n }, a = (i, s, l) => {
    const c = r(s, l);
    c !== void 0 && (o[i] = c);
  };
  return a("showGroundPoint", "showGroundProjectionPoint", "showGroundPoint"), a("speed", "simulationSpeedMultiplier", "speed"), a("startBufferSeconds", "timelineLeadSeconds", "startBufferSeconds"), a("stopBufferSeconds", "timelineTailSeconds", "stopBufferSeconds"), a("color", "activeScanColor", "color"), a("completedColor", "completedScanColor", "completedColor"), a("beamLengthKm", "scanFrontLengthKilometers", "beamLengthKm"), a("autoTrack", "autoTrackSatellite", "autoTrack"), a("autoFlyToTask", "autoFlyToScanArea", "autoFlyToTask"), a("manageClock", "controlViewerClock", "manageClock"), a(
    "progressIntervalMs",
    "progressCallbackIntervalMilliseconds",
    "progressIntervalMs"
  ), a("sciFiVisuals", "enableSciFiEffects", "sciFiVisuals"), o;
}
function Ya(e = {}, t = {}) {
  const n = Je(e, t);
  return {
    ...n,
    colors: e.taskColors ?? e.colors ?? n.colors,
    keyResolver: e.resolveSatelliteKey ?? e.keyResolver ?? n.keyResolver,
    taskKeyResolver: e.resolveTaskKey ?? e.taskKeyResolver ?? n.taskKeyResolver
  };
}
function Rt(e, t, n) {
  return e.Color.fromCssColorString(t).withAlpha(n);
}
function es(e) {
  if (!e)
    return null;
  if (e instanceof Date)
    return e;
  const t = String(e).trim().replace(" ", "T");
  return /Z$|[+-]\d{2}:\d{2}$/.test(t) ? new Date(t) : /* @__PURE__ */ new Date(`${t}+08:00`);
}
function Lt(e) {
  const t = es(e);
  return t instanceof Date && !Number.isNaN(t.getTime()) ? t : null;
}
function Zt(e, t) {
  return new Date(e.getTime() + t * 1e3);
}
function hr(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function fr(e) {
  return String(e?.orbitElementType || "KEPLERIAN").trim().toUpperCase();
}
function We(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e.satellite || {}, n = e.scanTask || e.scan || {}, r = t.orbit || e.orbit || {}, o = r.tle || t.tle || e.tle || [], a = e.satelliteInfo || {}, i = e.observationInfo || {}, s = n.strip || e.strip || i.strip || null, l = n.fieldOfViewDegrees ?? n.fieldOfViewDeg ?? n.fieldAngleDeg ?? e.fieldAngleDeg ?? e.fieldAngle ?? i.fieldAngle, c = n.halfFieldOfViewDegrees ?? n.halfFieldOfViewDeg ?? n.swathHalfAngleDeg ?? e.swathHalfAngleDeg, d = n.groundFootprintCoordinates ?? n.groundStripPoints ?? n.stripPoints ?? e.groundFootprint ?? e.stripPoints ?? s?.points ?? null, u = r.tleLine1 ?? r.line1 ?? o[0] ?? e.tleLine1 ?? a.tleLine1, f = r.tleLine2 ?? r.line2 ?? o[1] ?? e.tleLine2 ?? a.tleLine2, h = n.startTime ?? e.windowStartTime ?? e.startTime ?? i.observeStartTime, g = n.endTime ?? e.windowEndTime ?? e.endTime ?? i.observeEndTime, p = Lt(h), x = Lt(g), S = n.offNadirAngleDegrees ?? n.offNadirAngleDeg ?? n.sideSwingAngleDeg ?? e.sideSwingAngleDeg ?? e.observationAngleDeg ?? e.lateralAngle ?? i.lateralAngle;
  return {
    ...e,
    id: n.taskId ?? n.id ?? e.id ?? i.metaTaskCode ?? i.taskPlanNumber ?? s?.id,
    satelliteId: t.id ?? e.satelliteId ?? a.satelliteId,
    satelliteCode: t.code ?? e.satelliteCode ?? a.satelliteCode,
    satelliteName: t.name ?? e.satelliteName ?? a.satelliteName,
    satelliteEntity: t.cesiumEntity ?? t.entity ?? e.satelliteEntity,
    orbitElementType: r.format ?? r.type ?? e.orbitElementType ?? (u && f ? "TLE" : "KEPLERIAN"),
    tleLine1: u,
    tleLine2: f,
    semiMajorAxisKm: e.semiMajorAxisKm ?? r.semiMajorAxisKilometers ?? r.semiMajorAxisKm,
    eccentricity: e.eccentricity ?? r.eccentricity,
    inclinationDeg: e.inclinationDeg ?? r.inclinationDegrees ?? r.inclinationDeg,
    raanDeg: e.raanDeg ?? r.rightAscensionOfAscendingNodeDegrees ?? r.raanDeg,
    argOfPerigeeDeg: e.argOfPerigeeDeg ?? r.argumentOfPerigeeDegrees ?? r.argumentOfPerigeeDeg ?? r.argOfPerigeeDeg,
    trueAnomalyDeg: e.trueAnomalyDeg ?? r.trueAnomalyDegrees ?? r.trueAnomalyDeg,
    meanAnomalyDeg: e.meanAnomalyDeg ?? r.meanAnomalyDegrees ?? r.meanAnomalyDeg,
    orbitEpochTimeUtcg: e.orbitEpochTimeUtcg ?? r.epochTime ?? r.epochTimeUtc,
    windowStartTime: h,
    windowEndTime: g,
    durationSec: n.durationSeconds ?? n.durationSec ?? e.durationSec ?? i.durationSec ?? (p && x ? (x.getTime() - p.getTime()) / 1e3 : void 0),
    sideSwingAngleDeg: S,
    observationAngleDeg: S,
    fieldAngleDeg: l,
    swathHalfAngleDeg: c ?? (Number.isFinite(Number(l)) ? Number(l) / 2 : void 0),
    swathWidthKm: n.swathWidthKilometers ?? n.swathWidthKm ?? e.swathWidthKm ?? i.swathWidthKm,
    groundFootprint: d,
    strip: s,
    sourceData: e
  };
}
function ro(e) {
  const t = Zt(e, 28800);
  return [
    t.getUTCFullYear(),
    String(t.getUTCMonth() + 1).padStart(2, "0"),
    String(t.getUTCDate()).padStart(2, "0")
  ].join("-") + " " + [
    String(t.getUTCHours()).padStart(2, "0"),
    String(t.getUTCMinutes()).padStart(2, "0"),
    String(t.getUTCSeconds()).padStart(2, "0")
  ].join(":");
}
function Ja(e) {
  const t = Math.max(0, Math.min(1, e));
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function Qa(e, t, n, r) {
  const o = Math.cos(t), a = Math.sin(t), i = Math.cos(n), s = Math.sin(n), l = Math.cos(r), c = Math.sin(r), [d, u, f = 0] = e;
  return {
    x: (o * l - a * c * i) * d + (-o * c - a * l * i) * u + a * s * f,
    y: (a * l + o * c * i) * d + (-a * c + o * l * i) * u - o * s * f,
    z: c * s * d + l * s * u + i * f
  };
}
function Uu(e) {
  const t = Number(e.semiMajorAxisKm), n = Number(e.eccentricity) || 0, r = (Number(e.inclinationDeg) || 0) * Math.PI / 180, o = (Number(e.raanDeg) || 0) * Math.PI / 180, a = (Number(e.argOfPerigeeDeg) || 0) * Math.PI / 180;
  let i;
  if (e.trueAnomalyDeg !== null && e.trueAnomalyDeg !== void 0)
    i = (Number(e.trueAnomalyDeg) || 0) * Math.PI / 180;
  else {
    const f = (Number(e.meanAnomalyDeg) || 0) * Math.PI / 180;
    let h = f;
    for (let g = 0; g < 16; g += 1) {
      const p = h - n * Math.sin(h) - f, x = 1 - n * Math.cos(h), S = p / x;
      if (h -= S, Math.abs(S) < 1e-13) break;
    }
    i = 2 * Math.atan2(
      Math.sqrt(1 + n) * Math.sin(h / 2),
      Math.sqrt(1 - n) * Math.cos(h / 2)
    );
  }
  const s = t * (1 - n * n), l = s / (1 + n * Math.cos(i)), c = [
    l * Math.cos(i),
    l * Math.sin(i),
    0
  ], d = Math.sqrt(gn / s), u = [
    -d * Math.sin(i),
    d * (n + Math.cos(i)),
    0
  ];
  return {
    r: Qa(
      c,
      o,
      r,
      a
    ),
    v: Qa(
      u,
      o,
      r,
      a
    )
  };
}
function $e(e, t, n = 1) {
  return {
    x: e.x + t.x * n,
    y: e.y + t.y * n,
    z: e.z + t.z * n
  };
}
function ju(e) {
  const t = e.x * e.x + e.y * e.y + e.z * e.z, n = Math.sqrt(t), r = n * n * n, o = r * t, a = e.z * e.z / t, i = 1.5 * Vu * gn * lr * lr / o;
  return {
    x: -gn * e.x / r + i * e.x * (5 * a - 1),
    y: -gn * e.y / r + i * e.y * (5 * a - 1),
    z: -gn * e.z / r + i * e.z * (5 * a - 3)
  };
}
function Rn(e) {
  return {
    r: e.v,
    v: ju(e.r)
  };
}
function Xa(e, t) {
  const n = Rn(e), r = Rn({
    r: $e(e.r, n.r, t / 2),
    v: $e(e.v, n.v, t / 2)
  }), o = Rn({
    r: $e(e.r, r.r, t / 2),
    v: $e(e.v, r.v, t / 2)
  }), a = Rn({
    r: $e(e.r, o.r, t),
    v: $e(e.v, o.v, t)
  });
  return {
    r: {
      x: e.r.x + t / 6 * (n.r.x + 2 * r.r.x + 2 * o.r.x + a.r.x),
      y: e.r.y + t / 6 * (n.r.y + 2 * r.r.y + 2 * o.r.y + a.r.y),
      z: e.r.z + t / 6 * (n.r.z + 2 * r.r.z + 2 * o.r.z + a.r.z)
    },
    v: {
      x: e.v.x + t / 6 * (n.v.x + 2 * r.v.x + 2 * o.v.x + a.v.x),
      y: e.v.y + t / 6 * (n.v.y + 2 * r.v.y + 2 * o.v.y + a.v.y),
      z: e.v.z + t / 6 * (n.v.z + 2 * r.v.z + 2 * o.v.z + a.v.z)
    }
  };
}
function Za(e) {
  return {
    r: { ...e.r },
    v: { ...e.v }
  };
}
function Ku(e, t) {
  const n = es(e.orbitEpochTimeUtcg), r = /* @__PURE__ */ new Map(), o = Uu(e), a = n.getTime(), i = t.filter((f) => f.getTime() < a).sort((f, h) => h.getTime() - f.getTime()), s = t.filter((f) => f.getTime() >= a).sort((f, h) => f.getTime() - h.getTime());
  let l = Za(o), c = 0;
  i.forEach((f) => {
    const h = (f.getTime() - a) / 1e3;
    for (; c > h; ) {
      const g = -Math.min(
        Ka,
        c - h
      );
      l = Xa(l, g), c += g;
    }
    r.set(f.getTime(), l.r);
  });
  let d = Za(o), u = 0;
  return s.forEach((f) => {
    const h = (f.getTime() - a) / 1e3;
    for (; u < h; ) {
      const g = Math.min(
        Ka,
        h - u
      );
      d = Xa(d, g), u += g;
    }
    r.set(f.getTime(), d.r);
  }), r;
}
function Yu(e, t, n) {
  const r = Lo(n), o = Math.cos(r), a = Math.sin(r);
  return new e.Cartesian3(
    (t.x * o + t.y * a) * 1e3,
    (-t.x * a + t.y * o) * 1e3,
    t.z * 1e3
  );
}
function Ju(e) {
  const t = We(e);
  if (!t)
    return !1;
  const n = Lt(t.windowStartTime), r = Lt(t.windowEndTime);
  return !!(n && r && r.getTime() > n.getTime());
}
function Fn(e) {
  return e !== "" && e !== null && e !== void 0 && Number.isFinite(Number(e));
}
function Qu(e) {
  const t = e.reduce((i, s) => i + s[1], 0) / e.length * (Math.PI / 180), n = e[0][0], r = e.map(([i, s]) => {
    let l = i - n;
    return l > 180 && (l -= 360), l < -180 && (l += 360), {
      x: l * Math.cos(t),
      y: s
    };
  }).sort(
    (i, s) => Math.atan2(i.y, i.x) - Math.atan2(s.y, s.x)
  ), o = r.reduce(
    (i, s) => ({
      x: i.x + s.x / r.length,
      y: i.y + s.y / r.length
    }),
    { x: 0, y: 0 }
  );
  r.sort(
    (i, s) => Math.atan2(i.y - o.y, i.x - o.x) - Math.atan2(s.y - o.y, s.x - o.x)
  );
  let a = 0;
  return r.forEach((i, s) => {
    const l = r[(s + 1) % r.length];
    a += i.x * l.y - l.x * i.y;
  }), Math.abs(a) > 1e-10;
}
function Xu(e, t) {
  const n = String(e.tleLine1 || "").trim(), r = String(e.tleLine2 || "").trim();
  if (!/^1\s/.test(n) || !/^2\s/.test(r)) {
    t.push("satellite.orbit.tleLine1/tleLine2 不是有效的 TLE 双行格式。");
    return;
  }
  try {
    const o = Zi(n, r);
    (!o || Number(o.error) !== 0) && t.push(
      `TLE 解析失败，satellite.js error=${o?.error ?? "unknown"}。`
    );
  } catch (o) {
    t.push(
      `TLE 解析失败：${o instanceof Error ? o.message : String(o)}。`
    );
  }
}
function Zu(e, t) {
  const n = Number(e.semiMajorAxisKm), r = Number(e.eccentricity), o = Number(e.inclinationDeg);
  Number.isFinite(n) && n > lr || t.push(
    `satellite.orbit.semiMajorAxisKilometers 必须大于 ${lr} km。`
  ), Number.isFinite(r) && r >= 0 && r < 1 || t.push("satellite.orbit.eccentricity 必须在 [0, 1) 范围内。"), Number.isFinite(o) && o >= 0 && o <= 180 || t.push("satellite.orbit.inclinationDegrees 必须在 [0, 180] 范围内。"), Fn(e.raanDeg) || t.push(
    "satellite.orbit.rightAscensionOfAscendingNodeDegrees 必须是有效数字。"
  ), Fn(e.argOfPerigeeDeg) || t.push("satellite.orbit.argumentOfPerigeeDegrees 必须是有效数字。"), Lt(e.orbitEpochTimeUtcg) || t.push("satellite.orbit.epochTime 不是有效时间。"), !Fn(e.trueAnomalyDeg) && !Fn(e.meanAnomalyDeg) && t.push(
    "trueAnomalyDegrees 和 meanAnomalyDegrees 至少提供一个有效数字。"
  );
}
function Ro(e, t = {}) {
  const n = We(e), r = [];
  if (!n)
    return {
      valid: !1,
      errors: ["任务必须是包含 satellite 和 scanTask 的对象。"],
      normalizedTask: null
    };
  const o = Lt(n.windowStartTime), a = Lt(n.windowEndTime);
  o || r.push("scanTask.startTime 不是有效时间。"), a || r.push("scanTask.endTime 不是有效时间。"), o && a && a.getTime() <= o.getTime() && r.push("scanTask.endTime 必须晚于 scanTask.startTime。");
  const i = n.groundFootprint !== null && n.groundFootprint !== void 0, s = Fo(n.groundFootprint), l = n.sideSwingAngleDeg !== null && n.sideSwingAngleDeg !== void 0, c = Number(n.sideSwingAngleDeg), d = n.fieldAngleDeg !== null && n.fieldAngleDeg !== void 0, u = n.swathHalfAngleDeg !== null && n.swathHalfAngleDeg !== void 0, f = n.swathWidthKm !== null && n.swathWidthKm !== void 0, h = Number(n.fieldAngleDeg), g = Number(n.swathHalfAngleDeg), p = Number(n.swathWidthKm), x = d && Number.isFinite(h) && h > 0 && h < 180 || u && Number.isFinite(g) && g > 0 && g < 90, S = f && Number.isFinite(p) && p > 0;
  l && (!Number.isFinite(c) || Math.abs(c) >= 90) && r.push("scanTask.offNadirAngleDegrees 必须在 (-90, 90) 范围内。"), (d || u) && !x && r.push("scanTask.fieldOfViewDegrees 必须在 (0, 180) 范围内。"), f && !S && r.push("scanTask.swathWidthKilometers 必须是大于 0 的有效数字。"), i ? s ? Qu(s) || r.push(
    "scanTask.groundFootprintCoordinates 不能共线或形成退化区域。"
  ) : r.push(
    "scanTask.groundFootprintCoordinates 必须包含四个不同且有效的 [经度, 纬度] 坐标。"
  ) : (l || r.push(
    "没有地面足迹时必须提供 scanTask.offNadirAngleDegrees；不侧摆传 0。"
  ), !x && !S && r.push(
    "没有地面足迹时，scanTask.fieldOfViewDegrees 和 scanTask.swathWidthKilometers 至少提供一个大于 0 的有效值。"
  ));
  const T = t.satelliteEntity || n.satelliteEntity, M = !!T?.position, A = t.requireOrbit !== !1 && !M;
  if (T && !M && r.push("satellite.cesiumEntity 必须具有可读取的 position 属性。"), A) {
    const _ = fr(n);
    _ === "TLE" ? Xu(n, r) : _ === "KEPLERIAN" ? Zu(n, r) : r.push('satellite.orbit.format 只支持 "TLE" 或 "KEPLERIAN"。');
  }
  return {
    valid: r.length === 0,
    errors: r,
    normalizedTask: n
  };
}
function th(e, t = {}) {
  return Ro(e, t).valid;
}
function eh(e, t) {
  if (!t) return null;
  const n = e.Cartographic.fromCartesian(t);
  if (!n) return null;
  const r = hr(e.Math.toDegrees(n.longitude)), o = e.Math.toDegrees(n.latitude), a = n.height;
  return [r, o, a].every(Number.isFinite) ? { lon: r, lat: o, h: a } : null;
}
function ns(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Fo(e) {
  if (!Array.isArray(e) || e.length !== 4 && e.length !== 5)
    return null;
  const t = e.map((r) => {
    const o = Array.isArray(r) ? Number(r[0]) : Number(r?.lon ?? r?.lng ?? r?.longitude), a = Array.isArray(r) ? Number(r[1]) : Number(r?.lat ?? r?.latitude);
    return [o, a];
  });
  return t.some(
    ([r, o]) => !Number.isFinite(r) || !Number.isFinite(o) || r < -180 || r > 180 || o < -90 || o > 90
  ) || (t.length === 5 && t[0][0] === t[4][0] && t[0][1] === t[4][1] && t.pop(), t.length !== 4) ? null : new Set(
    t.map(([r, o]) => `${r.toFixed(12)},${o.toFixed(12)}`)
  ).size === 4 ? t : null;
}
function se(e, t, n) {
  return new e.EllipsoidGeodesic(
    e.Cartographic.fromDegrees(t[0], t[1]),
    e.Cartographic.fromDegrees(n[0], n[1]),
    e.Ellipsoid.WGS84
  ).surfaceDistance / 1e3;
}
function Oe(e, t, n, r) {
  const a = new e.EllipsoidGeodesic(
    e.Cartographic.fromDegrees(t[0], t[1]),
    e.Cartographic.fromDegrees(n[0], n[1]),
    e.Ellipsoid.WGS84
  ).interpolateUsingFraction(ns(r, 0, 1));
  return [
    hr(e.Math.toDegrees(a.longitude)),
    e.Math.toDegrees(a.latitude)
  ];
}
function nh(e, t) {
  const n = t.map(
    ([s, l]) => e.Cartesian3.fromDegrees(s, l, 0)
  ), r = n.reduce(
    (s, l) => e.Cartesian3.add(s, l, s),
    new e.Cartesian3()
  );
  e.Cartesian3.divideByScalar(r, n.length, r);
  const o = e.Ellipsoid.WGS84.scaleToGeodeticSurface(r);
  if (!o)
    return t.slice();
  const a = e.Transforms.eastNorthUpToFixedFrame(o), i = e.Matrix4.inverseTransformation(
    a,
    new e.Matrix4()
  );
  return t.map((s, l) => {
    const c = e.Matrix4.multiplyByPoint(
      i,
      n[l],
      new e.Cartesian3()
    );
    return { point: s, angle: Math.atan2(c.y, c.x) };
  }).sort((s, l) => s.angle - l.angle).map((s) => s.point);
}
function oo(e, t, n, r) {
  const o = Math.cos(r), a = Math.sin(r), i = e.Cartesian3.cross(n, t, new e.Cartesian3()), s = e.Cartesian3.dot(n, t) * (1 - o), l = new e.Cartesian3();
  return e.Cartesian3.multiplyByScalar(t, o, l), e.Cartesian3.add(
    l,
    e.Cartesian3.multiplyByScalar(i, a, i),
    l
  ), e.Cartesian3.add(
    l,
    e.Cartesian3.multiplyByScalar(
      n,
      s,
      new e.Cartesian3()
    ),
    l
  ), e.Cartesian3.normalize(l, l);
}
function rh(e, t, n) {
  if (!t || !n)
    return null;
  const r = e.Ellipsoid.WGS84, o = r.scaleToGeodeticSurface(t);
  if (!o)
    return null;
  const a = r.geodeticSurfaceNormal(o, new e.Cartesian3()), i = e.Cartesian3.negate(a, new e.Cartesian3()), s = e.Cartesian3.subtract(
    n,
    t,
    new e.Cartesian3()
  ), l = e.Cartesian3.multiplyByScalar(
    a,
    e.Cartesian3.dot(s, a),
    new e.Cartesian3()
  ), c = e.Cartesian3.subtract(
    s,
    l,
    new e.Cartesian3()
  );
  if (e.Cartesian3.magnitudeSquared(c) < 1e-6)
    return null;
  e.Cartesian3.normalize(c, c);
  const d = e.Cartesian3.normalize(
    e.Cartesian3.cross(c, i, new e.Cartesian3()),
    new e.Cartesian3()
  );
  return { along: c, crossLeft: d, nadir: i, up: a, surface: o };
}
function ao(e, t, n) {
  const r = new e.Ray(t, n), o = e.IntersectionTests.rayEllipsoid(
    r,
    e.Ellipsoid.WGS84
  );
  if (!o)
    return null;
  const a = o.start >= 0 ? o.start : o.stop;
  return a >= 0 ? e.Ray.getPoint(r, a, new e.Cartesian3()) : null;
}
function Zn(e, t) {
  const n = e.Ellipsoid.WGS84.cartesianToCartographic(t);
  return n ? [
    hr(e.Math.toDegrees(n.longitude)),
    e.Math.toDegrees(n.latitude)
  ] : null;
}
function rs(e, t) {
  if (!t)
    return null;
  const n = e.Ellipsoid.WGS84.scaleToGeodeticSurface(
    t,
    new e.Cartesian3()
  );
  return n ? Zn(e, n) : null;
}
function os(e, t, n, r, o) {
  const a = rh(e, t, n);
  if (!a)
    return null;
  const i = oo(
    e,
    a.nadir,
    a.along,
    r
  ), s = oo(
    e,
    a.nadir,
    a.along,
    r + o
  ), l = oo(
    e,
    a.nadir,
    a.along,
    r - o
  ), c = ao(
    e,
    t,
    i
  ), d = ao(e, t, s), u = ao(
    e,
    t,
    l
  );
  if (!c || !d || !u)
    return null;
  const f = Zn(e, c), h = Zn(e, d), g = Zn(e, u);
  return f && h && g ? {
    center: f,
    left: h,
    right: g,
    centerCartesian: c,
    leftCartesian: d,
    rightCartesian: u,
    frame: a
  } : null;
}
function oh(e, t, n, r) {
  const o = Number(t.swathHalfAngleDeg);
  if (Number.isFinite(o) && o > 0)
    return e.Math.toRadians(o);
  const a = Number(t.swathWidthKm);
  if (!(a > 0))
    return null;
  const i = e.Math.toRadians(
    Number(t.sideSwingAngleDeg ?? t.observationAngleDeg) || 0
  ), s = eh(e, n), l = Math.atan(
    a / 2 / Math.max(1, Number(s?.h) / 1e3)
  );
  let c = 0, d = Math.max(l * 2, e.Math.toRadians(0.1));
  const u = (h) => {
    const g = os(
      e,
      n,
      r,
      i,
      h
    );
    return g ? se(e, g.left, g.right) : null;
  };
  let f = u(d);
  for (; f !== null && f < a && d < e.Math.toRadians(45); )
    c = d, d *= 1.6, f = u(d);
  if (f === null && (d = Math.max(l, c), f = u(d)), f === null)
    return l;
  for (let h = 0; h < 28; h += 1) {
    const g = (c + d) / 2, p = u(g);
    p === null || p > a ? d = g : c = g;
  }
  return (c + d) / 2;
}
function tr(e, t, n, r) {
  if (!n || !r)
    return null;
  const o = e.Math.toRadians(
    Number(t.sideSwingAngleDeg ?? t.observationAngleDeg) || 0
  ), a = oh(
    e,
    t,
    n,
    r
  );
  if (!(Number.isFinite(a) && a > 0))
    return null;
  const i = os(
    e,
    n,
    r,
    o,
    a
  );
  return i ? {
    ...i,
    rollRadians: o,
    halfFovRadians: a,
    widthKm: se(e, i.left, i.right)
  } : null;
}
function Qe(e, t) {
  let n = 0;
  for (let r = 1; r < t.length; r += 1)
    n += se(e, t[r - 1], t[r]);
  return n;
}
function as(e, t, n, r) {
  const o = nh(e, t), i = [
    {
      startEdge: [o[0], o[1]],
      endEdge: [o[3], o[2]]
    },
    {
      startEdge: [o[1], o[2]],
      endEdge: [o[0], o[3]]
    }
  ].reduce((d, u) => {
    const f = se(
      e,
      u.startEdge[0],
      u.startEdge[1]
    ) + se(e, u.endEdge[0], u.endEdge[1]);
    return !d || f < d.score ? { ...u, score: f } : d;
  }, null), s = (d) => Oe(e, d[0], d[1], 0.5);
  if (r && se(e, r, s(i.endEdge)) < se(e, r, s(i.startEdge))) {
    const d = i.startEdge;
    i.startEdge = i.endEdge, i.endEdge = d;
  }
  const l = [], c = [];
  for (let d = 0; d <= n; d += 1) {
    const u = d / n;
    l.push(
      Oe(
        e,
        i.startEdge[0],
        i.endEdge[0],
        u
      )
    ), c.push(
      Oe(
        e,
        i.startEdge[1],
        i.endEdge[1],
        u
      )
    );
  }
  return {
    points: o,
    trackLeft: l,
    trackRight: c,
    widthKm: (se(
      e,
      i.startEdge[0],
      i.startEdge[1]
    ) + se(e, i.endEdge[0], i.endEdge[1])) / 2,
    lengthKm: (Qe(e, l) + Qe(e, c)) / 2
  };
}
function ah(e) {
  const t = String(e || "");
  if (t.length < 32)
    return null;
  const n = Number(t.slice(18, 20)), r = Number(t.slice(20, 32));
  if (!Number.isFinite(n) || !(r >= 1))
    return null;
  const o = n >= 57 ? 1900 + n : 2e3 + n;
  return new Date(
    Date.UTC(o, 0, 1) + (r - 1) * 24 * 60 * 60 * 1e3
  );
}
function is(e, t, n, r, o = 0) {
  const a = Number(e.swathWidthKm), i = Number.isFinite(a) ? n - a : null, s = Lt(e.windowStartTime), l = fr(e) === "TLE" ? ah(e.tleLine1) : null, c = s && l ? Math.abs(s.getTime() - l.getTime()) / 864e5 : null, d = [];
  return Number.isFinite(i) && Math.abs(i) > Math.max(0.5, a * 0.1) && d.push(
    `地面足迹平均宽度 ${n.toFixed(
      3
    )} km 与配置幅宽 ${a.toFixed(3)} km 不一致。`
  ), t === "provided" && o > Math.max(5, n) && d.push(
    `轨道物理投影中心与客户足迹中心相差 ${o.toFixed(
      3
    )} km，请检查时间、侧摆角、坐标系和 TLE。`
  ), c !== null && c > 14 && d.push(
    `TLE 历元距离任务开始时间 ${c.toFixed(
      2
    )} 天，实际轨道精度可能下降。`
  ), {
    footprintSource: t,
    widthKm: n,
    lengthKm: r,
    configuredWidthKm: Number.isFinite(a) ? a : null,
    widthDifferenceKm: i,
    orbitToFootprintCenterErrorKm: o,
    tleEpoch: l,
    tleAgeDays: c,
    warnings: d
  };
}
function ih(e, t, n) {
  if (fr(t) === "TLE") {
    const a = Zi(t.tleLine1, t.tleLine2);
    return new Map(
      n.map((i) => [
        i.getTime(),
        sh(e, a, i)
      ])
    );
  }
  const r = Ku(t, n), o = /* @__PURE__ */ new Map();
  return n.forEach((a) => {
    const i = r.get(a.getTime());
    o.set(a.getTime(), Yu(e, i, a));
  }), o;
}
function W0(e, t) {
  const n = We(t);
  if (!e || !th(n)) return null;
  const r = Lt(n.windowStartTime), o = Lt(n.windowEndTime);
  if (!r || !o || o.getTime() <= r.getTime())
    return null;
  const a = Math.max(
    1,
    (o.getTime() - r.getTime()) / 1e3
  ), i = ss(a), s = [];
  for (let E = 0; E <= i; E += 1) {
    const G = a * E / i, I = Zt(r, G);
    s.push(I, Zt(I, 5));
  }
  const l = Zt(r, a / 2);
  s.push(l, Zt(l, 5));
  const c = ih(
    e,
    n,
    s
  ), d = Fo(n.groundFootprint), u = c.get(r.getTime()), f = c.get(
    Zt(r, 5).getTime()
  ), h = tr(
    e,
    n,
    u,
    f
  );
  let g = [], p = [], x = 0, S = 0, T = "calculated-wgs84";
  if (d) {
    const E = as(
      e,
      d,
      i,
      h?.center || rs(e, u)
    );
    g = E.trackLeft, p = E.trackRight, x = E.widthKm, S = E.lengthKm, T = "provided";
  } else {
    for (let E = 0; E <= i; E += 1) {
      const G = a * E / i, I = Zt(r, G), F = tr(
        e,
        n,
        c.get(I.getTime()),
        c.get(Zt(I, 5).getTime())
      );
      F && (g.push(F.left), p.push(F.right));
    }
    x = g.length && p.length ? g.reduce(
      (E, G, I) => E + se(e, G, p[I]),
      0
    ) / g.length : 0, S = (Qe(e, g) + Qe(e, p)) / 2;
  }
  if (g.length < 2 || p.length < 2) return null;
  const M = [...g, ...p.slice().reverse(), g[0]], A = g.map((E, G) => {
    const I = Oe(
      e,
      E,
      p[G],
      0.5
    ), F = a * G / Math.max(1, g.length - 1);
    return {
      lng: I[0],
      lat: I[1],
      date: Zt(r, F)
    };
  }), _ = A.reduce(
    (E, G) => ({ lng: E.lng + G.lng, lat: E.lat + G.lat }),
    { lng: 0, lat: 0 }
  );
  _.lng /= A.length || 1, _.lat /= A.length || 1;
  const k = c.get(l.getTime()), C = c.get(
    Zt(l, 5).getTime()
  ), P = tr(
    e,
    n,
    k,
    C
  ), H = T === "provided" && P ? se(e, P.center, [
    _.lng,
    _.lat
  ]) : 0;
  return {
    positions: M.flat(),
    center: _,
    centerline: A.flatMap((E) => [E.lng, E.lat]),
    centerlinePoints: A,
    trackLeft: g,
    trackRight: p,
    footprintSource: T,
    widthKm: x,
    lengthKm: S,
    diagnostics: is(
      n,
      T,
      x,
      S,
      H
    ),
    source: T === "provided" ? "客户地面足迹" : `${fr(n)}+WGS84 传感器视线投影`
  };
}
function sh(e, t, n) {
  const r = Fu(t, n);
  if (!r?.position)
    return null;
  const o = Ou(r.position, Lo(n)), a = hr(Gu(o.longitude)), i = zu(o.latitude), s = Math.max(Number(o.height) * 1e3, 12e4);
  return [a, i, s].every(Number.isFinite) ? e.Cartesian3.fromDegrees(a, i, s) : null;
}
function ss(e) {
  return Math.min(
    720,
    Math.max(12, Math.ceil(Math.max(1, e) * 1.2))
  );
}
function lh(e, t, n = {}) {
  let r = Je(n, Te), o = null, a = null, i = !1, s = null, l = null, c = null, d = 0, u = [], f = [], h = null, g = null, p = "", x = 0;
  function S() {
    if (!e)
      return !1;
    try {
      return !e.isDestroyed?.();
    } catch {
      return !1;
    }
  }
  function T(O, $) {
    const U = O === "phase-change" ? "onPhaseChange" : `on${O.charAt(0).toUpperCase()}${O.slice(1)}`;
    r[U]?.($);
  }
  function M(O, $ = 3.2, U = 0) {
    if (!r.sciFiVisuals)
      return 0.5;
    const Q = Number(O?.secondsOfDay) || 0;
    return (Math.sin(Q * $ + U) + 1) / 2;
  }
  function A(O) {
    if (!S())
      return null;
    try {
      const $ = e.entities.add(O);
      return u.push($), $;
    } catch {
      return null;
    }
  }
  function _(O) {
    const $ = A(O);
    return $ && f.push($), $;
  }
  function k(O) {
    f.forEach(($) => {
      $.show = O;
    }), e.scene?.requestRender?.();
  }
  function C(O) {
    const $ = Lt(O.windowStartTime), U = Lt(O.windowEndTime), Q = Lt(
      O.orbitStartTime || O.sceneStartTime
    ), B = Lt(
      O.orbitEndTime || O.sceneStopTime
    ), et = Q && B && B.getTime() > Q.getTime(), it = et ? Q : Zt($, -r.startBufferSeconds), ut = et ? B : Zt(U, r.stopBufferSeconds);
    g = t.JulianDate.fromDate(it);
    const Z = t.JulianDate.fromDate(ut);
    return r.manageClock !== !1 && (e.clock.startTime = g.clone(), e.clock.stopTime = Z.clone(), e.clock.currentTime = e.clock.startTime.clone(), e.clock.clockRange = t.ClockRange.CLAMPED, e.clock.multiplier = r.speed, e.clock.shouldAnimate = !0, e.timeline?.zoomTo?.(e.clock.startTime, e.clock.stopTime)), {
      sceneStart: it,
      sceneStop: ut,
      sceneStartJd: g,
      sceneStopJd: Z,
      windowStart: $,
      windowEnd: U,
      t0Sec: ($.getTime() - it.getTime()) / 1e3,
      t1Sec: (U.getTime() - it.getTime()) / 1e3
    };
  }
  function P(O = e?.clock?.currentTime) {
    return o ? typeof o.getValue == "function" ? o.getValue(O) ?? null : o : null;
  }
  function H(O) {
    const $ = P(O);
    if (!$)
      return null;
    const U = t.Cartographic.fromCartesian($);
    return {
      lon: t.Math.toDegrees(U.longitude),
      lat: t.Math.toDegrees(U.latitude),
      h: U.height
    };
  }
  function E(O) {
    if (!r.showGroundPoint)
      return;
    const $ = O.satelliteName || O.satelliteCode || "扫描卫星";
    A({
      name: `${$}-地面点`,
      position: new t.CallbackProperty((U) => {
        const Q = H(U);
        return Q ? t.Cartesian3.fromDegrees(Q.lon, Q.lat, 8e3) : void 0;
      }, !1),
      point: {
        pixelSize: 7,
        color: Rt(t, r.color, 0.96),
        outlineColor: Rt(t, "#ffffff", 0.82),
        outlineWidth: 1
      }
    });
  }
  function G(O, $) {
    const U = Number(O.sideSwingAngleDeg ?? O.observationAngleDeg) || 0, Q = $.t1Sec - $.t0Sec, B = ss(Q), et = Fo(O.groundFootprint), it = (z) => t.JulianDate.addSeconds(
      $.sceneStartJd,
      z,
      new t.JulianDate()
    ), ut = (z) => {
      const j = it(z), tt = it(z + $u);
      return tr(
        t,
        O,
        P(j),
        P(tt)
      );
    }, Z = ut($.t0Sec);
    let st = [], nt = [], rt = "calculated-wgs84", ct = 0, w = 0;
    if (et) {
      const z = as(
        t,
        et,
        B,
        Z?.center || rs(t, P(it($.t0Sec)))
      );
      st = z.trackLeft, nt = z.trackRight, rt = "provided", ct = z.widthKm, w = z.lengthKm;
    } else {
      for (let z = 0; z <= B; z += 1) {
        const j = $.t0Sec + ($.t1Sec - $.t0Sec) * z / B, tt = ut(j);
        tt && (st.push(tt.left), nt.push(tt.right));
      }
      ct = st.length && nt.length ? st.reduce(
        (z, j, tt) => z + se(t, j, nt[tt]),
        0
      ) / st.length : 0, w = (Qe(t, st) + Qe(t, nt)) / 2;
    }
    const b = ut(
      $.t0Sec + Q / 2
    ), v = st.length && nt.length ? Oe(
      t,
      st[Math.floor((st.length - 1) / 2)],
      nt[Math.floor((nt.length - 1) / 2)],
      0.5
    ) : null, D = rt === "provided" && b && v ? se(
      t,
      b.center,
      v
    ) : 0;
    return {
      id: O.id || O.prepareBatchNo || "real-strip-task",
      // getTask() 会对外返回该对象，因此保留原始 plan 便于业务追溯。
      plan: O,
      roll: U,
      footprintSource: rt,
      footprintPoints: et,
      swathWidthKm: ct,
      lengthKm: w,
      diagnostics: is(
        O,
        rt,
        ct,
        w,
        D
      ),
      // 预先缓存扫描起点和持续时间，避免每个 CallbackProperty 每帧重复创建。
      startJd: t.JulianDate.addSeconds(
        $.sceneStartJd,
        $.t0Sec,
        new t.JulianDate()
      ),
      durationSeconds: Q,
      t0Sec: $.t0Sec,
      t1Sec: $.t1Sec,
      trackLeft: st,
      trackRight: nt
    };
  }
  function I(O, $) {
    return Math.max(
      0,
      Math.min(
        1,
        t.JulianDate.secondsDifference($, O.startJd) / O.durationSeconds
      )
    );
  }
  function F(O) {
    const $ = (m, ht) => typeof m == "number" && Number.isFinite(m) ? Math.min(1, Math.max(0, m)) : ht, U = (m) => Number.isFinite(r.stripBoundaryWidthPixels) && r.stripBoundaryWidthPixels > 0 ? r.stripBoundaryWidthPixels : m, Q = r.followTerrain === !0 ? Mu(t, e, r.terrainLineOffsetMeters) : null, B = Q ? 0 : Number(r.stripHeightMeters), et = Number.isFinite(B) ? Math.max(0, B) : 0, it = !Q && et === 0, ut = Q || it ? {} : { height: et }, Z = (m, ht) => Q ? Q.position(m, ht) : t.Cartesian3.fromDegrees(m, ht, et), st = (m) => Q ? Q.line(m) : nt(m);
    function nt(m) {
      if (it) return t.Cartesian3.fromDegreesArray(m);
      const ht = [];
      for (let ft = 0; ft < m.length; ft += 2)
        ht.push(m[ft], m[ft + 1], et);
      return t.Cartesian3.fromDegreesArrayHeights(ht);
    }
    const { trackLeft: rt, trackRight: ct } = O, w = rt.length - 1, b = Number(r.beamLengthKm), v = Number.isFinite(b) && b >= 0 ? b : Te.beamLengthKm;
    if (w < 1 || ct.length !== rt.length)
      return;
    const D = r.sciFiVisuals ? Bu(t, {
      color: Rt(t, r.color, 0.52),
      duration: 0.9,
      repeat: 6,
      intensity: 1.2
    }) : null, z = r.sciFiVisuals ? qu(t, {
      color: Rt(t, r.color, 0.2),
      duration: 1.35,
      repeat: 12,
      intensity: 0.95
    }) : null, j = r.sciFiVisuals ? $a(t, {
      color: Rt(t, r.color, 0.92),
      duration: 1.15,
      repeat: 3.5,
      intensity: 1.1
    }) : null, tt = r.sciFiVisuals ? $a(t, {
      color: Rt(t, "#eaffff", 0.98),
      duration: 0.55,
      repeat: 2.4,
      intensity: 1.25
    }) : null;
    function at(m) {
      const ht = ns(m, 0, 1) * w, ft = Math.min(Math.floor(ht), w), wt = Math.min(ft + 1, w), xt = ht - ft;
      return {
        left: Oe(
          t,
          rt[ft],
          rt[wt],
          xt
        ),
        right: Oe(
          t,
          ct[ft],
          ct[wt],
          xt
        )
      };
    }
    function dt(m, ht = 0) {
      const ft = I(O, m), wt = O.lengthKm > 0 ? ht / O.lengthKm : 0;
      return at(ft + wt);
    }
    function gt(m, ht = 0) {
      const ft = I(O, m);
      if (ft <= 0 || ft >= 1)
        return [];
      const wt = dt(m, ht);
      return wt ? st([
        wt.left[0],
        wt.left[1],
        wt.right[0],
        wt.right[1]
      ]) : [];
    }
    function yt(m) {
      const ht = I(O, m);
      if (ht <= 0 || ht >= 1)
        return [];
      const ft = P(m), wt = dt(m);
      if (!ft || !wt)
        return [];
      const xt = (wt.left[0] + wt.right[0]) / 2, _t = (wt.left[1] + wt.right[1]) / 2;
      return [ft, Z(xt, _t)];
    }
    function vt(m, ht = !1) {
      const ft = I(O, m);
      if (ft <= 0)
        return [];
      if (ft >= 1) {
        const St = [];
        rt.forEach((Ot) => St.push(Ot[0], Ot[1]));
        for (let Ot = ct.length - 1; Ot >= 0; Ot -= 1)
          St.push(ct[Ot][0], ct[Ot][1]);
        return ht && St.push(rt[0][0], rt[0][1]), St;
      }
      const wt = Math.min(
        Math.floor(ft * w),
        w - 1
      ), xt = at(ft);
      if (!xt)
        return [];
      const _t = [];
      for (let St = 0; St <= wt; St += 1)
        _t.push(rt[St][0], rt[St][1]);
      _t.push(xt.left[0], xt.left[1]), _t.push(xt.right[0], xt.right[1]);
      for (let St = wt; St >= 0; St -= 1)
        _t.push(ct[St][0], ct[St][1]);
      return ht && _t.push(rt[0][0], rt[0][1]), _t;
    }
    const bt = [];
    rt.forEach((m) => bt.push(m[0], m[1]));
    for (let m = ct.length - 1; m >= 0; m -= 1)
      bt.push(ct[m][0], ct[m][1]);
    bt.push(rt[0][0], rt[0][1]);
    const Pt = nt(bt), At = Q ? new t.CallbackProperty(() => st(bt), !1) : Pt;
    s = t.BoundingSphere.fromPoints(Pt), _({
      name: `${O.id}-planned-area`,
      polygon: {
        ...ut,
        hierarchy: new t.PolygonHierarchy(Pt),
        material: Rt(t, r.color, $(r.plannedAreaOpacity, 0.055)),
        outline: !1
      }
    }), _({
      name: `${O.id}-planned-boundary`,
      polyline: {
        positions: At,
        width: U(1.4),
        clampToGround: it,
        material: new t.PolylineDashMaterialProperty({
          color: Rt(t, r.color, 0.58),
          dashLength: 18
        })
      }
    }), r.sciFiVisuals && _({
      name: `${O.id}-planned-boundary-glow`,
      polyline: {
        positions: At,
        width: 1,
        clampToGround: it,
        material: new t.PolylineGlowMaterialProperty({
          glowPower: 0.42,
          taperPower: 0.7,
          color: Rt(t, r.color, 0.22)
        })
      }
    }), [1, -1].forEach((m) => {
      const ht = (ft) => {
        const wt = I(O, ft);
        if (wt <= 0 || wt >= 1)
          return [];
        const xt = P(ft), _t = dt(ft);
        if (!xt || !_t)
          return [];
        const St = m > 0 ? _t.left : _t.right;
        return [xt, Z(St[0], St[1])];
      };
      _({
        name: `${O.id}-beam-edge`,
        polyline: {
          positions: new t.CallbackProperty(ht, !1),
          width: r.sciFiVisuals ? 2.4 : 1.5,
          arcType: t.ArcType.NONE,
          material: new t.PolylineGlowMaterialProperty({
            glowPower: r.sciFiVisuals ? 0.48 : 0.28,
            taperPower: 0.62,
            color: Rt(t, r.color, 0.9)
          })
        }
      }), r.sciFiVisuals && _({
        name: `${O.id}-beam-core`,
        polyline: {
          positions: new t.CallbackProperty(ht, !1),
          width: 1.2,
          arcType: t.ArcType.NONE,
          material: j
        }
      });
    }), r.sciFiVisuals && (_({
      name: `${O.id}-beam-curtain`,
      polygon: {
        hierarchy: new t.CallbackProperty((m) => {
          const ht = yt(m), ft = dt(m);
          return ht.length < 2 || !ft ? new t.PolygonHierarchy([]) : new t.PolygonHierarchy([
            ht[0],
            Z(
              ft.left[0],
              ft.left[1]
            ),
            Z(
              ft.right[0],
              ft.right[1]
            )
          ]);
        }, !1),
        perPositionHeight: !0,
        material: z,
        outline: !1
      }
    }), _({
      name: `${O.id}-beam-center`,
      polyline: {
        positions: new t.CallbackProperty(yt, !1),
        width: 1.1,
        arcType: t.ArcType.NONE,
        material: new t.PolylineDashMaterialProperty({
          color: Rt(t, "#ffffff", 0.62),
          dashLength: 12
        })
      }
    }), [0, 1].forEach((m) => {
      const ht = 2.6 + m * 0.35, ft = m * Math.PI, wt = new t.CallbackProperty((xt) => {
        const _t = M(xt, ht, ft);
        return 1100 + m * 900 + _t * 1500;
      }, !1);
      _({
        name: `${O.id}-scan-target-ring-${m + 1}`,
        position: new t.CallbackProperty((xt) => yt(xt)[1], !1),
        ellipse: {
          show: new t.CallbackProperty((xt) => {
            const _t = I(O, xt);
            return _t > 0 && _t < 1;
          }, !1),
          semiMajorAxis: wt,
          semiMinorAxis: wt,
          ...Q ? {} : { height: et + 24 + m * 8 },
          fill: !0,
          material: Rt(
            t,
            r.color,
            m === 0 ? 0.045 : 0.022
          ),
          outline: !0,
          outlineColor: new t.CallbackProperty((xt) => {
            const _t = M(xt, ht, ft);
            return Rt(
              t,
              m === 0 ? "#ffffff" : r.color,
              0.22 + _t * 0.62
            );
          }, !1)
        }
      });
    })), _({
      name: `${O.id}-active-footprint`,
      polygon: {
        ...ut,
        hierarchy: new t.CallbackProperty((m) => {
          const ht = I(O, m);
          if (ht <= 0 || ht >= 1)
            return new t.PolygonHierarchy([]);
          const ft = O.lengthKm > 0 ? v / 2 / O.lengthKm : 0, wt = at(ht - ft), xt = at(ht + ft);
          return new t.PolygonHierarchy(
            nt([
              wt.left[0],
              wt.left[1],
              wt.right[0],
              wt.right[1],
              xt.right[0],
              xt.right[1],
              xt.left[0],
              xt.left[1]
            ])
          );
        }, !1),
        material: D || new t.ColorMaterialProperty(
          new t.CallbackProperty((m) => {
            const ht = 0.25 + M(m, 5.2) * 0.2;
            return Rt(t, r.color, ht);
          }, !1)
        ),
        outline: !1
      }
    }), _({
      name: `${O.id}-scan-front-glow`,
      polyline: {
        positions: new t.CallbackProperty(gt, !1),
        width: r.sciFiVisuals ? 6 : 2,
        material: r.sciFiVisuals ? new t.PolylineGlowMaterialProperty({
          glowPower: 0.55,
          color: Rt(t, r.color, 0.72)
        }) : Rt(t, r.color, 0.96),
        clampToGround: it
      }
    }), r.sciFiVisuals && (_({
      name: `${O.id}-scan-front-core`,
      polyline: {
        positions: new t.CallbackProperty(gt, !1),
        width: 2.2,
        material: tt,
        clampToGround: it
      }
    }), [0.5, 1].forEach((m, ht) => {
      _({
        name: `${O.id}-scan-front-trail-${ht + 1}`,
        polyline: {
          positions: new t.CallbackProperty(
            (ft) => gt(ft, -m),
            !1
          ),
          width: 1,
          material: Rt(
            t,
            r.color,
            ht === 0 ? 0.42 : 0.2
          ),
          clampToGround: it
        }
      });
    })), _({
      name: `${O.id}-scanned-area`,
      polygon: {
        ...ut,
        hierarchy: new t.CallbackProperty((m) => {
          const ht = vt(m);
          return ht.length < 6 ? new t.PolygonHierarchy([]) : new t.PolygonHierarchy(
            nt(ht)
          );
        }, !1),
        material: new t.ColorMaterialProperty(
          new t.CallbackProperty((m) => I(O, m) >= 1 ? Rt(t, r.completedColor, $(r.completedAreaOpacity, 0.22)) : Rt(t, r.color, $(r.scannedAreaOpacity, 0.14)), !1)
        ),
        outline: !1
      }
    }), _({
      name: `${O.id}-scanned-boundary`,
      polyline: {
        positions: new t.CallbackProperty((m) => {
          const ht = vt(m, !0);
          return ht.length < 8 ? [] : st(ht);
        }, !1),
        width: U(r.sciFiVisuals ? 2.3 : 1.7),
        clampToGround: it,
        material: r.sciFiVisuals ? new t.PolylineGlowMaterialProperty({
          glowPower: 0.35,
          color: new t.CallbackProperty((m) => I(O, m) >= 1 ? Rt(t, r.completedColor, 0.92) : Rt(t, r.color, 0.76), !1)
        }) : new t.ColorMaterialProperty(
          new t.CallbackProperty((m) => I(O, m) >= 1 ? Rt(t, r.completedColor, 0.92) : Rt(t, r.color, 0.72), !1)
        )
      }
    });
  }
  function q(O, $) {
    const U = l.t0Sec - Ua, Q = l.t1Sec + ja, B = O.satelliteName || O.satelliteCode || "扫描卫星";
    c = (et) => {
      const it = t.JulianDate.secondsDifference(
        et.currentTime,
        $.sceneStartJd
      );
      let ut = {
        name: "正常飞行",
        desc: `${B} 沿轨道运行，等待成像窗口。`
      };
      if (it >= U && it < Q) {
        let nt = 1;
        it < l.t0Sec ? (nt = Ja((it - U) / Ua), ut = {
          name: "姿态调整中",
          desc: `准备进入北京时间 ${ro(
            $.windowStart
          )} 成像窗口。`
        }) : it < l.t1Sec ? ut = {
          name: "对地扫描中",
          desc: `北京时间 ${ro(
            $.windowStart
          )} ~ ${ro(
            $.windowEnd
          )}，侧摆 ${l.roll.toFixed(3)}°，幅宽 ${l.swathWidthKm.toFixed(
            3
          )} km。`
        } : (nt = Ja(
          1 - (it - l.t1Sec) / ja
        ), ut = {
          name: "姿态恢复中",
          desc: "成像窗口已结束，扫描区域保留显示。"
        }), d = l.roll * nt;
      } else it >= Q ? (d = 0, ut = {
        name: "任务完成",
        desc: "本次成像窗口已完成，扫描条带已保留。"
      }) : d = 0;
      const Z = ut.name !== p;
      Z && (p = ut.name, T("phase-change", ut));
      const st = Date.now();
      if (Z || st - x >= Math.max(50, r.progressIntervalMs)) {
        x = st;
        const nt = I(l, et.currentTime);
        T("progress", {
          progress: nt,
          percent: Math.round(nt * 1e3) / 10,
          currentTime: t.JulianDate.toDate(et.currentTime),
          phase: ut
        });
      }
    }, e.clock.onTick.addEventListener(c), c(e.clock);
  }
  function K({ emitClear: O = !0 } = {}) {
    const $ = S();
    if ($ && c)
      try {
        e.clock?.onTick?.removeEventListener(c);
      } catch {
      }
    if (c = null, $ && a && i)
      try {
        e.trackedEntity === a && (e.trackedEntity = void 0);
      } catch {
      }
    const U = new Set(f);
    $ && f.forEach((Q) => {
      try {
        e.entities?.remove(Q);
      } catch {
      }
    }), u = u.filter((Q) => !U.has(Q)), f = [], a?.path && (a.path.show = !0), i = !1, s = null, l = null, d = 0, p = "", x = 0, O && T("clear");
  }
  function J() {
    K({ emitClear: !1 }), S() && u.forEach(($) => {
      try {
        e.entities?.remove($);
      } catch {
      }
    }), u = [], o = null, a = null, i = !1, g = null, T("clear");
  }
  function L(O, $ = {}) {
    const U = We(O);
    h = U, r = Je($, r), J();
    const Q = r.satelliteEntity || null, B = Q?.position || null, et = !!B, it = Ro(U, {
      requireOrbit: !1,
      satelliteEntity: Q
    });
    if (!r.enabled || !S() || !t || !et || !it.valid)
      return null;
    const ut = C(U);
    if (o = B, a = Q, E(U), l = G(U, ut), l.trackLeft.length < 2 || l.trackRight.length < 2)
      return J(), null;
    if (F(l), q(U, ut), r.autoTrack)
      try {
        e.trackedEntity = a, i = !0;
      } catch {
      }
    else r.autoFlyToTask !== !1 && N();
    e.scene?.requestRender?.();
    const Z = {
      count: 1,
      satellite: a,
      task: {
        id: l.id,
        start: ut.windowStart,
        end: ut.windowEnd,
        roll: l.roll,
        swathWidthKm: l.swathWidthKm,
        lengthKm: l.lengthKm,
        footprintSource: l.footprintSource,
        diagnostics: l.diagnostics
      }
    };
    return T("ready", Z), Z;
  }
  function V(O = {}) {
    return L(h, O);
  }
  function y() {
    if (!S() || r.manageClock === !1)
      return !1;
    try {
      return e.clock.currentTime = e.clock.startTime.clone(), e.clock.shouldAnimate = !0, d = 0, p = "", x = 0, !r.autoTrack && r.autoFlyToTask !== !1 && N(), e.scene?.requestRender?.(), !0;
    } catch {
      return !1;
    }
  }
  function W() {
    if (!(!S() || !a))
      try {
        e.trackedEntity = a, i = !0;
      } catch {
      }
  }
  function N() {
    if (!(!S() || !s))
      try {
        i && e.trackedEntity === a && (e.trackedEntity = void 0, i = !1);
        const O = Math.max(s.radius * 1.9, 65e3);
        e.camera.flyToBoundingSphere(s, {
          duration: 1.2,
          offset: new t.HeadingPitchRange(
            0,
            t.Math.toRadians(-58),
            O
          )
        });
      } catch {
      }
  }
  function R(O) {
    r.enabled = O, O ? V() : J();
  }
  function X(O = {}) {
    return r = Je(O, r), V();
  }
  return {
    loadTask: L,
    rebuild: V,
    clear: J,
    clearTaskEffects: K,
    restart: y,
    flyToSatellite: W,
    flyToTask: N,
    setEnabled: R,
    setOptions: X,
    setScanVisible: k,
    getSatelliteEntity() {
      return a;
    },
    getTask() {
      return l;
    },
    getTaskBoundingSphere() {
      return s;
    },
    getPlan() {
      return h;
    }
  };
}
const ti = [
  "#ffd166",
  "#35d7ff",
  "#ff7b9c",
  "#8ce99a",
  "#b197fc",
  "#ffa94d"
];
function ei(e, t) {
  const n = We(e);
  let r;
  try {
    r = t?.(n);
  } catch {
    r = void 0;
  }
  return String(
    r ?? n?.satelliteCode ?? n?.satelliteId ?? n?.satelliteEntity?.id ?? n?.satelliteName ?? n?.id ?? ""
  ).trim();
}
function ch(e, t, n) {
  const r = We(e);
  let o;
  try {
    o = n?.(r, t);
  } catch {
    o = void 0;
  }
  const a = Lt(r?.windowStartTime), i = Lt(r?.windowEndTime), s = String(
    o ?? r?.id ?? (a && i ? `${a.getTime()}-${i.getTime()}` : "")
  ).trim();
  return t && s ? `${t}::${s}` : "";
}
function dh(e, t) {
  const n = Lt(e?.windowStartTime), r = Lt(e?.windowEndTime), o = Lt(t?.windowStartTime), a = Lt(t?.windowEndTime);
  return !n || !r || !o || !a ? !1 : n.getTime() < a.getTime() && o.getTime() < r.getTime();
}
function uh(e, t, n) {
  const r = e.map((c) => Lt(c.task.windowStartTime)).filter(Boolean), o = e.map((c) => Lt(c.task.windowEndTime)).filter(Boolean);
  if (!r.length || !o.length)
    return;
  const a = new Date(
    Math.min(...r.map((c) => c.getTime()))
  ), i = new Date(
    Math.max(...o.map((c) => c.getTime()))
  ), s = Zt(a, -Math.max(0, t)), l = Zt(i, Math.max(0, n));
  e.forEach((c) => {
    c.task = {
      ...c.task,
      orbitStartTime: s,
      orbitEndTime: l
    };
  });
}
function C0(e, t, n = {}) {
  let r = Ya(n, {
    ...Te,
    colors: ti
  });
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let i = 0, s = null, l = null;
  function c(E) {
    if (r.manageClock !== !0 || !e?.clock || !t) {
      s = null;
      return;
    }
    const G = E.map((X) => ({
      start: Lt(X.windowStartTime),
      end: Lt(X.windowEndTime)
    })).filter(
      ({ start: X, end: O }) => X && O && O.getTime() > X.getTime()
    );
    if (!G.length) {
      s = null;
      return;
    }
    const I = new Date(
      Math.min(...G.map(({ start: X }) => X.getTime()))
    ), F = new Date(
      Math.max(...G.map(({ end: X }) => X.getTime()))
    ), q = Number(r.startBufferSeconds), K = Number(r.stopBufferSeconds), J = Number(r.speed), L = Number.isFinite(q) ? Math.max(0, q) : Te.startBufferSeconds, V = Number.isFinite(K) ? Math.max(0, K) : Te.stopBufferSeconds, y = Zt(I, -L), W = Zt(F, V), N = t.JulianDate.fromDate(y), R = t.JulianDate.fromDate(W);
    e.clock.startTime = N.clone(), e.clock.stopTime = R.clone(), e.clock.currentTime = N.clone(), e.clock.clockRange = t.ClockRange.CLAMPED, e.clock.multiplier = Number.isFinite(J) && J > 0 ? J : Te.speed, e.clock.shouldAnimate = !0, e.timeline?.zoomTo?.(N, R), s = N.clone();
  }
  function d() {
    return !s || !e?.clock ? !1 : (e.clock.currentTime = s.clone(), e.clock.shouldAnimate = !0, e.scene?.requestRender?.(), !0);
  }
  function u(E, G, I) {
    if (G.satelliteEntity)
      return G.satelliteEntity;
    if (E.satelliteEntity)
      return E.satelliteEntity;
    try {
      return r.resolveSatelliteEntity?.(E, I) || null;
    } catch {
      return null;
    }
  }
  function f(E, G, I, F, q) {
    try {
      r[E]?.({
        satelliteKey: G,
        taskKey: I,
        task: F,
        ...q && typeof q == "object" ? q : {}
      });
    } catch {
    }
  }
  function h(E, G, I, F, q) {
    const K = {
      index: E,
      satelliteKey: G,
      taskKey: I,
      input: F,
      errors: Array.isArray(q) ? q : [String(q)]
    };
    try {
      r.onTaskError?.(K);
    } catch {
    }
    return K;
  }
  function g(E, G, I, F, q, K = null) {
    const J = Je(F), L = K || u(I, J, E), V = J.color || I.scanTask?.activeScanColor || I.color || q;
    return {
      ...r,
      ...J,
      satelliteEntity: L,
      color: V,
      completedColor: J.completedColor || I.scanTask?.completedScanColor || I.completedColor || V,
      // 子任务只消费统一时间，不能单独争抢全局时钟或镜头。
      manageClock: !1,
      autoTrack: !1,
      autoFlyToTask: !1,
      onReady(y) {
        try {
          J.onReady?.(y);
        } catch {
        }
        f("onTaskReady", E, G, I, y);
      },
      onClear() {
        try {
          J.onClear?.();
        } catch {
        }
      },
      onPhaseChange(y) {
        try {
          J.onPhaseChange?.(y);
        } catch {
        }
        f("onTaskPhaseChange", E, G, I, {
          phase: y
        });
      },
      onProgress(y) {
        try {
          J.onProgress?.(y);
        } catch {
        }
        f("onTaskProgress", E, G, I, y);
      }
    };
  }
  function p(E, G, I = {}) {
    const F = We(E), q = ei(F, r.keyResolver);
    if (!q || !G || !Ju(F))
      return null;
    const K = a.get(q) || null, J = Array.isArray(r.colors) && r.colors.length ? r.colors : ti, L = J[i++ % J.length], V = K ? {
      ...I,
      // 地面投影点属于卫星级装饰，只由首个资源管理器创建一次。
      showGroundProjectionPoint: !1
    } : I, y = g(
      q,
      G,
      F,
      V,
      L,
      K?.satelliteEntity || null
    ), W = lh(
      e,
      t,
      y
    );
    if (!W.loadTask(F, y))
      return W.clear(), null;
    const R = W.getSatelliteEntity(), X = K || {
      satelliteKey: q,
      satelliteEntity: R,
      resourceManager: W,
      taskKeys: /* @__PURE__ */ new Set()
    };
    K || a.set(q, X), X.taskKeys.add(G);
    const O = {
      satelliteKey: q,
      taskKey: G,
      plan: F,
      manager: W,
      color: y.color,
      satelliteEntity: R,
      taskOptions: I
    };
    return o.set(G, O), O;
  }
  function x(E, G = {}) {
    const I = [];
    if (!Array.isArray(E))
      return I.push(
        h(-1, "", "", E, [
          "loadTasks() 参数必须是任务数组。"
        ])
      ), {
        successfulTasks: [],
        failedTasks: I,
        loadedCount: 0,
        failedCount: I.length
      };
    if (r.enabled === !1)
      return G.replace !== !1 && M(), {
        successfulTasks: [],
        failedTasks: I,
        loadedCount: 0,
        failedCount: 0
      };
    const F = [], q = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map();
    E.forEach((B, et) => {
      const it = We(B), ut = ei(
        it,
        r.keyResolver
      );
      if (!it) {
        I.push(
          h(et, "", "", B, ["任务必须是有效对象。"])
        );
        return;
      }
      if (!ut) {
        I.push(
          h(et, "", "", B, [
            "satellite.id、satellite.code、satellite.cesiumEntity.id 或 satellite.name 至少提供一个。"
          ])
        );
        return;
      }
      const Z = ch(
        it,
        ut,
        r.taskKeyResolver
      );
      if (!Z) {
        I.push(
          h(et, ut, "", B, [
            "scanTask.taskId 或有效的 startTime/endTime 至少需要提供一组，用于生成任务唯一键。"
          ])
        );
        return;
      }
      if (q.has(Z)) {
        I.push(
          h(et, ut, Z, B, [
            `同一批任务中 taskKey=${Z} 重复。相同卫星可以重复，但每次扫描必须使用不同 taskId 或不同时间窗口。`
          ])
        );
        return;
      }
      q.add(Z);
      let st;
      try {
        st = typeof G.taskOptions == "function" ? G.taskOptions(it, et) || {} : G.taskOptions || {};
      } catch (b) {
        I.push(
          h(et, ut, Z, B, [
            `taskOptions 解析失败：${b instanceof Error ? b.message : String(b)}`
          ])
        );
        return;
      }
      const nt = Je(st), rt = u(
        it,
        nt,
        ut
      );
      if (!rt?.position) {
        I.push(
          h(et, ut, Z, B, [
            "条带扫描组件不会创建卫星。请通过 satellite.cesiumEntity 或 resolveSatelliteEntity 提供场景中已有且带 position 的卫星 Entity。"
          ])
        );
        return;
      }
      const ct = K.get(ut);
      if (ct && ct !== rt) {
        I.push(
          h(et, ut, Z, B, [
            `同一 satelliteKey=${ut} 解析到了不同的 Cesium Entity。多次扫描必须挂载到同一个卫星实体。`
          ])
        );
        return;
      }
      K.set(ut, rt);
      const w = Ro(it, {
        requireOrbit: !1,
        satelliteEntity: rt
      });
      if (!w.valid) {
        I.push(
          h(
            et,
            ut,
            Z,
            B,
            w.errors
          )
        );
        return;
      }
      F.push({
        index: et,
        input: B,
        task: w.normalizedTask,
        satelliteKey: ut,
        taskKey: Z,
        taskOptions: {
          ...st,
          satelliteEntity: rt
        }
      });
    });
    const J = G.replace !== !1, L = new Set(F.map((B) => B.taskKey)), y = [...J ? [] : [...o.values()].filter((B) => !L.has(B.taskKey)).map((B) => ({
      index: -1,
      input: B.plan,
      task: B.plan,
      satelliteKey: B.satelliteKey,
      taskKey: B.taskKey,
      taskOptions: B.taskOptions || {},
      retained: !0
    })), ...F], W = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map();
    y.forEach((B) => {
      const et = N.get(B.satelliteKey) || [], it = et.find(
        (ut) => dh(ut.task, B.task)
      );
      if (it) {
        W.add(B.taskKey), B.retained || I.push(
          h(
            B.index,
            B.satelliteKey,
            B.taskKey,
            B.input,
            [
              `卫星 ${B.satelliteKey} 的任务时间与 taskKey=${it.taskKey} 重叠。请调整 startTime/endTime。`
            ]
          )
        );
        return;
      }
      et.push(B), N.set(B.satelliteKey, et);
    });
    const R = y.filter(
      (B) => !W.has(B.taskKey)
    ), X = /* @__PURE__ */ new Map();
    R.forEach((B) => {
      const et = X.get(B.satelliteKey) || [];
      et.push(B), X.set(B.satelliteKey, et);
    });
    const O = Number.isFinite(Number(r.startBufferSeconds)) ? Number(r.startBufferSeconds) : Te.startBufferSeconds, $ = Number.isFinite(Number(r.stopBufferSeconds)) ? Number(r.stopBufferSeconds) : Te.stopBufferSeconds;
    X.forEach(
      (B) => uh(B, O, $)
    ), M(), c(R.map((B) => B.task));
    const U = [];
    R.forEach((B) => {
      const et = p(B.task, B.taskKey, B.taskOptions);
      if (!et) {
        B.retained || I.push(
          h(
            B.index,
            B.satelliteKey,
            B.taskKey,
            B.input,
            [
              "任务参数已通过校验，但轨道传播或地面投影没有生成有效几何。请检查任务时刻是否位于卫星 position 可用范围内。"
            ]
          )
        );
        return;
      }
      B.retained || U.push({
        satelliteKey: et.satelliteKey,
        taskKey: et.taskKey,
        task: et.plan,
        satelliteEntity: et.manager.getSatelliteEntity()
      });
    }), S();
    const Q = [
      ...new Map(
        U.map((B) => [B.satelliteKey, B.satelliteEntity])
      ).values()
    ];
    if (r.autoTrack === !0 && Q.length === 1) {
      const B = Q[0];
      if (B && e)
        try {
          e.trackedEntity = B, l = B;
        } catch {
          l = null;
        }
    } else r.autoFlyToTask === !0 && U.length && P();
    return {
      successfulTasks: U,
      failedTasks: I,
      loadedCount: U.length,
      failedCount: I.length
    };
  }
  function S() {
    if (!l || !e) {
      l = null;
      return;
    }
    try {
      e.trackedEntity === l && (e.trackedEntity = void 0);
    } catch {
    }
    l = null;
  }
  function T(E) {
    const G = String(E ?? "").trim(), I = o.get(G);
    if (!I)
      return !1;
    const F = a.get(I.satelliteKey) || null;
    o.delete(G), F?.taskKeys.delete(G);
    const q = !!F?.taskKeys.size;
    return !q && I.manager.getSatelliteEntity() === l && S(), F?.resourceManager === I.manager && q ? I.manager.clearTaskEffects() : I.manager.clear(), F && !q && (F.resourceManager !== I.manager && F.resourceManager?.clear(), a.delete(I.satelliteKey)), f(
      "onTaskRemoved",
      I.satelliteKey,
      I.taskKey,
      I.plan,
      {}
    ), !0;
  }
  function M() {
    S(), [...o.keys()].forEach(T), a.forEach((E) => E.resourceManager?.clear()), a.clear(), s = null;
  }
  function A(E) {
    return o.get(String(E ?? "").trim()) || null;
  }
  function _(E, G) {
    const I = A(E);
    return I ? (I.manager.setScanVisible(G), !0) : !1;
  }
  function k(E) {
    const G = String(E ?? "").trim(), I = a.get(G);
    return I ? (I.resourceManager.flyToSatellite(), !0) : !1;
  }
  function C(E) {
    const G = A(E);
    return G ? (G.manager.flyToTask(), !0) : !1;
  }
  function P() {
    const E = [...o.values()].map((I) => I.manager.getTaskBoundingSphere()).filter(Boolean);
    if (E.length && e?.camera && t?.BoundingSphere)
      try {
        const I = t.BoundingSphere.fromBoundingSpheres(
          E,
          new t.BoundingSphere()
        ), F = Math.max(I.radius * 1.9, 65e3);
        return e.camera.flyToBoundingSphere(I, {
          duration: 1.2,
          offset: new t.HeadingPitchRange(
            0,
            t.Math.toRadians(-58),
            F
          )
        }), !0;
      } catch {
      }
    const G = [...a.values()].map((I) => I.satelliteEntity).filter(Boolean);
    if (!G.length || !e?.flyTo)
      return !1;
    try {
      return e.flyTo(G, { duration: 1.2 }), !0;
    } catch {
      return !1;
    }
  }
  function H(E = {}) {
    r = Ya(E, r), r.autoTrack !== !0 && S();
  }
  return {
    // 唯一加载入口：一条数组数据对应一次扫描，相同 satelliteKey 复用卫星。
    loadTasks: x,
    stopTask: T,
    clear: M,
    destroy: M,
    setTaskVisible: _,
    flyToSatellite: k,
    flyToTask: C,
    flyToAll: P,
    restartTimeline: d,
    setOptions: H,
    getTask(E) {
      return A(E)?.plan || null;
    },
    getSatelliteEntity(E) {
      return a.get(String(E ?? "").trim())?.satelliteEntity || null;
    },
    listTasks() {
      return [...o.values()].map((E) => ({
        satelliteKey: E.satelliteKey,
        taskKey: E.taskKey,
        task: E.plan,
        color: E.color,
        satelliteEntity: E.manager.getSatelliteEntity()
      }));
    },
    get size() {
      return o.size;
    },
    get satelliteCount() {
      return a.size;
    }
  };
}
const hh = {
  shp: "/libs/case_list/ShpLayer/shp/china.shp",
  dbf: "/libs/case_list/ShpLayer/shp/china.dbf",
  prj: "/libs/case_list/ShpLayer/shp/china.prj"
}, fh = {
  lon: 104,
  lat: 35,
  height: 18e6,
  heading: 0,
  pitch: -90,
  roll: 0
}, gh = {
  dataSourceName: "china-shp",
  color: "#48ff73",
  width: 2,
  clampToGround: !0,
  flyTo: !0,
  flyDuration: 1.2
};
function ph(e = {}) {
  if (typeof e == "string") {
    const t = e.replace(/\/$/, "");
    return {
      shp: `${t}/china.shp`,
      dbf: `${t}/china.dbf`,
      prj: `${t}/china.prj`
    };
  }
  return {
    ...hh,
    ...e || {}
  };
}
function mh(e = {}) {
  return e.source || e.files ? e.source || e.files : Object.fromEntries(
    ["shp", "dbf", "prj"].filter((t) => e[t] !== void 0 && e[t] !== null).map((t) => [t, e[t]])
  );
}
function yh(e) {
  const t = new DataView(e), n = t.getInt32(32, !0);
  if (n !== 3)
    throw new Error(
      `当前示例仅支持 PolyLine SHP，实际类型为 ${n}。`
    );
  const r = [];
  let o = 100;
  for (; o + 12 <= t.byteLength; ) {
    const a = t.getInt32(o + 4, !1) * 2, i = o + 8;
    if (a <= 0 || i + a > t.byteLength)
      break;
    if (t.getInt32(i, !0) === 3) {
      const l = t.getInt32(i + 36, !0), c = t.getInt32(i + 40, !0), d = i + 44, u = d + l * 4;
      if (l < 0 || c < 0 || u + c * 16 > i + a)
        throw new Error("SHP PolyLine 记录数据不完整。");
      const f = [];
      for (let h = 0; h < l; h += 1)
        f.push(t.getInt32(d + h * 4, !0));
      f.push(c);
      for (let h = 0; h < l; h += 1) {
        const g = f[h], p = f[h + 1];
        if (g < 0 || p > c || g >= p) continue;
        const x = [];
        for (let S = g; S < p; S += 1) {
          const T = u + S * 16;
          x.push([
            t.getFloat64(T, !0),
            t.getFloat64(T + 8, !0)
          ]);
        }
        x.length > 1 && r.push(x);
      }
    }
    o += 8 + a;
  }
  return r;
}
function xh(e = "") {
  if (!e.includes("Lambert_Conformal_Conic")) return (g, p) => [g, p];
  const n = 6378245, r = 1 / 298.3, o = Math.sqrt(2 * r - r * r), a = 105 * Math.PI / 180, i = 0, s = 30 * Math.PI / 180, l = 62 * Math.PI / 180, c = (g) => Math.cos(g) / Math.sqrt(1 - o ** 2 * Math.sin(g) ** 2), d = (g) => {
    const p = Math.sin(g);
    return Math.tan(Math.PI / 4 - g / 2) / ((1 - o * p) / (1 + o * p)) ** (o / 2);
  }, u = (Math.log(c(s)) - Math.log(c(l))) / (Math.log(d(s)) - Math.log(d(l))), f = c(s) / (u * d(s) ** u), h = n * f * d(i) ** u;
  return (g, p) => {
    const x = Math.sign(u) * Math.sqrt(g * g + (h - p) ** 2), S = Math.atan2(g, h - p), T = (x / (n * f)) ** (1 / u);
    let M = Math.PI / 2 - 2 * Math.atan(T);
    for (let A = 0; A < 10; A += 1) {
      const _ = Math.sin(M);
      M = Math.PI / 2 - 2 * Math.atan(
        T * ((1 - o * _) / (1 + o * _)) ** (o / 2)
      );
    }
    return [
      (a + S / u) * 180 / Math.PI,
      M * 180 / Math.PI
    ];
  };
}
function N0(e, t, n = {}) {
  let r = null, o = 0, a = 0;
  const i = mh(n);
  function s(f) {
    n.onStatusChange?.(f), n.onLineCountChange?.(o), e?.scene?.requestRender?.();
  }
  async function l(f, h) {
    if (!h) return { key: f, buffer: null, text: "" };
    const g = await fetch(h);
    if (!g.ok)
      throw new Error(`${f.toUpperCase()} 文件加载失败：${g.status}`);
    const p = await g.arrayBuffer();
    return {
      key: f,
      buffer: p,
      text: f === "prj" ? new TextDecoder().decode(p) : ""
    };
  }
  function c(f = !0) {
    a += 1, e && r && e.dataSources.remove(r, !0), r = null, o = 0, f && s("已清除 SHP 图层。");
  }
  async function d(f = i, h = {}) {
    if (!e || !t) return null;
    c(!1);
    const g = ++a, p = ph(f), x = {
      ...gh,
      ...n,
      ...h
    };
    n.onError?.(null), s("正在读取 SHP / DBF / PRJ 文件。");
    try {
      const [S, , T] = await Promise.all([
        l("shp", p.shp),
        l("dbf", p.dbf),
        l("prj", p.prj)
      ]);
      if (g !== a || !S.buffer) return null;
      s("正在解析 SHP 线要素。");
      const M = yh(S.buffer), A = xh(T.text);
      if (g !== a || e.isDestroyed?.()) return null;
      s("正在生成 Cesium 线图层。");
      const _ = new t.CustomDataSource(
        x.dataSourceName || "shp-layer"
      ), k = t.Color.fromCssColorString(x.color);
      return M.forEach((C, P) => {
        const H = C.flatMap(([E, G]) => A(E, G));
        _.entities.add({
          id: `${x.dataSourceName || "shp-line"}-${P}`,
          polyline: {
            positions: t.Cartesian3.fromDegreesArray(H),
            width: Number(x.width) || 2,
            clampToGround: !!x.clampToGround,
            material: k
          }
        });
      }), g !== a ? (_.destroy?.(), null) : (e.dataSources.add(_), r = _, o = M.length, s(`已加载 SHP 图层，共 ${o.toLocaleString()} 条线。`), x.flyTo && e.flyTo(r, {
        duration: Number(x.flyDuration) || 1.2
      }), r);
    } catch (S) {
      return g !== a || (n.onError?.(S), s("SHP 图层加载失败。")), null;
    }
  }
  function u(f = {}) {
    if (!e || !t) return;
    const h = { ...fh, ...f }, g = Number(h.heading), p = Number(h.pitch), x = Number(h.roll);
    e.camera.setView({
      destination: t.Cartesian3.fromDegrees(
        Number(h.lon ?? h.lng ?? h.longitude),
        Number(h.lat ?? h.latitude),
        Number(h.height ?? h.alt)
      ),
      orientation: {
        heading: t.Math.toRadians(Number.isFinite(g) ? g : 0),
        pitch: t.Math.toRadians(Number.isFinite(p) ? p : -90),
        roll: t.Math.toRadians(Number.isFinite(x) ? x : 0)
      }
    });
  }
  return {
    loadShpLayer: d,
    clearShpLayer: c,
    focusScene: u,
    getDataSource: () => r,
    getLineCount: () => o,
    destroy: () => c(!1)
  };
}
const ni = "creatspace-signboard-styles", bh = `
.point-popup {
  position: absolute;
  z-index: 3;
  width: 0;
  height: 0;
  --card-left: 68px;
  --card-bottom: 88px;
  --line-length: 112px;
  --line-angle: -52deg;
  transition: opacity 0.2s ease, transform 0.2s ease;
  filter: drop-shadow(0 28px 30px rgba(0, 0, 0, 0.42));
}

.point-popup .point-popup__line {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--line-length);
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(124, 230, 255, 0),
    #72f6ff 24%,
    #72f6ff 100%
  );
  box-shadow: 0 0 10px rgba(101, 241, 255, 0.72),
    0 0 22px rgba(53, 132, 255, 0.42);
  transform: rotate(var(--line-angle));
  transform-origin: 0 50%;
  pointer-events: none;
}

.point-popup .point-popup__card {
  position: absolute;
  left: var(--card-left);
  bottom: var(--card-bottom);
  width: min(360px, calc(100vw - 32px));
  overflow: hidden;
  max-height: min(420px, 58vh);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  padding: 14px 0 0;
  border: 1px solid rgba(100, 234, 255, 0.58);
  border-radius: 8px;
  color: #e9fbff;
  background: linear-gradient(
      90deg,
      rgba(95, 239, 255, 0.18),
      transparent 18%,
      transparent 82%,
      rgba(95, 239, 255, 0.12)
    ),
    linear-gradient(135deg, rgba(120, 242, 255, 0.26), transparent 22%)
      border-box,
    radial-gradient(circle at 20% 0%, rgba(98, 229, 255, 0.2), transparent 34%),
    radial-gradient(
      circle at 100% 100%,
      rgba(34, 106, 255, 0.18),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(7, 31, 50, 0.78),
      rgba(3, 14, 27, 0.7) 52%,
      rgba(2, 10, 22, 0.78)
    );
  box-shadow: 0 0 0 1px rgba(118, 238, 255, 0.14),
    0 0 28px rgba(70, 205, 255, 0.2), 0 20px 46px rgba(0, 0, 0, 0.48),
    0 34px 90px rgba(0, 0, 0, 0.36), -8px -8px 24px rgba(73, 222, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 0 34px rgba(40, 169, 255, 0.18),
    inset 0 -1px 0 rgba(110, 239, 255, 0.16);
  backdrop-filter: blur(16px) saturate(1.28);
  transform-origin: left bottom;
}

.point-popup .point-popup__card::selection {
  background: rgba(101, 241, 255, 0.24);
}

.point-popup .point-popup__card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      115deg,
      transparent 0%,
      rgba(127, 244, 255, 0.13) 42%,
      transparent 56%
    ),
    linear-gradient(rgba(113, 233, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(113, 233, 255, 0.06) 1px, transparent 1px);
  background-size: 100% 100%, 18px 18px, 18px 18px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.72), transparent 76%);
  pointer-events: none;
}

.point-popup .point-popup__card::after {
  content: "";
  position: absolute;
  left: 12px;
  right: 42px;
  top: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(101, 241, 255, 0.98),
    rgba(255, 255, 255, 0.9),
    transparent
  );
  box-shadow: 0 0 16px rgba(101, 241, 255, 0.84),
    0 0 30px rgba(53, 132, 255, 0.5);
  pointer-events: none;
}

.point-popup .point-popup__corner {
  position: absolute;
  width: 42px;
  height: 42px;
  pointer-events: none;
  opacity: 0.96;
  filter: drop-shadow(0 0 6px rgba(101, 241, 255, 0.62))
    drop-shadow(0 0 16px rgba(45, 160, 255, 0.24));
}

.point-popup .point-popup__corner::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #7bf6ff;
  box-shadow: 0 0 8px rgba(101, 241, 255, 0.9),
    0 0 18px rgba(45, 160, 255, 0.55);
}

.point-popup .point-popup__corner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      90deg,
      rgba(125, 244, 255, 0.92),
      rgba(125, 244, 255, 0.16) 58%,
      transparent 78%
    ),
    linear-gradient(
      180deg,
      rgba(125, 244, 255, 0.92),
      rgba(125, 244, 255, 0.16) 58%,
      transparent 78%
    );
  mask: linear-gradient(#000 0 0) top left / 100% 1px no-repeat,
    linear-gradient(#000 0 0) top left / 1px 100% no-repeat;
}

.point-popup .point-popup__corner--tl {
  left: 9px;
  top: 9px;
}

.point-popup .point-popup__corner--tl::after {
  left: -1px;
  top: -1px;
}

.point-popup .point-popup__corner--bl {
  left: 9px;
  bottom: 9px;
  transform: scaleY(-1);
}

.point-popup .point-popup__corner--bl::after {
  left: -1px;
  top: -1px;
}

.point-popup .point-popup__body::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(101, 241, 255, 0.7),
    transparent
  );
  box-shadow: 0 0 16px rgba(101, 241, 255, 0.5);
  pointer-events: none;
}

.point-popup .point-popup__card h3 {
  position: relative;
  margin: 0 44px 10px 0;
  padding: 0 15px 0 22px;
  color: #ffffff;
  cursor: grab;
  font-size: 15px;
  line-height: 1.35;
  letter-spacing: 0;
  text-shadow: 0 0 14px rgba(101, 241, 255, 0.42);
  touch-action: none;
  user-select: none;
}

.point-popup .point-popup__card h3:active {
  cursor: grabbing;
}

.point-popup .point-popup__body {
  position: relative;
  min-height: 0;
  overflow: auto;
  padding: 0 15px;
}

.point-popup .point-popup__body::-webkit-scrollbar {
  width: 5px;
}

.point-popup .point-popup__body::-webkit-scrollbar-track {
  background: rgba(80, 190, 255, 0.08);
}

.point-popup .point-popup__body::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(101, 241, 255, 0.42);
}

.point-popup .point-popup__actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 6px;
  border-top: 1px solid rgba(111, 218, 255, 0.16);
  background: transparent;
}

.point-popup .point-popup__action {
  box-sizing: border-box;
  min-width: 62px;
  height: 26px;
  padding: 0 9px;
  border: 1px solid rgba(101, 241, 255, 0.3);
  border-radius: 4px;
  color: rgba(225, 250, 255, 0.9);
  background: rgba(6, 34, 52, 0.72);
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  font-weight: 400;
  line-height: 24px;
  transition: border-color 0.18s ease, background 0.18s ease,
    box-shadow 0.18s ease;
}

.point-popup .point-popup__action:hover:not(:disabled) {
  border-color: rgba(101, 241, 255, 0.78);
  background: rgba(17, 77, 100, 0.82);
  box-shadow: 0 0 14px rgba(101, 241, 255, 0.2);
}

.point-popup .point-popup__action--primary {
  color: #ffffff;
  border-color: rgba(101, 241, 255, 0.68);
  background: linear-gradient(
    135deg,
    rgba(16, 123, 159, 0.9),
    rgba(12, 76, 115, 0.9)
  );
}

.point-popup .point-popup__action:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.point-popup .point-popup__card dl {
  position: relative;
  display: grid;
  grid-template-columns: minmax(64px, 0.45fr) minmax(0, 1fr);
  gap: 0;
  margin: 0;
  padding: 8px 0 2px;
  border-top: 1px solid rgba(111, 218, 255, 0.16);
}

.point-popup .point-popup__card dt {
  min-height: 30px;
  display: flex;
  align-items: center;
  padding: 7px 8px 7px 0;
  border-bottom: 1px solid rgba(111, 218, 255, 0.08);
  color: rgba(159, 218, 255, 0.68);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.35;
  white-space: nowrap;
}

.point-popup .point-popup__card dd {
  min-width: 0;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 7px 0 7px 8px;
  border-bottom: 1px solid rgba(111, 218, 255, 0.08);
  color: #f1fdff;
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.point-popup .point-popup__close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid rgba(101, 241, 255, 0.28);
  border-radius: 4px;
  color: rgba(225, 250, 255, 0.82);
  background: rgba(6, 28, 43, 0.68);
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  box-shadow: inset 0 0 12px rgba(45, 183, 255, 0.08);
}

.point-popup .point-popup__close:hover {
  color: #ffffff;
  border-color: rgba(101, 241, 255, 0.72);
  background: rgba(17, 77, 100, 0.78);
  box-shadow: 0 0 14px rgba(101, 241, 255, 0.24);
}

@media (max-width: 860px) {
  .point-popup {
    --card-left: 28px;
    --card-bottom: 78px;
    --line-length: 83px;
    --line-angle: -70deg;
  }
}
`;
function ls(e = globalThis.document) {
  if (!e?.head)
    return null;
  const t = e.getElementById(ni);
  if (t)
    return t;
  const n = e.createElement("style");
  return n.id = ni, n.textContent = bh, e.head.appendChild(n), n;
}
ls();
function L0(e, t, n = {}) {
  ls();
  const r = n.allowMultiple !== !1, o = {
    left: n.popupDefaults?.left ?? 68,
    bottom: n.popupDefaults?.bottom ?? 88
  }, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), d = [];
  let u = null, f = null, h = 0, g = null, p = null, x = null;
  function S() {
    n.onPopupsChange?.([...d]);
  }
  function T(w) {
    n.onStatusChange?.(w);
  }
  function M() {
    e?.scene?.requestRender?.();
  }
  function A() {
    p === null && (p = requestAnimationFrame(() => {
      p = null, V(), M();
    }));
  }
  function _(w) {
    let b = s.get(w.id);
    return b || (b = {
      canvasPosition: new t.Cartesian2(),
      cardWidth: 360,
      cardHeight: 260,
      sizeReady: !1,
      layoutReady: !1,
      canvasWidth: 0,
      canvasHeight: 0
    }, s.set(w.id, b)), b;
  }
  function k(w, b, v) {
    w && (b.startsWith("--") ? w.style.setProperty(b, v) : w.style[b] = v);
  }
  function C(w, b, v) {
    return w.style[b] === v ? !1 : (w.style[b] = v, k(i.get(w.id), b, v), !0);
  }
  function P(w, b) {
    let v = !1;
    return Object.entries(b).forEach(([D, z]) => {
      v = C(w, D, z) || v;
    }), v;
  }
  function H(w, b) {
    Object.entries(w.style).forEach(([v, D]) => {
      k(b, v, D);
    });
  }
  function E(w) {
    l.get(w)?.disconnect(), l.delete(w), i.delete(w), s.delete(w);
  }
  function G(w) {
    if (!e || !w?.entity)
      return null;
    const b = {
      ...w.entity,
      id: w.entity.id || w.id,
      name: w.entity.name || w.name
    }, v = e.entities.add(b);
    return c.add(v), a.set(v.id, {
      title: w.title || w.name || v.name,
      rows: w.rows || [],
      actions: w.actions || [],
      popupClass: w.popupClass || "",
      popupStyle: w.popupStyle || {},
      position: w.infoPosition,
      meta: w.meta
    }), v;
  }
  function I(w = []) {
    return w.map((b) => G(b)).filter(Boolean);
  }
  function F(w, b = {}) {
    const v = nt(w);
    v && a.set(v, {
      title: b.title,
      rows: b.rows || [],
      actions: b.actions || [],
      popupClass: b.popupClass || "",
      popupStyle: b.popupStyle || {},
      position: b.position || b.infoPosition,
      meta: b.meta
    });
  }
  function q() {
    !e || u || (u = new t.ScreenSpaceEventHandler(e.scene.canvas), u.setInputAction((w) => {
      const v = e.scene.pick(w.position)?.id;
      if (v && a.has(v.id)) {
        J(v);
        return;
      }
      T("未选中已注册的信息对象，已有信息框会保持显示。");
    }, t.ScreenSpaceEventType.LEFT_CLICK));
  }
  function K() {
    u && !u.isDestroyed?.() && u.destroy(), u = null;
  }
  function J(w) {
    const b = st(w);
    if (!b)
      return null;
    const v = a.get(b.id);
    if (!v)
      return null;
    const D = L(b, v);
    if (!D)
      return null;
    if (!r)
      d.forEach((j) => E(j.id)), d.splice(0, d.length);
    else {
      const j = d.findIndex((tt) => tt.entityId === b.id);
      j >= 0 && (E(d[j].id), d.splice(j, 1));
    }
    const z = {
      id: `popup-${b.id}-${++h}`,
      entityId: b.id,
      title: v.title || b.name,
      rows: v.rows,
      actions: v.actions,
      popupClass: v.popupClass,
      position: D,
      style: {
        left: "0px",
        top: "0px",
        opacity: 0,
        pointerEvents: "auto",
        "--card-left": `${o.left}px`,
        "--card-bottom": `${o.bottom}px`,
        "--line-length": "112px",
        "--line-angle": "-52deg",
        ...v.popupStyle
      },
      anchorOffset: {
        left: o.left,
        bottom: o.bottom
      },
      dragged: !1
    };
    return d.push(z), S(), T(
      `已打开 ${v.title || b.name} 信息框，点击关闭按钮或清空按钮关闭。`
    ), A(), z;
  }
  function L(w, b) {
    return b.position ? b.position : w.position?.getValue ? w.position.getValue(e.clock.currentTime) : null;
  }
  function V() {
    if (!e || !d.length)
      return;
    const w = e.scene.canvas, b = e.scene.globe.ellipsoid, D = (b.cartesianToCartographic(
      e.camera.position
    )?.height || 0) + b.maximumRadius;
    let z = !1;
    d.forEach((j) => {
      const tt = _(j), at = e.scene.cartesianToCanvasCoordinates(
        j.position,
        tt.canvasPosition
      );
      if (!t.defined(at) || rt(j.position, D)) {
        const bt = P(j, {
          opacity: 0,
          pointerEvents: "none"
        });
        z ||= !!(bt && !i.has(j.id));
        return;
      }
      const dt = P(j, {
        left: `${Math.round(at.x)}px`,
        top: `${Math.round(at.y)}px`
      }), gt = P(j, {
        opacity: 1,
        pointerEvents: "auto"
      }), yt = tt.canvasWidth !== w.clientWidth || tt.canvasHeight !== w.clientHeight;
      let vt = !1;
      (dt || gt || yt || !tt.layoutReady) && (vt = y(
        j,
        at,
        w,
        tt
      )), z ||= !!((dt || gt || vt) && !i.has(j.id));
    }), z && S();
  }
  function y(w, b, v, D) {
    const z = i.get(w.id), j = z?.querySelector(".point-popup__card");
    if (!z || !j || !v)
      return !1;
    const tt = 16;
    D.sizeReady || (D.cardWidth = j.offsetWidth || 360, D.cardHeight = j.offsetHeight || 260, D.sizeReady = !0);
    const at = D.cardWidth, dt = D.cardHeight, gt = tt - b.x, yt = v.clientWidth - tt - at - b.x, vt = b.y - v.clientHeight + tt, bt = b.y - dt - tt;
    let Pt = w.dragged ? w.anchorOffset.left : o.left, At = w.dragged ? w.anchorOffset.bottom : o.bottom;
    return Pt = ct(Pt, gt, yt), At = ct(At, vt, bt), D.layoutReady = !0, D.canvasWidth = v.clientWidth, D.canvasHeight = v.clientHeight, W(w, Pt, At, at);
  }
  function W(w, b, v, D = 360) {
    const z = b >= 0 ? b : b + D, j = -v, tt = Math.hypot(z, j), at = Math.atan2(j, z) * (180 / Math.PI);
    return P(w, {
      "--card-left": `${Math.round(b)}px`,
      "--card-bottom": `${Math.round(v)}px`,
      "--line-length": `${Math.round(tt)}px`,
      "--line-angle": `${at.toFixed(2)}deg`
    });
  }
  function N(w, b) {
    if (b) {
      if (i.get(w) === b)
        return;
      E(w), i.set(w, b);
      const v = d.find((j) => j.id === w);
      if (!v) {
        i.delete(w);
        return;
      }
      H(v, b);
      const D = _(v), z = b.querySelector(".point-popup__card");
      if (z && typeof ResizeObserver < "u") {
        const j = new ResizeObserver(() => {
          D.sizeReady = !1, D.layoutReady = !1, A();
        });
        j.observe(z), l.set(w, j);
      }
      A();
    } else
      E(w);
  }
  function R(w, b) {
    const v = i.get(b.id), D = v?.querySelector(".point-popup__card"), z = e?.scene?.canvas;
    if (!v || !D || !z || w.button !== 0)
      return;
    w.preventDefault(), w.stopPropagation();
    const j = e.scene.cartesianToCanvasCoordinates(
      b.position,
      new t.Cartesian2()
    );
    if (!t.defined(j))
      return;
    const tt = d.find((at) => at.id === b.id) || b;
    tt.dragged = !0, g = {
      popup: tt,
      canvasPosition: j,
      cardWidth: D.offsetWidth || 360,
      cardHeight: D.offsetHeight || 260,
      startX: w.clientX,
      startY: w.clientY,
      startLeft: tt.anchorOffset.left,
      startBottom: tt.anchorOffset.bottom
    }, $(!1), window.addEventListener("pointermove", X), window.addEventListener("pointerup", O, { once: !0 }), window.addEventListener("pointercancel", O, { once: !0 });
  }
  function X(w) {
    if (!g || !e)
      return;
    const b = e.scene.canvas, v = 16, D = w.clientX - g.startX, z = w.clientY - g.startY, j = v - g.canvasPosition.x, tt = b.clientWidth - v - g.cardWidth - g.canvasPosition.x, at = g.canvasPosition.y - b.clientHeight + v, dt = g.canvasPosition.y - g.cardHeight - v, gt = ct(g.startLeft + D, j, tt), yt = ct(g.startBottom - z, at, dt);
    g.popup.anchorOffset.left = gt, g.popup.anchorOffset.bottom = yt, W(
      g.popup,
      gt,
      yt,
      g.cardWidth
    ), M();
  }
  function O() {
    g = null, U(), window.removeEventListener("pointermove", X), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O);
  }
  function $(w) {
    const b = e?.scene?.screenSpaceCameraController;
    b && (x || (x = {
      enableRotate: b.enableRotate,
      enableTranslate: b.enableTranslate,
      enableZoom: b.enableZoom,
      enableTilt: b.enableTilt,
      enableLook: b.enableLook
    }), b.enableRotate = w, b.enableTranslate = w, b.enableZoom = w, b.enableTilt = w, b.enableLook = w);
  }
  function U() {
    const w = e?.scene?.screenSpaceCameraController;
    !w || !x || (Object.assign(w, x), x = null);
  }
  function Q(w) {
    const b = d.findIndex((v) => v.id === w);
    b < 0 || (d.splice(b, 1), E(w), S(), T(
      d.length ? `当前打开 ${d.length} 个信息框。` : "信息框已关闭，点击场景元素可重新打开。"
    ), M());
  }
  function B() {
    d.splice(0, d.length), l.forEach((w) => w.disconnect()), l.clear(), i.clear(), s.clear(), S(), T("已清空所有信息框，点击任意测试元素可重新打开。"), M();
  }
  function et(w, b, v) {
    const D = typeof w == "string" ? w : w?.id, z = d.find((gt) => gt.id === D);
    if (!z)
      return null;
    const j = typeof b == "string" ? b : b?.key, tt = z.actions.find((gt) => gt.key === j);
    if (!tt || tt.disabled)
      return null;
    const at = a.get(z.entityId), dt = {
      type: "action",
      key: tt.key,
      action: tt,
      popup: z,
      entityId: z.entityId,
      entity: st(z.entityId),
      info: at,
      meta: at?.meta,
      event: v
    };
    return tt.onClick?.(dt), n.onAction?.(dt), tt.closeOnClick && Q(z.id), dt;
  }
  function it(w, b = {}) {
    if (!e || !w)
      return;
    const v = w.destination || t.Cartesian3.fromDegrees(w.lon, w.lat, w.height), D = w.orientation || {
      heading: t.Math.toRadians(w.heading || 0),
      pitch: t.Math.toRadians(w.pitch ?? -60),
      roll: t.Math.toRadians(w.roll || 0)
    };
    e.camera.flyTo({
      destination: v,
      orientation: D,
      duration: b.duration ?? 1.8,
      complete: b.complete,
      cancel: b.cancel
    });
  }
  function ut() {
    c.forEach((w) => {
      e?.entities?.remove(w);
    }), c.clear(), a.clear();
  }
  function Z({ removeEntities: w = !0 } = {}) {
    O(), p !== null && (cancelAnimationFrame(p), p = null), e && f && e.scene.preRender.removeEventListener(f), f = null, K(), B(), w && ut();
  }
  function st(w) {
    return w ? typeof w == "string" ? e?.entities?.getById(w) || null : w : null;
  }
  function nt(w) {
    return w ? typeof w == "string" ? w : w.id : "";
  }
  function rt(w, b) {
    return t.Cartesian3.distance(e.camera.position, w) > b;
  }
  function ct(w, b, v) {
    return b > v ? b : Math.min(Math.max(w, b), v);
  }
  return f = () => V(), e?.scene?.preRender?.addEventListener(f), n.autoBindClick && q(), {
    addInfoEntity: G,
    addInfoEntities: I,
    registerInfo: F,
    bindClick: q,
    unbindClick: K,
    showInfoPopup: J,
    closePopup: Q,
    clearPopups: B,
    updatePopupPositions: V,
    setPopupElement: N,
    startPopupDrag: R,
    triggerPopupAction: et,
    focusTo: it,
    removeManagedEntities: ut,
    destroy: Z,
    getPopups: () => [...d],
    getInfo: (w) => a.get(w),
    getEntity: (w) => e?.entities?.getById(w) || null
  };
}
function I0() {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" fill="rgba(52, 211, 255, 0.10)" stroke="rgba(122, 226, 255, 0.42)" stroke-width="2"/>
      <circle cx="32" cy="32" r="18" fill="rgba(52, 211, 255, 0.16)" stroke="rgba(122, 226, 255, 0.72)" stroke-width="2"/>
      <circle cx="32" cy="32" r="7" fill="#7be7ff" stroke="#ffffff" stroke-width="2"/>
    </svg>`)}`;
}
function R0(e = "#ffcc66") {
  const t = `
    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 3 53 28 28 53 3 28Z" fill="rgba(5, 17, 28, 0.7)" stroke="${e}" stroke-width="2"/>
      <path d="M28 13 43 28 28 43 13 28Z" fill="${e}" fill-opacity="0.24" stroke="${e}" stroke-opacity="0.9"/>
      <circle cx="28" cy="28" r="5" fill="${e}" stroke="#ffffff" stroke-width="2"/>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`;
}
const Xe = {
  STRAIGHT_ARROW: "STRAIGHT_ARROW",
  STRAIGHT_LINE_ARROW: "STRAIGHT_LINE_ARROW"
};
let pn = null;
const zo = [];
function ri(e, t, n) {
  const r = t?.scene;
  if (!(!r || !n)) {
    if (r.pickPositionSupported) {
      const o = r.pickPosition(n);
      if (e.defined(o))
        return o;
    }
    return t.camera.pickEllipsoid(n, r.globe.ellipsoid);
  }
}
function wh(e, t) {
  const n = e.Cartographic.fromCartesian(t);
  return {
    longitude: Number(e.Math.toDegrees(n.longitude).toFixed(6)),
    latitude: Number(e.Math.toDegrees(n.latitude).toFixed(6)),
    height: Number(n.height.toFixed(2))
  };
}
function cs(e, t) {
  const n = t[0], r = e.Transforms.eastNorthUpToFixedFrame(n), o = e.Matrix4.inverse(r, new e.Matrix4());
  return {
    origin: n,
    toLocal: o,
    toWorld: r,
    toLocalPoint(a) {
      return e.Matrix4.multiplyByPoint(o, a, new e.Cartesian3());
    },
    toWorldPoint(a) {
      return e.Matrix4.multiplyByPoint(r, a, new e.Cartesian3());
    }
  };
}
function ke(e, t, n, r, o, a) {
  return new e.Cartesian3(
    t.x + n.x * o + r.x * a,
    t.y + n.y * o + r.y * a,
    t.z + n.z * o + r.z * a
  );
}
function vh(e, t) {
  const n = Math.hypot(t.x, t.y);
  if (!(!Number.isFinite(n) || n <= 0))
    return new e.Cartesian3(t.x / n, t.y / n, 0);
}
function ds(e, t, n) {
  const r = e.Cartesian3.subtract(n, t, new e.Cartesian3()), o = vh(e, r);
  if (!o)
    return;
  const a = Math.hypot(r.x, r.y), i = new e.Cartesian3(-o.y, o.x, 0);
  return { direction: o, normal: i, length: a };
}
function oi(e, t) {
  if (!Array.isArray(t) || t.length < 2)
    return [];
  const [n, r] = t, o = cs(e, [n, r]), a = o.toLocalPoint(n), i = o.toLocalPoint(r), s = ds(e, a, i);
  if (!s)
    return t;
  const { direction: l, normal: c, length: d } = s, u = Math.max(d * 0.1, 6e3), f = Math.max(d * 0.13, 8e3), h = Math.max(d * 0.26, 12e3), g = Math.min(Math.max(d * 0.28, 2e4), d * 0.55), p = Math.max(d - g, d * 0.35);
  return [
    ke(e, a, l, c, 0, u / 2),
    ke(
      e,
      a,
      l,
      c,
      p,
      f / 2
    ),
    ke(
      e,
      a,
      l,
      c,
      p,
      h / 2
    ),
    i,
    ke(
      e,
      a,
      l,
      c,
      p,
      -h / 2
    ),
    ke(
      e,
      a,
      l,
      c,
      p,
      -f / 2
    ),
    ke(e, a, l, c, 0, -u / 2)
  ].map((x) => o.toWorldPoint(x));
}
function ai(e, t) {
  if (!Array.isArray(t) || t.length < 2)
    return [];
  const [n, r] = t, o = cs(e, [n, r]), a = o.toLocalPoint(n), i = o.toLocalPoint(r), s = ds(e, a, i);
  if (!s)
    return t;
  const { direction: l, normal: c, length: d } = s, u = Math.min(Math.max(d * 0.18, 16e3), d * 0.38), f = Math.max(d * 0.08, 7e3), h = ke(
    e,
    i,
    l,
    c,
    -u,
    f
  ), g = ke(
    e,
    i,
    l,
    c,
    -u,
    -f
  );
  return [a, i, h, i, g].map(
    (p) => o.toWorldPoint(p)
  );
}
class us {
  constructor(t, n, r) {
    this.viewer = t, this.Cesium = n, this.dispatcher = r, this.geometryType = "", this.minPointCount = 2, this.positions = [], this.tempCursor = void 0, this.tempEntity = void 0, this.handler = void 0, this.onComplete = void 0;
  }
  getPositions() {
    return this.positions;
  }
  start(t) {
    this.onComplete = t, this.destroyHandler(), this.viewer.scene.globe.depthTestAgainstTerrain = !1, this.viewer.enableCursorStyle = !1, this.viewer._element.style.cursor = "crosshair", this.handler = new this.Cesium.ScreenSpaceEventHandler(this.viewer.canvas), this.handler.setInputAction(
      (n) => this.onLeftClick(n),
      this.Cesium.ScreenSpaceEventType.LEFT_CLICK
    ), this.handler.setInputAction(
      (n) => this.onMouseMove(n),
      this.Cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
  }
  destroy() {
    this.destroyHandler(), this.removeTempEntity(), this.positions = [], this.tempCursor = void 0, this.viewer?._element && (this.viewer._element.style.cursor = "default");
  }
  destroyHandler() {
    this.handler && !this.handler.isDestroyed() && this.handler.destroy(), this.handler = void 0;
  }
  removeTempEntity() {
    this.tempEntity && (this.viewer.entities.remove(this.tempEntity), this.tempEntity = void 0);
  }
  onLeftClick(t) {
    const n = ri(this.Cesium, this.viewer, t.position);
    this.Cesium.defined(n) && (this.positions.push(n), this.removeTempEntity(), this.tempEntity = this.buildTempEntity());
  }
  onMouseMove(t) {
    if (!this.positions.length)
      return;
    const n = ri(this.Cesium, this.viewer, t.endPosition);
    this.Cesium.defined(n) && (this.updateTempEntity(n), this.tempEntity || (this.tempEntity = this.buildTempEntity()));
  }
  finish() {
    if (this.positions.length < this.minPointCount)
      return;
    this.destroyHandler(), this.removeTempEntity();
    const t = this.buildFinalEntity();
    t.geometryType = this.geometryType, t.positionData = [...this.positions], zo.push(t), this.onComplete?.(t, vo()), this.positions = [], this.tempCursor = void 0, this.viewer?._element && (this.viewer._element.style.cursor = "default");
  }
  buildFinalEntity() {
  }
  buildTempEntity() {
  }
  updateTempEntity(t) {
    this.tempCursor = t;
  }
}
class _h extends us {
  constructor(t, n, r) {
    super(t, n, r), this.geometryType = Xe.STRAIGHT_ARROW, this.minPointCount = 2;
  }
  buildFinalEntity() {
    const t = oi(
      this.Cesium,
      this.getPositions()
    );
    return this.viewer.entities.add({
      polygon: new this.Cesium.PolygonGraphics({
        hierarchy: new this.Cesium.CallbackProperty(
          () => ({ positions: t }),
          !1
        ),
        classificationType: this.Cesium.ClassificationType.BOTH,
        material: this.Cesium.Color.BLUE.withAlpha(0.4)
      })
    });
  }
  buildTempEntity() {
    if (!(this.getPositions().length === 0 || !this.tempCursor))
      return this.viewer.entities.add({
        polygon: new this.Cesium.PolygonGraphics({
          hierarchy: new this.Cesium.CallbackProperty(
            () => ({
              positions: oi(this.Cesium, [
                ...this.getPositions(),
                this.tempCursor
              ])
            }),
            !1
          ),
          classificationType: this.Cesium.ClassificationType.BOTH,
          material: this.Cesium.Color.CYAN.withAlpha(0.3)
        })
      });
  }
  onLeftClick(t) {
    super.onLeftClick(t), this.getPositions().length === 2 && this.finish();
  }
}
class Mh extends us {
  constructor(t, n, r) {
    super(t, n, r), this.geometryType = Xe.STRAIGHT_LINE_ARROW, this.minPointCount = 2;
  }
  buildFinalEntity() {
    const t = ai(
      this.Cesium,
      this.getPositions()
    );
    return this.viewer.entities.add({
      polyline: new this.Cesium.PolylineGraphics({
        positions: new this.Cesium.CallbackProperty(
          () => t,
          !1
        ),
        width: 3,
        material: this.Cesium.Color.ORANGE,
        clampToGround: !0
      })
    });
  }
  buildTempEntity() {
    if (!(this.getPositions().length === 0 || !this.tempCursor))
      return this.viewer.entities.add({
        polyline: new this.Cesium.PolylineGraphics({
          positions: new this.Cesium.CallbackProperty(
            () => ai(this.Cesium, [
              ...this.getPositions(),
              this.tempCursor
            ]),
            !1
          ),
          width: 3,
          material: this.Cesium.Color.YELLOW.withAlpha(0.6),
          clampToGround: !0
        })
      });
  }
  onLeftClick(t) {
    super.onLeftClick(t), this.getPositions().length === 2 && this.finish();
  }
}
function Sh(e, t, n) {
  if (n === Xe.STRAIGHT_ARROW)
    return new _h(e, t);
  if (n === Xe.STRAIGHT_LINE_ARROW)
    return new Mh(e, t);
}
function Ph(e, t, n, r) {
  if (e)
    return Go(), pn = Sh(e, t, n), pn?.start(r), pn;
}
function Go() {
  pn?.destroy(), pn = null;
}
function Eh(e) {
  Go(), zo.splice(0).forEach((t) => e?.entities.remove(t));
}
function vo(e) {
  return zo.map((t, n) => ({
    id: t.id,
    index: n,
    type: t.geometryType || "UNKNOWN",
    coordinates: (t.positionData || []).map(
      (r) => wh(e, r)
    )
  }));
}
const hs = [
  {
    id: Xe.STRAIGHT_ARROW,
    name: "直箭头",
    icon: "➤",
    hint: "第一次点击箭尾，第二次点击箭头方向并完成面状直箭头。"
  },
  {
    id: Xe.STRAIGHT_LINE_ARROW,
    name: "细直线箭头",
    icon: "↗",
    hint: "第一次点击起点，第二次点击终点并完成线状箭头。"
  }
];
function zn(e) {
  return typeof e == "string" ? hs.find((t) => t.id === e) : e?.id ? e : void 0;
}
function F0(e, t, n = {}) {
  if (!t?.Color || !t?.ScreenSpaceEventHandler)
    throw new Error(
      "createSituationPlotManager 需要传入创建 Viewer 时使用的 Cesium。"
    );
  let r = !1, o = zn(n.defaultMode) || hs[0], a = null;
  function i() {
    n.onStateChange?.({
      isDrawing: r,
      activeMode: o
    });
  }
  function s(p = vo(t)) {
    return n.onDataChange?.(p), p;
  }
  function l() {
    a !== null && (window.clearTimeout(a), a = null);
  }
  function c(p = o) {
    if (!e || !r) return;
    const x = zn(p);
    if (!x) {
      n.onError?.(new Error("不支持的态势标绘类型。"));
      return;
    }
    o = x, l(), n.onStatusChange?.(o.hint), Ph(e, t, o.id, (S, T) => {
      s(T), n.onComplete?.({
        entity: S,
        data: T,
        mode: o
      }), n.onStatusChange?.(
        `${o.name}标绘完成，可继续标绘或切换工具。`
      ), a = window.setTimeout(() => {
        a = null, r && c(o);
      }, 0);
    }), i();
  }
  function d(p = o) {
    const x = zn(p);
    return x ? (r = !0, o = x, c(o), !0) : (n.onError?.(new Error("不支持的态势标绘类型。")), !1);
  }
  function u({ silent: p = !1 } = {}) {
    l(), Go(), r = !1, p || n.onStatusChange?.("已退出态势标绘。"), i();
  }
  function f(p) {
    const x = zn(p);
    return x ? (o = x, r ? c(o) : i(), !0) : (n.onError?.(new Error("不支持的态势标绘类型。")), !1);
  }
  function h() {
    l(), Eh(e);
    const p = s([]);
    return n.onStatusChange?.("已清空态势标绘结果。"), r && (a = window.setTimeout(() => {
      a = null, r && c(o);
    }, 0)), p;
  }
  function g() {
    l(), u({ silent: !0 });
  }
  return {
    start: d,
    stop: u,
    setMode: f,
    clear: h,
    getPlotData: () => vo(t),
    getActiveMode: () => o,
    isDrawing: () => r,
    destroy: g
  };
}
const fs = {
  lon: -117.16,
  lat: 32.71,
  height: 360
}, Th = {
  heading: 0,
  pitch: -90,
  range: 1100
}, kh = {
  image: "/libs/case_list/Smoke/smoke.png",
  position: fs,
  startColor: "#111111",
  endColor: "#ffffff",
  startAlpha: 0.72,
  endAlpha: 0.24,
  emissionRate: 5,
  emitterRadius: 2,
  minimumParticleLife: 1,
  maximumParticleLife: 6,
  minimumSpeed: 1,
  maximumSpeed: 4,
  startScale: 0,
  endScale: 10,
  particleSize: 25,
  lifetime: 16,
  sizeInMeters: !0,
  offset: { x: -4, y: 0, z: 50 },
  wind: { x: 20, y: 30, z: 0 }
};
function z0(e, t, n = {}) {
  const r = Mn(
    e,
    t,
    {
      ...n,
      preset: {
        idPrefix: "smoke",
        defaultOptions: kh,
        defaultPosition: fs,
        defaultCamera: Th,
        nestedOptionKeys: ["offset", "wind"],
        createEmitter: ({ Cesium: o, options: a }) => new o.CircleEmitter(Number(a.emitterRadius)),
        createUpdateCallback: ({ Cesium: o, options: a }) => _n(o, a.wind),
        formatCountStatus: (o) => `已创建 ${o} 个烟雾粒子效果。`,
        clearedStatus: "烟雾粒子已清空。"
      }
    }
  );
  return {
    addSmoke: r.add,
    createSmokeEffect: r.create,
    updateSmoke: r.update,
    removeSmoke: r.remove,
    getSmokeEffect: r.getEffect,
    getSmokeEffects: r.getEffects,
    clearSmokeEffects: r.clear,
    focusScene: r.focusScene,
    destroy: r.destroy
  };
}
const gs = {
  lon: -117.16,
  lat: 32.71,
  height: 360
}, Ah = {
  heading: 0,
  pitch: -90,
  range: 1100
}, Dh = {
  image: "/libs/case_list/Spray/fire.png",
  position: gs,
  startColor: "#ff0000",
  endColor: "#ffff00",
  startAlpha: 0.7,
  endAlpha: 0.3,
  emissionRate: 5,
  emitterRadius: 2,
  minimumParticleLife: 1,
  maximumParticleLife: 6,
  minimumSpeed: 1,
  maximumSpeed: 4,
  startScale: 0,
  endScale: 10,
  particleSize: 25,
  lifetime: 16,
  loop: !0,
  sizeInMeters: !0,
  offset: { x: -4, y: 0, z: 50 },
  velocity: { x: 20, y: 0, z: -30 }
};
function G0(e, t, n = {}) {
  const r = Mn(
    e,
    t,
    {
      ...n,
      preset: {
        idPrefix: "spray",
        defaultOptions: Dh,
        defaultPosition: gs,
        defaultCamera: Ah,
        nestedOptionKeys: ["offset", "velocity"],
        createEmitter: ({ Cesium: o, options: a }) => new o.CircleEmitter(Number(a.emitterRadius)),
        createUpdateCallback: ({ Cesium: o, options: a }) => _n(o, a.velocity),
        formatCountStatus: (o) => `已创建 ${o} 个喷雾粒子效果。`,
        clearedStatus: "喷雾粒子已清空。"
      }
    }
  );
  return {
    addSpray: r.add,
    createSprayEffect: r.create,
    updateSpray: r.update,
    removeSpray: r.remove,
    getSprayEffect: r.getEffect,
    getSprayEffects: r.getEffects,
    clearSprayEffects: r.clear,
    focusScene: r.focusScene,
    destroy: r.destroy
  };
}
const gr = 6378137, ps = 2 * Math.PI * gr / 360, Oo = 32;
function Gn(e, t) {
  return Math.trunc(e).toString(2).padStart(t, "0").slice(-t);
}
function io(e, t) {
  const n = Math.min(255.99999999999997, Math.max(-256, e)), r = Math.floor(n), o = (n - r) * 60, a = Math.floor(o), i = (o - a) * 60, s = Math.floor(i), l = Math.min(2047, Math.floor((i - s) * 2048));
  return [Gn(r + t, 9), Gn(a, 6), Gn(s, 6), Gn(l, 11)].join("");
}
function ii(e, t) {
  const n = e.padEnd(Oo, "0");
  return Number.parseInt(n.slice(0, 9), 2) - t + Number.parseInt(n.slice(9, 15), 2) / 60 + Number.parseInt(n.slice(15, 21), 2) / 3600 + Number.parseInt(n.slice(21, 32), 2) / (3600 * 2048);
}
function mn(e, t) {
  return t === 0 ? "" : Math.trunc(e).toString(2).padStart(t, "0");
}
function Wh(e) {
  let t = `G${e.slice(0, 9)}`;
  return e.length > 9 && (t += `-${e.slice(9, 15)}`), e.length > 15 && (t += `-${e.slice(15, 21)}`), e.length > 21 && (t += `.${e.slice(21)}`), t;
}
function si(e, t, n = null) {
  let r = "";
  for (let o = 0; o < e.length; o += 1)
    r += String(Number(e[o]) + 2 * Number(t[o]) + (n ? 4 * Number(n[o]) : 0));
  return Wh(r);
}
function so(e, t, n) {
  if (t === 0) return n === 0 ? [0, 512] : [-256, 256];
  const r = 2 ** t;
  return [
    ii(mn(e, t), n),
    e + 1 === r ? n === 0 ? 512 : 256 : ii(mn(e + 1, t), n)
  ];
}
function Ch(e) {
  return (gr + e) / ps;
}
function li(e) {
  return e * ps - gr;
}
function Nh(e, t, n, r) {
  const o = 2 ** r;
  if ([e, t, n].some((g) => g < 0 || g >= o)) throw new Error("GeoSOT 网格索引超出根域。");
  const a = mn(e, r), i = mn(t, r), s = mn(n, r), [l, c] = so(e, r, 256), [d, u] = so(t, r, 256), [f, h] = so(n, r, 0);
  return {
    level: r,
    x: e,
    y: t,
    z: n,
    west: Math.max(-180, l),
    south: Math.max(-90, d),
    east: Math.min(180, c),
    north: Math.min(90, u),
    bottom: li(f),
    top: li(h),
    code2D: si(a, i),
    code3D: si(a, i, s)
  };
}
function Lh(e, t, n, r) {
  if (!Number.isInteger(r) || r < 0 || r > Oo) throw new Error("GeoSOT 层级必须是 0～32 的整数。");
  if (e < -180 || e > 180) throw new Error("经度必须位于 -180°～180°。");
  if (t < -90 || t > 90) throw new Error("纬度必须位于 -90°～90°。");
  if (n < -gr || n > 5e7) throw new Error("GeoSOT-3D 高程域为地心至地表以上约 50,000 km。");
  const o = io(e, 256).slice(0, r), a = io(t, 256).slice(0, r), i = io(Ch(n), 0).slice(0, r);
  return Nh(
    o ? Number.parseInt(o, 2) : 0,
    a ? Number.parseInt(a, 2) : 0,
    i ? Number.parseInt(i, 2) : 0,
    r
  );
}
function Ih(e) {
  return e === 0 ? 512 : e <= 9 ? 512 / 2 ** e : e <= 15 ? 64 / 2 ** (e - 9) / 60 : e <= 21 ? 64 / 2 ** (e - 15) / 3600 : 1 / 2 ** (e - 21) / 3600;
}
const Rh = Array.from({ length: Oo + 1 }, (e, t) => ({
  level: t,
  angularDegrees: Ih(t)
}));
function Fh(e) {
  if (Array.isArray(e) && e.length >= 2) {
    const t = Number(e[0]), n = Number(e[1]);
    if (Number.isFinite(t) && Number.isFinite(n)) return [t, n];
  }
  if (e && typeof e == "object") {
    const t = Number(e.longitude ?? e.lon ?? e.lng), n = Number(e.latitude ?? e.lat);
    if (Number.isFinite(t) && Number.isFinite(n)) return [t, n];
  }
  throw new Error("区域坐标必须是 [longitude, latitude] 或等价对象。");
}
function yn(e) {
  const t = e.map(Fh);
  if (t.length < 3) throw new Error("多边形至少需要 3 个不同顶点。");
  const n = t[0], r = t.at(-1);
  return (n[0] !== r[0] || n[1] !== r[1]) && t.push([...n]), t;
}
function zh(e) {
  const t = e.bounds ?? e.rectangle, n = Number(e.west ?? t?.[0]), r = Number(e.south ?? t?.[1]), o = Number(e.east ?? t?.[2]), a = Number(e.north ?? t?.[3]);
  if (![n, r, o, a].every(Number.isFinite))
    throw new Error("矩形区域必须提供 west、south、east、north 或 bounds。");
  if (n >= o || r >= a) throw new Error("矩形区域必须满足 west < east 且 south < north。");
  return yn([[n, r], [o, r], [o, a], [n, a]]);
}
function Gh(e) {
  const t = e?.type === "Feature" ? e.geometry : e;
  if (!t || typeof t != "object") throw new Error("局部模式缺少有效的区域几何。");
  const n = String(t.type ?? "").toLowerCase();
  if (n === "rectangle" || t.bounds || t.rectangle) return [zh(t)];
  if (n === "polygon") {
    const r = t.coordinates ?? t.positions;
    return [yn(Array.isArray(r?.[0]?.[0]) ? r[0] : r ?? [])];
  }
  if (n === "multipolygon") return t.coordinates.map((r) => yn(r[0]));
  if (t.positions) return [yn(t.positions)];
  throw new Error("区域仅支持 rectangle、GeoJSON Polygon 或 MultiPolygon。");
}
function Oh(e) {
  const t = e.flat(), n = t.map(([a]) => a), r = t.map(([, a]) => a), o = {
    west: Math.min(...n),
    south: Math.min(...r),
    east: Math.max(...n),
    north: Math.max(...r)
  };
  if (o.west < -180 || o.east > 180 || o.south < -90 || o.north > 90)
    throw new Error("区域坐标必须位于 WGS 84 经纬度范围内。");
  if (o.east - o.west >= 180) throw new Error("局部区域暂不支持跨越国际换日线。");
  return o;
}
function Hh(e, t) {
  const n = e?.entities?.getById?.(t);
  if (n) return n;
  for (let r = 0; r < (e?.dataSources?.length ?? 0); r += 1) {
    const o = e.dataSources.get(r)?.entities?.getById?.(t);
    if (o) return o;
  }
  return null;
}
function Bh(e, t, n) {
  const r = Hh(e, n);
  if (!r) return null;
  const o = e.clock?.currentTime, a = r.rectangle?.coordinates?.getValue?.(o);
  if (a)
    return { id: n, type: "rectangle", bounds: [
      t.Math.toDegrees(a.west),
      t.Math.toDegrees(a.south),
      t.Math.toDegrees(a.east),
      t.Math.toDegrees(a.north)
    ] };
  const i = r.polygon?.hierarchy?.getValue?.(o), s = i?.positions ?? i;
  if (Array.isArray(s) && s.length >= 3)
    return { id: n, type: "polygon", positions: s.map((l) => {
      const c = t.Cartographic.fromCartesian(l);
      return [t.Math.toDegrees(c.longitude), t.Math.toDegrees(c.latitude)];
    }) };
  if (r) throw new Error(`ID 为 ${n} 的 Cesium Entity 不包含可用的 rectangle 或 polygon 几何。`);
  return null;
}
async function qh({ region: e, regionId: t, regions: n, resolveRegion: r, viewer: o, Cesium: a }) {
  let i = e;
  if (!i && t != null && (typeof r == "function" && (i = await r(t)), !i && n instanceof Map && (i = n.get(t)), !i && n && typeof n == "object" && (i = n[t]), i || (i = Bh(o, a, t))), !i) throw new Error("局部模式必须传入 region，或传入 regionId 并提供 regions / resolveRegion。");
  const s = i?.type === "Feature" ? i.geometry : i, l = String(s?.type ?? "").toLowerCase(), c = Gh(i);
  return {
    id: i.id ?? i.properties?.id ?? t ?? null,
    isRectangle: l === "rectangle" || !!(s?.bounds || s?.rectangle),
    polygons: c,
    bounds: Oh(c),
    geometry: c.length === 1 ? { type: "Polygon", coordinates: [c[0]] } : { type: "MultiPolygon", coordinates: c.map((d) => [d]) }
  };
}
function ci([e, t], n) {
  let r = !1;
  for (let o = 0, a = n.length - 1; o < n.length; a = o++) {
    const [i, s] = n[o], [l, c] = n[a];
    s > t != c > t && e < (l - i) * (t - s) / (c - s) + i && (r = !r);
  }
  return r;
}
function On(e, t, n) {
  const r = (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]);
  return Math.abs(r) <= 1e-12 ? 0 : Math.sign(r);
}
function Hn(e, t, n) {
  return n[0] >= Math.min(e[0], t[0]) && n[0] <= Math.max(e[0], t[0]) && n[1] >= Math.min(e[1], t[1]) && n[1] <= Math.max(e[1], t[1]);
}
function Vh(e, t, n, r) {
  const o = On(e, t, n), a = On(e, t, r), i = On(n, r, e), s = On(n, r, t);
  return o !== a && i !== s ? !0 : o === 0 && Hn(e, t, n) || a === 0 && Hn(e, t, r) || i === 0 && Hn(n, r, e) || s === 0 && Hn(n, r, t);
}
function $h(e, t) {
  if (e.some((n) => ci(n, t)) || t.some((n) => ci(n, e))) return !0;
  for (let n = 1; n < e.length; n += 1)
    for (let r = 1; r < t.length; r += 1)
      if (Vh(e[n - 1], e[n], t[r - 1], t[r])) return !0;
  return !1;
}
function Uh(e, t) {
  const n = yn(t), r = n.map(([i]) => i), o = n.map(([, i]) => i), a = { west: Math.min(...r), south: Math.min(...o), east: Math.max(...r), north: Math.max(...o) };
  return a.east < e.bounds.west || a.west > e.bounds.east || a.north < e.bounds.south || a.south > e.bounds.north ? !1 : e.polygons.some((i) => $h(i, n));
}
function jh(e, t, n, r) {
  return [[e, t], [n, t], [n, r], [e, r], [e, t]];
}
function Kh(e) {
  const t = (e.east - e.west) / 360, n = (Math.sin(e.north * Math.PI / 180) - Math.sin(e.south * Math.PI / 180)) / 2;
  return Math.max(0, Math.min(1, t * n));
}
function ms({ Cesium: e, dataSource: t, coordinates: n, height: r, color: o, width: a = 1, arcType: i = e.ArcType.GEODESIC }) {
  const s = [];
  for (const [l, c] of n) {
    const d = e.Cartesian3.fromDegrees(l, c, r), u = s.at(-1);
    (!u || !e.Cartesian3.equalsEpsilon(u, d, 1e-12, 1e-7)) && s.push(d);
  }
  return s.length < 2 ? !1 : (t.entities.add({ polyline: { positions: s, width: a, material: o, arcType: i } }), !0);
}
function pr(e, t, n) {
  const r = t.alpha ?? 0.7;
  if (!Number.isFinite(r) || r < 0 || r > 1) throw new Error("style.alpha 必须位于 0～1。");
  return e.Color.fromCssColorString(t.color ?? n).withAlpha(r);
}
function Ho({
  Cesium: e,
  primitiveCollection: t,
  rectangles: n,
  height: r,
  color: o,
  width: a,
  granularityDegrees: i,
  renderMode: s
}) {
  if (!t) throw new Error("当前 Viewer 不支持 Primitive 经纬度网格。");
  const l = n.map(({ west: h, south: g, east: p, north: x }) => new e.GeometryInstance({
    geometry: new e.RectangleGeometry({
      rectangle: e.Rectangle.fromDegrees(h, g, p, x),
      height: r,
      granularity: e.Math.toRadians(i),
      vertexFormat: e.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat
    })
  })), c = n[0], d = c.columnPhase ?? 0, u = c.rowPhase ?? 0, f = new e.Material({
    fabric: {
      type: "SpatialGridLatLon",
      uniforms: {
        gridColor: o,
        columnCount: c.columns,
        rowCount: c.rows,
        gridPhase: new e.Cartesian2(d, u),
        lineWidth: a
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput)
        {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 targetGrid = materialInput.st * vec2(columnCount, rowCount) + gridPhase;
          vec2 gridFraction = fract(targetGrid);
          vec2 edgeDistance = min(gridFraction, 1.0 - gridFraction);
          vec2 pixelDistance = edgeDistance / max(fwidth(targetGrid), vec2(0.000001));
          float halfWidth = max(lineWidth * 0.5, 0.5);
          float gridAlpha = 1.0 - smoothstep(
            halfWidth,
            halfWidth + 1.0,
            min(pixelDistance.x, pixelDistance.y)
          );
          material.diffuse = gridColor.rgb;
          material.alpha = gridColor.a * gridAlpha;
          return material;
        }
      `
    }
  });
  return t.add(new e.Primitive({
    geometryInstances: l,
    appearance: new e.MaterialAppearance({
      material: f,
      translucent: !0,
      closed: !1,
      faceForward: !0
    }),
    asynchronous: !0,
    allowPicking: !1,
    compressVertices: !0,
    interleave: !0,
    releaseGeometryInstances: !0,
    vertexCacheOptimize: !0
  })), {
    cellCount: n.reduce((h, g) => h + g.columns * g.rows, 0),
    boundaryCount: n.reduce((h, g) => h + g.columns + g.rows + 2, 0),
    primitiveCount: 1,
    renderMode: s
  };
}
function Yh({ Cesium: e, primitiveCollection: t, level: n, height: r, color: o, width: a }) {
  const i = 30 / 2 ** n, s = Math.round(360 / i), l = Math.round(180 / i), c = s / 2, d = l / 2;
  return {
    ...Ho({
      Cesium: e,
      primitiveCollection: t,
      rectangles: [
        { west: -180, south: -90, east: 0, north: 0, columns: c, rows: d },
        { west: 0, south: -90, east: 180, north: 0, columns: c, rows: d },
        { west: -180, south: 0, east: 0, north: 90, columns: c, rows: d },
        { west: 0, south: 0, east: 180, north: 90, columns: c, rows: d }
      ],
      height: r,
      color: o,
      width: a,
      granularityDegrees: 1,
      renderMode: "procedural-full"
    }),
    cellCount: s * l,
    boundaryCount: s + l - 1
  };
}
async function Jh(e) {
  const { Cesium: t, dataSource: n, primitiveCollection: r, mode: o, level: a, height: i, region: s, style: l } = e;
  if (a > 16) throw new Error("经纬度网格 level 不得超过 16。");
  const c = 30 / 2 ** a, d = pr(t, l, "#55dff8"), u = l.width ?? 1;
  if (o === "global")
    return Yh({ Cesium: t, primitiveCollection: r, level: a, height: i, color: d, width: u });
  const f = Math.floor((s.bounds.west + 180) / c) * c - 180, h = Math.floor((s.bounds.south + 90) / c) * c - 90, g = Math.max(1, Math.ceil((s.bounds.east - f) / c - 1e-12)), p = Math.max(1, Math.ceil((s.bounds.north - h) / c - 1e-12));
  if (s.isRectangle) {
    const S = f + g * c, T = h + p * c, M = Math.max(S - f, T - h), A = Math.min(0.25, Math.max(c, M / 1024));
    return Ho({
      Cesium: t,
      primitiveCollection: r,
      rectangles: [{
        west: f,
        south: h,
        east: S,
        north: T,
        columns: g,
        rows: p
      }],
      height: i,
      color: d,
      width: u,
      granularityDegrees: A,
      renderMode: "procedural-local"
    });
  }
  let x = 0;
  for (let S = f; S < s.bounds.east; S += c)
    for (let T = h; T < s.bounds.north; T += c) {
      const M = jh(S, T, S + c, T + c);
      Uh(s, M) && (ms({ Cesium: t, dataSource: n, coordinates: M, height: i, color: d, width: u }), x += 1);
    }
  return { cellCount: x };
}
function Qh(e, t) {
  const n = de.Cell.fromCellID(t), r = [];
  for (let o = 0; o <= 4; o += 1) {
    const a = de.LatLng.fromPoint(n.vertex(o % 4));
    r.push([e.Math.toDegrees(a.lng), e.Math.toDegrees(a.lat)]);
  }
  return r;
}
function di(e) {
  return e >= 0 ? 0.5 * Math.sqrt(1 + 3 * e) : 1 - 0.5 * Math.sqrt(1 - 3 * e);
}
function ln(e, t) {
  const n = e * Math.PI / 180, r = t * Math.PI / 180, o = Math.cos(r), a = {
    x: o * Math.cos(n),
    y: o * Math.sin(n),
    z: Math.sin(r)
  }, i = { x: Math.abs(a.x), y: Math.abs(a.y), z: Math.abs(a.z) };
  let s;
  i.x > i.y && i.x > i.z ? s = a.x >= 0 ? [a.y / a.x, a.z / a.x] : [a.z / a.x, a.y / a.x] : i.y > i.z ? s = a.y >= 0 ? [-a.x / a.y, a.z / a.y] : [a.z / a.y, -a.x / a.y] : s = a.z >= 0 ? [-a.x / a.z, -a.y / a.z] : [-a.y / a.z, -a.x / a.z];
  let l;
  return i.x > i.y && i.x > i.z ? l = a.x >= 0 ? 0 : 3 : i.y > i.z ? l = a.y >= 0 ? 1 : 4 : l = a.z >= 0 ? 2 : 5, { face: l, st: [di(s[0]), di(s[1])] };
}
function Xh(e) {
  const t = (e.west + e.east) / 2, n = (e.south + e.north) / 2, r = 1e-4, o = r * 180 / Math.PI, a = (T, M) => ln(
    t + T * o,
    n + M * o
  ), i = a(0, 0), s = a(1, 0), l = a(-1, 0), c = a(0, 1), d = a(0, -1), u = a(1, 1), f = a(1, -1), h = a(-1, 1), g = a(-1, -1), p = [
    ln(e.west, e.south),
    ln(e.west, e.north),
    ln(e.east, e.south),
    ln(e.east, e.north)
  ];
  if ([
    i,
    s,
    l,
    c,
    d,
    u,
    f,
    h,
    g,
    ...p
  ].some((T) => T.face !== i.face)) return null;
  const S = [0, 1].map((T) => ({
    longitude: (s.st[T] - l.st[T]) / (2 * r),
    latitude: (c.st[T] - d.st[T]) / (2 * r),
    longitudeSquared: (s.st[T] - 2 * i.st[T] + l.st[T]) / r ** 2,
    longitudeLatitude: (u.st[T] - f.st[T] - h.st[T] + g.st[T]) / (4 * r ** 2),
    latitudeSquared: (c.st[T] - 2 * i.st[T] + d.st[T]) / r ** 2
  }));
  return { centerST: i.st, coefficients: S };
}
function ui({
  Cesium: e,
  primitiveCollection: t,
  level: n,
  height: r,
  color: o,
  width: a,
  bounds: i,
  granularityDegrees: s,
  renderMode: l
}) {
  if (!t) throw new Error("当前 Viewer 不支持 Primitive S2 网格。");
  const d = l === "procedural-s2-local" ? Xh(i) : null, u = 2 ** n, h = (d?.centerST ?? [0, 0]).map((x) => {
    const S = x * u;
    return S - Math.floor(S);
  }), g = new e.GeometryInstance({
    geometry: new e.RectangleGeometry({
      rectangle: e.Rectangle.fromDegrees(i.west, i.south, i.east, i.north),
      height: r,
      granularity: e.Math.toRadians(s),
      vertexFormat: e.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat
    })
  }), p = new e.Material({
    fabric: {
      type: "SpatialGridS2",
      uniforms: {
        gridColor: o,
        gridScale: u,
        lineWidth: a,
        useLocalApproximation: d ? 1 : 0,
        gridOriginPhase: new e.Cartesian2(h[0], h[1]),
        localGridLinear: new e.Cartesian4(
          d?.coefficients[0].longitude ?? 0,
          d?.coefficients[0].latitude ?? 0,
          d?.coefficients[1].longitude ?? 0,
          d?.coefficients[1].latitude ?? 0
        ),
        localGridQuadraticS: new e.Cartesian3(
          d?.coefficients[0].longitudeSquared ?? 0,
          d?.coefficients[0].longitudeLatitude ?? 0,
          d?.coefficients[0].latitudeSquared ?? 0
        ),
        localGridQuadraticT: new e.Cartesian3(
          d?.coefficients[1].longitudeSquared ?? 0,
          d?.coefficients[1].longitudeLatitude ?? 0,
          d?.coefficients[1].latitudeSquared ?? 0
        ),
        longitudeRange: new e.Cartesian2(
          e.Math.toRadians(i.west),
          e.Math.toRadians(i.east - i.west)
        ),
        latitudeRange: new e.Cartesian2(
          e.Math.toRadians(i.south),
          e.Math.toRadians(i.north - i.south)
        )
      },
      source: `
        float s2UVToST(float uv)
        {
          return uv >= 0.0
            ? 0.5 * sqrt(1.0 + 3.0 * uv)
            : 1.0 - 0.5 * sqrt(1.0 - 3.0 * uv);
        }

        vec2 s2DirectionToUV(vec3 direction)
        {
          vec3 magnitude = abs(direction);
          if (magnitude.x > magnitude.y && magnitude.x > magnitude.z)
          {
            return direction.x >= 0.0
              ? vec2(direction.y / direction.x, direction.z / direction.x)
              : vec2(direction.z / direction.x, direction.y / direction.x);
          }
          if (magnitude.y > magnitude.z)
          {
            return direction.y >= 0.0
              ? vec2(-direction.x / direction.y, direction.z / direction.y)
              : vec2(direction.z / direction.y, -direction.x / direction.y);
          }
          return direction.z >= 0.0
            ? vec2(-direction.x / direction.z, -direction.y / direction.z)
            : vec2(-direction.y / direction.z, -direction.x / direction.z);
        }

        vec3 s2TextureCoordinateToDirection(vec2 st)
        {
          float longitude = longitudeRange.x + st.x * longitudeRange.y;
          float latitude = latitudeRange.x + st.y * latitudeRange.y;
          float cosLatitude = cos(latitude);
          return vec3(
            cosLatitude * cos(longitude),
            cosLatitude * sin(longitude),
            sin(latitude)
          );
        }

        czm_material czm_getMaterial(czm_materialInput materialInput)
        {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 pixelDistance;
          if (useLocalApproximation > 0.5)
          {
            vec2 angleDelta = (materialInput.st - vec2(0.5)) * vec2(
              longitudeRange.y,
              latitudeRange.y
            );
            float longitudeSquared = angleDelta.x * angleDelta.x;
            float longitudeLatitude = angleDelta.x * angleDelta.y;
            float latitudeSquared = angleDelta.y * angleDelta.y;
            vec2 localST = vec2(
              localGridLinear.x * angleDelta.x + localGridLinear.y * angleDelta.y +
                0.5 * localGridQuadraticS.x * longitudeSquared +
                localGridQuadraticS.y * longitudeLatitude +
                0.5 * localGridQuadraticS.z * latitudeSquared,
              localGridLinear.z * angleDelta.x + localGridLinear.w * angleDelta.y +
                0.5 * localGridQuadraticT.x * longitudeSquared +
                localGridQuadraticT.y * longitudeLatitude +
                0.5 * localGridQuadraticT.z * latitudeSquared
            );
            vec2 localGrid = localST * gridScale + gridOriginPhase;
            vec2 gridFraction = fract(localGrid);
            vec2 edgeDistance = min(gridFraction, 1.0 - gridFraction);
            pixelDistance = edgeDistance / max(fwidth(localGrid), vec2(0.000001));
          }
          else
          {
            vec3 direction = s2TextureCoordinateToDirection(materialInput.st);
            vec2 uv = clamp(s2DirectionToUV(direction), vec2(-1.0), vec2(1.0));
            vec2 st = vec2(s2UVToST(uv.x), s2UVToST(uv.y));
            vec2 targetGrid = st * gridScale;
            vec2 gridFraction = fract(targetGrid);
            vec2 edgeDistance = min(gridFraction, 1.0 - gridFraction);
            pixelDistance = edgeDistance / max(fwidth(targetGrid), vec2(0.000001));
          }
          float halfWidth = max(lineWidth * 0.5, 0.5);
          float gridAlpha = 1.0 - smoothstep(
            halfWidth,
            halfWidth + 1.0,
            min(pixelDistance.x, pixelDistance.y)
          );
          material.diffuse = gridColor.rgb;
          material.alpha = gridColor.a * gridAlpha;
          return material;
        }
      `
    }
  });
  return t.add(new e.Primitive({
    geometryInstances: g,
    appearance: new e.MaterialAppearance({
      material: p,
      translucent: !0,
      closed: !1,
      faceForward: !1
    }),
    asynchronous: !0,
    allowPicking: !1,
    // S2 L20+ 需要保留连续的高精度纹理坐标；Cesium 的顶点压缩会量化
    // RectangleGeometry.st，并在高层级被放大为网格断线和条纹。
    compressVertices: !1,
    interleave: !0,
    releaseGeometryInstances: !0,
    vertexCacheOptimize: !0
  })), {
    primitiveCount: 1,
    renderMode: l
  };
}
async function Zh(e) {
  const { Cesium: t, dataSource: n, primitiveCollection: r, mode: o, level: a, height: i, region: s, style: l } = e;
  if (a > 30) throw new Error("S2 level 必须位于 0～30。");
  const c = pr(t, l, "#4eddf5");
  if (o === "global")
    return {
      ...ui({
        Cesium: t,
        primitiveCollection: r,
        level: a,
        height: i,
        color: c,
        width: l.width ?? 1,
        bounds: { west: -180, south: -90, east: 180, north: 90 },
        granularityDegrees: 1,
        renderMode: "procedural-s2-full"
      }),
      cellCount: 6 * 4 ** a
    };
  if (s.isRectangle) {
    const u = Math.max(
      s.bounds.east - s.bounds.west,
      s.bounds.north - s.bounds.south
    );
    return {
      ...ui({
        Cesium: t,
        primitiveCollection: r,
        level: a,
        height: i,
        color: c,
        width: l.width ?? 1,
        bounds: s.bounds,
        granularityDegrees: Math.min(0.25, Math.max(0.01, u / 256)),
        renderMode: "procedural-s2-local"
      }),
      estimatedCellCount: Math.ceil(
        6 * 4 ** a * Kh(s.bounds)
      )
    };
  }
  const d = [...new zs.RegionCoverer({
    minLevel: a,
    maxLevel: a,
    levelMod: 1
  }).covering(s.geometry)];
  for (const u of d) ms({
    Cesium: t,
    dataSource: n,
    coordinates: Qh(t, u),
    height: i,
    color: c,
    width: l.width ?? 1
  });
  return { cellCount: d.length, cellIds: d, renderMode: "s2-region-coverer" };
}
const hi = 4;
function tf(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e)
    for (const o of Bs(
      [r],
      t,
      qs.containmentOverlapping,
      !0
    )) n.add(o);
  return [...n];
}
async function ef(e, t, n) {
  const r = new Float64Array(t.reduce(
    (i, s) => i + Math.max(0, ho(s, !0).length) * 6,
    0
  ));
  let o = 0;
  const a = new e.Cartesian3();
  for (let i = 0; i < t.length; i += 1) {
    const s = ho(t[i], !0);
    for (let l = 0; l < s.length; l += 1) {
      const c = s[l], d = s[(l + 1) % s.length];
      for (const [u, f] of [c, d])
        e.Cartesian3.fromDegrees(u, f, n, e.Ellipsoid.WGS84, a), r[o++] = a.x, r[o++] = a.y, r[o++] = a.z;
    }
    i > 0 && i % 2e3 === 0 && await new Promise((l) => setTimeout(l, 0));
  }
  return new e.Geometry({
    attributes: {
      position: new e.GeometryAttribute({
        componentDatatype: e.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: r
      })
    },
    primitiveType: e.PrimitiveType.LINES,
    boundingSphere: e.BoundingSphere.fromVertices(r)
  });
}
function nf(e, t, n, r) {
  return new e.Primitive({
    geometryInstances: new e.GeometryInstance({
      geometry: t,
      attributes: { color: e.ColorGeometryInstanceAttribute.fromColor(n) }
    }),
    appearance: new e.PerInstanceColorAppearance({
      flat: !0,
      translucent: n.alpha < 1,
      renderState: { lineWidth: Math.max(1, r) }
    }),
    asynchronous: !1,
    allowPicking: !1,
    compressVertices: !1,
    releaseGeometryInstances: !0
  });
}
async function rf(e) {
  const { Cesium: t, primitiveCollection: n, mode: r, level: o, height: a, region: i, style: s } = e;
  if (o < 0 || o > 15) throw new Error("H3 level 必须位于 0～15。");
  if (r === "global" && o > hi)
    throw new Error(`H3 全球完整渲染仅支持 L0～L${hi}；L${o} 包含 ${Gs(o).toLocaleString()} 个单元，请改用局部模式。`);
  if (!n) throw new Error("当前 Viewer 不支持 Primitive H3 网格。");
  const l = r === "global" ? Os() : null, c = r === "global" ? o === 0 ? l : l.flatMap((d) => Hs(d, o)) : tf(i.polygons, o);
  if (c.length > 0) {
    const d = await ef(t, c, a);
    n.add(nf(
      t,
      d,
      pr(t, s, "#36e5bd"),
      s.width ?? 1
    ));
  }
  return {
    cellCount: c.length,
    primitiveCount: c.length > 0 ? 1 : 0,
    renderMode: r === "global" ? "h3-global-complete-primitive" : "h3-local-complete-primitive"
  };
}
function Bo(e, {
  bounds: t,
  longitudeStep: n,
  latitudeStep: r,
  originLongitude: o,
  originLatitude: a,
  renderMode: i,
  fallbackColor: s
}) {
  const { Cesium: l, primitiveCollection: c, height: d, style: u } = e, f = t.east - t.west, h = t.north - t.south, g = f / n, p = h / r, x = (t.west - o) / n, S = (t.south - a) / r, T = Math.max(f, h);
  return {
    ...Ho({
      Cesium: l,
      primitiveCollection: c,
      rectangles: [{
        ...t,
        columns: g,
        rows: p,
        columnPhase: x - Math.floor(x),
        rowPhase: S - Math.floor(S)
      }],
      height: d,
      color: pr(l, u, s),
      width: u.width ?? 1,
      granularityDegrees: Math.min(0.25, Math.max(5e-3, T / 512)),
      renderMode: i
    }),
    cellCount: Math.ceil(g) * Math.ceil(p),
    boundaryCount: Math.ceil(g) + Math.ceil(p) + 2
  };
}
async function of(e) {
  const { mode: t, level: n, region: r } = e;
  if (n < 1 || n > 10) throw new Error("北斗网格 level 必须位于 1～10。");
  const [o, a] = Ks(n), i = t === "global" ? { west: -180, south: -88, east: 180, north: 88 } : r.bounds;
  if (t === "local" && (r.bounds.south <= -88 || r.bounds.north >= 88))
    throw new Error("北斗常规区域模式要求区域纬度位于 -88°～88° 之间。");
  return Bo(e, {
    bounds: i,
    longitudeStep: o,
    latitudeStep: a,
    originLongitude: -180,
    originLatitude: -88,
    renderMode: `procedural-beidou-${t}`,
    fallbackColor: "#49d8ff"
  });
}
async function af(e) {
  const { mode: t, level: n, region: r } = e;
  if (n > 32) throw new Error("GeoSOT level 必须位于 0～32。");
  const o = Rh[n].angularDegrees;
  return Bo(e, {
    bounds: t === "global" ? { west: -180, south: -90, east: 180, north: 90 } : r.bounds,
    longitudeStep: o,
    latitudeStep: o,
    originLongitude: -256,
    originLatitude: -256,
    renderMode: `procedural-geosot-${t}`,
    fallbackColor: "#59def6"
  });
}
function sf(e) {
  if (e === 1) return 0.5;
  if (e === 2) return 0.25;
  if (e === 3) return 1 / 12;
  throw new Error("GARS level 仅支持 1（30′）、2（15′）、3（5′）。");
}
async function lf(e) {
  const { mode: t, level: n, region: r } = e, o = sf(n);
  return Bo(e, {
    bounds: t === "global" ? { west: -180, south: -90, east: 180, north: 90 } : r.bounds,
    longitudeStep: o,
    latitudeStep: o,
    originLongitude: -180,
    originLatitude: -90,
    renderMode: `procedural-gars-${t}`,
    fallbackColor: "#ff984f"
  });
}
const ys = Object.freeze({
  latlon: Jh,
  s2: Zh,
  h3: rf,
  beidou: of,
  geosot: af,
  gars: lf
});
function qo(e, t, n, r = 0) {
  if (!Number.isFinite(r) || r < 0)
    throw new Error("网格点击要求 height 是大于或等于 0 的有限数值。");
  if (!n || !e?.camera?.getPickRay) return null;
  const o = e.camera.getPickRay(n);
  if (!o) return null;
  const a = t.Ellipsoid.WGS84, i = t.IntersectionTests.rayEllipsoid(o, a);
  if (!i || i.stop < 0) return null;
  const s = a.cartesianToCartographic(o.origin);
  if (!s || s.height < r) return null;
  let l = 0, c = Math.max(0, i.start);
  const d = new t.Cartesian3();
  for (let h = 0; h < 42; h += 1) {
    const g = (l + c) / 2, p = t.Ray.getPoint(o, g, d), x = a.cartesianToCartographic(p);
    !x || x.height <= r ? c = g : l = g;
  }
  const u = t.Ray.getPoint(o, (l + c) / 2, d), f = a.cartesianToCartographic(u);
  return f ? {
    longitude: t.Math.toDegrees(f.longitude),
    latitude: t.Math.toDegrees(f.latitude)
  } : null;
}
const fi = 0, gi = 16;
function xs(e) {
  if (!Number.isInteger(e) || e < fi || e > gi)
    throw new Error(`经纬度网格 level 必须位于 ${fi}～${gi}。`);
}
function cf(e, t) {
  if (!Number.isFinite(e) || e < -180 || e > 180)
    throw new Error("longitude 必须位于 -180～180°。");
  if (!Number.isFinite(t) || t < -90 || t > 90)
    throw new Error("latitude 必须位于 -90～90°。");
}
function Pe(e) {
  return Number(e.toFixed(12));
}
function bs(e, t, n, r = 0) {
  if (xs(n), cf(e, t), !Number.isFinite(r)) throw new Error("height 必须是有限数值。");
  const o = 30 / 2 ** n, a = Math.round(360 / o), i = Math.round(180 / o), s = Math.min(a - 1, Math.max(0, Math.floor((e + 180) / o))), l = Math.min(i - 1, Math.max(0, Math.floor((t + 90) / o))), c = -180 + s * o, d = -90 + l * o, u = c + o, f = d + o, h = String(i - 1).length, g = String(a - 1).length;
  return {
    type: "latlon",
    code: `LATLON-L${n}-R${String(l).padStart(h, "0")}-C${String(s).padStart(g, "0")}`,
    level: n,
    row: l,
    column: s,
    rowCount: i,
    columnCount: a,
    interval: o,
    height: r,
    bounds: {
      west: Pe(c),
      south: Pe(d),
      east: Pe(u),
      north: Pe(f)
    },
    center: {
      longitude: Pe((c + u) / 2),
      latitude: Pe((d + f) / 2),
      height: r
    },
    clicked: {
      longitude: Pe(e),
      latitude: Pe(t)
    }
  };
}
function df(e, t, n, r) {
  const o = r?.level, a = r?.height ?? 0;
  xs(o);
  const i = qo(e, t, n, a);
  return i ? bs(
    i.longitude,
    i.latitude,
    o,
    a
  ) : null;
}
const pi = 0, mi = 30, bn = 180 / Math.PI;
function ws(e) {
  if (!Number.isInteger(e) || e < pi || e > mi)
    throw new Error(`S2 网格 level 必须位于 ${pi}～${mi}。`);
}
function uf(e, t) {
  if (!Number.isFinite(e) || e < -180 || e > 180)
    throw new Error("longitude 必须位于 -180～180°。");
  if (!Number.isFinite(t) || t < -90 || t > 90)
    throw new Error("latitude 必须位于 -90～90°。");
}
function Ye(e) {
  return Number(e.toFixed(12));
}
function hf(e) {
  const t = de.LatLng.fromPoint(e);
  return [Ye(t.lng * bn), Ye(t.lat * bn)];
}
function ff(e) {
  const t = [];
  for (let n = 0; n < 4; n += 1) {
    const r = e.vertex(n), o = e.vertex((n + 1) % 4), a = Math.min(1, Math.max(-1, r.x * o.x + r.y * o.y + r.z * o.z)), i = Math.acos(a) * bn, s = Math.max(1, Math.ceil(i));
    for (let l = 0; l < s; l += 1) {
      const c = l / s;
      t.push(hf(de.Point.fromCoords(
        r.x + (o.x - r.x) * c,
        r.y + (o.y - r.y) * c,
        r.z + (o.z - r.z) * c
      )));
    }
  }
  return t.push([...t[0]]), t;
}
function vs(e, t, n, r = 0) {
  if (ws(n), uf(e, t), !Number.isFinite(r)) throw new Error("height 必须是有限数值。");
  const o = de.cellid.fromLatLng(de.LatLng.fromDegrees(t, e)), a = de.cellid.parent(o, n), i = de.cellid.toToken(a), s = de.Cell.fromCellID(a), l = de.cellid.latLng(a);
  return {
    type: "s2",
    code: `S2-L${n}-${i.toUpperCase()}`,
    level: n,
    face: de.cellid.face(a),
    token: i,
    cellId: a.toString(),
    s2Key: de.cellid.toString(a),
    height: r,
    boundary: ff(s),
    center: {
      longitude: Ye(l.lng * bn),
      latitude: Ye(l.lat * bn),
      height: r
    },
    clicked: {
      longitude: Ye(e),
      latitude: Ye(t)
    }
  };
}
function gf(e, t, n, r) {
  const o = r?.level, a = r?.height ?? 0;
  ws(o);
  const i = qo(e, t, n, a);
  return i ? vs(i.longitude, i.latitude, o, a) : null;
}
function mr(e, t) {
  if (!Number.isFinite(e) || e < -180 || e > 180)
    throw new Error("经度必须位于 -180°～180°。");
  if (!Number.isFinite(t) || t < -90 || t > 90)
    throw new Error("纬度必须位于 -90°～90°。");
}
function yr(e, t, n, r) {
  if (!Number.isInteger(e) || e < t || e > n)
    throw new Error(`${r} level 必须位于 ${t}～${n}。`);
}
function pf(e) {
  if (!e.length) return e;
  const t = e[0], n = e.at(-1);
  return t[0] === n[0] && t[1] === n[1] ? e : [...e, t];
}
function xr(e, t, n, r, o) {
  const a = qo(e, t, n, r?.height ?? 0);
  return a ? o(a.longitude, a.latitude, r?.level, r?.height ?? 0) : null;
}
function _s(e, t, n, r = 0) {
  mr(e, t), yr(n, 0, 15, "H3");
  const o = Vs(t, e, n), [a, i] = $s(o);
  return {
    type: "h3",
    code: `H3-L${n}-${o.toUpperCase()}`,
    index: o,
    level: n,
    height: r,
    baseCell: js(o),
    pentagon: Us(o),
    center: [i, a],
    boundary: pf(ho(o, !0)),
    clicked: [e, t]
  };
}
function mf(e, t, n, r = {}) {
  return xr(e, t, n, r, _s);
}
function yi(e) {
  return e === 0 ? Number.EPSILON : e;
}
function Ms(e, t, n, r = 0) {
  if (mr(e, t), yr(n, 1, 10, "北斗网格"), t <= -88 || t >= 88) throw new Error("北斗常规区域纬度必须位于 -88°～88°。 ");
  const o = yi(e === 180 ? 180 - Number.EPSILON : e), a = yi(t), [i, s] = Ys(n, o, a), [l, c, d, u] = Js(n, i, s);
  return {
    type: "beidou",
    code: Qs({ lngDegree: o, latDegree: a }, n),
    level: n,
    height: r,
    column: i,
    row: s,
    bounds: { west: l, south: c, east: d, north: u },
    center: [(l + d) / 2, (c + u) / 2],
    clicked: [e, t]
  };
}
function yf(e, t, n, r = {}) {
  return xr(e, t, n, r, Ms);
}
function Ss(e, t, n, r = 0) {
  mr(e, t), yr(n, 0, 32, "GeoSOT");
  const o = Lh(e, t, r, n);
  return {
    type: "geosot",
    code: o.code2D,
    code2D: o.code2D,
    code3D: o.code3D,
    level: n,
    height: r,
    x: o.x,
    y: o.y,
    z: o.z,
    bounds: { west: o.west, south: o.south, east: o.east, north: o.north },
    elevationBounds: { bottom: o.bottom, top: o.top },
    center: [(o.west + o.east) / 2, (o.south + o.north) / 2],
    clicked: [e, t]
  };
}
function xf(e, t, n, r = {}) {
  return xr(e, t, n, r, Ss);
}
const Bn = "ABCDEFGHJKLMNPQRSTUVWXYZ";
function bf(e, t) {
  const n = Math.min(719, Math.floor((e + 180) * 2)), r = Math.min(359, Math.floor((t + 90) * 2)), o = Bn[Math.floor(r / Bn.length)], a = Bn[r % Bn.length];
  return `${String(n + 1).padStart(3, "0")}${o}${a}`;
}
function Ps(e, t, n, r = 0) {
  mr(e, t), yr(n, 1, 3, "GARS");
  const o = e === 180 ? 180 - Number.EPSILON : e, a = t === 90 ? 90 - Number.EPSILON : t, i = Math.floor((o + 180) * 2) / 2 - 180, s = Math.floor((a + 90) * 2) / 2 - 90;
  let l = i, c = s, d = bf(o, a), u = null, f = null;
  if (n >= 2) {
    const g = o >= i + 0.25, p = a >= s + 0.25;
    u = p ? g ? 2 : 1 : g ? 4 : 3, l += g ? 0.25 : 0, c += p ? 0.25 : 0, d += u;
  }
  let h = n === 1 ? 0.5 : 0.25;
  if (n === 3) {
    const g = 0.08333333333333333, p = Math.min(2, Math.floor((o - l) / g)), x = Math.min(2, Math.floor((a - c) / g));
    f = (2 - x) * 3 + p + 1, l += p * g, c += x * g, h = g, d += f;
  }
  return {
    type: "gars",
    code: d,
    level: n,
    height: r,
    quadrant: u,
    keypad: f,
    bounds: { west: l, south: c, east: l + h, north: c + h },
    center: [l + h / 2, c + h / 2],
    clicked: [e, t]
  };
}
function wf(e, t, n, r = {}) {
  return xr(e, t, n, r, Ps);
}
const vf = Object.freeze(["latlon", "s2", "h3", "beidou", "geosot", "gars"]), _f = Object.freeze({ latlon: 2, s2: 3, h3: 1, beidou: 2, geosot: 6, gars: 1 }), Mf = Object.freeze({
  "lat-lon": "latlon",
  longitudeLatitude: "latlon",
  bdgrid: "beidou",
  "geo-sot": "geosot"
});
function Sf(e) {
  const t = String(e ?? "latlon");
  return Mf[t] ?? t.toLowerCase();
}
function xi(e, t = null) {
  const n = Sf(e.type ?? t?.type);
  if (!ys[n])
    throw new Error(`不支持的网格类型 ${String(e.type)}；可选值为 ${vf.join("、")}。`);
  const r = e.level ?? t?.level ?? _f[n], o = e.height ?? t?.height ?? 0, a = e.mode ?? t?.mode ?? "global", i = e.style ?? e.gridStyle ?? t?.style ?? {};
  if (!Number.isInteger(r) || r < 0) throw new Error("level 必须是大于或等于 0 的整数。");
  if (!Number.isFinite(o)) throw new Error("height 必须是有限数值。");
  if (a !== "global" && a !== "local") throw new Error("mode 仅支持 global 或 local。");
  if (i == null || typeof i != "object" || Array.isArray(i)) throw new Error("style 必须是对象。");
  if (i.width != null && (!Number.isFinite(i.width) || i.width <= 0)) throw new Error("style.width 必须大于 0。");
  const s = {
    ...t ?? {},
    ...e,
    type: n,
    mode: a,
    level: r,
    height: o,
    style: { ...t?.style ?? {}, ...i }
  };
  return delete s.maxCells, s;
}
function Pf(e, t) {
  if (!e?.dataSources?.add || !e?.dataSources?.remove || !e?.scene?.primitives?.add || !e?.scene?.primitives?.remove)
    throw new Error("viewer 必须是已初始化且未销毁的 Cesium.Viewer。");
  if (!t?.CustomDataSource || !t?.PrimitiveCollection || !t?.Cartesian3 || !t?.Color)
    throw new Error("Cesium 参数无效，请传入创建 Viewer 时使用的 Cesium 命名空间对象。");
  if (typeof e.isDestroyed == "function" && e.isDestroyed()) throw new Error("不能向已销毁的 Cesium.Viewer 挂载网格。");
}
function Ze(e, t, n = {}) {
  Pf(e, t);
  let r = xi(n), o = 0, a = !1, i = !1, s = !0, l = null;
  const c = new t.CustomDataSource(`spatial-grid-${r.type}`), d = e.scene.primitives.add(new t.PrimitiveCollection()), u = Promise.resolve(e.dataSources.add(c)).then(() => {
    i = !0, a && e.dataSources.remove(c, !0);
  });
  function f() {
    c.entities.removeAll(), s && !d.isDestroyed() && d.removeAll();
  }
  async function h(E, G) {
    if (a || G !== o) return null;
    try {
      const I = E.mode === "local" ? await qh({ ...E, viewer: e, Cesium: t }) : null;
      if (a || G !== o) return null;
      c.name = `spatial-grid-${E.type}`, f();
      const F = ys[E.type], q = await F({
        Cesium: t,
        viewer: e,
        dataSource: c,
        primitiveCollection: d,
        mode: E.mode,
        level: E.level,
        height: E.height,
        region: I,
        style: E.style
      });
      return a || G !== o ? null : (l = {
        type: E.type,
        mode: E.mode,
        level: E.level,
        height: E.height,
        regionId: I?.id ?? null,
        ...q
      }, e.scene.requestRender?.(), E.onRendered?.(l), l);
    } catch (I) {
      const F = I instanceof Error ? I : new Error(String(I));
      throw !a && G === o && (f(), e.scene.requestRender?.(), E.onError?.(F)), F;
    }
  }
  function g(E) {
    const G = ++o;
    return u.then(() => h(E, G));
  }
  let p = g({ ...r, style: { ...r.style } });
  const x = p;
  function S(E = {}) {
    if (a) return Promise.reject(new Error("空间网格实例已经销毁。"));
    try {
      r = xi(E, r);
    } catch (F) {
      return Promise.reject(F);
    }
    const G = { ...r, style: { ...r.style } }, I = ++o;
    return p = p.catch(() => null).then(() => u).then(() => h(G, I)), p;
  }
  function T() {
    return S({});
  }
  function M() {
    a || (o += 1, l = null, f(), e.scene.requestRender?.());
  }
  function A() {
    a || (a = !0, o += 1, l = null, s && (e.scene.primitives.remove(d), s = !1), i ? e.dataSources.remove(c, !0) : u.then(() => e.dataSources.remove(c, !0)).catch(() => {
    }));
  }
  function _() {
    return {
      options: { ...r, style: { ...r.style } },
      mounted: i,
      destroyed: a,
      lastResult: l
    };
  }
  const k = {
    latlon: bs,
    s2: vs,
    h3: _s,
    beidou: Ms,
    geosot: Ss,
    gars: Ps
  }, C = {
    latlon: df,
    s2: gf,
    h3: mf,
    beidou: yf,
    geosot: xf,
    gars: wf
  };
  function P(E, G) {
    return k[r.type](E, G, r.level, r.height);
  }
  function H(E) {
    return C[r.type](e, t, E, r);
  }
  return {
    ready: x,
    dataSource: c,
    primitiveCollection: d,
    update: S,
    refresh: T,
    clear: M,
    destroy: A,
    getState: _,
    getCellAt: P,
    pickCell: H
  };
}
function O0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "latlon" });
}
function H0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "s2" });
}
function B0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "h3" });
}
function q0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "beidou" });
}
function V0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "geosot" });
}
function $0(e, t, n = {}) {
  return Ze(e, t, { ...n, type: "gars" });
}
const Ef = {
  lon: 116.391,
  lat: 39.907,
  height: 1200,
  heading: 28,
  pitch: -34,
  range: 11e3
}, bi = {
  color: [0, 158, 255, 0.24],
  outlineColor: [122, 230, 255, 0.96],
  footprintColor: [0, 210, 255, 0.18],
  displayMode: "solid",
  effect: {
    color: [53, 215, 255, 0.95],
    duration: 1800,
    repeat: 3,
    direction: "+",
    width: 4
  }
}, cn = {
  satellite: {
    mode: "satellite",
    origin: { lon: 116.391, lat: 39.907, height: 3200 },
    target: { lon: 116.391, lat: 39.907, height: 180 },
    fov: 32,
    far: 3300,
    aspectRatio: 1.25,
    label: "卫星对地扫描视域"
  },
  ground: {
    mode: "ground",
    origin: { lon: 116.391, lat: 39.907, height: 90 },
    target: { lon: 116.414, lat: 39.921, height: 3100 },
    fov: 28,
    far: 3600,
    aspectRatio: 1.15,
    label: "地面站对天扫描视域"
  }
};
function Tf(e) {
  return {
    ...e,
    origin: { ...e.origin },
    target: { ...e.target }
  };
}
function U0(e, t, n = {}) {
  let r = null, o = [], a = [], i = [], s = null, l = 0, c = !1, d = null, u = 0, f = 0, h = !1;
  function g(W) {
    n.onStatusChange?.(W), n.onFaceCountChange?.(o.length ? 5 : 0), n.onModeChange?.(r?.mode || null), n.onScanningChange?.(c), n.onDisplayModeChange?.(r?.displayMode || null), n.onEffectRunningChange?.(h), e?.scene?.requestRender?.();
  }
  function p(W) {
    return t.Cartesian3.fromDegrees(
      Number(W.lon),
      Number(W.lat),
      Number(W.height || 0)
    );
  }
  function x(W) {
    if (W instanceof t.Color) return W;
    if (typeof W == "string")
      return t.Color.fromCssColorString(W);
    const [N, R, X, O = 1] = W;
    return new t.Color(N / 255, R / 255, X / 255, O);
  }
  function S(W = {}) {
    const N = W.mode === "ground" ? cn.ground : cn.satellite, R = n.defaults || {};
    return {
      ...Tf(N),
      ...bi,
      ...R,
      ...W,
      target: {
        ...N.target,
        ...R.target || {},
        ...W.target || {}
      },
      origin: {
        ...N.origin,
        ...R.origin || {},
        ...W.origin || {}
      },
      effect: {
        ...bi.effect,
        ...R.effect || {},
        ...W.effect || {}
      }
    };
  }
  function T(W, N) {
    if (!c) return N;
    const R = Number(r.scanRadius) || 0.034;
    return {
      lon: W.lon + Math.cos(l) * R,
      lat: W.lat + Math.sin(l) * R * 0.72,
      height: N.height
    };
  }
  function M() {
    if (!r) return [];
    const W = r.mode === "ground" ? T(r.origin, r.target) : r.target, N = p(r.origin), R = p(W), X = t.Cartesian3.normalize(
      t.Cartesian3.subtract(R, N, new t.Cartesian3()),
      new t.Cartesian3()
    ), O = t.Transforms.eastNorthUpToFixedFrame(N), $ = t.Matrix4.getColumn(O, 0, new t.Cartesian4()), U = t.Matrix4.getColumn(O, 1, new t.Cartesian4()), Q = t.Matrix4.getColumn(O, 2, new t.Cartesian4());
    let B = t.Cartesian3.cross(
      X,
      new t.Cartesian3(Q.x, Q.y, Q.z),
      new t.Cartesian3()
    );
    t.Cartesian3.magnitude(B) < 1e-6 ? B = new t.Cartesian3($.x, $.y, $.z) : t.Cartesian3.normalize(B, B);
    let et = t.Cartesian3.cross(B, X, new t.Cartesian3());
    t.Cartesian3.magnitude(et) < 1e-6 ? et = new t.Cartesian3(U.x, U.y, U.z) : t.Cartesian3.normalize(et, et);
    const it = Number(r.far) || 3e3, ut = Math.tan(t.Math.toRadians(Number(r.fov) || 30) / 2) * it, Z = ut * (Number(r.aspectRatio) || 1), st = t.Cartesian3.add(
      N,
      t.Cartesian3.multiplyByScalar(X, it, new t.Cartesian3()),
      new t.Cartesian3()
    ), nt = t.Cartesian3.multiplyByScalar(
      B,
      Z,
      new t.Cartesian3()
    ), rt = t.Cartesian3.multiplyByScalar(
      et,
      ut,
      new t.Cartesian3()
    );
    return [
      N,
      t.Cartesian3.add(
        t.Cartesian3.subtract(st, nt, new t.Cartesian3()),
        rt,
        new t.Cartesian3()
      ),
      t.Cartesian3.add(
        t.Cartesian3.add(st, nt, new t.Cartesian3()),
        rt,
        new t.Cartesian3()
      ),
      t.Cartesian3.subtract(
        t.Cartesian3.add(st, nt, new t.Cartesian3()),
        rt,
        new t.Cartesian3()
      ),
      t.Cartesian3.subtract(
        t.Cartesian3.subtract(st, nt, new t.Cartesian3()),
        rt,
        new t.Cartesian3()
      )
    ];
  }
  function A() {
    return [
      ...o,
      ...a,
      ...i
    ];
  }
  function _() {
    const W = Math.round(Number(r?.effect?.repeat) || 3);
    return Math.min(Math.max(W, 1), 12);
  }
  function k(W) {
    const N = M();
    if (N.length < 5) return [];
    const R = _(), X = (u + W / R) % 1, $ = 0.04 + (r.effect.direction === "-" ? 1 - X : X) * 0.92;
    return N.slice(1).map(
      (U) => t.Cartesian3.lerp(
        N[0],
        U,
        $,
        new t.Cartesian3()
      )
    );
  }
  function C({ silent: W = !0 } = {}) {
    d?.(), d = null, f = 0, h = !1, W || g("视锥动态扫描已暂停。");
  }
  function P({ silent: W = !0 } = {}) {
    if (!i.length || d) return !1;
    h = !0, f = Date.now();
    const N = () => {
      const R = Date.now(), X = Math.max(Number(r?.effect?.duration) || 1800, 1);
      u = (u + (R - f) / X) % 1, f = R, e?.scene?.requestRender?.();
    };
    if (e.clock?.onTick?.addEventListener)
      d = e.clock.onTick.addEventListener(N);
    else {
      const R = globalThis.setInterval(N, 16);
      d = () => globalThis.clearInterval(R);
    }
    return W || g("视锥动态扫描运行中。"), !0;
  }
  function H(W, N = !0) {
    if (!r) return null;
    const R = ["solid", "radar", "overlay"].includes(W) ? W : "solid";
    r.displayMode = R;
    const X = R === "solid" || R === "overlay", O = R === "radar" || R === "overlay";
    return o.forEach(($) => {
      $.show = X;
    }), a.forEach(($) => {
      $.show = r.showOutline !== !1;
    }), i.forEach(($) => {
      $.show = O;
    }), O ? P() : C(), N && g({
      solid: "当前显示普通半透明视锥。",
      radar: "当前显示视锥动态扫描层。",
      overlay: "普通视锥与动态扫描层已叠加显示。"
    }[R]), R;
  }
  function E({ silent: W = !0 } = {}) {
    s !== null && (globalThis.clearInterval(s), s = null), c = !1, W || g("地面站扫描已暂停。");
  }
  function G(W = !0) {
    E(), C(), A().forEach((N) => e?.entities.remove(N)), o = [], a = [], i = [], W && g("传感器视域已清除。");
  }
  function I(W = {}) {
    if (!e || !t) return null;
    G(!1), r = S(W);
    const N = x(r.color), R = x(r.outlineColor), X = x(r.footprintColor);
    [
      [0, 1, 2],
      [0, 2, 3],
      [0, 3, 4],
      [0, 4, 1],
      [1, 2, 3, 4]
    ].forEach((Q, B) => {
      o.push(
        e.entities.add({
          name: `${r.label}-面-${B + 1}`,
          polygon: {
            hierarchy: new t.CallbackProperty(() => {
              const et = M();
              return new t.PolygonHierarchy(
                Q.map((it) => et[it])
              );
            }, !1),
            perPositionHeight: !0,
            material: B === 4 ? X : N,
            outline: !1
          }
        })
      );
    }), [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1]
    ].forEach((Q) => {
      a.push(
        e.entities.add({
          name: `${r.label}-轮廓`,
          polyline: {
            positions: new t.CallbackProperty(() => {
              const B = M();
              return Q.map((et) => B[et]);
            }, !1),
            width: Number(r.outlineWidth) || 2,
            material: R
          }
        })
      );
    });
    let U = x(r.effect.color);
    r.effect.alpha !== void 0 && (U = U.withAlpha(Number(r.effect.alpha)));
    for (let Q = 0; Q < _(); Q += 1)
      i.push(
        e.entities.add({
          name: `${r.label}-空心动态扫描-${Q + 1}`,
          polyline: {
            positions: new t.CallbackProperty(() => {
              const B = k(Q);
              return B.length ? [...B, B[0]] : [];
            }, !1),
            width: Math.max(Number(r.effect.width) || 4, 1),
            material: U
          }
        })
      );
    return u = 0, H(r.displayMode, !1), g(`${r.label} 已创建。`), r;
  }
  function F(W = {}) {
    return I({
      ...r || cn.satellite,
      ...W
    });
  }
  function q(W = {}) {
    if (!e || !t) return;
    const N = { ...Ef, ...W }, R = Number(N.heading), X = Number(N.pitch), O = Number(N.range);
    e.camera.lookAt(
      t.Cartesian3.fromDegrees(
        Number(N.lon ?? N.lng ?? N.longitude),
        Number(N.lat ?? N.latitude),
        Number(N.height ?? N.alt)
      ),
      new t.HeadingPitchRange(
        t.Math.toRadians(Number.isFinite(R) ? R : 28),
        t.Math.toRadians(Number.isFinite(X) ? X : -34),
        Number.isFinite(O) ? O : 11e3
      )
    ), e.camera.lookAtTransform(t.Matrix4.IDENTITY);
  }
  function K(W = {}) {
    const N = I({
      ...cn.ground,
      ...W
    });
    return q(W.camera), N;
  }
  function J(W = {}) {
    const N = I({
      ...cn.satellite,
      ...W
    });
    return q(W.camera), N;
  }
  function L(W = {}) {
    if (r?.mode !== "ground" && K(W), c) return !0;
    c = !0;
    const N = Number(W.scanSpeed) || 0.035, R = Math.max(Number(W.scanInterval) || 32, 1);
    return g("地面站对天扫描中。"), s = globalThis.setInterval(() => {
      l += N, e?.scene?.requestRender?.();
    }, R), !0;
  }
  function V(W = {}) {
    return c ? (E({ silent: !1 }), !1) : (L(W), !0);
  }
  function y() {
    G(!1), r = null;
  }
  return {
    createSensorFrustum: I,
    updateSensorFrustum: F,
    setGroundStationMode: K,
    setSatelliteMode: J,
    startGroundScan: L,
    stopScan: E,
    toggleGroundScan: V,
    startFrustumEffect: P,
    stopFrustumEffect: C,
    toggleFrustumEffect: () => h ? (C({ silent: !1 }), !1) : (P({ silent: !1 }), !0),
    setDisplayMode: H,
    setSolidMode: () => H("solid"),
    setRadarMode: () => H("radar"),
    setOverlayMode: () => H("overlay"),
    clearSensorFrustum: G,
    focusScene: q,
    getSensorConfig: () => r,
    getEntities: A,
    getSolidEntities: () => [...o],
    getOutlineEntities: () => [...a],
    getEffectEntities: () => [...i],
    isScanning: () => c,
    isEffectRunning: () => h,
    destroy: y
  };
}
const Es = {
  lon: -117.16,
  lat: 32.71,
  height: 360
}, kf = {
  heading: 0,
  pitch: -90,
  range: 1100
}, Af = {
  image: "/libs/case_list/WaterGun/water.png",
  position: Es,
  startColor: [1, 1, 1, 0.6],
  endColor: [0.8, 0.86, 1, 0.4],
  emissionRate: 5,
  emitterRadius: 0.2,
  minimumParticleLife: 1,
  maximumParticleLife: 6,
  minimumSpeed: 1,
  maximumSpeed: 4,
  startScale: 0,
  endScale: 10,
  particleSize: 25,
  lifetime: 16,
  loop: !0,
  sizeInMeters: !0,
  offset: { x: -4, y: 0, z: 50 },
  velocity: { x: 20, y: 0, z: -30 }
};
function j0(e, t, n = {}) {
  const r = Mn(
    e,
    t,
    {
      ...n,
      preset: {
        idPrefix: "water-gun",
        defaultOptions: Af,
        defaultPosition: Es,
        defaultCamera: kf,
        nestedOptionKeys: ["offset", "velocity"],
        createEmitter: ({ Cesium: o, options: a }) => new o.CircleEmitter(Number(a.emitterRadius)),
        createUpdateCallback: ({ Cesium: o, options: a }) => _n(o, a.velocity),
        formatCountStatus: (o) => `已创建 ${o} 个水枪粒子效果。`,
        clearedStatus: "水枪粒子已清空。"
      }
    }
  );
  return {
    addWaterGun: r.add,
    createWaterGunEffect: r.create,
    updateWaterGun: r.update,
    removeWaterGun: r.remove,
    getWaterGunEffect: r.getEffect,
    getWaterGunEffects: r.getEffects,
    clearWaterGunEffects: r.clear,
    focusScene: r.focusScene,
    destroy: r.destroy
  };
}
const er = {
  lon: 116.36485552299206,
  lat: 39.99754814959118
}, Ts = {
  color: "#ffcb33",
  size: 1e3,
  height: 10,
  duration: 3e3,
  gradient: 0,
  count: 4,
  position: er
}, lo = "CircleWaveMaterial", wi = /* @__PURE__ */ new WeakMap();
function qn(e, t) {
  return e ?? t;
}
function Df(e, t) {
  return typeof t == "string" ? e.Color.fromCssColorString(t) : t || e.Color.RED;
}
function Wf(e) {
  const t = Number(e);
  return Number.isFinite(t) && t > 0 ? t : Ts.size;
}
function Cf(e, t = er) {
  if (t instanceof e.Cartesian3)
    return t;
  if (Array.isArray(t)) {
    const [a, i, s = 100] = t;
    return e.Cartesian3.fromDegrees(a, i, s);
  }
  const n = t.lon ?? t.lng ?? t.longitude ?? er.lon, r = t.lat ?? t.latitude ?? er.lat, o = t.height ?? t.alt ?? 100;
  return e.Cartesian3.fromDegrees(n, r, o);
}
function Nf(e) {
  if (!e)
    return null;
  const t = wi.get(e);
  if (t)
    return t;
  const n = typeof e.createPropertyDescriptor == "function" ? e.createPropertyDescriptor : (a) => {
    const i = `_${a}`;
    return {
      get() {
        return this[i];
      },
      set(s) {
        const l = this[i];
        l !== s && (this[i] = s, this._definitionChanged.raiseEvent(
          this,
          a,
          s,
          l
        ));
      }
    };
  }, r = (a, i, s, l) => e.Property && typeof e.Property.getValueOrClonedDefault == "function" ? e.Property.getValueOrClonedDefault(
    a,
    i,
    s,
    l
  ) : a && typeof a.getValue == "function" ? a.getValue(i, l) : qn(a, s);
  function o(a = {}) {
    this._definitionChanged = new e.Event(), this.color = Df(e, a.color), this.duration = qn(a.duration, 1e3), this.count = Math.max(qn(a.count, 2), 1), this.gradient = Math.min(qn(a.gradient, 0.1), 1), this.time = Date.now();
  }
  return Object.defineProperties(o.prototype, {
    isConstant: {
      get() {
        return !1;
      }
    },
    definitionChanged: {
      get() {
        return this._definitionChanged;
      }
    },
    color: n("color"),
    gradient: n("gradient"),
    duration: n("duration"),
    count: n("count")
  }), o.prototype.getType = function() {
    return lo;
  }, o.prototype.getValue = function(i, s) {
    const l = s || {};
    return l.color = r(
      this.color,
      i,
      e.Color.WHITE,
      l.color
    ), l.time = (Date.now() - this.time) % this.duration / this.duration, l.count = this.count, l.gradient = 1 + 10 * (1 - this.gradient), l;
  }, o.prototype.equals = function(i) {
    return this === i || i instanceof o && e.Property.equals(this.color, i.color) && e.Property.equals(this.duration, i.duration) && e.Property.equals(this.count, i.count) && e.Property.equals(this.gradient, i.gradient);
  }, e.Material._materialCache.addMaterial(lo, {
    fabric: {
      type: lo,
      uniforms: {
        color: new e.Color(1, 0.8, 0.2, 1),
        time: 1,
        count: 1,
        gradient: 0.1
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          material.diffuse = 1.5 * color.rgb;
          vec2 st = materialInput.st;
          vec3 str = materialInput.str;
          float dis = distance(st, vec2(0.5, 0.5));
          float per = fract(time);
          if (abs(str.z) > 0.001) {
            discard;
          }
          if (dis > 0.5) {
            discard;
          } else {
            float perDis = 0.5 / count;
            float disNum;
            float bl = 0.0;
            for (int i = 0; i <= 9; i++) {
              if (float(i) <= count) {
                disNum = perDis * float(i) - dis + per / count;
                if (disNum > 0.0) {
                  if (disNum < perDis) {
                    bl = 1.0 - disNum / perDis;
                  } else if (disNum - perDis < perDis) {
                    bl = 1.0 - abs(1.0 - disNum / perDis);
                  }
                  material.alpha = pow(bl, gradient);
                }
              }
            }
          }
          return material;
        }
      `
    },
    translucent() {
      return !0;
    }
  }), wi.set(e, o), o;
}
function K0(e, t, n = {}) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  function a(d) {
    const u = Nf(t);
    return new u({
      color: d.color,
      duration: d.duration,
      gradient: d.gradient,
      count: d.count
    });
  }
  function i(d = {}) {
    if (!e || !t)
      return null;
    const u = d.id || `water-ripple-${o += 1}`;
    if (r.has(u))
      return r.get(u);
    const f = {
      ...Ts,
      ...n.defaults,
      ...d
    }, h = Wf(f.size), g = e.entities.add({
      id: u,
      name: f.name || "Water ripple",
      position: Cf(t, f.position),
      show: f.show ?? !0,
      ellipse: {
        semiMinorAxis: h,
        semiMajorAxis: h,
        height: f.height,
        material: a(f)
      }
    }), p = {
      id: u,
      entity: g,
      get options() {
        return { ...f };
      },
      setVisible(x) {
        g.show = !!x, e.scene.requestRender();
      },
      remove() {
        e.entities.contains(g) && e.entities.remove(g), r.delete(u);
      }
    };
    return r.set(u, p), p;
  }
  function s(d) {
    r.get(d)?.remove();
  }
  function l() {
    Array.from(r.keys()).forEach(s);
  }
  function c() {
    l();
  }
  return {
    addRipple: i,
    createWaterRipple: i,
    remove: s,
    clear: l,
    destroy: c,
    getRipple(d) {
      return r.get(d);
    },
    getRipples() {
      return Array.from(r.values());
    }
  };
}
const Lf = Object.freeze({
  url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_CityLights_2012/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg",
  layer: "VIIRS_CityLights_2012",
  style: "default",
  format: "image/jpeg",
  tileMatrixSetID: "GoogleMapsCompatible_Level8",
  maximumLevel: 8,
  credit: "NASA Earth at Night (Black Marble)"
});
function If(e, t = {}) {
  return e?.WebMapTileServiceImageryProvider ? new e.WebMapTileServiceImageryProvider({
    ...Lf,
    ...t.providerOptions
  }) : null;
}
const Rf = typeof window < "u" && window.KAIYUN_API_CONFIG?.tilesetURL || "/tiles/root.json", co = Object.freeze({
  url: Rf,
  maximumScreenSpaceError: 16,
  dynamicScreenSpaceError: !0
});
function Ff(e) {
  if (!e?.Cesium3DTileset || !e?.Resource)
    throw new TypeError("加载三维影像需要完整的 Cesium 运行时");
}
function zf(e) {
  if (!e?.scene?.primitives)
    throw new TypeError("加载三维影像需要有效的 Cesium Viewer 实例");
}
function Gf(e, t, n, r) {
  return t instanceof e.Resource ? t : new e.Resource({ url: t, headers: n, queryParameters: r });
}
async function ks(e, t, n = {}) {
  Ff(e), zf(t);
  const {
    url: r = co.url,
    headers: o,
    queryParameters: a,
    show: i = !0,
    flyTo: s = !1,
    flyToOptions: l,
    onTileFailed: c,
    tilesetOptions: d = {}
  } = n;
  if (!r)
    throw new TypeError("三维影像的 tileset URL 不能为空");
  const u = Gf(e, r, o, a), f = await e.Cesium3DTileset.fromUrl(u, {
    maximumScreenSpaceError: co.maximumScreenSpaceError,
    dynamicScreenSpaceError: co.dynamicScreenSpaceError,
    ...d
  });
  if (t.isDestroyed?.())
    return f.destroy(), null;
  let h = !1, g;
  t.scene.primitives.add(f), f.show = i, c && (g = f.tileFailed.addEventListener(c));
  const p = {
    viewer: t,
    tileset: f,
    get visible() {
      return !h && f.show;
    },
    get isDestroyed() {
      return h;
    },
    setVisible(x) {
      h || (f.show = !!x);
    },
    async flyTo(x = l) {
      return h ? !1 : t.flyTo(f, x);
    },
    destroy() {
      if (h || (h = !0, g?.(), t.isDestroyed?.())) return;
      const x = t.scene?.primitives;
      x?.contains(f) ? x.removeAndDestroy(f) : f.isDestroyed() || f.destroy();
    }
  };
  return s && await p.flyTo(), p;
}
async function Y0(e, t, n = {}) {
  if (!e || !t) return null;
  const {
    hideGlobe: r = !0,
    restoreGlobeOnError: o = !0,
    onError: a,
    ...i
  } = n, s = t.scene?.globe, l = s?.show;
  s && r && (s.show = !1);
  try {
    const c = await ks(
      e,
      t,
      i
    );
    return c ? (t.imageryLayers?.removeAll(), c) : (s && r && o && (s.show = l), null);
  } catch (c) {
    return s && r && o && (s.show = l), a ? a(c) : console.error("Cesium 三维影像加载失败：", c), null;
  }
}
const Of = `
vec3 waterToLinear(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
vec3 waterToSrgb(vec3 c) { return pow(max(c, vec3(0.0)), vec3(1.0 / 2.2)); }

// GlobeVS 在二维/三维都保留原始地球坐标 v_positionMC；宏在 GlobeFS 的
// 材质调用处传入它，避免用二维相机坐标误算经纬度。
#define czm_getMaterial(inputData) waterGlobeMaterial(inputData, v_positionMC)
czm_material waterGlobeMaterial(czm_materialInput inputData, vec3 ground) {
    czm_material material = czm_getDefaultMaterial(inputData);
    material.alpha = 0.0;
    vec3 groundNormal = normalize(ground * radiiScale * radiiScale);
    vec2 groundUV = vec2(atan(ground.y, ground.x) / czm_twoPi + 0.5,
                        asin(clamp(groundNormal.z, -1.0, 1.0)) / czm_pi + 0.5);
    float elevation = texture(bathymetryMap, groundUV).r * 255.0;
    // 海陆遮罩和真实水深必须来自同一张高程贴图。不能用插值后的地形网格
    // 与解析椭球面的距离：相机拉远时 Globe 会切换到更粗的 LOD，三角形弦面
    // 会落到椭球内部并被误判成水深，从而把地形网格显示成经纬条纹。
    float waterAmount = 1.0 - smoothstep(130.0, 143.0, elevation);
    if (czm_sceneMode != czm_sceneMode3D) {
        // 二维复用同一水色参数和吸收公式，以垂直水深代替三维视线路径。
        // 不采样业务画面，且不在平面模式计算太阳反射或动态折射。
        if (waterAmount < 0.001) return material;
        float depth = max((130.0 - elevation) / 130.0 * 8000.0, 0.0);
        float thickness = 0.252 * depth * pow(max(depth, 30.0), -0.4);
        vec3 transmission = exp(-thickness / extinction);
        float inscatter = 1.0 - exp(-thickness / visibility);
        float deepMix = 1.0 - exp(-thickness * fadeSpeed / visibility);
        vec3 col = waterToLinear(texture(floorMap, groundUV).rgb) * floorDim * transmission
                 + mix(shallowColor, deepColor, deepMix) * inscatter;
        col = col * 2.5 / (1.0 + col * 2.5);
        material.diffuse = waterToSrgb(col);
        material.alpha = waterAmount;
        return material;
    }
    vec3 dir = normalize(ground - czm_viewerPositionWC);
    vec3 o = czm_viewerPositionWC / R0 * radiiScale;
    vec3 d = dir * radiiScale;
    float a = dot(d, d);
    float b = dot(o, d);
    float disc = b * b - a * (dot(o, o) - 1.0);
    if (disc < 0.0) return material;
    float tNear = (-b - sqrt(disc)) / a * R0;
    if (tNear <= 0.0) return material;
    if (waterAmount < 0.001) return material;

    vec3 p = czm_viewerPositionWC + dir * tNear;
    vec3 n = normalize(p * radiiScale * radiiScale);
    vec3 east = normalize(vec3(-n.y, n.x, 0.0) + vec3(1e-6, 0.0, 0.0));
    vec3 north = cross(n, east);
    vec2 uv = vec2(atan(p.y, p.x) / czm_twoPi + 0.5,
                   asin(clamp(n.z, -1.0, 1.0)) / czm_pi + 0.5);
    vec2 uv1 = uv * vec2(4.0, 2.0) + vec2(time * 0.010, time * 0.006);
    vec2 uv2 = uv * vec2(4.0, 2.0) * 1.83 + vec2(-time * 0.008, time * 0.011);
    vec3 n1 = texture(normalMap, fract(uv1)).xyz * 2.0 - 1.0;
    vec3 n2 = texture(normalMap, fract(uv2)).xyz * 2.0 - 1.0;
    vec3 nt = normalize(vec3((n1.xy + n2.xy) * wavesOn, 1.0));
    vec3 N = normalize(east * nt.x + north * nt.y + n * nt.z);

    // 折射只读取地球自身的全球贴图，保留线、标记和半透明区域原有颜色。
    vec2 refractedUV = groundUV + nt.xy * 0.00275 * wavesOn;
    refractedUV = vec2(fract(refractedUV.x), clamp(refractedUV.y, 0.0, 1.0));
    // 灰度 <=130 为海底，岸边不折射到陆地。
    if (texture(bathymetryMap, refractedUV).r >= 130.0 / 255.0) refractedUV = groundUV;
    vec3 floorCol = waterToLinear(texture(floorMap, refractedUV).rgb);
    // 使用原始（未夸张）海深计算吸收；只以入射角延长视线路径。
    // 结果与 terrain LOD、三角形插值误差和 verticalExaggeration 无关。
    float physicalDepth = max((130.0 - elevation) / 130.0 * 8000.0, 0.0);
    float path = physicalDepth / max(dot(n, -dir), 0.1);
    float depth = max(physicalDepth, 30.0);
    float thickness = 0.252 * path * pow(depth, -0.4);
    vec3 transmission = exp(-thickness / extinction);
    float inscatter = 1.0 - exp(-thickness / visibility);
    float deepMix = 1.0 - exp(-thickness * fadeSpeed / visibility);
    vec3 col = floorCol * floorDim * transmission
             + mix(shallowColor, deepColor, deepMix) * inscatter;

    vec3 L = normalize(czm_lightDirectionWC);
    vec3 H = normalize(L - dir);
    float spec = pow(max(dot(N, H), 0.0), 160.0);
    float fres = pow(1.0 - max(dot(n, -dir), 0.0), 5.0);
    // 日照由 Globe 后续统一计算，避免重复压暗。
    col += vec3(0.12) * spec * wavesOn;
    col += vec3(0.85, 0.9, 0.95) * fres * 0.05;
    col = col * 2.5 / (1.0 + col * 2.5);
    material.diffuse = waterToSrgb(col);
    material.alpha = waterAmount;
    return material;
}
`;
function Hf(e, t, n, r) {
  const o = t.scene, a = o.canvas, i = t.cesiumWidget.container, s = document.createElement("div");
  s.dataset.earthElevationInfo = "", s.setAttribute("aria-label", "鼠标位置水深与海拔"), Object.assign(s.style, {
    position: "absolute",
    zIndex: "2",
    pointerEvents: "none",
    color: "#d8e7ef",
    font: "12px/1.5 sans-serif",
    whiteSpace: "nowrap",
    textShadow: "0 1px 3px #000, 0 0 5px #000"
  }), i.appendChild(s);
  let l;
  const c = () => {
    s.textContent = "", s.style.display = "none";
  }, d = () => {
    const g = r(), p = g.elevationInfo, x = g.show && p.show;
    s.style.display = "none";
    for (const P of ["top", "bottom", "left", "right"]) s.style[P] = "auto";
    const [S, T] = p.position.split("-");
    if (s.style[T] = `${p.offsetX}px`, s.style[S] = `${p.offsetY}px`, !x) {
      c();
      return;
    }
    if (!l || o.mode === e.SceneMode.MORPHING) {
      c();
      return;
    }
    const M = t.camera.pickEllipsoid(l, e.Ellipsoid.WGS84);
    if (!M) {
      c();
      return;
    }
    const A = e.Cartographic.fromCartesian(M), _ = e.Math.toDegrees(A.longitude), k = e.Math.toDegrees(A.latitude), C = n(_, k);
    if (!Number.isFinite(C)) {
      c();
      return;
    }
    s.style.display = "block", s.textContent = `${_.toFixed(2)}°, ${k.toFixed(2)}°  ${C < 0 ? "水深" : "海拔"} ≈ ${Math.round(Math.abs(C))} m`;
  }, u = (g) => {
    const p = a.getBoundingClientRect();
    l = new e.Cartesian2(
      (g.clientX - p.left) * a.clientWidth / p.width,
      (g.clientY - p.top) * a.clientHeight / p.height
    ), d(), o.requestRender();
  }, f = () => {
    l = void 0, c();
  };
  a.addEventListener("pointermove", u), a.addEventListener("pointerleave", f);
  const h = o.preRender.addEventListener(d);
  return d(), {
    update: d,
    destroy() {
      h(), a.removeEventListener("pointermove", u), a.removeEventListener("pointerleave", f), s.remove();
    }
  };
}
const Bf = "/textures/cesium-earth/", Vn = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new Map();
let Un = null;
const qf = Object.freeze({
  show: !0,
  showWater: !0,
  showWaves: !0,
  waterPreset: "clear",
  quality: "ultra",
  exaggeration: 20,
  lighting: !0,
  textureBaseUrl: Bf,
  depthTestAgainstTerrain: !0,
  elevationInfo: Object.freeze({
    show: !0,
    position: "bottom-right",
    offsetX: 16,
    offsetY: 16
  })
}), _o = {
  clear: [0.35, 25, 0.8, [0.1, 0.42, 0.46], [4e-3, 0.02, 0.026], [6, 30, 32]],
  transparent: [0.45, 35, 0.7, [0.1, 0.42, 0.46], [4e-3, 0.02, 0.026], [8, 40, 44]],
  turbid: [0.3, 10, 1, [0.1, 0.42, 0.46], [4e-3, 0.02, 0.026], [2.5, 12, 13]],
  amber: [0.35, 25, 0.8, [0.62, 0.4, 0.08], [0.1, 0.012, 4e-3], [32, 16, 8]],
  gray: [0.4, 30, 0.8, [0.55, 0.55, 0.55], [0.03, 0.03, 0.03], [26, 26, 26]]
}, Mo = {
  standard: { dpr: !1, scale: 1, sse: 3 },
  high: { dpr: !0, scale: 1, sse: 2 },
  ultra: { dpr: !0, scale: 2, sse: 1.5 }
};
function So(e, t = {}) {
  const n = t.elevationInfo;
  if (n !== void 0 && (n === null || typeof n != "object" || Array.isArray(n)))
    throw new TypeError("elevationInfo 必须为配置对象");
  return {
    ...e,
    ...t,
    elevationInfo: { ...e.elevationInfo, ...n }
  };
}
function _i(e) {
  if (!Object.hasOwn(_o, e.waterPreset)) throw new RangeError("未知水色档位");
  if (!Object.hasOwn(Mo, e.quality)) throw new RangeError("未知画质档位");
  if (!Number.isFinite(e.exaggeration) || e.exaggeration < 0 || e.exaggeration > 40)
    throw new RangeError("地形夸张倍数必须在 0～40 之间");
  for (const n of ["show", "showWater", "showWaves", "lighting", "depthTestAgainstTerrain"])
    if (typeof e[n] != "boolean") throw new TypeError(`${n} 必须是布尔值`);
  const t = e.elevationInfo;
  if (typeof t.show != "boolean") throw new TypeError("elevationInfo.show 必须是布尔值");
  if (!["bottom-right", "bottom-left", "top-right", "top-left"].includes(t.position))
    throw new RangeError("读数位置必须为 bottom-right、bottom-left、top-right 或 top-left");
  for (const n of ["offsetX", "offsetY"])
    if (!Number.isFinite(t[n]) || t[n] < 0) throw new RangeError(`elevationInfo.${n} 必须为非负像素值`);
}
function nr(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => t(r), r.onerror = () => n(new Error(`地球贴图加载失败：${e}`)), r.src = e;
  });
}
function Vf(e) {
  if ($n.has(e)) return $n.get(e);
  const t = nr(e + "bathymetry_bw_composite_4k.jpg").then((n) => {
    const r = document.createElement("canvas");
    r.width = n.width, r.height = n.height;
    const o = r.getContext("2d", { willReadFrequently: !0 });
    o.drawImage(n, 0, 0);
    const a = o.getImageData(0, 0, n.width, n.height).data, i = new Uint8Array(n.width * n.height);
    for (let s = 0; s < i.length; s++) i[s] = a[s * 4];
    return { width: n.width, height: n.height, pixels: i };
  }).catch((n) => {
    throw $n.delete(e), n;
  });
  return $n.set(e, t), t;
}
function $f({ width: e, height: t, pixels: n }) {
  const r = Float32Array.from(
    { length: 256 },
    (o, a) => a <= 130 ? -(130 - a) / 130 * 8e3 : a >= 143 ? (a - 143) / 112 * 7500 : 0
  );
  return (o, a) => {
    const i = (o + 180) / 360, s = (i - Math.floor(i)) * (e - 1), l = Math.min(Math.max((90 - a) / 180, 0), 1) * (t - 1), c = Math.floor(s), d = Math.floor(l), u = (c + 1) % e, f = Math.min(d + 1, t - 1), h = s - c, g = l - d, p = (x, S) => r[n[S * e + x]];
    return (p(c, d) * (1 - h) + p(u, d) * h) * (1 - g) + (p(c, f) * (1 - h) + p(u, f) * h) * g;
  };
}
function Uf(e, t) {
  const n = new e.GeographicTilingScheme();
  return new e.CustomHeightmapTerrainProvider({
    width: 64,
    height: 64,
    tilingScheme: n,
    credit: "NASA Blue Marble — approximate bathymetry",
    callback(r, o, a) {
      const i = n.tileXYToRectangle(r, o, a), s = new Float32Array(4096);
      for (let l = 0; l < 64; l++) {
        const c = e.Math.toDegrees(e.Math.lerp(i.north, i.south, l / 63));
        for (let d = 0; d < 64; d++) {
          const u = e.Math.toDegrees(e.Math.lerp(i.west, i.east, d / 63));
          s[l * 64 + d] = t(u, c);
        }
      }
      return s;
    }
  });
}
async function jf(e, t, n = {}) {
  if (!e?.CustomHeightmapTerrainProvider || !e?.Material || !t?.scene?.globe)
    throw new TypeError("加载地球需要完整的 Cesium 运行时和有效 Viewer");
  let r = So(qf, n);
  _i(r);
  const o = e.Cartesian3.clone(t.camera.positionWC), a = e.Cartesian3.clone(t.camera.directionWC), i = r.textureBaseUrl.replace(/\/?$/, "/"), s = {};
  vi.set(t, s);
  const [l, c, d, u, f] = await Promise.all([
    Vf(i),
    e.SingleTileImageryProvider.fromUrl(i + "diffuse_toned_4k.webp", {
      rectangle: e.Rectangle.MAX_VALUE,
      credit: "NASA Blue Marble"
    }),
    nr(i + "water-normal.jpg"),
    nr(i + "diffuse_toned_4k.webp"),
    nr(i + "bathymetry_bw_composite_4k.jpg")
  ]);
  if (t.isDestroyed() || vi.get(t) !== s) return null;
  Vn.get(t)?.destroy();
  const h = t.scene, g = h.globe, p = t.imageryLayers, x = $f(l), S = Uf(e, x), T = n._baseLayers ?? Array.from({ length: p.length }, (Q, B) => {
    const et = p.get(B);
    return { layer: et, show: et.show };
  }), M = (Q, B) => Object.fromEntries(B.map((et) => [et, Q[et]])), A = {
    terrain: t.terrainProvider,
    globe: M(g, ["show", "material", "enableLighting", "depthTestAgainstTerrain", "showGroundAtmosphere", "showWaterEffect", "maximumScreenSpaceError"]),
    scene: M(h, ["verticalExaggeration", "verticalExaggerationRelativeHeight"]),
    viewer: M(t, ["resolutionScale", "useBrowserRecommendedResolution"])
  }, _ = e.Ellipsoid.WGS84.maximumRadius, k = e.Ellipsoid.WGS84.radii;
  let C;
  const P = () => {
    const [Q, B, et, it, ut, Z] = _o[r.waterPreset];
    C = {
      floorDim: Q,
      visibility: B,
      fadeSpeed: et,
      shallowColor: new e.Cartesian3(...it),
      deepColor: new e.Cartesian3(...ut),
      extinction: new e.Cartesian3(...Z)
    };
  };
  P();
  const H = new e.Material({
    fabric: {
      type: "BathymetryWaterGlobe",
      source: Of,
      uniforms: {
        // Fabric 会缓存并深拷贝模板，模板中不能存 DOM Image（再次创建会非法构造）。
        normalMap: e.Material.DefaultImageId,
        floorMap: e.Material.DefaultImageId,
        bathymetryMap: e.Material.DefaultImageId,
        time: 0,
        wavesOn: r.showWaves ? 1 : 0,
        radiiScale: new e.Cartesian3(_ / k.x, _ / k.y, _ / k.z),
        R0: _,
        ...C
      }
    },
    translucent: !1
  });
  Object.assign(H.uniforms, {
    normalMap: d,
    floorMap: u,
    bathymetryMap: f
  });
  const E = p.addImageryProvider(c, 0), G = Hf(e, t, x, () => r);
  let I = !1;
  const F = () => {
    t.terrainProvider = A.terrain, Object.assign(g, A.globe), Object.assign(h, A.scene), Object.assign(t, A.viewer);
    for (const Q of T)
      p.contains(Q.layer) && (Q.layer.show = Q.show);
  }, q = () => {
    if (I || t.isDestroyed() || !r.show) return;
    const Q = Mo[r.quality], B = Q.dpr && window.devicePixelRatio || 1, et = Math.max(h.canvas.clientWidth * h.canvas.clientHeight, 1) * (B * Q.scale) ** 2;
    t.useBrowserRecommendedResolution = !Q.dpr, t.resolutionScale = Q.scale * Math.min(1, Math.sqrt(16e6 / et)), g.maximumScreenSpaceError = Q.sse, h.requestRender();
  };
  let K = !1;
  const J = () => {
    K = r.show && r.showWater && g.show && E.show, r.show && (g.material = K ? H : A.globe.material), Object.assign(H.uniforms, C, {
      time: performance.now() / 1e3,
      wavesOn: r.showWaves ? 1 : 0
    }), K && r.showWaves && h.mode === e.SceneMode.SCENE3D && h.requestRender();
  }, L = () => {
    if (G.update(), E.show = r.show, r.show) {
      for (const Q of T)
        p.contains(Q.layer) && (Q.layer.show = !1);
      t.terrainProvider = S, g.show = !0, g.enableLighting = r.lighting, g.depthTestAgainstTerrain = r.depthTestAgainstTerrain, g.showGroundAtmosphere = !1, g.showWaterEffect = !1, h.verticalExaggeration = r.exaggeration, h.verticalExaggerationRelativeHeight = 0, q();
    } else F();
    J(), h.requestRender();
  }, V = e.Cartesian3.equals(t.camera.positionWC, o) && e.Cartesian3.equals(t.camera.directionWC, a);
  r.show && r.autoFocusChina !== !1 && V && h.mode !== e.SceneMode.MORPHING && t.camera.setView(r.initialView ?? {
    destination: e.Cartesian3.fromDegrees(105, 35, 156e5),
    orientation: { heading: 0, pitch: -Math.PI / 2, roll: 0 }
  });
  const y = h.preUpdate.addEventListener(J), W = h.morphTo2D, N = function(Q) {
    return W.call(this, r.show && r.autoFocusChina !== !1 ? 0 : Q);
  };
  h.morphTo2D = N;
  const R = h.morphComplete.addEventListener(() => {
    r.autoFocusChina === !1 || !r.show || h.mode !== e.SceneMode.SCENE2D || t.camera.setView(r.view2D ?? {
      destination: e.Cartesian3.fromDegrees(105, 35, 24e6),
      orientation: { heading: 0, pitch: -Math.PI / 2, roll: 0 }
    });
  }), X = new ResizeObserver(q);
  X.observe(h.canvas), window.addEventListener("resize", q);
  const O = {
    viewer: t,
    layer: E,
    get visible() {
      return !I && r.show;
    },
    get isDestroyed() {
      return I;
    },
    get options() {
      return { ...r, elevationInfo: { ...r.elevationInfo } };
    },
    get waterEnabled() {
      return !I && !t.isDestroyed() && K;
    },
    setOptions(Q = {}) {
      if (I || t.isDestroyed()) return;
      const B = So(r, Q);
      _i(B), r = B, P(), L();
    },
    setVisible(Q) {
      this.setOptions({ show: Q });
    },
    destroy() {
      I || (I = !0, y(), G.destroy(), R(), h.morphTo2D === N && (h.morphTo2D = W), X.disconnect(), window.removeEventListener("resize", q), window.removeEventListener("keydown", U), h.canvas.removeEventListener("pointerenter", $), h.canvas.removeEventListener("focusin", $), Un === O && (Un = null), Vn.get(t) === O && Vn.delete(t), t.isDestroyed() || (r.show && F(), p.contains(E) && p.remove(E, !0), h.requestRender()), H.destroy());
    }
  }, $ = () => {
    Un = O;
  }, U = (Q) => {
    if (Un !== O || I || t.isDestroyed() || !r.show || !E.show || !g.show || h.mode === e.SceneMode.MORPHING || !h.canvas.getClientRects().length || Q.defaultPrevented || Q.repeat || Q.isComposing || Q.ctrlKey || Q.metaKey || Q.altKey) return;
    const B = Q.target;
    if (B?.isContentEditable || B?.closest?.("input, textarea, select, [role='textbox']")) return;
    const et = Q.key.toLowerCase(), it = et === "w" ? "waterPreset" : et === "u" ? "quality" : null;
    if (!it) return;
    const ut = Object.keys(it === "waterPreset" ? _o : Mo);
    Q.preventDefault(), O.setOptions({ [it]: ut[(ut.indexOf(r[it]) + 1) % ut.length] });
  };
  return $(), h.canvas.addEventListener("pointerenter", $), h.canvas.addEventListener("focusin", $), window.addEventListener("keydown", U), Vn.set(t, O), L(), O;
}
const jn = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new Map([
  ["默认", "default"],
  ["default", "default"],
  ["暗黑", "dark"],
  ["dark", "dark"],
  ["影像", "imagery"],
  ["imagery", "imagery"],
  ["水球", "water"],
  ["water", "water"]
]), Kf = Object.freeze({
  url: "/Assets/static/{z}/{x}/{y}.png",
  minimumLevel: 0,
  maximumLevel: 6
});
function Yf(e, t = {}) {
  return new e.UrlTemplateImageryProvider({
    ...Kf,
    tilingScheme: new e.WebMercatorTilingScheme(),
    ...t
  });
}
function Jf(e, t, n = {}) {
  if (!e?.scene?.globe || e.isDestroyed())
    throw new TypeError("地球主题需要有效的 Cesium Viewer");
  const r = jn.get(e);
  if (r) return r;
  const o = e.imageryLayers, a = Array.from({ length: o.length }, (T, M) => {
    const A = o.get(M);
    return { layer: A, show: A.show };
  }), i = e.scene.globe, s = {
    terrain: e.terrainProvider,
    show: i.show,
    lighting: i.enableLighting
  };
  let l = null, c = null, d = !1, u = 0, f = Promise.resolve();
  const h = e.destroy, g = function(...T) {
    return S.destroy(), h.apply(this, T);
  }, p = () => {
    if (!e.isDestroyed()) {
      e.terrainProvider = s.terrain, i.show = s.show, i.enableLighting = s.lighting;
      for (const T of a)
        o.contains(T.layer) && (T.layer.show = T.show);
      e.scene.requestRender();
    }
  }, x = () => {
    l?.destroy(), l = null, c = null, p();
  }, S = {
    get theme() {
      return c;
    },
    get controller() {
      return l;
    },
    get isDestroyed() {
      return d;
    },
    setTheme(T = "默认", M = {}) {
      M = uo.get(T) === "water" ? So(n.water ?? {}, M) : { ...n[uo.get(T)], ...M };
      const A = uo.get(T);
      if (!A) return Promise.reject(new RangeError(`未知地球主题：${T}`));
      if (d) return Promise.reject(new Error("地球主题管理器已销毁"));
      const _ = ++u, k = () => d || e.isDestroyed() || _ !== u, C = async () => {
        if (k()) return null;
        x();
        let H = null;
        try {
          for (const E of a)
            o.contains(E.layer) && (E.layer.show = !1);
          if (A === "water")
            H = await jf(t, e, { ...M, _baseLayers: a });
          else if (A === "imagery")
            H = await ks(t, e, M), k() || (i.show = !1);
          else {
            const E = A === "dark" ? If(t, M) : M.providerOptions ? Yf(t, M.providerOptions) : await t.TileMapServiceImageryProvider.fromUrl(t.buildModuleUrl("Assets/Textures/NaturalEarthII"));
            if (!E) throw new Error("地球影像 Provider 创建失败");
            if (k()) return null;
            const G = o.addImageryProvider(E, 0);
            H = {
              layer: G,
              destroy() {
                !e.isDestroyed() && o.contains(G) && o.remove(G, !0);
              }
            }, e.terrainProvider = new t.EllipsoidTerrainProvider(), i.show = !0, i.enableLighting = !1;
          }
          return k() ? (H?.destroy(), p(), null) : (l = H, c = A, e.scene.requestRender(), S);
        } catch (E) {
          if (H?.destroy(), p(), k()) return null;
          throw E;
        }
      }, P = f.then(C);
      return f = P.catch(() => {
      }), P;
    },
    destroy() {
      d || (d = !0, u++, x(), !e.isDestroyed() && e.destroy === g && (e.destroy = h), f.finally(() => {
        jn.get(e) === S && jn.delete(e);
      }));
    }
  };
  return jn.set(e, S), e.destroy = g, S;
}
function J0(e, t, n = "默认", r = {}) {
  return Jf(t, e).setTheme(n, r);
}
Ti("cesium");
export {
  qf as CESIUM_EARTH_OPTIONS,
  co as CESIUM_IMAGERY_LAYER_OPTIONS,
  m0 as CHINA_ADCODE,
  il as DEFAULT_CIRCULAR_CLOCK_OPTIONS,
  hl as DEFAULT_CONE_OPTIONS,
  Ll as DEFAULT_CUSTOM_SHADER_MATERIAL_OPTIONS,
  Il as DEFAULT_CZML_LAYER_OPTIONS,
  _c as DEFAULT_DIFFUSION_POINT_OPTIONS,
  Yn as DEFAULT_DIFFUSION_POINT_POSITION,
  ba as DEFAULT_DYNAMIC_CONE_OPTIONS,
  Kf as DEFAULT_EARTH_TILE_OPTIONS,
  _a as DEFAULT_ELECTRONIC_FENCE_OPTIONS,
  Gi as DEFAULT_ELECTRONIC_FENCE_PATH,
  Ec as DEFAULT_ELECTRONIC_FENCE_VIEW,
  Nc as DEFAULT_EXPLOSION_CAMERA,
  Cc as DEFAULT_EXPLOSION_OPTIONS,
  Oi as DEFAULT_EXPLOSION_POSITION,
  Lc as DEFAULT_FIRE_IMAGE_URL,
  Ic as DEFAULT_FIRE_OPTIONS,
  Hi as DEFAULT_FIRE_POSITION,
  fl as DEFAULT_FRUSTUM_OPTIONS,
  y0 as DEFAULT_GEOJSON_CATALOG,
  Zc as DEFAULT_GEOJSON_OPTIONS,
  aa as DEFAULT_GRADIENT_CAMERA,
  kn as DEFAULT_GRADIENT_CENTER,
  $t as DEFAULT_GRADIENT_OPTIONS,
  yd as DEFAULT_HEATMAP_COLOR_STOPS,
  Dd as DEFAULT_HONEYCOMB_BOUNDS,
  Ki as DEFAULT_HONEYCOMB_COLOR_STOPS,
  Qn as DEFAULT_HONEYCOMB_OPTIONS,
  Ca as DEFAULT_INVERSE_MASK_OPTIONS,
  Vd as DEFAULT_MASSIVE_ICON_CAMERA,
  Xn as DEFAULT_MASSIVE_ICON_OPTIONS,
  Kd as DEFAULT_MASSIVE_MODEL_CAMERA,
  wo as DEFAULT_MASSIVE_MODEL_OPTIONS,
  Zd as DEFAULT_MVT_CAMERA,
  sr as DEFAULT_MVT_OPTIONS,
  uu as DEFAULT_POINT_CLUSTER_CAMERA,
  hn as DEFAULT_POINT_CLUSTER_OPTIONS,
  Ve as DEFAULT_POINT_LIGHT,
  Jr as DEFAULT_POINT_LIGHT_BUILDING_URL,
  Qr as DEFAULT_POINT_LIGHT_CAMERA,
  ye as DEFAULT_POINT_LIGHT_CENTER,
  Xr as DEFAULT_POINT_LIGHT_OPTIONS,
  ol as DEFAULT_PRIMITIVE_VIEW,
  Fa as DEFAULT_RADAR_SCAN_OPTIONS,
  mu as DEFAULT_RADAR_SCAN_VIEW,
  bu as DEFAULT_ROAD_LAYER_CAMERA,
  za as DEFAULT_ROAD_LAYER_OPTIONS,
  xu as DEFAULT_ROAD_LAYER_URL,
  fh as DEFAULT_SHP_LAYER_CAMERA,
  gh as DEFAULT_SHP_LAYER_OPTIONS,
  hh as DEFAULT_SHP_LAYER_SOURCE,
  Th as DEFAULT_SMOKE_CAMERA,
  kh as DEFAULT_SMOKE_OPTIONS,
  fs as DEFAULT_SMOKE_POSITION,
  Ah as DEFAULT_SPRAY_CAMERA,
  Dh as DEFAULT_SPRAY_OPTIONS,
  gs as DEFAULT_SPRAY_POSITION,
  Ef as DEFAULT_VIEW_FRUSTUM_CAMERA,
  bi as DEFAULT_VIEW_FRUSTUM_STYLE,
  kf as DEFAULT_WATER_GUN_CAMERA,
  Af as DEFAULT_WATER_GUN_OPTIONS,
  Es as DEFAULT_WATER_GUN_POSITION,
  Ts as DEFAULT_WATER_RIPPLE_OPTIONS,
  er as DEFAULT_WATER_RIPPLE_POSITION,
  Xc as DIRECT_REGION_PREFIXES,
  ul as EARTH_TARGET,
  Ma as ELECTRONIC_FENCE_TYPES,
  Li as GEOMETRY_DRAW_MODES,
  ir as GEOMETRY_PLOT_CLASSES,
  gc as GEOMETRY_PLOT_GROUPS,
  zi as GEOMETRY_PLOT_MODES,
  Xe as GeometryType,
  cn as SENSOR_FRUSTUM_PRESETS,
  hs as SITUATION_PLOT_MODES,
  vf as SPATIAL_GRID_TYPES,
  jf as applyCesiumEarthLayer,
  J0 as applyCesiumEarthTheme,
  Y0 as applyCesiumImageryLayer,
  W0 as buildSatelliteStripScanFootprint,
  t0 as createAllPrimitiveManager,
  q0 as createBeiDouGrid,
  Jf as createCesiumEarthThemeManager,
  ks as createCesiumImageryLayer,
  e0 as createCircularClock,
  n0 as createConeManager,
  r0 as createCustomShaderGradientManager,
  o0 as createCustomShaderMaterialManager,
  a0 as createCzmlLayerManager,
  Yf as createDefaultEarthProvider,
  R0 as createDiamondMarker,
  c0 as createDynamicConeManager,
  d0 as createDynamicDiffusionPointManager,
  u0 as createElectronicFenceManager,
  h0 as createExplosionManager,
  f0 as createFireEffectManager,
  g0 as createFloodAnalysisManager,
  Vi as createFlowTexture,
  Kr as createFlowTrailMaterial,
  $0 as createGarsGrid,
  Ui as createGeoJsonCatalog,
  b0 as createGeoJsonManager,
  V0 as createGeoSotGrid,
  i0 as createGeometryDrawingManager,
  l0 as createGeometryPlotManager,
  B0 as createH3Grid,
  w0 as createHeatmapManager,
  v0 as createHoneycombDemoPoints,
  _0 as createHoneycombHeatmapManager,
  M0 as createInverseMaskManager,
  O0 as createLatLonGrid,
  S0 as createMassiveIconsManager,
  P0 as createMassiveModelsManager,
  Yd as createModelSeededRandom,
  du as createMvtImageryProvider,
  E0 as createMvtLayerManager,
  Mn as createParticleEffectManager,
  _n as createParticleVelocityUpdateCallback,
  T0 as createPointClusterManager,
  k0 as createPointLightManager,
  I0 as createPulseMarker,
  A0 as createRadarScanningManager,
  D0 as createRoadLayerManager,
  H0 as createS2Grid,
  C0 as createSatelliteStripScanManager,
  $d as createSeededRandom,
  N0 as createShpLayerManager,
  L0 as createSignboardManager,
  F0 as createSituationPlotManager,
  z0 as createSmokeManager,
  Ze as createSpatialGrid,
  G0 as createSprayManager,
  p0 as createTransmissionLinkManager,
  U0 as createViewFrustumManager,
  j0 as createWaterGunManager,
  K0 as createWaterRippleManager,
  Hd as extractInverseMaskRings,
  Ms as getBeiDouGridCell,
  Ps as getGarsGridCell,
  ld as getGeoJsonBounds,
  In as getGeoJsonCatalogItem,
  x0 as getGeoJsonChildOptions,
  td as getGeoJsonLevel,
  Ss as getGeoSotGridCell,
  _s as getH3GridCell,
  Bd as getInverseMaskBounds,
  bs as getLatLonGridCell,
  ed as getParentProvinceAdcode,
  vs as getS2GridCell,
  nd as isDirectRegionAdcode,
  So as mergeEarthOptions,
  Wd as normalizeHoneycombCellType,
  Cd as normalizeHoneycombPoints,
  bo as normalizeInverseMaskRing,
  $r as normalizeParticlePosition,
  We as normalizeSatelliteStripScanTask,
  Cf as normalizeWaterRipplePosition,
  iu as parseMvtTile,
  yf as pickBeiDouGridCell,
  wf as pickGarsGridCell,
  xf as pickGeoSotGridCell,
  mf as pickH3GridCell,
  df as pickLatLonGridCell,
  gf as pickS2GridCell,
  Nf as registerCircleWaveMaterial,
  vc as registerDynamicConeMaterial,
  Pc as registerEllipsoidFadeMaterial,
  Ml as registerFrustumFootprintMaterial,
  _l as registerFrustumScanMaterial,
  sa as registerGradientMaterial,
  qc as registerPolylineTrailMaterial,
  vl as registerRadarPrimitiveMaterial,
  cu as renderMvtTile,
  qi as toCesiumColor,
  Ro as validateSatelliteStripScanTask
};
