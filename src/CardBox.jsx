import CardDetails from './variable.js'
import { FreeMap } from './variable.js'
import Card from './Card.jsx'

var cardsObj = []
var freeObj = new CardDetails(
    "FREE",
    "$0/month",
    FreeMap("Single",50,[true,true,true,true,false,false,false,false])
)
var plusObj = new CardDetails(
    "Plus",
    "$9/month",
    FreeMap("5",50,[true,true,true,true,true,true,true,false])
)
var proObj = new CardDetails(
    "Pro",
    "$49/month",
    FreeMap("Unlimited",50,[true,true,true,true,true,true,true,true])
)
cardsObj.push(freeObj,plusObj,proObj);

export default function CardBox(){
    return (
        <div className='appIn'>
            <div className='upgradeOptions'>
                {cardsObj.map(a => (
                    <Card tag={a.tag} title={a.title} map={a.map} />
                ))}
            </div>
        </div>
    )
}
