import React from "react";
import { useContext } from "react";
import BookCard from "../components/BookCard";
import { BooksContext } from "../context/BooksProvider";

function PendingTests() {
  const {pendingTests} = useContext(BooksContext);

	return (
		<main className="px-4 min-h-[55vh]">
			<section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
				<h3 className="w-full text-xl"> Your pending tests </h3>

				{pendingTests?.length > 0 ? (
					<section
						className="grid"
						style={{
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						}}
					>
						{pendingTests.map((book) => (
							<BookCard key={book.title} book={book} />
						))}
					</section>
				) : (
					<BookCard>
						{" "}
						<p className=" text-xs text-gray-500">
							{" "}
							You don't have any pending tests{" "}
						</p>{" "}
					</BookCard>
				)}
			</section>
		</main>
	);
}

export default PendingTests;
