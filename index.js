

function play1() {

  var nums = [1,2,3,4,5,6,7,8,9],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
    document.getElementById("t1").innerHTML= nums[0].valueOf();
    document.getElementById("t2").innerHTML= nums[1].valueOf();
    document.getElementById("t3").innerHTML= nums[2].valueOf();
    document.getElementById("t4").innerHTML= nums[3].valueOf();
    document.getElementById("t5").innerHTML= nums[4].valueOf();
    document.getElementById("t6").innerHTML= nums[5].valueOf();
    document.getElementById("t7").innerHTML= nums[6].valueOf();
    document.getElementById("t8").innerHTML= nums[7].valueOf();
    document.getElementById("t9").innerHTML= nums[8].valueOf();


}


//
// var randomN1 = Math.floor(Math.random()*9)+1;


// var randomN2 = Math.floor(Math.random()*6)+1;
// var img2= randomN2+".png";


}


function col (){
  var color = [ "red" ,"orange" ,"yellow" ,"green" ,"lightblue" ,"blue" ,"white" ,"gray" ,"pink"],
    ranNumc = [],
    o = color.length,
    k = 0;

  while (o--) {
    k = Math.floor(Math.random() * (o+1));
    ranNumc.push(color[k]);
    color.splice(k,1);

    document.getElementById("t1").style.background_Color= color[0].valueOf();
    document.getElementById("t2").style.backgroundColor= color[1].valueOf();
    document.getElementById("t3").style.backgroundColor= color[2].valueOf();
    document.getElementById("t4").style.backgroundColor= color[3].valueOf();
    document.getElementById("t5").style.backgroundColor= color[4].valueOf();
    document.getElementById("t6").style.backgroundColor= color[5].valueOf();
    document.getElementById("t7").style.backgroundColor= color[6].valueOf();
    document.getElementById("t8").style.backgroundColor= color[7].valueOf();
    document.getElementById("t9").style.backgroundColor= color[8].valueOf();


  }


}



function play2(){
  var missed=[];

  document.getElementById("t1").addEventListener("onmouseover",document.getElementById("t1").classList.add("invisible"));
  missed.push(1);
  document.getElementById("t2").addEventListener("onmouseover",document.getElementById("t2").classList.add("invisible"));
missed.push(2);
  document.getElementById("t3").addEventListener("onmouseover",document.getElementById("t3").classList.add("invisible"));
missed.push(3);
  document.getElementById("t4").addEventListener("onmouseover",document.getElementById("t4").classList.add("invisible"));
missed.push(4);
  document.getElementById("t5").addEventListener("onmouseover",document.getElementById("t5").classList.add("invisible"));
missed.push(5);
  document.getElementById("t6").addEventListener("onmouseover",document.getElementById("t6").classList.add("invisible"));
missed.push(6);
  document.getElementById("t7").addEventListener("onmouseover",document.getElementById("t7").classList.add("invisible"));
missed.push(7);
  document.getElementById("t8").addEventListener("onmouseover",document.getElementById("t8").classList.add("invisible"));
missed.push(8);
  document.getElementById("t9").addEventListener("onmouseover",document.getElementById("t9").classList.add("invisible"));
missed.push(9);

  alert(missed);
}
