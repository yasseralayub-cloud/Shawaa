// Scene 1 real 360
const real360 = {
  id:"scene1",
  desc:"مدخل الموقع – منظر ليلي (360 حقيقي)"
};

// Fake scenes
const fakeScenes = [
  {img:"images/scene2.jpg",desc:"الجلسات الخارجية"},
  {img:"images/scene3.jpg",desc:"واجهة مطعم Shawaa"},
  {img:"images/scene4.jpg",desc:"الجلسات وقت الغروب"},
  {img:"images/scene5.jpg",desc:"المنظر العلوي (التخطيط العام)"}
];

let index = 0;
let showDesc = true;

const viewer360 = document.getElementById("viewer360");
const viewerFake = document.getElementById("viewerFake");
const fakeImg = document.getElementById("fakeImg");
const desc = document.getElementById("description");
const toggle = document.getElementById("info-toggle");

toggle.onclick = ()=>{
  showDesc=!showDesc;
  desc.style.display=showDesc?"block":"none";
};

// init pannellum
pannellum.viewer('viewer360',{
  type:'equirectangular',
  panorama:'images/scene1.jpg',
  autoLoad:true
});

desc.innerText = real360.desc;
viewer360.style.display="block";

function showFake(){
  viewer360.style.display="none";
  viewerFake.style.display="block";
  fakeImg.src = fakeScenes[index].img;
  desc.innerText = fakeScenes[index].desc;
}

function showReal(){
  viewerFake.style.display="none";
  viewer360.style.display="block";
  desc.innerText = real360.desc;
}

function next(){
  if(viewer360.style.display==="block"){
    index=0;
    showFake();
  }else{
    index++;
    if(index>=fakeScenes.length){
      showReal();
    }else{
      showFake();
    }
  }
}

function prev(){
  if(viewerFake.style.display==="block" && index>0){
    index--;
    showFake();
  }else{
    showReal();
  }
}
