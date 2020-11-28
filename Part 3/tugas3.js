const nilai = (kkm) =>{
    return new Promise((resolve,reject)=>{
        if(kkm > 75){
            setTimeout(()=>{
                resolve('Nilai anda '+ kkm)
            }, 2000)
            
        } else {
            setTimeout(()=>{
                reject('Nilai anda '+ kkm)
            }, 2000)
        }
        return kkm
    })
}
async function cekNilai(nilaiUn){
    try {
        const un = await nilai(nilaiUn)
        console.log(un + ' pertahankan terus :)')
    } catch (error) {
        console.log(error + ' anda harus remidi');
    }
}
cekNilai(60)
console.log("Mulai Menghitung Nilai"); 

const pemateri1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            nama: "Kak Ebi",
            materi: "Javascript",
            batch: "DevOps 2"
        }])
    },1000)
});

const pemateri2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            nama: "Kak Faela",
            materi: "Self Identification",
            batch: "DevOps 2"
        }])
    },1000)
})

const pemateri3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            nama: "Kak Tama",
            materi: "Opening",
            batch: "DevOps 2"
        }])
    },1000)
})

Promise.all([pemateri1,pemateri2,pemateri3])
    .then(response => {
        const [pemateri1,pemateri2,pemateri3] = response
        console.log(pemateri1);
        console.log(pemateri2);
        console.log(pemateri3);
    })
    console.log("Daftar trainer Bootcamp DevOps:");