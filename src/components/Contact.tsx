import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const EMAIL = "debabratabanik02@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // nothing to do hopefully mailto link works
    }
  };

  return (
    <section id="contact" className="py-10 pb-20">
      <h2 className="relative mb-4 font-heading text-3xl font-medium tracking-wide">
        Contact
        <span className="absolute bottom-1.5 ml-1.5 w-7 h-0.5 bg-accent"></span>
      </h2>
      <p className="max-w-lg text-text-secondary tracking-wider">
        Feel free to get in touch. You can reach out about anything, feedback on
        my work, an opportunity, or just a chat.
      </p>
      <div className="mt-6 flex items-center gap-2">
        <a href={`mailto:${EMAIL}`} onClick={copy} className="cta text-xl">
          {EMAIL}
        </a>
        {copied && <FiCheck size={18} className="text-accent" />}
      </div>
    </section>
  );
};

export default Contact;
