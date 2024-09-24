function getUVIndexDescription(value) {
    if (value >= 0 && value <= 2) {
        return "Minimal risk of sunburn.";
    } else if (value >= 3 && value <= 4) {
        return "Some risk of sunburn for fair-skinned people after prolonged exposure.";
    } else if (value >= 5 && value <= 6) {
        return "Increased risk of sunburn for everyone.";
    } else if (value >= 7 && value <= 9) {
        return "High risk of sunburn for everyone.";
    } else if (value >= 10) {
        return "Extremely high risk of sunburn.";
    } else {
        return "Invalid UV index value.";
    }
}

export { getUVIndexDescription };