
 document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const planetName = urlParams.get('planet');
  

    document.getElementById('planet-name').innerText = planetName;
  

    document.getElementById('planet-description').innerText = getPlanetDescription(planetName);
  });
  
  

  async function getPlanetDescription(planetName) {
  // let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
    //   method: "POST"
  // });
 let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
 method: "GET",
 headers: { "x-zocom": "solaris-JAaNDtW2DyvIHS96" },
});
  
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


  const planets = document.querySelectorAll('.planet');

  planets.forEach(planet => {
    planet.addEventListener('click', function() {
      const planetName = this.classList[1]; // Assumes the second class is the planet name
      window.location.href = `planet-details.html?planet=${planetName}`;
    });
  });
