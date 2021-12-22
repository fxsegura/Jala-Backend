export default function getTime()
{
    let time= new Date();
    let day=false;
    if(time.getHours()<=19 && time.getHours()>=6)
        day=true;
    return day;
}