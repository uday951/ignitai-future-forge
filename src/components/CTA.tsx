const CTA = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-500 rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's build something great together. Get in touch for a free consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:ignivance@zohoemail.in"
              className="bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100"
            >
              Get a Quote
            </a>
            <a 
              href="tel:+917989442841"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 border-2 border-white"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
