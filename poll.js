"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://valresultat.svt.se/2022/';
var fetch = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get(url)];
            case 1:
                data = (_a.sent()).data;
                result = data.match(/val_result-folding-fan-labels__label.*/g);
                res = [];
                result === null || result === void 0 ? void 0 : result.forEach(function (r) {
                    var s = r.split(', ');
                    res.push({
                        name: s[0].split('title="')[1],
                        value: Number.parseInt(s[1].split(' ')[0])
                    });
                });
                return [2 /*return*/, res];
        }
    });
}); };
var blockCalc = function () { return __awaiter(void 0, void 0, void 0, function () {
    var values, left, right;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0: return [4 /*yield*/, fetch()];
            case 1:
                values = _j.sent();
                left = (((_a = values.find(function (v) { return v.name == 'Vänsterpartiet'; })) === null || _a === void 0 ? void 0 : _a.value) || 0) +
                    (((_b = values.find(function (v) { return v.name == 'Socialdemokraterna'; })) === null || _b === void 0 ? void 0 : _b.value) || 0) +
                    (((_c = values.find(function (v) { return v.name == 'Miljöpartiet'; })) === null || _c === void 0 ? void 0 : _c.value) || 0) +
                    (((_d = values.find(function (v) { return v.name == 'Centerpartiet'; })) === null || _d === void 0 ? void 0 : _d.value) || 0);
                right = (((_e = values.find(function (v) { return v.name == 'Liberalerna'; })) === null || _e === void 0 ? void 0 : _e.value) || 0) +
                    (((_f = values.find(function (v) { return v.name == 'Kristdemokraterna'; })) === null || _f === void 0 ? void 0 : _f.value) || 0) +
                    (((_g = values.find(function (v) { return v.name == 'Moderaterna'; })) === null || _g === void 0 ? void 0 : _g.value) || 0) +
                    (((_h = values.find(function (v) { return v.name == 'Sverigedemokraterna'; })) === null || _h === void 0 ? void 0 : _h.value) || 0);
                return [2 /*return*/, {
                        left: left,
                        right: right
                    }];
        }
    });
}); };
var func = function () { return __awaiter(void 0, void 0, void 0, function () {
    var r, cont;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, blockCalc()];
            case 1:
                r = _a.sent();
                console.log(r);
                cont = document.getElementById("valdiv");
                if (cont) {
                    cont.innerHTML = JSON.stringify(r);
                }
                return [2 /*return*/];
        }
    });
}); };
func();
