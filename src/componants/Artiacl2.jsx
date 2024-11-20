
const articles = [
  { title: "The Health Benefits of Dark Chocolate", link: "#" },
  { title: "Top 10 Chocolate Desserts to Try", link: "#" },
  { title: "How Chocolate is Made from Bean to Bar", link: "#" },
  { title: "The Science Behind Chocolate and Mood Improvement", link: "#" },
  { title: "Exploring the World’s Most Expensive Chocolates", link: "#" },
  { title: "Can Chocolate Be Part of a Healthy Diet?", link: "#" },
  { title: "The History of Chocolate: From Ancient Times to Now", link: "#" },
  { title: "White Chocolate vs Dark Chocolate: What’s the Difference?", link: "#" },
  { title: "DIY Chocolate Recipes for Home", link: "#" },
  { title: "How to Choose the Best Quality Chocolate", link: "#" }
];

const ArticlesSection = () => {
  return (
    <div className="flex flex-col items-start mt-10 space-y-4 p-2 ">
      <h2 className="text-xl font-bold mb-4">Chocolate Articles</h2>
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.link}
          target="_blank" // فتح الرابط في تبويب جديد
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {article.title}
        </a>
      ))}
    </div>
  );
};

export default ArticlesSection;
