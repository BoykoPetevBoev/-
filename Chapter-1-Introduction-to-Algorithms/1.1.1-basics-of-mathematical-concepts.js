

const A = [1, 2, 4, 5, 7];
const B = [2, 3, 4, 5, 6];

// 1.1 
function unification(arrA, arrB) {     // A⋃B
    const arrC = [...arrA, ...arrB];
    return arrC;
}
function section(arrA, arrB) {         // A⋂B
    const arrC = [];
    for (let num of arrA) {
        if (arrB.includes(num)) {
            arrC.push(num)
        }
    }
    return arrC;
}
function difference(arrA, arrB){       // A\B
    const arrC = [];
    for(let num of arrA){
        if(!arrB.includes(num)){
            arrC.push(num);
        }
    }
    return arrC;
}
console.log(unification(A, B));
console.log(section(A, B));
console.log(difference(A, B));
console.log(difference(B, A));


// 1.3 
function symmetricalDifference(arrA, arrB){                       // A⋃B \ A⋂B
    const unificationArr = unification(arrA, arrB);
    const sectionArr = section(arrA, arrB);
    const symmetricalDiffArr = difference(unificationArr, sectionArr);
    return symmetricalDiffArr;
}
console.log(symmetricalDifference(A, B));

//1.5

function main(n) {
    for (let digits = 0; n > 0; n/=10, digits++){
        console.log(`Броят на цифрите на %u e %u/n`, n, digits);
    }
}
main(4242)

// 1.6 

function residueAndPrivately(n, m){
    const q = n / m;
    const r = n % m;
    console.log(`r = ${r} q = ${q}`);
}

residueAndPrivately(7, 3);
residueAndPrivately(-7, 3);
residueAndPrivately(7, -3);
residueAndPrivately(-7, -3);
residueAndPrivately(3, 7);
residueAndPrivately(-3, 7);
residueAndPrivately(3, -7);
residueAndPrivately(-3, -7);