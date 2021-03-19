export const emailValid = (email) => {
    return /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-][-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]*(?<!\.)@(?!\.)[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]+(?:\.[a-zA-Z0-9-]+)+$/.test(email)
        && !/\.\./.test(email)
}