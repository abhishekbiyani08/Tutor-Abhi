import './Conditions.css';
import image from './image.png';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="title-animation max-w-[900px] mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8 uppercase">Terms and Conditions</h1>

        <div className="w-[600px] mx-auto mb-8">
          <img
            src={image}
            alt="Terms and Conditions"
            className="h-auto w-10"
            style={{ width: '200%' }}
          />
        </div>

        <div className="text-xl leading-relaxed space-y-6">
          <p className="text-lg mb-12">
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our services. By accessing this site, you accept these terms in full.
          </p>

          <h2 className="text-3xl font-semibold text-white">Use of Services</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Our services are intended for lawful purposes only.</li>
            <li>You agree not to use our services in a manner that violates any laws or infringes on the rights of others.</li>
            <li>We reserve the right to terminate access to our services if you breach these terms.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white pt-8">Intellectual Property</h2>
          <p className="text-lg">
            All content, including text, graphics, logos, and images, is our intellectual property. You may not use, copy, or distribute any content without our prior written consent.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Limitation of Liability</h2>
          <p className="text-lg">
            We are not liable for any direct or indirect damages arising from the use of our website or services. Your use of the website is at your own risk.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Changes to Terms</h2>
          <p className="text-lg">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon being posted on our website. Your continued use of the website signifies your acceptance of the updated terms.
          </p>

          <h2 className="text-3xl font-semibold text-white pt-8">Contact Us</h2>
          <p className="text-lg">
            If you have any questions or concerns regarding these terms, please reach out to us through the <a href='/contact-us' className="text-purple-500">Contact Us</a> section of our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
