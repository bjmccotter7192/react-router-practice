import { BrowserRouter, Routes } from 'react-router-dom';

interface FormRouterProps {
  children: JSX.Element[];
};

export default function TestRouter(props: FormRouterProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>{props.children}</Routes>
    </BrowserRouter>
  )
}
