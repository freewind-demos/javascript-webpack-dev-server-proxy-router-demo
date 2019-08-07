fetch('./data.json').then(function (res) {
  if (res.ok) {
    res.json().then(function (data) {
      document.getElementById('main').innerHTML = JSON.stringify(data);
    });
  } else {
    console.log("Looks like the response wasn't perfect, got status", res.status);
  }
});
