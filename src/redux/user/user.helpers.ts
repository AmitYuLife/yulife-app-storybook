export const reduceUserFeatures = (acc: { [x: string]: boolean }, item: { name: string; value: boolean }) => {
    acc[item.name] = item.value;
    return acc;
};
