import { Link } from "react-router-dom"

function WelcomeMessage() {
  return (
    <section className="rounded-md shadow-md shadow-slate-900 p-5 border-4 border-solid border-slate-900">
      <article className="text-center">
        <h2 className=" text-5xl mb-8"> Welcome to Book test </h2>

        <p> The objective of this app is to create quizzes about different books and evaluate your knowledge about literature </p>

        <p className="mt-3 mb-6 text-sm"> Please Sign Up for start and save your quizzes or if you have a account you can Sign in. </p>

        <Link to="/login" className="text-black bg-white p-2 rounded hover:bg-slate-300"> Sign Up / Sign in </Link>
      </article>
    </section>
  )
}

export default WelcomeMessage