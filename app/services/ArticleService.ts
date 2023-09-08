import axios from "axios";
import { useState } from "react";

class ArticleService{
    async generate_article(userChoice: string) {
    const baseUrl = 'http://localhost:8000';
    const user = localStorage.getItem('user');

    if (!user) {
        console.error("User not logged in");
        return null; // Return early if user is not logged in
    }

    const userObj = JSON.parse(user);
    if (!userObj.access_token) {
        console.error("Access token not found");
        return null; // Return early if access token is missing
    }

    const access_token = userObj.access_token;

    const headers = {
        "Authorization": `Bearer ${access_token}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(`${baseUrl}/articles/generate_article`, {
            topics: userChoice
        }, { headers });

        const result = response.data;
        console.log(result)
        return result
    } catch (error) {
        console.error("Error generating article:", error);
        return null; // Handle the error and return an appropriate value
    }
}

}

export const articleService = new ArticleService()