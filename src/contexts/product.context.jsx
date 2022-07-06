// import { useState, createContext, useEffect } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// export const CategoryContext = createContext({
//   categoriesMap: {},
// });

// export const CategoryProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const getCategoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(getCategoryMap);
//     };
//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoryContext.Provider value={value}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };
