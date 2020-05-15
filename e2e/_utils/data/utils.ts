import * as Bcrypt from "bcryptjs";

export const generateRandomMongoId = () => {
    const ObjectId = (
        m = Math,
        d = Date,
        h = 16,
        // tslint:disable-next-line:no-shadowed-variable
        s = (s) => m.floor(s).toString(h)
    ) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
    return ObjectId();
};

export const hashPassword = (password: string) => {
    const salt = Bcrypt.genSaltSync(10);
    return Bcrypt.hashSync(password, salt);
}
