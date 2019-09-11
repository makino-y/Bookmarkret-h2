//h2抽出
javascript:(function(){for(var h=document.querySelectorAll("h2"),i=0;i<h.length;i++)console.log(h[i].innerText);})();
let h = document.querySelectorAll('h2');
for(let i = 0; i < h.length; i++) {
  console.log(h[i].innerText);
}