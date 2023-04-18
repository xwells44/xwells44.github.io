const apiKey = '8Isp0gy602qj-VCAYUxerrLUj83UBgJHKJPHD_1eBfq0dX9qXFJomtGsofmJzsdN';

fetch(`https://api.genius.com/artists?&access_token=${apiKey}`,{
header:{
    'Accept': "application/json"
}
}).then(response => console.log(response.json()));