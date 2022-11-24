import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../Reducer/FillterProductReducer";

export const FilterContext = createContext();

const initialState = {
  FilterProduct: [],
  AllFilterProduct: [],
  isFilterLoading: false,
  gridView: false,
  sortingValue: "lowest",
  search: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    let userValueSelect = event.target.value;
    dispatch({ type: "SORTING_PRODUCT_VALUE", payload: userValueSelect });
  };

  // =============== SerachData

  const SerachData = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_SERACH_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCT", payload: products });
  }, [state.sortingValue, state.search]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, SerachData }}>
      {children}
    </FilterContext.Provider>
  );
};

export const UseFiltercontext = () => {
  return useContext(FilterContext);
};
