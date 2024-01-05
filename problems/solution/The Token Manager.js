// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// async function expiration(){
//     setTimeout(console.log("your authentication is for 10s in this browser")
//     ,10000)
// }

// async function setAuthToken(authentication){
//     let x = JSON.stringify(authentication);
//     localStorage.setItem("Token",x);
//     await expiration();
//     localStorage.removeItem("Token");
// }

function setAuthToken(token, expirationTimeInSeconds) {
    // Get the current time
    const now = new Date();

    // Calculate the expiration date
    const expirationDate = new Date(now.getTime() + expirationTimeInSeconds * 1000);

    // Store the token and expiration date in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpirationDate', expirationDate.toString());
}