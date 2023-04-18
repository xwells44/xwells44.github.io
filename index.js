const clientId = 'nQldnTlE0uGW6N3nYmq0bxRtl6ZnSYzYZQ7wELNFK22qJdB-clhXtLh5uhQ7IkOz';
const clientSecret = 'adJ8WU9jvIsD4zTRoesGaRoYNeUdD9hp00wATnN6hpeXQuugKA5mV7TZD_Uu-N4UX0KfA29EhJg3RdIk-xHvpA';
const authorizationCode = '8Isp0gy602qj-VCAYUxerrLUj83UBgJHKJPHD_1eBfq0dX9qXFJomtGsofmJzsdN';

// Obtenez le jeton d'accès OAuth2 en envoyant une requête POST à l'API Genius
fetch('https://api.genius.com/oauth/token', {
  method: 'POST',
  body: JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code: authorizationCode
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    // Récupérez les informations de l'artiste en envoyant une requête GET à l'API Genius avec le jeton d'accès Bearer Token
    const artistId = '432';
    const accessToken = data.access_token;
    fetch(`https://api.genius.com/artists/${artistId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(artist => console.log(artist))
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));