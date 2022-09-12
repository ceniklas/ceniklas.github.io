var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const url = 'https://valresultat.svt.se/2022/';
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(url);
    const result = data.match(/val_result-folding-fan-labels__label.*/g);
    const res = [];
    result === null || result === void 0 ? void 0 : result.forEach(r => {
        const s = r.split(', ');
        res.push({
            name: s[0].split('title="')[1],
            value: Number.parseInt(s[1].split(' ')[0])
        });
    });
    return res;
});
const blockCalc = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const values = yield fetchData();
    const left = (((_a = values.find(v => v.name == 'Vänsterpartiet')) === null || _a === void 0 ? void 0 : _a.value) || 0) +
        (((_b = values.find(v => v.name == 'Socialdemokraterna')) === null || _b === void 0 ? void 0 : _b.value) || 0) +
        (((_c = values.find(v => v.name == 'Miljöpartiet')) === null || _c === void 0 ? void 0 : _c.value) || 0) +
        (((_d = values.find(v => v.name == 'Centerpartiet')) === null || _d === void 0 ? void 0 : _d.value) || 0);
    const right = (((_e = values.find(v => v.name == 'Liberalerna')) === null || _e === void 0 ? void 0 : _e.value) || 0) +
        (((_f = values.find(v => v.name == 'Kristdemokraterna')) === null || _f === void 0 ? void 0 : _f.value) || 0) +
        (((_g = values.find(v => v.name == 'Moderaterna')) === null || _g === void 0 ? void 0 : _g.value) || 0) +
        (((_h = values.find(v => v.name == 'Sverigedemokraterna')) === null || _h === void 0 ? void 0 : _h.value) || 0);
    return {
        left: left,
        right: right
    };
});
const func = () => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield blockCalc();
    console.log(r);
    const cont = document.getElementById("valdiv");
    if (cont) {
        cont.innerHTML = JSON.stringify(r);
    }
});
func();
