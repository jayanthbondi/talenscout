import SearchBar from "../components/search/SearchBar";
// import FilterPanel from "../components/search/FilterPanel";
import SearchResults from "../components/search/SearchResults";

const SearchPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SearchBar />
      {/* <FilterPanel /> */}
      <SearchResults />
    </div>
  );
};

export default SearchPage;
