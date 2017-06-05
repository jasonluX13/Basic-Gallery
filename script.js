var image_list = ["city.jpg", "sunset.jpg", "scorchedearth.jpg"];
var pic_index = 0;

var img_size = 1;  //0,1,2 => small => large
var image_sizes = ["small-image", "medium-image", "large-image"];

function getImage(){
  if(pic_index < image_list.length-1){
    pic_index ++;
  }else{
    pic_index = 0;
  }
  return "static/" + image_list[pic_index];
}

function changeImage(){
  document.getElementById("image1").src = getImage();
  console.log("clicked");
}
function up(){
  if(img_size < 2){
    img_size ++;
  }
  document.getElementById("image1").className = image_sizes[img_size];
  console.log(img_size);
}
function down(){
  if(img_size > 0){
    img_size --;
  }
  document.getElementById("image1").className = image_sizes[img_size];
  console.log(img_size);
}
document.getElementById("image1").onclick = changeImage;
document.getElementById("up").onclick = up;
document.getElementById("down").onclick = down;

console.log(document.images);
console.log(getImage());
