import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Bokks are here</h2>
      <div className="grid gap-8 my-14 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-1">
        {books.map((book) => (
          <Card>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                here are biggest enterprise technology acquisitions of 2022 so
                far, in reverse chronological order.
              </p>
            </p>
            <button className="bg-blue-600 font-semibold  text-white py-2 rounded-lg">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
