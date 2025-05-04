import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const getSuggestion = (text) => {
    if (!text) {
      setSuggestion('');
      return;
    }

    const templates = [
      `Hidden gems about ${text}`,
      `What you didn't know about ${text}`,
      `Surprising facts about ${text}`,
      `2025 trends in ${text}`,
      `Why ${text} is blowing up right now`,
      `What locals say about ${text}`,
      `The dark side of ${text}`,
      `Top debates around ${text}`,
      `If you're into ${text}, try this...`,
      `Mind-expanding takes on ${text}`,
    ];

    const randomIndex = Math.floor(Math.random() * templates.length);
    const suggestionText = templates[randomIndex];
    setSuggestion(suggestionText);
    speakText(suggestionText);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    getSuggestion(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search Google or type a URL"
          value={query}
          onChange={handleChange}
          style={{
            padding: '10px',
            width: '400px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px 0 0 4px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#4285f4',
            color: 'white',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
      {suggestion && (
        <div style={{ fontStyle: 'italic', color: '#555', marginTop: '8px' }}>
          💡 {suggestion}
        </div>
      )}
    </div>
  );
};

export default SearchBar;