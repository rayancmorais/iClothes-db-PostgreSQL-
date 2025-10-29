export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "iClothes";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce store built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "admin@example.com", //put test email after production
  password: "123456",
};

export const signUpDefaultValues = {
  name: "Rayan Morais",
  email: "admin@example.com", //put test email for production only
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "Rayan Morais",
  streetAdress: "Av Eng. Valdir Pedro Monachesi", //fill in the string only for production
  city: "Juiz de Fora - MG",
  postalCode: "36038-230",
  country: "Brazil",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";
