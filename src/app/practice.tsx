import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../constants/theme';

// Mock quiz data - replace with actual quiz questions
const mockQuizQuestions = [
  {
    id: 1,
    question: 'What is React Native?',
    options: [
      'A mobile development framework',
      'A web development library',
      'A backend technology',
      'A database system'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'What does JSX stand for?',
    options: [
      'JavaScript XML',
      'Java Standard Extension',
      'JavaScript Extended',
      'JSON XML'
    ],
    correctAnswer: 0
  }
];

export default function PracticePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === mockQuizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < mockQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultTitle}>Quiz Completed!</Text>
        <Text style={styles.resultScore}>
          Your Score: {score} / {mockQuizQuestions.length}
        </Text>
        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = mockQuizQuestions[currentQuestionIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionCounter}>
        Question {currentQuestionIndex + 1} of {mockQuizQuestions.length}
      </Text>
      
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === index && styles.selectedOptionButton
            ]}
            onPress={() => handleAnswerSelect(index)}
          >
            <Text 
              style={[
                styles.optionText,
                selectedAnswer === index && styles.selectedOptionText
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton, 
          selectedAnswer === null && styles.submitButtonDisabled
        ]}
        onPress={handleSubmitAnswer}
        disabled={selectedAnswer === null}
      >
        <Text style={styles.submitButtonText}>
          {currentQuestionIndex < mockQuizQuestions.length - 1 
            ? 'Next Question' 
            : 'Finish Quiz'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionCounter: {
    fontSize: 16,
    color: theme.colorDark,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  questionContainer: {
    width: '100%',
    marginBottom: 24,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colorDark,
    marginBottom: 16,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: theme.colorPeach,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOptionButton: {
    borderColor: theme.colorDark,
  },
  optionText: {
    color: theme.colorDark,
    fontSize: 16,
    textAlign: 'center',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: theme.colorDark,
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: theme.colorWhite,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colorDark,
    marginBottom: 16,
  },
  resultScore: {
    fontSize: 20,
    color: theme.colorDark,
    marginBottom: 24,
  },
  restartButton: {
    backgroundColor: theme.colorPeach,
    padding: 16,
    borderRadius: 12,
  },
  restartButtonText: {
    color: theme.colorDark,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});