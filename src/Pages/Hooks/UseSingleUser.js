import React, { useEffect, useState } from 'react'

const UseSingleUser = (userApi) => {
  const [users, setUser] = useState({})
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(userApi, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setUser(json);
      setLoading(false);
    } catch (err) {
      setError(err);
    }

  };

  useEffect(() => {
    fetchData();
  }, [userApi]);

  return { users, userRefetch: fetchData, setValue: setUser, userLoading: loading };
}

export default UseSingleUser