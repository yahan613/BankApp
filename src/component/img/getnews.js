export const getNewsPic = (imagePath) => {
    switch (imagePath) {
        case 'news1':
            return (require("../img/news1.jpg"));
        case 'news2':
            return (require("../img/news2.jpg"));
        case 'news3':
            return (require("../img/news3.jpg"));
        default:
            return (require("../img/news1.jpg"));
    }
};