import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Make sure to import your Firebase config

const NewsList = () => {
  const [news, setNews] = useState([]); // Store fetched news data
  const [loading, setLoading] = useState(true); // Handle loading state

  // Fetch data when component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const newsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(newsList); // Set the news list from Firestore
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p>{item.date}</p> {/* You can also display the date */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
