let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    }


let data1 = {...data}

data1.name = "Yohanes Manggala Abiwardani"
data1.email = "yohangala44@gmail.com";
data1.hobi = ["Membaca","Bersepeda", "Menonton Film"];

data = data1

console.log(data);

console.log("\n");

let {address:{street,city}} = data;

console.log(street);
console.log(city);

    