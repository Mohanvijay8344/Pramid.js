function inversePramid(rows){
    let pramid = "";

    for(let i=rows; i >= 1; i--){
        let space = " ".repeat(rows-i);
        let star = "*".repeat(2 * i - 1);
        pramid += space + star + "\n";
    }
    console.log(pramid);   
}
inversePramid(5);

function rightAngledPramid(rows){
    let pramid = "";

    for(let i=1; i <= rows; i++){
        let star = "*".repeat(i);
        pramid += star + "\n";
    }
    console.log(pramid);
}

rightAngledPramid(5);