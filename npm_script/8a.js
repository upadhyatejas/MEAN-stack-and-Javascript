function vowelCount(s){
    var vowel = {a:0, e:0, i:0, o:0, u:0}
    var t = s.split("")
    for(var i=0; i<s.length; i++){
        if(s[i] == "a"){
            vowel.a += 1
        }
        if(s[i] == "e"){
            vowel.e += 1
        }
        if(s[i] == "i"){
            vowel.i += 1
        }
        if(s[i] == "o"){
            vowel.o += 1
        }
        if(s[i] == "u"){
            vowel.u += 1
        }
    }
    return vowel
}
const read=require("readline").createInterface({
input:process.stdin,output:process.stdout})
read.question("Enter a string\n",str=>{
var v=vowelCount(str);
console.log(v.a,v.e,v.i,v.o,v.u);
})