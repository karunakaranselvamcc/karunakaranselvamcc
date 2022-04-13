import { ACTION_TYPES } from "../types";

const initialState = {
  s3ImageBucketName: "",
  s3videoBucketName: "",
  profileImageLocation: "",
  s3postImageLocation: "",
  s3storyImageLocation: "",
  s3postVideoLocation: "",
  s3storyVideoLocation: "",
  s3thumbnailLocation: "",
  creatorDetails: {},
  imageData: [],
  orderTotalAmt: 0,
  uploadPercentage: 0,
  loginDetails: {},
  errorMsg: "",
  orderFinalAmount: 0,
};

export default function creatorReducers(state = initialState, action) {
  const {
    s3ImageBucketName,
    s3videoBucketName,
    profileImageLocation,
    s3postImageLocation,
    s3storyImageLocation,
    s3postVideoLocation,
    s3storyVideoLocation,
    s3thumbnailLocation,
  } = action;
  switch (action.type) {
    case ACTION_TYPES.SET_USER_CONFIG:
      return {
        ...state,
        s3ImageBucketName,
        s3videoBucketName,
        profileImageLocation,
        s3postImageLocation,
        s3storyImageLocation,
        s3postVideoLocation,
        s3storyVideoLocation,
        s3thumbnailLocation,
      };
    case ACTION_TYPES.SET_CREATOR_PROFILE:
      return {
        ...state,
        creatorDetails: action.payload,
      };
    case ACTION_TYPES.SET_ORDER_QTY:
      return {
        ...state,
        orderTotalAmt: action.payload.amount,
        orderFinalAmount: action.payload.total_amount,
      };
    case ACTION_TYPES.SET_LOGIN_DATA:
      return {
        ...state,
        loginDetails: action.payload,
      };
    case ACTION_TYPES.SET_SAVE_ORDER:
      return {
        ...state,
        imageData: action.payload,
      };
    case ACTION_TYPES.SET_ERRORS:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
}
