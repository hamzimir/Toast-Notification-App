let toastbox = document.getElementById("toastbox");
let successmsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
let errorsmsg = `<i class="fa-solid fa-circle-xmark"></i>Please, Fix The Error`;
let invalidsmsg = `<i class="fa-solid fa-circle-exclamation"></i>Invalid Input,Check It Again`;
function showtoast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;

  toastbox.appendChild(toast);

  if (msg === errorsmsg) {
    toast.classList.add("error");
  }
  if(msg === invalidsmsg){
    toast.classList.add("invalid");
}

setTimeout(() => {
    toast.remove();
  }, 5000);
}