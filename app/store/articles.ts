import { create } from 'zustand'
import { TypeArticle } from '../components/Container'

interface ArticleStoreType {
    article: TypeArticle[]
    addArticle: (article: TypeArticle) => void
}

const sampleArticle = {
    article_name :  "Unleashing the Power of the Mind: The Psychology of Success",
    content :  "Have you ever wondered what sets successful individuals apart from the rest? Is it their intelligence, talent, or luck? While these factors certainly play a role, the underlying key to success lies in the power of the mind. Welcome to the fascinating world of psychology, where understanding human behavior and harnessing the power of the mind can unlock unlimited potential. In this article, we will delve into the psychology of success and explore how our thoughts, beliefs, and motivations shape our achievements. Get ready to discover the secrets to unleashing your full potential and achieving greatness!",
    created_date : "2023-08-10T08:27:39+0000",
    topic : "Psychology"
}

const useArticleStore = create<ArticleStoreType>((set) => ({
  article: [],
  addArticle: (newArticle) => set((state) => (
    { 
        // article: [newArticle, ...state.article ] 

        article: [newArticle ] 
    })),
}))

export default useArticleStore;