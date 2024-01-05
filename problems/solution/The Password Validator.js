// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-";
function chack(pass,n) {
    let x = () => {
        for (let i = 0; i < n; i++) {
            if (pass[i] >= 'A' && pass[i] <= 'Z') {
                return 0;
            }
        }
        return 1;
    }
    let y = () => {
        for (let i = 0; i < n; i++) {
            if (pass[i] >= '0' && pass[i] <= '9') {
                return 0;
            }
        }
        return 1;
    }
    let z = () => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 10; j++) {
                if (pass[i] == chars[chars.length - 11 + j]) {
                    return 0;
                }
            }
        }
        return 1;
    }
    if (x() || y() || z()){
        return 1;
    }
        return 0;
}


let pas ="kevalK12#"
if(chack(pas,pas.length)){
    console.log("Invalid Password");
}
else{
    console.log("Valid Password")
}