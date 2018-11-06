import validator from "email-validator";

export const validateEmail = (email: string): string => {
    if (!validator.validate(email)) {
        return "Please enter a valid email address.";
    }

    return "";
};

export const validatePassword = (password: string): string => {
    if (!password) {
        return "Please enter a password";
    }

    // if (password.length < 6) {
    //     return "Please enter a password";
    // }

    return "";
};
