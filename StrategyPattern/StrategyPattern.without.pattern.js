function getPrice(originalPrice, typePromotion = "default") {
    // giảm giá khi người dùng đặt trước 1 sản phẩm của A
    if (typePromotion === "preOrder") {
        return originalPrice * 0.8;
    } // nếu như bạn đã biết về SOLID thì đã phá vở nguyên tắt đầu tiên. đó là nguyên tắt t

    // tiếp theo tính năng khuyến mãi thông thường, ví dụ nếu giá gốc < 200 thì giảm 10% , còn lớn hơn thì giảm t
    if (typePromotion === "promotion") {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }
    // ... mỗi cái lại 1 if-else
    if (typePromotion === "default") {
        return originalPrice;
    }
}

console.log(`----->Price`, getPrice(200, "preOrder"));
