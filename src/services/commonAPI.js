import axios from "axios";

export const common_API = async (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        header: reqHeader
            ? reqHeader
            : {
                  "Content-Type": "application/json",
              },
    };
    return await axios(reqConfig)
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            return error;
        });
};
