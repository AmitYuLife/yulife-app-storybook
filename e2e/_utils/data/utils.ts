export const generateRandomId = () => {
    const ObjectId = (
        m = Math,
        d = Date,
        h = 16,
        // tslint:disable-next-line:no-shadowed-variable
        s = (s) => m.floor(s).toString(h)
    ) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
    return ObjectId();
};
