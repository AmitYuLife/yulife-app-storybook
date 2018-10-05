
export const validateEmail = (email: string): string => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
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
