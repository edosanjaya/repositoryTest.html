function addOption(arrayOption){
for (var i = 0; i<arrayOption.length; i++){
document.write("<option>"+arrayOption[i]+"</option>")
}
}
addOption(["test1", "test2","test3"])
