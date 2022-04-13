let apiBaseUrl = "";
let oAuthBaseUrl = "";
let s3ImageUrl = "";
let isDevelopment = true;
let baseName = "/";

if (window.location.hostname === "localhost") {
  apiBaseUrl = "https://qaapi.embassysocial.io/v1";
  oAuthBaseUrl = "";
  s3ImageUrl = "https://stage-media.embassysocial.io/";
  isDevelopment = true;
  baseName = "/";
} else if (window.location.hostname === "web-qa.embassysocial.io") {
  apiBaseUrl = "https://qaapi.embassysocial.io/v1";
  oAuthBaseUrl = "";
  s3ImageUrl = "https://stage-media.embassysocial.io/";
  isDevelopment = true;
  baseName = "/";
} else if (window.location.hostname === "192.168.1.108") {
  apiBaseUrl = "https://devapi.embassysocial.io/v1";
  oAuthBaseUrl = "";
  s3ImageUrl = "https://dev-media.embassysocial.io/";
  isDevelopment = true;
  baseName = "/";
} else if (window.location.hostname === "web-stage.embassysocial.io") {
  apiBaseUrl = "https://stageapi.embassysocial.io/v1";
  oAuthBaseUrl = "";
  s3ImageUrl = "https://stage-media.embassysocial.io/";
  isDevelopment = true;
  baseName = "/";
} else {
  apiBaseUrl = "https://api.embassysocial.io/v1";
  oAuthBaseUrl = "";
  s3ImageUrl = "https://image.embassysocial.io/";
  isDevelopment = false;
  baseName = "/creator/";
}

export const IS_DEVELOPMENT = isDevelopment;
export const API_BASE_URL = apiBaseUrl;
export const OAUTH_BASE_URL = oAuthBaseUrl;
export const S3_GET_IMAGE_URL = s3ImageUrl;
export const BASE_NAME = baseName;

/**
 * REST API endpoints
 */
export const API_ENDPOINT = {
  USER_CONFIG: "user/config",
  CREATOR_PROFILE: "/user/creatorDataByHandle",
  SIGNUP_PROFILE: "/user/webSignUp",
  LOGIN_PROFILE: "/auth/webLogin",
  QTY_AMT: "/user/get_totalamount",
  SAVE_ORDER: "/user/web_new_order",
  IMAGE_TOKEN: "/user/imageUploadToken",
  ORDER_PAYMENT: "/user/order_payment_authorization",
  ORDER_PAYMENT_STATUS: "/user/transaction_status",
  REINITIATE_ORDER_PAYMENT: "/user/reinitiateOrderPayment",
  REFRESH_TOKEN: "/auth/refresh_token",
};
