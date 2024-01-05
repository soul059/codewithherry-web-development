let div = document.querySelector("div");
let but = document.querySelector(".but");

function getpassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-";
    function generatePassword(length) {


        let password = "";

        for (let i = 0; i < length; i++) {

            let index = Math.floor(Math.random() * chars.length);

            password += chars[index];
        }

        return password;
    }
    let n = Math.floor(8 + Math.random() * 4);
    pass = generatePassword(n);

    function chack() {
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
        return [x(), y(), z()];
    }

    let arr = chack();
    console.log(arr);
    while (arr[0] || arr[1] || arr[2]) {
        if (arr[0] || arr[1] || arr[2]) {
            arr = chack();
            pass = generatePassword(n);
        }
    }
    console.log(arr);

    console.log(pass);
    div.innerText = pass;
}

but.addEventListener("click",()=>{
    
    getpassword();

})