export default function validate(value){

    const errors = {};


    // form validation 
    if( value.name === ''){
        errors.name = 'Name is required';
    }

    let pattern = /^[a-z0-9_.]*@[a-z0-9]*\.[a-z]{2,5}$/;

    if ( value.email === "") {
        errors.email = 'Email is required';
    }else if((!pattern.test(value.email))){

        errors.email='Invalid Email address';
    } 
    
    let cell_pattern = /^(01|8801|\+8801)[0-9]{9}$/;

    if (value.phone === "") {
        errors.phone='Phone number is required';
    }else if(!cell_pattern.test(value.phone) ){
        errors.phone = 'Invalid phone number';
    }

    if(value.msg === ""){
        errors.msg = 'Message is required';
    }

    

    return errors;
}