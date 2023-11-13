
  

  async function getPlanetDescription(planetName) {
   let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
       method: "POST"
   });
  //let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
 // method: "GET",
 //headers: { "x-zocom": "solaris-JAaNDtW2DyvIHS96" },
//});
  
    let temp = await resp.json();
    let bodies= temp.bodies;
    console.log(bodies);

    // Loop
    for (let i=0; i<9; i++)
    {
       if (bodies[i].name==planetName)
       console.log(bodies[i].latinName);
    }
  }
