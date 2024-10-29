import React from "react";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function OtherBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-book").then((res) =>
      res.json().then((data) => setBooks(data.slice(5, 20)))
    );
  }, []);
  return (
    <div>
      <BookCard books={books} headLine="Other Books" />
    </div>
  );
}

export default OtherBooks;
