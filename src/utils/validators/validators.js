export const required=value=>{
    if (value)  return undefined;
    return 'Field is required';
};
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length>maxLength)  return `Max length is ${maxLength} symbols`;
    return undefined;
};
/*export const minLength3=value=>{
    if (value && value.length<3)  return 'Min length limit';
    return undefined;
};*/

