// https://www.codewars.com/kata/582a53ed261c2af9d200018c/javascript
function addUsername(list) {
    //P: given an input array 
    //R:array of objects with a username property for each object in array
  
    
    const d = new Date()
    const year = d.getFullYear()
    list.forEach(obj => {
      obj.username = `${obj.firstName.toLowerCase()}${obj.lastName.split('.')[0].toLowerCase()}${year-obj.age}`
    })
    return list
  }