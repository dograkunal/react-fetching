import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        }
        throw Response;
      })
      .then((Response) => {
        setData(...data, Response.results[0]);
        console.log(Response.results[0]);
      })
      .catch((error) => {
        console.error('Error in fetching', error);
        setError(error);
      });
  }, []);

  return (
    <div className="card">
      {data.gender} <br />
      {data.email} <br />
      {data.name && data.name.title} {data.name && data.name.first}{' '}
      {data.name && data.name.last}
    </div>
  );
}
