import Container, { TypeArticle } from "../components/Container";
import Header from "../components/Header"
import { articleService } from "../services/ArticleService";
import { useState } from "react";

export default function Home(){ 
    return (
        <>
            <Header/>
            <Container/>
        </>
    )
}