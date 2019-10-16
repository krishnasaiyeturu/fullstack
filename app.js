//  function add(){
//         var a=parseFloat(document.getElementById("firstnumber").value);
//         var b=parseFloat(document.getElementById("secondnumber").value);
//         document.getElementById("total").value=a+b;
//         if(isNaN(a))
//         {
//                 alert('enter the Number');
//         }
//         if(isNaN(b))
//         {
//                 alert('enter the Number');
//         }
        

// }



// let  list=document.getElementsByTagName('li');
// let[...li]=list;
// li.forEach(x=>{
//         console.log(x);
//         x.classList.add('anu');
//        x.innerHTML='krishna';
// })






var oddbutton=document.getElementById('oddbutton');
var evenbutton=document.getElementById('evenbutton');
var a=document.querySelectorAll('li:nth-child(odd)');
var b=document.querySelectorAll('li:nth-child(even)');
 oddbutton.addEventListener('mouseenter',()=>{
       

        a.forEach(x => {
           x.classList.add('odd');
                
        });
        b.forEach(y=>{
                y.classList.remove('even');

        });

 });


 evenbutton.addEventListener('mouseenter',()=>{

        b.forEach(j => {
           j.classList.add('even');
                
        });
        a.forEach(i=> {
                i.classList.remove('odd');

        });

 });