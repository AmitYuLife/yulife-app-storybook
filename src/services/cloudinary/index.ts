import { Cloudinary, Transformation } from "cloudinary-core";
import { PixelRatio } from "react-native";
import Config from "react-native-config";

const pixelRatio = PixelRatio.get();

const cloudinary = Cloudinary.new({
  cloud_name: Config.CLOUDINARY_CLOUD_NAME,
  protocol: "https://",
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
