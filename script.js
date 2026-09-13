// Generate drifting Frutiger Aero bubbles
(function(){
  var field = document.getElementById('bubbleField');
  if(!field) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  var count = window.innerWidth < 700 ? 10 : 18;
  for(var i=0;i<count;i++){
    var b = document.createElement('div');
    b.className = 'bubble';
    var size = 18 + Math.random()*70;
    b.style.width = size+'px';
    b.style.height = size+'px';
    b.style.left = (Math.random()*100)+'%';
    var duration = 14 + Math.random()*18;
    b.style.animationDuration = duration+'s';
    b.style.animationDelay = (-Math.random()*duration)+'s';
    field.appendChild(b);
  }
})();