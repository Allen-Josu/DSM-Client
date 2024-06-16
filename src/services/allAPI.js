import { base_URL } from "./baseURL";
import { common_API } from "./commonAPI";

export const upload_new_student = async (reqBody) => {
    return await common_API("POST", `${base_URL}/students`, reqBody, "");
};

export const upload_new_training = async (reqBody) => {
    return await common_API("POST", `${base_URL}/training`, reqBody, "");
};

export const upload_new_fees = async (reqBody) => {
    return await common_API("POST", `${base_URL}/fees`, reqBody, "");
};
