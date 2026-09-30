import { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchFilter from "./components/SearchFilter";
import ExperimentCard from "./components/ExperimentCard";
import Footer from "./components/Footer";
import { experiments } from "./data/experiments";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return experiments.filter((exp) => {
      const numberMatch =
        activeFilter === "all" || exp.no.startsWith(activeFilter);
      const searchMatch =
        !q || exp.searchTitle.includes(q) || exp.no.toLowerCase().includes(q);
      return numberMatch && searchMatch;
    });
  }, [query, activeFilter]);

  // Unique experiment numbers (first digit groups)
  const expGroups = [...new Set(experiments.map((e) => e.no.replace(/[A-Z]/, "")))];

  return (
    <>
      <Header total={expGroups.length} programCount={experiments.length} />
      <main className="main">
        <Hero />
        <SearchFilter
          query={query}
          onQuery={setQuery}
          activeFilter={activeFilter}
          onFilter={setActiveFilter}
        />

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p className="empty-title">No matching experiment</p>
            <p className="empty-sub">Try a different experiment number or search term.</p>
          </div>
        ) : (
          <section className="experiments">
            {filtered.map((exp) => (
              <ExperimentCard
                key={exp.no}
                no={exp.no}
                title={exp.title}
                code={exp.code}
              />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
