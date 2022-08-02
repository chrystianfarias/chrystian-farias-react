import axios from "axios";
export default axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: "token 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"
    }
});