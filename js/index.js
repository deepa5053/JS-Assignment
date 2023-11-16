

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
    let planetFound= false;
    for (let i=0; i<9; i++)
  
     {
       if (bodies[i].name==planetName)
          {
              console.log("Found the planet name");
              planetFound=true;
              document.getElementById('name').innerHTML = bodies[i].name;
              document.getElementById('latinName').innerHTML = bodies[i].latinName;
              document.getElementById('desc').innerHTML = bodies[i].desc;
              document.getElementById('circum').innerHTML = bodies[i].circumference;
              document.getElementById('circum-title').innerHTML = "OMKRETS";
              document.getElementById('distance').innerHTML = bodies[i].distance;
              document.getElementById('dist-title').innerHTML = "KM FRÅN SOLEN";
              document.getElementById('max-temp').innerHTML = bodies[i].temp.day;
              document.getElementById('max-temp-title').innerHTML = "MAX TEMPERATURE";
              document.getElementById('min-temp').innerHTML = bodies[i].temp.day;
              document.getElementById('min-temp-title').innerHTML = "MIN TEMPERATURE";
          }

      }
      if(planetFound==false)
      console.log("Planet not found");
  }
  //getPlanetDescription('Solen');
