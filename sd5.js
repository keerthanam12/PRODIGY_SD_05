document.getElementById('scrapeButton').addEventListener('click', scrapeProducts);

function scrapeProducts() {
  var products = document.getElementsByClassName('product');

  var csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Name,Price,Rating\n";

  for (var i = 0; i < products.length; i++) {
    var name = products[i].getElementsByClassName('name')[0].innerText;
    var price = products[i].getElementsByClassName('price')[0].innerText;
    var rating = products[i].getElementsByClassName('rating')[0].innerText;

    csvContent += name + "," + price + "," + rating + "\n";
  }

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "products.csv");
  document.body.appendChild(link);
  link.click();
}