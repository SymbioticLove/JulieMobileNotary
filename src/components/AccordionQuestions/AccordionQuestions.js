import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './AccordionQuestions.css';

const AccordionQuestions = () => {
  const {
    title,
    what,
    whatAnswer,
    noid,
    noidAnswer,
    length,
    lengthAnswer,
    late,
    lateAnswer,
    re,
    reAnswer,
  } = useSelector(state => state.about.faq);

  const { disclaimer } = useSelector(state => state.about.disclaimer);

  const faqEntries = [
    { question: what, answer: whatAnswer },
    { question: noid, answer: noidAnswer },
    { question: length, answer: lengthAnswer },
    { question: late, answer: lateAnswer },
    { question: re, answer: reAnswer },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState('225px'); // Default height
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMaxHeight('400px');
      } else {
        setMaxHeight('225px');
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize once on component mount to set initial maxHeight
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAccordionClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-background">
      {/* Display FAQ title */}
      <h1>{title}</h1>
      <div className="faq-outer-container" id="faq">
        <div className="faq-container">
          {/* Map and display FAQ entries */}
          {faqEntries.map((entry, index) => (
            <div
              key={entry.question}
              className={`faq-item ${index === activeIndex ? 'active' : ''}`}
              role="region" // Define the region role for each accordion item
              aria-expanded={index === activeIndex} // Indicate the expanded state
            >
              <button // Use a button for each accordion item for better accessibility
                className="faq-question"
                onClick={() => handleAccordionClick(index)}
                aria-controls={`answer-${index}`} // Connect button to the answer
              >
                {entry.question}
                <span
                  className="caret-icon"
                  style={{
                    transform: `rotate(${
                      index === activeIndex ? '180deg' : '0deg'
                    })`,
                    transition: 'transform 0.4s ease-in-out',
                    display: 'inline-block',
                    marginLeft: '8px',
                  }}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </button>
              <div
                id={`answer-${index}`} // Unique ID for each answer for accessibility
                className="faq-answer"
                ref={accordionRef}
                style={{
                  maxHeight: activeIndex === index ? maxHeight : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.6s ease-in-out',
                }}
                aria-hidden={activeIndex !== index} // Hide non-active answers from screen readers
              >
                <p>{entry.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="disclaimer">{disclaimer}</p>
    </div>
  );
};

export default AccordionQuestions;
