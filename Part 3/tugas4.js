function cariNama(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(function(data){
            let user = data.map(names => {
                return `${names.name}`
            })
            for(let i=0; i < user.length; i++){
                console.log(user[i]);
            }
        })
        .catch(err => console.log(err))
        
}
cariNama() 