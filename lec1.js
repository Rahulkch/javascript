//  shadowing schopinh 

function test(){
    let a="hello";
    if(true){
        let a="hey";
        console.log(a)
    }
    console.log(a)
}

test()