

async function getPlanetDescription(planetName) {
  // let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
    //   method: "POST"
  // });
 let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
 method: "GET",
 headers: { "x-zocom": "solaris-JAaNDtW2DyvIHS96" },
});
  
  //console.log("Checking for planet ");
  //console.log(planetName);
    let temp = await resp.json();
    
    let bodies= temp.bodies;
    console.log(temp);

    // Loop
    for (let i=0; i<9; i++)
  
     {
       if (bodies[i].name==planetName)
          {
              console.log("Found the planet name");
              document.getElementById('name').innerHTML = bodies[i].name;
              document.getElementById('latinName').innerHTML = bodies[i].latinName;
              document.getElementById('desc').innerHTML = bodies[i].desc;
              document.getElementById('distance').innerHTML = bodies[i].distance;
              document.getElementById('rotation').innerHTML = bodies[i].rotation;
          }

      }
  }
  //getPlanetDescription('Solen');
