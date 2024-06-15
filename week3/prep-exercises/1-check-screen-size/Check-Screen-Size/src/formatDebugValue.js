export const formatDebugValueWindowSize = ({ width, height }) => {
    return `width: ${width}px, height: ${height}px`;
};

export const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
    if (maxWidth === Infinity) {
        return `(min-width: ${minWidth}px) => ${isWithin}`;
    }
    if (minWidth === 0) {
        return `(max-width: ${maxWidth}px) => ${isWithin}`;
    }
    return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`;
};