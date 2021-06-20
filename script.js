var dis = document.getElementById("in");
var num1 = "", num2 = "", ope = "";
var res = "";
var memory;

function clearAllFun () {
    dis["placeholder"] = 0;
    num1 = "";
    num2 = "";
    ope = " ";
    memory = undefined;
    console.log(num1 + "ytr" + num2 + "ytr" + ope + "ytr" + memory)
}

function clearFun () {
    dis["placeholder"] = "0";
    num2 = "";
    console.log( " number 1 " + num1  + " number 2 " + num2 +  " operation  " + ope + " memory " + memory)
}

function myFun (e) {
    if (!["+", "-", "*", "/"].includes(ope) && memory === undefined) {
        if (dis["placeholder"] === "0") {
            dis["placeholder"] = e.value;
            num1 = e.value;
            console.log(`the number 1 is : ${ num1 }`);
        } else {
            dis["placeholder"] += e.value;
            num1 += e.value;
            console.log(`the number 11 is : ${ num1 }` + typeof (num1));
        }
    } else if (["+", "-", "*", "/"].includes(ope) && memory === undefined) {
        if (dis["placeholder"] !== "0" && num2 === "") {
            dis["placeholder"] = e.value;
            num2 = e.value;
            console.log(`the number 2 is : ${ num2 }`);
        } else if (dis["placeholder"] === "0" && num2 === "") {
            dis["placeholder"] = e.value;
            num2 = e.value;
            console.log(`the number 22 is : ${ num2 }`);
        } else if (dis["placeholder"] !== "0" && num2 !== "") {
            dis["placeholder"] += e.value;
            num2 += e.value;
            console.log(`the number 22 is : ${ num2 }`);
        }
    } else if (["+", "-", "*", "/"].includes(ope) && memory !== undefined) {
        if (dis["placeholder"] !== "0" && num2 === "") {
            dis["placeholder"] = e.value;
            num2 = e.value;
            console.log(`the number 3 is : ${ num2 }`);
        } else if (num2 !== "") {
            dis["placeholder"] += e.value;
            num2 += e.value;
            console.log(`the number 33 is : ${ num2 }`);
        }
    } else if (!["+", "-", "*", "/"].includes(ope) && memory !== undefined) {
        if (dis["placeholder"] !== "0" && num2 === "") {
            dis["placeholder"] = e.value;
            num2 = e.value;
            console.log(`the number 4 is : ${ num2 }`);
        } else if (num2 !== "") {
            dis["placeholder"] += e.value;
            num2 += e.value;
            console.log(`the number 44 is : ${ num2 }`);
        }
    }
}

function myOpeFun (e) {
    ope = e.value;
    console.log(`the ope is : ${ ope }`);
}

function myResFun () {
    switch (ope) {
        case "+":
            dis["placeholder"] = parseFloat(num1) + parseFloat(num2);
            res = String(parseFloat(num1) + parseFloat(num2));
            memory = res;
            num1 = memory;
            num2 = "";
            ope = "";
            console.log(`the plus is : ${ res }`);
            break;
        case "-":
            dis["placeholder"] = parseFloat(num1) - parseFloat(num2);
            res = String(parseFloat(num1) - parseFloat(num2));
            memory = res;
            num1 = memory;
            num2 = "";
            ope = "";
            console.log(`the mins is : ${ res }`);
            break;
        case "*":
            dis["placeholder"] = parseFloat(num1) * parseFloat(num2);
            res = String(parseFloat(num1) * parseFloat(num2));
            memory = res;
            num1 = memory;
            num2 = "";
            ope = "";
            console.log(`the multi is : ${ res }`);
            break;
        case "/":
            dis["placeholder"] = parseFloat(num1) / parseFloat(num2);
            res = String(parseFloat(num1) / parseFloat(num2));
            memory = res;
            num1 = memory;
            num2 = "";
            ope = "";
            console.log(`the div is : ${ res }`);
            break;
    }
} 

function myPerFun () {
    dis["placeholder"] = dis["placeholder"] / 100;
    num1 = dis["placeholder"];
}

