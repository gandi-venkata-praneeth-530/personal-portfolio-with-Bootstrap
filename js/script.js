function sendMail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_65o2wan", "template_2pm9r3k", params)
    .then(function (response) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      console.error("FAILED...", error);
      alert("Message failed to send.");
    });
}
