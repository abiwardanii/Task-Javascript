const name = [
    "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

function searchName(str, num, callback) {
  let result = name.filter((name) => name.indexOf(str) !== -1);
  result = result.slice(0, num);
  if(typeof str !== "string"){
    console.log("tipe data parameter 'str' harus string");
  } else if(typeof num !== "number" ) {
    console.log("tipe data parameter 'num' harus number");
  }else if(result.length > 0){
    return callback(result)
  } else {
    return callback(`kata ${str} tidak terdapat didalam data "name"`)
  }
  
}
function showFilter(wrd) {
  console.log(wrd);
}
searchName("an", 3, showFilter);
searchName("a", 2, showFilter);
searchName(3, 3, showFilter)
searchName("a", "3", showFilter)
searchName("aa", 3, showFilter)