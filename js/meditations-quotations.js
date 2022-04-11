const iconMap = {
    sins: "not tragedies"
};

const createIconSpan = (icon) => {
    let iconSpan;
    if (!iconMap[icon]) {
        console.error(`icon ${icon} has no mapping to an emoji`);
        // TODO remove 4 lines.
        iconSpan = document.createElement("span");
        const iconText = document.createTextNode(icon);
        iconSpan.appendChild(iconText);
    } else {
        iconSpan = document.createElement("span");
        const iconText = document.createTextNode(iconMap[icon]);
        iconSpan.appendChild(iconText);
    }
    iconSpan.classList.add("icon");
    return iconSpan;
};

const quotes = document.querySelectorAll(".icons");
quotes.forEach((quote) => {
    const quoteIcons = quote.dataset.icons.split(" ");
    const quoteIconContainer = document.createElement("div");
    quoteIconContainer.classList.add("icon-container");
    quoteIcons.forEach((icon) => {
        quoteIconContainer.appendChild(createIconSpan(icon));
    });
    quote.appendChild(quoteIconContainer);
});
