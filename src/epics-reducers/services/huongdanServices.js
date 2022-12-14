import axios from "axios";
import { API } from "../../constants/api";
import { COMMON_APP } from "../../constants/common";

export function getHuongdan(page, limit, params) {
    return axios
        .get(
            `${COMMON_APP.HOST_API}${API.HUONGDAN_QUERY.format(
                page,
                limit,
                ""
            )}`,
            { params }
        )
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
        })
        .catch((error) => {
            return null;
        });
}

export function getHuongdanTrangchu() {
    const params = { trangchu: true };
    return axios
        .get(`${COMMON_APP.HOST_API}${API.HUONGDAN_QUERY}`, {
            params,
        })
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
        })
        .catch((error) => {
            return null;
        });
}

export function getHuongDanDetai(id) {
    return axios
        .get(`${COMMON_APP.HOST_API}${API.HUONGDAN_ID.format(id)}`)
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
        })
        .catch((error) => {
            return null;
        });
}
