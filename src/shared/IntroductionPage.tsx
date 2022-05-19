import React from 'react';
import { Link } from 'react-router-dom';

interface IntroProps {
  path: string;
};

export default function IntroductionPage(props: IntroProps): JSX.Element {
  return (
    <div>
      <h1>Introduction Page Shared</h1>

      <Link to={props.path}>Let's get started</Link>
    </div>
  )
}