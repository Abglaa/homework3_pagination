import axios from "axios";

export const JsonPlaceholderAPI = axios.create({
    baseURL: "https://dummyjson.com/posts/",
})

// const respGet = await JsonPlaceholderAPI.get("/posts?_limit=5")

// const respCreate = await JsonPlaceholderAPI.post("/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 4
// })

// const respUpdate = await JsonPlaceholderAPI.put("/posts/1", {
//     title: "kl;kgf gfd gfdgdfd",
// })

// const respDelete = await JsonPlaceholderAPI.delete("/posts/8")