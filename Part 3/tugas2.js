const getMonth = (callback) => {
    setTimeout (()=>{
        let error = false;
        let month = ['Januari', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober','November', 'Desember']
        if(!error){
            callback(null, month)           
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
};

getMonth((err,result)=>{
    if(err){
        console.log(err);
    } else{
      let hasil = result.map(bulan =>{
          return `${bulan}`
      })  
      for(let i=0; i<hasil.length; i++){
          console.log(hasil[i]);
      }
    }   
})
   
