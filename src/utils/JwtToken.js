// utils/jwt.js
import jwtEncode from "jwt-encode";
export const secret = "Valen@Secr";

export function generateToken(payload, expiry = "1d") {
  // add expiry as timestamp
  const now = Math.floor(Date.now() / 1000);
  const exp = expiry.endsWith("d")
    ? now + parseInt(expiry) * 24 * 60 * 60
    : now + 3600; // default 1h
  const tokenPayload = { ...payload, exp };
  return jwtEncode(tokenPayload, secret);
}
