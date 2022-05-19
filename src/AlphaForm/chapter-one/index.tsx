import React from 'react';
import { Routes, Route} from 'react-router-dom';
import PageOne from './page-one';
import PageTwo from './page-two';
import Pages from './pages';

const ChapterOne: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Pages />} />
      <Route path='page-one' element={<PageOne />} />
      <Route path='page-two' element={<PageTwo />} />
    </Routes>
  );
};

export default ChapterOne;