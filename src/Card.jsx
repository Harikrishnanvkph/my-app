import { CardBody } from './CardBody.jsx'


export default function Card({tag, title, map}) {
    let mp = Array.from(new Map(map));
    return (
      <div className='upgradeOptionBox'>
        <p className='tag'>{tag}</p>
        <p className='title'>{title}</p>
        <hr/>
        <div className='mapped'>
            <CardBody name={mp[0][0]} change={mp[0][1]}/>
            <CardBody name={mp[1][0]} change={mp[1][1]}/>
            <CardBody name={mp[2][0]} change={mp[2][1]}/>
            <CardBody name={mp[3][0]} change={mp[3][1]}/>
            <CardBody name={mp[4][0]} change={mp[4][1]}/>
            <CardBody name={mp[5][0]} change={mp[5][1]}/>
            <CardBody name={mp[6][0]} change={mp[6][1]}/>
            <CardBody name={mp[7][0]} change={mp[7][1]}/>
        </div>
        <button value={tag} className='button'>Button</button>
      </div>
    );
  }
  