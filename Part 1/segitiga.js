const printSegitiga = "5"; 

if(typeof printSegitiga == "number"){
    for (let i = printSegitiga; i >= 1; i--) {
    let cetak = "";
     for (let j = i; j >= 1; j--) {
        cetak =  j + cetak;
        }
    console.log(cetak);
    }
} else {
    console.log("Data harus number");
}
