const mtk = 100;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa =  70;

if(mtk === 0 || bahasaIndonesia === 0 || bahasaInggris === 0 || ipa === 0){
   console.log("Kamu Harus input nilai");
} else if(typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number"){
   console.log("Input data bertipe number");
} else {
   let avg = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
   if( avg <= 100 && avg > 89 ){
      console.log(`Rata-rata = ${avg} Grade = A`);
      } else if(avg <= 89 && avg > 79){
         console.log(`Rata-rata = ${avg} Grade = B`);
      } else if(avg <= 79 && avg > 69){
         console.log(`Rata-rata = ${avg} Grade = C`);
      } else if(avg <= 69 && avg > 59 ){
         console.log(`Rata-rata = ${avg} Grade = D`);
      } else {
         console.log(`Rata-rata = ${avg} Grade = E`);
      }
}
    




