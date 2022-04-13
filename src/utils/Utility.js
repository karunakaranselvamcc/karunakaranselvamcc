import btoa from "btoa";
import { IS_DEVELOPMENT, S3_GET_IMAGE_URL } from "../config/index";
import store from "store";

export let userSessionTimer;
let sessionTime = 0;

export const myLog = (...message) => {
  if (IS_DEVELOPMENT) {
    console.log(...message);
  }
};

export const numFormatter = (num) => {
  if (num > 9999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "k"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m"; // convert to M for number from > 1 million
  } else if (num < 9999) {
    return num; // if value < 1000, nothing to do
  }
};

/**
 * profile image high quality url
 **/
export const getProfileImageOriginalUrl = (fileName) => {
  if (!fileName) {
    return "";
  }
  const imageConfig = store.get("s3Config");
  if (!imageConfig) {
    return "";
  }
  const imageRequest = JSON.stringify({
    bucket: imageConfig.image_bucket,
    key: imageConfig.image_location.profile + fileName,
    filters: {
      format: "webp",
    },
  });
  return S3_GET_IMAGE_URL + btoa(imageRequest);
};

/**
 * order image high quality url
 **/
export const getOrderImageOriginalUrl = (fileName) => {
  if (!fileName) {
    return "";
  }
  const imageConfig = store.get("s3Config");
  if (!imageConfig) {
    return "";
  }
  const imageRequest = JSON.stringify({
    bucket: imageConfig.image_bucket,
    key: imageConfig.image_location.post_image + fileName,
    filters: {
      format: "webp",
    },
  });
  return S3_GET_IMAGE_URL + btoa(imageRequest);
};

/**
 * order video high quality url
 **/
export const getOrderVideoOriginalUrl = (fileName) => {
  if (!fileName) {
    return "";
  }
  const imageConfig = store.get("s3Config");
  if (!imageConfig) {
    return "";
  }
  const imageRequest = JSON.stringify({
    bucket: imageConfig.image_bucket,
    key: imageConfig.video_location.post_video + fileName,
    // filters: {
    //   format: "webp",
    // },
  });
  return S3_GET_IMAGE_URL + btoa(imageRequest);
};

export const isLoggedIn = () => {
  if (typeof store.get("userSession") === "object") {
    if (!userSessionTimer) {
      scheduleTokenRenewal();
    }
    return true;
  }
  return false;
};

export const logout = () => {
  store.clearAll();
  clearInterval(userSessionTimer);
};

/**
 * logout user when user is not active for 20 mins
 **/
export const scheduleTokenRenewal = () => {
  sessionTime = 0;
  userSessionTimer = setInterval(() => {
    sessionTime++;
    if (sessionTime > 2400) {
      logout();
    }
  }, 1000);
};

const sessionTimeRenewal = () => {
  sessionTime = 0;
};

function keyDownTextField() {
  if (isLoggedIn()) {
    sessionTimeRenewal();
  }
}

function keyDownEvent() {
  if (isLoggedIn()) {
    sessionTimeRenewal();
  }
}

function mouseMoveEvent() {
  if (isLoggedIn()) {
    sessionTimeRenewal();
  }
}

// Listen to user keypress and reset timer
document.addEventListener("keypress", keyDownTextField, false);

// Listen to user keypress and reset timer
document.addEventListener("keydown", keyDownEvent, false);

// Listen to user keypress and reset timer
document.addEventListener("mousemove", mouseMoveEvent, false);

window.addEventListener("offline", () => {
  myLog("App is offline");
  // reduxStore.dispatch(networkChanged(false));
});

window.addEventListener("online", () => {
  myLog("App is online");
  // reduxStore.dispatch(networkChanged(true));
});
