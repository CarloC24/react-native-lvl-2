import { v4 as uuidv4 } from 'uuid';

interface NachoDataInterface {
    id:Number;
    name:String;
}

const nachoArray: NachoDataInterface[] = [
    {id:uuidv4(),name:"Nacho"},
    {id:uuidv4(),name:"Cheese"},
    {id:uuidv4(),name:"Pepper"},
    {id:uuidv4(),name:"Habanero"}
]


export default nachoArray;

