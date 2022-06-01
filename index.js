// Write your solution in this file!
const employee = {"name": "Michael Muliro", "streetAdress": "Runda"};
function updateEmployeeWithKeyAndValue(emp, key, value){
    return {...emp, [key]:value,};
}



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj= {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
