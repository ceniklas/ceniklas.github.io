import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Val2022: React.FC = () => {
  const url = 'https://valresultat.svt.se/2022/';

  const [val, setVal] = useState('');

  const fetchData = async () => {
    const { data } = await axios.get<string>(url);
    const result = data.match(/val_result-folding-fan-labels__label.*/g);

    const res: Array<{ name: string, value: number }> = []

    result?.forEach(r => {
      const s = r.split(', ')
      res.push({
        name: s[0].split('title="')[1],
        value: Number.parseInt(s[1].split(' ')[0])
      });
    })
    return res;
  }

  useEffect(() => {
    const blockCalc: () => Promise<{ left: number, right: number }> = async () => {
      const values = await fetchData();
      const left = (values.find(v => v.name === 'Vänsterpartiet')?.value || 0) +
        (values.find(v => v.name === 'Socialdemokraterna')?.value || 0) +
        (values.find(v => v.name === 'Miljöpartiet')?.value || 0) +
        (values.find(v => v.name === 'Centerpartiet')?.value || 0);

      const right = (values.find(v => v.name === 'Liberalerna')?.value || 0) +
        (values.find(v => v.name === 'Kristdemokraterna')?.value || 0) +
        (values.find(v => v.name === 'Moderaterna')?.value || 0) +
        (values.find(v => v.name === 'Sverigedemokraterna')?.value || 0);

      return {
        left: left,
        right: right
      }
    }

    blockCalc().then(r => setVal(JSON.stringify(r)))
  }, []);


  return (<div>
    {val}
  </div>)

}

export default Val2022;