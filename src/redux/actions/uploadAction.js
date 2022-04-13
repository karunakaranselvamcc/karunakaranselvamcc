import AWS from "aws-sdk";
// import store from "store";
import { ACTION_TYPES } from "./../types";
import toaster from "../../utils/Toast";
import { getUserConfig } from "./creatorAction";
// const imageConfig = store.get("s3Config");

export const uploadToS3 = async (data, image, dispatch, Creator) => {
  if (!Creator || !Creator.s3ImageBucketName || !Creator.s3videoBucketName) {
    toaster.error("error uploading. please try again");
    dispatch(getUserConfig());
    dispatch({
      type: ACTION_TYPES.SET_IMAGE_UPLOAD_FAILED,
    });
    return;
  }
  const imageArr = image.target.files;
  for (let i = 0; i < data.length; i++) {
    const dataElement = data[i];
    const imageElement = imageArr[i];
    const folder =
      imageElement.type.split("/")[0] === "video"
        ? Creator.s3postVideoLocation
        : Creator.s3postImageLocation;
    const bucket =
      imageElement.type.split("/")[0] === "video"
        ? Creator.s3videoBucketName
        : Creator.s3ImageBucketName;

    AWS.config.update({
      secretAccessKey: dataElement.S3.SecretAccessKey,
      accessKeyId: dataElement.S3.AccessKeyId,
      sessionToken: dataElement.S3.SessionToken,
    });
    let s3obj = new AWS.S3({
      params: {
        Bucket: bucket,
        Key: folder + dataElement.image_name,
      },
      options: {
        queueSize: 1,
      },
      httpOptions: {
        timeout: 0,
      },
      apiVersion: "2006-03-01",
      maxRetries: 10,
      region: "us-west-2",
      signatureVersion: "v4",
    });

    await s3obj
      .upload({
        Body: imageElement,
      })
      .on("httpUploadProgress", function (evt) {
        let percentComplete = (
          (evt.loaded / evt.total).toFixed(2) * 100
        ).toFixed(0);
        dispatch({
          type: ACTION_TYPES.SET_IMAGE_UPLOAD_PERCENTAGE,
          payload: {
            percentComplete,
            whichImage: i + 1,
            totalImageCount: image.length,
          },
        });
      })
      .send(function (err, dataSuccess) {
        if (err) {
          toaster.error("failed uploading an image. please try again");
          dispatch({
            type: ACTION_TYPES.SET_IMAGE_UPLOAD_FAILED,
          });
        } else {
          dispatch({
            type: ACTION_TYPES.SET_IMAGE_UPLOAD_SUCCESS,
            payload: {
              imageName: {
                name: dataElement.image_name,
                type: imageElement.name.split(".").pop(),
                is_video: imageElement.type.split("/")[0] === "video",
              },
            },
          });
          image.target.value = null;
        }
      });
  }
};
