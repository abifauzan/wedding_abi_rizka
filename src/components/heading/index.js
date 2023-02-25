const Heading = ({ title, subtitle, className = "", subtitleClass = "" }) => {
  return (
    <div className={`w-full mb-5 xl:mb-8 text-center ${className}`}>
      {title && (
        <h3 className="font-Oswald font-normal uppercase text-lg xl:text-xl tracking-widest mb-5 xl:mb-8">
          {title}
        </h3>
      )}

      {subtitle && (
        <h2
          className={`text-4xl text-center xl:text-5xl font-Petit-Formal-Script ${subtitleClass}`}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default Heading;
