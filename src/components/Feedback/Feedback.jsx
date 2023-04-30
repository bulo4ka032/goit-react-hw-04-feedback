import React, { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from '../Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage.jsx';
import { FeedbackForm, FbWrapper } from './Feedback.styled.jsx';
import { Section } from 'components/Section/Section.jsx';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    switch (evt) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const total = good + bad + neutral;
  const positivePercentage = +((good / total) * 100).toFixed(1);

  return (
    <FeedbackForm>
      <FbWrapper>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </FbWrapper>
      <FbWrapper>
        <Section title="Statistics" />
        {!total ? (
          <NotificationMessage message="There is no feedback yet" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </FbWrapper>
    </FeedbackForm>
  );
};
// }
