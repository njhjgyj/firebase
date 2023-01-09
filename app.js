
// function buttonClicked(){
//     let get1 = document.getElementById('email');
//     let get2 = document.getElementById('password');
//     let newObj = {
//         get1: get1.value,
//         get2: get2.value
//     };
//     console.log(newObj);
//     get1.value = '';
//     get2.value = '';

//     firebase.database().ref("students").set(newObj);

// };

// function sign_up() {
//     let sign_up_email = document.getElementById('email');
//     let sign_up_password = document.getElementById('password');
//     firebase.auth().createUserWithEmailAndPassword(sign_up_email.value, sign_up_password.value)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//             console.log(user);
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//             console.log(errorMessage);
//         });
//     sign_up_email.value = '';
//     sign_up_password.value = '';
// };

// function sign_in() {
//     let sign_in_email = document.getElementById('sign-in-email');
//     let sign_in_password = document.getElementById('sign-in-password');
    
//     firebase.auth().signInWithEmailAndPassword(sign_in_email, sign_in_password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//     console.log('user login successfuly');
//     console.log(userCredential);
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage);
//   });

//     sign_in_email.value = '';
//     sign_in_password.value = '';
// };
