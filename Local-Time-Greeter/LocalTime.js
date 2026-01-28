// get curretn date and time
let now= new Date()
//extract hours
let hrs= now.getHours();
if(hrs<12)
    console.log("GoodMorning")
else if(hrs>=12 && hrs<=17)
    console.log("Good AfterNoon")

else{
    console.log("Good evening")
}
let foramttedDate=now.toLocaleDateString("en-GB",{
    weekday:"short",
    day:"2-digit",
    month:"short",
    year:"numeric"
});
console.log(foramttedDate)
