const Flash = ({ bg = "bg-dark" }) => {
  const updatedClassName = `opacity-0 animate-flash absolute top-0 left-0 h-[100vh] w-[100vw] -z-10 ${bg}`;
  return <div className={updatedClassName}></div>;
};

export default Flash;
