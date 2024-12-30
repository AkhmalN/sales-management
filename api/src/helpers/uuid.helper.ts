import base62 from "base62";
export default function generateUUID(): string {
  const randomValue = Math.floor(Math.random() * 1e12);

  let uuid = base62.encode(randomValue);

  while (uuid.length < 16) {
    const optionalValue = Math.floor(Math.random() * 1e6);

    uuid += base62.encode(optionalValue);
  }

  return uuid.substring(0, 16).toUpperCase();
}
