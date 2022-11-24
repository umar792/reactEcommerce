const FillterProductReducer = (state, action) => {
  switch (action.type) {
    case "IS_FILTER_LOADING":
      return {
        ...state,
        isFilterLoading: true,
      };
    case "GRID_VIEW":
      return {
        ...state,
        isFilterLoading: false,
        gridView: true,
      };
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        FilterProduct: [...action.payload],
        AllFilterProduct: [...action.payload],
      };

    case "SORTING_PRODUCT_VALUE":
      // let userSortingValue = document.getElementById("sort");
      // let sortvalue =
      //   userSortingValue.options[userSortingValue.selectedIndex].value;

      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCT":
      let newSortData;
      let temSortProduct = [...action.payload];

      if (state.sortingValue === "a-z") {
        newSortData = temSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (state.sortingValue === "z-a") {
        newSortData = temSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      if (state.sortingValue === "lowest") {
        const sortingProduct = (a, b) => {
          return a.price - b.price;
        };
        newSortData = temSortProduct.sort(sortingProduct);
      }
      if (state.sortingValue === "highest") {
        const sortingProduct = (a, b) => {
          return b.price - a.price;
        };
        newSortData = temSortProduct.sort(sortingProduct);
      }

      return {
        ...state,
        FilterProduct: newSortData,
      };

    case "UPDATE_SERACH_VALUE":
      const { name, vlaue } = action.payload;

      return {
        ...state,
        search: {
          ...state.search,
          [name]: vlaue,
        },
      };

    default:
      return state;
  }
};

export default FillterProductReducer;
