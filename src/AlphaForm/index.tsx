import { Routes, Route } from 'react-router-dom';
import IntroductionPage from '../shared/IntroductionPage';
import ChapterOne from './chapter-one';
import ChapterTwo from './chapter-two';

export default function AlphaFormApp(): JSX.Element {
  return (
    <Routes>
      <Route index element={<IntroductionPage path='chapter-one' />} />
      <Route path='chapter-one/*' element={<ChapterOne />} />
      <Route path='chapter-two/*' element={<ChapterTwo />} />
    </Routes>
  );
};