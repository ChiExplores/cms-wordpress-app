export const relativeToAbsoluteUrls = (htmlString = "") => {
  console.log('relativeToAbsUrl, ', htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join(""))
  return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join("");
}