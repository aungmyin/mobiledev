import React from 'react';

export const uriBase = process.env.NODE_ENV === 'development' 
   ? 'https://developmentapi.phoenix.xyz'
   : 'https://developmentapi.phoenix.xyz';

// export const uriBase = process.env.NODE_ENV === 'development' 
//    ? 'https://stagingapi.phoenix.xyz'
//    : 'https://stagingapi.phoenix.xyz';./