
function Footer() {
  return (
    <footer className="w-full px-4 py-14">
      <section className="flex flex-col items-center">
        <h3 className=" text-xl mb-4"> By: Mb </h3>
        <ul>
          <li>
            <a className="flex items-center gap-2 py-2 text-sm hover:underline" href="https://www.linkedin.com/in/michael-brandon-ballen-daza-77915b130/" target="_blank">
              <box-icon type='logo' name='linkedin-square' color="white"></box-icon> Linkedin
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 py-2 text-sm hover:underline" href="https://github.com/MichaelBallen97" target="_blank">
              <box-icon name='github' type='logo' color="white" ></box-icon> Github 
            </a> 
          </li>
        </ul>
      </section>

      <section className=" mt-12 text-center text-xs text-gray-500"> <p> Copyright © 2023 Michael Ballen, All Rights Reserved </p> </section>
    </footer>
  )
}

export default Footer