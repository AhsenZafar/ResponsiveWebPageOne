function maskify(cc) {
    let pswd =[]
    if (cc.length <= 4){
        return cc
    }else{
        for(i=0; i<cc.length;i++){
            if (i < cc.length -4){
                pswd.push("#")
            }else{
                pswd.push(cc.charAt(i))
            }
        }
        console.log(pswd)
    }
}

maskify("wwfewfwefert")