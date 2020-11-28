console.log("NO.1");
const panjang = "javascript";
const panjang1 = "java script";
const panjang2 = ["1","2","3"]
console.log(panjang.length);
console.log(panjang1.length);
console.log(panjang2.length); 
console.log("\n");

console.log("NO.2");

const kata = "Saya sedang belajar";
console.log(kata.search("sedang")); 
console.log(kata.search("belajar")); 
console.log("\n");

console.log("NO.3");
const angka = 224466;
const kota = ["malang","surabaya","batu"]
console.log(angka.toString()); 
console.log(kota.toString()); 
console.log("\n");

console.log("NO.4");
console.log(parseInt("22")); 
console.log(parseInt("22.9")); 
console.log(parseInt("umur 22")); 
console.log("\n");

console.log("NO.5");
console.log(parseFloat("22.9")); 
console.log(parseFloat("9.22")); 
console.log("\n");

console.log("NO.6");
const city = ['blitar','solo','kediri'];
console.log(city.join('-')); 
console.log("\n");

console.log("NO.7");
const pulau = ['jawa, madura', 'bali'];
console.log(pulau.pop()); 
console.log("\n");

console.log("NO.8");
const barang = ["palu", "paku", "bor"];
console.log(barang.shift()); 
console.log("\n");

console.log("NO.9");

const ikan = ["cupang", "koi", "hiu"];
const burung = ["pelikan", "elang", "rajawali"];
const hewan = ikan.concat(burung)
console.log(hewan); 
console.log("\n");

console.log("NO.10");

const nama = ["zaki", "risky", "yoan", "atia"]
const num  = [2000,1, 17, 30, 4, 21, 100, 19, 23]
console.log(nama.sort());
console.log(num.sort());
console.log(num.sort((a,b)=>a-b));