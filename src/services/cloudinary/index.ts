import { Cloudinary, Transformation } from "cloudinary-core";
import { PixelRatio } from "react-native";

const pixelRatio = PixelRatio.get();

const cloudinary = Cloudinary.new({
    cloud_name: "yu-life",
    protocol: "https://"
});

export function getCloudinaryUrl(imageUrl: string, options: Transformation.Options, usePixelRatio: boolean = true) {
    if (usePixelRatio) {
        if (options.width) {
            options.width = Math.round(pixelRatio * Number(options.width));
        }
        if (options.height) {
            options.height = Math.round(pixelRatio * Number(options.height));
        }
    }

    if (!options.crop) {
        options.crop = "fit";
    }

    const uri = cloudinary.url(`${imageUrl}_3x.png`, options);

    return { uri };
}
