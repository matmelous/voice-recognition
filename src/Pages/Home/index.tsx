import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Button, Container } from '@material-ui/core';

const Home: React.FunctionComponent = () => {
  const { transcript } = useSpeechRecognition();
  function start(): void {
    SpeechRecognition.startListening();
  }
  return (
    <Container>
      <p>Transcript: {transcript}</p>
      <Button onClick={start}>start</Button>
    </Container>
  );
};

export default Home;
