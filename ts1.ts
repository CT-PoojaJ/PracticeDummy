setTimeout(function()
{
console.log("Hello");
},3000);

setTimeout(()=>console.log("Hello"),3000);

let person={
    FirstName:"Jack",
    LastName:"Ma",
    FullName:function ()
    {
        return () => "full Name is: "+this.FirstName + "  "+this.LastNAme;
      
    }

  
}