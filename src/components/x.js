let stage1 = document.getElementById('stage1')
let stage2 = document.getElementById('stage2')
let stage3 = document.getElementById('stage3')
let stage4 = document.getElementById('stage4')

let designInfo1 = document.getElementById('design-info1')
let designInfo2 = document.getElementById('design-info2')
let designInfo3 = document.getElementById('design-info3')
let designInfo4 = document.getElementById('design-info4')

designInfo2.hidden = true;
designInfo3.hidden = true;
designInfo4.hidden = true;

stage1.onclick = function() {
  designInfo1.hidden = false;
  designInfo2.hidden = true;
  designInfo3.hidden = true;
  designInfo4.hidden = true;
}

stage2.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = false;
  designInfo3.hidden = true;
  designInfo4.hidden = true;
}

stage3.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = true;
  designInfo3.hidden = false;
  designInfo4.hidden = true;
}

stage4.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = true;
  designInfo3.hidden = true;
  designInfo4.hidden = false;
}
