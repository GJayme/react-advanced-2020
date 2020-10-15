import React, { useState } from 'react';
// short-circuit evaluation -> quando usamos || ou && no return de uma função
// ternary operator valorATestar ? se for verdade : senao

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // ||: se o primeiro for falso retorna o segundo
  const firstValue = text || 'hello world';

  // &&: se o primeiro for verdadeiro retorna o segundo -> funciona como se fosse um IF
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      <h1>{text || 'Gabriel Jayme'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
