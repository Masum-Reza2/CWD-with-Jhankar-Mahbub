// document.getElementById('makeBold').addEventListener('click', (() => {
//     let inputField = document.getElementById('inputField');
//     if(inputField.style.fontWeight !== 'bold'){
//         inputField.style.fontWeight = 'bold'
//     }
//     else{
//         inputField.style.fontWeight = 'normal'
//     }
// }))

let alertShow = () => {
    let warning = document.getElementById('warning');
    warning.classList.toggle('hidden');
    setTimeout(() => {
        warning.classList.toggle('hidden');
    }, 2000);
}

//fonweight function
let styleMaker = (id, ifStyle, elseStyle) => {
    document.getElementById(id).addEventListener('click', (() => {
        let inputField = document.getElementById('inputField');
        if (inputField.value) {
            if (inputField.style.fontWeight !== ifStyle) {
                inputField.style.fontWeight = ifStyle
            }
            else {
                inputField.style.fontWeight = elseStyle
            }
        }
        else {
            alertShow()
        }
    }))
}

//font-style function 
let FontStyleMaker = (id, ifStyle, elseStyle) => {
    document.getElementById(id).addEventListener('click', (() => {
        let inputField = document.getElementById('inputField');
        if (inputField.value) {
            if (inputField.style.fontStyle !== ifStyle) {
                inputField.style.fontStyle = ifStyle
            }
            else {
                inputField.style.fontStyle = elseStyle
            }
        }
        else {
            alertShow()
        }
    }))
}

//underline maker
let underlineMaker = (id, ifStyle, elseStyle) => {
    document.getElementById(id).addEventListener('click', (() => {
        let inputField = document.getElementById('inputField');
        if (inputField.value) {
            if (inputField.style.textDecoration !== ifStyle) {
                inputField.style.textDecoration = ifStyle
            }
            else {
                inputField.style.textDecoration = elseStyle
            }
        }
        else {
            alertShow()
        }
    }))
}



//boldMaker 
styleMaker('makeBold', 'bold', 'normal');
//italicMaker
FontStyleMaker('italicMaker', 'italic', 'normal')
//underlineMaker
underlineMaker('underlinMaker', 'underline', 'none')


//alignment functions
// left align
let alignLeftMaker = (id, ifStyle, elseStyle) => {
    document.getElementById(id).addEventListener('click', (() => {
        let inputField = document.getElementById('inputField');
        if (inputField.value) {
            if (inputField.style.textAlign !== ifStyle) {
                inputField.style.textAlign = ifStyle
            }
            else {
                inputField.style.textAlign = elseStyle
            }
        }
        else {
            alertShow()
        }

    }))
}

//Alignment
alignLeftMaker('alignLeft', 'left', 'justify')
alignLeftMaker('alignCenter', 'center', 'justify')
alignLeftMaker('alignRight', 'right', 'justify')
alignLeftMaker('alignJustify', 'justify', 'justify')


//case conversation 
document.getElementById('toggleCase').addEventListener('click', (() => {
    let inputField = document.getElementById('inputField');
    if (inputField.value) {
        inputField.classList.toggle('uppercase')
    }
    else {
        alertShow()
    }
}))

//clearText
document.getElementById('clearText').addEventListener('click', (() => {
    let inputField = document.getElementById('inputField');
    if (inputField.value) {
        inputField.value = ''
    }
    else {
        alertShow()
    }
}))


//font size
document.getElementById('fontEnter').addEventListener('click', (() => {
    let inputField = document.getElementById('inputField');
    let sizeFont = document.getElementById('sizeFont');
    let sizeFontValue = sizeFont.value;
    if (sizeFontValue && inputField.value) {
        inputField.style.fontSize = sizeFontValue + 'px';
    }
    else {
        alertShow();
    }
}))

document.getElementById('sizeFont').addEventListener('keyup', ((event) => {
    let inputField = document.getElementById('inputField');
    let sizeFont = document.getElementById('sizeFont');
    let sizeFontValue = sizeFont.value;
    if (event.key === 'Enter') {
        inputField.style.fontSize = sizeFontValue + 'px'
    }
}))
