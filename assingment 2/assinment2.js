
 var name="vinay"   //its has a scope thorugh out the code
 console.log("globle name=",name);
 {
     let name = "ajay"    // here name is has its scope only in this block
     console.log("local name=",name);
 }
 console.log("globle remain same name =",name)
 const pi=3.142 // constant var able cannot be update or reused and it must be initalised
 console.log( "constant value pi=",pi)
 