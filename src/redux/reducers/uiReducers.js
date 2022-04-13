import { ACTION_TYPES } from "../types";

const initialState = {
  loading: false,
  loadingQty: false,
  uploadingPercentage: 0,
  isUploading: false,
  isUploaded: false,
  whichImage: 0,
  imageName: [],
  errors: null,
};

export default function uiReducers(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.LOADING_QTY:
      return {
        ...state,
        loadingQty: true,
      };
    case ACTION_TYPES.UPLOADING_IMAGE:
      return {
        ...state,
        isUploading: true,
      };
    case ACTION_TYPES.REMOVE_UPLOADED_IMAGE:
      return {
        ...state,
        imageName: state.imageName.filter(
          (image) => image.name !== action.payload
        ),
      };
    case ACTION_TYPES.SET_IMAGE_UPLOAD_PERCENTAGE:
      return {
        ...state,
        uploadingPercentage: action.payload.percentComplete,
        whichImage: action.payload.whichImage,
        totalImageCount: action.payload.totalImageCount,
        isUploaded: false,
        isUploading: true,
      };
    case ACTION_TYPES.SET_IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploaded: true,
        isUploading: !true,
        imageName: [...state.imageName, action.payload.imageName],
      };
    case ACTION_TYPES.RESET_ORDER_MEDIA_DETAILS:
      return { ...state, imageName: action.payload };
    case ACTION_TYPES.SET_IMAGE_UPLOAD_FAILED:
      return {
        ...state,
        imageUploadError: true,
        isUploaded: true,
        isUploading: false,
      };
    case ACTION_TYPES.SET_ERRORS:
      return {
        ...state,
        loading: false,
        loadingQty: false,
        uploadingPercentage: 0,
        errors: action.payload,
        isUploading: false,
      };
    case ACTION_TYPES.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        loadingQty: false,
        uploadingPercentage: 0,
        errors: null,
        isUploading: false,
      };
    default:
      return state;
  }
}
