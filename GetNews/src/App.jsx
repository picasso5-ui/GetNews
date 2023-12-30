import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;

    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch");
        }

        setArticles(data.articles);
        setLoading(false);
        setRetryCount(0); // Reset retry count on successful fetch
      } catch (error) {
        console.error(error, "error occurred");

        if (retryCount < 3) {
          // Retry fetching data after a delay (exponential backoff)
          const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, delay);
        } else {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [category, searchQuery, retryCount]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        setCategory={setCategory}
      />
      <Hero
        category={category}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        articles={articles}
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default App;
