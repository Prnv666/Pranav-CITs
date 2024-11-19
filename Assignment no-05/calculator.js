let result = document.getElementById("inputext")

let calculate = (number) => {
    result.value += number
}

let Result = () => {
    try{
        result.value = eval(result.value)
    }catch(err){
        alert("please Enter Valid Input")
    }
}

function allClear() {
    result.value = ''
}

function dele() {
    result.value = result.value.slice(0, -1) 
}
