export const isEmail = (allegedEmail) => {
    const re = /^\S+@\S+$/
    return (
        typeof allegedEmail === "string" &&
        re.test(allegedEmail)
    );
}

export const getDate = (postDate) => {
    const date = new Date(postDate);

    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()} - ${date.getFullYear()}`
}