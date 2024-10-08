#!/usr/bin/env node
/*
 * Script to update the short.io links for the HackerOne Android app based on the Bitrise public install page URLs
 *
 * The Bitrise URL map (BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP) is generated using a go template `{{range $index, $element := .}}{{printf "%s|%s\n" $element.File $element.URL}}{{end}}`
 *
 * Sample value:
 *
 * ```
 * export BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP="app-x86_64-release-bitrise-signed-38820.apk|https://app.bitrise.io/app/6f4a733f-5566-4064-bfe0-ea9b8d240a27/installable-artifacts/143045cbbaccdee7/public-install-page/dc7950910eaf5b8095bdff50314bf304\napp-armeabi-v7a-release-bitrise-signed-38820.apk\|https://app.bitrise.io/app/6f4a733f-5566-4064-bfe0-ea9b8d240a27/installable-artifacts/4bb4682e063e99d9/public-install-page/81db37eaf844cec62cbcae0261b39ea7\napp-x86-release-bitrise-signed-38820.apk\|https://app.bitrise.io/app/6f4a733f-5566-4064-bfe0-ea9b8d240a27/installable-artifacts/bf97010000f457fe/public-install-page/d7a802d6af91fc27bc94559d23d11e44\napp-arm64-v8a-release-bitrise-signed-38820.apk\|https://app.bitrise.io/app/6f4a733f-5566-4064-bfe0-ea9b8d240a27/installable-artifacts/3ba6c39722cceea2/public-install-page/918f36d693286aa6b85d013a72df3851"
 * ```
 */

/**
 * List of short.io links to update
 */
const links = [
  {
    bitriseArchitectureCode: "arm64",
    shortioLinkId: "lnk_GJ1_5iHSJ9nkBnydW9bqPPXru",
  },
  {
    bitriseArchitectureCode: "armeabi",
    shortioLinkId: "lnk_GJ1_BZolV2RQRKYq8MCl0KAKH",
  },
  {
    bitriseArchitectureCode: "x86",
    shortioLinkId: "lnk_GJ1_BzrfrIC3XhKDRF3xony2w",
  },
  {
    bitriseArchitectureCode: "x86_64",
    shortioLinkId: "lnk_GJ1_Aed6DIGv3ch4OUJE7rTyD",
  },
];

run().catch(error => {
  console.log('ERROR', error);

  process.exitCode = 1;
});

async function run() {
  if (!process.env.SHORTIO_API_SECRET_KEY) {
    throw new Error("Environment variable `SHORTIO_API_SECRET_KEY` is not set");
  }

  if (!process.env.BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP) {
    throw new Error("Environment variable `BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP` is not set");
  }

  const bitrisePublicInstallPageUrlMap = parseBitriseUrlMap(process.env.BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP);

  console.log('Parsed URL MAP', bitrisePublicInstallPageUrlMap);

  for (const link of links) {
    const url = bitrisePublicInstallPageUrlMap[link.bitriseArchitectureCode];

    if (!url) {
      throw new Error(`URL for architecture ${link.bitriseArchitectureCode} not found in the URL map`);
    }

    console.log(`Updating short.io link ${link.shortioLinkId} to ${url} for architecture ${link.bitriseArchitectureCode}`);

    const shortioLink = await updateShortIoLink(link.shortioLinkId, url);

    console.log(`short.io link updated. URL: ${shortioLink.shortURL}`);
  }
}

/**
 * Updates the URL of a short.io link
 *
 * @param linkId short.io link id
 * @param urlToUpdateTo URL to update the short.io link to
 */
async function updateShortIoLink(linkId, urlToUpdateTo) {
  const url = `https://api.short.io/links/${linkId}`;
  const options = {
    body: JSON.stringify({
      originalURL: urlToUpdateTo,
    }),
    method: "POST",
    headers: { "content-type": "application/json", authorization: process.env.SHORTIO_API_SECRET_KEY },
  };

  return fetch(url, options).then(async res => {
    if (res.status >= 400) {
      const body = await res.json();

      throw new Error(`Failed to update short.io link (${res.status} ${res.statusText}): ${body.message || 'Unknown error'}`);
    }

    return res.json()
  });
}

/**
 * Parses the Bitrise URL map and returns a map of architecture to URL
 *
 * The architecture is extracted from the APK file name. For example, `app-x86_64-release-bitrise-signed-38820.apk` has the architecture `x86_64`
 */
function parseBitriseUrlMap(value) {
  const validArchitectures = ["arm64", "armeabi", "x86", "x86_64"];
  const lines = value.replaceAll('\\n', '\n').split("\n");
  const result = {};

  for (const line of lines) {
    const [apkfile, url] = line.split("|");
    const architecture = apkfile.split("-")[1];

    if (apkfile && url && architecture && validArchitectures.includes(architecture)) {
      result[architecture] = url;
    }
  }

  return result;
}
