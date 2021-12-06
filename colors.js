var link = {
  setColor:function (color){
    var aresult = document.querySelectorAll('a');
      var i = 0;
      while(i < aresult.length){
      aresult[i].style.color = color;
      i = 1 + i }
    }
  }

var body = {
  setcolor:function (color){
    document.querySelector('body').style.color = color;
 },
 setbackgroundcolor:function (color){
   document.querySelector('body').style.backgroundColor
   = color;
 }
}
function nightdayhandler(self){
var target = document.querySelector('body')
if(self.value === 'night'){
  body.setbackgroundcolor('black');
  body.setcolor('white');
  self.value = 'day';
  link.setColor('white')

} else {
    body.setbackgroundcolor('white');
    body.setcolor('black');
    self.value = 'night';
    link.setColor('black')}}
