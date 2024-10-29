import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function BestSellerBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-book").then((res) =>
      res.json().then((data) => setBooks(data.slice(0, 20)))
    );
  }, []);
  return (
    <div>
      <BookCard books={books} headLine="Best Seller Books" />
    </div>
  );
}

export default BestSellerBook;
