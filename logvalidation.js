function validateform(){  
    var email=document.myform.email.value;  
    var password=document.myform.password.value;  
      
    if (email==null || email==""){  
      alert("Email can't be blank");  
      return false;  
    }else if(password==null || password==""){  
      alert("Password can't be blank");  
      return false;  
      }  
    }  