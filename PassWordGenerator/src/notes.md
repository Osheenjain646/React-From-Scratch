useCallback is a React Hook that lets you cache a function definition between re-renders.

const cachedFn = useCallback(fn, dependencies)

React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically.

Reference 
useCallback(fn, dependencies) 
Call useCallback at the top level of your component to cache a function definition between re-renders:

import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);


