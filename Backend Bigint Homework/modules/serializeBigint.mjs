export default function serialize(data){
    const serialize = JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() + "n" : value);
    return serialize;
};