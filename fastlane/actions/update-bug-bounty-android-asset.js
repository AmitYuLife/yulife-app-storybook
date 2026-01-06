#!/usr/bin/env node

/*
 * Script to update the short.io links for our bug bounty program
 * URLs are based on our own public install page
 * Note: This is not a 'fastlane action' as this is not written in Ruby. This is a JS script that will be run as part of fastlane pipeline.
 */

/**
 * List of short.io links to update
 */
const links = [
  {
    architectureCode: "arm64-v8a",
    shortioLinkId: "lnk_GJ1_5iHSJ9nkBnydW9bqPPXru",
  },
  {
    architectureCode: "armeabi-v7a",
    shortioLinkId: "lnk_GJ1_BZolV2RQRKYq8MCl0KAKH",
  },
  {
    architectureCode: "x86",
    shortioLinkId: "lnk_GJ1_BzrfrIC3XhKDRF3xony2w",
  },
  {
    architectureCode: "x86_64",
    shortioLinkId: "lnk_GJ1_Aed6DIGv3ch4OUJE7rTyD",
  },
];

run().catch((error) => {
  console.log("ERROR", error);

  process.exitCode = 1;
});

/**
 * Runs the script
 *
 * @param apkURLs APK URLs to update the short.io links (Array of objects from fastlane)
 * @example
 * [
 *   { text: "ARM 32-bit", url: "https://example.com/arm32.apk", architecture: "armeabi-v7a" },
 *   { text: "ARM 64-bit", url: "https://example.com/arm64.apk", architecture: "arm64-v8a" },
 *   { text: "x86_64", url: "https://example.com/x86_64.apk", architecture: "x86_64" },
 *   { text: "x86", url: "https://example.com/x86.apk", architecture: "x86" },
 * ]
 */
async function run() {
  try {
    const apkURLs = JSON.parse(process.argv[2]);
    if (!process.env.SHORTIO_API_SECRET_KEY) {
      throw new Error("Environment variable `SHORTIO_API_SECRET_KEY` is not set");
    }

    if (!apkURLs) {
      throw new Error("APK URLs is not set in the command line arguments");
    }

    for (const apkURL of apkURLs) {
      // Get short.io link id from the architecture code
      const shortioLinkId = links.find((link) => link.architectureCode === apkURL.architecture)?.shortioLinkId;
      if (!shortioLinkId) {
        throw new Error(`Short.io link id not found for architecture ${apkURL.architecture}`);
      }

      console.log(`Updating short.io link ${shortioLinkId} to ${apkURL.url} for architecture ${apkURL.architecture}`);

      const shortioLink = await updateShortIoLink(shortioLinkId, apkURL.url);
      console.log(`short.io link updated. URL: ${shortioLink.shortURL}`);
    }
  } catch (error) {
    console.log("Error updating bug bounty Android asset", error.message);
    throw error;
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

  return fetch(url, options).then(async (res) => {
    if (res.status >= 400) {
      const body = await res.json();

      throw new Error(
        `Failed to update short.io link (${res.status} ${res.statusText}): ${body.message || "Unknown error"}`
      );
    }

    return res.json();
  });
}
