export const isEmail = (allegedEmail) => {
    const re = /^\S+@\S+$/
    return (
        typeof allegedEmail === "string" &&
        re.test(allegedEmail)
    );
}