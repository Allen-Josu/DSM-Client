import { base_URL } from "./baseURL";
import { common_API } from "./commonAPI";

export const get_login_details = async (username, password) => {
    return await common_API("GET", `${base_URL}/users`, { username, password });
};

export const upload_new_student = async (reqBody) => {
    return await common_API("POST", `${base_URL}/students`, reqBody, "");
};

export const upload_new_training = async (reqBody) => {
    return await common_API("POST", `${base_URL}/training`, reqBody, "");
};

export const upload_new_fees = async (reqBody) => {
    return await common_API("POST", `${base_URL}/fees`, reqBody, "");
};

export const get_student_sid_details = async (sid) => {
    return await common_API("GET", `${base_URL}/students?sid=${sid}`, null, "");
};

export const get_student_admission_details = async (admission_no) => {
    return await common_API("GET", `${base_URL}/students/admission?admission_no=${admission_no}`, null, "");
};

export const get_all_student_details = async () => {
    return await common_API("GET", `${base_URL}/students/all`, null, "");
};

export const get_all_training_details = async () => {
    return await common_API("GET", `${base_URL}/training/all`, null, "");
};

export const get_largest_admission_no = async () => {
    return await common_API("GET", `${base_URL}/students/admission_no`, null, "");
};
