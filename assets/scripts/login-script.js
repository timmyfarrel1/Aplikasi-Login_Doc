/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/**@module Login-Script */
/** 
*Membuat variable loginFormElement untuk tampilan form.
*@constant{HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/**
*Membuat variable inputEmailElement untuk tampilan input email
*constant{HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/**
*Membuat variable inputPasswordElement untuk tampilan input hasil.
*constant{HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');
/**
*Membuat variable expectedEmail untuk menyimpan informasi email sementara.
@constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/**
*Membuat variable expectedPassword untuk menyimpan informasi password sementara.
@constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  /**
  *Membuat variable email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  *@constant {string}
  */
  const email = inputEmailElement.value;
  /**
  *Membuat variable password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  @constant {string}
  */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
