function submitForm(){
  if (document.getElementById("contact-us")) {
    alert("We have received your message")
    document.getElementsById("form-control").value = "";
   
  } else if(document.getElementById("appointment")) {
    alert("We have received your appointment request and we will contact you soon to confirm!")
    document.getElementsById("form-control").value = "";

  }
}