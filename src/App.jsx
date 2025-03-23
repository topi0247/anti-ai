import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const accessCount = sessionStorage.getItem("accessCount");
    let totalCount = 1;
    if (accessCount) {
      totalCount = parseInt(accessCount) + 1;
    }
    sessionStorage.setItem("accessCount", totalCount);
    setCount(totalCount);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        AIなんぞ…使ってんじゃねええ！！！！！
      </h1>
      <p className="text-lg mb-2">あなたが生成AIサイトへアクセスした回数</p>
      <p className="text-5xl font-semibold text-blue-500">{count}</p>
    </main>
  );
}

export default App
