// components/Contact/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8">
          Contact
        </h2>
        <p className="text-lg text-gray-700">
          Feel free to reach out to me via the following channels:
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="tel:+1234567890"
            className="text-blue-600 hover:text-blue-800"
          >
            Phone
          </a>
          <a
            href="mailto:abc@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/uzmaazam"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/uzmaazam"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
