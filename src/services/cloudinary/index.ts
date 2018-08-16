import { Cloudinary, Transformation } from "cloudinary-core";
import { PixelRatio } from "react-native";
const pixelRatio = PixelRatio.get();

const cloudinary = Cloudinary.new({
    cloud_name: "yu-life",
    protocol: "https://",
});

interface IGetCloudinaryUrl extends Transformation.Options {
    url: string;
}

const getExtension = () => {
    if (pixelRatio > 2) {
        return "_3x";
    } else if (pixelRatio > 1) {
        return "_2x";
    } else {
        return "";
    }
};

export function getCloudinaryUrl({ url, width, crop, quality, transformation }: IGetCloudinaryUrl) {
    const options: Transformation.Options = {
        crop: crop || "fit",
        quality: quality || 80,
        transformation,
        width,
    };
    const uri = cloudinary.url(`${url}${getExtension()}.png`, options);
    return { uri };
}
