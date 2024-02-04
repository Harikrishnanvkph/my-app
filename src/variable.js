export function FreeMap(userDetail,StorageSize,arrayOfChecks){
    return new Map([
        [ `${userDetail} User`, arrayOfChecks[0]], 
        [`${StorageSize}GB Storage`, arrayOfChecks[1]],
        [ 'Unlimited Public Projects', arrayOfChecks[2]], 
        ['Community Access', arrayOfChecks[3]],
        [ 'Unlimited Private Projects', arrayOfChecks[4]], 
        ['Dedicated Phone Support', arrayOfChecks[5]],
        [ 'Free Subdomain', arrayOfChecks[6]], 
        ['Monthly Status Reports', arrayOfChecks[7]],
    ]);
}


export default class CardDetails{
    constructor(
        tag,
        title,
        map
    ){
        this.tag = tag;
        this.title = title;
        this.map = map;
    }

    getMap(){
        return this.map;
    }
}