import { CardBody } from './CardBody.jsx'


export default function Card({tag, title, map}) {
    let mp = Array.from(new Map(map));
    return (
      <div className='upgradeOptionBox'>
        <p className='tag'>{tag}</p>
        <p className='title'>{title}</p>
        <hr/>
        <div className='mapped'>
          {mp.map((a)=>(
          <CardBody name={a[0]} change={a[1]} />
          ))}
        </div>
        <button value={tag} className='button'>Button</button>
      </div>
    );
  }
  
