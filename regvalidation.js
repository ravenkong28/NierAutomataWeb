function formValidation()
{
    var name = document.registration.name;
    var email = document.registration.email;
    var msex = document.registration.msex;
    var fsex = document.registration.fsex;
    var city = document.registration.city;
    var address = document.registration.street;
    if(validname(name))
    {
        if(validemail(email))
        {
            if(validsex(msex,fsex))
            {
                if(validcity(city))
                {
                    if(validaddress(address))
                    {
                    }
                }
            }
        }
    }
    return false;
}

function validname(name)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(name.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Username can't be blank");
        name.focus();
        return false;
    }
}

function validemail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function validsex(msex,fsex)
{
    x=0;

    if(msex.checked) 
    {
    x++;
    } 
    if(fsex.checked)
    {
    x++; 
    }
    if(x==0)
    {
    alert('Select Male/Female');
    msex.focus();
    return false;
    }
    else
    {
        return true;
    }
}

function validcity(city)
{
    if(city.value == "Default")
    {
        alert('Select your country from the list');
        city.focus();
        return false;
    }
    else
    {
    return true;
    }
}

function validaddress(address)
{
    var mailformat = /^[0-9a-zA-Z]+$/;
    if(email.value.match(mailformat) + 'street')
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
    else
    {
        alert("You need to input 'street' in your address");
        email.focus();
        return false;
    }
}
