
export const FormInputRules = (name: string, optional: boolean, form: any) => {
    let rules: any = [{ required: !optional, message: <span className='text-xs'>Required field</span> }];





    // Add password validation
    if (name === 'password') {
        rules.push({
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/,
            message: <span className='text-xs'>Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.</span>,
        });
    }



    // Add confirm password validation
    if (name === 'confirmPassword') {
        rules.push({
            validator: (_: any, value: any) =>
                !value || form.getFieldValue('password') === value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Passwords do not match')),
            message: <span className='text-xs'>Passwords do not match</span>
        });
    }


    return {
        name,
        rules,
    };
};