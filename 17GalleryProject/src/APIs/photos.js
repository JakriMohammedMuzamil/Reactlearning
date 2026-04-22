import axios from "axios";

  export const fetchPhotos = async (page) => {
  const res = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=15`
  );
  return res.data;
};