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

function getTemperatureDescription(value) {
    if (value < -40) {
        return "Avoid prolonged exposure. Wear multiple layers of warm clothing, including a hat, gloves, and scarf. Be mindful of frostbite.";
    } else if (value >= -40 && value < -23) {
        return "Dress in warm layers. Limit exposure to cold wind. Stay hydrated.";
    } else if (value >= -23 && value < -6) {
        return "Wear warm clothing, but consider removing layers as needed. Be mindful of frostbite.";
    } else if (value >= -6 && value < 12) {
        return "Dress in layers. Wear a hat and gloves. Consider wearing a scarf.";
    } else if (value >= 12 && value < 30) {
        return "Wear lightweight, breathable clothing. Stay hydrated. Protect your skin from the sun. Avoid excessive heat.";
    } else if (value >= 30) {
        return "Wear loose-fitting, light-colored clothing. Stay hydrated. Seek shade during the hottest parts of the day. Be aware of heatstroke.";
    } else {
        return "Invalid temperature value.";
    }
}

export { getUVIndexDescription, getTemperatureDescription };