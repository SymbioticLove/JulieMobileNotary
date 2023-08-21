import React, { useState, useRef } from 'react';
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
  const accordionRef = useRef(null);

  const handleAccordionClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-background">
      <h1>{title}</h1>
      <div className="faq-outer-container" id="faq">
        <div className="faq-container">
          {faqEntries.map((entry, index) => (
            <div
              key={entry.question}
              className={`faq-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div
                className="faq-question"
                onClick={() => handleAccordionClick(index)}
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
              </div>
              <div
                className="faq-answer"
                ref={accordionRef}
                style={{
                  maxHeight: activeIndex === index ? '225px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.6s ease-in-out',
                }}
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
