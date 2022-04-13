import { API_ENDPOINT } from "../../config";
import Client from "../../utils/AxiosInstance";
import { myLog } from "../../utils/Utility";
import { ACTION_TYPES } from "./../types";
import store from "store";
import moment from "moment";
import toaster from "../../utils/Toast";
import { uploadToS3 } from "./uploadAction";
import { BASE_NAME } from "../../config/index";

/**
 * get user config
 */
export const getUserConfig = () => {
  return async (dispatch) => {
    try {
      const response = await Client.get(API_ENDPOINT.USER_CONFIG, {}, false);
      myLog(response, "---user config response----");
      if (response.code === 0) {
        myLog("success", "---user config response----");
        store.set("s3Config", response.data);
        dispatch({
          type: ACTION_TYPES.SET_USER_CONFIG,
          s3ImageBucketName: response.data.image_bucket,
          s3videoBucketName: response.data.video_bucket,
          s3postImageLocation: response.data.image_location.post_image,
          profileImageLocation: response.data.image_location.profile,
          s3storyImageLocation: response.data.image_location.story_image,
          s3postVideoLocation: response.data.video_location.post_video,
          s3storyVideoLocation: response.data.video_location.story_video,
          s3thumbnailLocation: response.data.image_location.thumb_nail,
        });
      }
    } catch (error) {
      myLog(error, "--user config error--");
    }
  };
};

/**
 * get creator profile details
 */
export const getCreatorProfile = (params, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING_UI });
      const response = await Client.post(
        API_ENDPOINT.CREATOR_PROFILE,
        params,
        false
      );
      myLog(response, "---creator profile response----");
      if (response.code === 0) {
        myLog("success", "---creator profile response----");
        store.set("creatorDetails", response.data);
        dispatch({
          type: ACTION_TYPES.SET_CREATOR_PROFILE,
          payload: response.data,
        });
        dispatch({
          type: ACTION_TYPES.RESET_ORDER_MEDIA_DETAILS,
          payload: [],
        });
      }
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
    } catch (error) {
      history.push("/notfound");
      dispatch({
        type: ACTION_TYPES.SET_ERRORS,
        payload: error.message,
      });
      myLog(error, "--creator profile error--");
    }
  };
};

/**
 * signup profile
 */
export const signupProfile = (params, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING_UI });
      const response = await Client.post(
        API_ENDPOINT.SIGNUP_PROFILE,
        params,
        false
      );
      myLog(response, "---signup response----");
      if (response.code === 0) {
        const orderDescription = store.get("orderDescription");
        myLog("success", "---signup response----");
        store.set("userSession", response.data);
        store.set("userRole", response.data.user.user_role[0]);
        store.set("sessionTill", moment().add(20, "m").toDate());
        // history.push("/" + urlName + "/order-description");
        // dispatch(saveOrder(orderDescription));
        toaster.success("Register success");
        const creatorName = store.get("creatorName");
        if (orderDescription) {
          dispatch(saveOrder(orderDescription));
        } else {
          history.push("/" + creatorName);
        }
      } else {
        toaster.error(response.message);
      }
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
    } catch (error) {
      toaster.error(error.message);
      myLog(error, "--signup error--");
    }
  };
};

/**
 * login profile
 */
export const loginProfile = (params, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING_UI });
      const response = await Client.post(
        API_ENDPOINT.LOGIN_PROFILE,
        params,
        false
      );
      myLog(response, "---login response----");
      if (response.code === 0) {
        const orderDescription = store.get("orderDescription");
        myLog("success", "---login response----");
        store.set("userSession", response.data);
        store.set("userRole", response.data.user.user_role[0]);
        store.set("sessionTill", moment().add(20, "m").toDate());
        // history.push("/" + urlName + "/order-description");
        dispatch({
          type: ACTION_TYPES.SET_LOGIN_DATA,
          payload: response.data,
        });
        toaster.success("Login success");
        const creatorName = store.get("creatorName");
        if (orderDescription) {
          dispatch(saveOrder(orderDescription));
        } else {
          history.push("/" + creatorName);
        }
      }
    } catch (error) {
      myLog(error.message, "--login error--");
      toaster.error(error.message);
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
    }
  };
};

export const getQtyPrice = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING_QTY });
      const response = await Client.post(API_ENDPOINT.QTY_AMT, params, false);
      if (response.code === 0) {
        dispatch({
          type: ACTION_TYPES.SET_ORDER_QTY,
          payload: response.data,
        });
      }
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.SET_ORDER_QTY,
        payload: {
          orderTotalAmt: 0,
          orderFinalAmount: 0,
        },
      });
      myLog(error, "--get quantity response--");
    }
  };
};

export const saveOrder = (params) => {
  return async (dispatch) => {
    try {
      const response = await Client.post(API_ENDPOINT.SAVE_ORDER, params, true);
      if (response.code === 0) {
        store.set("savedOrder", response.data);
        let order_id =
          response.data && response.data.order_id
            ? response.data.order_id
            : response.data && response.data._id
            ? response.data._id
            : null;
        console.log(order_id, "order_id");
        dispatch(
          orderPayment({
            order_id: order_id,
            redirect_success_url: `${
              window.location.origin
            }${BASE_NAME}${store.get("creatorName")}/payment-success`,
            redirect_cancel_url: `${
              window.location.origin
            }${BASE_NAME}${store.get("creatorName")}/payment-cancel`,
          })
        );
        dispatch({
          type: ACTION_TYPES.SET_SAVE_ORDER,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
      toaster.error("can't place your order right now. try again later");
      myLog(error, "--get save response--");
    }
  };
};

export const reinitiateOrderPayment = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING_UI });
      const orderData = store.get("savedOrder");
      const response = await Client.post(
        API_ENDPOINT.REINITIATE_ORDER_PAYMENT,
        { order_id: orderData._id },
        true
      );
      if (response.code === 0) {
        dispatch(
          orderPayment({
            order_id: response.data._id,
            redirect_success_url: `${window.location.origin}/${store.get(
              "creatorName"
            )}/payment-success`,
            redirect_cancel_url: `${window.location.origin}/${store.get(
              "creatorName"
            )}/payment-cancel`,
          })
        );
        dispatch({
          type: ACTION_TYPES.SET_SAVE_ORDER,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
      toaster.error("can't place your order right now. try again later");
      myLog(error, "--get save response--");
    }
  };
};

export const orderPayment = (params) => {
  return async (dispatch) => {
    try {
      const response = await Client.post(
        API_ENDPOINT.ORDER_PAYMENT,
        params,
        true
      );
      if (response.code === 0) {
        window.location.href = response.data.url;
      }
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
    } catch (error) {
      toaster.error("can't place your order right now. try again later");
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
      dispatch({
        type: ACTION_TYPES.SET_ERRORS,
        payload: error.message,
      });
      myLog(error, "--get save response--");
    }
  };
};

export const getImageToken = (params, image, Creator) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.UPLOADING_IMAGE });
      const response = await Client.post(
        API_ENDPOINT.IMAGE_TOKEN,
        params,
        false
      );
      uploadToS3(response.data, image, dispatch, Creator);
    } catch (error) {
      dispatch({ type: ACTION_TYPES.CLEAR_ERRORS });
      toaster.success("error uploading image. please try again");
      myLog(error, "--get image upload token response--");
    }
  };
};

export const removeUploadedImage = (name) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_UPLOADED_IMAGE,
      payload: name,
    });
  };
};
