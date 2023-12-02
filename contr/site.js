const linkDB = [
    { id: 'ukrNET', link: 'https://www.ukr.net/', name: 'UKR net' },
    { id: 'gooGl', link: 'https://www.google.com.ua/', name: 'Google' }
]

const getLinks = () => {
    return linkDB;
}


const findById = (id) => {
    const result = linkDB.find(item => item.id ===id);
    return result;
}

module.exports = {
    getLinks,
    findById
}