let userData = [];

let table = document.querySelector("table");

window.addEventListener("load", function(){
 
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!userData.length) {
        userData = data;
        fillTable(userData);
      }
    }).catch(function (error) {
      console.log('oops!');
  });


function fillTable(data) {
  let headers = Object.keys(data[0]);
  console.log(headers);
  let listheaders = document.createElement("tr");
  let subheaders = document.createElement("tr");
  let cols = `<col>
    <col>
    <col>
    <col>
    <colgroup span="3"></colgroup>
    <col>
    <col>
    <colgroup span="3"></colgroup>`;
  listheaders.innerHTML += cols;
  for (let i = 0; i < headers.length; i++) {
    if (headers[i] === "address") {
      listheaders.innerHTML += `<th  colspan="4" scope="colgroup">${headers[i]}</th>`;
    } else if (headers[i] === "company") {
      listheaders.innerHTML += `<th colspan="3" scope="colgroup">${headers[i]}</th>`;
    } else listheaders.innerHTML += `<th rowspan="2" "col">${headers[i]}</th>`;
  }
  subheaders.innerHTML += `<th scope="col">Street</th>
    <th scope="col">Suite</th>
    <th scope="col">City</th> 
    <th scope="col">Zipcode</th><th scope="col">Name</th>
    <th scope="col">catchPhrase</th>
    <th scope="col">bs</th>`;
  table.appendChild(listheaders);
  table.appendChild(subheaders);

  for (let i = 0; i < data.length; i++) {
    let listItem = document.createElement("tr");
    listItem.innerHTML += `
        <th>${data[i].id}</th>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
        <td>${data[i].address.street}</td><td>${data[i].address.suite}</td><td>${data[i].address.city}</td><td>${data[i].address.zipcode}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].website}</td>
        <td>${data[i].company.name}</td><td>${data[i].company.catchPhrase}</td><td>${data[i].company.bs}</td>`;
    table.appendChild(listItem);
  }
}
})
