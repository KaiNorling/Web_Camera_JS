// const buttonElement =  document.querySelector('#button');

// window.addEventListener("click", event=> {
//     console.log(event.target);
// })
 
const videoELement = document.querySelector('#video');

 async function main() {
     let media = await window.navigator.mediaDevices.getUserMedia({
         video:true
     }) 

     videoELement.srcObject = await media
 }

 main()