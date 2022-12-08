// complete the given function

function palindrome(str){
    let str = str.split("");
    let l = 0, r = str.length;
    while(l<r){
        if(str[l]!==str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
module.exports = palindrome
