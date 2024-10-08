import CandidateList from "./CandidateList";

export default function SearchResults() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div
        style={{ height: "56px", borderBottom: "1px solid rgb(228, 228, 231)" }}
      ></div>
      <CandidateList />
    </div>
  );
}
