
 const nodeListPlanetElem =  document.querySelectorAll(".planet");
 nodeListPlanetElem.forEach((planetElem) => {
  planetElem.addEventListener("click", async () => {
const newTab = openNewTab();
displayPlanet(planet, newTab);
  });
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
function openNewTab (){
  newWindow = openNewwindow ("http://127.0.0.1:5500/planet-details.html");
  return newWindow;
}

  function displayPlanet(planet,newTab) {
    newTab.document.write(
      "<h1>" +planet[0].name+"</h1>",
      "<h1>" +planet[0].desc+"</h1>"
      
    )
  }
