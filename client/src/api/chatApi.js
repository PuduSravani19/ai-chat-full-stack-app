import React from "react";
const API_URL = "http://localhost:5000/api/chat";
export async function SendMessage(message){
    try{
    const res = await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({message})
    });
    if(!res.ok){
        throw new Error("failed to fetch response");
    }
    const data =await res.json();
    return data.reply;
}
catch (error){
    console.error("API error:",error);
    return "Error getting response";
}
}