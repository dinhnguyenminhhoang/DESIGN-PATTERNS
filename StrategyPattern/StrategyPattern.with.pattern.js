/**
 * Giảm giá khi người dung đặt trước 1 sản phẩm A
 * @param {*} originPrice
 * @return
 */
function PreOrderPrice(originalPrice) {
    return originalPrice * 0.8;
}
/**
 * tiếp tục thêm tính năng khuyến mãi thông thường, ví dụng nếu gốc < 200 thì giảm 10% còn lại nếu > 200 thì giảm tối da 30
 * @param {*} originPrice
 * @return
 */
function PromotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 * Giá mặc định
 * @param {*} orginalPrice
 * @returns
 */
function defaultPrice(orginalPrice) {
    return orginalPrice;
}
// thêm tiếp tục các func tương ứng với các chức năng của sản phẩm
// function getPrice(orginalPrice, typePromotion) {
//     if (typePromotion === "preOrder") {
//         return PreOrderPrice(orginalPrice);
//     }
//     if (typePromotion === "promotion") {
//         return PromotionPrice(orginalPrice);
//     }
//     if (typePromotion === "default") {
//         return defaultPrice(orginalPrice);
//     }
// }
const getPriceStrategies = {
    preOrder: PreOrderPrice,
    promotion: PromotionPrice,
    default: defaultPrice,
};
function getPrice(orginalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](orginalPrice);
}
console.log(`----->Price`, getPrice(200, "preOrder"));
