export const isStrongPassword = (password) => {
    // Comprobar la longitud de la contraseña
    if (password.length < 8) {
      return false;
    }
  
    let cap = false;
    let min = false;
    let num = false;
    let other = false;

    for(let i = 0; i < password.length; i ++){
        if(password[i] >= 'a' && password[i] <= 'z') min = true;
        else if(password[i] >= 'A' && password[i] <= 'Z') cap = true;
        else if(password[i] >= '0' && password[i] <= '9') num = true;
        else other = true;
    }

    return cap && min && other && num;
};