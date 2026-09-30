const FILTER_BUTTONS = [
  { label: "All", value: "all" },
  { label: "1", value: "01" },
  { label: "2", value: "02" },
  { label: "3", value: "03" },
  { label: "4", value: "04" },
  { label: "5", value: "05" },
  { label: "6", value: "06" },
];

export default function SearchFilter({ query, onQuery, activeFilter, onFilter }) {
  return (
    <section className="search-filter">
      <div className="search-wrapper">
        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search experiments..."
          className="search-input"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>
      <div className="filter-buttons">
        {FILTER_BUTTONS.map((btn) => (
          <button
            key={btn.value}
            onClick={() => onFilter(btn.value)}
            className={`filter-btn ${activeFilter === btn.value ? "filter-btn--active" : ""}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  );
}
