import { motion } from "framer-motion";

const Heading = ({ title, subtitle, className = "", subtitleClass = "" }) => {
  return (
    <motion.div
      className={`w-full mb-5 xl:mb-8 text-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {title && (
        <h3 className="font-normal uppercase text-lg xl:text-xl tracking-widest mb-5 xl:mb-8">
          {title}
        </h3>
      )}

      {subtitle && (
        <h2
          className={`text-4xl text-center xl:text-5xl font-heading ${subtitleClass}`}
        >
          {subtitle}
        </h2>
      )}
    </motion.div>
  );
};

export default Heading;
