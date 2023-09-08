'use client';
import Dropdown2 from "./Dropdown2";
import { articleService } from "../services/ArticleService";
import { useState } from "react";
import { TypeArticle } from "./Container";
import useArticleStore from "../store/articles";


const sampleArticle = {
    article_name :  "Unleashing the Power of the Mind: The Psychology of Success",
    content :  "Have you ever wondered what sets successful individuals apart from the rest? Is it their intelligence, talent, or luck? While these factors certainly play a role, the underlying key to success lies in the power of the mind. Welcome to the fascinating world of psychology, where understanding human behavior and harnessing the power of the mind can unlock unlimited potential. In this article, we will delve into the psychology of success and explore how our thoughts, beliefs, and motivations shape our achievements. Get ready to discover the secrets to unleashing your full potential and achieving greatness!",
    created_date : "2023-08-10T08:27:39+0000",
    topic : "Psychology"
}

const Header = () => {
  const [userChoice, setUserChoice] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const addArticle = useArticleStore(s => s.addArticle)

  async function generate_article(){
        setLoading(true)
        const res: {article: TypeArticle} = await articleService.generate_article(userChoice)

        console.log(res)

        if(res.article !== null) {
          addArticle(res.article)  
        }

        setLoading(false)
    }

  return (
    <header className="sticky top-0 w-full bg-slate-50 border rounded z-10">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <a
            className="text-gray-900 text-base no-underline hover:no-underline font-extrabold "
            href="#"
          >
            app name (poka netu)
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="signin" data-dropdown
              >
                Select topics
              </a>
            </li> */}
            <li>
              <Dropdown2 userChoice={userChoice} setUserChoice={setUserChoice}></Dropdown2>
            </li>
            {/* <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li> */}
            {
              !loading ? (

            <li className="mr-3">
              <button
                className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                onClick={() => generate_article()}
              >
                Generate new article
              </button>
            </li>
              ) : (

            <li className="mr-3">
              <button
                className="inline-block py-2 px-4 text-gray-500 font-bold no-underline"
              >
                Loading...
              </button>
            </li>
              )
            }
          </ul>
          {userChoice}
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
