import React from 'react';
import { createRoot } from 'react-dom';

import Greet from './.components/Greet';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render( <Greet /> );
