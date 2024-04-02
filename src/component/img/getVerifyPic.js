export const getverifyPic = (imagePath) => {
    switch (imagePath) {
        case 1:
            return (require("../img/verify.png"));
        case 2:
            return (require("../img/verify2.png"));
        case 3:
            return (require("../img/verify3.png"));
        case 4:
            return (require("../img/verify4.png"));
        case 5:
            return (require("../img/verify5.png"));
        default:
            return null;
    }
};