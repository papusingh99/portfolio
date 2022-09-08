//navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})



// form-validation

function validation() {

    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    if (user == "") {
      document.getElementById('username').innerHTML ="  Please fill the UserName field";
      return false;
    }
     if ((user.length <=2)  ||  (user.length >=20)) {
      document.getElementById('username').innerHTML ="  user name should be between 2 to 20 characters "
    }else if (!isNaN(user)) {
      document.getElementById('username').innerHTML = "  Only Characters are allowed"

    }


    if (email == "") {
      document.getElementById('emailid').innerHTML = " ** Enter Email ID"
      return false;
    }else if (email.indexOf('@') <= 0) {
      document.getElementById('emailid').innerHTML = " **  @ Invalid Position"
      return false;
    }else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
      document.getElementById('emailid').innerHTML = " **  . Invalid Position"
      return false;
    }

    // localStorage.setItem("user", user)
    // localStorage.setItem("email", email)
    // localStorage.setItem("comment", comment)


    let records=new Array();
records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  records.push({
  "user":user,
  "email":email,
  "comment":comment
})
localStorage.setItem("users",JSON.stringify(records));

  }
}