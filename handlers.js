var board = Array.prototype.map.call(document.querySelectorAll('.board tr'), function(tr) {
  return Array.prototype.map.call(tr.querySelectorAll('td'), function(td) {
    return td.innerHTML;
  });
})

var createNewGame = function() {
  
}