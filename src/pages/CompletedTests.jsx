import { useContext } from "react";
import { BooksContext } from "../context/BooksProvider";
import BookCard from "../components/BookCard";

function CompletedTests() {
  const {completeTests} = useContext(BooksContext);

	return (
		<main className="px-4 min-h-[55vh]">
			<section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
				<h3 className="text-xl"> Your completed tests </h3>

				{completeTests?.length > 0 ? (
					<section
						className="grid"
						style={{
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						}}
					>
						{completeTests.map((book) => (
							<BookCard key={book.title} book={book} />
						))}
					</section>
				) : (
					<BookCard>
						{" "}
						<p className=" text-xs text-gray-500">
							{" "}
							You haven't completed any tests yet.{" "}
						</p>{" "}
					</BookCard>
				)}
			</section>
		</main>
	);
}

export default CompletedTests;
