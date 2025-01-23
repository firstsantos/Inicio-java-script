var xhr = new XMLHttpRequest();
var documento = {
  userId: 1,
  id: 1,
  title: "Notícia exclusiva:",
  body: "Jquery é jogado para trás por XMLHttpRequest PURO!",
};

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log(xhr);
  }
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

xhr.send(documento);
