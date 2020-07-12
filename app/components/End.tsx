/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

export default function End(): JSX.Element{
  return (
    <div>
      <h1>This is the end.</h1>
      <Link to={routes.HOME}>Back</Link>
    </div>
  );
}
