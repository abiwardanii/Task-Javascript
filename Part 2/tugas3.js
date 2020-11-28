function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (isNaN(dataArray.join(""))) {
        console.error("dataArray harus berupa number");
    } else if(nilaiAwal < 0){
        console.log("Nilai awal tidak boleh bernilai minus");
    } 
    else if(nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    else if (dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else {
        const result = dataArray.filter(x => x >= nilaiAwal && x <= nilaiAkhir);
        console.log(result.sort((a, b) => a - b));
    }
}
seleksiNilai(5, 20, ["string", 25, 4, 14, 17, 30, 8]);
console.log('\n');
seleksiNilai(-1, 20, [2, 25, 4, 14, 17, 30, 8]);
console.log('\n');
console.log('\n');
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
console.log('\n');
seleksiNilai(4, 17, [2, 25, 4]);
console.log('\n');
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);