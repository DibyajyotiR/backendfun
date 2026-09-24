require("dotenv").config()
const express=require("express")
const app=express()
// const port=3000
const port=process.env.PORT
const githubData= {
  "login": "DibyajyotiR",
  "id": 215703432,
  "node_id": "U_kgDODNtfiA",
  "avatar_url": "https://avatars.githubusercontent.com/u/215703432?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DibyajyotiR",
  "html_url": "https://github.com/DibyajyotiR",
  "followers_url": "https://api.github.com/users/DibyajyotiR/followers",
  "following_url": "https://api.github.com/users/DibyajyotiR/following{/other_user}",
  "gists_url": "https://api.github.com/users/DibyajyotiR/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DibyajyotiR/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DibyajyotiR/subscriptions",
  "organizations_url": "https://api.github.com/users/DibyajyotiR/orgs",
  "repos_url": "https://api.github.com/users/DibyajyotiR/repos",
  "events_url": "https://api.github.com/users/DibyajyotiR/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DibyajyotiR/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Dibyajyoti Rout ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MERN Stack Intern ",
  "twitter_username": "DibyajyotiR1999",
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2025-06-10T14:49:56Z",
  "updated_at": "2026-09-24T15:43:41Z"
}

app.get("/",(req,res)=>{
    res.send("helooo dibuuu")
})

app.get("/login",(req,res)=>{
    res.send("login in appmodel")
})

app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})