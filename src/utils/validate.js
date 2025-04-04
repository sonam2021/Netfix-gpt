export const checkValidData = (name, email, password) => {
    // const isNameValid = /^[A-Za-z][A-Za-z\s]{4,28}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    // if(!isNameValid) return "name is not valid";
    if (!isEmailValid) return "Email ID is not valid";  // Fix: check for false
    if (!isPasswordValid) return "Password is not valid";  // Fix: check for false

    return null;
};
