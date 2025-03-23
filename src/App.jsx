import { useEffect, useState } from "react"
import Logo from "./ANTI.png"

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
    <main className="flex flex-col items-center justify-start min-h-screen bg-white text-gray-800">
      <h1><img src={Logo} alt="logo" width={500} className="w-100 object-cover" /></h1>
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        AIなんぞ…使ってんじゃねええ！！！！！
      </h2>
      <p className="text-lg mb-2">あなたが生成AIサイトへアクセスした回数</p>
      <p className="text-5xl font-semibold text-blue-500">{count}</p>
    </main>
  );
}

export default App
