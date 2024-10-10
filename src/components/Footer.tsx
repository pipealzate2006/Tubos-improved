import images from "./../assets/images.ts";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between border-1">
        <div className="flex items-center space-x-2 m-3">
          <img src={images.logo} alt="" className="w-14 h-auto"/>
          <h1 className="font-medium text-center sm:text-xl text-gray-700">
            © 2024  Tubs™
          </h1>
        </div>
        <ul className="flex items-center space-x-3 m-3 text-xl">
          <li>
            <div className="flex flex-col items-center text-gray-700">
              <h1 className="text-sm sm:text-base font-bold">GitHub</h1>
              <a href="">
                <i className="ri-github-fill text-3xl"></i>
              </a>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center text-gray-700">
              <h1 className="text-sm sm:text-base font-bold">Instagram</h1>
              <a href="">
                <i className="ri-instagram-fill text-3xl"></i>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
