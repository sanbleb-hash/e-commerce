const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <footer className="bg-gray-400/10 w-screen min-h-[10vh] py-3">
      <div className="text-gray-600 my-auto mx-auto text-xl text-center  ">
        <span>san Bleb &copy;</span>
        <h5 className="inline-block pl-4">{today}</h5>
      </div>
    </footer>
  );
};

export default Footer;
