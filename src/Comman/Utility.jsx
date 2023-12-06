// Encrypted And Decrypted -> Key 
var CryptoJS = require("crypto-js");

var Key = '9z$C&F)J@NcRfTjW'
var Code = 'QUJDREVGR0g='

export const DecryptedList = (response) => {
    var key = CryptoJS.enc.Utf8.parse(Key);
    var iv = CryptoJS.enc.Base64.parse(Code);
    var bytes = CryptoJS.TripleDES.decrypt(response, key, {
        mode: CryptoJS.mode.CBC,
        iv: iv,
    });
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const DecryptedID = (response) => {
    var key = CryptoJS.enc.Utf8.parse(Key);
    var iv = CryptoJS.enc.Base64.parse(Code);
    var bytes = CryptoJS.TripleDES.decrypt(response, key, {
        mode: CryptoJS.mode.CBC,
        iv: iv,
    });
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Encrypt Data 
export const EncryptedList = (text) => {
    var key = CryptoJS.enc.Utf8.parse(Key);
    var iv = CryptoJS.enc.Base64.parse(Code);
    var encoded = CryptoJS.enc.Utf8.parse(text);
    var bytes = CryptoJS.TripleDES.encrypt(encoded, key, {
        mode: CryptoJS.mode.CBC,
        iv: iv,
    });
    return bytes.toString();
}