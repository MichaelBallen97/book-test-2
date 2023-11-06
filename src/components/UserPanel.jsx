import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { BooksContext } from "../context/BooksProvider"
import BookCard from "./BookCard";

function UserPanel() {
  const {user} = useContext(UserContext)
  const {books, completeTests, pendingTests, bestTest} = useContext(BooksContext);

  return (
    <section className=" flex flex-col gap-4 bg-gray-950 p-4">
      <h2 className="text-2xl mb-3"> Welcome, <span className=" font-bold">{user.username}</span></h2>

      <section className="rounded-md shadow-lg shadow-slate-900 p-4">
        <h3> Your best score </h3>

        { bestTest?.isComplete ? (
          <BookCard book={bestTest} />
        ) : (
          <BookCard> <p className=" text-xs text-gray-500"> You haven't completed any tests yet. </p> </BookCard>
        ) }
      </section>

      <section className=" flex flex-col gap-8">
        <section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
          <h3 className="text-xl"> All books </h3>

          <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {books.map(book => <BookCard key={book.title} book={book}  /> )}
          </section>
        </section>

        <section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
          <h3 className="w-full text-xl"> Your pending tests </h3>

          { pendingTests?.length > 0 ? (
            <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
              {pendingTests.map(book => <BookCard key={book.title} book={book} /> )}
            </section>
          ) : (
            <BookCard> <p className=" text-xs text-gray-500"> You don't have any pending tests </p> </BookCard>
          ) }
        </section>

        <section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
          <h3 className="text-xl"> Your completed tests </h3>

          { completeTests?.length > 0 ? (
            <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
              {completeTests.map(book => <BookCard key={book.title} book={book} /> )}
            </section>
          ) : (
            <BookCard> <p className=" text-xs text-gray-500"> You haven't completed any tests yet. </p> </BookCard>
          ) }
        </section>
      </section>

    </section>
  )
}

export default UserPanel