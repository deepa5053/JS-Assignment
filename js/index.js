document.addEventListener('DOMContentLoaded', function() {
 
    const urlParams = new URLSearchParams(window.location.search);
    const planetName = urlParams.get('planet');
  

    document.getElementById('planet-name').innerText = planetName;
  

    document.getElementById('planet-description').innerText = getPlanetDescription(planetName);
  });
  

  function getPlanetDescription(planetName) {
    switch (planetName) {
      case 'Sun':
        return 'The Sun is the star at the center of the solar system.';
      case 'Mercury':
        return 'Mercury is the smallest planet in the solar system.';
      case 'Venus':
        return 'Venus is the second planet from the Sun.';
      case 'Earth':
        return 'Earth is our home planet and the only one with known life.';
      case 'Mars':
        return 'Mars is known as the Red Planet and is the fourth planet from the Sun.';
      case 'Jupiter':
        return 'Jupiter is the largest planet in the solar system.';
      case 'Saturn':
        return 'Saturn is known for its beautiful rings.';
      case 'Uranus':
        return 'Uranus is a gas giant and the seventh planet from the Sun.';
      case 'Neptune':
        return 'Neptune is the eighth and farthest known planet from the Sun.';
      default:
        return 'Planet information not available.';
    }
  }