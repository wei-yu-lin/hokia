import axios from "axios";
import { ref, reactive } from "vue";

axios.defaults.headers.common = {
  Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
};
// axios.defaults.baseURL = import.meta.env.VITE_API_PATH;

const getUrl = async (url) => {
  return new Promise((resovle, reject) =>
    axios.get(url).then(resovle).catch(reject)
  );
};

export const useData = () => {
  const reponseList = reactive([]);
  const root = reactive([]);
  const fetchTestData = async () => {
    reponseList.push(
      ...(await getUrl("https://attend-srv.hokia.com.tw/test/list")).data.data
    );

    reponseList.forEach((parentEl) => {
      const child = reponseList.filter((childEl) => parentEl.prog_id === childEl.parent_prog_id);
      if (child.length > 0) {
        parentEl.child = child;
      }
    });

    root.push(...reponseList.filter((el) => el.parent_prog_id == ""));

  };
  
  fetchTestData();
  return {
    root,
  };
};
