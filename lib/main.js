'use strict';
const string = ['||:::' , ':::||' ,
    '::|:|' , '::||:' , ':|::|' ,
    ':|:|:' , ':||::' , '|:::|' ,
    '|::|:' , '|:|::'];

function codeNum(code) {
    code = code.split('-');

    if(code.length === 2) {
        return code[0] + code[1];
    }else {
        return code[0];
    }
}



function codeNumCode(collection) {
    if(collection.length > 8)
        return collection.substr(0,5) + '-' + collection.substr(5, collection.length - 5);
    else
        return collection;

}

function numberToString(code) {

    let result = '|';
    code = codeNum(code);
    let sum = 0;

    for (let i = 0 ; i < code.length; i++) {
        result += string[parseInt(code[i])];
        sum += parseInt(code[i]);
    }

    result += string[parseInt(10 - sum % 10)] + '|';
    return result;
}


function stringToNumber(Code) {
    let result = '';
    let count = ( Code.length - 7 ) / 5;
    let i = 0;
    while( i !== count ){
        result += string.indexOf(Code.substr( (i * 5 + 1) , 5));
        i += 1;
    }
    return codeNumCode(result);
}

function main(str){
    let result;
    if( str.match(/[0-9]/) !== null ) {
        result = numberToString(str);
    }else {
        result = stringToNumber(str);
    }
    return result;
}

module.exports = main;
