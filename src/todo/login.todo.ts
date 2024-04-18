/*
 * user reg info use kore login-> console log kore dekhbo
 * then login info backend server api e fetch korbo[since eta form data naa,tai post method use korar time e (jekhane headers er moddhe application/json use korbo),at last json.stringify te convert korbo]
 * user login successful hole backend  theke 1ta access token generate korbe(oi token decode kore overall user info pabo)
 * oi token ta local storage e store korbo(auth.services-> storeUserInfo name fn create kore login page theke access token obj akare pathabo)
 * oi accesstoken obj setToLocalStorage fn er moddhe thaka localStorage.setItem e key & value akare pathabo
 * then oi token ta local storage theke retrieve kore user info navbar e dekhbo
 * er maddhome navbar e login/logout button show korbo
 *
 */
