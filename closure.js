function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());
console.log(clock2());

// ekta function er vitor arekta function declare korr por oikhanei abr return kore dile...ta ekta personal closure environment build kore


