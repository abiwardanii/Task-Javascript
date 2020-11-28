const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

cekHariKerja('sabtu')
    .then(cek => console.log('Sekarang hari ' + cek + ', waktunya bekerja ! '))
    .catch(err=> console.log(err))



async function fixKerja(hari){
    try {
        const kerja = await cekHariKerja(hari)
        console.log('Hari ini adalah hari ' + kerja + ' selamat beraktivitas :)');
    } catch (error) {
        console.log(error);
    }
}
fixKerja('minggu')
