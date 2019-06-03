//Function to replace more than once occurence of first character in the string is received replaced with *
function fixStart(s){
    var t = s.split("")
    for(var i=1; i<t.length; i++){
        if (t[i] == t[0]){
            t[i] = '*'
        }
    }
    return t
}

console.log(fixStart('ououououou').join(""))