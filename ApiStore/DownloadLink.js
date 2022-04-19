import React from 'react';

export const downloadFile = process.env.NODE_ENV === 'development' 
   ? 'https://development.phoenix.xyz'
   : 'https://development.phoenix.xyz';

// export const uriBase = process.env.NODE_ENV === 'development' 
//    ? 'https://stagingapi.phoenix.xyz'
//    : 'https://stagingapi.phoenix.xyz';