function towerOfHanoi(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`moving disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod);
    console.log(`moving disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1,usingRod,toRod,fromRod);
}
console.log(towerOfHanoi(3,'A','C','B'));