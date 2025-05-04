import React, { useRef, useEffect, useState } from 'react';

const VoiceSearch = ({ onVoiceResult }) => {
  const recognitionRef = useRef(null);
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition. Try Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setTranscript(voiceText);

      // Optionally confirm with user before searching
      const confirmSearch = window.confirm(`Search for "${voiceText}"?`);
      if (confirmSearch) {
        onVoiceResult(voiceText);
      }
    };

    recognition.onerror = (event) => {
      console.error('Recognition error:', event.error);
      alert('Voice recognition error: ' + event.error);
    };

    recognitionRef.current = recognition;
  }, [onVoiceResult]);

  const handleManualStart = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Failed to start recognition:', err);
        alert('Could not start speech recognition. Try again.');
      }
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button
        onClick={handleManualStart}
        style={{
          backgroundColor: listening ? '#d93025' : '#34a853',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {listening ? '🎙️ Listening...' : '🎤 Start Voice Search'}
      </button>
      {transcript && (
        <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
          You said: "{transcript}"
        </div>
      )}
    </div>
  );
};

export default VoiceSearch;
