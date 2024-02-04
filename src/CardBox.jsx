import CardDetails from './variable.js'
import { FreeMap } from './variable.js'
import Card from './Card.jsx'

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

export default function CardBox(){
    return (
        <div className='appIn'>
            <div className='upgradeOptions'>
                <Card tag={freeObj.tag} title={freeObj.title} map={freeObj.map}  />        
                <Card tag={plusObj.tag} title={plusObj.title} map={plusObj.map} />
                <Card tag={proObj.tag} title={proObj.title} map={proObj.map} />
            </div>
        </div>
    )
}