import { Route } from 'react-router-dom';

interface TestPageProps {
  path: string;
  children: JSX.Element
};

export function TestPage(props: TestPageProps): JSX.Element {
  return (
    <Route path={props.path} element={props.children} />
  )
}

export default TestPage;