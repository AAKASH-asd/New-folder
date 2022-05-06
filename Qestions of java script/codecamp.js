const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
   for(let i=0;i<contacts.length;i++){
     if(contacts[name]==contacts.firstName&&(props=="lastName"||"number"||"likes")){
       
     console.log(contacts[props])
    break}
   else if(contacts[name]!=contacts[firstName]){
     console.log( "No such contact")
   }else if(contacts[prop]!=contacts.prop){
  console.log("No such property")
   }
   }
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  lookUpProfile("Kristian", "lastName")
  lookUpProfile("Sherlock", "likes")
  lookUpProfile("Harry", "likes")
  lookUpProfile("Bob", "number")
  lookUpProfile("Bob", "potato")
  lookUpProfile("Akira", "address")