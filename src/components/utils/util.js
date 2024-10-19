export const util = {
    replace: (type, text) => {
        let target = !Number(type) ? "프론트엔드" : "퍼블리셔";

        return text?.replaceAll("프론트엔드", target);
    },
}