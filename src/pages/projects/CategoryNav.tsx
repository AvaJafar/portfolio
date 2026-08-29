import React, { useState } from 'react';
import { CATEGORIES, categorySlug } from './data';
import './CategoryNav.css';

const CategoryNav: React.FC = () => {
  const [active, setActive] = useState<string>('all');

  const goTop = () => {
    setActive('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCategory = (cat: string) => {
    setActive(cat);
    const el = document.getElementById(categorySlug(cat));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="category-nav-bar">
      <div className="category-nav-brand">
        AVA JAFARMADAR <span>Projects</span>
      </div>
      <nav className="category-nav-pills">
        <button className={`category-pill ${active === 'all' ? 'active' : ''}`} onClick={goTop}>
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${active === cat ? 'active' : ''}`}
            onClick={() => goToCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
