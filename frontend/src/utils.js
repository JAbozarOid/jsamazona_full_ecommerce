export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();

    // spilt that with forward slash
    const request = url.split('/');

    return {
        resource: request[1], //it's an array and index 1 is the second items
        id: request[2],
        action: request[3],
    };
};