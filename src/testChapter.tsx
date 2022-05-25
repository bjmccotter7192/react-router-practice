import { Routes, Route } from 'react-router-dom';

interface TestChapterProps {
  path: string,
  content: JSX.Element,
  children: JSX.Element[];
};

export function TestChapter(props: TestChapterProps): JSX.Element {
  return (
    <Routes>
      {/* <Route index element={<Pages />} />
      <Route path='page-one' element={<PageOne />} />
      <Route path='page-two' element={<PageTwo />} /> */}
      <Route path={props.path} element={props.content} />
      {props.children}
    </Routes>
  )
}

export default TestChapter;