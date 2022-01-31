import { useEffect, useState } from "react";

export const Snoowrap = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // snoowrap api wrapper;
    // Docs: --> https://not-an-aardvark.github.io/snoowrap/index.html
    const snoowrap = require("snoowrap");
    // creating the snoowrap requester with OAuth credentials;
    const r = new snoowrap({
      userAgent: "MyApp",
      clientId: "7yLNriYHTw0Adsfbvjt4Og",
      clientSecret: "PR7Ky38uy_d5lGql1LFuf1PqGvPI1w",
      refreshToken: "514415401448-wVozi9T6GWDP6KMjoFDMUGtr2yt3pA"
    });
    r.getHot()
      .map((post) => post.title)
      .then(console.log);
    // fetch all "hot" posts;
    // docs: https://github.com/not-an-aardvark/snoowrap
    // write the async function to fetch the data;

    // const getRedditHot = async () => {
    //   if (error) {
    //     setError(true);
    //   } else {
    //     setError(false);
    //     let response = await r.getHot("wec");
    //     const posts = response;
    //     setPosts(posts);
    //     // console.log("getRedditHot -->", posts);
    //   }
    // };

    // getRedditHot();
    // console.log("getRedditHot end of useEffect -->", posts);
  }, []);
  return <h1>Hello world</h1>;
};
