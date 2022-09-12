import axios from 'axios';

const url = 'https://valresultat.svt.se/2022/';

const fetch = async () => {
  const { data } = await axios.get<string>(url);
  const result = data.match(/val_result-folding-fan-labels__label.*/g)

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

const blockCalc: () => Promise<{left: number, right: number}> =  async () => {
  const values = await fetch();
  const left = (values.find(v => v.name == 'Vänsterpartiet')?.value || 0) + 
  (values.find(v => v.name == 'Socialdemokraterna')?.value || 0) + 
  (values.find(v => v.name == 'Miljöpartiet')?.value || 0) + 
  (values.find(v => v.name == 'Centerpartiet')?.value || 0);
  
  const right = (values.find(v => v.name == 'Liberalerna')?.value || 0) + 
  (values.find(v => v.name == 'Kristdemokraterna')?.value || 0) + 
  (values.find(v => v.name == 'Moderaterna')?.value || 0) + 
  (values.find(v => v.name == 'Sverigedemokraterna')?.value || 0);

  return {
    left: left, 
    right: right
  }
}

const func = async () => { 
  const r = await blockCalc() 
  console.log(r)
  const cont = document.getElementById("valdiv");
  if(cont){
    cont.innerHTML = JSON.stringify(r);
  }
}

func()

