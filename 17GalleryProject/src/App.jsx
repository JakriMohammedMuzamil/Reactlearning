import React, { useEffect, useState } from "react";

import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";
import { fetchPhotos } from "./APIs/photos";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      setLoading(true)
      const data = await fetchPhotos(index);
      setUserData(data);
    } catch(error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="h-screen bg-black pb-4 flex flex-col gap-0">
      <Gallery userData={userData} loading={loading} />
      <Pagination index={index} setIndex={setIndex}/>
    </div>
  );
};

export default App;
